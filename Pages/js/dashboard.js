        
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
        
        const firebaseConfig = {
          apiKey: "AIzaSyCkHSF-RrJO-NyQOo4PMf-qWKaIH_966VQ",
          authDomain: "connect-4b941.firebaseapp.com",
          databaseURL: "https://connect-4b941-default-rtdb.firebaseio.com",
          projectId: "connect-4b941",
          storageBucket: "connect-4b941.appspot.com",
          messagingSenderId: "256982332852",
          appId: "1:256982332852:web:46b6ea324d1903bd8e6ee1"
        };
      
        import { getDatabase, get,  ref, set,update, remove, child } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
       
        const app = initializeApp(firebaseConfig); 
        const db = getDatabase(app);
        const dbref = ref(db);
        var enterid1 = document.querySelector("#id1");
        var price1 = document.querySelector("#price1");
        var count1 = document.querySelector("#item1");
        
    get(child(dbref, "foodItem/" + enterid1.value))
    .then((snapshot)=>{
        if(snapshot.exists()){
            price1.value = snapshot.val().price ;
            
            count1.value= snapshot.val().count +" item(s) in Stock";
            

            // Implement  re-order level reminder
            let cnt1 =snapshot.val().count;
            if(parseInt(cnt1)<5){
                let p1=document.querySelector('#product1');
                let e1=document.querySelector('#derror1');
                if(cnt1==0){
                    e1.innerHTML=" &nbsp;&nbsp;&nbsp; Item Out of Stock!!"
                }
                p1.style.border="2px solid red";
                e1.style.display="flex";
            }

            
            
        } else {    
            alert("No data found");
        }
        
    })
    .catch((error)=>{
        alert(error)
    })

     //product 2
        var enterid2 = document.querySelector("#id2");
        var price2 = document.querySelector("#price2");
        var count2 = document.querySelector("#item2");
         
         //db output2
         get(child(dbref, "foodItem/" + enterid2.value))
         .then((snapshot)=>{
             if(snapshot.exists()){
                 price2.value = snapshot.val().price ;
                 count2.value= snapshot.val().count +" item(s) in Stock";

                   // Implement  re-order level reminder
            let cnt1 =snapshot.val().count;
            if(parseInt(cnt1)<5){
                let p1=document.querySelector('#product2');
                let e1=document.querySelector('#derror2');
                if(cnt1==0){
                    e1.innerHTML=" &nbsp;&nbsp;&nbsp; Item Out of Stock!!"
                }
                p1.style.border="2px solid red";
                e1.style.display="flex";
            }
                 
                 
                 
             } else {    
                 alert("No data found");
             }
             
         })
         .catch((error)=>{
             alert(error)
         })
         //product 3
        var enterid3 = document.querySelector("#id3");
        var price3 = document.querySelector("#price3");
        var count3 = document.querySelector("#item3");
         
         //db output3
         get(child(dbref, "foodItem/" + enterid3.value))
         .then((snapshot)=>{
             if(snapshot.exists()){
                 price3.value = snapshot.val().price ;
                 count3.value= snapshot.val().count +" item(s) in Stock";
                 
                 
            // Implement  re-order level reminder
            let cnt1 =snapshot.val().count;
            if(parseInt(cnt1)<5){
                
                let p1=document.querySelector('#product3');
                let e1=document.querySelector('#derror3');
                if(cnt1==0){
                    e1.innerHTML="Item Out of Stock!!"
                }
                p1.style.border="2px solid red";
                e1.style.display="flex";
            }
                 
                 
             } else {    
                 alert("No data found");
             }
             
         })
         .catch((error)=>{
             alert(error)
         })
         //product 4
        var enterid4 = document.querySelector("#id4");
        var price4 = document.querySelector("#price4");
        var count4 = document.querySelector("#item4");
         
         //db output4
         get(child(dbref, "foodItem/" + enterid4.value))
         .then((snapshot)=>{
             if(snapshot.exists()){
                 price4.value = snapshot.val().price ;
                 count4.value= snapshot.val().count +" item(s) in Stock";

                   // Implement  re-order level reminder
            let cnt1 =snapshot.val().count;
            if(parseInt(cnt1)<5){
                let p1=document.querySelector('#product4');
                let e1=document.querySelector('#derror4');
                if(cnt1==0){
                    e1.innerHTML=" &nbsp;&nbsp;&nbsp; Item Out of Stock!!"
                }
                p1.style.border="2px solid red";
                e1.style.display="flex";
            }
                 
                 
                 
             } else {    
                 alert("No data found");
             }
             
         })
         .catch((error)=>{
             alert(error)
         })
