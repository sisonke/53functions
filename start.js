var start  = function(sentence){
var starts =[]; // all word starting letters in sentece(including those duplicated)
//non-duplicated word starting 'letters' array
var occurances =[];//number of occurances of each letter in 'letters' array
var words = sentence.toLowerCase().split(' ');//convert sentence from string to array
words.forEach(function(word){
starts.push(word[0]);//push each word starting letter to 'starts' array
});

var mostOccured = starts[index];

//function mode(starts){

    

//occurances.sort();//sort array of duplicate and non-duplicate starting letters
//var mostOccured = most(starts);
return mostOccured;
}


 



