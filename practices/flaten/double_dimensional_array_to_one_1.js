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
 return arry;
}
module.exports = double_to_one;
