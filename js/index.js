// console.log("Hello Sunnu");
// var a = prompt("Hey Sunnu");
// if(a == "Hey" || a == "Hey Baby") {
//   alert("Muah");
// } else {
//   alert("Bye-Bye Tata");
// }

document.getElementById("plus").addEventListener("click",function(){

var a = document.getElementById("number").innerHTML;
document.getElementById("number").innerHTML = (parseInt(a)+1);
document.getElementById("refresh").style.display = "inline-block"

});

document.getElementById("minus").addEventListener("click",function(){
if(document.getElementById("number").innerHTML === "0") {
    document.getElementById("number").innerHTML = parseInt(0);
} else {
  var a = document.getElementById("number").innerHTML;
  document.getElementById("number").innerHTML = (parseInt(a)-1);
}
});

document.getElementById("refresh").addEventListener("click",function(){
  document.getElementById("number").innerHTML = parseInt(0);
  document.getElementById("refresh").style.display = "none"
});
