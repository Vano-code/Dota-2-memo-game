import { combineReducers } from 'redux';
import game from './game';
import score from './score';
import requisites from './requisites';
import settings from './settings';

const matchMatchGame = combineReducers({
    score,
    requisites,
    settings,
    game,
});
export default matchMatchGame;