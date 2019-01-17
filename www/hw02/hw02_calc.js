(function(){
	let currentTotal = 0;
	let input = 0;
	let decimal = 0;
	let operation = "";

	function updateDisplay(number) {
		document.getElementById("display").innerText = number;
	}

	function evaluateExpression() {
		switch (operation) { 
		case "x":
			currentTotal *= input;
			break;
		case "/":
			currentTotal /= input;
			break;
		case "-":
			currentTotal -= input;
			break;
		default:
			currentTotal += input;
		}
		input = 0;
		decimal = 0;
		operation = "";
		updateDisplay(currentTotal);
	}

	function clearDisplay() {
		input = 0;
		currentTotal = 0;
		operation = "";
		decimal = 0;
		updateDisplay(0);
	}

	function inputNumber(number) {
		if (decimal > 0) {
			input += (number / Math.pow(10, decimal));
			decimal++;
		}
		else {
			input = input * 10 + number;
		}
		updateDisplay(input);
	}

	function recordOperation(op) {
		evaluateExpression();
		operation = op;
	}	

	function includeDecimal() {
		if (decimal == 0) {
			decimal = 1;
		}
	}

	// initialize the event listeners here
	let buttons = document.getElementsByClassName("number");
       	let operations = document.getElementsByClassName("operation");
       	for (let i = 0; i < buttons.length; i++) {
               	buttons[i].addEventListener("click", function() {inputNumber(Number(buttons[i].innerText));});
       	}
       	for (let i = 0; i < operations.length; i++) {
               	operations[i].addEventListener("click", function() {recordOperation(operations[i].innerText)});
       	}
       	document.getElementById("clear").addEventListener("click", function() {clearDisplay();});
       	document.getElementById("evaluate").addEventListener("click", function() {evaluateExpression();});
	document.getElementById("decimal").addEventListener("click", function() {includeDecimal();});
})();
