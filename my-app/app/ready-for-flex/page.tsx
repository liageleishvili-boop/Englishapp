'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import SiteLogo from '../site-logo';

const essayPrompts = [
  'Describe a challenge you faced and how you handled it.',
  'Tell about a time you helped someone or worked in a team.',
  'What do you hope to learn from living in another culture?',
  'Describe a person who influenced you and explain how.',
  'What would you share about Georgia with your host family and new school?',
  'Describe a mistake you made. What changed afterwards?',
];

const interviewQuestions = [
  'Why do you want to take part in FLEX?',
  'Tell me about a time you tried something completely new.',
  'How will you deal with missing your family?',
  'What Georgian tradition would you teach your host family?',
  'Tell me about a conflict you solved.',
  'What would you do if you did not like the food your host family cooks?',
  'What will you do when you return home?',
];

const testQuestions = [
  [
    'By the time we arrived, the film ____.',
    [
      'had already started',
      'will already start',
      'has already started',
      'was already start',
    ],
    0,
  ],
  [
    'If I ____ more time, I would learn another language.',
    ['have', 'had', 'will have', 'would have'],
    1,
  ],
  [
    'She is interested ____ environmental projects.',
    ['on', 'at', 'in', 'for'],
    2,
  ],
  [
    'I look forward ____ you next week.',
    ['to meet', 'to meeting', 'meeting', 'for meeting'],
    1,
  ],
  [
    'He is the student ____ essay won the prize.',
    ['who', 'whose', 'which', 'whom'],
    1,
  ],
  [
    'We ____ in this town since 2015.',
    ['live', 'lived', 'have lived', 'are living'],
    2,
  ],
  [
    'Students ____ wear a uniform; it is a rule.',
    ['must', 'might', 'can', 'could'],
    0,
  ],
  [
    'The new library is ____ than the old one.',
    ['more big', 'bigger', 'biggest', 'more bigger'],
    1,
  ],
  ["Don't worry if you ____ a mistake.", ['do', 'make', 'take', 'get'], 1],
  ['Could you ____ me a favor, please?', ['do', 'make', 'give', 'take'], 0],
];

const stages = [
  [
    '01',
    'Application and essays',
    'Write three honest, personal essays. Content matters more than impressive grammar.',
    'Essays',
  ],
  [
    '02',
    'English test',
    'Practise short multiple-choice questions calmly and move on when one takes too long.',
    'English test',
  ],
  [
    '03',
    'Final round',
    'Prepare for an English test, short essays, an interview and, in some years, a group activity.',
    'Interview / Group',
  ],
  [
    '04',
    'Results',
    'Finalists and alternates are contacted by American Councils. Check the current process each year.',
    'Study plan',
  ],
];

const plan = [
  [
    'Week 1',
    'Understand and test yourself',
    'Read the official rules, take the mini-test, write one essay and record a self-introduction.',
  ],
  [
    'Weeks 2-3',
    'Build your stories',
    'Write two essays, then create stories about a challenge, helping, leading, a mistake and trying something new.',
  ],
  [
    'Week 4',
    'Strengthen English',
    'Repeat the mini-test, review mistakes and follow the daily 20-minute English routine.',
  ],
  [
    'Weeks 5-6',
    'Interview and teamwork',
    'Practise A-R-E and STAR answers, then run two group tasks and ten what-would-you-do scenarios.',
  ],
  [
    'Week 7',
    'Run a mock day',
    'Complete the test, two essays, a group activity and an interview in one session.',
  ],
  [
    'Week 8',
    'Polish and rest',
    'Review weak points, reread your story bank and sleep well before the real rounds.',
  ],
];

