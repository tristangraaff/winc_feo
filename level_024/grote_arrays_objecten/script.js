const countriesList = document.getElementById("countries");
const steenbokList = document.getElementById("steenbok");
const ccList = document.getElementById("cc");
const mostPeopleList = document.getElementById("most-people");
const buttonsList = document.getElementById("buttons");
const matchList = document.getElementById("match");
const allLists = [countriesList, steenbokList, ccList, mostPeopleList, buttonsList, matchList];

//Landenlijst

const createListOfCountries = () => {
    allLists.forEach(list => {
        list.innerHTML = "";
    });
    let arrayOfCountries = [];
    randomPersonData.forEach(result => {
        arrayOfCountries.push(result.region);
    })
    arrayOfCountries.sort();
    console.log(arrayOfCountries);
    arrayOfCountries.forEach(result => {
        const li = document.createElement("li");
        const liContent = document.createTextNode(`${result}`);
        li.appendChild(liContent);
        countriesList.appendChild(li);
    })
};

document.getElementById("countries-button").addEventListener("click", createListOfCountries);

//Steenbokvrouwenlijst

const isWoman = person => {
    if (person.gender === "female") {
        return true;
    };
};

const isOver30 = person => {
    if (person.age > 30) {
        return true;
    };  
};

const isSteenbok = person => {
    const birthday = person.birthday.dmy.slice(0, 2);
    const birthmonth = person.birthday.dmy.slice(3, 5);
    if (birthday > 22 && birthmonth == 12) {
        return true;
    } else if (birthday < 19 && birthmonth == 01) {
        return true;
    };
};

let steenbokArray = [];
const createArrayOfSteenbokWomen = () => {
    // document.getElementsByClassName("list").innerHTML = "";
    randomPersonData.forEach(person => {
        if (isWoman(person) === true && isOver30(person) === true && isSteenbok(person) === true) {
            steenbokArray.push(person.name.concat(" ", person.surname, " photo: ", person.photo));
        };                              
    });
    steenbokArray.sort();
    return steenbokArray;   
};

createArrayOfSteenbokWomen();

const addSteenbokWomenToDom = () => {
    allLists.forEach(list => {
        list.innerHTML = "";
    });
    steenbokArray.forEach(person => {
        const li = document.createElement("li");
        const liContent = document.createTextNode(person);
        li.appendChild(liContent);
        steenbokList.appendChild(li);
    });
};

document.getElementById("steenbok-button").addEventListener("click", addSteenbokWomenToDom);

//Verlopen creditcards

const expiresNextYear = person => {
    const thisYear = new Date().getFullYear();
    const expirationDate = person.credit_card.expiration;
    expirationYear = "20" + expirationDate.slice(2);
    return expirationYear - thisYear === 1
};

const isAdult = person => {return person.age > 17};

const showPeopleWithExpiringCards = () => {
    const filteredData = 
        randomPersonData
            .filter(isAdult)
            .filter(expiresNextYear);
    return filteredData;
};

const sortOnExpDate = () => {
    const sortedData = showPeopleWithExpiringCards().sort((a, b) => {
        return parseInt(a.credit_card.expiration) - parseInt(b.credit_card.expiration);
    });
    return sortedData;
};

const addExpiredPeepsToDom = () => {
    allLists.forEach(list => {
        list.innerHTML = "";
    });
    sortOnExpDate().forEach(person => {
        const li = document.createElement("li");
        const liContent = document.createTextNode(
            `Full name: ${person.name} ${person.surname}
             Phone number: ${person.phone}  
             Credit card number: ${person.credit_card.number} 
             Credit card exp. date: ${person.credit_card.expiration}`);
        li.appendChild(liContent);
        ccList.appendChild(li);
    });
};

document.getElementById("cc-button").addEventListener("click", addExpiredPeepsToDom);

// Meeste mensen

// const createArrayOfCountries = () => {
//     allLists.forEach(list => {
//         list.innerHTML = "";
//     });
//     let arrayOfCountries = [];
//     randomPersonData.forEach(result => {
//         if (arrayOfCountries.includes(result.region)) {
//             return
//         } else {
//             arrayOfCountries.push(result.region);
//         };     
//     });
//     arrayOfCountries.sort();
//     console.log(arrayOfCountries);
//     return arrayOfCountries;
// };

