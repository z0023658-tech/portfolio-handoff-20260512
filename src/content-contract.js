const requiredSections = [
  'hero',
  'quick-proof',
  'work-navigator',
  'flagship-commercial',
  'flagship-workflow',
  'selected-cases',
  'process',
  'visual-works',
  'about-experience',
  'contact',
];

const allowedCaseStatuses = new Set([
  'delivered',
  'proposal-only',
  'in-development',
  'archive',
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

  for (const caseElement of root.querySelectorAll('[data-case-status]')) {
    const status = caseElement.dataset.caseStatus;
    if (!allowedCaseStatuses.has(status)) {
      issues.push(`Unsupported case status: ${status || '(empty)'}`);
    }

    if (!caseElement.querySelector('[data-case-role]')) {
      issues.push(`Case is missing a visible role: ${caseElement.id || '(no id)'}`);
    }
  }

  const workflowCase = root.querySelector('[data-section="flagship-workflow"]');
  if (workflowCase) {
    if (!workflowCase.querySelector('[data-case-evidence]')) {
      issues.push('Workflow case is missing visible evidence');
    }

    if (!workflowCase.dataset.publicLinkState) {
      issues.push('Workflow case is missing a public-link state');
    }
  }

  const processSection = root.querySelector('[data-section="process"]');
  if (processSection) {
    const steps = processSection.querySelectorAll('[data-process-step]');
    const summaries = processSection.querySelectorAll('[data-process-summary]');

    if (steps.length !== 7) {
      issues.push(`Process must contain 7 visible steps, found: ${steps.length}`);
    }

    if (summaries.length !== 7) {
      issues.push(`Process must contain 7 visible summaries, found: ${summaries.length}`);
    }
  }

  const visualWorksSection = root.querySelector('[data-section="visual-works"]');
  if (visualWorksSection) {
    const visualWorks = visualWorksSection.querySelectorAll('[data-visual-work]');
    const visibleRoles = visualWorksSection.querySelectorAll('[data-visual-role]');

    if (visualWorks.length !== 3) {
      issues.push(`Visual works must contain 3 visible entries, found: ${visualWorks.length}`);
    }

    if (visibleRoles.length !== visualWorks.length) {
      issues.push('Every visual work must include a visible role boundary');
    }
  }

  const experienceSection = root.querySelector('[data-section="about-experience"]');
  if (experienceSection) {
    const experienceItems = experienceSection.querySelectorAll('[data-experience-item]');

    if (experienceItems.length !== 3) {
      issues.push(`Experience must contain 3 visible capability areas, found: ${experienceItems.length}`);
    }

    if (/6\s*[–-]\s*7\s*年/.test(experienceSection.textContent)) {
      issues.push('Experience contains an unverified exact year claim');
    }
  }

  const contactSection = root.querySelector('[data-section="contact"]');
  if (contactSection && !contactSection.querySelector('a[href^="mailto:"]')) {
    issues.push('Contact is missing a direct email link');
  }

  return issues;
}
