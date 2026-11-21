import { Blocks, Compass, Gem, Handshake, Lightbulb, Rocket, ShieldCheck, Target, Workflow, BrainCircuit, Sparkles, Globe, Smartphone, GraduationCap, Megaphone, SearchCheck, BriefcaseBusiness, type LucideIcon } from 'lucide-react'

export interface IconItem { title: string; text: string; icon: LucideIcon }

export const pillars: IconItem[] = [
  { title: 'Strategic Excellence', text: 'Clear planning, governance and delivery discipline that keep initiatives aligned with business goals.', icon: Compass },
  { title: 'Technology Innovation', text: 'Modern engineering and applied AI used where they create real, practical value.', icon: Lightbulb },
  { title: 'Business Transformation', text: 'Digital solutions that improve operations and open up new growth opportunities.', icon: Rocket },
]

export const whyChoose: IconItem[] = [
  { title: 'Business-Focused Approach', text: 'Every engagement starts from your objectives, not from a technology preference.', icon: Target },
  { title: 'Innovation-Driven Solutions', text: 'We explore modern tools and methods, including AI, to solve problems in better ways.', icon: Lightbulb },
  { title: 'Integrated Service Portfolio', text: 'Project management, AI, software, learning and marketing under one roof.', icon: Blocks },
  { title: 'Quality and Reliability', text: 'Structured processes and careful delivery so you can depend on the outcome.', icon: ShieldCheck },
  { title: 'Customer-Centric Mindset', text: 'We listen first, communicate openly and shape solutions around your needs.', icon: Handshake },
  { title: 'Future-Ready Technology', text: 'Scalable, maintainable solutions designed to grow with your business.', icon: Gem },
]

export const expertise: IconItem[] = [
  { title: 'Project Management', text: 'Planning, governance and delivery oversight.', icon: BriefcaseBusiness },
  { title: 'Artificial Intelligence', text: 'Intelligent automation and data-driven insight.', icon: BrainCircuit },
  { title: 'Generative AI', text: 'Assistants, content and workflow solutions.', icon: Sparkles },
  { title: 'Web Technologies', text: 'Fast, responsive and accessible websites.', icon: Globe },
  { title: 'Mobile Technologies', text: 'Native and cross-platform applications.', icon: Smartphone },
  { title: 'Learning Technologies', text: 'Digital learning and training platforms.', icon: GraduationCap },
  { title: 'Digital Marketing', text: 'Campaigns that connect with your audience.', icon: Megaphone },
  { title: 'Search Engine Optimization', text: 'Visibility and organic search performance.', icon: SearchCheck },
]

export interface Step { n: string; title: string; text: string; icon: LucideIcon }
export const approach: Step[] = [
  { n: '01', title: 'Discover', text: 'Understand business objectives, challenges, and requirements.', icon: Compass },
  { n: '02', title: 'Strategize', text: 'Develop a practical solution roadmap aligned with business goals.', icon: Workflow },
  { n: '03', title: 'Execute', text: 'Deliver solutions using appropriate technologies, processes, and expertise.', icon: Rocket },
  { n: '04', title: 'Optimize', text: 'Continuously improve performance, efficiency, and business outcomes.', icon: Gem },
]