//product 5
var enterid5 = document.querySelector("#id5");
var price5 = document.querySelector("#price5");
var count5 = document.querySelector("#item5");
 
 //db output5
 get(child(dbref, "foodItem/" + enterid5.value))
 .then((snapshot)=>{
     if(snapshot.exists()){
         price5.value = snapshot.val().price ;
         count5.value= snapshot.val().count +" item(s) in Stock";

           // Implement  re-order level reminder
           let cnt1 =snapshot.val().count;
           if(parseInt(cnt1)<5){
               let p1=document.querySelector('#product5');
               let e1=document.querySelector('#derror5');
               if(cnt1==0){
                   e1.innerHTML=" &nbsp;&nbsp;&nbsp; Item Out of Stock!!"
               }
               p1.style.border="2px solid red";
               e1.style.display="flex";
           }
         
         
         
     } else {    
         alert("No data found");
     }
     
 })
 .catch((error)=>{
     alert(error)
 })
//product 6
var enterid6 = document.querySelector("#id6");
var price6 = document.querySelector("#price6");
var count6 = document.querySelector("#item6");
 
 //db output6
 get(child(dbref, "foodItem/" + enterid6.value))
 .then((snapshot)=>{
     if(snapshot.exists()){
         price6.value = snapshot.val().price ;
         count6.value= snapshot.val().count +" item(s) in Stock";

           // Implement  re-order level reminder
           let cnt1 =snapshot.val().count;
           if(parseInt(cnt1)<5){
               let p1=document.querySelector('#product6');
               let e1=document.querySelector('#derror6');
               if(cnt1==0){
                   e1.innerHTML=" &nbsp;&nbsp;&nbsp; Item Out of Stock!!"
               }
               p1.style.border="2px solid red";
               e1.style.display="flex";
           }
         
         
         
     } else {    
         alert("No data found");
     }
     
 })
 .catch((error)=>{
     alert(error)
 })
 //product 7
 var enterid7 = document.querySelector("#id7");
 var price7 = document.querySelector("#price7");
 var count7 = document.querySelector("#item7");
  
  //db output7
  get(child(dbref, "foodItem/" + enterid7.value))
  .then((snapshot)=>{
      if(snapshot.exists()){
          price7.value = snapshot.val().price ;
          count7.value= snapshot.val().count +" item(s) in Stock";

            // Implement  re-order level reminder
            let cnt1 =snapshot.val().count;
            if(parseInt(cnt1)<5){
                let p1=document.querySelector('#product7');
                let e1=document.querySelector('#derror7');
                if(cnt1==0){
                    e1.innerHTML=" &nbsp;&nbsp;&nbsp; Item Out of Stock!!"
                }
                p1.style.border="2px solid red";
                e1.style.display="flex";
            }
          
          
          
      } else {    
          alert("No data found");
      }
      
  })
  .catch((error)=>{
      alert(error)
  })
  //product 8
  var enterid8 = document.querySelector("#id8");
  var price8 = document.querySelector("#price8");
  var count8 = document.querySelector("#item8");
   
   //db output8
   get(child(dbref, "foodItem/" + enterid8.value))
   .then((snapshot)=>{
       if(snapshot.exists()){
           price8.value = snapshot.val().price ;
           count8.value= snapshot.val().count +" item(s) in Stock";

             // Implement  re-order level reminder
             let cnt1 =snapshot.val().count;
             if(parseInt(cnt1)<5){
                 let p1=document.querySelector('#product8');
                 let e1=document.querySelector('#derror8');
                 if(cnt1==0){
                     e1.innerHTML=" &nbsp;&nbsp;&nbsp; Item Out of Stock!!"
                 }
                 p1.style.border="2px solid red";
                 e1.style.display="flex";
             }
           
           
           
       } else {    
           alert("No data found");
       }
       
   })
   .catch((error)=>{
       alert(error)
   })
   //product 9
   var enterid9 = document.querySelector("#id9");
   var price9 = document.querySelector("#price9");
   var count9 = document.querySelector("#item9");
    
    //db output9
    get(child(dbref, "foodItem/" + enterid9.value))
    .then((snapshot)=>{
        if(snapshot.exists()){
            price9.value = snapshot.val().price ;
            count9.value= snapshot.val().count +" item(s) in Stock";
            
              // Implement  re-order level reminder
              let cnt1 =snapshot.val().count;
              if(parseInt(cnt1)<5){
                  let p1=document.querySelector('#product9');
                  let e1=document.querySelector('#derror9');
                  if(cnt1==0){
                      e1.innerHTML=" &nbsp;&nbsp;&nbsp; Item Out of Stock!!"
                  }
                  p1.style.border="2px solid red";
                  e1.style.display="flex";
              }
            
            
        } else {    
            alert("No data found");
        }
        
    })
    .catch((error)=>{
        alert(error)
    })
    //product 10
    var enterid10 = document.querySelector("#id10");
    var price10 = document.querySelector("#price10");
    var count10= document.querySelector("#item10");
     
     //db output10
     get(child(dbref, "foodItem/" + enterid10.value))
     .then((snapshot)=>{
         if(snapshot.exists()){
             price10.value = snapshot.val().price ;
             count10.value= snapshot.val().count +" item(s) in Stock";

               // Implement  re-order level reminder
            let cnt1 =snapshot.val().count;
            if(parseInt(cnt1)<5){
                let p1=document.querySelector('#product10');
                let e1=document.querySelector('#derror10');
                if(cnt1==0){
                    e1.innerHTML=" &nbsp;&nbsp;&nbsp; Item Out of Stock!!"
                }
                p1.style.border="2px solid red";
                e1.style.display="flex";
            }
             
             
             
         } else {    
             alert("No data found");
         }
         
     })
     .catch((error)=>{
         alert(error)
     })
