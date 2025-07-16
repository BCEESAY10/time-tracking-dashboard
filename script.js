// ---------------------------------------------
// JS File 
// .............................................

const filterButtons = document.querySelectorAll('button');
const cards = document.querySelectorAll('.card');

let data = [];
let currentFilter = 'weekly';

// Fectching Data
async function fetchData(){
    const response = await fetch('/data.json');
    if(!response.ok){
        console.log('Oops! Something went wrong.');
        return;
    }
    data = await response.json();
    updateCards(currentFilter);
}

function updateCards(filter) {
    cards.forEach(card => {
        const title = card.querySelector('.top p').textContent.trim();
        const item = data.find(d => d.title === title);
        if (item) {
            const timeframe = item.timeframes[filter];
            card.querySelector('.bottom h1').textContent = `${timeframe.current}hrs`;
            let prevLabel = 'Last Week';
            if (filter === 'daily') prevLabel = 'Yesterday';
            if (filter === 'monthly') prevLabel = 'Last Month';
            card.querySelector('.bottom p').textContent = `${prevLabel} - ${timeframe.previous}hrs`;
        }
    });
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.textContent.trim().toLowerCase();
        currentFilter = filter;
        updateCards(filter);
    });
});

fetchData();
