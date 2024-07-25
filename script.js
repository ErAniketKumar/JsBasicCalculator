const operations = document.querySelectorAll(".operation");
const digit = document.querySelectorAll(".digit");
const display = document.querySelector(".display");

let inputVal = "";
let isNew = false;

digit.forEach((number) => {
	number.addEventListener("click", (event) => {
		inputVal += event.target.innerHTML;
		display.innerHTML = inputVal;
	});
});

operations.forEach((opeartion) => {
	opeartion.addEventListener("click", (event) => {
		let opr = event.target.innerHTML;
		if (opr == "AC") {
			display.innerHTML = "";
			inputVal = "";
		} else if (opr == "DEL") {
			let delVal = display.innerHTML;
			display.innerHTML = delVal.replace(delVal[delVal.length - 1], "");
			inputVal = display.innerHTML;
		} else if (opr == "=") {
			let result = eval(inputVal);
			display.innerHTML = result;
            inputVal = result;
		} else {
			inputVal += event.target.innerHTML;
			display.innerHTML = inputVal;
		}
	});
});
