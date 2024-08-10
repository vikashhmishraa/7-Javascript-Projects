const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height == "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give a Valid Height";
  }
  if (weight == "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please give a Valid Weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>Your BMI is ${bmi}</span>`;
  }
});

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const height = parseInt(document.querySelector("#height").value);
//   const weight = parseInt(document.querySelector("#weight").value);
//   const results = document.querySelector("#results");

//   // Reset the results content every time form is submitted
//   results.innerHTML = "";

//   // Validate height
//   if (height == "" || height <= 0 || isNaN(height)) {
//     results.innerHTML += "Please provide a valid height.<br>"; // Append error
//   }

//   // Validate weight
//   if (weight == "" || weight <= 0 || isNaN(weight)) {
//     results.innerHTML += "Please provide a valid weight.<br>"; // Append error
//   }

//   // Calculate and display BMI if height and weight are valid
//   if (!isNaN(height) && height > 0 && !isNaN(weight) && weight > 0) {
//     const bmi = (weight / (height / 100) ** 2).toFixed(2);
//     results.innerHTML += `<span>Your BMI is ${bmi}</span>`; // Display result
//   }
// });
