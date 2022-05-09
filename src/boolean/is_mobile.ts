/**
 * It checks if the current user agent is mobile
 * @returns {boolean} true if the user agent is mobile
 */

const isMobile = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

export { isMobile };
