import * as types from './types'

export function saveFacebookProfile(userInfo) {
    return {
      type: types.SAVE_FACEBOOK_PROFILE,
      payload: userInfo
    }
  }

  export function getFacebookProfile() {
    return {
      type: types.GET_FACEBOOK_PROFILE,
    }
  }
  
  export function saveGoogleProfile(userInfo) {
    return {
      type: types.SAVE_GOOGLE_PROFILE,
      payload: userInfo
    }
  }

  export function getGoogleProfile() {
    return {
      type: types.GET_GOOGLE_PROFILE,
    }
  }

  
