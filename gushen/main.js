function gushen(n){
	if(n<=0){
		return;
	}
	if(n === 1){
		return 1;
	}
	//1 2 1 2 3 2 3 4 5
	//n>1
	//以跌的当天为界限 分组，则组的个数为 2(2,1), 3(2,3,2), 4(3,4,5,4)...
	//分组相比前一天盈利为(1,-1)(1,1,-1)(1,1,1,-1)....
	//分组的总盈利为:0,1,2,3....
	var result = 0;
	var g = 1;
	var sum = 0;
	while(sum<n){
		sum += g ;
		g++;
	}
	//n为第n天，g-2为组数，sum为和n同组的最后一个
	//sumGu第sum天的股票值
	var sumGu = 1;
	for(var i = 1;i<g-2;i++){
		sumGu += i;
	}
	//则第n天的股票值为 sumGu+1-(sum-n-1)
	result = sumGu+1-(sum-n-1);
	return result;
	
}
//周璇的方法
function gupiao(n){
      if(n == 1){
            return 1;
      }      
      var sum = 0;
      var count = 1;
      while(n >= sum + count){
            sum += count;
            count++;
      }
      n = n-sum;
      var res  = 1 + (count - 3)*(count-2) / 2;
      if(n==0) {
          return res;
      } else if(n==count) {
          return res+count-2;
      } else {
          return res + n;
      }
      
}
var test = Math.pow(10,9);
var a = gushen(test);

var b = gupiao(test);

console.log(a + " " + b);