import LegalPage from '@/components/LegalPage'
import { termsSections } from '@/data/legal'

export default function TermsConditions() {
  return <LegalPage eyebrow="Legal" title="Terms & Conditions" sections={termsSections} />
}
