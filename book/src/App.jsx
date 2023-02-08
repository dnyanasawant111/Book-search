import React, { useState } from "react";
import axios from "axios";

import "./App.css";

const App = () => {
  const [searchBook, setSearchBook] = useState("");
  const [books, setBooks] = useState({ items: [] });
  const onChange = e => {
    setSearchBook(e.target.value);
  
  };

  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

  const getBooks = async () => {
    const getData = await axios.get(`${API_URL}?q=${searchBook}`);
    setBooks(getData.data);
  };

  const onSubmit = e => {
    e.preventDefault();
    getBooks();
  };

  
  return (
    <section className="main">
      <form onSubmit={onSubmit}>
        
          <h1> Search for books </h1>
        <br/>
          <input className="rounded-pill"
            type="search"
          
            value={searchBook}
            onChange={onChange}
          /> <br/> <br/>
          <button type="submit" className="btn btn-success"> Search Book </button>
        
      </form>
      <p>
        {books.items.map((ele, i) => {
          return (
            <p key={i}>
              <div>
                <img
                  
                  src={`http://books.google.com/books/content?id=${ele.id
                    }&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                />
                <div>
                  <h1>{ele.volumeInfo.title}</h1>
                  
                  <p>{ele.volumeInfo.publishedDate}</p>
                </div>
              </div>
              <hr />
            </p>
          );
        })}
      </p>
    </section>
  );
};

export default App
