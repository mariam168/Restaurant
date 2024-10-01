
document.getElementById("go-to-btn").onclick = function() {
  
 window.location.href = "products.html"; 
};

const url = "http://localhost:3000/dishes";

let currentIndex = 0;
let dishes = [];

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data); 
    if (Array.isArray(data) && data.length > 0) {
      dishes = data; 
      displayDishes();
    } else {
      console.error('No dishes found in the response');
    }
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
  function displayDishes() {
    const itemsContainer = document.getElementById('top-picks-items');
    itemsContainer.innerHTML = ''; 
    console.log('Displaying dishes:', dishes);
    
    if (dishes.length > 0) { 
      const nextDishes = dishes.slice(currentIndex, currentIndex + 4);
      console.log('Next dishes to display:', nextDishes);
      
      nextDishes.forEach(dish => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('top-picks-item');
  
      
        itemDiv.innerHTML = `
          <div class="top-picks-image">
            <img src="${dish.image }" alt="dish image">
          </div>
          <div class="top-picks-information">
            <h4 title="${dish.name}">${dish.name.length > 15 ? dish.name.substring(0, 15) + '...' : dish.name}</h4>
            <img src="images/five-stars.png" class="five-stars" alt="Rating">
            <div class="top-picks-chart">
              <p>${dish.price}$</p>
              <img src="images/chart.png" class="chart-image" alt="Chart">
            </div>
          </div>
        `;
  
        itemsContainer.appendChild(itemDiv);
      });
    } else {
      console.error('No dishes to display');
    }
  }
  

document.getElementById('prev').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    displayDishes(); 
  }
});

document.getElementById('next').addEventListener('click', () => {
  if (currentIndex + 1 < dishes.length) { 
    currentIndex += 1; 
    displayDishes(); 
  }
});
const url2 = "http://localhost:3000/special-dishes";
let currentIndex1 = 0;
let specialDishes = []; 
fetch(url2)
  .then(response1 => {
    if (!response1.ok) {
      throw new Error('Network response was not ok ' + response1.statusText);
    }
    return response1.json();
  })
  .then(data1 => {
    console.log(data1);
    if (Array.isArray(data1) && data1.length > 0) {
      specialDishes = data1; // Store the fetched dishes
      displaySpecialDishes(specialDishes); // Display initial set of dishes
    } else {
      console.error('No special dishes found in the response');
    }
  })
  .catch(error1 => {
    console.error('There was a problem with the fetch operation:', error1);
  });
function displaySpecialDishes(specialDishes) {
  const itemsContainer1 = document.getElementById('special-dish-items');
  itemsContainer1.innerHTML = ''; 
  console.log(specialDishes);
  
  if (specialDishes.length > 0) { 
    const nextDishes1 = specialDishes.slice(currentIndex1, currentIndex1 + 4); 
    console.log('Next dishes to display:', nextDishes1);
    
    nextDishes1.forEach(dish1 => {
      const itemDiv1 = document.createElement('div');
      itemDiv1.classList.add('special-dish-item');
      itemDiv1.innerHTML = `
        <div class="special-dish-image">
          <img src="${dish1.image}" alt="dish image">
        </div>
        <div class="special-dish-information">
          <h4 title="${dish1.name}">${dish1.name.length > 15 ? dish1.name.substring(0, 15) + '...' : dish1.name}</h4>
          <img src="images/five-stars.png" class="five-stars" alt="Rating">
         
          <div class="special-dish-chart">
            <p>${dish1.price}$</p>
            <img src="images/chart.png" class="chart-image" alt="Chart">
          </div>
        </div> 
      `;
      itemsContainer1.appendChild(itemDiv1); 
    });
  } else {
    console.error('No dishes to display');
  }
}
document.getElementById('prev1').addEventListener('click', () => {
  if (currentIndex1 > 0) {
    currentIndex1 -= 4; 
    displaySpecialDishes(specialDishes); 
  }
});
document.getElementById('next1').addEventListener('click', () => {
  if (currentIndex1 + 4 < specialDishes.length) { 
    currentIndex1 += 4; 
    displaySpecialDishes(specialDishes); 
  }
});

const url3 = "http://localhost:3000/special-offers";
let specialOffers = [];
let currentIndex3 = 0;

fetch(url3)
  .then(response3 => {
    if (!response3.ok) {
      throw new Error('Network response was not ok ' + response3.statusText);
    }
    return response3.json();
  })
  .then(data => {
    if (Array.isArray(data) && data.length > 0) {
      specialOffers = data;
      displaySpecialOffers(specialOffers);
    } else {
      console.error('No special offers found in the response');
    }
  })
  .catch(error3 => {
    console.error('There was a problem with the fetch operation:', error3);
  });

function displaySpecialOffers(specialOffers) {
  const itemsContainer3 = document.getElementsByClassName('special-offers-items')[0]; // Select first container
  itemsContainer3.innerHTML = ''; // Clear previous content

  if (specialOffers.length > 0) {
    const nextOffers = specialOffers.slice(currentIndex3, currentIndex3 + 4); // Show 4 offers at a time
    console.log('Next offers to display:', nextOffers);

    nextOffers.forEach(offer => {
      const itemDiv3 = document.createElement('div');
      itemDiv3.classList.add('special-offers-item');

      itemDiv3.innerHTML = `
        <img src="${offer.image}" alt="special offer image">
        <div class="special-offer-information">
          <h3 title="${offer.name}">${offer.name.length > 15 ? offer.name.substring(0, 15) + '...' : offer.name}</h3>
          <p>${offer.description}</p>
        </div>
        <div class="offer-price">
          <h4>${offer.price}$</h4>
        </div>
      `;

      itemsContainer3.appendChild(itemDiv3); // Append each offer to the container
    });
  } else {
    console.error('No offers to display');
  }
}

