code html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Java Script</title>

</head>
<body>
    <div id="zone" style="height: 100px; width: 100px; border: solid ;" onmousemove="into()" onmouseout="out()" onmousedown="bgColor()">

    </div>


<script src="app.js"></script>
</body>
</html>
code java script

function max(a,b){
    if (a>b)
    return a
    else 
    return b

}

console.log(max(3,5))


function aff(char){
    return char
}

console.log(aff("bonjour"))

function somme(a,b){
    a=prompt("Donner le premier nombre")
    b=prompt("Donner la deuxieme nombre")
    alert(Number(a)+Number(b))
}

console.log(somme(3,7))


const container = document.getElementById("zone")

function into(){
    container.innerHTML = "Enter"
}

function out(){
    container.innerHTML = "Out"
}

function bgColor(){
    container.innerHTML = "bgColor"
}

function isString(data) {
    
    return typeof data === 'string';
}

console.log("Exercice 1 : ");
console.log(isString('hello65656')); 
console.log(isString([1, 6, 9])); 
console.log(isString(5)); 
console.log(isString("Is54545et")); 


function isBlank(input) {
    
    return input.trim() === '';
}

console.log(isBlank('')); 
console.log(isBlank('hjhjh')); 

function stringToArray(str) {
    
    return str.split(' ');
}

console.log(stringToArray("ISET Tataouine 2023 Groupe1er")); 


function extractString(str1, length) {
    
    return str1.slice(0, length);
}

console.log(extractString("Robin Singh", 4)); 
console.log(extractString("ISET Tataouine", 7)); 


function protectEmail(user_email) {
    var parts = user_email.split('@');
    var masked = parts[0].slice(0, Math.ceil(parts[0].length / 2)) + '...@' + parts[1];
    return masked;
}

console.log(protectEmail("isettataouine@gmail.com")); 




