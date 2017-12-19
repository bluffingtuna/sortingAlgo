var swap = require("./swap");
var Benchmark = require("benchmark");
var test = new Benchmark.Suite;
var merge = require("./merge")

function bubbleSort(array) {
	for (var i=array.length; i>0; i--){
		for (var j=0; j<i; j++){
			if (array[j]>array[j+1]){
				swap(array, j, j+1)
			}
		}
	}
	return array;
}

function selectionSort(arr) {
	for (var i=0; i<arr.length; i++) {
		var minIdx = i;

		for (var j=i+1; j<arr.length; j++) {
			if (arr[j] < arr[minIdx]) {
				minIdx= j;
			}
		}
		swap(arr, i, minIdx);
	}
	return arr;
}

function insertionSort(arr) {
	for (var i=1;i<arr.length;i++){
		var val=arr[i];

		for (var j=i-1; j>-1&&arr[j]>val; j--){
			arr[j+1] = arr[j];
		}
		arr[j+1] = val;
	}
	return arr;
}

function insertionSort1(arr){
	for (var i=1;i<arr.length;i++){
		var temp = arr[i];
		for (var j=i-1;j>-1&&arr[j]>arr[j+1];j--){
			arr[j+1]=arr[j];
		}
		arr[j+1]=temp;
	}
	return arr;
}

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
arr2=[]
console.log(bubbleSort(arr2))

test.add("mergeinterative", function(){
			mergesortIterative(arr2);
	})
	.add("selectionsort", function(){
		selectionSort(arr2);
	})
	.add("insertionsort", function(){
		insertionSort(arr2);
	})
	.add("insertionsort1", function(){
		insertionSort1(arr2);
	})
	.add("bubblesort", function(){
			bubbleSort(arr2);
		})
	.add("mergesort", function(){
			mergesort(arr2);
	})
	.add("mergesort1", function(){
			mergesort1(arr2);
	})
	.add()
	.on("cycle", function(event) {
		console.log(String(event.target));
	})
	.on("complete", function(){
		console.log("Fastest is "+ this.filter("fastest").map("name"));
	})
	.run({"async":false})
