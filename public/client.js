var firebaseConfig = {
  apiKey: "AIzaSyDj1qzay1en6y0YezgdPesMwc2diCHy5JQ",
  authDomain: "argem-dergisi.firebaseapp.com",
  databaseURL: "https://argem-dergisi-default-rtdb.firebaseio.com",
  projectId: "argem-dergisi",
  storageBucket: "argem-dergisi.appspot.com",//Yarda Html Aç
  messagingSenderId: "588198437409",
  appId: "1:588198437409:web:4b8f4e0fe6e3b86cb3b960",
  measurementId: "G-SHMTQ59F9X"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Base Variables
const database=firebase.database();

var ref = database.ref('Yazılar')
ref.on("value",gotData,gotError);
function gotData(data){
  var write = data.val();
  var keys = Object.keys(write)
  for (var i = 0;i < 3; i++){
    var k = keys[i];
function addData(data)
  //Yusuf ne yaptın benim koduma
  //
  }
}
function gotError(err){
  console.log("Error!")
}
//Base Functions
