
const swap = require('./swap');

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

arr2 = [4,2,6,4,12,5,3,12,6,8888,123,344]
arr1 = [3,4,2,1,2,54,6,7,12,3,65]
console.log(selectionSort(arr1))
console.log(selectionSort(arr2))