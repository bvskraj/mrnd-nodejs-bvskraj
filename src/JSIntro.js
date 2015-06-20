
exports.Sum = function(num1, num2){
	return num1+num2;
}

exports.SumOfArray = function(arrayOfNums){
	var num=arrayOfNums.length;
	var sum=0;
	var i;
	for(i=0;i<num;i++)
		sum=sum+arrayOfNums[i];
	return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
	var a=[];
	var sum=0;
	var len=arrayOfNums.length;
	for(i=0;i<len;i++)
	{
		if(a.indexOf(arrayOfNums[i])<0){
			a+=arrayOfNums[i];
			sum=sum+arrayOfNums[i];}
	}
	return sum;
}

exports.ReverseString = function(str){
	var i;
	var temp='';
	var le=str.length-1;
	var a='';
	for (i=le;i>=0;i--)
		a+=str[i];
	return a;
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){


}