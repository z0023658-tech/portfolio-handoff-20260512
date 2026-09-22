import { initializeCaseOverlays } from './overlay-dialog.js';

const gallery = document.querySelector('[data-ai-visual-gallery]');

if (gallery) {
  const thumbnails = [...gallery.querySelectorAll('[data-ai-visual-thumbnail]')];
  const previews = [...gallery.querySelectorAll('[data-ai-visual-preview]')];
  let selectedThumbnail = thumbnails.find((thumbnail) => thumbnail.classList.contains('is-selected')) ?? thumbnails[0];
  let activePreview = previews.find((preview) => preview.classList.contains('is-active')) ?? previews[0];
  let requestedSource = activePreview.src;

  const showPreview = (thumbnail) => {
    const source = thumbnail.querySelector('img')?.src ?? thumbnail.dataset.aiVisualSrc;
    const alt = thumbnail.dataset.aiVisualAlt;
    const resolvedSource = source ? new URL(source, window.location.href).href : '';

    if (!resolvedSource || activePreview.src === resolvedSource) return;

    requestedSource = resolvedSource;

    const nextPreview = previews.find((preview) => preview !== activePreview);
    const preload = new Image();

    preload.onload = () => {
      if (requestedSource !== resolvedSource) return;

      nextPreview.src = source;
      nextPreview.alt = alt;
      nextPreview.classList.add('is-active');
      activePreview.classList.remove('is-active');
      activePreview = nextPreview;
    };
    preload.src = source;
  };

  const selectThumbnail = (thumbnail) => {
    selectedThumbnail = thumbnail;

    for (const item of thumbnails) {
      const isSelected = item === thumbnail;
      item.classList.toggle('is-selected', isSelected);
      item.setAttribute('aria-pressed', String(isSelected));
    }

    showPreview(thumbnail);
  };

  for (const thumbnail of thumbnails) {
    thumbnail.addEventListener('pointerenter', (event) => {
      if (event.pointerType === 'mouse') showPreview(thumbnail);
    });

    thumbnail.addEventListener('click', () => selectThumbnail(thumbnail));
  }

  gallery.querySelector('.ai-visual-thumbnail-list')?.addEventListener('pointerleave', (event) => {
    if (event.pointerType === 'mouse') showPreview(selectedThumbnail);
  });
}

initializeCaseOverlays();
