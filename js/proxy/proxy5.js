let library = new Proxy({}, {
    get: (shelf, book) => {
      console.log(`Searching for "${String(book)}"...`);
      return `Here's "${String(book)}" for you!`;
    }
  });
  
  console.log(library.Moby_Dick);
  console.log(library.Pride_and_Prejudice);