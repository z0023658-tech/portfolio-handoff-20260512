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

const proposalDialog = document.querySelector('.proposal-overlay');
const proposalTrigger = document.querySelector('.storyboard-case-proposal-trigger');
const proposalCloseButton = document.querySelector('.proposal-overlay-close');

if (proposalDialog && proposalTrigger && proposalCloseButton) {
  const closeProposalDialog = () => {
    if (!proposalDialog.open || proposalDialog.classList.contains('is-closing')) {
      return;
    }

    proposalDialog.classList.add('is-closing');
    window.setTimeout(() => proposalDialog.close(), 200);
  };

  proposalTrigger.addEventListener('click', () => {
    proposalDialog.showModal();
    document.documentElement.classList.add('proposal-overlay-open');
    document.body.classList.add('proposal-overlay-open');
    proposalCloseButton.focus();
  });

  proposalCloseButton.addEventListener('click', closeProposalDialog);

  proposalDialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeProposalDialog();
  });

  proposalDialog.addEventListener('click', closeProposalDialog);

  proposalDialog.addEventListener('close', () => {
    proposalDialog.classList.remove('is-closing');
    document.documentElement.classList.remove('proposal-overlay-open');
    document.body.classList.remove('proposal-overlay-open');
    proposalTrigger.focus();
  });
}
