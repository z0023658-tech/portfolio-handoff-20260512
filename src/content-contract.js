const requiredSections = [
  'hero',
  'selected-work',
  'featured-cases',
  'about',
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

const allowedCaseStatuses = new Set([
  'delivered',
  'proposal-only',
  'in-development',
  'archive',
]);

const selectedWorkCategories = new Set([
  'FILM',
  'AI VISUAL',
  'BUILD',
]);

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

  for (const caseElement of root.querySelectorAll('[data-case-status]')) {
    const status = caseElement.dataset.caseStatus;
    if (!allowedCaseStatuses.has(status)) {
      issues.push(`Unsupported case status: ${status || '(empty)'}`);
    }

    if (!caseElement.querySelector('[data-case-role]')) {
      issues.push(`Case is missing a visible role: ${caseElement.id || '(no id)'}`);
    }
  }

  const selectedWorkSection = root.querySelector('[data-section="selected-work"]');
  if (selectedWorkSection) {
    const workCards = selectedWorkSection.querySelectorAll('[data-selected-work]');

    if (workCards.length !== 6) {
      issues.push(`Selected work must contain 6 visible entries, found: ${workCards.length}`);
    }

    const representedCategories = new Set();

    for (const workCard of workCards) {
      const category = workCard.dataset.primaryCategory;
      const visibleCategory = workCard.querySelector('.selected-work-category')?.textContent.trim();

      if (!workCard.querySelector('img') || !workCard.querySelector('h3') || !visibleCategory || !workCard.querySelector('.selected-work-tags li')) {
        issues.push('Every selected work entry must include an image, title, category, and tag');
      }

      if (!selectedWorkCategories.has(category) || visibleCategory !== category) {
        issues.push(`Unsupported or mismatched selected work category: ${category || '(empty)'}`);
      } else {
        representedCategories.add(category);
      }
    }

    for (const category of selectedWorkCategories) {
      if (!representedCategories.has(category)) {
        issues.push(`Selected work is missing category: ${category}`);
      }
    }
  }

  const featuredCasesSection = root.querySelector('[data-section="featured-cases"]');
  if (featuredCasesSection) {
    const featuredCases = featuredCasesSection.querySelectorAll('[data-featured-case]');
    const featuredCase = featuredCases[0];

    if (featuredCases.length !== 1) {
      issues.push(`Featured cases must contain 1 completed case, found: ${featuredCases.length}`);
    }

    if (featuredCase) {
      if (!featuredCase.querySelector('[data-case-evidence] img')) {
        issues.push('Featured case is missing its primary workbench visual');
      }

      if (featuredCase.querySelectorAll('[data-case-comparison] img').length !== 2) {
        issues.push('Featured case must include a two-image outcome comparison');
      }

      if (featuredCase.querySelectorAll('[data-result-item]').length !== 3) {
        issues.push('Featured case must include 3 verified result items');
      }
    }

    if (!featuredCasesSection.querySelector('[data-featured-case-next][data-case-state="planned"]')) {
      issues.push('Featured cases is missing the planned second-case entry');
    }
  }

  const aboutSection = root.querySelector('[data-section="about"]');
  if (aboutSection) {
    const experienceItems = aboutSection.querySelectorAll('[data-experience-item]');

    if (experienceItems.length !== 3) {
      issues.push(`Experience must contain 3 visible capability areas, found: ${experienceItems.length}`);
    }

    if (!aboutSection.querySelector('img') || !aboutSection.querySelector('a[href^="mailto:"]')) {
      issues.push('About must include a portrait and resume contact entry');
    }

    if (/6\s*[–-]\s*7\s*年/.test(aboutSection.textContent)) {
      issues.push('Experience contains an unverified exact year claim');
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
