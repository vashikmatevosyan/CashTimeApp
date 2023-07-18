import {Dimensions} from 'react-native';

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');
export const RatioH = SCREEN_HEIGHT / 926;
export const RatioW = SCREEN_WIDTH / 428;
export const RW = value => RatioW * value;
export const RH = value => RatioH * value;
