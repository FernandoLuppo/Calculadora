let result = document.getElementById("result");

function insertNum(num) {
  result.innerHTML += num;
}

function insertOperation(operation) {
  if (result.innerHTML.includes(".") && operation == ".") {return;} 
  else if (result.innerHTML.includes("+") && operation == "+") {return;} 
  else if (result.innerHTML.includes("-") && operation == "-") {return;} 
  else if (result.innerHTML.includes("*") && operation == "*") {return;} 
  else if (result.innerHTML.includes("/") && operation == "/") {return;}

  result.innerHTML += operation;
}

function clearAll(c) {
  result.innerHTML = c;
  afterResult.innerHTML = c;
}

function del() {
  let resultDel = result.innerHTML;
  result.innerHTML = resultDel.substring(0, resultDel.length -1);
}

function calc() {
  if (result.innerHTML) {
    result.innerHTML = eval(result.innerHTML);
  } else {
    ("ERRO");
  }
}
