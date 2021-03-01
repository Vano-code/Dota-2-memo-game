import { URL } from './../constants/constants';
import {

    SET_NEW_TIME,
    SET_TIME,
    ARRAY_OF_SHIRTS_INIT,
    OBJECT_OF_SHIRTS_INIT,
    REMOVAL_OF_STATES,
    PUSH_TO_CHECK,
    CHANGE_THE_ISCLICKED,
    CLEAR_CHECK_ARRAY,
    CHANGE_THE_VISIBILITY,
    PAIRS_FOUND,
    POST_MY_RESULT,
    SET_UNMATCHED
} from './../actions/index';

export default (state = {
    arrayOfShirts: [],
    forCheck: [],
    shirts: [],
    pairsCount: 0
}, action) => {
    switch (action.type) {
        case SET_NEW_TIME:
            const newObj = { ...state
            };
            newObj.currentTime = action.currentTime + 1;
            return newObj;
        case SET_TIME:
            const newObg = { ...state
            };
            newObg.currentTime = 0;
            return newObg;

        case OBJECT_OF_SHIRTS_INIT:
            const newObgWidthShirts = { ...state
            };
            for (let i = 0; i < action.lengthOfArray; i++) {
                newObgWidthShirts.shirts.push({
                    isVisible: true,
                    isClicked: false,
                    isMatched: false
                });
            }
            return newObgWidthShirts;

        case ARRAY_OF_SHIRTS_INIT:
            const ObjForReturn = { ...state
            };
            for (let i = 0; i < action.currentIndex; i++) {
                ObjForReturn.arrayOfShirts.push(`shirt_${i + 1}.png`);
                ObjForReturn.arrayOfShirts.push(`shirt_${i + 1}.png`);
            }
            ObjForReturn.arrayOfShirts.sort((a, b) => 0.5 - Math.random())
            return ObjForReturn;

        case REMOVAL_OF_STATES:
            const ObjAfterRemove = { ...state
            };
            ObjAfterRemove.shirts = [];
            ObjAfterRemove.arrayOfShirts = [];
            ObjAfterRemove.forCheck = [];
            ObjAfterRemove.pairsCount = 0;
            return ObjAfterRemove;

        case PUSH_TO_CHECK:
            const ObjToCheck = { ...state
            };
            ObjToCheck.forCheck.push({
                numberInArray: action.numberInArray,
                cardName: action.cardName
            });
            return ObjToCheck;

        case CHANGE_THE_ISCLICKED:
            const ObjToChange = { ...state
            };
            if (ObjToChange.shirts[action.indexInArray].isClicked === false) {
                ObjToChange.shirts[action.indexInArray].isClicked = true;
            } else {
                ObjToChange.shirts[action.indexInArray].isClicked = false;
            }
            return ObjToChange;

        case CLEAR_CHECK_ARRAY:
            const ObjWithArrayToClear = { ...state
            };
            ObjWithArrayToClear.forCheck = [];
            return ObjWithArrayToClear;

        case CHANGE_THE_VISIBILITY:
            const ObjToChangeVisibility = { ...state
            };
            ObjToChangeVisibility.shirts[action.indexInArray].isVisible = false;
            return ObjToChangeVisibility;
        
        case PAIRS_FOUND:
            const objToChangeCounterPairs = {...state};
            objToChangeCounterPairs.pairsCount++;
            return objToChangeCounterPairs;

        case POST_MY_RESULT:
            fetch(URL, {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Credentials': 'true',
                    'Access-Control-Allow-Origin': 'cors_url',
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    username: action.name,
                    email: action.email,
                    score: action.score
                })
            })
            .then(function (data) {
                console.log('Request succeeded with JSON response', data);
            })
            .catch(function (error) {
                console.log('Request failed', error);
            });
            return state;

        case SET_UNMATCHED:
            const objToChangeUnmatched = {...state};
            if (objToChangeUnmatched.shirts[action.indexInArray].isMatched === false) {
                objToChangeUnmatched.shirts[action.indexInArray].isMatched = true;
            } else {
                objToChangeUnmatched.shirts[action.indexInArray].isMatched = false;
            }
            return objToChangeUnmatched
        
        default:
            return state;
    }
}