import React from 'react';

import './styles.scss';
import Image from '../../atoms/image';
import Text from '../../atoms/text';

function ImageText({ className, image, text }) {
    return (
        <div className={className}>
            <Image
                className={image.className}
                src={image.src}
                alt={image.alt} />
            <Text
                className={text.className}
                children={text.children} />
        </div>
    );
}

export default ImageText;