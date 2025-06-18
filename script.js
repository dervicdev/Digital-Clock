const time = document.getElementById("time");
setInterval(() => {
  const now = new Date();
  let hr = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  let period = hr >= 12 ? "PM" : "AM";

  const formattedTime =
    [
      hr < 10 ? "0" + hr : hr,
      min < 10 ? "0" + min : min,
      sec < 10 ? "0" + sec : sec,
    ].join(":") +
    " " +
    period;

  time.textContent = formattedTime;
}, 1000);
