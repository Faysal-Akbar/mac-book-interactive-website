/*-----------------------------------
    function for extra memory cost
-------------------------------------*/
function setExtraMemoryCost(isZero){
    const memoryInput = document.getElementById('memory-cost');
    if(isZero == true){
        memoryInput.innerText = 0;
    }
    else{
        memoryInput.innerText = 180;
    }
    calculateTotal();
}
/*--------------------------------------
    function for extra storage cost
---------------------------------------*/
function setExtraStorageCost(value){
    const storageInput = document.getElementById('storage-cost');
    if(value == 0){
        storageInput.innerText = 0;
    }
    else if(value == 100){
        storageInput.innerText = 100;
    }
    else{
        storageInput.innerText = 180;
    }
    calculateTotal();
}

/*---------------------------------
    function for delivery cost
----------------------------------*/
function setDeliveryCost(isZero){
    const deliveryInput = document.getElementById('delivery-cost');
    if(isZero == true){
        deliveryInput.innerText = 0;
    }
    else{
        deliveryInput.innerText = 20;
    }
    calculateTotal();
}

function updateTotal(product){
    const productInput = document.getElementById(product + '-cost');
    const productAmount = parseInt(productInput.innerText);
    return productAmount;
}
function calculateTotal(){
     const memoryTotal = updateTotal('memory');
     const storageTotal = updateTotal('storage');
     const deliveryTotal = updateTotal('delivery');
     const bestCostTotal = updateTotal('best');

    
     const total = memoryTotal + storageTotal + deliveryTotal + bestCostTotal;

    /*--------------------------
        update on the html
    ----------------------------*/
    const totalInput = document.getElementById('total-price');
    const footerTotal = document.getElementById('footer-total');
    totalInput.innerText = total;
    footerTotal.innerText = total;
    
}

/*----------------------------
    Event for promo code
-----------------------------*/
document.getElementById('button-addon2').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputFieldText = inputField.value;
    const totalInputText = document.getElementById('total-price').innerText;
    const totalInput = parseInt(totalInputText);
    const footerTotal = document.getElementById('footer-total');
    if(inputFieldText == 'stevekaku'){
        const price = totalInput / 100 * 80;
        footerTotal.innerText = price;
        inputField.value = '';
    }
});

  
/*---------------------------
        memory button
----------------------------*/
document.getElementById('memory-button1').addEventListener('click',function(){
    setExtraMemoryCost(true);
});
document.getElementById('memory-button2').addEventListener('click',function(){
    setExtraMemoryCost(false); 
});

/*----------------------------
        storage button
-----------------------------*/
document.getElementById('storage-button1').addEventListener('click', function(){
    setExtraStorageCost(0);
});
document.getElementById('storage-button2').addEventListener('click', function(){
    setExtraStorageCost(100);
});
document.getElementById('storage-button3').addEventListener('click', function(){
    setExtraStorageCost(180);
});

/*--------------------------
      delivery button
---------------------------*/
document.getElementById('delivery-button1').addEventListener('click', function(){
    setDeliveryCost(true);
});
document.getElementById('delivery-button2').addEventListener('click', function(){
    setDeliveryCost(false);
});
