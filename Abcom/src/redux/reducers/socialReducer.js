import * as types from '../types'

const initialState = {
    faceBookProfile:{},
    getFaceInfo:{},

    googleProfile:{},
    getGoogleInfo:{},
}

  export default function socialProfile(state = initialState , action) {
    console.log(action.payload)
    switch (action.type) {
        case types.SAVE_FACEBOOK_PROFILE : 
        return {
          ...state,
          faceBookProfile : action.payload
        }

        case types.GET_FACEBOOK_PROFILE : 
        return {
          ...state,
          getFaceInfo: {...state.faceBookProfile}
        }

        case types.SAVE_GOOGLE_PROFILE : 
        return {
          ...state,
          googleProfile : action.payload
        }

        case types.GET_GOOGLE_PROFILE : 
        return {
          ...state,
          getGoogleInfo : {...state.googleProfile}
        }
      default:
        return state
    }
  }