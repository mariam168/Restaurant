
document.addEventListener('DOMContentLoaded', () => {
    const url = "http://localhost:3000/dishes";

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const itemsContainer = document.getElementById('all-products-items');
            itemsContainer.innerHTML = '';  

            data.forEach(dish => {
                const dishCard = document.createElement('div');
                dishCard.classList.add('col-3');

                dishCard.innerHTML = `
                    <div class="card h-100 shadow-sm " style="height: 400px; ">
                        <img src="${dish.image}" class="card-img-top" alt="Dish Image">
                        <div class="card-body">
                            <h6 class="card-title">${dish.name}</h6>
                            <img src="images/five-stars.png" class="chart-image" alt="Rating">
                            <p class="card-text">${dish.price}$</p>
                            <button class="btn  add-to-cart-button text-white" type="button ">Add to Cart</button>
                        </div>
                    </div>
                `;
                itemsContainer.appendChild(dishCard);
            });

          
            const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
            const offcanvas = document.getElementById('offcanvasRight');
            const offcanvasContent = document.getElementById('offcanvasContent');
            const nextBtn = document.getElementById('nextBtn');

            addToCartButtons.forEach(button => {
                button.addEventListener('click', function() {
                    offcanvas.style.display = 'block'; 
                });
            });
            nextBtn.addEventListener('click', function() {
                offcanvasContent.innerHTML = `
                    <div>
                        <h5>Cheese</h5>
                        <div class="dropdown">
                            <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Cheese
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">American</a></li>
                                <li><a class="dropdown-item" href="#">Cheddar</a></li>
                                <li><a class="dropdown-item" href="#">Swiss</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h5>Drinks</h5>
                        <div class="dropdown">
                            <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Drink
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Coke</a></li>
                                <li><a class="dropdown-item" href="#">Pepsi</a></li>
                                <li><a class="dropdown-item" href="#">Sprite</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h5>Salads</h5>
                        <div class="dropdown">
                            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Salad
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Caesar</a></li>
                                <li><a class="dropdown-item" href="#">Greek</a></li>
                                <li><a class="dropdown-item" href="#">Garden</a></li>
                            </ul>
                        </div>
                    </div>
                    <button class="btn " id="second-btn">Next</button>
                `;

                
                const nextBtn2 = document.getElementById('second-btn');
                nextBtn2.addEventListener('click', function() {
                    offcanvasContent.innerHTML = `
                        <h5>Confirm your order</h5>
                        <h3>Pasta Primavera</h3>
                        <div>
                            <button class="quantity-btn btn" id="decrease">-</button>
                            <span id="quantity">1</span>
                            <button class="quantity-btn btn" id="increase">+</button>
                        </div>
                        <div class="d-grid gap-2 mt-4">
                        <a href="/checkout.html"><button class="btn btn-outline-success mt-3">Confirm</button></a>
                        <button class="btn  mt-3">add Another item</button>
                        </div>
                    `;
                    let quantity = 1;
                    const quantityElement = document.getElementById('quantity');
                    const increaseButton = document.getElementById('increase');
                    const decreaseButton = document.getElementById('decrease');

                 
                    increaseButton.addEventListener('click', () => {
                        quantity++;
                        quantityElement.textContent = quantity;
                    });

                  
                    decreaseButton.addEventListener('click', () => {
                        if (quantity > 1) {
                            quantity--;
                            quantityElement.textContent = quantity;
                        }
                    });
                });
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
