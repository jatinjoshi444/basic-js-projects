var cel=document.getElementById("cele");
var fah=document.getElementById("fah");

cel.addEventListener('input', function(){
   let c= this.value;
   let f= c * 9/5 + 32 ;
    fah.value =f;
});


fah.addEventListener('input', function(){
    let f= this.value;
   let c= (f - 32) * 5/9 ;
   cel.value =c;
});

//menu-bar

window.addEventListener('scroll', function(){

    let navbar = document.getElementById("menu-bar");
    if(window.pageYOffset >= 190){
        navbar.classList.add('sticky')
    }else{
        navbar.classList.remove('sticky')
    }
})

//third project

let textbox= document.getElementById("textbox");
textbox.addEventListener('input', function(){
    var text= this.value;
    let char=text.length;
    document.getElementById("char").innerHTML=char;


    text=text.trim();
    let words=text.split(" ");
    let cleanlist=words.filter(function(elm){
        return elm != "";
    });
    document.getElementById("word").innerHTML=cleanlist.length;
});

// forth project

let username=document.getElementById("username");
let password=document.getElementById("password");
let flag=1;

function validatefrom(){
    if(username.value ==""){
        document.getElementById("usererror").innerHTML="User name is empty"
        flag=0;
    }else if(username.value.length < 3){
        document.getElementById("usererror").innerHTML="User name requared 3 character"
        flag=0;
    }else{
        document.getElementById("usererror").innerHTML= "";
        flag=1;
    }



    if(password.value == ""){
        document.getElementById("passerror").innerHTML="password is empty"
        flag=0;
    }else{
        document.getElementById("passerror").innerHTML= "";
        flag=1;
    }
    if(flag){
        return true;
    }else{
        return false;
    }
}

//fifth project

function changeBG(color){
    document.body.style.backgroundColor=color;
}