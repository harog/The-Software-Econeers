
var recipe=document.getElementById('1');
recipe.addEventListener('click',function(){getRecipe(event)} );


function getRecipe(e){
    console.log(e)
    document.getElementById('1').innerHTML = "Clicked and Changed";
    console.log('clicked'+ e.target.id);
    fetch('./recipes.json',{credentials:"same-origin"})
        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            viewRecipe();
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });
    function viewRecipe() {

    }
}