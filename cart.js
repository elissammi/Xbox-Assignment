var addCart = document.querySelectorAll('.add-cart');
var cart = JSON.parse(localStorage.getItem("CART")) || [];

function addToCart(id) {
    // check if the product added is in the cart
    if (cart.some((item) => item.id === id)) {
      updateQuantity("plus", id);
    } else {
      const item = products.find((product) => product.id === id);
  
      cart.push({              
        ...item,
        numberOfUnits: 1,
      });

      main();
    }

    localStorage.setItem("CART", JSON.stringify(cart));
  }


function main() {
  calcTotal();
  displayItems();
  currentItems();
    
    
    localStorage.setItem("CART", JSON.stringify(cart));

  }


function calcTotal() {
    let totalPrice = 0,
        totalItems = 0;
  
    cart.forEach((item) => {
      totalPrice += item.price * item.numberOfUnits;
      totalItems += item.numberOfUnits;
    });

    localStorage.setItem("itemsInCart", totalItems);
    localStorage.setItem("totalPrice",totalPrice) ;
  
    displayItems();
  }

  
  function currentItems(){
    let item = localStorage.getItem('itemsInCart');

    if(item >= 0) {
        document.querySelector('#cart_nav span').textContent = item;
    }
}


  function displayItems() {
    let cart = JSON.parse(localStorage.getItem("CART"));
    let cartCost = localStorage.getItem("totalPrice");
    let cartItems = document.querySelector(".products");
    if(cart && cartItems ) {
        cartItems.innerHTML = " ";
        Object.values(cart).map(item => {
            cartItems.innerHTML += `
            <div class="product">
              <div class="remove" onclick="removeItems(${item.id})">
                <ion-icon name="close-circle-outline"></ion-icon>
              </div>

              <div class="product-title">
              <img src ="${item.imgSrc}">
              <p>${item.name}</p>
              </div>

              <div class="price">MYR ${item.price}</div>

              <div class="quantity">
                  <div class="btn minus" onclick="updateQuantity('minus', ${item.id})">
                  <ion-icon name="remove-circle-outline"></ion-icon>
                  </div>
              
                  <span>${item.numberOfUnits}</span>

                  <div class="btn plus" onclick="updateQuantity('plus', ${item.id})">
                  <ion-icon name="add-circle-outline"></ion-icon>
                  </div>
              </div>
              <div class="total">
                  MYR ${(item.numberOfUnits * item.price).toFixed(2)}
              </div>
            </div>
            `;
          });

        cartItems.innerHTML += `
        <div class="basketTotalContainer">
          <h4 class="basketTotalTitle">
              Subtotal
          </h4>
          <h4 class="basketTotal">
              MYR ${parseFloat(cartCost).toFixed(2)}
          </h4>
          <div class="checkOut">
          <button><a href="payment.html">CHECKOUT</a></button>
          </div>
          </div>`
        }
      }
    
function removeItems(id) {
  cart = cart.filter((item) => item.id !== id);
  localStorage.setItem("CART", JSON.stringify(cart)); 
  localStorage.setItem("itemsInCart", cart.numberOfUnits)
  main();
}

function updateQuantity(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });
  localStorage.setItem("CART", JSON.stringify(cart));
  main();
  
}

currentItems();
displayItems();



