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

  const selectedWorkSection = root.querySelector('[data-section="selected-work"]');
  if (selectedWorkSection) {
    const workCards = selectedWorkSection.querySelectorAll('[data-selected-work]');

    if (workCards.length !== 6) {
      issues.push(`Selected work must contain 6 visible entries, found: ${workCards.length}`);
    }

    for (const workCard of workCards) {
      if (!workCard.querySelector('img') || !workCard.querySelector('h3')) {
        issues.push('Every selected work entry must include an image and title');
      }
    }
  }

  const featuredCasesSection = root.querySelector('[data-section="featured-cases"]');
  if (featuredCasesSection) {
    const featuredCases = featuredCasesSection.querySelectorAll('.featured-case');

    if (featuredCases.length !== 3) {
      issues.push(`Featured cases must contain 3 entries, found: ${featuredCases.length}`);
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
