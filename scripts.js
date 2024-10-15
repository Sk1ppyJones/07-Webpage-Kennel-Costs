
function calculateDogPrice() {
    let size = document.getElementById('size').value;
    let days = document.getElementById('days').value;

    if (size == "small") {
        price = 30 * days;
    } else {
        price = 32 * days;
    }

    let tax = price * 0.047;
    let total = tax + price;

    document.getElementById("price").innerHTML = "$" + parseFloat(price.toPrecision(4));
    document.getElementById("tax").innerHTML = "$" + parseFloat(tax.toPrecision(3));
    document.getElementById("total").innerHTML = "$" + parseFloat(total.toPrecision(4));
}