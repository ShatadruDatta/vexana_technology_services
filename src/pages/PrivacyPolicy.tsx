import LegalPage from '@/components/LegalPage'
import { privacySections } from '@/data/legal'

export default function PrivacyPolicy() {
  return <LegalPage eyebrow="Legal" title="Privacy Policy" sections={privacySections} />
}
