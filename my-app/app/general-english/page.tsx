'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteLogo from '../site-logo';

const vocabulary = [
  ['pleasure', 'pleasure, enjoyment'],
  ['acquaintance', 'a person you know, but not closely'],
  ['colleague', 'a person you work with'],
  ['assistance', 'help or support'],
  ['gratitude', 'thankfulness'],
  ['apology', 'something you say to show you are sorry'],
  ['delighted', 'very pleased'],
  ['reception', 'a formal welcome or event'],
  ['behalf', 'representing someone or a group'],
  ['solicitude', 'care or concern for someone'],
  ['customary', 'usual or traditional'],
  ['courteous', 'polite and respectful'],
];

const phrases = [
  [
    'How do you do?',
    'A formal greeting when meeting someone for the first time.',
  ],
  [
    'It is a pleasure to make your acquaintance.',
    'It is a formal way to say it is nice to meet you.',
  ],
  [
    'Please accept my sincere apologies.',
    'A respectful apology for a mistake or problem.',
  ],
  [
    'I am most grateful for your assistance.',
    'A formal way to thank someone for their help.',
  ],
  [
    'Would you be so kind as to assist me with [task]?',
    'A very polite request for help.',
  ],
  [
    'I look forward to our meeting.',
    'A professional way to show you expect a future meeting.',
  ],
  [
    'On behalf of [company], I welcome you.',
    'A formal welcome given as a representative.',
  ],
];

const videos = [
  {
    title: 'Formal English: polite phrases',
    description:
      'Listen for greetings, requests and respectful ways to ask for help.',
    videoId: 'rSnqsn0MXaY',
    start: 35,
    end: 115,
  },
  {
    title: 'Present perfect in real conversations',
    description:
      'Focus on just, already and yet when talking about recent actions.',
    videoId: 'jwmKjgwlMk8',
    start: 45,
    end: 145,
  },
  {
    title: 'Modal verbs for polite requests',
    description:
      'Notice how could, would and should make requests and advice softer.',
    videoId: 'XvOGSw8P8TM',
    start: 30,
    end: 125,
  },
];

const quiz = [
  [
    'Which phrase is the most formal way to apologise?',
    [
      'Sorry about that.',
      'Please accept my sincere apologies.',
      'Oops, my bad.',
    ],
    1,
  ],
  [
    'Choose the correct sentence.',
    [
      'I look forward to meet you.',
      'I look forward meeting you.',
      'I look forward to meeting you.',
    ],
    2,
  ],
  [
    'Which word means “help or support”?',
    ['assistance', 'acquaintance', 'behalf'],
    0,
  ],
  [
    'Choose the best polite request.',
    [
      'Give me the report.',
      'Would you be so kind as to send me the report?',
      'Send the report now.',
    ],
    1,
  ],
];

