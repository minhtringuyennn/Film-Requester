export const getAuthorizationHeader = (accessToken?: string) => {
  let authHeader = `MediaBrowser Client="", Client="other", Device="script", DeviceId="script", Version="0.0.0"`;
  if (accessToken) {
    authHeader = `${authHeader}, Authorization=MediaBrowser Token=${accessToken}`;
  }
  return authHeader;
};
