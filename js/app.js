document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
    form.addEventListener('submit', handleFormSubmit);

})



const handleFormSubmit = function(event) {
  event.preventDefault();
  console.log('events title', event.target.title.value);
  console.log('events author', event.target.author.value);
  console.log('events category', event.target.category.value);



  const resultingMessage = `Your reading list is : ${event.target.title.value} by ${event.target.author.value} from category ${event.target.category.value} `;
  const resultParagraph = document.createElement('p');
  resultParagraph.textContent = resultingMessage;
  const result = document.querySelector('#reading-list');
  result.append(resultParagraph);
}
