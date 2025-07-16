// ---------------------------------------------
// JS File 
// .............................................

const filterButtons = document.querySelectorAll('button');

// Fectching Data
fetch('/data.json').then((response) => {  
  if(!response.ok) return console.log('Oops! Something went wrong.');
  
  return response.json();
}).then((data) => {
  console.log(data);
});

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.textContent.trim())
    })
});

