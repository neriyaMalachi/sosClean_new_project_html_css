
class product {
    constructor(_parent, _type, _img, _count, _price) {
        this.parent = _parent;
        this.img = _img;
        this.type = _type;
        this.price = _price;
        this.count = _count;
    }
    render() {
        let myDiv = document.createElement("div")
        myDiv.className = "root";
        document.querySelector(this.parent).append(myDiv);
        myDiv.innerHTML = `
            <div class="root2">
                <img id="img" src="/project/public/images/softness${this.img}" alt="not worcking ">
               
                 <p id="type"> ${this.type} </p>
                <h2 id="price">  ${this.price} :מחיר </h2>
                <div id="send" style="cursor: pointer"> הוסף להגלת קניות </div>
            </div>
        `
        var addToCartButton = document.getElementsByClassName('#send');
        for (var i = 0; i < addToCartButton.length; i++) {
            var butoon = addToCartButton[i];
            butoon.addEventListener('click', addToCartClicked)
        }
        let send = myDiv.querySelector('#send');
        send.addEventListener('click', () => {

            let data = {
                img: this.img,
                type: this.type,
                price: this.price,
                count: this.count
            }
            localStorage.setItem('info', JSON.stringify(data));
            addItemToCart( data.type, data.price,data.img, data.count)
        })
   

            //מסדר שלא יהיה הרבה מספרים אחרי הנקודה
            var quantityInputs = document.getElementsByClassName('cart-quantity-input')
            for (var i = 0; i < quantityInputs.length; i++) {
                var input = quantityInputs[i]
                input.addEventListener('change', quantityChanged)
            }

            
            //מוחק מוצר          
            var removCartItemButoon = document.getElementsByClassName('btn-danger')
            for (var i = 0; i < removCartItemButoon.length; i++) {
                var butoon = removCartItemButoon[i]
                butoon.addEventListener('click', removCartItem)
            }

    }

}

//מוחק מוצר       
function removCartItem(event) {
    var butoonClicked = event.target
    butoonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}
//מסדר את הסכום בתותל
function updateCartTotal(event) {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')
        [0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value;
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = 'ש"ח ' + total
}
//מוסיף ממוצר
function addToCartClicked(event) {
    var butoon = event.target
    var shopeItem = butoon.parentElement.parentElement
    var type =  shopeItem.getElementsByClassName('type')[0].innerText
    var price = shopeItem.getElementsByClassName('price')[0].innerText
    var img =   shopeItem.getElementsByClassName('img')[0].src
    console.log(type, price, img)
    addItemToCart(type, price, img);
    updateCartTotal();
}
//מוסיף מוצר 
function addItemToCart(type, price, img) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNamas = cartItems.getElementsByClassName('cart-item-title')
    // for (var i = 0; i < cartItemNamas.length;i++){
    //     if(cartItemNamas[i].innerText == type){
    //         alert("!!!המוצר קיים כבר בסל")
    //         return;
    //     }else{
    //         alert("הפריט נוסף להגלה")
           
    //     }
    // }
    var cartRowContents = `
    <div class="cart-item cart-column">
    <img class="cart-item-image" src="/project/public/images/softness/${img}" alt="not worcking"
    width="100" height="100">
    <span class="cart-item-title">${type}</span>

<span class="cart-price cart-column">${price}</span>

    <input class="cart-quantity-input" type="number" value="1">
    <button class="btn btn-danger" type="button">REMOVE</button>
</div>


`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('click', quantityChanged)
    updateCartTotal();
}
//גורם לווליו שיהיה מינימום 1
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal()
}
