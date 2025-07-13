import AboutPage from '@/components/AboutPage/MainOne';

import MissionSection from '@/components/AboutPage/MissionSection';
import ValuesSection from '@/components/AboutPage/ValuesSection';
import TeamSection from '@/components/AboutPage/TeamSection';
import StatsSection from '@/components/AboutPage/StatsSection';
import ContactSection from '@/components/AboutPage/ContactSection';
import Footer from '@/components/AboutPage/Footer';

export default function About() {
  return (
    <div>
      
          <AboutPage/>
           <MissionSection/>
           <ValuesSection/>
           <TeamSection/>
           <StatsSection/>
           <ContactSection/>
           <Footer/>
    </div>
  )
}