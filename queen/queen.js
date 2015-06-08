function find(arr, row){
	var temp;
	for(var i = 1; i<9; i++){  //从第二列开始试
		temp = 0;
		
		for(var j = 0; j<row; j++){ //第j行
			if(i == arr[j]){
				//相同列
				temp ++;
			}
			if((row - j) == (i - arr[j])){
				//正对角线
				temp ++;
			}
			if((row - j) == (arr[j]) - i){
				//反对角线
				temp ++;
			}
		}
		
		if(temp == 0){
			arr[row] = i;
			if(row == 7){
				num++;
			}				
			find(arr,row + 1);
			arr[row] = 0;
		}
	}
	
	return num;
		
}

function sumF(){
	var arr = [0,0,0,0,0,0,0,0];
	for(var i = 1; i<9; i++){
		arr[0] = i;
		find(arr,1);
	}
}
var num = 0;
sumF();
console.log(num);  //92