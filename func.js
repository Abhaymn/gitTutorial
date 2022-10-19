// parentElement
// lastelementchild
// lastchild
// createchild
// firstelementchild
// firstchild
// nextsibling
// nextelementsibling
// previoussibling
// previouselementsibling
// createelement
// setAttribute
// createtesxtnode
// appendchild


// Now go head and add HEllo word before Item Lister
// Now go head and add HEllo word before Item 1


var itemList=document.querySelector('#items');

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);


console.log(itemList.children);
console.log(itemList.children[3]);
itemList.children[3].style.backgroundColor='#ccc';


console.log(itemList.firstChild);
console.log(itemList.firstElementChild)
itemList.firstElementChild.textContent='heloo';

console.log(itemList.lastChild);
console.log(itemList.lastElementChild)
itemList.lastElementChild.textContent='heloo';

console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';

//createElement

var newDiv=document.createElement('div');
newDiv.className='helooo';
newDiv.id='heloo1';

//addAttribute
newDiv.setAttribute('title','heloo Div');
var newDivText=document.createTextNode('heloo world');
newDiv.appendChild(newDivText);


var container=document.querySelector('header.container');
var h1=document.querySelector('header h1');


console.log(newDiv);

container.insertBefore(newDiv,h1);