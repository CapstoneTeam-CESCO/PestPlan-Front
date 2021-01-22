import React from 'react';

import Title from '../../atoms/title';
import BoardBody from '../../molecules/boardBody';
import BoardNav from '../../molecules/boardNav';

function Notice({ noticeProps: { className, title, boardBody, boardNav } }) {
    return (
        <div className={`board ${className}`}>
            <Title
                className={title.className}
                children={title.children} />
            <BoardBody
                className={boardBody.className}
                theads={boardBody.theads}
                tbodies={boardBody.tbodies}
                emptyRows={boardBody.emptyRows} />
            <BoardNav
                className={boardNav.className}
                apagination={boardNav.apagination}
                button={boardNav.button}
                noticeFilter={boardNav.noticeFilter} />
        </div>
    );
}

export default Notice;