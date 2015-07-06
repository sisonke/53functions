
//declaring assert also used literal dot notation
var assert = {
	
	passed:false,

	//only check if the comparison passed or failed
	equals: function(message,result, newmsg) {

		if(message === result) {
			this.passed = true;
		}
		else {
			this.passed = false;
		}
	}

   }


var TestMyCode = { // this is an object literal and it has a method which is run
		
	// * build the blocks
	// * run the assert
	// * keep count of how many tests were ran
	// keep track of how many tests passed
	// display how many tests passed out of how he
	// fix the messages in t

	runCount : 0,
	testPassedCount : 0,

	run:function(name,assertTest){
		
		this.runCount = this.runCount + 1;

		var sonke = document.createElement("id");

	 	// style the new div that you have created 
	 	sonke.id= "div" + this.runCount;
	 	sonke.style.height="300px";
	 	sonke.style.width="300px";
	 	sonke.style.border="5px solid black";
	 	sonke.style.display="inline-block";

		document.body.appendChild(sonke);	
	
		//this will check if the square is red or it's green.
		var rg = new RedOrGreen(sonke.id);

		this.name=name;

		assertTest(assert);
		// ask the assert what happened?
		if (assert.passed){
			rg.makeGreen();
			sonke.innerHTML = name;
			this.testPassedCount = this.testPassedCount + 1;
		}
		else{
			rg.makeRed();
			sonke.innerHTML = name;
		}
		
		document.getElementById('testResults').innerHTML = "number of tests passed : " + this.testPassedCount + " out of " + this.runCount;
		document.body.appendChild(testResults);
  }
}
       //assert.showProgress()
        // printing out the paragraph underneath my three squares
