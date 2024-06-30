

// Attach a small text span to the parent dive with a class name
function appendSpan(text, className, parentEl) {
            const spanElement = document.createElement('span');
            spanElement.textContent = text;
            spanElement.className = className;
            parentEl.appendChild(spanElement);
}


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
