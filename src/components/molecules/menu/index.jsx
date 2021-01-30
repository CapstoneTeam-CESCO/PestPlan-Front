import React from 'react';

import './styles.scss';
import Text from '../../atoms/text';

function Menu({ menuProps: { className, notice, device } }) {
    return (
        <div className={className}>
            <Text
                className={notice.className}
                onClick={notice.onClick}
                children={notice.children} />

            <Text
                className={device.className}
                onClick={device.onClick}
                children={device.children} />
        </div>
    );
}

export default Menu;