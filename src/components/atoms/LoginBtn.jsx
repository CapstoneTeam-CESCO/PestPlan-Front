import React from 'react';
import { Button } from '@material-ui/core';

function LoginBtn(props) {
    const { className, id, onClick } = props;

    return (
        <Button className={className} id={id} variant="contained" color="primary" onClick={onClick}>
            LOGIN
        </Button>
    );
}

export default LoginBtn;