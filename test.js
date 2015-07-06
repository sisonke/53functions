QUnit.test( "hello test", function( assert ) {
  assert.equal( "hello", "hello world" );
});

QUnit.test( "hello_uppercase test", function( assert ) {
  assert.equal( "hello", "Hello!HELLO" );
});

QUnit.test( "hello_joe", function( assert ) {
  assert.equal( "hello", "Joe" );
});

