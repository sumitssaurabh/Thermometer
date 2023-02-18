let cel = document.getElementById("cel");
 let fav = document.getElementById("fah");

cel.addEventListener("input" ,function(){
    console.log("cel ")

    let c = this.value;
    let f = (c* 9/5) +32;
    
    if(!Number.isInteger(f)){
        f = f.toFixed(4);
    }
    fah.value = f;
})



fah.addEventListener("input" ,function(){
    console.log("fah")
    let f = this.value;
     let c = (f-32) * 5/9;
     
    if(!Number.isInteger(f)){
        c = c.toFixed(4);
    }
     cel.value = c ;


})
