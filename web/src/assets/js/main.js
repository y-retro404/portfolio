import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'picturefill';
import Bowser from 'bowser';
import { iosPolyfill } from './libs/polyfills';
import { overrideViewport } from './libs/viewportUtil';
import Menu from './libs/menu';

window.addEventListener('DOMContentLoaded', () => {
  /**********************
   * 閲覧環境が幅374以下の場合、
   * 375でviewport幅を固定する
   *********************/
  const minWidthMedia = window.matchMedia(`(max-width: 374px)`);
  if (minWidthMedia.matches) {
    overrideViewport(375);
  }

  /**********************
   * 閲覧環境別環境ポリフィル
   * 環境判定はbowserを使用
   * https://github.com/lancedikson/bowser
   *********************/
  const bowser = Bowser.getParser(window.navigator.userAgent);
  if (bowser.getOSName() === 'iOS') {
    iosPolyfill();
  }

  // Menu
  Menu();
});
