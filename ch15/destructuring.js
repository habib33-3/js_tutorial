const person = {
  name: "alex",
  email: "name@email.com",
  address: {
    country: "Bangladesh",
    city: "CTG",
  },
};

let {
  name,
  email,
  address: { country, city },
} = person;

console.log(city);
