var firebaseConfig = {
  apiKey: "AIzaSyDLAgkcccs4XNMaqLelSzrtB-0N878W-uc",
  authDomain: "cupcake-566fb.firebaseapp.com",
  databaseURL: "https://cupcake-566fb-default-rtdb.firebaseio.com",
  projectId: "cupcake-566fb",
  storageBucket: "cupcake-566fb.appspot.com",
  messagingSenderId: "753064396654",
  appId: "1:753064396654:web:47f9372c0008d4faef237f",
  measurementId: "G-5JEQ2X5ZZ8"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();








  //data
  var products=[];
  var cartItems=[];
  var cart_n= document.getElementById("cart_n");
  //DISV
  var cakeDiv=document.getElementById("cakeDiv");
  var promotionDIV=document.getElementById("promotionDiv");
  var boxDIV= document.getElementById("boxDiv");

  //infomation
  var CUPCAKE=[
    {name: 'Cupcake 1', price:1},
    {name: 'Cupcake 2', price:2},
    {name: 'Cupcake 3', price:4},
    {name: 'Cupcake 4', price:6},
    {name: 'Cupcake 5', price:9},
    {name: 'Cupcake 6', price:5},
    {name: 'Cupcake 7', price:7},
    {name: 'Cupcake 8', price:8},
    {name: 'Cupcake 9', price:11},
    {name: 'Cupcake 10', price:3},
    {name: 'Cupcake 11', price:3},
    {name: 'Cupcake 12', price:3},
    
    
  ];
  var PROMO=[
    {name:'Promotion', price:10}
  ];
  var BOX=[
    {name:'Cupcake Box', price:12}
  ];
//HTML
function HTMLcupcakeProduct(con){
  let URL = `img/cupcake${con}.jpg`;
  let btn = `btnCUPCAKE${con}`;
  return `
    <div class="col-md-6">
    <div class="card mb-4 shadow-sm">
    <div class="cardImg">
    <img class="card-img-top" style="height:19rem;" src="${URL}" alt="Card
    Image">
    </div>
    <div class="card-body">
    <i style="color:orange;" class="fa fa-star"></i>
    <i style="color:orange;" class="fa fa-star"></i>
    <i style="color:orange;" class="fa fa-star"></i>
    <i style="color:orange;" class="fa fa-star"></i>
    <i style="color:orange;" class="fa fa-star"></i>
    <p class="card-text">Chocola</p>
    <p class="card-text">${CUPCAKE[con-1].name}</p>
    <p class="card-text">Price:$${CUPCAKE[con-1].price}.00</p>
    <div class="d-flex justify-content-between align-items-center">
    <div class="btn-group">
    <button type="button" onclick="cart2('${CUPCAKE[con-1].name}','
    ${CUPCAKE[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm
    btn-outline-warning">
    <a style="color:inherit;" href="cart.html">Buy</a></button>
    <button id="${btn}" type="button" onclick="cart('${CUPCAKE[con-1].name}','${CUPCAKE[con-1].price}','${URL}','${con}','${btn}')"
    class="btn btn-sm btn-outline-warning">Add to cart</button>
    </div>
    <small class="text-muted">Free Shipping</small>
    </div>
    </div>
    </div>
    </div>

    
  `
}

function HTMLpromotionProduct(){
  let URL = `img/carousel/slide4.jpg`;
  let btn = `btnpromotion`;
  return `
  <div class="row featurette">
  <div class="col-md-7">
  <h2 id="Promotions" style="padding-top:70px;">Promotions</h2>
  <p class="lead">
  
Sprinkles German Chocolate cupcake is a light chocolate cake topped with a rich golden caramel, topped with fresh coconut and crunchy pecans for a sweet treat you'll want to eat! Bake in time limits, so order today and enjoy tomorrow
  </p>
  <h3>$${PROMO[0].price}.00</h3>
  <button type="button" onclick="cart2('${PROMO[0].name}','${PROMO[0].price}','${URL}','0','${btn}')" class="btn btn-sm btn-outline-warning "> <a style="color:inherit;"
    href="cart.html">Buy</a></button>
    <button id="${btn}" type="button" onclick="cart('${PROMO[0].name}','${PROMO[0].price}','${URL}','0','${btn}')"
    class="btn btn-sm btn-outline-warning">Add to cart</button>
  </div>
  <div class="col-md-5">
  <img src="img/carousel/slide4.jpg" width="400" height="500">
  </div>
  </div>

  `
}

function HTMLcupcakeboxProduct(){
  let URL = `img/carousel/slide5.jpg`;
  let btn = `btnBOX`;
  return `
  <div class="row featurette">
  <div class="col-md-7 order-md-2">
  <h2 id="Box" style="padding-top:70px;">Cupcake Box</h2>
  <p class="lead">
  The only sticky situation you'd love to get into...German Chocolate cupcake is back! This light chocolate cake topped with rich, golden caramel laced with fresh coconut and crunchy pecans laced with caramel is ooey gooey delicious. Treat yo’ self before it’s gone! Baking 1/18-1/31
  </p>
  <h3>$${BOX[0].price}.00</h3>
  <button type="button" onclick="cart2('${BOX[0].name}','${BOX[0].price}','${URL}','0','${btn}')" class="btn btn-sm btn-outline-warning"> <a style="color:inherit;"
    href="cart.html">Buy</a></button>
    <button id="${btn}" type="button" onclick="cart('${BOX[0].name}','${BOX[0].price}','${URL}','0','${btn}')"class="btn btn-sm btn-outline-warning">Add to cart</button>
  </div>
  <div class="col-md-5 order-md-1">
  <img src="img/carousel/slide5.jpg" width="400" height="300">
  </div>
  </div>
  `
}
//Animation
function animation() {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: ' Added to cart successfully '
  })
}
//CART FUNCTION

function cart(name,price,url,con,btncart){
  var item={
    name:name,
    price:price,
    url:url
  }
  cartItems.push(item);
  let storage = JSON.parse(localStorage.getItem("cart"));
 if (storage==null) {
   products.push(item);
   localStorage.setItem("cart",JSON.stringify(products));
 } else {
   products= JSON.parse(localStorage.getItem("cart"));
   products.push(item);
   localStorage.setItem("cart", JSON.stringify(products));
 }
 products= JSON.parse(localStorage.getItem("cart"));
 cart_n.innerHTML=`[${products.length}]`;
 document.getElementById(btncart).style.display="none";
 
 animation();
}

function cart2(name,price,url,con,btncart){
var item={
  name:name,
  price:price,
  url:url
  }
  cartItems.push(item);
  let storage= JSON.parse(localStorage.getItem("cart"));
 if (storage==null) {
   products.push(item);
   localStorage.setItem("cart",JSON.stringify(products));
 } else {
   products= JSON.parse(localStorage.getItem("cart"));
   products.push(item);
   localStorage.setItem("cart", JSON.stringify(products));
 }
 products=JSON.parse(localStorage.getItem("cart"));
 cart_n.innerHTML=`[${products.length}]`;
 document.getElementById(btncart).style.display = "none";

}




function render(){
  for (let index = 1; index <=12; index++) {
    cakeDiv.innerHTML+= `${HTMLcupcakeProduct(index)}`;
  }
  promotionDiv.innerHTML+= `${HTMLpromotionProduct()}`;
  boxDiv.innerHTML+= `${HTMLcupcakeboxProduct()}`;
  if (localStorage.getItem("cart")==null) {
    
  } else {
    products=JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
  }
};
