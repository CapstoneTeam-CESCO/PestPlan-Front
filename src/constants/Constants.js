// url
export const SERVER_URL = 'http://localhost:4000';
export const LOGIN_PATH = '/login';
export const HOME_PATH = '/home';
export const USER_PATH = '/home/user';
export const DASHBOARDS_PATH = '/dashboards';
export const PACKETS_PATH = '/packets';
export const DEVICES_PATH = '/devices';
export const DEVICES_DETAILS_PATH = `${DEVICES_PATH}/details`;

// login
export const SIGN_IN = 'SIGN IN';
export const SIGN_UP = 'SIGN UP';

// sidebar
export const TEAM_NAME = 'Pest Plan';
export const TEAM_NAME_CAPITAL = 'PEST PLAN';
export const DASHBOARD = 'Dashboard';
export const PACKET = 'Packet';
export const PACKET_CAPITAL = 'PACKET';
export const DEVICE = 'Device';
export const DEVICE_CAPITAL = 'DEVICE';

// packet-list
export const PACKET_LIST_THEAD = [
    'No.',
    '날짜',
    '지역',
    '설치 위치',
    '트랩 종류',
    '메시지 타입',
];

export const INFO_CARD_HEADERS = {
    packet: ['Today', 'Cycle', 'Warning', 'Device Error'],
    device: ['Total', 'Pest', 'Mouse', 'Device Error'],
};

// device-list
export const DEVICE_THEAD = [
    'No.',
    'Device ID',
    '지역',
    '설치 위치',
    '트랩 종류',
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
    { id: '90', value: '비래 해충군' },
    { id: '01', value: '피닉스' },
    { id: '02', value: '썬더블루' },
    { id: '03', value: '블루스톰' },
    { id: '91', value: '구서 장비' },
    { id: '11', value: '바이퍼' },
    { id: '12', value: '블루치즈' },
    { id: '13', value: '쥐모니터링' },
    { id: '14', value: '큐브' },
];

export const TYPES = [
    { id: 'cycle_data', value: '주기' },
    { id: 'warning_data', value: '경보' },
    { id: 'error_data', value: '에러' },
];

// device details
export const DEVICE_DETAILS_FIELDS = [
    '트랩ID',
    '지역',
    '설치 위치',
    '트랩 종류',
    '교체 필요 여부',
    '트랩 에러 여부',
];

export const DEVICE_DETAILS_PACKET_HEADERS = ['No.', 'time', 'packet'];

export const CYCLE_LABEL = '주기';
export const WARNING_LABEL = '경보';
export const ERROR_LABEL = '에러';

export const CYCLE_DATA = ['pestData', 'mouseCycleData'];
export const WARNING_DATA = ['mouseWarningData'];
export const ERROR_DATA = ['damWarningData'];
