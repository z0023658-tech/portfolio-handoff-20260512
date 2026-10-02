import { initializeCaseOverlays } from './overlay-dialog.js';
import { validateToaCaseContent } from './content-contract.js';

const issues = validateToaCaseContent();
document.documentElement.dataset.contentContract = issues.length === 0 ? 'valid' : 'warning';
if (issues.length > 0) console.warn('[TOA-112 content contract]', issues);

const film = document.querySelector('[data-toa-final-film]');
const viewers = [...document.querySelectorAll('.toa-evidence-dialog')];
const brief = document.querySelector('#toa-brief-viewer');
const pages = [...brief.querySelectorAll('[data-brief-page]')];
const previous = brief.querySelector('[data-brief-prev]');
const next = brief.querySelector('[data-brief-next]');
const counter = brief.querySelector('[data-brief-counter]');
let pageIndex = 0;

function setZoom(viewer, zoomed) {
  viewer.classList.toggle('is-zoomed', zoomed);
  const button = viewer.querySelector('[data-evidence-zoom]');
  button.setAttribute('aria-pressed', String(zoomed));
  button.textContent = zoomed ? '適合視窗' : '放大閱讀';
  viewer.querySelector('.toa-evidence-stage').scrollTo(0, 0);
}

function showPage(index) {
  pageIndex = Math.max(0, Math.min(index, pages.length - 1));
  pages.forEach((image, itemIndex) => { image.hidden = itemIndex !== pageIndex; });
  previous.disabled = pageIndex === 0;
  next.disabled = pageIndex === pages.length - 1;
  counter.textContent = `${pageIndex + 1} / ${pages.length}`;
  setZoom(brief, false);
}

for (const viewer of viewers) {
  viewer.querySelector('[data-evidence-zoom]').addEventListener('click', () => {
    setZoom(viewer, !viewer.classList.contains('is-zoomed'));
  });
}
previous.addEventListener('click', () => showPage(pageIndex - 1));
next.addEventListener('click', () => showPage(pageIndex + 1));
brief.addEventListener('keydown', (event) => {
  if (brief.classList.contains('is-zoomed') || event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    showPage(pageIndex + (event.key === 'ArrowRight' ? 1 : -1));
  }
});

// Pause the film before the shared dialog opens; closing never resumes it automatically.
for (const trigger of document.querySelectorAll('[data-case-overlay-trigger]')) {
  trigger.addEventListener('click', () => {
    film.pause();
    const viewer = document.getElementById(trigger.getAttribute('aria-controls'));
    if (viewer === brief) showPage(0);
    else setZoom(viewer, false);
  });
}
initializeCaseOverlays();

document.addEventListener('visibilitychange', () => {
  if (document.hidden) film.pause();
});
window.addEventListener('pagehide', () => film.pause());
