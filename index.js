/* _______________________________________________________________
Part 1.) It's the UX bunch! 

To reveal who is behind boxes 2 and 9, we'll need  to use some 
DOM methods and change their opacity back to 1. 

We've assigned ID's of "box-two" and "box-nine" to  the remaining 
boxes. They currently have the opacity set to 0.  Using a DOM 
selector and the style property, write pure JavaScript to reveal 
who's behind the remaining boxes. 
________________________________________________________________*/

// Your code here

let boxTwo = document.getElementById("box-two");
let boxNine = document.getElementById("box-nine");
boxTwo.style.opacity = 1;
boxNine.style.opacity = 1;

/*________________________________________________________________
Part 2.) The Hidden Message

Lastly, we've added an ID of "hidden-message" to an empty paragrah 
element. Use JavaScript to inject the paragragh's inner HTML with a 
string containing whatever text you want.
________________________________________________________________*/

// Your code here 

let hiddenMessage = document.getElementById("hidden-message")
hiddenMessage.innerHTML = "VENI VIDI VICI";