// createArrayOfCountries();
const addPeopleToCountryList = () => {
    const countriesObj = {};
    randomPersonData.forEach(person => {
        const country = person.region;
        if (!(country in countriesObj)){
            countriesObj[country] = 0;
        };
        countriesObj[country]++;
    });
    return countriesObj;
};

sortCountryPeopleList = () => {
    countriesObj = addPeopleToCountryList();
    countryArray = [];
    for (country in countriesObj) {
        countryArray.push([country, countriesObj[country]]);
    }
    countryArray.sort((a, b) => {
        return b[1] - a[1];
    });
    return countryArray;
};

//https://stackoverflow.com/questions/50556853/count-how-many-objects-in-an-array-has-a-certain-value-javascript
const addCountryPeopleListToDom = () => {
    allLists.forEach(list => {
        list.innerHTML = "";
    });
    sortCountryPeopleList().forEach(item => {
        const li = document.createElement("li");
        const liContent = document.createTextNode(`${item}`);
        li.appendChild(liContent);
        mostPeopleList.appendChild(li);
    });
};

document.getElementById("most-people-button").addEventListener("click", addCountryPeopleListToDom);

// Subopdracht: gemiddelde leeftijd

const showSubButtons = () => {
    allLists.forEach(list => {
        list.innerHTML = "";
    });
    const selectedCountries = ["Greece", "Mexico", "Netherlands", "Canada", "Azerbaijan"];
    selectedCountries.forEach(country => {
        const li = document.createElement("li");
        li.id = country;
        const button = document.createElement("button");
        button.classList.add("country-button");
        const buttonContent = document.createTextNode(`${country}`);
        buttonsList.appendChild(li).appendChild(button).appendChild(buttonContent);   
    });
};

const calcAvrgAge = country => {
    let sumOfAges = 0;
    let numberOfPeople = 0;
    randomPersonData.forEach(person => {
        if (person.region == country) {
            numberOfPeople++;
            sumOfAges = sumOfAges + person.age;
        };
    });
    avrgAge = (sumOfAges / numberOfPeople);
    roundedAvrgAge = Math.round(avrgAge);
    return roundedAvrgAge;
};


const addAvrgAgeToDom = () => {
    document.getElementById("avrg-age-button").addEventListener("click", function(e){
        showSubButtons();
        const countryButtons = document.getElementsByClassName("country-button");
        for (i = 0; i < countryButtons.length; i++) {
            countryButtons[i].addEventListener("click", function(e){
            const avAge = calcAvrgAge(e.target.textContent);
            const p = document.createElement("p");
            const pContent = document.createTextNode(`De gemiddelde persoon in ${e.target.textContent} is ${avAge} jaar oud.`);
            p.appendChild(pContent);
            document.getElementById(e.target.textContent).appendChild(p);
            });
        };
    });   
};

addAvrgAgeToDom();

// Subopdracht: matchmaking 

const sortPeople = () => {
    sortedPeople = randomPersonData.sort((a, b) => {
        return (a.name > b.name) ? 1 : -1;
    });
    return sortedPeople;
};

const zodiacs = [
    { sign: "Waterman", monthA: 01, monthB: 02, dayA: 21, dayB: 19 },
    { sign: "Vissen", monthA: 02, monthB: 03, dayA: 20, dayB: 20 },
    { sign: "Ram", monthA: 03, monthB: 04, dayA: 21, dayB: 20 },
    { sign: "Stier", monthA: 04, monthB: 05, dayA: 21, dayB: 20 },
    { sign: "Tweelingen", monthA: 05, monthB: 06, dayA: 21, dayB: 21 },
    { sign: "Kreeft", monthA: 06, monthB: 07, dayA: 22, dayB: 22 },
    { sign: "Leeuw", monthA: 07, monthB: 08, dayA: 23, dayB: 23 },
    { sign: "Maagd", monthA: 08, monthB: 09, dayA: 24, dayB: 22 },
    { sign: "Weegschaal", monthA: 09, monthB: 10, dayA: 23, dayB: 23 },
    { sign: "Schorpioen", monthA: 10, monthB: 11, dayA: 24, dayB: 22 },
    { sign: "Boogschutter", monthA: 11, monthB: 12, dayA: 23, dayB: 21 },
    { sign: "Steenbok", monthA: 12, monthB: 01, dayA: 22, dayB: 20 }
  ];

