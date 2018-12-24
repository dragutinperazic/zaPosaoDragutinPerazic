function readfiles(dir) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("results").innerHTML = this.responseText;
        if (document.getElementById("results").innerHTML=="" )   
           {
           	document.getElementById("results").innerHTML = "Nema rezultata";
           }
    
    }
  };
  xhttp.open("GET", "php.php?dir=" + dir, true);
  xhttp.send();
}
function grid()
{
document.getElementById("results").style.cssText ="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-column-gap:20px;overflow:auto;"
}
function list()
{
document.getElementById("results").style.cssText ="display:grid;grid-template-columns:1fr ;grid-row-gap:20px;overflow:auto;"
}