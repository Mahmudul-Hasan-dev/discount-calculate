// console.log('connected');
//step 1:add event listener
document.getElementById('discountBtn').addEventListener('click', function () {
    // console.log('clicked');

    //step 2:get the value
    const priceelement = document.getElementById('price');
    const priceElementstring = priceelement.innerText;
    const prevPrice = parseFloat(priceElementstring);

    const discountCodeField = document.getElementById('discountCode');
    const discountCode = discountCodeField.value;

    //step 3:calculate the discounted price
    const discount = prevPrice * 30 / 100;
    // console.log(discount);
    const newPrice = prevPrice - discount;

    //step 4: set the value
    priceelement.innerText = newPrice;
})