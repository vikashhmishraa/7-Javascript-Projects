const clock = document.getElementById("clock");

setInterval(function () {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let date = new Date();
  let dates = date.getDate();
  let month = months[date.getMonth()];
  let time = date.toLocaleTimeString();
  clock.innerHTML = `Date is ${dates}  ${month}  and time is ${time}`;
}, 1000);
