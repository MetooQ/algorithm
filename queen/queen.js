function find(arr, row){
	var flag;
	for(var i = 1; i<9; i++){  //从第i列开始试
		flag = 0;
		
		for(var j = 0; j<row; j++){ //第j行
			if(i == arr[j]){
				//相同列
				flag = 1;
			}
			if((row - j) == (i - arr[j])){
				//正对角线
				flag = 1;
			}
			if((row - j) == (arr[j]) - i){
				//反对角线
				flag = 1;
			}
		}
		
		if(flag == 0){
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
	var arr = [0,0,0,0,0,0,0,0]; //下标表示行，值表示列
	for(var i = 1; i<9; i++){
		arr[0] = i;
		find(arr,1);
	}
}
var num = 0;
sumF();
console.log(num);  //92