let result = "";

function addCharacter(char) {
  result += char;
  document.getElementById("result").value = result;
}

function Result() {
  try {
    result = eval(result).toFixed(2);
    document.getElementById("result").value = result;
  } catch (err) {
    document.getElementById("result").value = "Error";
  }
}

function clearResult() {
  result = "";
  document.getElementById("result").value = result;
}

function deleteNumber() {
  result = result.slice(0, -1);
  document.getElementById("result").value = result;
}
