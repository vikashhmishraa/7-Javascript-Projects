const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

console.log(button);

button.forEach(function (button) {
  console.log(button);

  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target.id);
    if (e.target.id == "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "green") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "purple") {
      body.style.backgroundColor = "rgb(60, 31, 134)";
    }
  });
});
