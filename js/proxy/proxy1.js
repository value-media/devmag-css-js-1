let friend = new Proxy({ firstName: "Jane", lastName: "Doe" }, {
    get: (person, prop) => {
      if (prop === "fullName") {
        return `${person.firstName} ${person.lastName}`;
      }
      return person[prop];
    }
  });
  
  console.log(friend.fullName); // Output: Jane Doe