    // ===== Utilities =====
    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => document.querySelectorAll(sel);
    const fmtTime = (d) => new Date(d).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second:'2-digit' });
    const fmtDate = (d) => new Date(d).toLocaleDateString();
    const fmtHM = (sec) => {
      const h = Math.floor(sec / 3600);
      const m = Math.floor((sec % 3600) / 60);
      const s = Math.floor(sec % 60);
      return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    };
    const toast = new bootstrap.Toast($('#toast'));
    const showToast = (msg) => { $('#toastBody').innerText = msg; toast.show(); };

    // ===== Storage =====
    const LS_KEYS = { employees: 'tt_employees', events: 'tt_events', settings: 'tt_settings', credentials: 'tt_webauthn_reg' };
    const load = (k, def) => JSON.parse(localStorage.getItem(k) || JSON.stringify(def));
    const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));

    // ===== Data =====
    let employees = load(LS_KEYS.employees, [
      { id: crypto.randomUUID(), name: 'Alex Morgan', role: 'Design', status: 'out', lastIn: null, totalToday: 0, onBreak: false },
      { id: crypto.randomUUID(), name: 'Sam Cohen', role: 'Engineering', status: 'out', lastIn: null, totalToday: 0, onBreak: false },
      { id: crypto.randomUUID(), name: 'Nia Patel', role: 'Marketing', status: 'out', lastIn: null, totalToday: 0, onBreak: false }
    ]);
    let events = load(LS_KEYS.events, []); // {id, employeeId, type:'in'|'out'|'break-start'|'break-end', ts, job, note, durationSec?}
    let settings = load(LS_KEYS.settings, { requireAuth: false, demoMode: true });

    // ===== WebAuthn (Demo) =====
    const randomChallenge = (len=32) => {
      const a = new Uint8Array(len);
      crypto.getRandomValues(a); return a;
    };
    async function registerWebAuthn() {
      try {
        const cred = await navigator.credentials.create({
          publicKey: {
            challenge: randomChallenge(),
            rp: { name: 'TimeTrack Pro' },
            user: { id: randomChallenge(16), name: 'user@example.com', displayName: 'TimeTrack User' },
            pubKeyCredParams: [{ alg: -7, type: 'public-key' }, { alg: -257, type: 'public-key' }],
            authenticatorSelection: { authenticatorAttachment: 'platform', userVerification: 'required' },
            timeout: 60000,
          }
        });
        if (cred) {
          save(LS_KEYS.credentials, { id: cred.id, type: cred.type });
          showToast('Credential registered (demo). In production, send to server.');
        }
      } catch (e) {
        showToast('Registration failed or not supported: ' + e.message);
      }
    }
    async function authenticateWebAuthn() {
      if (!settings.requireAuth) return true; // bypass when not required
      if (settings.demoMode && !('credentials' in navigator)) return true;
      try {
        const allow = load(LS_KEYS.credentials, null);
        const publicKey = {
          challenge: randomChallenge(),
          userVerification: 'required',
        };
        if (allow?.id) publicKey.allowCredentials = [{ id: new TextEncoder().encode(allow.id), type: 'public-key' }];
        const assertion = await navigator.credentials.get({ publicKey });
        if (assertion) { showToast('Authenticated with platform authenticator.'); return true; }
      } catch (e) {
        if (settings.demoMode) { showToast('Auth bypassed (demo mode).'); return true; }
        showToast('Authentication failed: ' + e.message);
        return false;
      }
      return false;
    }

    // ===== UI Builders =====
    function refreshEmployeeSelects() {
      const opts = employees.map(e => `<option value="${e.id}">${e.name}</option>`).join('');
      $('#employeeSelect').innerHTML = opts;
      $('#filterEmployee').innerHTML = `<option value="all">All Employees</option>` + opts;
    }
    function refreshEmpTable() {
      const tbody = $('#empTable');
      tbody.innerHTML = employees.map((e, i) => `
        <tr>
          <td>${i+1}</td>
          <td>${e.name}</td>
          <td>${e.role || ''}</td>
          <td>${e.status === 'in' ? '<span class="badge text-bg-success">In</span>' : '<span class="badge text-bg-secondary">Out</span>'}${e.onBreak ? ' <span class="badge text-bg-warning">Break</span>' : ''}</td>
          <td class="text-end">
            <button class="btn btn-sm btn-outline-light" data-action="remove" data-id="${e.id}"><i class="bi bi-x"></i></button>
          </td>
        </tr>
      `).join('');
      tbody.querySelectorAll('button[data-action="remove"]').forEach(btn => btn.addEventListener('click', () => removeEmployee(btn.dataset.id)));
    }
    function refreshLiveTable() {
      const tbody = $('#liveTable');
      const now = Date.now();
      tbody.innerHTML = employees.map(e => {
        let elapsed = 0;
        if (e.status === 'in' && e.lastIn) elapsed = Math.floor((now - e.lastIn) / 1000);
        const started = e.lastIn ? `${fmtDate(e.lastIn)} ${fmtTime(e.lastIn)}` : '-';
        return `
          <tr>
            <td>${e.name}</td>
            <td>${e.onBreak ? '<span class="badge text-bg-warning">Break</span>' : (e.status === 'in' ? '<span class="badge text-bg-success">In</span>' : '<span class="badge text-bg-secondary">Out</span>')}</td>
            <td>${started}</td>
            <td class="clock">${fmtHM(elapsed)}</td>
            <td class="clock">${fmtHM(e.totalToday || 0)}</td>
          </tr>`;
      }).join('');
    }

    // ===== App Logic =====
    function addEmployee(name, role) {
      if (!name) return showToast('Enter a name');
      employees.push({ id: crypto.randomUUID(), name, role, status: 'out', lastIn: null, totalToday: 0, onBreak: false });
      save(LS_KEYS.employees, employees);
      refreshEmployeeSelects(); refreshEmpTable(); refreshLiveTable();
      showToast(`Added ${name}`);
    }
    function removeEmployee(id) {
      employees = employees.filter(e => e.id !== id);
      save(LS_KEYS.employees, employees);
      refreshEmployeeSelects(); refreshEmpTable(); refreshLiveTable();
      showToast('Employee removed');
    }

    function isSameDay(a, b) {
      const d1 = new Date(a), d2 = new Date(b);
      return d1.getFullYear()===d2.getFullYear() && d1.getMonth()===d2.getMonth() && d1.getDate()===d2.getDate();
    }
    function resetTodayTotalsIfNewDay() {
      const today = new Date();
      const lastEvent = events.at(-1);
      if (!lastEvent) return; // nothing to compare
      if (!isSameDay(today, lastEvent.ts)) {
        employees.forEach(e => e.totalToday = 0);
        save(LS_KEYS.employees, employees);
      }
    }

    async function clockAction() {
      const empId = $('#employeeSelect').value;
      const job = $('#jobCode').value.trim();
      const note = $('#note').value.trim();
      const emp = employees.find(e => e.id === empId);
      if (!emp) return;
      if (!(await authenticateWebAuthn())) return;

      const now = Date.now();
      if (emp.status === 'out') {
        emp.status = 'in';
        emp.lastIn = now;
        emp.onBreak = false;
        events.push({ id: crypto.randomUUID(), employeeId: emp.id, type: 'in', ts: now, job, note });
        showToast(`${emp.name} clocked IN at ${fmtTime(now)}`);
      } else if (emp.onBreak) {
        // resuming from break
        emp.onBreak = false;
        events.push({ id: crypto.randomUUID(), employeeId: emp.id, type: 'break-end', ts: now, job, note });
        showToast(`${emp.name} ended Break at ${fmtTime(now)}`);
      } else {
        // clock out
        emp.status = 'out';
        const duration = Math.max(0, Math.floor((now - (emp.lastIn || now)) / 1000));
        emp.totalToday = (emp.totalToday || 0) + duration;
        events.push({ id: crypto.randomUUID(), employeeId: emp.id, type: 'out', ts: now, job, note, durationSec: duration });
        emp.lastIn = null;
        showToast(`${emp.name} clocked OUT at ${fmtTime(now)} (Session ${fmtHM(duration)})`);
      }
      save(LS_KEYS.employees, employees);
      save(LS_KEYS.events, events);
      updateClockButton();
      refreshLiveTable();
      buildReport();
    }

    async function breakAction() {
      const empId = $('#employeeSelect').value;
      const job = $('#jobCode').value.trim();
      const note = $('#note').value.trim();
      const emp = employees.find(e => e.id === empId);
      if (!emp) return;
      if (emp.status === 'out') return showToast('Cannot start a break while OUT.');
      if (!(await authenticateWebAuthn())) return;
      const now = Date.now();
      if (!emp.onBreak) {
        emp.onBreak = true;
        events.push({ id: crypto.randomUUID(), employeeId: emp.id, type: 'break-start', ts: now, job, note });
        showToast(`${emp.name} started Break at ${fmtTime(now)}`);
      } else {
        emp.onBreak = false;
        events.push({ id: crypto.randomUUID(), employeeId: emp.id, type: 'break-end', ts: now, job, note });
        showToast(`${emp.name} ended Break at ${fmtTime(now)}`);
      }
      save(LS_KEYS.employees, employees);
      save(LS_KEYS.events, events);
      refreshLiveTable();
      buildReport();
    }

    function updateClockButton() {
      const emp = employees.find(e => e.id === $('#employeeSelect').value);
      if (!emp) return;
      $('#btnClock').innerHTML = emp.status === 'out' ? '<i class="bi bi-play-circle"></i> Clock In' : '<i class="bi bi-stop-circle"></i> Clock Out';
      $('#btnBreak').disabled = emp.status === 'out';
    }

    // ===== Reporting =====
    let chartHours, chartDaily;

    function buildReport() {
      const from = $('#fromDate').value ? new Date($('#fromDate').value) : new Date(new Date().setDate(new Date().getDate()-6));
      const to = $('#toDate').value ? new Date($('#toDate').value) : new Date();
      const empFilter = $('#filterEmployee').value || 'all';
      const startMs = new Date(from.getFullYear(), from.getMonth(), from.getDate()).getTime();
      const endMs = new Date(to.getFullYear(), to.getMonth(), to.getDate(), 23,59,59,999).getTime();

      const filtered = events.filter(ev => ev.ts >= startMs && ev.ts <= endMs && (empFilter==='all' || ev.employeeId === empFilter));

      // Table
      const tbody = $('#reportTable');
      tbody.innerHTML = filtered.slice().reverse().map(ev => {
        const emp = employees.find(e => e.id === ev.employeeId);
        const duration = ev.durationSec ? fmtHM(ev.durationSec) : '';
        return `<tr>
          <td>${fmtDate(ev.ts)}</td>
          <td>${emp?.name || '—'}</td>
          <td>${ev.type}</td>
          <td>${fmtTime(ev.ts)}</td>
          <td class="clock">${duration}</td>
          <td>${ev.job||''}</td>
          <td>${ev.note||''}</td>
        </tr>`;
      }).join('');

      // Aggregations
      const byEmployee = {};
      const byDay = {};
      filtered.forEach(ev => {
        if (ev.type === 'out' && ev.durationSec) {
          byEmployee[ev.employeeId] = (byEmployee[ev.employeeId] || 0) + ev.durationSec;
          const key = new Date(ev.ts).toDateString();
          byDay[key] = (byDay[key] || 0) + ev.durationSec;
        }
      });

      const empLabels = Object.keys(byEmployee).map(id => employees.find(e => e.id===id)?.name || id);
      const empData = Object.values(byEmployee).map(v => Math.round(v/3600*100)/100);
      const dayLabels = Object.keys(byDay);
      const dayData = Object.values(byDay).map(v => Math.round(v/3600*100)/100);

      // Charts
      const hoursCtx = $('#chartHours');
      const dailyCtx = $('#chartDaily');
      if (chartHours) chartHours.destroy();
      if (chartDaily) chartDaily.destroy();
      chartHours = new Chart(hoursCtx, { type: 'bar', data: { labels: empLabels, datasets: [{ label: 'Hours by Employee', data: empData }] }, options: { responsive: true, plugins: { legend: { display: true } } } });
      chartDaily = new Chart(dailyCtx, { type: 'line', data: { labels: dayLabels, datasets: [{ label: 'Hours by Day', data: dayData }] }, options: { responsive: true, plugins: { legend: { display: true } } } });
    }

    function exportCsv() {
      const rows = [['Date','Employee','Type','Time','Duration (sec)','Job','Note']];
      const empMap = Object.fromEntries(employees.map(e => [e.id, e.name]));
      events.forEach(ev => rows.push([
        fmtDate(ev.ts), empMap[ev.employeeId]||'', ev.type, fmtTime(ev.ts), ev.durationSec||'', ev.job||'', ev.note||''
      ]));
      const csv = rows.map(r => r.map(x => '"'+String(x).replaceAll('"','""')+'"').join(',')).join('\n');
      const blob = new Blob([csv], {type: 'text/csv'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = 'timetrack-export.csv'; a.click();
      URL.revokeObjectURL(url);
    }

    // ===== Live Ticker & Top Clock =====
    setInterval(() => {
      $('#topClock').innerText = new Date().toLocaleString();
      refreshLiveTable();
    }, 1000);

    // ===== Event Handlers =====
    $('#btnAddEmp').addEventListener('click', () => addEmployee($('#empName').value.trim(), $('#empRole').value.trim()));
    $('#btnClock').addEventListener('click', clockAction);
    $('#btnBreak').addEventListener('click', breakAction);
    $('#employeeSelect').addEventListener('change', updateClockButton);
    $('#btnRunReport').addEventListener('click', buildReport);
    $('#btnExportCsv').addEventListener('click', exportCsv);
    $('#clearToday').addEventListener('click', (e) => { e.preventDefault(); employees.forEach(e => { e.totalToday = 0; e.lastIn = null; e.status='out'; e.onBreak=false; }); save(LS_KEYS.employees, employees); refreshLiveTable(); showToast('Cleared today (demo)'); });
    $('#btnRegisterWebAuthn').addEventListener('click', registerWebAuthn);
    $('#btnTestWebAuthn').addEventListener('click', async () => { const ok = await authenticateWebAuthn(); if (ok) showToast('Auth success.'); });
    $('#requireAuth').addEventListener('change', (e)=>{ settings.requireAuth = e.target.checked; save(LS_KEYS.settings, settings); });
    $('#demoMode').addEventListener('change', (e)=>{ settings.demoMode = e.target.checked; save(LS_KEYS.settings, settings); });
    $('#btnAuth').addEventListener('click', async () => { const ok = await authenticateWebAuthn(); if (ok) showToast('Authenticated.'); });

    // ===== Init =====
    (function init(){
      // Dates default: last 7 days
      const to = new Date();
      const from = new Date(); from.setDate(to.getDate()-6);
      $('#toDate').valueAsDate = to; $('#fromDate').valueAsDate = from;
      // Settings
      $('#requireAuth').checked = settings.requireAuth; $('#demoMode').checked = settings.demoMode;
      // Lists
      refreshEmployeeSelects(); refreshEmpTable(); updateClockButton();
      resetTodayTotalsIfNewDay();
      refreshLiveTable(); buildReport();
      showToast('Ready. Add employees or start clocking.');
    })();