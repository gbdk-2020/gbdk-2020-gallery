
// JavaScript for device detection and class assignment
function detectDeviceType() {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const body = document.querySelector('body');

  if (isMobile) {
    body.classList.add('mobile');
  } else {
    body.classList.add('desktop');
  }
}
