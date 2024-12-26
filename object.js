const peopleDetails = [
  {
    name: "rahul",
    age: 30,
    place: 'pune',
    studies: "computer science",
    hobbies: ['chess', 'gardening'],
    isEmployed: true,
    occupation: 'software Engineer',
    transportPreferrence: 'car',
    pets: [
      {
        name: 'max',
        type: 'dog',
        age: 4,
        breed: 'golden retriever',
        isVaccinated: true,
        likes: ['playing fetch in the park']
      }
    ]
  },
  {
    name: "ananya",
    age: 30,
    studies: "computer science",
    place: 'banglore',
    hobbies: ['cooking'],
    isEmployed: true,
    occupation: 'software Engineer',
    transportPreferrence: 'public transport',
    pets: [
      {
        name: 'kiwi',
        type: 'parrot',
        breed: '',
        age: 5,
        isVaccinated: true,
        likes: ['mimicry', 'talking']
      }
    ]
  },
  {
    name: "ramesh",
    age: 45,
    studies: "",
    place: 'jaipur',
    hobbies: ['gardening', 'reading'],
    isEmployed: false,
    occupation: 'business',
    transportPreferrence: '',
    pets: [
      {
        name: 'bella',
        type: 'cat',
        breed: 'persian',
        age: 3,
        isVaccinated: true,
        likes: ['lounging in the sun']
      },
      {
        name: 'leo',
        type: 'cat',
        breed: 'persian',
        age: 3,
        isVaccinated: true,
        likes: ['lounging in the sun']
      }
    ]
  },

  {
    name: "kavya",
    age: 28,
    studies: "",
    place: 'chennai',
    hobbies: ['reading', 'watching'],
    isEmployed: false,
    occupation: 'professional dancer',
    transportPreferrence: '',
    pets: [
      {
        name: 'snowy',
        type: 'rabbit',
        breed: 'rescue',
        age: 2,
        isVaccinated: true,
        likes: ['hopping', 'nibling'],
      }
    ]
  }
];

// 1. How many individuals are currently employed?

const employeeCount = (details) =>
  details.filter((person) => person.isEmployed).length;

// 2. How many people own a car?

const carOwnersCount = (details) =>
  details.filter((person) => person.transportPreferrence === 'car').length;


// 3. How many pets are fully vaccinated?

const countVacinatedPets = (count, person) =>
  count + person.pets.filter((pet) => pet.isVaccinated).length;

const vaccinatedPetCount = (details) =>
  details.reduce(countVacinatedPets, 0);

// 4. What are the names of all the pets, and what type of type is each?

const petNamesAndTypes = (details) =>
  details.flatMap((person) => person.pets).map((pet) => [pet.name, pet.type]);

// 5. Which cities do the individuals live in?

const namesAndCities = (details) =>
  details.map((person) => [person.name, person.place]);

// 6. How many hobbies are shared across the group? What are they?

const sharedHobbies = (details) => {
  const AllHobbies = details.flatMap((person) => person.hobbies);

  return [AllHobbies.length, AllHobbies];
};

// 7. How many pets belong to people who are currently unemployed?

const petsOfUnEmployed = (details) =>
  details.filter((person) => !person.isEmployed).flatMap((person) => person.pets).length;

// 8. What is the average age of the individuals mentioned in the passage?

const ageAverage = (details) => {
  const ages = details.map((person) => person.age);

  return ages.reduce((age1, age2) => age1 + age2) / ages.length;
};

// 9. How many individuals have studied computer science, and how many of them have pets?

const petsHavingComputerScienceStudents = (details) => {
  const csPeople = details.filter((person) =>
    person.studies === 'computer science');
  const csPeopleHavingPets = csPeople.filter((person) =>
    person.pets.length !== 0);

  return [csPeople.length, csPeopleHavingPets.length];
};

// 10. How many individuals own more than one pet?

const individualsOwningMoreThan1Pet = (details) =>
  details.filter((p) => p.pets.length > 1).length;

