function reverse(string) {
	var i = string.length,
	s = [];
	while(i > 0) {
		s += string.substring(i - 1, i);
		i--;
	}
	return s;
} 


