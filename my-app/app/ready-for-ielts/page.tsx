"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SiteLogo from "../site-logo";

const cueCards = [
  "Describe a place you enjoy visiting. Explain where it is, when you go there, and why it matters to you.",
  "Describe a skill you would like to learn. Explain how you would learn it and how it could help you.",
  "Describe a person who has influenced you. Explain how you met and what you learned from them.",
  "Describe an important decision you made. Explain what you chose and what happened afterwards.",
];

const answers = ["True", "False", "Not Given"] as const;
type ReadingAnswer = (typeof answers)[number];

export default function ReadyForIeltsPage() {
  const [seconds, setSeconds] = useState(60 * 60);
  const [timerMinutes, setTimerMinutes] = useState(60);
  const [timerRunning, setTimerRunning] = useState(false);
  const [cueCardIndex, setCueCardIndex] = useState(0);
  const [writing, setWriting] = useState("");
  const [readingAnswer, setReadingAnswer] = useState<ReadingAnswer | null>(null);

  useEffect(() => {
    if (!timerRunning || seconds === 0) return;

    const timeoutId = window.setTimeout(() => {
      if (seconds <= 1) {
        setSeconds(0);
        setTimerRunning(false);
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => window.clearTimeout(timeoutId);
  }, [seconds, timerRunning]);

  const wordCount = writing.trim() ? writing.trim().split(/\s+/).length : 0;
  const timeDisplay = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;

  function chooseTimer(event: React.ChangeEvent<HTMLSelectElement>) {
    const minutes = Number(event.target.value);
    setTimerMinutes(minutes);
    setSeconds(minutes * 60);
    setTimerRunning(false);
  }

  function resetTimer() {
    setSeconds(timerMinutes * 60);
    setTimerRunning(false);
  }

  function showNextCueCard() {
    setCueCardIndex((index) => (index + 1) % cueCards.length);
  }

  return (
    <>
      <header className="site-header">
        <SiteLogo />
        <nav className="course-nav" aria-label="Main navigation">
          <Link href="/ready-for-ielts" aria-current="page">Ready for IELTS</Link>
          <Link href="/general-english">General English</Link>
          <Link href="/business-english">Business English</Link>
          <Link href="/ready-for-flex">Ready for Flex</Link>
        </nav>
      </header>

      <main className="ready-page">
        <section className="ready-hero" id="ielts-overview" aria-labelledby="ready-title">
          <div className="ready-hero-copy">
            <p className="eyebrow">B1 to C1 <span aria-hidden="true">&middot;</span> IELTS bands 4.0 to 8.0</p>
            <h1 id="ready-title">Ready for IELTS<span>?</span></h1>
            <p className="ready-lead">
              Four papers, one score from 0 to 9. Learn what each paper asks,
              follow a week-by-week plan, and start practising today.
            </p>
            <div className="ready-actions">
              <a className="primary-link" href="#ielts-practice">Check my level <span aria-hidden="true">&rarr;</span></a>
              <a className="secondary-link" href="#ielts-plan">See the study plan</a>
            </div>
          </div>
          <div className="hero-stamp" aria-label="Four skills, one goal">
            <span>LISTEN</span>
            <span>READ</span>
            <span>WRITE</span>
            <span>SPEAK</span>
          </div>
          <span className="hero-index" aria-hidden="true">IELTS / 01</span>
        </section>

        <nav className="section-nav" aria-label="IELTS page sections">
          <a href="#ielts-overview">Overview</a>
          <a href="#ielts-skills">Skills</a>
          <a href="#ielts-plan">Plan</a>
          <a href="#ielts-practice">Practice</a>
          <a href="#ielts-faq">FAQ</a>
        </nav>

        <section className="ready-section overview-section" aria-labelledby="exam-title">
          <div className="section-intro">
            <p className="eyebrow">01 / Know the format</p>
            <h2 id="exam-title">The exam at a glance</h2>
            <p>The four IELTS papers</p>
          </div>
          <div className="exam-table-wrap">
            <table className="exam-table">
              <thead>
                <tr><th scope="col">Paper</th><th scope="col">Time</th><th scope="col">What you do</th></tr>
              </thead>
              <tbody>
                <tr><th scope="row">Listening</th><td>About 30 min + 10 min to transfer answers (paper test)</td><td>Four recordings, 40 questions</td></tr>
                <tr><th scope="row">Reading</th><td>60 min</td><td>Three passages, 40 questions</td></tr>
                <tr><th scope="row">Writing</th><td>60 min</td><td>Task 1 (150+ words, about 20 min) and Task 2 essay (250+ words, about 40 min)</td></tr>
                <tr><th scope="row">Speaking</th><td>11 to 14 min</td><td>Face-to-face interview in three parts</td></tr>
              </tbody>
            </table>
          </div>
          <p className="exam-note"><span aria-hidden="true">i</span> Academic and General Training share Listening and Speaking. Reading and Writing differ.</p>
        </section>

        <section className="ready-section skills-section" id="ielts-skills" aria-labelledby="skills-title">
          <div className="section-intro">
            <p className="eyebrow">02 / Build each skill</p>
            <h2 id="skills-title">Choose your skill</h2>
          </div>
          <div className="skill-grid">
            <article className="skill-item">
              <span className="skill-number">01</span>
              <p className="skill-name">Listening</p>
              <h3>Catch the detail</h3>
              <p>Answers are often names, numbers and dates. Read the questions first, and check your spelling.</p>
              <a href="#ielts-practice">Practise now <span aria-hidden="true">&rarr;</span></a>
            </article>
            <article className="skill-item">
              <span className="skill-number">02</span>
              <p className="skill-name">Reading</p>
              <h3>Skim, then scan</h3>
              <p>Spend about 20 minutes per passage. Find the topic first, then hunt for keywords. “Not Given” means the text says nothing about it.</p>
              <a href="#ielts-practice">Practise now <span aria-hidden="true">&rarr;</span></a>
            </article>
            <article className="skill-item">
              <span className="skill-number">03</span>
              <p className="skill-name">Writing</p>
              <h3>Plan before you write</h3>
              <p>Task 2 counts for more of your Writing score than Task 1, so give it the most time. Spend 5 minutes on a plan, then answer every part of the question.</p>
              <a href="#ielts-practice">Practise now <span aria-hidden="true">&rarr;</span></a>
            </article>
            <article className="skill-item">
              <span className="skill-number">04</span>
              <p className="skill-name">Speaking</p>
              <h3>Keep talking</h3>
              <p>Fluency beats perfection. Use your minute of preparation in Part 2 to note 4 or 5 keywords, then speak for the full two minutes.</p>
              <a href="#ielts-practice">Practise now <span aria-hidden="true">&rarr;</span></a>
            </article>
          </div>
        </section>

        <section className="ready-section plan-section" id="ielts-plan" aria-labelledby="plan-title">
          <div className="section-intro">
            <p className="eyebrow">03 / Make a routine</p>
            <h2 id="plan-title">Your study plan</h2>
            <p>Eight weeks of steady, focused practice. Adjust the pace to your starting level and target band.</p>
          </div>
          <ol className="plan-list">
            <li><span>01</span><div><h3>Find your starting point</h3><p>Try one task from each paper. Note your strengths, gaps, and target band.</p></div><small>Week 1</small></li>
            <li><span>02</span><div><h3>Learn the question types</h3><p>Practise Listening and Reading formats. Review each wrong answer and why it happened.</p></div><small>Weeks 2-3</small></li>
            <li><span>03</span><div><h3>Build your responses</h3><p>Plan Writing Task 1 and Task 2. Record short Speaking answers and listen back.</p></div><small>Weeks 4-5</small></li>
            <li><span>04</span><div><h3>Practise under time</h3><p>Complete timed sections, then review accuracy, pacing, and repeated errors.</p></div><small>Weeks 6-7</small></li>
            <li><span>05</span><div><h3>Take a full mock test</h3><p>Simulate your test format, check your progress, and make a light final review.</p></div><small>Week 8</small></li>
          </ol>
        </section>

        <section className="ready-section practice-section" id="ielts-practice" aria-labelledby="practice-title">
          <div className="section-intro">
            <p className="eyebrow">04 / Try a task</p>
            <h2 id="practice-title">Practise now</h2>
            <p>Start with a short exercise. Your next step is one answer at a time.</p>
          </div>

          <div className="practice-grid">
            <article className="practice-tool timer-tool">
              <p className="tool-label">01 / Focus</p>
              <h3>Exam timer</h3>
              <label className="timer-preset">Timer preset
                <select value={timerMinutes} onChange={chooseTimer}>
                  <option value={60}>60 minutes</option>
                  <option value={30}>30 minutes</option>
                  <option value={20}>20 minutes</option>
                </select>
              </label>
              <output className="timer-display" aria-label={`${Math.floor(seconds / 60)} minutes ${seconds % 60} seconds remaining`}>{timeDisplay}</output>
              <div className="timer-controls">
                <button className="tool-button" type="button" onClick={() => setTimerRunning((running) => !running)}>
                  {timerRunning ? "Pause" : seconds === 0 ? "Start again" : "Start"}
                </button>
                <button className="text-button" type="button" onClick={resetTimer}>Reset</button>
              </div>
            </article>

            <article className="practice-tool cue-tool">
              <p className="tool-label">02 / Speak</p>
              <h3>Speaking cue card</h3>
              <p className="cue-instruction">Speak about this topic for up to two minutes.</p>
              <blockquote>{cueCards[cueCardIndex]}</blockquote>
              <button className="text-button" type="button" onClick={showNextCueCard}>New cue card <span aria-hidden="true">&rarr;</span></button>
            </article>

            <article className="practice-tool writing-tool">
              <div className="writing-heading">
                <div><p className="tool-label">03 / Write</p><h3>Writing word counter</h3></div>
                <output className="word-count" aria-live="polite">{wordCount}<span> words</span></output>
              </div>
              <label className="visually-hidden" htmlFor="writing-answer">Write your answer here</label>
              <textarea id="writing-answer" value={writing} onChange={(event) => setWriting(event.target.value)} placeholder="Write your answer here" rows={6} />
            </article>

            <article className="practice-tool reading-tool">
              <p className="tool-label">04 / Read</p>
              <h3>Mini Reading check: True, False or Not Given?</h3>
              <p className="reading-passage">
                City beekeeping has grown quickly over the past decade. Rooftop hives now operate in many large cities, and supporters say the bees find plenty of flowers in parks and gardens. Honey from city hives is often described as having a distinctive flavour, because it reflects the many plants in the neighbourhood. However, some ecologists worry that adding more honeybees may leave less food for wild pollinators such as bumblebees. Local councils in several cities have begun to ask beekeepers to register their hives.
              </p>
              <p className="reading-question">Statement: City honey can reflect the plants growing in the local area.</p>
              <div className="answer-options" role="group" aria-label="Choose an answer">
                {answers.map((answer) => (
                  <button
                    className={readingAnswer === answer ? "answer-option is-selected" : "answer-option"}
                    type="button"
                    key={answer}
                    aria-pressed={readingAnswer === answer}
                    onClick={() => setReadingAnswer(answer)}
                  >{answer}</button>
                ))}
              </div>
              {readingAnswer && (
                <p className={readingAnswer === "True" ? "answer-feedback is-correct" : "answer-feedback"} role="status">
                  {readingAnswer === "True" ? "Correct. The passage says the honey reflects the plants in the neighbourhood." : "Not quite. The passage directly supports this statement, so the answer is True."}
                </p>
              )}
            </article>
          </div>
        </section>

        <section className="ready-section faq-section" id="ielts-faq" aria-labelledby="faq-title">
          <div className="section-intro">
            <p className="eyebrow">05 / Good to know</p>
            <h2 id="faq-title">Questions students ask</h2>
          </div>
          <div className="faq-list">
            <details><summary>Academic or General Training?</summary><p>Academic is usually needed for university study. General Training is usually for work or migration. Check what your institution or authority requires before you choose.</p></details>
            <details><summary>How long should I prepare?</summary><p>Many students use 8 to 12 weeks, but it depends on your starting level and your target band. If you are close to your target, 4 focused weeks can be enough.</p></details>
            <details><summary>Paper test or computer test?</summary><p>The tasks and scoring are the same. The difference is how you answer: on paper or on screen. Practise in the format you will sit.</p></details>
            <details><summary>What band should I aim for?</summary><p>Look up your university or employer&apos;s requirement. As a rough guide, bands 5.5 to 6.5 match B2 and 7.0 to 8.0 match C1.</p></details>
          </div>
        </section>

        <section className="course-cta" id="courses" aria-labelledby="courses-title">
          <div>
            <p className="eyebrow">Your next step</p>
            <h2 id="courses-title">Start with your first lesson</h2>
            <p>Pick a course and work through it one unit at a time.</p>
          </div>
          <Link className="primary-link" href="/#practice">Browse courses <span aria-hidden="true">&rarr;</span></Link>
        </section>
      </main>

      <footer className="site-footer">
        <span>English Page</span>
        <a href="#ielts-overview">Back to top &uarr;</a>
      </footer>
    </>
  );
}