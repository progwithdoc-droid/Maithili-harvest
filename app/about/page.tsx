import About from '@/components/About'
import Story from '@/components/Story'
import TestimonialSection from '@/components/TestimonialSection'

export const metadata = {
  title: 'About Us — Maithili Harvest',
  description: 'Learn about Amit Kumar, founder of Maithili Harvest, and the journey from a small Bihar shop to a registered agri-food startup bringing the authentic harvest of Mithila to the world.',
}

const page = () => {
  return (
    <div>
      <About />
      <Story />
      <TestimonialSection />
    </div>
  )
}

export default page
