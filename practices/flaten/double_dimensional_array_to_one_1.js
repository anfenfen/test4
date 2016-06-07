'use strict';
function double_to_one(collection) {
  var k=1;
 var arry=new Array();
 arry[0]=collection[0];
 for (var i = 1; i<collection.length; i++) {
 	for (var j= 0; j<collection[i].length; j++) {
 		arry[k]=collection[i][j];
 		k++;
 	}
 }
 return arry;

}
module.exports = double_to_one;
