import { lazy, Suspense } from 'react'
import { domAnimation, LazyMotion, MotionConfig } from 'framer-motion'
import { Route, Routes } from 'react-router-dom'
import Layout from '@/components/Layout'
import ScrollToTop from '@/components/ScrollToTop'
import Home from '@/pages/Home'

const About = lazy(() => import('@/pages/About'))
const Services = lazy(() => import('@/pages/Services'))
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'))
const TermsConditions = lazy(() => import('@/pages/TermsConditions'))
const NotFound = lazy(() => import('@/pages/NotFound'))

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
    <MotionConfig reducedMotion="user">
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen bg-navy-950" aria-hidden="true" />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </MotionConfig>
    </LazyMotion>
  )
}
