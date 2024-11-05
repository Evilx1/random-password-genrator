
setTimeout(()=>{
    alert("click on UI button to genrate password")
},1500)
var password = "";
let password_genrator = () =>{
    let password1 = "";
    for(i=1;i<9;i++){
        let a =  Math.floor(Math.random() * 26)
        let outcome = String.fromCharCode(97 + a)
        password1 = password1 + outcome
    }
    password1 = password1 + "@"
    let randomNumber =  Math.floor(Math.random() * (9999 - 1000 +1) + 1000)
    password1 = password1 + randomNumber
    return password1
}

function genratePass(){
    let pass = password_genrator()
    console.log(pass)
    document.getElementById("pass").innerHTML = pass
}
    