export default function GeneralEnglishPage() {
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [notes, setNotes] = useState('');

  const score = Object.entries(quizAnswers).filter(
    ([index, answer]) => answer === quiz[Number(index)][2],
  ).length;

  return (
    <>
      <header className='site-header'>
        <SiteLogo />
        <nav className='course-nav' aria-label='Main navigation'>
          <Link href='/ready-for-ielts'>Ready for IELTS</Link>
          <Link href='/general-english' aria-current='page'>
            General English
          </Link>
          <Link href='/business-english'>Business English</Link>
          <Link href='/ready-for-flex'>Ready for Flex</Link>
        </nav>
      </header>

      <main className='general-page'>
        <section className='general-hero' aria-labelledby='general-title'>
          <div className='general-hero-copy'>
            <p className='eyebrow'>
              B1 to C1 <span aria-hidden='true'>&middot;</span> Everyday
              confidence
            </p>
            <h1 id='general-title'>
              Speak with
              <br />
              <span>more ease.</span>
            </h1>
            <p className='ready-lead'>
              A practical lesson in formal British English: meet people, make
              requests, apologise and keep conversations professional.
            </p>
            <a className='primary-link' href='#formal-language'>
              Start the lesson <span aria-hidden='true'>&rarr;</span>
            </a>
          </div>
          <div
            className='general-stamp'
            aria-label='Vocabulary, phrases, grammar and listening'
          >
            <span>WORDS</span>
            <span>PHRASES</span>
            <span>GRAMMAR</span>
            <span>LISTEN</span>
          </div>
          <span className='hero-index' aria-hidden='true'>
            GENERAL / 01
          </span>
        </section>

        <nav
          className='section-nav'
          aria-label='General English lesson sections'
        >
          <a href='#formal-language'>Language</a>
          <a href='#grammar'>Grammar</a>
          <a href='#listening'>Listening</a>
          <a href='#practice'>Practice</a>
        </nav>

        <section
          className='general-section language-section'
          id='formal-language'
          aria-labelledby='language-title'
        >
          <div className='section-intro'>
            <p className='eyebrow'>01 / Build your language</p>
            <h2 id='language-title'>Formal words, naturally used.</h2>
            <p>
              Learn the vocabulary from the example lesson, then use it in a
              message, meeting or first conversation.
            </p>
          </div>
          <div className='general-columns'>
            <article className='general-panel'>
              <p className='tool-label'>Vocabulary</p>
              <div className='general-vocabulary'>
                {vocabulary.map(([word, meaning]) => (
                  <div className='general-word' key={word}>
                    <strong>{word}</strong>
                    <span>{meaning}</span>
                    <button
                      type='button'
                      aria-label={`Hear ${word}`}
                      title={`Hear ${word}`}
                      onClick={() =>
                        window.speechSynthesis?.speak(
                          new SpeechSynthesisUtterance(word),
                        )
                      }
                    >
                      &#128266;
                    </button>
                  </div>
                ))}
              </div>
            </article>
            <article className='general-panel phrase-panel'>
              <p className='tool-label'>Useful phrases</p>
              {phrases.map(([phrase, explanation]) => (
                <div className='general-phrase' key={phrase}>
                  <strong>{phrase}</strong>
                  <span>{explanation}</span>
                  <button
                    type='button'
                    aria-label={`Hear ${phrase}`}
                    title={`Hear ${phrase}`}
                    onClick={() =>
                      window.speechSynthesis?.speak(
                        new SpeechSynthesisUtterance(phrase),
                      )
                    }
                  >
                    &#128266;
                  </button>
                </div>
              ))}
            </article>
          </div>
        </section>

        <section
          className='general-section grammar-section'
          id='grammar'
          aria-labelledby='grammar-title'
        >
          <div className='section-intro'>
            <p className='eyebrow'>02 / Notice the pattern</p>
            <h2 id='grammar-title'>Make recent actions clear.</h2>
            <p>
              The present perfect connects a past action to now. It works
              especially well with <strong>just</strong>,{' '}
              <strong>already</strong> and <strong>yet</strong>.
            </p>
          </div>
          <div className='grammar-grid'>
            <article>
              <span className='grammar-label'>Form</span>
              <h3>have / has + past participle</h3>
              <p>
                I have just sent the updated proposal.
                <br />
                Has the director arrived yet?
              </p>
            </article>
            <article>
              <span className='grammar-label'>Use</span>
              <h3>Past action, present result</h3>
              <p>
                Use it when the exact past time is not the focus and the action
                matters now.
              </p>
            </article>
            <article>
              <span className='grammar-label'>Formal request</span>
              <h3>Could / would + subject + verb?</h3>
              <p>
                Would you be so kind as to assist me? Could you tell me if the
                programme has started?
              </p>
            </article>
          </div>
        </section>

        <section
          className='general-section listening-section'
          id='listening'
          aria-labelledby='listening-title'
        >
          <div className='section-intro'>
            <p className='eyebrow'>03 / Listen with purpose</p>
            <h2 id='listening-title'>Short clips. Clear targets.</h2>
            <p>
              Each player is bounded to the useful teaching section. The start
              and end times are built into the embed, so you can focus on the
              language.
            </p>
          </div>
          <div className='video-grid'>
            {videos.map((video) => (
              <article className='lesson-video' key={video.title}>
                <div className='video-frame'>
                  <iframe
                    title={video.title}
                    src={`https://www.youtube.com/embed/${video.videoId}?start=${video.start}&end=${video.end}&rel=0`}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  />
                </div>
                <div className='video-copy'>
                  <p className='tool-label'>
                    Listen / {video.start}s-{video.end}s
                  </p>
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className='general-section practice-section'
          id='practice'
          aria-labelledby='practice-title'
        >
          <div className='section-intro'>
            <p className='eyebrow'>04 / Check your understanding</p>
            <h2 id='practice-title'>Use it, don&apos;t just notice it.</h2>
            <p>
              Answer all four questions, then submit to see your score and
              feedback.
            </p>
          </div>
          <div className='general-practice-grid'>
            <article className='general-panel quiz-panel'>
              {quiz.map(([question, options], questionIndex) => (
                <div className='general-question' key={question as string}>
                  <p>
                    <strong>{questionIndex + 1}.</strong> {question as string}
                  </p>
                  <div className='answer-options'>
                    {(options as string[]).map((option, optionIndex) => (
                      <button
                        key={option}
                        className={
                          quizAnswers[questionIndex] === optionIndex
                            ? 'answer-option is-selected'
                            : 'answer-option'
                        }
                        type='button'
                        aria-pressed={
                          quizAnswers[questionIndex] === optionIndex
                        }
                        onClick={() =>
                          setQuizAnswers({
                            ...quizAnswers,
                            [questionIndex]: optionIndex,
                          })
                        }
                      >
                        {String.fromCharCode(97 + optionIndex)}) {option}
                      </button>
                    ))}
                  </div>
                  {submitted && quizAnswers[questionIndex] !== undefined && (
                    <p
                      className={
                        quizAnswers[questionIndex] === quiz[questionIndex][2]
                          ? 'answer-feedback is-correct'
                          : 'answer-feedback'
                      }
                    >
                      {quizAnswers[questionIndex] === quiz[questionIndex][2]
                        ? 'Correct.'
                        : `Not quite. The correct answer is ${String.fromCharCode(97 + Number(quiz[questionIndex][2]))}).`}
                    </p>
                  )}
                </div>
              ))}
              <div className='test-actions'>
                <button
                  className='tool-button'
                  type='button'
                  onClick={() => setSubmitted(true)}
                >
                  Finish quiz
                </button>
                <button
                  className='text-button'
                  type='button'
                  onClick={() => {
                    setQuizAnswers({});
                    setSubmitted(false);
                  }}
                >
                  Clear answers
                </button>
              </div>
            </article>
            <aside className='general-score'>
              <p className='tool-label'>Your score</p>
              <output>
                {submitted ? score : '--'}
                <span> / {quiz.length}</span>
              </output>
              <p>
                {submitted
                  ? `You answered ${Object.keys(quizAnswers).length} of ${quiz.length} questions.`
                  : 'Choose an answer for each question, then finish the quiz.'}
              </p>
            </aside>
          </div>
          <label className='lesson-notes'>
            My lesson note
            <textarea
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              placeholder='Write one useful formal phrase here...'
              rows={3}
            />
          </label>
        </section>
      </main>
      <footer className='site-footer'>
        <span>English Page</span>
        <a href='#formal-language'>Back to top &uarr;</a>
      </footer>
    </>
  );
}
