const peopleDetails = [
  {
    personals: {
      name: "rahul",
      age: 30,
      place: 'pune',
      studies: "computer science",
      hobbies: ['chess', 'gardening'],
    },

    employment: {
      isEmployed: true,
      occupation: 'software Engineer',
    },

    transPort: {
      transportPreferrence: 'car',
    },

    pets: [
      {
        petName: 'max',
        animal: 'dog',
        petAge: 4,
        breed: 'golden retriever',
        isVaccinated: true,
        likes: ['playing fetch in the park']
      }
    ]
  },

  {
    personals: {
      name: "ananya",
      age: 30,
      studies: "computer science",
      place: 'banglore',
      hobbies: ['cooking'],
    },

    employment: {
      isEmployed: true,
      occupation: 'software Engineer',
    },

    transPort: {
      transportPreferrence: 'public transport',
    },

    pets: [
      {
        petName: 'kiwi',
        animal: 'parrot',
        breed: '',
        petAge: 5,
        isVaccinated: true,
        likes: ['mimicry', 'talking']
      }
    ]
  },

  {
    personals: {
      name: "ramesh",
      age: 45,
      studies: "",
      place: 'jaipur',
      hobbies: ['gardening', 'reading'],
    },

    employment: {
      isEmployed: false,
      occupation: 'business',
    },

    transPort: {
      transportPreferrence: '',
    },

    pets: [
      {
        petName: 'bella',
        animal: 'cat',
        breed: 'persian',
        petAge: 3,
        isVaccinated: true,
        likes: ['lounging in the sun']
      },

      {
        petName: 'leo',
        animal: 'cat',
        breed: 'persian',
        petAge: 3,
        isVaccinated: true,
        likes: ['lounging in the sun']
      }
    ]
  },

  {
    personals: {
      name: "kavya",
      age: 28,
      studies: "",
      place: 'chennai',
      hobbies: ['reading', 'watching'],

    },

    employment: {
      isEmployed: false,
      occupation: 'professional dancer',
    },

    transPort: {
      transportPreferrence: '',
    },

    pets: [
      {
        petName: 'snowy',
        animal: 'rabbit',
        breed: 'rescue',
        petAge: 2,
        isVaccinated: true,
        likes: ['hopping', 'nibling'],
      }
    ]
  }
];

// 1. How many individuals are currently employed?

const employeCount = (details) => {
  return details.filter((person) => person.employment.isEmployed).length;
};

// 2. How many people own a car?

const carOwnersCount = (details) => {
  return details.filter((person) => person.transPort.transportPreferrence === 'car').length;
};

// 3. How many pets are fully vaccinated?

const countVacinatedPets = (count, person) => {
  return count + person.pets.filter((pet) => pet.isVaccinated).length;
};

const vaccinatedPetCount = (details) => {
  return details.reduce(countVacinatedPets, 0);
};

// 4. What are the names of all the pets, and what type of animal is each?

const petNamesAndTypes = (details) => {
  const pets = details.flatMap((person) => person.pets);

  return pets.map((pet) => [pet.petName, pet.animal]);
};

// 5. Which cities do the individuals live in?

const namesAndCities = (details) => {
  return details.map((person) => [person.personals.name, person.personals.place]);
};

// 6. How many hobbies are shared across the group? What are they?

const sharedHobbies = (details) => {
  const AllHobbies = details.flatMap((person) => person.personals.hobbies);

  return [AllHobbies.length, AllHobbies];
};

// 7. How many pets belong to people who are currently unemployed?

const petsOfUnEmployed = (details) => {
  const unEmployed = details.filter((person) => !person.employment.isEmployed);

  return unEmployed.flatMap((person) => person.pets).length;
};

// 8. What is the average age of the individuals mentioned in the passage?

const ageAverage = (details) => {
  const ages = details.map((person) => person.personals.age);

  return ages.reduce((age1, age2) => age1 + age2) / ages.length;
};

// 9. How many individuals have studied computer science, and how many of them have pets?

const petsHavingComputerScienceStudents = (details) => {
  const csPeople = details.filter((person) =>
    person.personals.studies === 'computer science');
  const cspeopleHavingPets = csPeople.filter((person) =>
    person.pets.length !== 0);

  return [csPeople.length, cspeopleHavingPets.length];
};

// 10. How many individuals own more than one pet?

const individualsOwningMoreThan1Pet = (details) => {
  return details.filter((person) => person.pets.length > 1).length;
};

// 11. Which pets are associated with specific favorite activities?

const petsWithFavActivities = (details) => {
  const pets = details.flatMap((person) => person.pets);

  return pets.filter((pet) => pet.likes.length !== 0).map((pet) => pet.petName);
};

// 12. What are the names of all animals that belong to people who live in Bangalore or Chennai?

const petsOfPeopleLivingInCities = (details) => {
  const peopleLivingInCities = details.filter((person) =>
    person.personals.place === 'banglore' || person.personals.place === 'chennai');

  const pets = peopleLivingInCities.flatMap((person) => person.pets);

  return pets.map((pet) => pet.petName);
};

// 13. How many vaccinated pets belong to people who do not own a car?

const vaccinatedPetsOfNotCarOwners = (details) => {
  const peopleHadCar = details.filter((person) => person.transPort.transportPreferrence !== 'car');
  const pets = peopleHadCar.flatMap((person) => person.pets);

  return pets.filter((pet) => pet.isVaccinated).length;
};

// 14. What is the most common type of pet among the group?

const removeDuplicates = (array, pet) => {
  if (!array.includes(pet)) {
    array.push(pet);
  }
  return array;
};

const getFrequency = function (petTypes) {
  return function (pet) {
    return petTypes.filter((p) => p === pet).length;
  };
};

const mostCommonPetType = (details) => {
  const allPetTypes = details.flatMap((p) => p.pets).map((p) => p.animal);
  const types = allPetTypes.reduce(removeDuplicates, []);
  const maxIndex = types.map(getFrequency(allPetTypes)).reduce(
    (num1, num2) => num1 > num2 ? num1 : num2);

  return types[maxIndex];
};

// 15. How many individuals have more than two hobbies?

const individualHavingMoreThan2Hobbiles = (details) => {
  return details.filter((person) => person.personals.hobbies.length > 2).length;
};

// 16. How many individuals share at least one hobby with Ramesh?

const individualsSharingHobbies = (details) => {
  const rameshDetails = details.filter((person) => person.personals.name === 'ramesh');
  const rameshHobbies = rameshDetails[0].personals.hobbies;
};

// 17. Which pet is the youngest, and what is its name?

const youngestPet = (details) => {
  const pets = details.flatMap((person) => person.pets);

  return (pets.reduce((pet1, pet2) => pet1.age < pet2.age ? pet1 : pet2)).petName;
};
// 18. What types of books are mentioned as interests, and who reads them?

// 19. How many individuals live in cities starting with the letter "B"?
const peopleLivingInBletterCity = (details) => {
  const people = details.filter((person) => person.personals.place[0] === "b");

  return people.map((person) => person.personals.name);
};

// 20. Which individuals do not own any pets?
const individualsHavingNoPets = (details) => {
  const peopleWithNoPets = details.filter((person) => person.pets.length <= 0);

  return peopleWithNoPets.map((person) => person.personals.name);
};

// console.log(employmentCount(peopleDetails));
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
// console.log(individualsSharingHobbies(peopleDetails));
// console.log(individualsHavingNoPets(peopleDetails));
// console.log(peopleLivingInBletterCity(peopleDetails));
// console.log(youngestPet(peopleDetails));
