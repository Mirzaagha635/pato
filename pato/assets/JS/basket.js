const div = document.getElementById('productsList');

function getData() {
    div.innerHTML=""
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach((item,index)=> {
        const box = document.createElement('div');
        box.className = 'boxdiv col-xl-4 col-lg-6 col-md-6 col-sm-12';
        box.innerHTML = `
        <img class='boximage' src="${item.image}" alt="">
        <p>${item.title}</p>
        <p>${item.price}$</p>
        <button class='boxbtn' onclick="removeToBasket(${index})">Remove To Basket</button>
        `;
        div.appendChild(box);
    });
    
}
getData()
function removeToBasket (index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index,1)
    localStorage.setItem('cart', JSON.stringify(cart))

    getData()
}