import React from "react";
import { Card } from "ui-neumorphism";

const Footer = () => {
  return (
      <Card>
    <footer
      className='footer txt-center fx-center'>
      &copy; {new Date().getFullYear()} Made with &#10084; by Hlu Kya ML team
    </footer>
    </Card>
  );
};

export default Footer;
