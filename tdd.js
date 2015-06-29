
function testCase(id) {

	 	var NewDiv = document.createElement("div");

	 	
	 	NewDiv.id="mydiv" + id;
	 	NewDiv.style.height="300px";
	 	NewDiv.style.width="300px";
	 	NewDiv.style.border="5px solid black";
	 	

		document.body.appendChild(NewDiv);
		

		this.id=NewDiv.id;
		this.message= function(msg){
			NewDiv.innerHTML=msg;
		}
}



var assert = {
	i:0,
	pass:0,

	 equals: function(massage,result,newmsg)
	 {
	 	
		var tb = new testCase (this.i);
	 	
	 
	
		var rg = new RedOrGreen(tb.id);
		if(massage === result) {
			tb.message(newmsg);
			rg.makeGreen();
			this.pass++;
			
		}
		else {
			tb.message(newmsg);
			rg.makeRed();
		}
			this.i++;
	}
}
var TestMyCode = { 
	run:function(name,assertTest){
		this.name=name;
		assertTest(assert);
	}
}


function results(text, color) {
var p = document.createElement("p");
p.innerHTML = "Passed tests are " + assert.pass + " out of " +assert.i;
p.style.color = "blue";
document.body.appendChild(p);
}