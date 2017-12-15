var swap = require("./swap");
var Benchmark = require("benchmark");
var test = new Benchmark.Suite;

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

let arr2 = [4,2,6,4,12,5,3,12,6,8888,123,344,34,555,2123,45,2135,316426,5569,34156,57347,2124, 1232,1254125,4,24,123123,1251235,1243213,123123]


test.add("bubblesort", function(){
			bubbleSort(arr2);
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
	.add()
	.on("cycle", function(event) {
		console.log(String(event.target));
	})
	.on("complete", function(){
		console.log("Fastest is "+ this.filter("fastest").map("name"));
	})
	.run({"async":true})
