/*console.log('Hello World');
var myName='张华东';
console.log(myName);
alert(myName);*/

function aboutMeToggle(){
    var aboutMe =  document.getElementById("aboutMe");
    if(aboutMe.style.display=="none"){
        aboutMe.style.display="block";
    }
    else{
        aboutMe.style.display="none";
    }

}

function changeName(){
    if(document.getElementById("myName").innerHTML=="Hayden Zhang"){
        document.getElementById("myName").innerHTML = "张华东";
    }
    else{
        document.getElementById("myName").innerHTML = "Hayden Zhang";
    }
   
}

function mOver(){
    var image =  document.getElementById("myGithub");
    image.className="set-link-style";
    image.innerHTML = "https://github.com/webfolly/Hayden";
}
function mOut(){
    document.getElementById("myGithub").innerHTML = "";
}

function showModal(){
    document.getElementById("myModal").style.display = "block";
}
function closeModal(){
    document.getElementById("myModal").style.display = "none"; 
}

function modalSubmit(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    console.log("Name: "+name.value);
    console.log("email: "+email.value);
    console.log("message: "+message.value);
    name.value = name.getAttribute("placeholder");
    email.value = email.getAttribute("placeholder");
    message.value = message.getAttribute("placeholder");
    closeModal();
}
