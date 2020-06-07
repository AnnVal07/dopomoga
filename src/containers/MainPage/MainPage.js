import React, {Fragment} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ContentMainPage from './MainPageContent';
import "./MainPage.sass";


class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        
        <Header />

        <ContentMainPage/>

        <Footer />

      </Fragment>
    )
  }
}

export default FirstPage;
