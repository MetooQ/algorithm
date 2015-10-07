var oper = {
		'+':0,
		'-':0,
		'*':1,
		'/':1,
		'^':2,
		'(':3,
		')':4
	};

function houxu(s){     //将中序变成后序
	
	var str = [];
	var operStack = [];
	var output = [];
	
	
	s = s.split(/([+\-*/^()])/); //用操作符分割
	for(var k = 0; k<s.length;k++){
		if(s[k]) str.push(s[k]);    //去掉空元素
	}
	
	console.log(str); //[ '(', '1', '+', '3', '/', '3', ')', '*', '2', '^', '3', '-', '10' ]
	
	
	for(var i = 0; i<str.length; i++){
		var a = str[i];
		if(oper[a] !== undefined ){  //运算符
			if(operStack.length === 0){
				operStack.push(a);
			}else{
				var top = operStack[operStack.length-1];
				if(oper[a] === 3){  //判断“（”,入栈
					operStack.push(a);
				}else if(oper[a] === 4){    //判断对应的“)”,将他们中间所有的运算符出栈
					while(oper[top] !== 3){							
						output.push(operStack.pop());
						top = operStack[operStack.length-1];
					}
					operStack.pop();
					top = operStack[operStack.length-1];
				}else{    
					while(oper[a]<=oper[top] && oper[top] !== 3){  //优先级高的先出栈
						output.push(operStack.pop());
						top = operStack[operStack.length-1];
					}
					operStack.push(a);										
				}
			}
		}else{
			output.push(str[i]);
		}
	}
	while(operStack.length != 0){    //剩余的依次出栈
		output.push(operStack.pop());
	}
	
	console.log(output);
	return output;
}

function cal(arr){  
	for(var i = 0;i<arr.length; i++){
		var a = arr[i];
		if(oper[a] != undefined){ //运算符
			var pre = parseInt(arr[i-2]);
			var next = parseInt(arr[i-1]);
			var result = 1;
			switch (a) {
				case "+":
					result = pre + next;
					break;
				case "-":
					result = pre - next;
					break;
				case "*":
					result = pre * next;
					break;
				case "/":
					result = pre / next;
					break;
				case "^":
					for(var j = 0; j<next;j++){
						result *= pre;
					}
					break;
				default:
					break;
			}
			arr.splice(i-2,3,result);    //两两计算
			i=0;
		}
	}
	
	console.log(arr);
}


var result = houxu("((1+3)/4)*2^3-5");
cal(result);


//[ '(', '(', '1', '+', '3', ')', '/', '4', ')', '*', '2', '^', '3', '-', '5' ]
//[ '1', '3', '+', '4', '/', '2', '3', '^', '*', '5', '-' ]
//[ 3 ]