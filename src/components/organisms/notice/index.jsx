import React from 'react';

import Title from '../../atoms/title';
import APagination from '../../atoms/pagination';
import BoardBody from '../../molecules/boardBody';
import FilterTagGroup from '../filterTagGroup';

function Notice({ noticeProps: { className, title, filterTagGroup, boardBody, apagination } }) {
    return (
        <div className={className}>
            <Title
                className={title.className}
                children={title.children} />
            <FilterTagGroup
                className={filterTagGroup.className}
                tagValues={filterTagGroup.tagValues}
                tagProps={filterTagGroup.tagProps} />
            <BoardBody
                className={boardBody.className}
                theads={boardBody.theads}
                tbodies={boardBody.tbodies} />
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