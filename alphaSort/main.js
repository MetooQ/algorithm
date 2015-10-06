function factorial( n ){
    return ( n <= 1 ) ? 1 : n * factorial( n-1 );
}

function alphaSort(str){
	var sum = 1;
	for(var i = 0; i<12; i++){
		var count = 0;
		for(var j = i+1; j<12; j++){
			if(str[i]>str[j]) count++;
		}
		sum += factorial(12-(i+1))*count;
	}
	
	console.log(sum);
}

alphaSort("abcdefghijkl");//1
alphaSort("hgebkflacdji");//302715242
alphaSort("gfkedhjblcia");//260726926  

