QUnit.test( "hello test ", function( assert ) {
  assert.equal(hello(), "hello world!" );
});

QUnit.test( "hello_uppercase test ", function( assert ) {
 assert.equal(hello_uppercase("HELLO"), "Hello!HELLO");
});