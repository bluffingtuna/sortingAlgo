var merge = require("./merge");

function mergesort(arr){
	if (arr.length<2){
		return arr
	}
	var mid = Math.floor(arr.length/2),
		left = arr.slice(0, mid),
		right = arr.slice(mid);

	return merge(
		mergesort(left),
		mergesort(right)
	);
}

function mergesort1(arr){
	if (arr.length<2){
		return arr
	}

	var left = arr.splice(0, Math.floor(arr.length/2));
	var right = arr.splice(0, arr.length);

	return merge(
		mergesort1(left),
		mergesort1(right)
	);
}

function mergesortIterative(arr) {
	if (arr.length <2) {return arr;}

	var work=[];
	for (var i =0; i<arr.length; i++){
		work.push([arr[i]]);
	}

	while (work.length>1){
		var left= work.shift();
		var right= work.shift();
		work.push(merge(left,right));
	}
	return work[0];
}

