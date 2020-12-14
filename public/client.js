var firebaseConfig = {
  apiKey: "AIzaSyDj1qzay1en6y0YezgdPesMwc2diCHy5JQ",
  authDomain: "argem-dergisi.firebaseapp.com",
  databaseURL: "https://argem-dergisi-default-rtdb.firebaseio.com",
  projectId: "argem-dergisi",
  storageBucket: "argem-dergisi.appspot.com",
  messagingSenderId: "588198437409",
  appId: "1:588198437409:web:4b8f4e0fe6e3b86cb3b960",
  measurementId: "G-SHMTQ59F9X"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
//Base Variables
const Database=firebase.database;
//Base Functions
function AddTextToDataBase(WritingName,WritersName,Writing,Topic,WritingCodename){
  let DatabasePort=Database().ref("/"+WritingCodename);
  DatabasePort.set({
    Yazar:WritersName,
    YazıAdı:WritingName,
    Yazı:Writing,
    YazıKonusu:Topic,
  });
}
function GetWriting()
{
  var name;
  var text;
  var topic;
  var Writer;
  Database().ref("/"+"Ncode").on("value", function(snapshot) {
   Writer= snapshot.val().Yazar;
   name= snapshot.val().YazıAdı;
   topic= snapshot.val().YazıKonusu;
   text= snapshot.val().Yazı;
});
  return {
    YazıAdı:name,
    YazarAdı:Writer,
    Yazı:text,
    YazıKonusu:topic,
  };
}
