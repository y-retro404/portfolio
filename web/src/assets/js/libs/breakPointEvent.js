/**
 * 第一引数（window.matchMedia(~)）で指定したメディアクエリを境界にイベント
 * @param {MediaQueryList} matchmedia メディアクエリの指定
 * @param {function} handler 引数にbool値が入るコールバック関数
 */
export default function breakPointEvent(matchmedia, handler) {
  matchmedia.addListener(handler(matchmedia.matches));
  handler(matchmedia.matches);
}
