// ---------------------------------------------
// JS File 
// .............................................

const filterButtons = document.querySelectorAll('button');

let data;
let filter;

// Fectching Data
async function fetchData(){
    const response = await fetch('/data.json');
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
        if(button.textContent.trim() === "Daily"){
            console.log("Show daily")
        } else if(button.textContent.trim() === "Weekly"){
            console.log("Show weekly")
        } else{
            console.log("Show monthly")
        }
    })
});

async function init(){
    await fetchData();
}
init();
