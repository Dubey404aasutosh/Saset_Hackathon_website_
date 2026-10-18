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
import GroundForm from './components/GroundForm';

export default function App() {
  return (
    <div className="page-shell">
      {/* 3D WebGL Flight Canvas with Procedural Cloud Halftone Shader */}
      <FlightCanvas />

      {/* Sticky Avionics Elevation & Battery Cell Telemetry HUD */}
      <AltitudeHud />

      {/* Hero Masthead with Dynamic Brand Mark Cycler */}
      <Masthead />

      {/* Narrative Intro — Word-by-Word Scroll Reveal */}
      <section className="article-intro" aria-label="Opening narrative">
        <div className="article-intro__inner">
          <ScrollRevealText
            as="p"
            className="article-intro__lead"
            text="I'm sitting on a flight, 30,000 feet in the sky, looking at battery specifications from the world's largest gigafactories, when I realize: everything we're doing with conventional battery R&D is fundamentally constrained."
            highlightWord="fundamentally"
          />

          <ScrollRevealText
            as="p"
            className="article-block"
            text="We keep treating electrochemical cells like passive, sealed cans. We wrap millions of lithium-ion cylinders in metal casings, attach rudimentary voltage relays, and wonder why energy density plateaus, thermal runaway surprises us, and recycling remains an unsolved crisis."
          />

          <ScrollRevealText
            as="p"
            className="article-block"
            text="The issue isn't raw chemistry alone. Chemistry has given us incredible breakthroughs over decades. The problem is a lack of applied intelligence: we don't have cells that can sense, think, adapt, and self-heal in real time."
          />
        </div>
      </section>

      {/* High-Impact Statement Section with Cut-Corner Badges */}
      <Statement />

      {/* Essay Block — The Gap Between Academic Papers and Real Packs */}
      <section className="article-block" aria-labelledby="r-and-d-gap">
        <div className="article-block__inner">
          <p className="article-block__chapter-label article-block__chapter-label--yellow">
            01 / The Stalled Revolution
          </p>
          <h2 className="article-block__heading" id="r-and-d-gap">
            Thousands of research papers are published each month. Almost none reach domestic production.
          </h2>
          <ScrollRevealText
            as="p"
            text="Every engineering institution has prototypes that demonstrated remarkable coin-cell performance under sterile laboratory conditions. But the moment those chemistries are scaled into high-vibration automotive packs or multi-megawatt grid containers, unpredictable thermal gradients destroy the lifespan."
          />
          <ScrollRevealText
            as="p"
            text="Intelligent Battery Cell 4.0 changes this trajectory by infusing artificial intelligence directly into the electrochemical loop: real-time digital twins, predictive impedance spectroscopy, IoT edge telemetry, and sovereign materials."
          />
        </div>
      </section>

      {/* Battery Cycle Life SVG Chart */}
      <BatteryEvolutionChart />

      {/* Interactive Probability / Challenge Simulator */}
      <ProbabilitySimulator />

      {/* Design Thinking Stage: Group 1 vs Group 2 */}
      <PromptSplit />

      {/* Core Hackathon Themes Grid */}
      <ThemesGrid />

      {/* Raymond Loewy MAYA Spectrum & Interactive Spawning Cards */}
      <MayaSpectrum />

      {/* Timeline & Roadmap */}
      <TimelineSection />

      {/* Prizes, Incubation & Registration Fees */}
      <PrizesAndFees />

      {/* Ground Level Contact & Registration EOI Portal */}
      <GroundForm />
    </div>
  );
}
