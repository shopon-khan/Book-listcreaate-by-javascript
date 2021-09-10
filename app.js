/*  
1. DOM scletion
2. event listner
3. Basic vadilatino
4. creating element
5. appnend 

*/

// DOM secection 
const title =document.querySelector('#title');
const author =document.querySelector('#author');
const year =document.querySelector('#year');
const btn =document.querySelector('.btn');
const bookList =document.querySelector('#book-list');

// addEventListener 
btn.addEventListener('click', function (e) {
    e.preventDefault();
    // basic validation
    if (title.value == '' && author.value == '' && year.value == '') {
        alert('vai kecho akta den');
    } else {
        const newRow = document.createElement('tr');
        // crating new title
        const newTitle = document.createElement('th');
        // get title value form user
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        // crating new title
        const newAuthor = document.createElement('th');
        // get title value form user
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        // crating new title
        const newYear = document.createElement('th');
        // get title value form user
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        bookList.appendChild(newRow);
       
    }
});