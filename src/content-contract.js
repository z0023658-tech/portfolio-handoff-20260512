const requiredSections = [
  'hero',
  'selected-work',
  'featured-cases',
  'contact',
];

const retiredHomepageSections = [
  'flagship-commercial',
  'flagship-workflow',
  'selected-cases',
  'process',
  'visual-works',
  'about-experience',
];

/**
 * 內容 contract 是一組最低必要欄位規則。
 * 它只做開發期檢查，不負責產生或隱藏頁面內容。
 */
export function validateHomepageContent(root = document) {
  const issues = [];

  for (const sectionName of requiredSections) {
    if (!root.querySelector(`[data-section="${sectionName}"]`)) {
      issues.push(`Missing section: ${sectionName}`);
    }
  }

  for (const sectionName of retiredHomepageSections) {
    if (root.querySelector(`[data-section="${sectionName}"]`)) {
      issues.push(`Retired homepage section is still visible: ${sectionName}`);
    }
  }

  const hero = root.querySelector('[data-section="hero"]');
  if (hero?.querySelector('[data-home-author]')?.textContent.trim() !== '王韋捷') {
    issues.push('Hero is missing the author name');
  }
  if (hero?.querySelector('[data-home-role]')?.textContent.trim() !== 'Director / Filmmaker') {
    issues.push('Hero is missing the Director / Filmmaker identity');
  }
  // Vite adds a content hash; validate the film identity in both root and build output.
  const filmPoster = hero?.querySelector('.screening-hero-image');
  if (!/\/toa-112-hero(?:-[\w-]+)?\.png$/.test(filmPoster?.getAttribute('src') ?? '')) {
    issues.push('Hero is missing the representative film image');
  }
  const filmEntry = hero?.querySelector('button[data-home-entry="toa-film"][data-case-overlay-trigger]');
  if (filmEntry?.getAttribute('aria-controls') !== 'toa-112-film-overlay') {
    issues.push('Hero is missing the TOA-112 film entry');
  }
  if (hero?.querySelector('[data-home-entry="toa-case"]')?.getAttribute('href') !== './redesign/cases/toa-112/' ||
      !root.querySelector('.toa-112-case a[href="./redesign/cases/toa-112/"]')) {
    issues.push('TOA-112 case URL is missing from the homepage');
  }

  const requiredEntries = {
    commercial: 'https://www.youtube.com/playlist?list=PLPJy-5tpOuwW43s8tr8lGtA8jTszo54jN',
    brand: 'https://www.youtube.com/playlist?list=PLPJy-5tpOuwVmQd55XSbNddhfiCSY-6Sx',
    interview: 'https://www.youtube.com/playlist?list=PLPJy-5tpOuwVK7AxdGOsxVkXpjolvhTmZ',
    'generative-gallery': './redesign/galleries/generative-ai-visual/',
    'vinda-gallery': './redesign/galleries/generative-ai-visual/#vinda-snoopy-short-ads-title',
    storyboard: '#storyboard-case',
    'meeting-brief': '#meeting-brief-case',
  };
  const work = root.querySelector('[data-section="selected-work"]');
  for (const [name, href] of Object.entries(requiredEntries)) {
    const entry = work?.querySelector(`a[data-home-entry="${name}"]`);
    if (!entry || entry.closest('[hidden]') || entry.getAttribute('href') !== href) {
      issues.push(`Missing or invalid work entry: ${name}`);
    }
    if (href.startsWith('https:') &&
        (entry?.target !== '_blank' || !entry?.rel.split(/\s+/).includes('noopener'))) {
      issues.push(`External film entry needs a safe new tab: ${name}`);
    }
  }
  for (const card of work?.querySelectorAll('[data-selected-work]') ?? []) {
    if (!card.querySelector('img') || !card.querySelector('h3') || !card.querySelector('a[href], button[data-case-overlay-trigger]')) {
      issues.push('Every image work entry needs an image, title and real viewing action');
    }
  }
  for (const selector of ['.toa-112-case', '#storyboard-case', '#meeting-brief-case']) {
    const caseEntry = root.querySelector(`[data-section="featured-cases"] ${selector}`);
    if (!caseEntry || caseEntry.closest('[hidden]') || !caseEntry.querySelector('[data-case-overlay-trigger]')) {
      issues.push(`Missing existing case demonstration: ${selector}`);
    }
  }
  for (const trigger of root.querySelectorAll('[data-case-overlay-trigger]')) {
    const id = trigger.getAttribute('aria-controls');
    const dialog = id ? root.querySelector(`dialog[id="${id}"]`) : null;
    if (!dialog?.querySelector('[data-case-overlay-close]') || trigger.getAttribute('aria-haspopup') !== 'dialog') {
      issues.push(`Invalid dialog target: ${id ?? '(missing)'}`);
    }
  }
  const filmSource = root.querySelector('#toa-112-film-overlay video source[type="video/mp4"]');
  if (!/\/toa-112-film(?:-[\w-]+)?\.mp4$/.test(filmSource?.getAttribute('src') ?? '')) {
    issues.push('TOA-112 film source is missing');
  }
  if (!root.querySelector('#storyboard-client-proposal img') ||
      root.querySelectorAll('#meeting-brief-overlay img').length !== 6) {
    issues.push('Existing Proposal / six-page Brief evidence is missing');
  }
  for (const anchor of root.querySelectorAll('a[href^="#"]')) {
    const href = anchor.getAttribute('href');
    if (href.length < 2 || !root.querySelector(`[id="${href.slice(1)}"]`)) {
      issues.push(`Missing local anchor target: ${href}`);
    }
  }

  const contactSection = root.querySelector('[data-section="contact"]');
  if (contactSection) {
    if (!contactSection.querySelector('a[href^="mailto:"]')) {
      issues.push('Contact is missing a direct email link');
    }

    if (!contactSection.querySelector('a[href*="instagram.com"]')) {
      issues.push('Contact is missing an Instagram link');
    }
  }

  return issues;
}