export default function ReadyForFlexPage() {
  const [essayPrompt, setEssayPrompt] = useState(0);
  const [essay, setEssay] = useState('');
  const [seconds, setSeconds] = useState(25 * 60);
  const [timerRunning, setTimerRunning] = useState(false);
  const [testAnswers, setTestAnswers] = useState<Record<number, number>>({});
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [interviewQuestion, setInterviewQuestion] = useState(0);
  const [scenarioOpen, setScenarioOpen] = useState<number | null>(null);

  useEffect(() => {
    if (!timerRunning || seconds === 0) return;
    const timerId = window.setTimeout(() => {
      setSeconds((value) => {
        if (value <= 1) {
          setTimerRunning(false);
          return 0;
        }
        return value - 1;
      });
    }, 1000);
    return () => window.clearTimeout(timerId);
  }, [seconds, timerRunning]);

  const essayWords = essay.trim() ? essay.trim().split(/\s+/).length : 0;
  const timeDisplay = `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
  const testScore = Object.entries(testAnswers).filter(
    ([index, answer]) => answer === testQuestions[Number(index)][2],
  ).length;
  const allTestQuestionsAnswered =
    Object.keys(testAnswers).length === testQuestions.length;

  function resetEssayTimer() {
    setSeconds(25 * 60);
    setTimerRunning(false);
  }

  function finishTest() {
    setTestSubmitted(true);
  }

  function resetTest() {
    setTestAnswers({});
    setTestSubmitted(false);
  }

  return (
    <>
      <header className='site-header'>
        <SiteLogo />
        <nav className='course-nav' aria-label='Main navigation'>
          <Link href='/ready-for-ielts'>Ready for IELTS</Link>
          <Link href='/general-english'>General English</Link>
          <Link href='/business-english'>Business English</Link>
          <Link href='/ready-for-flex' aria-current='page'>
            Ready for Flex
          </Link>
        </nav>
      </header>

      <main className='flex-page'>
        <section
          className='flex-hero'
          id='flex-overview'
          aria-labelledby='flex-title'
        >
          <div className='ready-hero-copy'>
            <p className='eyebrow'>
              High school exchange <span aria-hidden='true'>&middot;</span>{' '}
              Future leaders
            </p>
            <h1 id='flex-title'>
              Ready for
              <br />
              <span>FLEX?</span>
            </h1>
            <p className='ready-lead'>
              Prepare for essays, English tests, interviews and group activities
              with honest practice for the year ahead.
            </p>
            <div className='ready-actions'>
              <a className='primary-link' href='#flex-essays'>
                Start preparing <span aria-hidden='true'>&rarr;</span>
              </a>
              <a className='secondary-link' href='#flex-plan'>
                See the eight-week plan
              </a>
            </div>
          </div>
          <div className='flex-stamp' aria-label='Write, speak, adapt, lead'>
            <span>WRITE</span>
            <span>SPEAK</span>
            <span>ADAPT</span>
            <span>LEAD</span>
          </div>
          <span className='hero-index' aria-hidden='true'>
            FLEX / 01
          </span>
        </section>

        <aside className='flex-notice'>
          <strong>Check the official rules for your year.</strong>
          <span>
            Dates, age, grade, eligibility and selection stages can change. This
            course prepares the skills, but the current American Councils
            information is the source of truth.
          </span>
          <a
            href='https://americancouncils.org/programs/flex-program'
            target='_blank'
            rel='noreferrer'
          >
            Visit American Councils <span aria-hidden='true'>&nearr;</span>
          </a>
        </aside>

        <nav className='section-nav' aria-label='FLEX preparation sections'>
          <a href='#flex-overview'>Overview</a>
          <a href='#flex-essays'>Essays</a>
          <a href='#flex-test'>English test</a>
          <a href='#flex-interview'>Interview</a>
          <a href='#flex-group'>Group activity</a>
          <a href='#flex-plan'>Plan</a>
        </nav>

        <section
          className='ready-section flex-overview'
          aria-labelledby='stages-title'
        >
          <div className='section-intro'>
            <p className='eyebrow'>01 / Understand the process</p>
            <h2 id='stages-title'>
              Four stages.
              <br />
              One prepared you.
            </h2>
            <p>
              FLEX looks for curiosity, maturity and adaptability, not only
              perfect English.
            </p>
          </div>
          <div className='stage-list'>
            {stages.map(([number, title, description, practice]) => (
              <article className='stage-item' key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <small>{practice}</small>
              </article>
            ))}
          </div>
        </section>

        <section
          className='ready-section flex-essays'
          id='flex-essays'
          aria-labelledby='essays-title'
        >
          <div className='section-intro'>
            <p className='eyebrow'>02 / Tell one true story</p>
            <h2 id='essays-title'>Your story is enough.</h2>
            <p>
              Choose one real moment with a person, a place and a problem. Plan
              with Hook, Situation, Action, Result and Reflection.
            </p>
          </div>
          <div className='flex-tool-grid'>
            <article className='flex-tool essay-prompt-tool'>
              <p className='tool-label'>Practice prompt</p>
              <blockquote>{essayPrompts[essayPrompt]}</blockquote>
              <button
                className='text-button'
                type='button'
                onClick={() =>
                  setEssayPrompt((index) => (index + 1) % essayPrompts.length)
                }
              >
                New prompt <span aria-hidden='true'>&rarr;</span>
              </button>
              <div className='essay-timer'>
                <output
                  className='timer-display'
                  aria-label={`${Math.floor(seconds / 60)} minutes ${seconds % 60} seconds remaining`}
                >
                  {timeDisplay}
                </output>
                <div className='timer-controls'>
                  <button
                    className='tool-button'
                    type='button'
                    onClick={() => setTimerRunning((running) => !running)}
                  >
                    {timerRunning
                      ? 'Pause'
                      : seconds === 0
                        ? 'Start again'
                        : 'Start'}
                  </button>
                  <button
                    className='text-button'
                    type='button'
                    onClick={resetEssayTimer}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </article>
            <article className='flex-tool essay-writing-tool'>
              <div className='writing-heading'>
                <div>
                  <p className='tool-label'>Your essay</p>
                  <p className='tool-hint'>Target: 150-200 words</p>
                </div>
                <output className='word-count' aria-live='polite'>
                  {essayWords}
                  <span> words</span>
                </output>
              </div>
              <textarea
                value={essay}
                onChange={(event) => setEssay(event.target.value)}
                placeholder='Begin with a specific moment...'
                rows={12}
              />
              <ul className='check-list'>
                <li>Answer the exact question</li>
                <li>Show what you did and learned</li>
                <li>Use your own voice</li>
              </ul>
            </article>
          </div>
        </section>

        <section
          className='ready-section flex-test'
          id='flex-test'
          aria-labelledby='test-title'
        >
          <div className='section-intro'>
            <p className='eyebrow'>03 / Build speed and calm</p>
            <h2 id='test-title'>The English test.</h2>
            <p>
              Try ten questions from the practice pack. Read every option, cross
              out what is clearly wrong and move on when one takes too long.
            </p>
          </div>
          <div className='test-layout'>
            <article className='test-questions'>
              {testQuestions.map(([question, options], questionIndex) => (
                <div className='test-question' key={question as string}>
                  <p>
                    <strong>{questionIndex + 1}.</strong> {question as string}
                  </p>
                  <div className='answer-options'>
                    {(options as string[]).map((option, optionIndex) => (
                      <button
                        key={option}
                        className={
                          testAnswers[questionIndex] === optionIndex
                            ? 'answer-option is-selected'
                            : 'answer-option'
                        }
                        type='button'
                        aria-pressed={
                          testAnswers[questionIndex] === optionIndex
                        }
                        onClick={() =>
                          setTestAnswers({
                            ...testAnswers,
                            [questionIndex]: optionIndex,
                          })
                        }
                      >
                        {String.fromCharCode(97 + optionIndex)}) {option}
                      </button>
                    ))}
                  </div>
                  {testSubmitted &&
                    testAnswers[questionIndex] !== undefined && (
                      <p
                        className={
                          testAnswers[questionIndex] ===
                          testQuestions[questionIndex][2]
                            ? 'answer-feedback is-correct'
                            : 'answer-feedback'
                        }
                        role='status'
                      >
                        {testAnswers[questionIndex] ===
                        testQuestions[questionIndex][2]
                          ? 'Correct.'
                          : `Not quite. The correct answer is ${String.fromCharCode(97 + Number(testQuestions[questionIndex][2]))}).`}
                      </p>
                    )}
                </div>
              ))}
              <div className='test-actions'>
                <button
                  className='tool-button'
                  type='button'
                  disabled={!allTestQuestionsAnswered}
                  onClick={finishTest}
                >
                  Finish test
                </button>
                <button
                  className='text-button'
                  type='button'
                  onClick={resetTest}
                >
                  Clear answers
                </button>
                {!allTestQuestionsAnswered && (
                  <span className='test-progress' role='status'>
                    Answer{' '}
                    {testQuestions.length - Object.keys(testAnswers).length}{' '}
                    more question
                    {testQuestions.length - Object.keys(testAnswers).length ===
                    1
                      ? ''
                      : 's'}
                    .
                  </span>
                )}
              </div>
            </article>
            <aside className='test-score'>
              <p className='tool-label'>Your score</p>
              <output>
                {testSubmitted ? testScore : '--'}
                <span> / {testQuestions.length}</span>
              </output>
              <p>
                {testSubmitted
                  ? `You answered ${Object.keys(testAnswers).length} of ${testQuestions.length} questions. Review the feedback beside each answer.`
                  : 'Choose an answer for each question, then finish the test to see your result.'}
              </p>
            </aside>
          </div>
        </section>

        <section
          className='ready-section flex-interview'
          id='flex-interview'
          aria-labelledby='interview-title'
        >
          <div className='section-intro'>
            <p className='eyebrow'>04 / Answer in your own words</p>
            <h2 id='interview-title'>Pause. Think. Speak.</h2>
            <p>
              Use A-R-E for opinions: Answer, Reason, Example. Use STAR for
              stories: Situation, Task, Action, Result.
            </p>
          </div>
          <div className='interview-tool'>
            <div>
              <p className='tool-label'>Interview simulator</p>
              <blockquote>{interviewQuestions[interviewQuestion]}</blockquote>
              <button
                className='tool-button'
                type='button'
                onClick={() =>
                  setInterviewQuestion(
                    (index) => (index + 1) % interviewQuestions.length,
                  )
                }
              >
                Next question
              </button>
            </div>
            <div className='interview-notes'>
              <h3>Strong answers show</h3>
              <ul>
                <li>One clear idea and a specific example.</li>
                <li>Honesty about a challenge and what you learned.</li>
                <li>Curiosity about people and life in the U.S.</li>
                <li>A calm request for repetition when needed.</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          className='ready-section flex-group'
          id='flex-group'
          aria-labelledby='group-title'
        >
          <div className='section-intro'>
            <p className='eyebrow'>05 / Work with others</p>
            <h2 id='group-title'>Lead by including.</h2>
            <p>
              Evaluators notice who listens, builds on ideas, invites quiet
              members and helps the team finish on time.
            </p>
          </div>
          <div className='group-content'>
            <div className='group-language'>
              <p className='tool-label'>Useful language</p>
              <ul>
                <li>
                  <strong>Start</strong> Shall we begin by ...?
                </li>
                <li>
                  <strong>Build</strong> Building on that, we could ...
                </li>
                <li>
                  <strong>Disagree</strong> I see your point, but ...
                </li>
                <li>
                  <strong>Invite</strong> What do you think?
                </li>
                <li>
                  <strong>Summarize</strong> So we agreed to ...
                </li>
              </ul>
            </div>
            <div className='scenario-list'>
              <p className='tool-label'>What would you do?</p>
              {[
                'Plan a welcome day for a new exchange student.',
                'Use 500 lari to improve your school.',
                'Prepare a one-minute introduction of Georgia.',
                'Help a group member who is always late.',
              ].map((scenario, index) => (
                <details
                  key={scenario}
                  open={scenarioOpen === index}
                  onToggle={(event) =>
                    setScenarioOpen(
                      (event.currentTarget as HTMLDetailsElement).open
                        ? index
                        : null,
                    )
                  }
                >
                  <summary>
                    Task {index + 1}: {scenario}
                  </summary>
                  <p>
                    Listen first, offer one practical idea, invite another
                    person to contribute, then agree on a clear result before
                    time runs out.
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          className='ready-section flex-adapt'
          aria-labelledby='adapt-title'
        >
          <div className='section-intro'>
            <p className='eyebrow'>06 / Adapt and think on your feet</p>
            <h2 id='adapt-title'>Curiosity travels well.</h2>
            <p>
              Ask questions early, explain what you need calmly, help with
              chores and join one school club. Culture shock is normal; a plan
              makes it manageable.
            </p>
          </div>
          <div className='adapt-grid'>
            <article>
              <h3>Host-family life</h3>
              <p>
                Follow house rules, join family time and tell the truth quickly
                when something goes wrong.
              </p>
            </article>
            <article>
              <h3>School life</h3>
              <p>
                Introduce yourself, ask teachers for help and try one
                extracurricular activity in your first weeks.
              </p>
            </article>
            <article>
              <h3>Homesickness</h3>
              <p>
                Call home regularly, then take one small step into your new
                life: a walk, a club or a conversation.
              </p>
            </article>
          </div>
        </section>

        <section
          className='ready-section flex-plan'
          id='flex-plan'
          aria-labelledby='plan-title'
        >
          <div className='section-intro'>
            <p className='eyebrow'>07 / Make a routine</p>
            <h2 id='plan-title'>Eight weeks of steady practice.</h2>
            <p>
              Thirty to forty-five focused minutes a day is enough to build your
              story bank and confidence.
            </p>
          </div>
          <ol className='plan-list'>
            {plan.map(([week, title, description]) => (
              <li key={week}>
                <span>{week}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className='flex-cta'>
          <div>
            <p className='eyebrow'>Before you start</p>
            <h2>
              Check the rules.
              <br />
              Then begin.
            </h2>
            <p>
              FLEX is free. Never pay anyone who promises you a place. Confirm
              eligibility, dates and documents on the official site.
            </p>
          </div>
          <a
            className='primary-link'
            href='https://americancouncils.org/programs/flex-program'
            target='_blank'
            rel='noreferrer'
          >
            Check official FLEX <span aria-hidden='true'>&rarr;</span>
          </a>
        </section>
      </main>
      <footer className='site-footer'>
        <span>English Page</span>
        <a href='#flex-overview'>Back to top &uarr;</a>
      </footer>
    </>
  );
}
