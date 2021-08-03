
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



// GOLBAL
var products = JSON.parse(localStorage.getItem('cart'));
var cartItems = [];
var cart_n = document.getElementById('cart_n');
var table = document.getElementById('table');
var total = 0;

//HTML
function tableHTML(i) {
  return `
      <tr>
      <th scope="row">${i + 1}</th>
      <td><img style="width:90px;" src="${products[i].url}"></td>
      <td>${products[i].name}</td>
      <td>1</td>
      <td>$${products[i].price}.00</td>
      </tr>
    `;
}

//BUY
function buy() {
  var d = new Date();
  var t = d.getTime();
  var counter=t;
  counter+=1;
  let db=firebase.database().ref("order/"+counter);
  let itemdb = {
    id: counter,
    order: counter-895,
    total: total
  }
  db.set(itemdb);
  swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Your payment is successful',
    text: `Thank you very much! See you next time ^_^`, // ${itemdb.order}
    showConfirmButton: true,
    timer: 50000
  });
  clean();
}

function clean() {
  localStorage.clear();
  for (let index = 0; index < products.length; index++) {
    table.innerHTML += tableHTML(index);
    total = total + parseInt(products[index].price);
  }
  total = 0;
  table.innerHTML = `
      <tr>
      <th></th>
      <th></th>
      <th></th>
      </tr>
    `;
  cart_n.innerHTML = '';
  document.getElementById("btnBuy").style.display = "none";
  document.getElementById("BtnClean").style.display = "none";
}

//RENDER
function render() {
  for (let index = 0; index < products.length ; index++) {
    table.innerHTML+= tableHTML(index);
    total=total+parseInt(products[index].price);
  }
  table.innerHTML += `
    <tr>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col">Total: $${total}.00</th>
    </tr>
    <tr>
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col">
        <button id="btnClean" onclick="clean()"  class="btn text-white btn-warning" >
          <a onclick="return confirm('Are you sure you want to delete this item?');"> Clean Shopping Cart</a>
        </button>
    </th>
    <th scope="col">
    <button id="btnBuy" onclick="buy()" class="btn btn-success" >Buy</button>
    </th>
    </tr>
  `;
  products=JSON.parse(localStorage.getItem("cart"));
  cart_n.innerHTML=`[${products.length}]`;
}



