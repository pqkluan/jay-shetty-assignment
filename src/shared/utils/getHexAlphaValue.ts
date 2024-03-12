/**
 * Accept a percentage and return the hex value for the alpha channel
 * @param percentage - The percentage of the alpha channel
 * @returns The hex value for the alpha channel
 * @example getHexAlphaValue(100) // 'FF'
 */
export const getHexAlphaValue = (percentage: number): string => {
  return `0${Math.round(255 * (percentage / 100)).toString(16)}`.slice(-2).toUpperCase();
};
