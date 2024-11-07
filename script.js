document.getElementById("orderButton").onclick = function() {
    let foodprice = parseInt(document.getElementById("food").value);
    let drinkprice = parseInt(document.getElementById("drink").value);

    let totalprice = foodprice + drinkprice;
    alert(totalprice);

    let discount = 0;

    if(totalprice > 90) {
        alert('ok')
    }

}