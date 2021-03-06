export default function () {
  // DOM取得
  const menuToggle = document.getElementById('js-menuToggle');
  const globalMenu = document.getElementById('js-globalMenu');
  const globalOverlay = document.getElementById('js-globalOverlay');
  const globalContainer = document.getElementById('js-globalContainer');
  const globalLinks = document.getElementsByClassName('globalMenu__link');

  // メニューボタンにイベント追加
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('is-active');
    globalMenu.classList.toggle('is-open');
  });
  // オーバーレイにイベント追加
  globalOverlay.addEventListener('click', () => {
    menuClose();
  });
  // コンテナにイベント追加
  globalContainer.addEventListener('click', (e) => {
    // 伝播を防止
    e.stopPropagation();
  });
  // リンクにイベント追加
  for (let i = 0; i < globalLinks.length; i++) {
    const globalLink = globalLinks[i];
    globalLink.addEventListener('click', (e) => {
      const target = e.target;
      // トップページにいる状態でAboutを参照した場合
      if (location.pathname === '/' && target.dataset.type === 'about') {
        menuClose();
      }
    });
  }
  // メニュークローズ
  function menuClose() {
    menuToggle.classList.remove('is-active');
    globalMenu.classList.remove('is-open');
  }
}
