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
