import React from 'react';

import Title from '../../atoms/title';
import APagination from '../../atoms/pagination';
import BoardBody from '../../molecules/boardBody';

function Notice({ noticeProps: { className, title, boardBody, apagination } }) {
    return (
        <div className={className}>
            <Title
                className={title.className}
                children={title.children} />
            <BoardBody
                className={boardBody.className}
                theads={boardBody.theads}
                tbodies={boardBody.tbodies}
                emptyRows={boardBody.emptyRows} />
            <APagination
                className={apagination.className}
                count={apagination.count}
                siblingCount={apagination.siblingCount}
                page={apagination.page}
                setPage={apagination.setPage}
                shape={apagination.shape} />
        </div>
    );
}

export default Notice;