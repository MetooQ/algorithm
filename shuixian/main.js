function shuixian(n,m){
	var result = [];
	for(var i = n; i<=m; i++){
		var arr = String(i).split("");
		var sum = Math.pow(parseInt(arr[0]),3)+Math.pow(parseInt(arr[1]),3)+Math.pow(parseInt(arr[2]),3);
		
		if(sum == i){
			result.push(i);
		}
	}
	if(result.length === 0){
		result.push("no");
	}

	return result.join(" ");
}

var line;
while(line = readline()){
    line = line.split(' ');    
    print(shuixian(parseInt(line[0]),parseInt(line[1])));
}