/**
 * DFW Errands Driver Onboarding Page
 * Interactive Controller Script
 */

const APK_URL = "https://drive.google.com/file/d/1qXycBRQ0TipDOuqakD0IMZaP1U9dQR3T/view?usp=drive_link";

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const qrModalBtn = document.getElementById('qr-modal-btn');
  const qrModal = document.getElementById('qr-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalCopyBtn = document.getElementById('modal-copy-btn');

  const appleDownloadBtn = document.getElementById('apple-download-btn');
  const testflightModal = document.getElementById('testflight-modal');
  const testflightCloseBtn = document.getElementById('testflight-close-btn');
  const testflightOkBtn = document.getElementById('testflight-ok-btn');

  const copyLinkBtn = document.getElementById('copy-link-btn');
  const copyBtnText = document.getElementById('copy-btn-text');
  const toastMsg = document.getElementById('toast-msg');

  // Show Toast
  const showToast = (msg = "Link copied to clipboard!") => {
    toastMsg.textContent = msg;
    toastMsg.classList.add('show');
    setTimeout(() => {
      toastMsg.classList.remove('show');
    }, 3000);
  };

  // Copy URL Helper
  const copyApkLink = async () => {
    try {
      await navigator.clipboard.writeText(APK_URL);
      showToast("APK Link copied to clipboard! 📋");
      if (copyBtnText) {
        const originalText = copyBtnText.textContent;
        copyBtnText.textContent = "Copied! ✓";
        setTimeout(() => {
          copyBtnText.textContent = originalText;
        }, 2000);
      }
    } catch (err) {
      // Fallback copy
      const textArea = document.createElement("textarea");
      textArea.value = APK_URL;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      showToast("Link copied to clipboard! 📋");
    }
  };

  // QR Modal Event Handlers
  if (qrModalBtn && qrModal) {
    qrModalBtn.addEventListener('click', () => {
      qrModal.classList.add('active');
    });
  }

  if (modalCloseBtn && qrModal) {
    modalCloseBtn.addEventListener('click', () => {
      qrModal.classList.remove('active');
    });
  }

  if (qrModal) {
    qrModal.addEventListener('click', (e) => {
      if (e.target === qrModal) {
        qrModal.classList.remove('active');
      }
    });
  }

  if (modalCopyBtn) {
    modalCopyBtn.addEventListener('click', () => {
      copyApkLink();
      if (qrModal) qrModal.classList.remove('active');
    });
  }

  // Apple TestFlight Modal Event Handlers
  if (appleDownloadBtn && testflightModal) {
    appleDownloadBtn.addEventListener('click', (e) => {
      e.preventDefault();
      testflightModal.classList.add('active');
    });
  }

  if (testflightCloseBtn && testflightModal) {
    testflightCloseBtn.addEventListener('click', () => {
      testflightModal.classList.remove('active');
    });
  }

  if (testflightOkBtn && testflightModal) {
    testflightOkBtn.addEventListener('click', () => {
      testflightModal.classList.remove('active');
    });
  }

  if (testflightModal) {
    testflightModal.addEventListener('click', (e) => {
      if (e.target === testflightModal) {
        testflightModal.classList.remove('active');
      }
    });
  }

  // Copy Direct Link Button
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', copyApkLink);
  }

  // Esc key close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (qrModal) qrModal.classList.remove('active');
      if (testflightModal) testflightModal.classList.remove('active');
    }
  });

  console.log("DFW Errands Driver Onboarding page initialized successfully.");
});
