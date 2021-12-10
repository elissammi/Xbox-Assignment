function summary(){
  let subTotal = document.querySelector(".summary");
  let cartCost = localStorage.getItem("totalPrice");

  subTotal.innerHTML = " ";
  subTotal.innerHTML +=`
  <div class="basketTotalContainer">
  <h4 class="basketTotalTitle">Order Summary</h4>
    <h4 class="basketTotal">
        MYR ${parseFloat(cartCost).toFixed(2)}
    </h4>
  </div>
    
  `
}

summary();

function submit_form(){
    let postalCode = document.getElementById("postal-code").value;
    let cardNo = document.getElementById("cardNo").value;
    let cvc = document.getElementById("cvc2").value;
    let expMonth = document.getElementById("expMonth").value;
    let expYear = document.getElementById("expYear").value;
    if(postalCode.length < 5){
      alert("Incomplete Postal Code");
      return false;
    }

    if(cardNo.length < 15){
      alert("Incomplete Card Number");
      return false;
    }
    
    if(cvc.length < 3){
      alert("Incomplete CVC code");
      return false;
    }

    if(expMonth.length < 2){
      alert("Incomplete Expiry Month");
      return false;
    }

    if(expYear.length < 2){
      alert("Incomplete Expiry Year");
      return false;
    }

    form = document.querySelector("form");
    form.action="loading.html";
    localStorage.clear();
    return true;
}
