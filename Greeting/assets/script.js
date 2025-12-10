let names = [];

function addName() {
  let n = prompt("Enter name:");
  names.push(n);
  
  let output = "";
  for (let i = 0; i < names.length; i++) {
    output += "Hello " + names[i] + "<br>";
  }
  
  document.getElementById("output").innerHTML = output;
}