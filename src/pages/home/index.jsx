import React, { createRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import './styles.scss';
import '../../templates/home/styles.scss';
import Notice from '../../components/organisms/notice';
import DeviceList from '../../components/organisms/deviceList';
import DetailModal from '../../components/organisms/detailModal';
import * as Constants from './../../constants/Constants';
import { useUserInfo, useNoticeList, useDeviceList, useDeviceDetail } from './hooks';
import { initializeFilters } from '../../utilities/FilterUtility';


const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        top: '25%',
        left: '35%',
        width: 550,
        height: 380,
        backgroundColor: '#f8f9fa',
        border: '2px solid #000000',
        boxShadow: theme.shadows[5],
        padding: '30px 0',
    },
}));

function HomePage() {
    const history = useHistory();
    const ref = createRef();
    const classes = useStyles();
    const [ filters, setFilters ] = useState(initializeFilters());
    const [ noticePage, setNoticePage ] = useState(1);
    const [ deviceListPage, setDeviceListPage ] = useState(1);
    const [ deviceDetailId, setDeviceDetailId ] = useState();
    const [ openModal, setOpenModal ] = useState(false);
    const { device_cnt, notice_cnt } = useUserInfo();
    const noticeTbodies = useNoticeList(noticePage, filters);

    const handleClickDetail = (event) => {
        setDeviceDetailId(event.currentTarget.parentNode.parentNode.childNodes[1].innerText);
        setOpenModal(true);
    };

    const deviceListTbodies = useDeviceList(deviceListPage, filters, handleClickDetail);

    const handleClickButtonLogout = () => {
        window.sessionStorage.removeItem('access_token');
        history.push('/login');
    };

    const noticeProps = {
        className: "home__notice board",
        title: {
            className: "board-title",
            children: "Notice",
        },
        boardBody: {
            className: "board-body notice__board-body",
            theads: Constants.NOTICE_THEAD,
            tbodies: noticeTbodies,
        },
        apagination: {
            className: "notice__pagination",
            count: Math.ceil(notice_cnt / Constants.ROW_CNT),
            siblingCount: 5,
            page: noticePage,
            setPage: setNoticePage,
            shape: "rounded",
        },
    };

    const deviceListProps = {
        className: "home__device-list board",
        title: {
            className: "board-title",
            children: "Device List",
        },
        boardBody: {
            className: "board-body device-list__board-body",
            theads: Constants.DEVICE_THEAD,
            tbodies: deviceListTbodies,
        },
        apagination: {
            className: "device-list__pagination",
            count: Math.ceil(device_cnt / Constants.ROW_CNT),
            siblingCount: 5,
            page: deviceListPage,
            setPage: setDeviceListPage,
            shape: "rounded",
        },
    };

    const detailModalProps = {
        className: `detail-modal ${classes.modal}`,
        close: {
            className: "detail-modal__close",
            onClick: () => setOpenModal(false),
        },
        title: {
            id: "detail-modal-title",
            children: "기기 상세 정보",
        },
        boardBody: {
            id: "detail-modal-description",
            theads: ["상세 정보", "내용"],
            tbodies: useDeviceDetail(deviceDetailId),
        },
    };

    return (
        <div className="home">
            {/* <Notice
                noticeProps={noticeProps} />
            <DeviceList
                deviceListProps={deviceListProps} /> */}

            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                aria-labelledby="detail-modal-title"
                aria-describedby="detail-modal-description"
                disableBackdropClick={true}
            >
                <DetailModal
                    ref={ref}
                    detailModalProps={detailModalProps} />
            </Modal>
        </div>
    );
}

export default HomePage;