import React, { Component } from "react";
import { Card, H5, Chip, Fab, Divider } from "ui-neumorphism";
import "./detail.css";

class Detail extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    const bookDetails = this.props.location.state[0];
    return (
      <>
        <Card inset rounded className='photo-card'>
          <div className=' blog-insert '>
            <img src={bookDetails.bookCover} alt={bookDetails.bookTitle} className="img-responsive center-block d-block mx-auto"/>
          </div>
          <div className='book-details'>
            <H5>{bookDetails.bookTitle}</H5>
            <p className='tagline'>{bookDetails.author}</p>
            <Chip label className='ma-3' size='large' type="info">{bookDetails.bookCategory.categoryName}</Chip>
            <Divider dense elevated/>
            <p>{bookDetails.review} </p>
            <Divider dense/>
            <Fab
              onClick={function () {
                window.open(`${bookDetails.downloadLink}`);
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
}

export default Detail;
