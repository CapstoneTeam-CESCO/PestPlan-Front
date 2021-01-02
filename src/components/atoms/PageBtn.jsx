import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

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