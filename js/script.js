const currentYear = new Date();
const yearElem = document.querySelector(".year");
const hamLabel = document.getElementById("ham-label");
const checkBox = document.getElementById("hamburger");
const main = document.querySelector("main");

yearElem.innerText = currentYear.getFullYear();

// Change hamburger menu bars to 'X'
checkBox.addEventListener("click", () => {
  if (checkBox.checked) {
    hamLabel.innerHTML = "X";
    hamLabel.style.justifyContent = "center";
    main.style.cssText = "border-radius: 0;";
  } else {
    hamLabel.innerHTML = "&#9776;";
    hamLabel.style.justifyContent = "flex-start";
    main.style.cssText = "border-radius: 0.5rem 0.5rem 0 0;";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768 || checkBox.checked) {
    main.style.cssText = "border-radius: 0;";
  } else if (window.innerWidth <= 768 && !checkBox.checked) {
    main.style.cssText = "border-radius: 0.5rem 0.5rem 0 0;";
  }
});
