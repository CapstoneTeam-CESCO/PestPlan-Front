import React from 'react';

import './styles.scss';
import Image from '../../atoms/image';
import Text from '../../atoms/text';
import Button from '../../atoms/button';

function UserInfo({ userInfoProps: { className, image, messages, button } }) {
    return (
        <div className={className}>
            <Image
                className={image.className}
                src={image.src}
                alt={image.alt} />
            {messages && messages.map((message, index) => (
                <Text
                    key={index}
                    className={message.className}
                    children={message.children} />
            ))}
            <Button
                className={button.className}
                onClick={button.onClick}
                children={button.children} />
        </div>
    );
}

export default UserInfo;