// 11. Which pets are associated with specific favorite activities?

const petsWithFavActivities = (details) =>
  details.flatMap((p) => p.pets).filter((p) => p.likes.length !== 0).map((p) => p.name);

// 12. What are the names of all animals that belong to people who live in Bangalore or Chennai?

const petsOfPeopleLivingInCities = (details) =>
  details.filter((person) => person.place === 'banglore' || person.place === 'chennai').flatMap((person) => person.pets).map((pet) => pet.name);


// 13. How many vaccinated pets belong to people who do not own a car?

const vaccinatedPetsOfNotCarOwners = (details) =>
  details.filter((p) => p.transportPreferrence !== 'car').flatMap((p) => p.pets).filter((p) => p.isVaccinated).length;

// 14. What is the most common type of pet among the group?

const removeDuplicates = (array, pet) => {
  if (!array.includes(pet)) {
    array.push(pet);
  }
  return array;
};

const getFrequency = function (petTypes) {
  return (pet) => petTypes.filter((p) => p === pet).length;
};

const mostCommonPetType = (details) => {
  const allPetTypes = details.flatMap((p) => p.pets).map((p) => p.type);
  const types = allPetTypes.reduce(removeDuplicates, []);
  const maxIndex = types.map(getFrequency(allPetTypes)).reduce(
    (num1, num2) => num1 > num2 ? num1 : num2);

  return types[maxIndex];
};

// 15. How many individuals have more than two hobbies?

const individualHavingMoreThan2Hobbiles = (details) =>
  details.filter((person) => person.hobbies.length > 2).length;

// 16. How many individuals share at least one hobby with Ramesh?

const isHobbieIncluding = function (rameshHobbies) {
  return (result, hobbie) =>
    rameshHobbies.includes(hobbie) ? true : result;
};

const areHobbiesMatching = function (rameshHobbies) {
  return (person) =>
    person.hobbies.reduce(isHobbieIncluding(rameshHobbies), false);
};

const individualsSharingHobbies = (details) => {
  const rameshDetails = details.filter((person) => person.name === 'ramesh');
  const rameshHobbies = rameshDetails[0].hobbies;

  return details.filter(areHobbiesMatching(rameshHobbies)).length - 1;
};

// 17. Which pet is the youngest, and what is its name?

const youngestPet = (details) =>
  details.flatMap((person) => person.pets).reduce((pet1, pet2) => pet1.age < pet2.age ? pet1 : pet2).name;

// 18. What types of books are mentioned as interests, and who reads them?

// 19. How many individuals live in cities starting with the letter "B"?

const peopleLivingInBletterCity = (details) =>
  details.filter((person) => person.place[0] === "b").map((person) => person.name);

// 20. Which individuals do not own any pets?

const individualsHavingNoPets = (details) =>
  details.filter((person) => person.pets.length <= 0).map((person) => person.name);

// console.log(employeeCount(peopleDetails));
// console.log(carOwnersCount(peopleDetails));
// console.log(vaccinatedPetCount(peopleDetails));
// console.log(petNamesAndTypes(peopleDetails));
// console.log(namesAndCities(peopleDetails));
// console.log(sharedHobbies(peopleDetails));
// console.log(petsOfUnEmployed(peopleDetails));
// console.log(ageAverage(peopleDetails));
// console.log(petsHavingComputerScienceStudents(peopleDetails));
// console.log(individualsOwningMoreThan1Pet(peopleDetails));
// console.log(petsWithFavActivities(peopleDetails));
// console.log(petsOfPeopleLivingInCities(peopleDetails));
// console.log(vaccinatedPetsOfNotCarOwners(peopleDetails));
// console.log(mostCommonPetType(peopleDetails));
// console.log(individualHavingMoreThan2Hobbiles(peopleDetails));  
console.log(individualsSharingHobbies(peopleDetails));
// console.log(individualsHavingNoPets(peopleDetails));
// console.log(peopleLivingInBletterCity(peopleDetails));
// console.log(youngestPet(peopleDetails));
