// login page
export const LOGIN_URL = 'http://localhost:4000/login';

// home page
export const HOME_URL = 'http://localhost:4000/home';

// notice-list
export const NOTICE_THEAD = ['알림No.', '날짜', '지역', '설치 위치', '트랩 종류', '메시지 타입'];

// device-list
export const DEVICE_THEAD = ['No.', 'Device ID', '모델 이름', '지역', '설치 위치', '상세보기'];

export const ROW_CNT = 15;

// filter
export const REGIONS = [
    { label: 'Busan', value: '부산' },
    { label: 'Daegu', value: '대구' },
    { label: 'Daejeon', value: '대전' },
    { label: 'Gangwon', value: '강원도' },
    { label: 'Gwangju', value: '광주' },
    { label: 'Gyeonggi', value: '경기도' },
    { label: 'Incheon', value: '인천' },
    { label: 'Jeju', value: '제주도' },
    { label: 'North Chungcheong', value: '충청북도' },
    { label: 'North Gyeongsang', value: '경상북도' },
    { label: 'North Jeolla', value: '전라북도' },
    { label: 'Sejong', value: '세종시' },
    { label: 'Seoul', value: '서울' },
    { label: 'South Chungcheong', value: '충청남도' },
    { label: 'South Gyeongsang', value: '경상남도' },
    { label: 'South Jeolla', value: '전라남도' },
    { label: 'Ulsan', value: '울산' },
];
export const LOCATIONS = [
    '공장내부-1', '공장내부-2', '공장내부-3', '공장내부-4',
    '공장외부-1', '공장외부-2', '공장외부-3', '공장외부-4', '공장외부-5',
    '잔디-1'
];
export const MODELS = [
    'DAM', 'AG DAM', 'FG DAM', 'SM', '환경 모니터링 SM',
    '피닉스', '썬더블루', '블루스톰(전극)', '블루스톰(흡입)',
    '바이퍼', '블루치즈', '쥐모니터링',
    '큐브'
];
export const TYPES = ['주기', '경보', '에러'];