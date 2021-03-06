/**
 * viewport取得
 */
export function getViewport() {
  const metalist = document.getElementsByTagName('meta');
  for (let i = 0; i < metalist.length; i++) {
    let name = metalist[i].getAttribute('name');
    if (name && name.toLowerCase() === 'viewport') {
      return metalist[i];
    }
  }
}

////////////////////////////////////////////////////////////////////////////////

/**
 * viewportを引数の値で上書き
 * @param {string} widthVal 上書きする値
 */
export function overrideViewport(widthVal) {
  const viewport = getViewport();
  viewport.setAttribute('content', `width=${widthVal}`);
}
