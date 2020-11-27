
    var buttons = document.querySelectorAll("button");
    console.log(buttons);
    for (var i = 0; i < buttons.length; i++) {
        var self = buttons[i];
        self.addEventListener('click', function (){fetchData(event)});


    }


    function fetchData(value) {
        console.log('clicked'+ value.target.id);
        fetch('./recipes.json',{credentials:"same-origin"})
            .then(function (response) {
                return response.json();
            })

            .then(function (data) {
                displayData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });


        function displayData(data) {

            var results = [];

            for (var i = 0; i < data.length; i++) {
                if (data[i].category == value.target.id) {
                    results.push(data[i]);
                }
            }
            console.log(results);
            var oldButton=document.getElementById(value.target.id);
            oldButton.remove();
            var mainContainer = document.getElementById(value.target.id+"-div");
            console.log(mainContainer);
            for (var j = 0; j < results.length; j++) {

                var recipeName = document.createElement("div");

                recipeName.innerHTML += "<button>"+results[j].name+ '</button>';
                recipeName.id=results[j].id;
                mainContainer.appendChild(recipeName);
                console.log(recipeName);

            }


        }
    }
