
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ 
			output=output+this.id;
			printOutput(output);
		}
	});
}

var addOperator = document.getElementById("add");
        addOperator.addEventListener('click', function(){
            var output = getOutput();
            var history = getHistory();

            if(output != "" || history != ""){
                output = output == "" ? output : reverseNumberFormat(output);
                history = history + output + '+';
                printHistory(history);
                printOutput("");
            }
});

var addOperator = document.getElementById("subtract");
        addOperator.addEventListener('click', function(){
            var output = getOutput();
            var history = getHistory();

            if(output != "" || history != ""){
                output = output == "" ? output : reverseNumberFormat(output);
                history = history + output + '-';
                printHistory(history);
                printOutput("");
            }
});

var multipleOperator = document.getElementById("multiple");
        multipleOperator.addEventListener('click', function(){
            var output = getOutput();
            var history = getHistory();

            if(output != "" || history != ""){
                output = output == "" ? output : reverseNumberFormat(output);
                history = history + output + '*';
                printHistory(history);
                printOutput("");
            }
});

var divideOperator = document.getElementById("divide");
    divideOperator.addEventListener('click', function(){
            var output = getOutput();
            var history = getHistory();

            if(output != "" || history != ""){
                output = output == "" ? output : reverseNumberFormat(output);
                history = history + output + '/';
                printHistory(history);
                printOutput("");
            }
});

var modulusOperator = document.getElementById("modulus");
        modulusOperator.addEventListener('click', function(){
            var output = getOutput();
            var history = getHistory();

            if(output != "" || history != ""){
                output = output == "" ? output : reverseNumberFormat(output);
                history = history + output + '%';
                printHistory(history);
                printOutput("");
            }
});

var dotOperator = document.getElementById("dot");
    dotOperator.addEventListener('click', function(){
            var output = getOutput();
            var history = getHistory();

            if(output != "" || history != ""){
                output = output == "" ? output : reverseNumberFormat(output);
                history = history + output + '.';
                printHistory(history);
                printOutput("");
            }
});

var equalOperator = document.getElementById("equal");
        equalOperator.addEventListener('click', function(){
            var output = getOutput();
            var history = getHistory();

            if(output != "" && history != ""){
                output = output == "" ? output : reverseNumberFormat(output);
                history = history + output;
                var results = eval(history);
                printOutput(results);
                printHistory("");
            }
});

var backspaceOperator = document.getElementById("backspace");
        backspaceOperator.addEventListener('click', function(){
            var output = reverseNumberFormat(getOutput()).toString();
            if(output){
                output = output.substring(0, output.length - 1);
                printOutput(output);
            }
});

var clearOperator = document.getElementById("clear");
        clearOperator.addEventListener('click', function(){
            printHistory("");
            printOutput("");
});

function getHistory(){
	return document.getElementById("history-value").innerText;
}

function printHistory(num){
	document.getElementById("history-value").innerText=num;
}

function getOutput(){
	return document.getElementById("result").value;
}

function printOutput(num){
	if(num==""){
		document.getElementById("result").value = num;
	}
	else{
		document.getElementById("result").value = getFormattedNumber(num);
	}	
}

function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}

function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}

