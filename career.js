const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customtxt = document.getElementById("custom-text");

customBtn.addEventListener("click",function(){
    realFileBtn.click();

});

realFileBtn.addEventListener("change",function(){
    if(realFileBtn.value){
        customtxt.innerHTML=realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    }
    else{
        customtxt.innerHTML = "No file chosen, yet";
    }
});
