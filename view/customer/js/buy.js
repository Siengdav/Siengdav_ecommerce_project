let container = document.querySelector('.main-product');
let form = document.querySelector('#form');
let data_product = document.querySelector('.data');
let main_left = document.querySelector('.right')
let data_user = document.querySelector('.data-user');
function displayProduct(){
    let single_product = JSON.parse(localStorage.getItem('single-Product')); 
    console.log(single_product)

    let namePro = document.createElement('h2');
    namePro.id = 'data-name'
    namePro.textContent = single_product.name
    data_product.appendChild(namePro)  

    let pricePro = document.createElement('h2');
    pricePro.id = 'data-price'
    pricePro.textContent = 'Price: '+single_product.price
    data_product.appendChild(pricePro)
    
    let getImage = document.createElement('img');
    getImage.id = 'data-image';
    getImage.src = single_product.image
    data_product.appendChild(getImage)


}
displayProduct()

