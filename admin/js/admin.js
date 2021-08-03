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
  



  //RENDER
  function renderTable(){
      var order= firebase.database().ref("order/");
      order.on("child_added", function(data) {
          var orderValue= data.val();
          document.getElementById("table").innerHTML+=`
            <tr>
                <td>${orderValue.id}</td>
                <td>${orderValue.order}</td>
                <td>${orderValue.total}</td>
            </tr>
          
          `;
      });
  }