import React from "react";
import "./header.css";
import { Card, Button } from "ui-neumorphism";
const Header = () => {
  return (
    <nav>
      <Card style={{ padding: "12px 0px" }}>
        <div className='menu'>
          <input type='checkbox' id='check' />
          <div className='logo'>
            <a href={`${process.env.PUBLIC_URL}/`}>Hlu Kya ML</a>
          </div>
          <ul>
            <label className='btn cancel' htmlFor='check'>
              <i className='fas fa-times'></i>
            </label>
            <li>
              <Button depressed size='large'>
                <a href={`${process.env.PUBLIC_URL}/`}>Home</a>
              </Button>
            </li>
            <li>
              <Button depressed size='large'>
                <a href={`${process.env.PUBLIC_URL}/genres`}>Genres</a>
              </Button>
            </li>
            <li>
              <Button depressed size='large'>
                <a href={`${process.env.PUBLIC_URL}/about`}>About</a>
              </Button>
            </li>
            <li>
              <Button depressed size='large'>
                <a target='_blank' href=' https://m.me/hlukyaml'>
                  Contact Us
                </a>
              </Button>
            </li>
          </ul>
          <label htmlFor='check' className='btn bars'>
            <i className='fas fa-bars'></i>
          </label>
        </div>
      </Card>
    </nav>
  );
};

export default Header;
