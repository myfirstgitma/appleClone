// // Question 1: The following three questions are based on the two paragraphs under the
// // section which says "For Question 1" in the index.html file.
// // 1.1 Select the element with an id of "sample1".
// // 1.2 Print the element itself on the console upon page refresh.
// // 1.3 Print the content of the element on the console upon page refresh. 
// // Use a single DOMContentLoaded event listener to ensure all code runs after the DOM is ready.
// window.addEventListener("DOMContentLoaded", function () {
//   // Question 1
//   const element = document.getElementById("sample1");
//   if (element) {
//     console.log("Element:", element);
//     console.log("Content:", element.textContent);
//   }

//   // Question 2
//   const techList = document.getElementById("techCompanies");
//   if (techList) {
//     console.log("Using getElementById:", techList);

//     const techListQS = document.querySelector("#techCompanies");
//     console.log("Using querySelector:", techListQS);

//     const techItems = document.querySelectorAll("#techCompanies li");
//     console.log("Number of tech companies:", techItems.length);

//     const redElementsQS = document.querySelectorAll(".red");
//     console.log("Red elements (querySelectorAll):", redElementsQS);

//     const redElementsGCN = document.getElementsByClassName("red");
//     console.log("Red elements (getElementsByClassName):", redElementsGCN);

//     const facebookItem = document.createElement("li");
//     facebookItem.textContent = "Facebook";
//     console.log("New list item:", facebookItem);

//     facebookItem.classList.add("blue");

//     const sonyItem = Array.from(techItems).find(
//       (item) => item.textContent.trim() === "Sony"
//     );
//     if (sonyItem && sonyItem.parentNode) {
//       sonyItem.insertAdjacentElement("afterend", facebookItem);
//     } else {
//       // Fallback to append at the end if Sony is not found
//       techList.appendChild(facebookItem);
//     }

//     // Recalculate blue items after adding Facebook
//     const blueItems = document.querySelectorAll("#techCompanies .blue");
//     const blueCompaniesDiv = document.getElementById("blueCompanies");
//     if (blueCompaniesDiv) {
//       blueCompaniesDiv.innerHTML = `<p>Blue companies count: ${blueItems.length}</p>`;
//     }
//   }

//   // Question 3
//   const yesBtn = document.getElementById("yesBackground");
//   const noBtn = document.getElementById("noBackground");

//   if (yesBtn && noBtn) {
//     yesBtn.addEventListener("click", function () {
//       document.body.style.backgroundColor = "#99ecff";
//     });
//     noBtn.addEventListener("click", function () {
//       document.body.style.backgroundColor = "transparent";
//     });
//   }

//   // Question 4
//   const form = document.getElementById("adder");
//   const sumDiv = document.getElementById("sum");

//   if (form && sumDiv) {
//     form.addEventListener("submit", function (e) {
//       e.preventDefault();

//       const first = document.querySelector('[name="first-value"]').value.trim();
//       const second = document.querySelector('[name="second-value"]').value.trim();
//       const num1 = parseFloat(first);
//       const num2 = parseFloat(second);

//       if (first !== "" && second !== "" && !isNaN(num1) && !isNaN(num2)) {
//         const sum = num1 + num2;
//         console.log("Sum:", sum);
//         sumDiv.textContent = `Sum: ${sum}`;
//       } else {
//         sumDiv.textContent = "Please enter numerical values only";
//       }
//     });
//   }
// });
// const element = document.querySelectorAll("p");
// console.log("Content:", element.textContent);
console.log(document.querySelector("#sample1")); 