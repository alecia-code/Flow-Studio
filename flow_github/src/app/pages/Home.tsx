import { HeroSection } from '../sections/Hero';
import { PhilosophySection } from '../sections/Philosophy';
import { FlowMethodSection } from '../sections/FlowMethod';
import { CaseStudySection } from '../sections/CaseStudy';
import { AhaMomentSection } from '../sections/AhaMoment';
import { RetentionSystemSection } from '../sections/RetentionSystem';
import { BusinessPulseSection } from '../sections/BusinessPulse';
import { YourBusinessSection } from '../sections/YourBusiness';
import { YouDontNeedSection } from '../sections/YouDontNeed';
import { FieldNoteSection } from '../sections/FieldNote';
import { WhatHappensNextSection } from '../sections/WhatHappensNext';
import { ClosingSection } from '../sections/Closing';

export function Home() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <FlowMethodSection />
      <CaseStudySection />
      <AhaMomentSection />
      <RetentionSystemSection />
      <BusinessPulseSection />
      <YourBusinessSection />
      <YouDontNeedSection />
      <FieldNoteSection />
      <WhatHappensNextSection />
      <ClosingSection />
    </>
  );
}
