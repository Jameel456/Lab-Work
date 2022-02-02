"use strict";

const toggleHighlighted = (ev) => {
  ev.target.classList.toggle("highlighted");
  console.log(ev);
  //toggle whatever is clicked

}

const elements = document.querySelectorAll('.clickable');
//selects everythin in the doc that has clickable
for (const element of elements) {
  element.addEventListener('click', toggleHighlighted);
  //for each of the click the 'toggleHighlighted is runned'
}






//function appendParagraph(text) {
//  const p = document.createElement('p');
  // p.textContent = text;
  //sets content of the p element to text
//  document.querySelector('main').appendChild(p);
  //select main element, creating a paragraph giving it the 'text' , insertining into the mmain
// }

//['these', 'are', 'my', 'paragraphs'].forEach(appendParagraph);
//this list of strings passing each of these to generate and insert a new paragraph into the DOM


//const message ="hello world";

 //let message = "are you sure you want to continue";

// do {
//   message = `${message}?`;
 //} while(confirm(message))

//const targets = document.getElementsByTagName("p");
//console.log(targets);
//target.textContent = message;
