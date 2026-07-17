(function () {
  var COPY_LABEL = 'Copy Address';
  var COPIED_LABEL = 'Copied!';
  var COPIED_MS = 1800;

  function isLightMode() {
    return document.documentElement.getAttribute('data-theme') === 'light';
  }

  function qrColors() {
    if (isLightMode()) {
      return { dark: '#0f172a', light: '#ffffff' };
    }
    return { dark: '#e2e8f0', light: '#0a0e14' };
  }

  function renderQr(container) {
    var value = container.getAttribute('data-qr-value');
    if (!value || !window.QRCode || typeof window.QRCode.toCanvas !== 'function') {
      container.textContent = 'QR unavailable';
      return;
    }

    container.innerHTML = '';
    var canvas = document.createElement('canvas');
    container.appendChild(canvas);

    var colors = qrColors();
    window.QRCode.toCanvas(
      canvas,
      value,
      {
        width: 148,
        margin: 2,
        color: {
          dark: colors.dark,
          light: colors.light
        }
      },
      function (error) {
        if (error) {
          container.textContent = 'QR unavailable';
        }
      }
    );
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.left = '-9999px';
      document.body.appendChild(area);
      area.select();
      try {
        document.execCommand('copy');
        resolve();
      } catch (err) {
        reject(err);
      } finally {
        document.body.removeChild(area);
      }
    });
  }

  function bindCopyButtons(root) {
    root.querySelectorAll('[data-copy]').forEach(function (button) {
      button.addEventListener('click', function () {
        var card = button.closest('.donation-card');
        var addressEl = card && card.querySelector('[data-address]');
        var address = addressEl ? addressEl.textContent.trim() : '';
        if (!address) return;

        copyText(address).then(function () {
          button.textContent = COPIED_LABEL;
          button.classList.add('is-copied');
          window.setTimeout(function () {
            button.textContent = COPY_LABEL;
            button.classList.remove('is-copied');
          }, COPIED_MS);
        }).catch(function () {
          button.textContent = 'Copy failed';
          window.setTimeout(function () {
            button.textContent = COPY_LABEL;
          }, COPIED_MS);
        });
      });
    });
  }

  function initSupportPage() {
    var root = document.querySelector('.support-page');
    if (!root) return;

    bindCopyButtons(root);
    root.querySelectorAll('[data-qr-value]').forEach(renderQr);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSupportPage);
  } else {
    initSupportPage();
  }
})();
