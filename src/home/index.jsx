import React, { Component } from "react";
import Book from "../components/bookView/book";
import BookLoadingAnim from "../components/bookLoadingAnim";
import { Card } from "ui-neumorphism";
import ReactPaginate from "react-paginate";
import "./home.css";
import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      offset: 0,
      data: [],
      perPage: 9,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  apiCall() {
    axios
      .get(`https://hlukyamel.pythonanywhere.com/api/bookList/`)
      .then((result) => {
        const data = result.data.slice(0).reverse();
        const slice = data.slice(
          this.state.offset,
          this.state.offset + this.state.perPage
        );
        const bookData = slice.map((book) => (
          <Book
            id={book.id}
            bookTitle={book.bookTitle}
            author={book.author}
            bookCover={book.bookCover}
            review={book.review}
            downloadLink={book.downloadLink}
            bookCategory={book.bookCategory}
            key={book.id}
          />
        ));
        this.setState({
          pageCount: Math.ceil(data.length / this.state.perPage),
          bookData,
          loading: false,
        });
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
      });
  }
  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.apiCall();
      }
    );
  };
  componentDidMount() {
    this.apiCall();
  }
  render() {
    return (
      <>
        {this.state.loading ? <BookLoadingAnim /> : null}
        {!this.state.loading ? <div className='heading'>
          <h2>Recent Books</h2>
          <div className='container justify-content-center'>
            <Card inset className='px-2'>
              <div className='row'>{this.state.bookData}</div>
              <ReactPaginate
                previousClassName={"neu-flat"}
                nextClassName={"neu-flat"}
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={this.state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={this.handlePageClick}
                containerClassName={
                  "pagination d-inline-flex justify-content-center align-items-center"
                }
                activeClassName={"neu-pressed"}
              />
            </Card>
          </div>
        </div> : null}
      </>
    );
  }
}