/** Validate case content and reading actions, independent of its visual layout. */
export function validateToaCaseContent(root = document) {
  const issues = [];
  const hasAsset = (element, stem, extension) =>
    new RegExp(`/${stem}(?:-[\\w-]+)?\\.${extension}$`).test(element?.getAttribute('src') ?? '');
  const film = root.querySelector('[data-toa-final-film]');
  if (!hasAsset(film?.querySelector('source[type="video/mp4"]'), 'toa-112-film', 'mp4')) {
    issues.push('TOA-112 final film source is missing');
  }
  if (!hasAsset(root.querySelector('[data-toa-proposal]'), 'storyboard-workbench-client-proposal', 'png')) {
    issues.push('Client Proposal source is missing');
  }
  const briefPages = [...root.querySelectorAll('[data-brief-page]')];
  if (briefPages.length !== 6 || Array.from({ length: 6 }, (_, index) =>
    briefPages.filter(image => hasAsset(image, `meeting-brief-0${index + 1}`, 'png')).length
  ).some(count => count !== 1)) {
    issues.push('Meeting Brief must retain all six original pages');
  }
  if (!root.querySelector('a[data-toa-home][href="../../../index.html#work"]')) {
    issues.push('TOA-112 case is missing its return-to-home entry');
  }
  if (!root.querySelector('[data-brief-prev]') || !root.querySelector('[data-brief-next]') ||
      !root.querySelector('[data-brief-counter]')) {
    issues.push('Meeting Brief reading controls are missing');
  }
  for (const trigger of root.querySelectorAll('[data-case-overlay-trigger]')) {
    const target = trigger.getAttribute('aria-controls');
    const dialog = target ? root.querySelector(`dialog[id="${target}"]`) : null;
    if (!dialog?.querySelector('[data-case-overlay-close]') || !dialog.querySelector('[data-evidence-zoom]')) {
      issues.push(`Missing evidence viewer or reading action: ${target ?? '(missing)'}`);
    }
  }
  return issues;
}
