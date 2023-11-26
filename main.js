const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=";
let passLength = 12;
let passBox = document.querySelector("#pass1");

document.querySelector("button").addEventListener("click", function(){
    let password = "";
    for( let i = 0; i < passLength; i++ )
    {
        password += charSet[Math.floor(Math.random() * charSet.length)];
    }
    passBox.value = password;
});

document.querySelector("#copy1").addEventListener("click", function(){
    navigator.clipboard.writeText(passBox.value);
});
