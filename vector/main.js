function vector(str){
	var arr = str.split(" ");
	var len = arr.length;
	var result =[];
	for(var i = 0; i<len; i++){
		var k = 1;
		for(var j = i+1; j<len; j++){
			if(arr[i] === arr[j]){
				k++;
				arr.splice(j,1);
				len--;
			}
		}
		result[i] = k;
	}
	
	console.log(result.sort());
}


//object map
function objVector(str){
	var arr = str.split(" ");
	var obj = {};
	for(var i = 0;i<arr.length;i++){
		var value = 0;
		var key = arr[i];
		
		value = obj[key] ? obj[key] + 1 : 1;
		
		obj[key] = value;
	}
	var resultArr = [];
	for(var a in obj){
		resultArr.push(obj[a]);
	}
	resultArr.sort();
	var result = resultArr.join(" ");
	console.log(result);
}
objVector("b abc b a a");