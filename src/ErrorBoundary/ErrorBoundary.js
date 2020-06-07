import React from "react";
import './ErrorBoundary.sass';

const Fragment = React.Fragment;
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        console.log('error on page', error);
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        let {
            children: {
                props: {
                    location: {
                        pathname = ''
                    } = {}
                } = {}
            } = {}
        } = this.props;

        console.log('error', pathname);
    }

    render() {
        if (this.state.hasError) {
            return (
                <Fragment>
                    ERROR PAGE
                </Fragment>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;