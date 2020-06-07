import React from "react";
import "./Header.sass";
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';

const Fragment = React.Fragment;
const { SubMenu } = Menu;

class Header extends React.Component{

    constructor(props) {
        super(props);
        this.state = {}
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
    };

    render(){
        
        return(
            <Fragment>
s
            </Fragment>
        )
    }
}


export default Header;