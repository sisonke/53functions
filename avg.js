function avg(string){

	var avgWord =0;
	var avg = 0;
	
	var splitStr = string.split(" ");
	for(i = 0; i < splitStr.length; i++){
		avgWord += splitStr[i].length;
	};
		avg = avgWord/splitStr.length;

		return [Math.ceil(avg)];

}