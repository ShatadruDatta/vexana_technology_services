/**
 * Legal copy. DRAFT TEMPLATES ONLY: text in [SQUARE BRACKETS] is a placeholder
 * that must be confirmed or replaced with real business details, and the whole
 * document must be reviewed (ideally by a qualified professional) before publication.
 */
export interface LegalSection { id: string; title: string; paragraphs: string[] }

export const privacySections: LegalSection[] = [
  { id: 'introduction', title: 'Introduction', paragraphs: [
    'This Privacy Policy explains how [LEGAL ENTITY NAME], trading as VEXANA Technologies and Consulting Services ("VEXANA", "we", "us"), handles information in connection with this website.',
    '[CONFIRM: add the registered business name, jurisdiction and any applicable data protection laws, for example GDPR, UK GDPR, the Indian DPDP Act or CCPA.]' ] },
  { id: 'information-collection', title: 'Information Collection', paragraphs: [
    '[CONFIRM AND LIST the categories of personal information the business actually collects. Do not list categories that are not collected.]',
    'Technical note for review: in its current form, the website contact form prepares an email in the visitor\'s own email application. The website itself does not store form submissions. [CONFIRM whether an external form service is configured. If so, name it and describe what it receives.]' ] },
  { id: 'information-usage', title: 'Information Usage', paragraphs: [
    '[DESCRIBE the purposes for which information is used, such as responding to enquiries. List only purposes that apply.]',
    '[CONFIRM the legal basis for each purpose where required by applicable law.]' ] },
  { id: 'cookies', title: 'Cookies', paragraphs: [
    '[CONFIRM whether this website uses cookies, local storage or analytics tools. If it does, list each one, its purpose and its duration, and describe how visitors can manage consent.]' ] },
  { id: 'data-protection', title: 'Data Protection', paragraphs: [
    '[DESCRIBE the technical and organisational measures actually in place to protect information, and the retention period for each category of information.]' ] },
  { id: 'third-party-services', title: 'Third-Party Services', paragraphs: [
    '[LIST any third-party services that process visitor information, such as hosting, analytics, form handling or email providers, and link to their privacy policies. State "None" if none apply.]',
    'For review: this website loads fonts from Google Fonts. [CONFIRM whether to keep this, self-host the fonts, or disclose it here.]' ] },
  { id: 'external-links', title: 'External Links', paragraphs: [
    'This website may contain links to external websites. We are not responsible for the privacy practices or content of those sites, and we encourage you to review their policies. [CONFIRM]' ] },
  { id: 'user-rights', title: 'User Rights', paragraphs: [
    '[DESCRIBE the rights available to visitors under the applicable law, for example access, correction, deletion, objection and withdrawal of consent, and how to exercise them.]' ] },
  { id: 'policy-updates', title: 'Policy Updates', paragraphs: [
    'We may update this Privacy Policy from time to time. The latest version will be published on this page with the date of the last update. [CONFIRM the process for notifying visitors of material changes.]' ] },
  { id: 'contact-information', title: 'Contact Information', paragraphs: [
    'For privacy-related questions, contact [PRIVACY CONTACT EMAIL] or write to [BUSINESS ADDRESS].' ] },
]

export const termsSections: LegalSection[] = [
  { id: 'website-usage', title: 'Website Usage', paragraphs: [
    'By accessing this website you agree to these Terms and Conditions. If you do not agree, please do not use the website. [CONFIRM governing entity and jurisdiction.]' ] },
  { id: 'intellectual-property', title: 'Intellectual Property', paragraphs: [
    'Unless stated otherwise, the content, design, text, graphics and branding on this website are the property of [LEGAL ENTITY NAME] or its licensors. [CONFIRM ownership and licensing of all assets, then describe permitted and prohibited use.]' ] },
  { id: 'service-information', title: 'Service Information', paragraphs: [
    'Information on this website about our services is provided for general information only and does not constitute an offer or a binding commitment. Specific services are governed by a separate written agreement. [CONFIRM]' ] },
  { id: 'user-responsibilities', title: 'User Responsibilities', paragraphs: [
    'You agree to use this website lawfully, to provide accurate information when contacting us, and not to interfere with the operation or security of the website. [REVIEW and extend as required.]' ] },
  { id: 'external-links', title: 'External Links', paragraphs: [
    'This website may link to third-party websites for convenience. We do not control or endorse them and are not responsible for their content or practices. [CONFIRM]' ] },
  { id: 'limitation-of-liability', title: 'Limitation of Liability', paragraphs: [
    '[DRAFT WITH LEGAL ADVICE: describe the extent to which [LEGAL ENTITY NAME] is liable for the use of this website, and the limits that apply under the governing law. Do not publish a limitation clause without professional review.]' ] },
  { id: 'changes-to-terms', title: 'Changes to Terms', paragraphs: [
    'We may revise these Terms and Conditions at any time by updating this page. Continued use of the website after changes means you accept the revised terms. [CONFIRM]' ] },
  { id: 'contact-information', title: 'Contact Information', paragraphs: [
    'Questions about these Terms can be sent to [CONTACT EMAIL] or [BUSINESS ADDRESS].' ] },
]
