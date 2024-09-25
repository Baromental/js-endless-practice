const listElem = document.querySelectorAll('.item');

console.log(`Number of categories: ${listElem.length}`);

// for (const list of listElem) {
//    console.log(`Category:${list.firstElementChild.textContent}`);
//    console.log(`Elements:${list.lastElementChild.children.length}`); 
// }

listElem.forEach((list) => {
    console.log(`Category:${list.firstElementChild.textContent}`);
    console.log(`Elements:${list.lastElementChild.children.length}`);
 });
