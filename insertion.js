//Insertion Sort Algorithm

var arr = [1, 4, 3, 2];

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

function insertionSort(arr){
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