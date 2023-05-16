 // firebase congigs
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCkHSF-RrJO-NyQOo4PMf-qWKaIH_966VQ",
   authDomain: "connect-4b941.firebaseapp.com",
   databaseURL: "https://connect-4b941-default-rtdb.firebaseio.com",
   projectId: "connect-4b941",
   storageBucket: "connect-4b941.appspot.com",
   messagingSenderId: "256982332852",
   appId: "1:256982332852:web:46b6ea324d1903bd8e6ee1"
 };

 import { getDatabase, child, ref, set, update, remove,query,
    endBefore, limitToFirst, startAt, startAfter, endAt, equalTo,
     orderByChild, get, onValue } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";

 
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db=getDatabase(app);

// start taking values
var a,a1;
const dbref= ref(db);
get(child(dbref, "TotalCount/" + "A Cup of Milk"))
            .then((snapshot)=>{
                if(snapshot.exists()){
                     a= snapshot.val().count;
                     a1=parseInt(a);
                     

                
              

                     get(child(dbref, "TotalCount/" + "A Cup of Tea"))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    var b= snapshot.val().count;
                    var b1=parseInt(b);

                    get(child(dbref, "TotalCount/" + "Andazi"))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    var c= snapshot.val().count;
                    var c1=parseInt(c);
                    
                    get(child(dbref, "TotalCount/" + "Chapatis"))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    var d= snapshot.val().count;
                    var d1=parseInt(d);
                    get(child(dbref, "TotalCount/" + "A Cup of Coffee"))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    var e= snapshot.val().count;
                    var e1=parseInt(e);
                   
                    get(child(dbref, "TotalCount/" + "Kangumu"))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    var f= snapshot.val().count;
                    var f1=parseInt(f);
                    get(child(dbref, "TotalCount/" + "Bread"))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    var g= snapshot.val().count;
                    var g1=parseInt(g);
                    get(child(dbref, "TotalCount/" + "Ugali"))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    var h= snapshot.val().count;
                    var h1=parseInt(h);
                    get(child(dbref, "TotalCount/" + "Mchele"))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    var i= snapshot.val().count;
                    var i1=parseInt(i);
                    get(child(dbref, "TotalCount/" + "Beef"))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    var j= snapshot.val().count;
                    var j1=parseInt(j);
                    get(child(dbref, "TotalCount/" + "Greens"))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    var k= snapshot.val().count;
                    var k1=parseInt(k);
                    get(child(dbref, "TotalCount/" + "Cabbage"))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    var l= snapshot.val().count;
                    var l1=parseInt(l);
                    get(child(dbref, "TotalCount/" + "Githeri"))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    var m= snapshot.val().count;
                    var m1=parseInt(m);
                    get(child(dbref, "TotalCount/" + "Ndengu"))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    var n= snapshot.val().count;
                    var n1=parseInt(n);
 // Load the Visualization API and the piechart package.
 google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table, 
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

// Create the data table.
var data = new google.visualization.DataTable();
data.addColumn('string', 'Topping');
data.addColumn('number', 'Slices');
data.addRows([
  ['A Cup of Milk', a1],
  ['A Cup of Tea', b1],
  ['Andazi', c1],
  ['Chapatis', d1],
  ['A Cup of Coffee', e1],
  ['Kangumu', f1],
  ['Bread', g1],
  ['Ugali', h1],
  ['Mchele', i1],
  ['Beef', j1],
  ['Greens', k1],
  ['Cabbage', l1],
  ['Githeri', m1],
  ['Ndengu', n1]
]);

// Set chart options
var options = {'title':'A pie Chart View of Processed Orders Distribution',
               'width':800,
               
               'height':800};

// Instantiate and draw our chart, passing in some options.
var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
chart.draw(data, options);

}
}})
  }}  )
}}  )
}}  )
}}  )
}}  )
}}  )
}}  )
}}  )
}}  )
}}  )
}}  )
}}  )
}}  )

getAllStudents();

