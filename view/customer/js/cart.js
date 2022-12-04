const group_card = document.querySelector('#group_card');
console.log(group_card)


function displayOrderProduct(){
    let ListNewProductStore = JSON.parse(localStorage.getItem('storeOrder'));
    console.log(ListNewProductStore);
   
    for (let index = 0; index < ListNewProductStore.length; index++) {

        let newOrder = ListNewProductStore[index]
        let card = document.createElement('div')
        card.classList.add('card')
        group_card.appendChild(card)

        let div_image = document.createElement('div')
        div_image.id = 'div_image';
        card.appendChild(div_image)

        let photo = document.createElement('img');
        photo.src = newOrder.image;
        div_image.appendChild(photo)
        
        let text = document.createElement('text');
        text.id = 'text1';
        card.appendChild(text)

        let nameOrder = document.createElement('h2');
        nameOrder.id = 'nameOrder';
        nameOrder.textContent = newOrder.name;
        text.appendChild(nameOrder)

        let priceOrder = document.createElement('h2');
        priceOrder.id = 'priceOrder';
        priceOrder.textContent = newOrder.money + newOrder.currency;
        text.appendChild(priceOrder)

        let buttonRemove = document.createElement('button');
        buttonRemove.id = 'buttonRemove';
        buttonRemove.textContent = 'Remove'
        text.appendChild(buttonRemove);

        let Quantity = document.createElement('div');
        Quantity.className = 'quantity';
        card.appendChild(Quantity)

        let number = document.createElement('h2');
        number.id = 'number';
        number.textContent = newOrder.quantity;
        Quantity.appendChild(number);

      
            let subtotal = document.createElement('h2');
            subtotal.id = 'total';
            subtotal.textContent = newOrder.money + newOrder.currency
            card.appendChild(subtotal);
       

    }
    let div_total = document.createElement('div');
    div_total.id = 'div_total';
    group_card.appendChild(div_total);
    let total = document.createElement('h2');
    
    let count_price = 0;
    for(let price of ListNewProductStore){
        console.log(price)
        count_price += parseInt(price.money)
    }
    total.textContent = "Total : " + count_price;
    div_total.appendChild(total);


}
displayOrderProduct()