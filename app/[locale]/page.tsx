import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Summary from '@/components/Summary';
import Skills from '@/components/Skills';
import Competencies from '@/components/Competencies';
import Achievements from '@/components/Achievements';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Courses from '@/components/Courses';
import Experience from '@/components/Experience';
import Contests from '@/components/Contests';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Home({
  params
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-0 sm:px-2 py-4 max-w-5xl">
        <LanguageSwitcher />
        <Header />
        <Summary />
        <Skills />
        <Competencies />
        <Achievements />
        <Education />
        <Certifications />
        <Courses />
        <Experience />
        <Contests />
      </div>
    </div>
  );
}

