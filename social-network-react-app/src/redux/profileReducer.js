import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_INPUT_POST_TEXT = 'UPDATE-INPUT-POST-TEXT';
const SET_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    postsData: [
        {id: 1, postText: "My GitHub profile: https://github.com/KTimoshkin"},
        {id: 2, postText: "This project in GitHub: https://github.com/KTimoshkin/socialNetworkReactApp" }
    ],
    inputPostText: '',
    profile: null,
    status: ''
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = state.inputPostText;
            return {
                ...state,
                inputPostText: '',
                postsData: [...state.postsData, {id: 5, postText: newPost}]
            };

        case UPDATE_INPUT_POST_TEXT:
            return {
                ...state,
                inputPostText: action.newInputPostText
            };

        case SET_PROFILE:
            return{
                ...state,
                profile: action.profileId
            };

        case SET_STATUS:
            return{
                ...state,
                status: action.status
            }

        default:
            return state;
    }
};


export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const onInputPostTextActionCreator = (newPostText) => {
    return {
        type: UPDATE_INPUT_POST_TEXT,
        newInputPostText: newPostText
    }
};

export const setProfileActionCreater = (profileId) => {
    return {
        type: SET_PROFILE,
        profileId: profileId
    }
};

export const setStatusActionCreater = (status) => {
    return {
        type: SET_STATUS,
        status: status
    }
};

export const getUserThunkCreator = (profile) => {
    return (dispatch) => {
        profileAPI.getUser(profile).then(response => {
            dispatch(setProfileActionCreater(response.data));
        });
    }
};

export const getStatusThunkCreator = (profile) => {
    return (dispatch) => {
        profileAPI.getStatus(profile).then(response => {
            dispatch(setStatusActionCreater(response.data));
        });
    }
};

export const updateStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode == 0) {
                dispatch(setStatusActionCreater(status));
            }
        });
    }
};