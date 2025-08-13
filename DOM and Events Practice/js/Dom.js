// Question 1: The following three questions are based on the two paragraphs under the
// section which says "For Question 1" in the index.html file.
// 1.1 Select the element with an id of "sample1".
// 1.2 Print the element itself on the console upon page refresh.
// 1.3 Print the content of the element on the console upon page refresh.

   // const elemen = document.getElementById("sample1");
    
 
   
  const element = document.getElementById("sample1");
  console.log(element); // Logs the entire element
  console.log(element.textContent); // Logs just the text inside

// Question 2: The following questions are based on the HTML code found under the
// section labeled "For question 2".
// 2.1 Select the element with an ID of "techCompanies" and display it on your
// console. (Do not use "querySelector" for this question)
// 2.2 Use "querySelector" to select the element with an ID of "techCompanies"
// and display it on your console.
// 2.3 How many tech companies are listed under the ul element with an id of
// "techCompanies"? Use "querySelectorAll" to count the total.
//2.4 Select all elements with a class name of "red" and display them on the
// console. Use both "querySelectorAll" and "getElementByClass"
// 2.5 Create a new li HTML element with a content of "Facebook" and display it
// on console
// 2.6 Give the newly created element a class of "blue" using JavaScript
// 2.7 Append the newly created element next to the the "Sony" li element
// 2.8 How many of the tech companies are labeled blue? Find the result
// using JavaScript and display the result inside the "blueCompanies" div

  // 2.1 Select the element with an ID of "techCompanies" and display it on your
  // console. (Do not use "querySelector" for this question)
  const techList = document.getElementById("techCompanies");
  console.log(techList); // Logs the entire <ul> element
  // 2.2 Use "querySelector" to select the element with an ID of "techCompanies"
  // and display it on your console.
  const techListt = document.querySelector("#techCompanies");
  console.log(techListt);
  // 2.3How many tech companies are listed under the ul element with an id of
  // "techCompanies"? Use "querySelectorAll" to count the total.
   const count = document.querySelectorAll("#techCompanies li")
   console.log(count.length);
   //2.4 Select all elements with a class name of "red" and display them on the
// console. Use both "querySelectorAll" and "getElementByClass"
  const redElementsQuery = document.querySelectorAll(".red");
  console.log("Using querySelectorAll:");
  console.log(redElementsQuery);

  // Using getElementsByClassName
  const redElementsGet = document.getElementsByClassName("red");
  console.log("Using getElementsByClassName:");
  console.log(redElementsGet);
  
  // 2.5 Create a new li HTML element with a content of "Facebook" and display it
// on console
  // 1. Create the new <li> element
  const newItem = document.createElement("li");
  console.log(newItem);
  newItem.textContent = "Facebook";
// 2.6 Give the newly created element a class of "blue" using JavaScript
  // Give it a class of "blue"
  newItem.classList.add("blue");
  // 2.7 Append the newly created element next to the the "Sony" li element
  // Append it next to the "Sony" <li> element
  const sonyItem = document.querySelector("#techCompanies li:last-child");
  sonyItem.parentNode.insertBefore(newItem, sonyItem.nextSibling);//correct method for inserting elements 

  // 2.8 Count how many companies are labeled "blue"
  const blueCompanies = document.getElementsByClassName("blue");
 
  console.log("Number of blue companies:", blueCompanies.length);//blueCompanies.length
  

  //console.log("Number of blue-labeled tech companies:", blueCompaniess.length);

  const blueItems = document.querySelectorAll("#techCompanies .blue");
     const blueCompaniesDiv = document.getElementById("blueCompanies");
     
       blueCompaniesDiv.innerHTML = `<p>Blue companies count:<br>  ${blueItems.length}</p>`;
//        Question 3:
// Change the background color of the page to light-blue (#99ecff) when clicked on the text
// that says "Yes". If there is a background color set already, change it to none when clicked
// on "No"


function setBlueBackground() {
  document.body.style.backgroundColor = "#99ecff";
}

function resetBackground() {
  document.body.style.backgroundColor = "";
}
const yesBtn = document.getElementById("yesBackground");
const noBtn = document.getElementById("noBackground");
if (yesBtn && noBtn) {
  yesBtn.addEventListener("click", setBlueBackground);
  noBtn.addEventListener("click", resetBackground);
}

  // const yesBtn = document.getElementById("yesBackground");
  // const noBtn = document.getElementById("noBackground");

  // if (yesBtn && noBtn) {
  //   yesBtn.addEventListener("click", function () {
  //     document.body.style.backgroundColor = "#99ecff";
  //   });
  //   noBtn.addEventListener("click", function () {
  //     document.body.style.backgroundColor = "transparent";
  //   });
  // }

  // Question 4
//   A form with two text fields is provided under the section which says "For question 4".
// Write a JavaScript code which takes the values of the two fields, checks if they are
// number values and calculate the sum of the two numbers.
// 1. Display the result on the console
// 2. Display the result underneath the form
// 3. If any of the numbers provided is not a number, display a message that says
// "Please enter numerical values only" underneath the form
  const form = document.getElementById("adder");
  const sumDiv = document.getElementById("sum");

  if (form && sumDiv) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const first = document.querySelector('[name="first-value"]').value.trim();
      const second = document.querySelector('[name="second-value"]').value.trim();
      const num1 =Number(first);
      const num2 = Number(second);

      if (first !== "" && second !== "" && !isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;
        console.log("Sum:", sum);
        sumDiv.textContent = `Sum: ${sum}`;
      } else {
        sumDiv.textContent = "Please enter numerical values only";
      }
    });
  }
//   // Imagine this is what the user typed in an input field
// let emailInput = "   tess@example.com   ";
// let passwordInput = "   secret123   ";

// // Clean it up using trim()
// let cleanedEmail = emailInput.trim();
// let cleanedPassword = passwordInput.trim();

// // Check if cleaned inputs are valid
// if (cleanedEmail === "" || cleanedPassword === "") {
//   console.log("Please fill in all fields.");
// } else {
//   console.log("Logging in with:", cleanedEmail);
// }
//});
//const element = document.querySelectorAll("p");
//console.log("Content:", element.textContent);

// The Difference Between an HTMLCollection and a NodeList
// A NodeList and an HTMLcollection is very much the same thing.

// Both are array-like collections (lists) of nodes (elements) extracted from a document. The nodes can be accessed by index numbers. The index starts at 0.

// Both have a length property that returns the number of elements in the list (collection).

// An HTMLCollection is a collection of document elements.

// A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).

// HTMLCollection items can be accessed by their name, id, or index number.

// NodeList items can only be accessed by their index number.

// An HTMLCollection is always a live collection. Example: If you add a <li> element to a list in the DOM, the list in the HTMLCollection will also change.

// A NodeList is most often a static collection. Example: If you add a <li> element to a list in the DOM, the list in NodeList will not change.

// The getElementsByClassName() and getElementsByTagName() methods return a live HTMLCollection.

// The querySelectorAll() method returns a static NodeList.

// The childNodes property returns a live NodeList.