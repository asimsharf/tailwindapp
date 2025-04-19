const TOKEN_KEY = 'accessToken';

const isBrowser = typeof window !== 'undefined';

export const TokenUtil = {
  getToken: (): string | null =>
    isBrowser ? localStorage.getItem(TOKEN_KEY) : null,

  setToken: (token: string): void => {
    if (isBrowser) localStorage.setItem(TOKEN_KEY, token);
  },

  removeToken: (): void => {
    if (isBrowser) localStorage.removeItem(TOKEN_KEY);
  },

  setUserInfo: (userInfo: any): void => {
    if (isBrowser) localStorage.setItem('user_info', JSON.stringify(userInfo));
  },

  getUserInfo: (): any => {
    if (!isBrowser) return null;
    const userInfo = localStorage.getItem('user_info');
    return userInfo ? JSON.parse(userInfo) : null;
  },

  removeUserInfo: (): void => {
    if (isBrowser) localStorage.removeItem('user_info');
  },

  isLoggedIn: (): boolean => !!TokenUtil.getToken(),

  isTokenExpired: (): boolean => {
    const token = TokenUtil.getToken();
    if (!token) return true;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expirationTime = payload.exp * 1000;
      return Date.now() > expirationTime;
    } catch (e) {
      console.error('Failed to parse token payload', e);
      return true;
    }
  },

  getUserId: (): number | null => {
    const userInfo = TokenUtil.getUserInfo();
    return userInfo ? userInfo.id : null;
  },

  getUserRole: (): string | null => {
    const userInfo = TokenUtil.getUserInfo();
    return userInfo ? userInfo.role : null;
  },


  getUserEmail: (): string | null => {
    const userInfo = TokenUtil.getUserInfo();
    return userInfo ? userInfo.email : null;
  },

  getUserPhone: (): string | null => {
    const userInfo = TokenUtil.getUserInfo();
    return userInfo ? userInfo.phone : null;
  },


  getUserFullNameArabic: (): string | null => {
    const userInfo = TokenUtil.getUserInfo();
    return userInfo
      ? `${userInfo.firstName?.arabic} ${userInfo.middleName?.arabic} ${userInfo.lastName?.arabic}`
      : null;
  },

  getUserFullNameEnglish: (): string | null => {
    const userInfo = TokenUtil.getUserInfo();
    return userInfo
      ? `${userInfo.firstName?.english} ${userInfo.middleName?.english} ${userInfo.lastName?.english}`
      : null;
  },
};
