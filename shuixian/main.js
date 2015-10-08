function sum(n,m){
      var result = n;
      for(var i = 1; i<m; i++){
            n = Math.sqrt(n);
            result += n;
      }
      
      return result.toFixed(2);
}

var line;
while(line = readline()){
    line = line.split(' ');
    
    print(sum(parseInt(line[0]),parseInt(line[1])));
}