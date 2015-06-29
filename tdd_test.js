TestMyCode.run("testing hello_world function", function(assert){
    var result = hello();
   
    assert.equals("hello world", result, "testing hello world function");
});

TestMyCode.run("testing hello_uppercase function", function(assert){
    var result = hello_uppercase("Andre");
   
    assert.equals("Hello, ANDRE!", result, "testing hello_uppercase function");
});


TestMyCode.run("testing hello_joe function", function(assert){
    var result = hello_joe("Lisa");
   
    assert.equals("hello!", result, "testing hello_joe function");

});


TestMyCode.run("testing number_list function", function(assert){
    var result = number_list(5);
   
    assert.equals([1,2,3,4,5].toString(), result.toString(), "testing number_list function");

});
