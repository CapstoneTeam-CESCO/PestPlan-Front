import React from 'react';
import { Button } from '@material-ui/core';

function PageBtn(props) {
    const { className, contents, onClick } = props;

    return (
        <Button className={className} onClick={onClick}>
            {contents}
        </Button>
    );
}

export default PageBtn;