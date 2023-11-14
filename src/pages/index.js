import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Emotions from '@/components/Emotions';
import Manifesto from '@/components/Manifesto';
import SelfImprovement from '@/components/SelfImprovement';
import WorkWithUs from '@/components/WorkWithUs';
import Hero from '@/components/Hero';
import OthersThink from '@/components/OthersThink';
import Test from '@/components/Test';
import Vacancies from '@/components/Vacancies';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mt-4 overflow-hidden">
        <Hero />
        <Emotions />
        <Manifesto />
        <SelfImprovement />
        <OthersThink />
        <Test />
        <WorkWithUs />
        <Vacancies />
      </main>
      <Footer />
    </>
  );
}
