import { BriefcaseBusiness, BrainCircuit, GraduationCap, Megaphone, MonitorSmartphone, SearchCheck, Smartphone, type LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  /** Short label used in footer and the contact dropdown. */
  shortName: string
  /** Label of the matching contact-form option. */
  formLabel: string
  title: string
  description: string
  capabilities: string[]
  icon: LucideIcon
}

export const services: Service[] = [
  {
    id: 'pmo', shortName: 'PMO', formLabel: 'PMO – Project Management', icon: BriefcaseBusiness,
    title: 'Project Management & PMO Consulting',
    description: 'Drive successful project execution through structured planning, governance, resource management, and performance monitoring.',
    capabilities: ['Project Planning and Scheduling', 'Project Governance', 'PMO Setup and Optimization', 'Risk and Issue Management', 'Agile and Hybrid Project Management', 'Project Reporting and Monitoring', 'Stakeholder Management', 'Delivery Excellence'],
  },
  {
    id: 'lms', shortName: 'LMS', formLabel: 'LMS – Learning and Development', icon: GraduationCap,
    title: 'Learning Management & Development',
    description: 'Empower your workforce through modern learning strategies, digital training solutions, and structured professional development programs.',
    capabilities: ['Learning Management Solutions', 'Corporate Training Programs', 'Employee Skill Development', 'Digital Learning Experiences', 'Training Content Development', 'Learning Strategy and Consulting', 'Learning Performance Analytics'],
  },
  {
    id: 'ai', shortName: 'AI Solutions', formLabel: 'Artificial Intelligence', icon: BrainCircuit,
    title: 'Artificial Intelligence & Generative AI',
    description: 'Unlock business potential with intelligent automation, AI-powered applications, and next-generation generative AI solutions.',
    capabilities: ['Generative AI Solutions', 'AI-Powered Applications', 'Intelligent Process Automation', 'AI Chatbots and Virtual Assistants', 'AI Integration and Consulting', 'Data-Driven Business Intelligence', 'AI Workflow Optimization', 'AI Strategy and Adoption'],
  },
  {
    id: 'web', shortName: 'Web Development', formLabel: 'Web Designing', icon: MonitorSmartphone,
    title: 'Website Design & Development',
    description: 'Build engaging, responsive, and performance-driven websites that strengthen your digital presence and deliver exceptional user experiences.',
    capabilities: ['Corporate Website Development', 'UI/UX Design', 'Responsive Web Design', 'Landing Page Development', 'Frontend Development', 'Website Redesign', 'Website Performance Optimization'],
  },
  {
    id: 'mobile', shortName: 'Mobile App Development', formLabel: 'Mobile Application Development', icon: Smartphone,
    title: 'Mobile Application Development',
    description: 'Transform your business ideas into powerful mobile applications designed for performance, usability, and scalability.',
    capabilities: ['iOS Application Development', 'Android Application Development', 'Cross-Platform Development', 'Swift and SwiftUI Development', 'React Native Development', 'Mobile UI/UX Design', 'API Integration', 'Application Maintenance and Support'],
  },
  {
    id: 'marketing', shortName: 'Digital Marketing', formLabel: 'Digital Marketing', icon: Megaphone,
    title: 'Digital Marketing Solutions',
    description: 'Strengthen your online presence, connect with your target audience, and accelerate business growth through effective digital marketing strategies.',
    capabilities: ['Social Media Marketing', 'Content Marketing', 'Brand Strategy', 'Paid Advertising', 'Online Campaign Management', 'Marketing Analytics', 'Lead Generation Strategies'],
  },
  {
    id: 'seo', shortName: 'SEO', formLabel: 'SEO', icon: SearchCheck,
    title: 'Search Engine Optimization',
    description: 'Improve online visibility, strengthen organic search performance, and help potential customers discover your business.',
    capabilities: ['Technical SEO', 'On-Page SEO', 'Off-Page SEO', 'Keyword Research', 'SEO Content Optimization', 'Website SEO Audits', 'Search Performance Monitoring'],
  },
]

/** Contact-form dropdown options (derived so labels stay in sync). */
export const serviceFormOptions = [...services.map((s) => s.formLabel), 'Other']
