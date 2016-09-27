"use strict";

// arrays

var positive = ["Don't give up", "You aready know, so why do you ask?", "Just wait and see", "You know better than to ask that", "Uh huh, honey", "Just stop while you're ahead", "Don't go asking silly questions now", "Maybe in a few years", "Im not sure, what do you think?", "How do you expect me to know the answer to that?", "I mean, anything's possible right?"];

var negative = ["Can you not?", "What's the point?", "You'll regret it all", "Don't go there", "Have another drink", "Try harder", "Stop trying", "As if", "LOL", "We both know how this ends...", "Nope"];

// array that holds the two array options
var feeling = [positive, negative];


// create a function that will retrieve a  value from the array at random

var randomize = function randomize(array) {
	return Math.floor(Math.random() * array.length);
};

// first choose either the negative array or the positive array at random
var randomFeelingArray = randomize(feeling);
//next choose a string at random from the array chosen before
var i = randomize(randomFeelingArray);

var Answer = positive[i];
console.log(Answer);



//tell the user to ask a question 


function tellTheFuture() {
	// prompt('What do you want to know?');
	// alert(positiveAnswer);
}

