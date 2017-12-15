//Insertion Sort Algorithm

var arr = [1, 4, 3, 2, 42214,1,3,4,1,6,4,2,1,2,5,67,7,7,8,34];

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
//i=1
//val=1

console.log(insertionSort(arr))
console.log(insertionSort1(arr))