// url
export const SERVER_URL = 'http://localhost:4000';
export const LOGIN_PATH = '/login';
export const HOME_PATH = '/home';
export const USER_PATH = '/home/user';
export const PACKETS_PATH = '/packets';
export const DEVICES_PATH = '/devices';
export const DEVICES_DETAILS_PATH = `${DEVICES_PATH}/details`;

// header
export const TEAM_NAME = 'Pest Plan';

export const PACKET = 'Packet';

export const DEVICE = 'Device';

// notice-list
export const PACKET_LIST_THEAD = [
    'No.',
    '날짜',
    '지역',
    '설치 위치',
    '트랩 종류',
    '메시지 타입',
];

// device-list
export const DEVICE_THEAD = [
    'No.',
    'Device ID',
    '트랩 종류',
    '지역',
    '설치 위치',
    '상세보기',
];

export const ROW = 15;

// filter
export const REGIONS = [
    { id: 'Busan', value: '부산' },
    { id: 'Daegu', value: '대구' },
    { id: 'Daejeon', value: '대전' },
    { id: 'Gangwon', value: '강원도' },
    { id: 'Gwangju', value: '광주' },
    { id: 'Gyeonggi', value: '경기도' },
    { id: 'Incheon', value: '인천' },
    { id: 'Jeju', value: '제주도' },
    { id: 'North Chungcheong', value: '충청북도' },
    { id: 'North Gyeongsang', value: '경상북도' },
    { id: 'North Jeolla', value: '전라북도' },
    { id: 'Sejong', value: '세종시' },
    { id: 'Seoul', value: '서울' },
    { id: 'South Chungcheong', value: '충청남도' },
    { id: 'South Gyeongsang', value: '경상남도' },
    { id: 'South Jeolla', value: '전라남도' },
    { id: 'Ulsan', value: '울산' },
];
export const LOCATIONS = [
    { id: 'inside_factory_1', value: '공장내부-1' },
    { id: 'inside_factory_2', value: '공장내부-2' },
    { id: 'inside_factory_3', value: '공장내부-3' },
    { id: 'inside_factory_4', value: '공장내부-4' },
    { id: 'outside_factory_1', value: '공장외부-1' },
    { id: 'outside_factory_2', value: '공장외부-2' },
    { id: 'outside_factory_3', value: '공장외부-3' },
    { id: 'outside_factory_4', value: '공장외부-4' },
    { id: 'outside_factory_5', value: '공장외부-5' },
    { id: 'lawn_1', value: '잔디밭-1' },
];
export const MODELS = [
    { id: 'A1', value: 'DAM' },
    { id: 'A2', value: 'AG DAM' },
    { id: 'A3', value: 'FG DAM' },
    { id: 'B1', value: 'SM' },
    { id: 'B2', value: '환경 모니터링 SM' },
    { id: '01', value: '피닉스' },
    { id: '02', value: '썬더블루' },
    { id: '03', value: '블루스톰(전극)' },
    { id: '04', value: '블루스톰(흡입)' },
    { id: '11', value: '바이퍼' },
    { id: '12', value: '블루치즈' },
    { id: '13', value: '쥐모니터링' },
    { id: '21', value: '큐브' },
];
export const TYPES = [
    { id: 'cycle_data', value: '주기' },
    { id: 'warning_data', value: '경보' },
    { id: 'error_data', value: '에러' },
];
