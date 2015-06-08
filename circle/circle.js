function circle(n,c){
	var index = 0;
	var arr = [];
	//init
	for(var i = 0; i<n; i++){
		arr[i] = i+1;
	}
	
	
	for(var i = n; i > 0; i--){
		index = (index + c -1) % i;  //当前下标
		
		console.log(arr[index]);
		
		for(var j = index; j<n; j++){
			arr[j] = arr[j+1];
		}
	}
}


circle(7,3);  // 3,6,2,7,5,1,4