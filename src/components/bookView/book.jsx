import { Card, CardContent, CardAction } from "ui-neumorphism";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import TextTruncate from "react-text-truncate";
import "./book.css";

const Book = ({
  id,
  bookTitle,
  bookCover,
  author,
  review,
  downloadLink,
  bookCategory,
}) => (
  <div className='col d-inline-flex justify-content-center'>
    <Link
      to={{
        pathname: `${process.env.PUBLIC_URL}/detail/${id}`,
        state: [
          {
            id: id,
            bookTitle: bookTitle,
            bookCover: bookCover,
            author: author,
            review: review,
            downloadLink: downloadLink,
            bookCategory: bookCategory,
          },
        ],
      }}>
      <Card
        className='bookCard'
        width={230}
        height={350}
        style={{ marginTop: "30px", marginBottom: "30px" }}>
        <img
          className='rounded'
          src={bookCover}
          alt={bookTitle}
          style={{ height: "290px", width: "230px" }}
        />
        <CardContent>
          {/* <H5>
          <TextTruncate line={1} text={bookTitle} />
        </H5> */}
          <TextTruncate line={2} text={author} element='h6' />
        </CardContent>
        <CardAction className='justify-content-center'>
          {/* <Button rounded>View</Button> */}
        </CardAction>
      </Card>
    </Link>
  </div>
);

export default Book;

Book.propTypes = {
  id: PropTypes.number,
  bookTitle: PropTypes.string,
  author: PropTypes.string,
  bookCover: PropTypes.string,
  review: PropTypes.string,
  downloadLink: PropTypes.string,
  bookCategory: PropTypes.object,
};
