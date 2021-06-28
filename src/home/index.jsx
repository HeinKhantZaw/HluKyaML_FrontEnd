import React from "react";
import { useReducerAPI } from "../api";
import Book from "../components/bookView/book";
import BookLoadingAnim from "../components/bookLoadingAnim";
import { Card } from "ui-neumorphism";
import "./home.css";
const Home = () => {
  const bookList = useReducerAPI(
    "https://hlukyamel.pythonanywhere.com/api/bookList/"
  );
  if (bookList && bookList.data) {
    return (
      <>
        <div className='heading'>
          <h2>Recent Books</h2>
          <div className='container justify-content-center'>
            <Card inset className='px-2'>
              <div className='row'>
                {bookList.data.slice(0).reverse().map(
                  ({
                    id,
                    bookTitle,
                    bookCover,
                    author,
                    review,
                    downloadLink,
                    bookCategory,
                  }) => (
                    <Book
                      id={id}
                      bookTitle={bookTitle}
                      author={author}
                      bookCover={bookCover}
                      review={review}
                      downloadLink={downloadLink}
                      bookCategory={bookCategory}
                      key={id}
                    />
                  )
                )}
              </div>
            </Card>
          </div>
        </div>
      </>
    );
  }
  return <>{bookList.loading && <BookLoadingAnim />}</>;
};

export default Home;
