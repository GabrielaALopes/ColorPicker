function updateSliders(range){
    debugger;
    var r = document.getElementById("rangeRed").value;
    document.getElementById('inputRed').value = r; 

    var g = document.getElementById("rangeGreen").value;
    document.getElementById('inputGreen').value = g; 
     
    var b = document.getElementById("rangeBlue").value;
    document.getElementById('inputBlue').value = b;  
       
    document.getElementById("box").style.backgroundColor = "rgb("+r+","+g+","+b+")";

}
