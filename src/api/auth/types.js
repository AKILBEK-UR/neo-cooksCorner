export const iLoginRequest = {
    login: "",
    password: "",
}
export const iLoginResponse = {
    accessToken: ""
}
export const iRegisterRequest = {
    name: "",
    email: "",
    password: ""
}

export const IRegisterResponse = {
    id: 0,
    name: "",
    email: "",
}

export const IRefreshTokenRequest = {
    refreshToken: "",
  }
  
  export const IRefreshTokenResponse = {
    accessToken: "",
  }
  
  export const ILogoutRequest = {
    refreshToken: "",
  }