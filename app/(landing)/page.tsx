import { Metadata } from 'next'
import Navbar from '@/app/(landing)/Navbar'
import Footer from '@/app/(landing)/Footer'
import Hero from '@/app/(landing)/Hero'
import Features from '@/app/(landing)/Features'
import About from '@/app/(landing)/About'
import TechStack from '@/app/(landing)/TechStack'
import Team from '@/app/(landing)/Team'
import Testimonial from '@/app/(landing)/Testimonial'

export const metadata: Metadata = {
  title: 'AI Native App',
  description:
    'AI-Native Application ครบวงจร — Authentication, RAG Chatbot, Knowledge Base, LINE Integration และ Production Deployment ด้วย Next.js 16, Better Auth, Prisma v7 และ OpenAI',
  keywords: [
    'AI Native App',
    'Next.js 16',
    'Better Auth',
    'RAG Chatbot',
    'Knowledge Base',
    'LINE Integration',
    'Prisma v7',
    'pgVector',
    'OpenAI',
    'AI Application'
  ]
}

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <TechStack />
      <Team />
      <Testimonial />
      <Footer />
    </div>
  )
}
