import React from "react";
import { Card, H5, Chip, Fab, Divider } from "ui-neumorphism";
import "./detail.css";
import { useReducerAPI } from "../api";
import { useParams } from "react-router-dom";
import BookLoadingAnim from "../components/bookLoadingAnim";

const Detail = () => {
  let { book_id } = useParams();
  const bookDetails = useReducerAPI(
    `https://hlukyamel.pythonanywhere.com/api/bookList/${book_id}`
  );
  if (bookDetails && bookDetails.data) {
    let results = bookDetails.data;
    return (
      <>
        <Card inset rounded className='photo-card'>
          <div className=' blog-insert '>
            <img
              src={results.bookCover}
              alt={results.bookTitle}
              className='img-responsive center-block d-block mx-auto'
            />
          </div>
          <div className='book-details'>
            <H5>{results.bookTitle}</H5>
            <p className='tagline'>{results.author}</p>
            <Chip label className='ma-3' size='large' type='info'>
              {results.bookCategory.categoryName}
            </Chip>
            <Divider dense elevated />
            <p>{results.review} </p>
            <Divider dense />
            <Fab
              onClick={function () {
                window.open(`${results.downloadLink}`);
              }}>
              &nbsp;
              <span style={{ fontSize: "30px", color: "#46484b" }}>
                &#11015;
              </span>
              &nbsp;Download&nbsp;
            </Fab>
          </div>
        </Card>
      </>
    );
  }
  return <>{bookDetails.loading && <BookLoadingAnim />}</>;
};

export default Detail;
