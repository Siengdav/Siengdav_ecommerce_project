const productView = document.querySelector('.group-card');


const products = [
    {
      name: 'TUIYO',
      price: '100$',
      productImage : 'view/assets/image/card1.png'

    },
    {
      name: 'JFODFJ',
      price: '200$',
      productImage : 'view/assets/image/card2.png'
    },
    {
        name: "dfsdg",
        price: '20$',
        productImage : 'view/assets/image/card3.png'

    }

];


    
    for (let item of products) {

        let card = document.createElement('div');
        card.className = 'card';
    

        let card_left = document.createElement('div');
        card_left.className = 'card_left';
        card.appendChild(card_left);


        let text = document.createElement('div');
        text.className = 'text';
        card_left.appendChild(text);

        let p = document.createElement('div');
        p.className = 'p';
        let span1 = document.createElement('span');
        span1.textContent = "Name: "+ item.name; 
        let span2 = document.createElement('span');
        span2.textContent = "Price: "+ item.price;
        p.appendChild(span1);
        p.appendChild(span2);
        text.appendChild(p);

        let btn_card = document.createElement('div');
        btn_card.className = 'button-card';
        let btn = document.createElement('button');
        btn.textContent = 'Start Buying';
        btn_card.appendChild(btn);

        card_left.appendChild(btn_card);

        let image = document.createElement('div');
        image.className = 'card-image';
        let img = document.createElement('img');
        img.src = item.productImage;
        image.appendChild(img);

        card.appendChild(image);

        productView.appendChild(card)
        console.log(productView)
        
    }
    