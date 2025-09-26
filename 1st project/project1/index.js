
// const btn=document.getElementById("butt");

// btn.addEventListener("click", function(){
//    btn.innerHTML="clicked";

// });
 const buttons = document.querySelectorAll("button");
 let yash=0;

if(yash==0){
  buttons.forEach(btn => {
    btn.addEventListener("click", function() {
        if(yash==0){
      this.innerText = "added to cart";
     yash=1;}
     
      else{
        this.innerText="ADD IN CART";
         yash=0;


      }
     // jis button pe click hua, wahi change hoga
    });
  })
}