

// Attach a small text span to the parent dive with a class name
function appendSpan(text, className, parentEl) {
    const spanElement = document.createElement('span');
    spanElement.textContent = text;
    spanElement.className = className;
    return parentEl.appendChild(spanElement);
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


function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    alert('Copied to clipboard:\n\n' + text);
  }, function(err) {
    alert('Could not copy to clipboard: ', err);
  });
}

