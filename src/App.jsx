import React from 'react';
import FlightCanvas from './components/FlightCanvas';
import AltitudeHud from './components/AltitudeHud';
import Masthead from './components/Masthead';
import CloudscapeTransition from './components/CloudscapeTransition';
import ScrollRevealText from './components/ScrollRevealText';
import Statement from './components/Statement';
import ProbabilitySimulator from './components/ProbabilitySimulator';
import PromptSplit from './components/PromptSplit';
import ThemesGrid from './components/ThemesGrid';
import MayaSpectrum from './components/MayaSpectrum';
import TimelineSection from './components/TimelineSection';
import PrizesAndFees from './components/PrizesAndFees';
import EvaluationSection from './components/EvaluationSection';
import FAQSection from './components/FAQSection';
import GroundForm from './components/GroundForm';
import SitePreloader from './components/SitePreloader';

export default function App() {
  return (
    <div className="page-shell">
      {/* Intro preloader overlay (once per session) */}
      <SitePreloader />

      {/* 3D WebGL Flight Canvas with Procedural Cloud Halftone Shader */}
      <FlightCanvas />

      {/* Sticky Avionics Elevation & Battery Cell Telemetry HUD */}
      <AltitudeHud />

      {/* Hero Masthead with Dynamic Brand Mark Cycler & Nav */}
      <Masthead />

      {/* Atmospheric Cloudscape Mist Continuous Flow Transition (Option B) */}
      <CloudscapeTransition />

      {/* Opening Manifesto — Word-by-Word Progressive Scroll Reveal */}
      <section className="article-intro" aria-label="Hackathon introduction">
        <div className="article-intro__inner">
          <ScrollRevealText
            as="p"
            className="article-intro__lead"
            text="Intelligent Battery Cell 4.0 Hackathon 2026 will bring participants together to develop innovative solutions for the future of battery technology."
            highlightWord="innovative"
          />

          <ScrollRevealText
            as="p"
            className="article-intro__copy"
            text="The event is focused on using AI to advance battery safety, sustainability, and indigenous innovation."
          />

          <ScrollRevealText
            as="p"
            className="article-intro__copy"
            text="Open to students and research scholars, student start-ups, and MSMEs and registered start-ups. Shortlisted applicants receive mentoring before the Grand Finale, with cash prizes of up to ₹2 lakh, certificates for the winners, and incubation opportunities for participants."
          />
        </div>
      </section>

      {/* High-Impact Statement Section with Cut-Corner Badges */}
      <Statement />

      {/* Core Hackathon Themes Grid (All 8 Themes) */}
      <ThemesGrid />

      {/* Interactive Probability / Bottleneck Simulator */}
      <ProbabilitySimulator />

      {/* Interactive Architecture Stage: Group 1 vs Group 2 */}
      <PromptSplit />

      {/* Raymond Loewy MAYA Spectrum & Interactive Spawning Tech Cards */}
      <MayaSpectrum />

      {/* Timeline & Key Dates */}
      <TimelineSection />

      {/* Prizes, Incubation & Registration Fees */}
      <PrizesAndFees />

      {/* Evaluation Stages & Judging Criteria */}
      <EvaluationSection />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Ground Level Contact & Registration EOI Portal */}
      <GroundForm />
    </div>
  );
}
