QUnit.test( "hello test ", function( assert ) {
  assert.equal(hello("hello world"), "hello world!" );
});

QUnit.test( "hello_uppercase test ", function( assert ) {
 assert.equal(hello_uppercase("HELLO"), "Hello!HELLO");
});

QUnit.test( "hello_joe test ", function( assert ) {
 assert.equal(hello_joe("Joe"), "Hello");
 assert.equal(hello_joe("Bob"), "Hello");
 assert.equal(hello_joe("Sisonke"),"Hello, Sisonke!");
});

QUnit.test( "number_list test ", function( assert ) {
 assert.deepEqual(number_list(5), [1,2,3,4,5]);
});

QUnit.test( "sum_number test ", function( assert ) {
 assert.deepEqual(sum_numbers(5),15);
});

QUnit.test( "length test ", function( assert ) {
 assert.equal(length("Sisonke"),7);
});

QUnit.test( "upper test ", function( assert ) {
 assert.equal(upper("sisonke"),"SISONKE");
});

QUnit.test( "reverse test ", function( assert ) {
 assert.equal(reverse("eknosis"),"sisonke");
});
QUnit.test( "hello_list test ", function( assert ) {
 assert.equal(hello_list(3), "hello,hello,hello");
});

 

QUnit.test( "high_low function", function(assert){
	   var list = [1,2,3,4];
	var result = high(list);
	var result1 = low(list)
	// is the result as we expected?
	 assert.deepEqual(4,result);
	 assert.deepEqual(1,result1);

});


QUnit.test( "count_words test ", function( assert ) {
 var result = count_words("Sisonke");
	assert.equal(result, 7);
});