//product 11
var enterid11 = document.querySelector("#id11");
var price11 = document.querySelector("#price11");
var count11 = document.querySelector("#item11");
 
 //db output11
 get(child(dbref, "foodItem/" + enterid11.value))
 .then((snapshot)=>{
     if(snapshot.exists()){
         price11.value = snapshot.val().price ;
         count11.value= snapshot.val().count +" item(s) in Stock";

           // Implement  re-order level reminder
           let cnt1 =snapshot.val().count;
           if(parseInt(cnt1)<5){
               let p1=document.querySelector('#product11');
               let e1=document.querySelector('#derror11');
               if(cnt1==0){
                   e1.innerHTML=" &nbsp;&nbsp;&nbsp; Item Out of Stock!!"
               }
               p1.style.border="2px solid red";
               e1.style.display="flex";
           }
         
         
         
     } else {    
         alert("No data found");
     }
     
 })
 .catch((error)=>{
     alert(error)
 })
 //product 12
 var enterid12 = document.querySelector("#id12");
 var price12 = document.querySelector("#price12");
 var count12 = document.querySelector("#item12");
  
  //db output13
  get(child(dbref, "foodItem/" + enterid12.value))
  .then((snapshot)=>{
      if(snapshot.exists()){
          price12.value = snapshot.val().price ;
          count12.value= snapshot.val().count +" item(s) in Stock";

            // Implement  re-order level reminder
            let cnt1 =snapshot.val().count;
            if(parseInt(cnt1)<5){
                let p1=document.querySelector('#product12');
                let e1=document.querySelector('#derror12');
                if(cnt1==0){
                    e1.innerHTML=" &nbsp;&nbsp;&nbsp; Item Out of Stock!!"
                }
                p1.style.border="2px solid red";
                e1.style.display="flex";
            }
          
          
          
      } else {    
          alert("No data found");
      }
      
  })
  .catch((error)=>{
      alert(error)
  })
  //product 13
  var enterid13 = document.querySelector("#id13");
  var price13 = document.querySelector("#price13");
  var count13 = document.querySelector("#item13");
   
   //db output13
   get(child(dbref, "foodItem/" + enterid13.value))
   .then((snapshot)=>{
       if(snapshot.exists()){
           price13.value = snapshot.val().price ;
           count13.value= snapshot.val().count +" item(s) in Stock";

             // Implement  re-order level reminder
             let cnt1 =snapshot.val().count;
             if(parseInt(cnt1)<5){
                 let p1=document.querySelector('#product13');
                 let e1=document.querySelector('#derror13');
                 if(cnt1==0){
                     e1.innerHTML=" &nbsp;&nbsp;&nbsp; Item Out of Stock!!"
                 }
                 p1.style.border="2px solid red";
                 e1.style.display="flex";
             }
           
           
           
       } else {    
           alert("No data found");
       }
       
   })
   .catch((error)=>{
       alert(error)
   })
  //product 14
  var enterid14 = document.querySelector("#id14");
  var price14= document.querySelector("#price14");
  var count14 = document.querySelector("#item14");
   
   //db output14
   get(child(dbref, "foodItem/" + enterid14.value))
   .then((snapshot)=>{
       if(snapshot.exists()){
           price14.value = snapshot.val().price ;
           count14.value= snapshot.val().count +" item(s) in Stock";

             // Implement  re-order level reminder
             let cnt1 =snapshot.val().count;
             if(parseInt(cnt1)<5){
                 let p1=document.querySelector('#product14');
                 let e1=document.querySelector('#derror14');
                 if(cnt1==0){
                     e1.innerHTML=" &nbsp;&nbsp;&nbsp; Item Out of Stock!!"
                 }
                 p1.style.border="2px solid red";
                 e1.style.display="flex";
             }
           
           
           
       } else {    
           alert("No data found");
       }
       
   })
   .catch((error)=>{
       alert(error)
   })

  