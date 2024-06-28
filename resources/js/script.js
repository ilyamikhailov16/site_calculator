function addDotIfNecessary(inputString) {
  let operators = ['+', '-', '*', '/'];
  let hasOperator = false;
  
  for (let i = 0; i < operators.length; i++) {
      if (inputString.includes(operators[i])) {
      hasOperator = true;
      let parts = inputString.split(operators[i]);
      let lastPart = parts[parts.length - 1];
  
      if (lastPart[0] === '0') {
          if (!lastPart.includes('.')) {
          inputString += '.';
          }
      } else if ('123456789'.includes(lastPart[0])) {
          if (!lastPart.includes('.')) {
          inputString += '.';
          }
      }
      }
  }
  
  if (!hasOperator) {
      if (inputString[0] === '0') {
      if (!inputString.includes('.')) {
          inputString += '.';
      }
      } else if ('123456789'.includes(inputString[0])) {
      if (!inputString.includes('.')) {
          inputString += '.';
      }
      }
  }
  
  return inputString;
  }
  
var click = 0;

function countSubstrings(str, substring) {
  const parts = str.split(substring);
  return parts.length - 1;
}

function conclusion(el) {
  scrnumes = document.getElementById("screen_nums");

  //первый клик
  if (
    click == 0 &&
    el.innerHTML != "." &&
    el.innerHTML != "/" &&
    el.innerHTML != "*" &&
    el.innerHTML != "+" &&
    el.innerHTML != "-"
  ) {
    click++;
    scrnumes.innerHTML = "";
  } else if (
    click == 0 &&
    (el.innerHTML == "/" ||
      el.innerHTML == "." ||
      el.innerHTML == "*" ||
      el.innerHTML == "+" ||
      el.innerHTML == "-")
  ) {
    click++;
    scrnumes.innerHTML += el.innerHTML;
  }

  //последующие клики

  //числа
  if (
    click >= 1 &&
    el.innerHTML != "=" &&
    el.innerHTML != "." &&
    el.innerHTML != "/" &&
    el.innerHTML != "*" &&
    el.innerHTML != "+" &&
    el.innerHTML != "-" &&
    scrnumes.innerHTML[0] != "0"
  ) {
    scrnumes.innerHTML += el.innerHTML;
  } else if (
    scrnumes.innerHTML[0] == "0" &&
    el.innerHTML != "." &&
    el.innerHTML != "=" &&
    el.innerHTML != "/" &&
    el.innerHTML != "*" &&
    el.innerHTML != "+" &&
    el.innerHTML != "-" &&
    scrnumes.innerHTML[1] != "." &&
    scrnumes.innerHTML[1] != "+" &&
    scrnumes.innerHTML[1] != "-" &&
    scrnumes.innerHTML[1] != "*" &&
    scrnumes.innerHTML[1] != "/"
  ) {
    scrnumes.innerHTML = "";
    scrnumes.innerHTML += el.innerHTML;
  } else if (
    scrnumes.innerHTML[0] == "0" &&
    el.innerHTML != "." &&
    el.innerHTML != "=" &&
    el.innerHTML != "+" &&
    el.innerHTML != "-" &&
    el.innerHTML != "/" &&
    el.innerHTML != "*" &&
    (scrnumes.innerHTML[1] == "/" ||
      scrnumes.innerHTML[1] == "." ||
      scrnumes.innerHTML[1] == "-" ||
      scrnumes.innerHTML[1] == "+" ||
      scrnumes.innerHTML[1] == "*")
  ) {
    scrnumes.innerHTML += el.innerHTML;
  }
  //плавающая точка
  if(el.innerHTML == ".") {
    scrnumes.innerHTML = addDotIfNecessary(scrnumes.innerHTML)
  } 
  
  // математические символы
  if (
    scrnumes.innerHTML.charAt(scrnumes.innerHTML.length - 1) != "*" &&
    scrnumes.innerHTML.charAt(scrnumes.innerHTML.length - 1) != "+" &&
    scrnumes.innerHTML.charAt(scrnumes.innerHTML.length - 1) != "-" &&
    countSubstrings(scrnumes.innerHTML, "/") == 0 &&
    scrnumes.innerHTML[0] == "0" &&
    el.innerHTML == "/"
  ) {
    scrnumes.innerHTML += el.innerHTML;
  } else if (
    scrnumes.innerHTML.charAt(scrnumes.innerHTML.length - 1) != "*" &&
    scrnumes.innerHTML.charAt(scrnumes.innerHTML.length - 1) != "+" &&
    scrnumes.innerHTML.charAt(scrnumes.innerHTML.length - 1) != "-" &&
    countSubstrings(scrnumes.innerHTML, "/") == 0 &&
    scrnumes.innerHTML[0] != "0" &&
    el.innerHTML == "/"
  ) {
    scrnumes.innerHTML += el.innerHTML;
  } else if (
    scrnumes.innerHTML.charAt(scrnumes.innerHTML.length - 1) != "*" &&
    scrnumes.innerHTML.charAt(scrnumes.innerHTML.length - 1) != "+" &&
    scrnumes.innerHTML.charAt(scrnumes.innerHTML.length - 1) != "-" &&
    countSubstrings(scrnumes.innerHTML, "/") > 0 &&
    scrnumes.innerHTML.charAt(scrnumes.innerHTML.length - 1) != "/" &&
    el.innerHTML == "/"
  ) {
    scrnumes.innerHTML += el.innerHTML;
  }

  if (
    scrnumes.innerHTML.charAt(scrnumes.innerHTML.length - 1) != "/" &&
    scrnumes.innerHTML.charAt(scrnumes.innerHTML.length - 1) != "+" &&
    scrnumes.innerHTML.charAt(scrnumes.innerHTML.length - 1) != "-" &&
    countSubstrings(scrnumes.innerHTML, "*") == 0 &&
    scrnumes.innerHTML[0] == "0" &&
    el.innerHTML == "*"
  ) {
    scrnumes.innerHTML += el.innerHTML;
  } else if (
    scrnumes.innerHTML.charAt(scrnumes.innerHTML.length - 1) != "/" &&
    scrnumes.innerHTML.charAt(scrnumes.innerHTML.length - 1) != "+" &&
    scrnumes.innerHTML.charAt(scrnumes.innerHTML.length - 1) != "-" &&
    countSubstrings(scrnumes.innerHTML, "*") == 0 &&
    scrnumes.innerHTML[0] != "0" &&
    el.innerHTML == "*"
  ) {
    scrnumes.innerHTML += el.innerHTML;
  } else if (
    scrnumes.innerHTML.charAt(scrnumes.innerHTML.length - 1) != "/" &&
    scrnumes.innerHTML.charAt(scrnumes.innerHTML.length - 1) != "+" &&
    scrnumes.innerHTML.charAt(scrnumes.innerHTML.length - 1) != "-" &&
    countSubstrings(scrnumes.innerHTML, "*") > 0 &&
    scrnumes.innerHTML.charAt(scrnumes.innerHTML.length - 1) != "*" &&
    el.innerHTML == "*"
  ) {
    scrnumes.innerHTML += el.innerHTML;
  }

  if (
    countSubstrings(scrnumes.innerHTML, "-") == 0 &&
    scrnumes.innerHTML[0] == "0" &&
    el.innerHTML == "-"
  ) {
    scrnumes.innerHTML += el.innerHTML;
  } else if (
    countSubstrings(scrnumes.innerHTML, "-") == 0 &&
    scrnumes.innerHTML[0] != "0" &&
    el.innerHTML == "-"
  ) {
    scrnumes.innerHTML += el.innerHTML;
  } else if (
    countSubstrings(scrnumes.innerHTML, "-") > 0 &&
    scrnumes.innerHTML.charAt(scrnumes.innerHTML.length - 1) != "-" &&
    el.innerHTML == "-"
  ) {
    scrnumes.innerHTML += el.innerHTML;
  }

  if (
    countSubstrings(scrnumes.innerHTML, "+") == 0 &&
    scrnumes.innerHTML[0] == "0" &&
    el.innerHTML == "+"
  ) {
    scrnumes.innerHTML += el.innerHTML;
  } else if (
    countSubstrings(scrnumes.innerHTML, "+") == 0 &&
    scrnumes.innerHTML[0] != "0" &&
    el.innerHTML == "+"
  ) {
    scrnumes.innerHTML += el.innerHTML;
  } else if (
    countSubstrings(scrnumes.innerHTML, "+") > 0 &&
    scrnumes.innerHTML.charAt(scrnumes.innerHTML.length - 1) != "+" &&
    el.innerHTML == "+"
  ) {
    scrnumes.innerHTML += el.innerHTML;
  }

  //равно
  if (el.innerHTML == "=" && scrnumes.innerHTML.includes(".")) {
    console.log(scrnumes.innerHTML);
    click = 0;
    scrnumes.innerHTML = eval(scrnumes.innerHTML).toFixed(1);
  } else  if (el.innerHTML == "=" && !scrnumes.innerHTML.includes(".")) {
    console.log(scrnumes.innerHTML);
    click = 0;
    scrnumes.innerHTML = eval(scrnumes.innerHTML);
  } 
}

function clean() {
  click = 0;
  scrnumes.innerHTML = "0";
}
