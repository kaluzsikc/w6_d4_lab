document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
    form.addEventListener('submit', handleFormSubmit);

  const deleteAll = document.querySelector('#delete-all');
  deleteAll.addEventListener('click', deleteAllClick);
})



const handleFormSubmit = function(event) {
  event.preventDefault();
  console.log('events',this);
  // console.log('events author', event.target.author.value);
  // console.log('events category', event.target.category.value);

  // const resultingMessage = `${event.target.title.value} ${event.target.author.value} ${event.target.category.value} `;



  const resultTitle = document.createElement('h1');
  resultTitle.textContent = event.target.title.value;


  const resultAuthor = document.createElement('h3');
  resultAuthor.textContent = event.target.author.value;


  const resultCategory = document.createElement('p');
  resultCategory.textContent = event.target.category.value;

  const resultParagraph = document.createElement('div');
  resultParagraph.append(resultTitle);
  resultParagraph.append(resultAuthor);
  resultParagraph.append(resultCategory);
  resultParagraph.classList.add('box');


  const result = document.querySelector('#reading-list');
  result.append(resultParagraph);
  this.reset();
}

const deleteAllClick = function () {
  const listToDelete = document.querySelector('#reading-list');
  while (listToDelete.firstChild) {
    listToDelete.removeChild(listToDelete.firstChild);
  }
}
