import React from "react";
import "./Header.sass";

const Fragment = React.Fragment;

class Header extends React.Component{

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render(){
        
        return(
            <Fragment>
                <div className='header-content'>
                    Header
                </div>
            </Fragment>
        )
    }
}


export default Header;