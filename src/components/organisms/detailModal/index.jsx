import React from 'react';
import { Close } from '@material-ui/icons';

import './styles.scss';
import Title from '../../atoms/title';
import BoardBody from '../../molecules/boardBody';

const DetailModal = React.forwardRef(({ detailModalProps: { className, close, title, boardBody } }, ref) => {
    return (
        <div className={className} ref={ref}>
            <Close
                className={close.className}
                onClick={close.onClick} />
            <Title
                id={title.id}
                children={title.children} />
            <BoardBody
                id={boardBody.id}
                theads={boardBody.theads}
                tbodies={boardBody.tbodies} />
        </div>
    );
});

export default DetailModal;