/*
 * iOS polyfill
 */
export function iosPolyfill() {
  // :activeの機能化
  document.body.addEventListener('touchstart', () => {}, false);
}
