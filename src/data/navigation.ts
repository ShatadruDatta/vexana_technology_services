export interface NavItem { label: string; to: string; hash?: string }

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Expertise', to: '/', hash: 'expertise' },
  { label: 'Contact Us', to: '/', hash: 'contact' },
]

export const legalLinks: NavItem[] = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms-and-conditions' },
]
