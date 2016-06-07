'use strict';

function double_to_one(collection) {
var k=0;
 var arry=new Array();
 for (var i = 0; i<collection.length; i++) {
 	for (var j= 0; j<collection[i].length; j++) {
 		arry[k]=collection[i][j];
 		k++;
 	}
 }
   var n = []; //一个新的临时数组
	for(var i = 0; i < arry.length; i++) //遍历当前数组
	{
		//如果当前数组的第i已经保存进了临时数组，那么跳过，
		//否则把当前项push到临时数组里面
		if (n.indexOf(arry[i]) == -1) n.push(arry[i]);
	}
	return n;
}

module.exports = double_to_one;
