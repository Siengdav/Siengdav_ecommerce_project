const container = document.querySelector('#container');

function displayProduct() {
    let products = JSON.parse(localStorage.getItem('products'));   

    const section = document.createElement('div');
    section.setAttribute('id','our-card');
    section.className = 'our-card';
    for (let index=0; index<products.length; index++) {
      let product = products[index];

        let card = document.createElement('div');
        card.className = 'box';
        card.dataset.index = index;
        section.appendChild(card);
        let image_Product = document.createElement('img');
        image_Product.src = product.image
        card.appendChild(image_Product);

        const titleElement = document.createElement('h3');
        titleElement.classList.add('title');
        card.appendChild(titleElement);
        titleElement.textContent = product.name;

        

        let des= document.createElement('p');
        card.appendChild(des);
        des.textContent = 'Description : '+product.description


        let newPrice = document.createElement('h4');
        card.appendChild(newPrice);
        newPrice.textContent = product.money + product.currency


        let stars = document.createElement('div');
        stars.className = ('stars');
        for(let index=0; index<5; index++){
          let i = document.createElement('i');
          i.className = 'fas fa-star';
          i.style.color = 'orange';
          stars.appendChild(i);
        }
        card.appendChild(stars)

        let group = document.createElement('div');
        group.className = 'group-button';

        let buttonBuy = document.createElement('button');
        buttonBuy.className = 'btn';
        buttonBuy.addEventListener('click', get_card);
        group.appendChild(buttonBuy);
        buttonBuy.textContent = 'Add to cart';

        let buttonDetails = document.createElement('button');
        buttonDetails.className = 'button-details';
        // buttonDetails.dataset.index = index;
        buttonDetails.addEventListener('click', detailProduct)

        group.appendChild(buttonDetails);
        buttonDetails.textContent = 'Detail'

        

        card.appendChild(group);
  

        section.appendChild(card);

        container.appendChild(section);

    }
}



function searchValue() {
    let text = search.value.toLocaleLowerCase();
    // console.log(text)
    let tasks = document.querySelectorAll('.box');
    console.log(tasks)
    for (let i=0; i<tasks.length; i++) {

        let task = tasks[i];
      let title = task.children[1].textContent.toLocaleLowerCase();
      console.log(title)
      if (title.includes(text)) {
        task.style.display = 'block';
      }
      else {
        task.style.display = 'none';
      }
    }
  
  }





displayProduct()

const search = document.querySelector('#search');
search.addEventListener("keyup", searchValue);

// Page detail
function detailProduct() {
  window.location.href = "product_detail.html";
  const products = document.querySelectorAll('.box');
  const singleProduct = JSON.parse(localStorage.getItem('sigle-Product')) ?? {};
  for(let book of products) {
      book.addEventListener('click', (e) => {

          singleProduct.image = book.firstElementChild.src
          singleProduct.name = book.children[1].textContent
          singleProduct.description = book.children[2].textContent
          singleProduct.price = book.children[3].textContent
          
          localStorage.setItem('single-Product', JSON.stringify(singleProduct));
          
      });
  }
}

storeOrder = []
function newLocalStorage(){
  localStorage.setItem('storeOrder', JSON.stringify(storeOrder));
}
function loadNewProductLocalStorage(){
  let ListNewProductStore = JSON.parse(localStorage.getItem('storeOrder'));
  
  if (ListNewProductStore!==null){
    new_product= ListNewProductStore
  }
  
}


function get_card(e){
  window.confirm('You have been order');
  
  index = e.target.parentElement.parentElement.dataset.index;
  console.log(index);
  let products = JSON.parse(localStorage.getItem('products'))
  let newOrder = products[index];
  storeOrder.push(newOrder);
  newLocalStorage();



}