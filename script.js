document.getElementById("orderButton").onclick = function() {

    let foodprice = parseInt(document.getElementById("food").value);
    let drinkprice = parseInt(document.getElementById("drink").value);
    
    let totalprice = foodprice + drinkprice;
    let discount = 0;
    
    if(totalprice > 100) {
        discount = totalprice * 0.1;
        totalprice -= discount;
    }
    
    const resultDiv = document.getElementById("result");
    if (totalprice > 0) {
        resultDiv.innerHTML = `
        Total : $${foodprice + drinkprice}<br>
        Discount : $${discount.toFixed(2)}<br>
        Final Price : $${totalprice.toFixed(2)}
        `;
    } else{
        resultDiv.innerHTML = "Please select both food and drink"
    }
    
    
}
