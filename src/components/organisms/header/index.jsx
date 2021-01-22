import React from 'react';

import Title from '../../atoms/title';
import UserInfo from '../../molecules/userInfo';

function Header({ headerProps: { className, titleProps, userInfoProps } }) {
    return (
        <div className={className}>
            <Title
                className={titleProps.className}
                children={titleProps.children} />
            <UserInfo
                userInfoProps={userInfoProps} />
        </div>
    );
}

export default Header;