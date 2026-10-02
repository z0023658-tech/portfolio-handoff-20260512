const dialogStates = new WeakMap();
const initializedTriggers = new WeakSet();

export function initializeCaseOverlays(root = document) {
  for (const trigger of root.querySelectorAll('[data-case-overlay-trigger]')) {
    if (initializedTriggers.has(trigger)) continue;
    const dialogId = trigger.getAttribute('aria-controls');
    const dialog = dialogId ? trigger.ownerDocument.getElementById(dialogId) : null;
    const closeButton = dialog?.querySelector('[data-case-overlay-close]');

    if (!(dialog instanceof HTMLDialogElement) || !(closeButton instanceof HTMLButtonElement)) {
      continue;
    }

    let state = dialogStates.get(dialog);
    if (!state) {
      state = { trigger: null, timer: null };
      dialogStates.set(dialog, state);
      const page = dialog.ownerDocument;
      const video = dialog.matches('[data-case-overlay-video]') ? dialog.querySelector('video') : null;
      const closeDialog = () => {
        if (!dialog.open || dialog.classList.contains('is-closing')) return;
        video?.pause();
        dialog.classList.add('is-closing');
        const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 200;
        state.timer = window.setTimeout(() => dialog.close(), delay);
      };
      closeButton.addEventListener('click', closeDialog);
      dialog.addEventListener('cancel', (event) => {
        event.preventDefault();
        closeDialog();
      });
      dialog.addEventListener('click', (event) => {
        if (event.target === dialog) closeDialog();
      });
      dialog.addEventListener('close', () => {
        window.clearTimeout(state.timer);
        state.timer = null;
        video?.pause();
        dialog.classList.remove('is-closing');
        if (!page.querySelector('dialog[open]')) {
          page.documentElement.classList.remove('proposal-overlay-open');
          page.body.classList.remove('proposal-overlay-open');
        }
        if (state.trigger?.isConnected) state.trigger.focus({ preventScroll: true });
        state.trigger = null;
      });
    }
    trigger.addEventListener('click', () => {
      if (dialog.open) return;
      state.trigger = trigger;
      dialog.showModal();
      const page = dialog.ownerDocument;
      page.documentElement.classList.add('proposal-overlay-open');
      page.body.classList.add('proposal-overlay-open');
      closeButton.focus({ preventScroll: true });
    });
    initializedTriggers.add(trigger);
  }
}
