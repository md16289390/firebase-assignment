import React from 'react';
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";

class NotFoundPage extends React.Component{
    render(){
        return <div>
            <h1>Page you are looking for is Not Found.</h1>
            <p>
              <Link to="/">
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                >
                  Go to Home
                </Button>
              </Link>
            </p>
          </div>;
    }
}
export default NotFoundPage;
