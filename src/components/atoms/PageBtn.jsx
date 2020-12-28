import React from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

function PageBtn(props) {
    const { contents, styles } = props;
    const CssButton = withStyles(styles)(Button);

    return (
        <CssButton>
            {contents}
        </CssButton>
    );
}

export default PageBtn;