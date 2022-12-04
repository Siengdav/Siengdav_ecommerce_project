const product_view = document.querySelector(".btn-create");
const product_dailog = document.querySelector("#dailog");
const createEditButton = document.getElementById("createEditButton");
const search = document.querySelector("#search");
search.addEventListener("keyup", searchTask);
const formdelete = document.querySelector("#id01")


let productToEdit = null;

// HIDE / SHOW ---------------------------------------------------------
function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "block";
}
// savelocalStorages/loadProducts--------------------------------------------------------

function saveProducts() {
    localStorage.setItem("products", JSON.stringify(products));
}
  
function loadProducts() {
    let productsStorage = JSON.parse(localStorage.getItem("products"));
    if (productsStorage !== null) {
      products = productsStorage;
    }
}
function onAddproduct() {
    // TODO : when clicking on ADD button, display the dialog
    show(product_dailog);
    productToEdit = null;
    clearForm();
}

function onCancel(e) {
  // TODO : when clicking on ADD button, hide the dialog
  hide(product_dailog);
}
function onCreate() {
    // TODO : when clicking on CREATE button :
    // 1- Hide the dialog
    hide(product_dailog)
    // 2- Create a new question with the dialog form values
    
    if (productToEdit !== null) {
  
      let editproduct = products[productToEdit]
      editproduct.name = document.getElementById('name').value;
      editproduct.money = document.getElementById('money').value;
      editproduct.description = document.getElementById('description').value;
      editproduct.quantity = document.getElementById('quantity').value;
      editproduct.currency = document.getElementById('currency').value;
      editproduct.image = document.getElementById('imge').value;
    }
    else{

        let newProduct = {};
        newProduct.name = document.getElementById('name').value;
        newProduct.money = document.getElementById('money').value;
        newProduct.description = document.getElementById('description').value;
        newProduct.quantity = document.getElementById('quantity').value;
        newProduct.currency = document.getElementById('currency').value;
        newProduct.image = document.getElementById('imge').value;
        if (newProduct.name !== "" && newProduct.money >= 0 && newProduct.description !== ""&& newProduct.quantity !== "" && newProduct.currency !== "" && newProduct.image !== ""){
          
          products.push(newProduct);
        }
        else{
          let error = window.confirm("Are you sure you want to delete")
        }
    }
    
    // 3- Update the list of question, save question on local sotrage, update the view
    saveProducts();
    renderProducts();
}
function clearForm(){
    document.getElementById("name").value = "";
    document.getElementById("money").value = "";
    document.getElementById("description").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("currency").value="";
    document.getElementById('imge').value="";
  
}

function renderProducts() {
    // Remove the card container and create a new one
    let dom_questions_container = document.querySelector("#btn-container");
    dom_questions_container.remove();
    dom_questions_container = document.createElement("div");
    dom_questions_container.id = "btn-container";
    product_view.appendChild(dom_questions_container);
    for (let index = 0; index < products.length; index++) {
        let product = products[index];

        let card = document.createElement("div");
        card.className = "card";
        card.dataset.index = index;
        dom_questions_container.appendChild(card);

        let imageInfo = document.createElement("div");
        imageInfo.className = "image-info";
        card.appendChild(imageInfo);
    
        let productInfos = document.createElement("div");
        productInfos.className = "question-info";
        card.appendChild(productInfos);

        

        let actions = document.createElement("div");
        actions.className = "action";
        card.appendChild(actions);

        // create button delete and button edit(call function to delete and edit)----------------
        let img_edit=document.createElement('img')
        img_edit.className='img_edit'
        img_edit.id='idEdit'
        img_edit.src='image/edit.png'
        img_edit.addEventListener("click", editQuestion);
        actions.appendChild(img_edit)

        let img_dele=document.createElement('img')
        img_dele.className='img_dele'
        img_dele.id='idDele'
        img_dele.src='image/delete.png'
        img_dele.addEventListener("click", removeQuestion);
        actions.appendChild(img_dele)
       
        
    
        // create element image
        let pic = document.createElement("img");
        pic.src = product.image
        imageInfo.appendChild(pic);
        
        let  card_ans= document.createElement('div');
        card_ans.className = 'card_ans';
        productInfos.appendChild(card_ans);
        let name = document.createElement("span");
        name.className = "name";
        name.textContent = product.name;
        card_ans.appendChild(name);

        let ans4=document.createElement('span');
        ans4.className = "ans4";
        card_ans.appendChild(ans4);

        let price=document.createElement('span');
        price.className = "price";
        price.textContent = "Price : "+product.money + product.currency;
        card_ans.appendChild(price);



        let description=document.createElement('span');
        description.className = "description";
        description.textContent = "Description : "+product.description;
        card_ans.appendChild(description);

        let quantity=document.createElement('span');
        quantity.className = "quantity";
        quantity.textContent = "Quantity : "+product.quantity;
        card_ans.appendChild(quantity);

    }
}

function editQuestion(event) {
    productToEdit = event.target.parentElement.parentElement.dataset.index;
    
      // update the dialog with product informatin
      let product = products[productToEdit];
      console.log(product);
    
      document.getElementById("name").value = product.name;
      document.getElementById("money").value = product.money;
      document.getElementById("description").value = product.description;
      document.getElementById("quantity").value = product.quantity;
      document.getElementById("currency").value=product.currency;
      document.getElementById("imge").value = product.image;
  

      createEditButton.textContent = "Add++";
      show(product_dailog);
  
  }
// function Clear(){
//   hide(formdelete);
// }
// function cancelbtn(){
//   hide(formdelete);
// }
// function deletebtn(){
  
//   saveProducts();
//   renderProducts();

// }



function removeQuestion(event) {

    if (event.target.className ==="img_dele") {
      let isDelete = window.confirm("Are you sure you want to delete");
      if (isDelete){

        let index = event.target.parentElement.parentElement.dataset.index;

        products.splice(index, 1);
        
      }
      saveProducts();
      renderProducts();
    }
    window.location.reload();
}

function searchTask() {
  let text = search.value.toLowerCase();
  
  let tasks = document.querySelectorAll('.card_ans');
  console.log(tasks)
  for (let task of tasks) {

    let title = task.firstElementChild.textContent.toLowerCase();
    console.log(title)
    if (title.indexOf(text) === -1) {

      task.closest('.card').style.display = 'none';
    }
    else {
      task.closest('.card').style.display = 'flex';
    }
  }

}


loadProducts();
searchTask()
renderProducts();

