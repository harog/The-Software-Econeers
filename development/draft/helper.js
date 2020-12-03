window.addEventListener("load", start, false);

function start(){
    let button=document.getElementById("select");
    button.addEventListener('click',function(){change_recipe(event)})
}

function change_recipe(e) {
    let result = e.options[e.selectedIndex].value;
    let changed= document.getElementById("dropdown");

    changed.parentElement.previousSibling.previousSibling.textContent=result;
    changed.parentElement.previousSibling.textContent="";
    changed.remove();
    document.getElementById('select').remove();
}