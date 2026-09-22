export function initializeCaseOverlays(root = document) {
  const caseOverlayTriggers = root.querySelectorAll('[data-case-overlay-trigger]');

  for (const trigger of caseOverlayTriggers) {
    const dialogId = trigger.getAttribute('aria-controls');
    const dialog = dialogId ? document.getElementById(dialogId) : null;
    const closeButton = dialog?.querySelector('[data-case-overlay-close]');

    if (!(dialog instanceof HTMLDialogElement) || !(closeButton instanceof HTMLButtonElement)) {
      continue;
    }

    const video = dialog.matches('[data-case-overlay-video]') ? dialog.querySelector('video') : null;

    if (video instanceof HTMLVideoElement) {
      dialog.querySelector('.proposal-overlay-panel')?.addEventListener('click', (event) => {
        event.stopPropagation();
      });
    }

    const closeDialog = () => {
      if (!dialog.open || dialog.classList.contains('is-closing')) {
        return;
      }

      video?.pause();
      dialog.classList.add('is-closing');
      window.setTimeout(() => dialog.close(), 200);
    };

    trigger.addEventListener('click', () => {
      dialog.showModal();
      document.documentElement.classList.add('proposal-overlay-open');
      document.body.classList.add('proposal-overlay-open');
      closeButton.focus();
    });

    closeButton.addEventListener('click', closeDialog);

    dialog.addEventListener('cancel', (event) => {
      event.preventDefault();
      closeDialog();
    });

    dialog.addEventListener('click', closeDialog);

    dialog.addEventListener('close', () => {
      dialog.classList.remove('is-closing');
      document.documentElement.classList.remove('proposal-overlay-open');
      document.body.classList.remove('proposal-overlay-open');
      trigger.focus();
    });
  }
}
