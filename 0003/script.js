
function changeColor(e){
    document.body.style.background = e.target.id; 
};

elements = document.getElementById("color-list").querySelectorAll('li');

for (var j=0; j<elements.length; j++){
    elements[j].style.color = elements[j].id;
    elements[j].addEventListener("click", changeColor);
}