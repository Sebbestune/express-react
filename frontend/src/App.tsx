import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks]: any = useState(null);

  const getBooksFromAPI = async () => {
    const url = "http://localhost:3000/api/books";
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    setBooks(result);
  };

  useEffect(() => {
    getBooksFromAPI();
  }, []);

  return (
    <>
      <h2>Book listing</h2>
      {books ? (
        books.books.map((book: any, id: number) => {
          return (
            <article key={id}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <p><b>{book.pages}</b></p>
            </article>
          );
        })
      ) : (
        <p>There are no books...</p>
      )}
    </>
  );
}

export default App;
