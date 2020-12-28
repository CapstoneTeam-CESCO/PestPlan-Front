import React from 'react';
import { Button } from '@material-ui/core';

function LoginBtn(props) {
    const { className, id } = props;

    return (
        <Button className={className} id={id} variant="contained" color="primary">
            LOGIN
        </Button>
    );
}

export default LoginBtn;