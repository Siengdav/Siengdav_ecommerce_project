const productDetails = document.querySelector('#product-detail');
console.log(productDetails)
const div_left = document.querySelector('#left');


function displayProduct() {
    let single_product = JSON.parse(localStorage.getItem('single-Product'));  
    console.log(single_product)  
    // main left

    // create element img and append it to div left 
    let getImage = document.createElement('img');
    getImage.src = single_product.image
    div_left.appendChild(getImage);
    // main right

    // create element h1 and append it to div right    
    let div_right = document.createElement('div'); 
    div_right.setAttribute('id','right')
    productDetails.appendChild(div_right);

    let group = document.createElement('div');
    group.id = 'group';
    div_right.appendChild(group);

    let text = document.createElement('div');
    text.id= 'text';
    group.appendChild(text);
    
    let getName = document.createElement('h1');
    getName.id = 'name';
    getName.textContent = single_product.name
    text.appendChild(getName);

    let getPrice = document.createElement('h2');
    getPrice.id = 'price';
    getPrice.textContent = single_product.price
    text.appendChild(getPrice);

    let details = document.createElement('p');
    details.id = 'details';
    details.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    text.appendChild(details);

    let group_btn = document.createElement('div');
    group_btn.id = 'group-btn';
    group.appendChild(group_btn);

    let btn_cancel = document.createElement('button');
    btn_cancel.id = 'btn-cancel';
    btn_cancel.textContent = "Cancel";
    btn_cancel.addEventListener('click', backPage);
    group_btn.appendChild(btn_cancel);

    let btn_buy = document.createElement('button');
    btn_buy.id = 'btn-buy';
    btn_buy.textContent = "Buy now";
    btn_buy.addEventListener('click', buying);
    group_btn.appendChild(btn_buy);

    let group_img = document.createElement('div');
    group_img.id = 'group_img';
    group.appendChild(group_img);

    let facebook = document.createElement('img');
    facebook.id = 'facebook';
    facebook.src ='image/fb-removebg-preview.png';
    group_img.appendChild(facebook);


    let twitter = document.createElement('img');
    twitter.id = 'twitter';
    twitter.src ='image/Twitter.png';
    group_img.appendChild(twitter);


    let save = document.createElement('img');
    save.id = 'save';
    save.src ='image/save.png';
    group_img.appendChild(save);



    let message = document.createElement('img');
    message.id = 'message';
    message.src ='image/message-removebg-preview.png';
    group_img.appendChild(message);


   }

displayProduct()

// link back to page product
function backPage(){
    window.location.href = "products.html";
}
// link to page buying 
function buying(){
    window.location.href = "buy_product.html";
}

