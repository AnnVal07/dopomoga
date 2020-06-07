import React, {Fragment} from "react";
import { Button } from 'antd';
import { Link } from 'react-router-dom';

class ContentMainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="main-page">
          MainPAge
          <p className="content_1">dsdsdsdsd</p>
        </div>
        
        <Button>
          <Link to="/potrebuiuchi/" title="Потребують допомоги">
            Сторінка Потребують допомоги
          </Link>
        </Button>
        <Button>
          <Link to="/person/Vasia/" title="Потребують допомоги">
            Сторінка конкретної людини
          </Link>
        </Button>
      </Fragment>
    );
  }
}

export default ContentMainPage;
