// Generate a Random Color

let ColorArr = [];
const RandomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
    // console.log(color);
  }
  // console.log(ColorArr);
  // for (let i = 1; i < ColorArr.length; i++) {
  //   for (let j = 0; j < i; j++) {
  //     if (ColorArr[i] < ColorArr[j]) {
  //       let temp;
  //       temp = ColorArr[i];
  //       ColorArr[i] = ColorArr[j];
  //       ColorArr[j] = temp;
  //     } else {
  //       console.log("colour already Exist");
  //     }
  //   }
  // }

  if (ColorArr.includes(color)) {
    console.log("already Exists");
  } else {
    ColorArr.push(color);
  }

  return color;
};

// console.log("www", ColorArr);

console.log(RandomColor());
let IntervalId;
const startChangingColor = function () {
  const changeColor = function () {
    if (IntervalId) {
      document.body.style.backgroundColor = RandomColor();
    }
  };
  IntervalId = setInterval(changeColor, 100);
};
const stopChangingColor = function () {
  clearInterval(IntervalId);
  IntervalId = null;
};

document
  .querySelector("#start")
  .addEventListener("click", startChangingColor, false);
document
  .querySelector("#stop")
  .addEventListener("click", stopChangingColor, false);
