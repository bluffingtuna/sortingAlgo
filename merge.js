function merge(left, right) {
	var result = [];

	while (left.length>0&&right.length>0){
		if (left[0]<right[0]){
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}
	return result
		.concat(left.splice(0, left.length))
		.concat(right.splice(0, right.length));
}

module.exports = merge;