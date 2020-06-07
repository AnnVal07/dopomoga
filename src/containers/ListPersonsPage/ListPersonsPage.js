import React, {Fragment} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ListContentPage from './ListPersonsPageContent';
import "./List.sass";

class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        
        <Header />

        <ListContentPage/>

        <Footer />

      </Fragment>
    )
  }
}

export default FirstPage;
