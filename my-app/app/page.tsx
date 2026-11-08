"use client";

import { useState } from "react";
import SiteLogo from "./site-logo";

const words = [
  { word: "curious", definition: "eager to know or learn something" },
  { word: "clarity", definition: "the quality of being easy to understand" },
  { word: "wander", definition: "to move around without a fixed direction" },
  { word: "delight", definition: "a feeling of great pleasure" },
];

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const currentWord = words[currentWordIndex];

  function showNextWord() {
    setCurrentWordIndex((index) => (index + 1) % words.length);
  }

  return (
    <>
      <header className="site-header">
        <SiteLogo />
        <nav aria-label="Main navigation">
          <a href="/ready-for-ielts">Ready for IELTS</a>
          <a href="/general-english">General English</a>
          <a href="/business-english">Business English</a>
          <a href="/ready-for-flex">Ready for Flex</a>
        </nav>
      </header>

      <main id="home">
        <section className="intro" aria-labelledby="page-title">
          <p className="eyebrow">A little progress, every day</p>
          <h1 id="page-title">
            Make English
            <br />
            <span>your own.</span>
          </h1>
          <p className="intro-copy">
            A calm place to learn, practice, and find the words you need.
          </p>
          <a className="primary-link" href="#practice">
            Explore today&apos;s word <span aria-hidden="true">&rarr;</span>
          </a>
          <div className="page-mark" aria-hidden="true">
            EN
            <br />
            <span>01</span>
          </div>
        </section>

        <section className="practice" id="practice" aria-labelledby="practice-title">
          <div className="section-heading">
            <p className="eyebrow">Your daily prompt</p>
            <h2 id="practice-title">One good word.</h2>
          </div>
          <div className="word-panel">
            <div>
              <p className="word-label">Today&apos;s word</p>
              <p className="word">{currentWord.word}</p>
              <p className="definition">{currentWord.definition}</p>
            </div>
            <button
              className="word-button"
              type="button"
              aria-label="Show another word"
              title="Show another word"
              onClick={showNextWord}
            >
              <span aria-hidden="true">&#8635;</span>
            </button>
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <p className="eyebrow">A note to begin</p>
          <h2 id="about-title">
            Keep it simple.
            <br />
            Keep showing up.
          </h2>
          <p>
            This is your space to shape. Add lessons, notes, or anything that
            helps English feel a little more natural.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <span>English Page</span>
        <span>Made for the next word.</span>
      </footer>
    </>
  );
}
