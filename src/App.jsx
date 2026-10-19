import React from 'react';
import FlightCanvas from './components/FlightCanvas';
import AltitudeHud from './components/AltitudeHud';
import Masthead from './components/Masthead';
import ScrollRevealText from './components/ScrollRevealText';
import Statement from './components/Statement';
import BatteryEvolutionChart from './components/BatteryEvolutionChart';
import ProbabilitySimulator from './components/ProbabilitySimulator';
import PromptSplit from './components/PromptSplit';
import ThemesGrid from './components/ThemesGrid';
import MayaSpectrum from './components/MayaSpectrum';
import TimelineSection from './components/TimelineSection';
import PrizesAndFees from './components/PrizesAndFees';
import EvaluationSection from './components/EvaluationSection';
import FAQSection from './components/FAQSection';
import GroundForm from './components/GroundForm';

export default function App() {
  return (
    <div className="page-shell">
      {/* 3D WebGL Flight Canvas with Procedural Cloud Halftone Shader */}
      <FlightCanvas />

      {/* Sticky Avionics Elevation & Battery Cell Telemetry HUD */}
      <AltitudeHud />

      {/* Hero Masthead with Dynamic Brand Mark Cycler & Nav */}
      <Masthead />

      {/* Opening Manifesto — Word-by-Word Progressive Scroll Reveal */}
      <section className="article-intro" aria-label="Hackathon introduction">
        <div className="article-intro__inner">
          <ScrollRevealText
            as="p"
            className="article-intro__lead"
            text="Intelligent Battery Cell 4.0 Hackathon 2026 brings together India's sharpest students, research scholars, deeptech startups, and MSMEs to develop innovative solutions for the future of battery technology."
            highlightWord="innovative"
          />

          <ScrollRevealText
            as="p"
            className="article-intro__copy"
            text="The event is focused on using Artificial Intelligence to advance battery safety, sustainability, and indigenous innovation. From mitigating thermal runaway hazards in electric vehicles to building gigawatt-hour grid storage and extreme-climate defense energy systems, the era of passive chemical batteries is over."
          />

          <ScrollRevealText
            as="p"
            className="article-intro__copy"
            text="Whether you are writing AI neural digital twin algorithms, engineering embedded firmware for edge BMS microcontrollers, testing sodium-ion cathode formulations, or designing circular second-life cascading models — this is the premier national platform to showcase your breakthrough."
          />
        </div>
      </section>

      {/* High-Impact Statement Section with Cut-Corner Badges */}
      <Statement />

      {/* Core Hackathon Themes Grid (All 8 Themes) */}
      <ThemesGrid />

      {/* Battery Cycle Life & AI Optimization SVG Chart */}
      <BatteryEvolutionChart />

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
