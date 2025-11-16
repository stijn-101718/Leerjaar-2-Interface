export const doubleNumbers = (getallen) => {
    return getallen.map(getal  => getal * 2);
};


export const filterBigNumbers = (getallen1) => {
    return getallen1.filter((getal)  => getal > 50  );
};



export const formatUser = (user) => {
  return `Gebruiker ${user.name} is ${user.age} jaar oud.`;
};





