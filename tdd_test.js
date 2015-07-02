TestMyCode.run("testing hello_world function", function(assert){ // this function takes two parameters the string and the function(assert)
    var result = hello();
    // is the result as we expected?
    assert.equals("hello world!", result, "testing hello_world function");
});//if the massage is not the same as the return on the function the square should be red and the function should fail...
     //but if it passed then the square should have a green background meaning it failed the test....

TestMyCode.run("testing hello_uppercase function", function(assert){ // this function takes two parameters the string and the function(assert)
    var result = hello_uppercase("sisonke");
    // is the result as we expected?
    assert.equals("Hello, SISONKE!", result, "testing hello_uppercase function");
});//if the massage is not the same as the return on the function the square should be red and the function should fail...
     //but if it passed then the square should have a green background meaning it failed the test....

TestMyCode.run("testing hello_joe function for Joe", function(assert){ // this function takes two parameters the string and the function(assert)
    var result = hello_joe("Joe");
    // is the result as we expected?
    assert.equals("hello!", result, "testing hello_joe function");
});//if the massage is not the same as the return on the function the square should be red and the function should fail...
     //but if it passed then the square should have a green background meaning it failed the test....

TestMyCode.run("testing hello_joe function for Bob", function(assert){ // this function takes two parameters the string and the function(assert)
    var result = hello_joe("Bob");
    // is the result as we expected?
    assert.equals("hello!", result, "testing hello_joe function");
});//if the massage is not the same as the return on the function the square should be red and the function should fail...
     //but if it passed then the square should have a green background meaning it failed the test....


TestMyCode.run("testing hello_joe function for sisonke", function(assert){ // this function takes two parameters the string and the function(assert)
    var result = hello_joe("sisonke");
    // is the result as we expected?
    assert.equals("hello, sisonke!", result, "testing hello_joe function");
});//if the massage is not the same as the return on the function the square should be red and the function should fail...
     //but if it passed then the square should have a green background meaning it failed the test....

TestMyCode.run("testing number_list function", function(assert){ // this function takes two parameters the string and the function(assert)
    var result = number_list(5);   
 // is the result as we expected?
    assert.equals([1,2,3,4,5,].toString(), result.toString(), "testing number_list function");
});



TestMyCode.run("testing sum_numbers function", function(assert){ // this function takes two parameters the string and the function(assert)
    var result = sum_numbers(5);
    // is the result as we expected?
    assert.equals(15,result, "testing number_list function");
});//if the massage is not the same as the return on the function the square should be red and the function should fail...
     //but if it passed then the square should have a green background meaning it failed the test....
