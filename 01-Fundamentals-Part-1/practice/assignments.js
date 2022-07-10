console.log("\n\n***** ASSIGNMENTS *****\n\n")
// LECTURE: Values and Variables

const country = "Poland";
const continent = "Europe";
let population = 37950000;

console.log("Country: ", country);
console.log("Continent: ", continent);
console.log("Population: ", population);


// LECTURE: Data Types

const isIsIsland = false;

console.log("Is island: ", isIsIsland);


// LECTURE: let, const and var

const language = "polish";
console.log("Language: ", language);


// LECTURE: Basic Operators

const halfPopulation = population / 2;
console.log("Half population: ", halfPopulation);

population++;
console.log("Population + 1: ", population);

const finlandPopulation = 6000000;
console.log("Is ", country, " population higher than Finland: ", population > finlandPopulation);

const averagePopulation = 33000000;
console.log("Is ", country, " population higher than average: ", population > averagePopulation);

const countryDescription = country + " is in " + continent + ", and its " + population / 1000000 + " million population speak " + language + ".";
console.log(countryDescription);


// LECTURE: Strings and Template Literals

const countryDescriptionTemplateLiteral = `${country} is in ${continent}, and its ${population / 1000000} million population speak ${language}.`;
console.log(countryDescriptionTemplateLiteral);


// LECTURE: Taking Decisions: if / else Statements

if (population > averagePopulation) {
    console.log(`${country}'s population is above average.`);
}
else {
    console.log(`${country}'s population is ${(averagePopulation - population) / 1000000} million below average.`);
}
