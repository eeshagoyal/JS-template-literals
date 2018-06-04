const petsData = [
  {
    name: "Purrsloud",
    species: "Cat",
    favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
    birthYear: 2018,
    photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
  },
  {
    name: "Barksalot",
    species: "Dog",
    birthYear: 2008,
    photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
  },
  {
    name: "Meowsalot",
    species: "Cat",
    favFoods: ["tuna", "catnip", "celery"],
    birthYear: 2017,
    photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
  }
];


//----------------------------------------------------------------------------------------------------------------------------

document.getElementById("app1").innerHTML = 'Hello';


//----------------------------------------------------------------------------------------------------------------------------

document.getElementById("app2").innerHTML = `
    Hello ${2+2}
    <p> hello </p>
    <p> blabla </p>
`;


//----------------------------------------------------------------------------------------------------------------------------

document.getElementById("app3").innerHTML = `
    <h1 class="app-title"> Pets(${petsData.length} results)</h1>
    <p class="info"> JS automatically converts JSON array to string with commas separating objects. </p>
    ${petsData}
    <p class = "footer">These ${petsData.length} pets were added recently. </p>
`;


//----------------------------------------------------------------------------------------------------------------------------

document.getElementById("app4").innerHTML = `
    <h1 class="app-title"> Pets(${petsData.length} results)</h1>
    <p class="info"> Removing commas. changing the separator using join()  </p>
    ${petsData.join('')}
    <p class = "footer">These ${petsData.length} pets were added recently. </p>
`;


//----------------------------------------------------------------------------------------------------------------------------

document.getElementById("app5").innerHTML = `
    <h1 class="app-title"> Pets(${petsData.length} results)</h1>
    <p class="info"> Removing [object object]. use map() to create new array of string from existing object. We had 3 objects in the json file so the function within map() runs 3 times. </p>
    ${petsData.map(function(){
            return 'hello ';
        }).join('')}
    <p class = "footer">These ${petsData.length} pets were added recently. </p>
`;


//----------------------------------------------------------------------------------------------------------------------------

document.getElementById("app6").innerHTML = `
    <h1 class="app-title"> Pets(${petsData.length} results)</h1>
    <p class="info"> Removing [object object]. use map(). Use parameter to fetch object. Use dot operator to access data members of JSON object. json will loop through each object.</p>
    ${petsData.map(function(pet){
            return `
                        <div class='animal'>
                            <img class="pet-photo" src= "${pet.photo}"/>
                            <h2 class="pet-name">${pet.name} <span class="species">(pet.species)</span></h2>
                        </div>
                    `
        }).join('')}
    <p class = "footer">These ${petsData.length} pets were added recently. </p>
`;



//----------------------------------------------------------------------------------------------------------------------------

function age7(birthYear) {
    var CalculateAge =  new Date().getFullYear() - birthYear;
    if(CalculateAge == 0)
        return 'Baby';
    else if (CalculateAge == 1)
        return '1 year old';
    else
        return `${CalculateAge} years old`;
}

function petTemplate7(pet){
    return `
                <div class='animal'>
                    <img class="pet-photo" src= "${pet.photo}"/>
                    <h2 class="pet-name">${pet.name} <span class="species">(pet.species)</span></h2>
                    <p> <strong>Age : </strong> ${age7(pet.birthYear)}</p>
                </div>
            `
}
document.getElementById("app7").innerHTML = `
    <h1 class="app-title"> Pets(${petsData.length} results)</h1>
    <p class="info"> Making our code more readable and modular. Make a seaparate function to generate dynamic html. Add age. Calculate using birth year. Baby || 1 year old || x yearS old.</p>
    ${petsData.map(petTemplate7).join('')}
    <p class = "footer">These ${petsData.length} pets were added recently. </p>
`;



//----------------------------------------------------------------------------------------------------------------------------

function age8(birthYear) {
    var CalculateAge =  new Date().getFullYear() - birthYear;
    if(CalculateAge == 0)
        return 'Baby';
    else if (CalculateAge == 1)
        return '1 year old';
    else
        return `${CalculateAge} years old`;
}

function foods8(favFoods){
    return `
        <h4> Favourite Foods </h4>
        <ul class="foods-list">
            ${favFoods.map(function(item){
                return `
                    <li>${item} </li>
                `
            }).join('')}
        </ul>
    `
}

function petTemplate8(pet){
    return `
                <div class='animal'>
                    <img class="pet-photo" src= "${pet.photo}"/>
                    <h2 class="pet-name">${pet.name} <span class="species">(pet.species)</span></h2>
                    <p> <strong>Age : </strong> ${age8( pet.birthYear)}</p>
                    ${pet.favFoods ? foods8(pet.favFoods) : ''}
                </div>
            `
}
document.getElementById("app8").innerHTML = `
    <h1 class="app-title"> Pets(${petsData.length} results)</h1>
    <p class="info"> Adding favourite food column which may exist or not. handles in function food(). First instinct to use "\${if (pet.favFoods) {foods()}} " invalid bcz if is not an expression. it is a statement. use ternary operator instead.</p>
    ${petsData.map(petTemplate8).join('')}
    <p class = "footer">These ${petsData.length} pets were added recently. </p>
`;


//----------------------------------------------------------------------------------------------------------------------------

function age(birthYear) {
    var CalculateAge =  new Date().getFullYear() - birthYear;
    if(CalculateAge == 0)
        return 'Baby';
    else if (CalculateAge == 1)
        return '1 year old';
    else
        return `${CalculateAge} years old`;
}

function foods(favFoods){
    return `
        <h4> Favourite Foods </h4>
        <ul class="foods-list">
            ${favFoods.map( item => `<li>${item} </li>`).join('')}
        </ul>
    `
    //${favFoods.map((item) =>{ return `<li>${item} </li>`}).join('')}
}

function petTemplate(pet){
    return `
                <div class='animal'>
                    <img class="pet-photo" src= "${pet.photo}"/>
                    <h2 class="pet-name">${pet.name} <span class="species">(pet.species)</span></h2>
                    <p> <strong>Age : </strong> ${age( pet.birthYear)}</p>
                    ${pet.favFoods ? foods(pet.favFoods) : ''}
                </div>
            `
}
document.getElementById("app9").innerHTML = `
    <h1 class="app-title"> Pets(${petsData.length} results)</h1>
    <p class="info"> Using ES6 JS to clean out the code. add => functions. Compare foods() function. </p>
    ${petsData.map(petTemplate).join('')}
    <p class = "footer">These ${petsData.length} pets were added recently. </p>
`;













