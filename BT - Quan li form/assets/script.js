function enableQuantity() {
    var productTag = document.getElementById('product_id');
    var unitPriceTag = document.getElementById('unitPrice_id');

    var productValue = productTag.value;

    if(productValue == " ") {
        return;
    } else {
        unitPriceTag.value = productValue;
        document.getElementById('quantity_id').disabled = false;
    }
}

function totalPrice() {
    var unitPriceValue = document.getElementById('unitPrice_id').value;
    var quantityValue = document.getElementById('quantity_id').value;

    document.getElementById('totalPrice_id').value = unitPriceValue * quantityValue;
}

function enableCreditCard() {
    var creditCardTag = document.getElementById('creditCard_id');
    
    creditCardValue = creditCardTag.value;

    if(creditCardValue == " ") {
        return;
    } else {
        document.getElementById('ccn1').disabled = false;    
        document.getElementById('ccn2').disabled = false; 
        document.getElementById('ccn3').disabled = false; 
        document.getElementById('ccn4').disabled = false; 
    }
}   