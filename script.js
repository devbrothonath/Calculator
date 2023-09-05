const display = document.querySelector(".calculator-screen");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "backspace") {
      let string = display.value.toString();
      display.value = string.slice(0, -1);
    } else if (item.id == "reset") {
      display.value = "";
    } else if (display.value != "" && item.id == "equal") {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "error";
      }
    } else if (display.value == "" && item.id == "equal") {
      display.value = "empty!";
    } else {
      display.value = display.value + item.value;
    }
  };
});
