let timer;

function debounce(fun, wait) {
  return function () {
    clearTimeout(timer);
    timer = setTimeout(fun, wait);
  };
}

let logText = debounce(function () {
  console.log("@SN writing stopped");
}, 1000);

document.querySelector("input").addEventListener("keyup", logText);
