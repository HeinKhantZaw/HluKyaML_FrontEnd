import React from "react";
import { useReducerAPI } from "../../api";
import { Link } from "react-router-dom";
import BookLoadingAnim from "../bookLoadingAnim";
import { Card, CardAction, H6, Button, Body1 } from "ui-neumorphism";

const Genres = () => {
  const categoryList = useReducerAPI(
    "https://hlukyamel.pythonanywhere.com/api/bookCategoryList/"
  );
  if (categoryList && categoryList.data) {
    return (
      <>
        <h2 className='text-center'>Book Genres</h2>
        <div className='container justify-content-center'>
          <Card inset rounded className='p-3'>
            <div className='row'>
              {categoryList.data.map((item) => (
                <div className='col d-inline-flex justify-content-center'>
                  <Card className='bookCard p-3 m-3' width={240} height={150}>
                    <H6 className='text-center'>{item.categoryName}</H6>
                    <Body1 className='text-center'>
                      {item.num_books} {item.num_books === 1 ? "book" : "books"}
                    </Body1>
                    <CardAction className='justify-content-center'>
                      <Link
                        to={{
                          pathname: `${process.env.PUBLIC_URL}/genres/${item.categoryName}`,
                        }}>
                        <Button depressed rounded>
                          View
                        </Button>
                      </Link>
                    </CardAction>
                  </Card>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </>
    );
  }
  return <>{categoryList.loading && <BookLoadingAnim />}</>;
};

export default Genres;