const getZodiacSign = person => {
    const birthday = person.birthday.dmy.slice(0, 2);
    const birthmonth = person.birthday.dmy.slice(3, 5);
    zodiac = zodiacs.filter(zsign => {
        return birthmonth == zsign.monthA && birthday >= zsign.dayA || birthmonth == zsign.monthB && birthday <= zsign.dayB;
    });
    return zodiac;
};

addAllPeopleToDom = () => {
    allLists.forEach(list => {
        list.innerHTML = "";
    });
    sortPeople().forEach(person => {
        const li = document.createElement("li");
        const p = document.createElement("p");
        const img = document.createElement("img");
        img.src = person.photo;
        li.appendChild(img);
        matchList.appendChild(li);
        getZodiacSign(person);
        li.appendChild(p);
        const name = document.createElement("span");
        name.classList.add("name");
        name.innerHTML = `Full name: ${person.name} ${person.surname} `;
        const country = document.createElement("span");
        country.classList.add("country");
        country.innerHTML = `Country: ${person.region} `;
        const age = document.createElement("span");
        age.classList.add("age");
        age.innerHTML = `Age: ${person.age} `;
        const zsign = document.createElement("span");
        zsign.id = "zodiac-sign";
        zsign.innerHTML = `Zodiac sign: ${zodiac[0].sign} `;
        p.appendChild(name);
        p.appendChild(country);
        p.appendChild(age);
        p.appendChild(zsign);
        const matchbtn = document.createElement("button");
        li.appendChild(matchbtn);
        matchbtn.classList.add("personal-match");
        matchbtn.innerHTML = "Match!"
    });
};

const removeElementsByClassName = classname => {
    const elements = document.getElementsByClassName(classname);
    for (i = 0; i < elements.length; i++) {
        elements[i].remove();
    };
};

const addMatches = () => {
    li = document.createElement("li");
    li.innerHTML = "Matches: "
    matchList.appendChild(li);
    sortPeople().forEach(person => {
        const zodiacsign = getZodiacSign(person);
        console.log(zodiacsign[0].sign);
        const zodiacelement = document.getElementById("zodiac-sign");
        console.log(zodiacelement.textContent);
        if (zodiacelement.textContent.includes(zodiacsign[0].sign)) {
             const name = document.createElement("span");
             name.classList.add("name");
             name.innerHTML = `Full name: ${person.name} ${person.surname} `;
             const country = document.createElement("span");
             country.classList.add("country");
             country.innerHTML = `Country: ${person.region} `;
             const age = document.createElement("span");
             age.classList.add("age");
             age.innerHTML = `Age: ${person.age} `;
             const zsign = document.createElement("span");
             zsign.id = "zodiac-sign";
             zsign.innerHTML = `Zodiac sign: ${zodiac[0].sign} `;
             const p = document.createElement("p");
             p.appendChild(name);
             p.appendChild(country);
             p.appendChild(age);
             p.appendChild(zsign);
             const img = document.createElement("img");
             img.src = person.photo;
             li = document.createElement("li");
             li.appendChild(img);
             li.appendChild(p);
             matchList.appendChild(li);
        };
    });
};

const matchPerson = () => {
    document.getElementById("match-button").addEventListener("click", function () {
        addAllPeopleToDom();
        const matchButtons = document.getElementsByClassName("personal-match");
        for (i = 0; i < matchButtons.length; i++) {
        matchButtons[i].addEventListener("click", function(e) {
            console.log(e.target);
            matchList.innerHTML = "";
            console.log(e.target.parentNode);
            li = e.target.parentNode;
            matchList.appendChild(li);
            removeElementsByClassName("personal-match");
            addMatches();
            });
        };
    });   
};

matchPerson();