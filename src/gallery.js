for (const gallery of document.querySelectorAll('[data-gallery]')) {
  const viewport = gallery.querySelector('[data-gallery-viewport]');
  const slides = [...gallery.querySelectorAll('.portfolio-gallery-slide')];
  const currentLabel = gallery.querySelector('[data-gallery-current]');
  const totalLabel = gallery.querySelector('[data-gallery-total]');
  const previousButton = gallery.querySelector('[data-gallery-prev]');
  const nextButton = gallery.querySelector('[data-gallery-next]');

  if (!viewport || slides.length === 0) continue;

  let currentIndex = 0;
  let scrollFrame;

  const update = (nextIndex) => {
    currentIndex = Math.max(0, Math.min(nextIndex, slides.length - 1));
    if (currentLabel) currentLabel.textContent = String(currentIndex + 1);
    if (totalLabel) totalLabel.textContent = String(slides.length);
    if (previousButton) previousButton.disabled = currentIndex === 0;
    if (nextButton) nextButton.disabled = currentIndex === slides.length - 1;
  };

  const goTo = (nextIndex) => {
    update(nextIndex);
    viewport.scrollTo({
      left: currentIndex * viewport.clientWidth,
      behavior: 'smooth',
    });
  };

  previousButton?.addEventListener('click', () => goTo(currentIndex - 1));
  nextButton?.addEventListener('click', () => goTo(currentIndex + 1));

  viewport.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goTo(currentIndex - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goTo(currentIndex + 1);
    }
  });

  viewport.addEventListener('scroll', () => {
    cancelAnimationFrame(scrollFrame);
    scrollFrame = requestAnimationFrame(() => {
      const nextIndex = Math.round(viewport.scrollLeft / viewport.clientWidth);
      update(nextIndex);
    });
  }, { passive: true });

  window.addEventListener('resize', () => {
    viewport.scrollTo({
      left: currentIndex * viewport.clientWidth,
      behavior: 'auto',
    });
  });

  update(0);
}
