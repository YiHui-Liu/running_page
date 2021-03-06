// const
const MAPBOX_TOKEN =
  'pk.eyJ1IjoieWlob25nMDYxOCIsImEiOiJja2J3M28xbG4wYzl0MzJxZm0ya2Fua2p2In0.PNKfkeQwYuyGOTT_x9BJ4Q';
const MUNICIPALITY_CITIES_ARR = [
  '北京市',
  '上海市',
  '天津市',
  '重庆市',
  '香港特别行政区',
  '澳门特别行政区',
];

// IF you outside China please make sure IS_CHINESE = false
const IS_CHINESE = true;
const USE_ANIMATION_FOR_GRID = false;
const CHINESE_INFO_MESSAGE = (yearLength, year) =>
  `我用 App 记录自己跑步 ${yearLength} 年了，下面列表展示的是 ${year} 的数据`;
const ENGLISH_INFO_MESSAGE = (yearLength, year) =>
  `Running Journey with ${yearLength} Years, the table shows year ${year} data`;

// not support English for now
const CHINESE_LOCATION_INFO_MESSAGE_FIRST =
  '我跑过了一些地方，希望随着时间推移，地图点亮的地方越来越多';
const CHINESE_LOCATION_INFO_MESSAGE_SECOND = '不要停下来，不要停下奔跑的脚步';

const INFO_MESSAGE = IS_CHINESE ? CHINESE_INFO_MESSAGE : ENGLISH_INFO_MESSAGE;
const FULL_MARATHON_RUN_TITLE = IS_CHINESE ? '全程马拉松' : 'Full Marathon';
const HALF_MARATHON_RUN_TITLE = IS_CHINESE ? '半程马拉松' : 'Half Marathon';
const MORNING_RUN_TITLE = IS_CHINESE ? '清晨跑步' : 'Morning Run';
const MIDDAY_RUN_TITLE = IS_CHINESE ? '午间跑步' : 'Midday Run';
const AFTERNOON_RUN_TITLE = IS_CHINESE ? '午后跑步' : 'Afternoon Run';
const EVENING_RUN_TITLE = IS_CHINESE ? '傍晚跑步' : 'Evening Run';
const NIGHT_RUN_TITLE = IS_CHINESE ? '夜晚跑步' : 'Night Run';

const MORNING_RIDE_TITLE = IS_CHINESE ? '清晨骑行' : 'Morning RIDE';
const LUNCH_RIDE_TITLE = IS_CHINESE ? '上午骑行' : 'Lunch RIDE';
const AFTERNOON_RIDE_TITLE = IS_CHINESE ? '午后骑行' : 'Afternoon RIDE';
const EVENING_RIDE_TITLE = IS_CHINESE ? '傍晚骑行' : 'Evening RIDE';
const NIGHT_RIDE_TITLE = IS_CHINESE ? '夜晚骑行' : 'Night RIDE';

const RUN_TITLES = {
  FULL_MARATHON_RUN_TITLE,
  HALF_MARATHON_RUN_TITLE,
  MORNING_RUN_TITLE,
  MIDDAY_RUN_TITLE,
  AFTERNOON_RUN_TITLE,
  EVENING_RUN_TITLE,
  NIGHT_RUN_TITLE,
};

const RIDE_TITLES = {
  MORNING_RIDE_TITLE,
  LUNCH_RIDE_TITLE,
  AFTERNOON_RIDE_TITLE,
  EVENING_RIDE_TITLE,
  NIGHT_RIDE_TITLE,
};

export {
  CHINESE_LOCATION_INFO_MESSAGE_FIRST,
  CHINESE_LOCATION_INFO_MESSAGE_SECOND,
  MAPBOX_TOKEN,
  MUNICIPALITY_CITIES_ARR,
  IS_CHINESE,
  INFO_MESSAGE,
  RUN_TITLES,
  RIDE_TITLES,
  USE_ANIMATION_FOR_GRID
};

export const AVATAR = 'https://asset.foolishfox.cn/images/static/avatar.jpg'; // Temp avatar
export const NAVS = [
  { text: 'Blog', link: 'https://foolishfox.cn/' },
  { text: 'About', link: 'https://foolishfox.cn/s/about/' },
];

export const RUNC = 'rgb(224, 237, 94)';
export const RIDEC = 'rgb(51, 201, 235)';
export const MAIN_COLOR = RUNC;
export const PROVINCE_FILL_COLOR = '#47b8e0';
