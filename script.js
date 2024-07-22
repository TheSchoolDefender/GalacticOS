function showPage(pageId) {
  const loadingOverlay = document.querySelector('.loading-overlay');
  loadingOverlay.classList.add('active');

  setTimeout(() => {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');

    loadingOverlay.classList.remove('active');
  }, 2000);
}
