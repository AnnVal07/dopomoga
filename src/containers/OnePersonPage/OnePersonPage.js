import React, {Fragment} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import OnePersonPageContent from "./OnePersonPageContent";
import "./OnePersonPage.sass";

class OnePersonPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        
        <Header />

        <OnePersonPageContent/>

        <Footer />

      </Fragment>
    )
  }
}

export default OnePersonPage;
