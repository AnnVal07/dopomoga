import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './sass/App.sass';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import MainPage from './containers/MainPage/MainPage';
import NotFoundPage from './containers/NotFoundPage/NotFoundPage';
import ListPersonsPage from './containers/ListPersonsPage/ListPersonsPage';
import OnePersonPage from './containers/OnePersonPage/OnePersonPage';

class Router extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {}
    }
    
    render(){

        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" 
                        render={(props) =>{
                            return <ErrorBoundary>
                                <MainPage {...props} />
                            </ErrorBoundary>
                        }}
                    />
                    <Route exact path="/potrebuiuchi/" 
                        render={(props)=>{
                        return <ErrorBoundary>
                            <ListPersonsPage {...props}/>
                        </ErrorBoundary>
                    }} />

                    <Route exact path="/person/:personId/" 
                        render={(props)=>{
                        return <ErrorBoundary>
                            <OnePersonPage {...props}/>
                        </ErrorBoundary>
                    }} />

                    <Route path="/404/" component={NotFoundPage}/>

                    <Route component={NotFoundPage}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;