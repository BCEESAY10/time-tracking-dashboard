// ---------------------------------------------
// JS File 
// .............................................

const filterButtons = document.querySelectorAll('button');

let data;

// Fectching Data
async function fetchData(){
    const response = await fetch('data.json');
    if(!response.ok){
        console.log('Oops! Something went wrong.');
        return;
    }
    data = await response.json();
    console.log(data);
}

fetchData();

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(data)
    })
});

