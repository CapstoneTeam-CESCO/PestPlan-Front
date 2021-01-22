import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import './styles.scss';
import '../../templates/home/styles.scss';
import Header from '../../components/organisms/header';
import Notice from '../../components/organisms/notice';
import DeviceList from '../../components/organisms/deviceList';
import DetailModal from '../../components/organisms/detailModal';
import * as Constants from './../../constants/Constants';
import { useUserInfo, useNoticeList, useDeviceList, useDeviceDetail } from './hooks';
import { initializeNoticeFilters } from '../../utilities/FilterUtility';
import ProfileImg from '../../images/profile.png';

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
    const { device_cnt, notice_cnt, messages } = useUserInfo();
    const classes = useStyles();
    let history = useHistory();

    const handleClickButtonLogout = () => {
        window.sessionStorage.removeItem('access_token');
        history.push('/login');
    };

    const headerProps = {
        className: "home__header",
        titleProps: {
            className: "header__team-name",
            children: "Pest Plan",
        },
        userInfoProps: {
            className: "header__user-info",
            image: {
                className: "profile-image",
                src: ProfileImg,
                alt: "profile"
            },
            messages,
            button: {
                className: "button--root active-scale-button logout-button",
                onClick: handleClickButtonLogout,
                children: "로그아웃",
            },
        },
    };

    const [ noticePage, setNoticePage ] = useState(1);
    const [ noticeFilters, setNoticeFilters ] = useState(initializeNoticeFilters());
    const noticeTbodies = useNoticeList(noticePage, noticeFilters);

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
            emptyRows: {
                colSpan: 6,
                count: Constants.ROW_CNT - noticeTbodies.length,
            },
        },
        boardNav: {
            className: "notice__board-nav",
            apagination: {
                count: Math.ceil(notice_cnt / Constants.ROW_CNT),
                siblingCount: 5,
                page: noticePage,
                setPage: setNoticePage,
                shape: "rounded",
            },
            button: {
                className: "button--root active-scale-button filter-button",
                children: "필터",
            },
            noticeFilter: {
                filters: noticeFilters,
                setFilters: setNoticeFilters,
            },
        },
    };

    const [ openModal, setOpenModal ] = useState(false);
    const [ deviceDetailId, setDeviceDetailId ] = useState();

    const handleClickDetail = (event) => {
        setDeviceDetailId(event.currentTarget.parentNode.parentNode.childNodes[1].innerText);
        setOpenModal(true);
    };

    const [ deviceListPage, setDeviceListPage ] = useState(1);
    const [ DFilters, setDFilters ] = useState(initializeNoticeFilters());
    const deviceListTbodies = useDeviceList(deviceListPage, DFilters, handleClickDetail);

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
            emptyRows: {
                colSpan: 6,
                count: Constants.ROW_CNT - deviceListTbodies.length,
            },
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
            emptyRows: {
                colSpan: 0,
                count: 0,
            },
        },
    };

    return (
        <div className="home">
            <Header
                headerProps={headerProps} />
            <Notice
                noticeProps={noticeProps} />
            <DeviceList
                deviceListProps={deviceListProps} />

            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                aria-labelledby="detail-modal-title"
                aria-describedby="detail-modal-description"
                disableBackdropClick={true}
            >
                <DetailModal
                    detailModalProps={detailModalProps} />
            </Modal>
        </div>
    );
}

export default HomePage;