

function clr() {
    document.getElementById('result').value="";
}

function display(value) {
    document.getElementById('result').value+=value;  //multiple values are printed one by one
}

function result() {
    let x= document.getElementById('result').value;
    let y=eval(x);
    document.getElementById('result').value=y;
}