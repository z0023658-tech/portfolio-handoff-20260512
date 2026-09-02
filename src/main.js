import { validateHomepageContent } from './content-contract.js';

const issues = validateHomepageContent();

document.documentElement.dataset.contentContract = issues.length === 0 ? 'valid' : 'warning';

if (issues.length > 0) {
  console.warn('[portfolio content contract]', issues);
}