// Getting the number of all registered students:
function getAllStudents(){
            const dbref = ref(db);
            get(child(dbref, "register/CT201"))
            .then((snapshot)=>
            { 
                var add=0;
                snapshot.forEach(childsnapshot => {
                    add++;
                });
                document.querySelector("#allstd").value=add;
            }); 

        }
        //window.onload=getAllStudents;

        // search action
document.querySelector("#regg").addEventListener('click', e=>{
    var input_text= document.getElementById("regno").value;
    var regno=input_text.toUpperCase();
    document.querySelector("#user1").innerHTML=regno;
    document.querySelector("#user").innerHTML=regno;
    


    // search data from firebase

    //all processed Orders by thet reg
    getDataRealtime(regno);

    
    //all pcancelled Orders by thet reg
    getDataRealtime1(regno);







// all orders processed under that reg no:

   //filling the table
   var orderno =0;
   var tbody= document.getElementById('tbody1');

   // this fxn is to add a single item to the table
   function add_item(name, phone, piece, tprice){
       let trow = document.createElement("tr" );
       let td1 = document.createElement('td' );
       let td2 = document.createElement('td' );
       let td3 = document.createElement('td' );
       let td4 = document.createElement('td' );
       let td5 = document.createElement('td' );
       

       // the cells
       td1.innerHTML= ++orderno;
       td2.innerHTML= name;
       td3.innerHTML= phone;
       td4.innerHTML= piece;
       td5.innerHTML= tprice;

            // Adding the cells to the rows
            trow.appendChild(td1);
            trow.appendChild(td2);
            trow.appendChild(td3);
            trow.appendChild(td4); 
            trow.appendChild(td5);
           
            
            //add the row to the body
            tbody.appendChild(trow); 
   }
   function add_all_items(TheMeals){
    orderno=0;
    tbody.innerHTML="";
    TheMeals.forEach(element => {
        //match names to the fdb keys
        add_item( element.username, element.mealname, element.items, element.totalprice); 
        
    });

}

//function to read in realtime
function getDataRealtime(regno){
    //username

    const dbref= query(ref(db, "processed"), orderByChild("username"),equalTo(regno));
    onValue(dbref, (snapshot) =>{
        var orders=[];
        snapshot.forEach(childsnapshot => {
            orders.push(childsnapshot.val());
        });
        add_all_items(orders); 
    })
}

/*cancelled order implementation*/
var tbody1= document.getElementById('tbody2');

   // this fxn is to add a single item to the table
   function add_item1(name, phone, piece, tprice){
       let trow = document.createElement("tr" );
       let td1 = document.createElement('td' );
       let td2 = document.createElement('td' );
       let td3 = document.createElement('td' );
       let td4 = document.createElement('td' );
       let td5 = document.createElement('td' );
       

       // the cells
       td1.innerHTML= ++orderno;
       td2.innerHTML= name;
       td3.innerHTML= phone;
       td4.innerHTML= piece;
       td5.innerHTML= tprice;

            // Adding the cells to the rows
            trow.appendChild(td1);
            trow.appendChild(td2);
            trow.appendChild(td3);
            trow.appendChild(td4); 
            trow.appendChild(td5);
           
            
            //add the row to the body
            tbody1.appendChild(trow); 
   }
   function add_all_items1(TheMeals){
    orderno=0;
    tbody1.innerHTML="";
    TheMeals.forEach(element => {
        //match names to the fdb keys
        add_item1( element.username, element.mealname, element.items, element.totalprice); 
        
    });

}

//function to read in realtime
function getDataRealtime1(regno){
    //username
    var reff="cancelled"+"/"+String(regno);
    //console.log(reff);

    const dbref= query(ref(db, reff));
    onValue(dbref, (snapshot) =>{
        var orders=[];
        snapshot.forEach(childsnapshot => {
            orders.push(childsnapshot.val());
        });
        add_all_items1(orders); 
    })
}


// all orders cancelled by that reg number:







});
            
        

