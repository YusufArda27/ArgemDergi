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
function GetData(DataName){
  return firebase.database().once(DataName);
}
function SendData(DataName,DataToSend){
  Database.set({
    DataName:DataToSend
});


SendData("Nejat","SüperZeka");
console.log(GetData("Nejat"));
