document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("Parent clicked");
  },
  true
); // Capturing phase

document.getElementById("child").addEventListener(
  "click",
  () => {
    console.log("Child clicked");
  },
  true
); // Capturing phase

document.getElementById("grandParent").addEventListener("click", () => {
  console.log("GrandParent clicked");
});
