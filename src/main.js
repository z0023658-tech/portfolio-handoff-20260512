import { validateHomepageContent } from './content-contract.js';

const issues = validateHomepageContent();

document.documentElement.dataset.contentContract = issues.length === 0 ? 'valid' : 'warning';

if (issues.length > 0) {
  console.warn('[portfolio content contract]', issues);
}

const cursorMetadata = document.querySelector('.cursor-metadata');
const selectedWorkCards = document.querySelectorAll('[data-cursor-meta]');

if (cursorMetadata && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  for (const card of selectedWorkCards) {
    card.addEventListener('pointerenter', () => {
      cursorMetadata.textContent = card.dataset.cursorMeta;
      document.body.classList.add('has-project-cursor');
    });

    card.addEventListener('pointermove', (event) => {
      cursorMetadata.style.transform = `translate(${event.clientX + 14}px, ${event.clientY + 14}px)`;
    });

    card.addEventListener('pointerleave', () => {
      document.body.classList.remove('has-project-cursor');
    });
  }
}

const caseOverlayTriggers = document.querySelectorAll('[data-case-overlay-trigger]');

for (const trigger of caseOverlayTriggers) {
  const dialogId = trigger.getAttribute('aria-controls');
  const dialog = dialogId ? document.getElementById(dialogId) : null;
  const closeButton = dialog?.querySelector('[data-case-overlay-close]');

  if (!(dialog instanceof HTMLDialogElement) || !(closeButton instanceof HTMLButtonElement)) {
    continue;
  }

  const closeDialog = () => {
    if (!dialog.open || dialog.classList.contains('is-closing')) {
      return;
    }

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
