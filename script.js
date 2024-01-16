const inputBtn = document.querySelectorAll('input[type="button"]');
const display = document.querySelector("input[name='display']");

inputBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.value);
    if (btn.value !== "=") {
      if (btn.value !== "AC") {
        display.value += btn.value;
      } else {
        display.value = "";
      }
      if (btn.value == "DEL") return (display.value = display.value.toString().slice(0, -4));
    } else {
      display.value = eval(display.value);
    }
  });
});
