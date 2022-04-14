//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink);

function getDrink() {
  let drink = document.querySelector('input').value;

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data.drinks);

      // let ingredientsList = [];
      let ingredientsList = '';
      for (let i = 1; i < 15; i++) {
        if (data.drinks[0]['strIngredient' + i] != null) {
          console.log(data.drinks[0][`strIngredient` + i]);
          // ingredientsList.push(data.drinks[0]['strIngredient' + i]);
          ingredientsList += data.drinks[0]['strIngredient' + i] + ' ';
        }
        if (
          data.drinks[0]['strMeasure' + i] !== null &&
          data.drinks[0]['strMeasure' + i] !== ''
        ) {
          // ingredientsList.push(data.dinks[0]['strMeasure' + i]);
          ingredientsList += ' (' + data.drinks[0]['strMeasure' + i] + '), ';
        }
      }

      document.querySelector('img').src = data.drinks[0].strDrinkThumb;
      document.querySelector('h3').innerText = data.drinks[0].strInstructions;
      document.querySelector('h2').innerText = data.drinks[0].strDrink;
      document.querySelector('img').src = data.drinks[0].strDrinkThumb;
      document.querySelector('.ingredients').innerText = ingredientsList;
    })

    .catch((err) => {
      console.log(`error ${err}`);
    });
}
