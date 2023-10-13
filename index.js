// Write your code here!
// Remove the <main> element with id 'main'
let mainElement = document.querySelector('main');
mainElement.remove();
// Create a new <h1> element with id 'victory'
let newHeader = document.createElement('h1');
newHeader.id = 'victory';
// Set the text content of the new <h1> element to "YOUR-NAME is the champion"
newHeader.textContent = "Maxcliff is the champion";

