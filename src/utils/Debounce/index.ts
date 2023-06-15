// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-explicit-any */
type Debounce = (
  func: (...args: any[]) => unknown,
  wait: number
) => (...args: any[]) => void;

export const debounce: Debounce = (func, wait) => {
  let timeout: NodeJS.Timeout;

  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
