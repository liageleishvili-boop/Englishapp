'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteLogo from '../site-logo';

type LevelId = 'a2' | 'b1' | 'b2' | 'c1';

type Level = {
  id: LevelId;
  label: string;
  title: string;
  focus: string;
  goal: string;
  vocabulary: [string, string, string][];
  modelTitle: string;
  modelText: string;
  phrases: string[];
  questions: [string, string[]][];
  answers: number[];
  gapText: string[];
  gapAnswers: string[];
  taskTitle: string;
  task: string;
  minimum: string;
};

const levels: Level[] = [
  {
    id: 'a2',
    label: 'A2 / Elementary',
    title: 'Workplace basics',
    focus: 'Start clearly',
    goal: 'Introduce yourself at work, write a short email, arrange a simple meeting and understand common office words.',
    vocabulary: [
      [
        'colleague',
        'a person you work with',
        'My colleague helps me with the reports.',
      ],
      [
        'manager',
        'the person who leads a team',
        "I have a meeting with my manager at 3 o'clock.",
      ],
      [
        'meeting',
        'a planned time when people talk about work',
        'The meeting starts at ten.',
      ],
      [
        'appointment',
        'a fixed time to see someone',
        'I have an appointment with a customer.',
      ],
      [
        'deadline',
        'the last time to finish something',
        'The deadline for the report is Friday.',
      ],
      [
        'attachment',
        'a file sent with an email',
        'Please open the attachment.',
      ],
      ['reply', 'to answer a message', 'Please reply to my email today.'],
      [
        'customer',
        'a person who buys from a company',
        'The customer wants two laptops.',
      ],
    ],
    modelTitle: 'A short email',
    modelText:
      'Subject: Meeting on Tuesday\n\nHi Anna,\n\nCan we meet on Tuesday at 10:00? I want to talk about the new customer. I have attached a short list of questions.\n\nPlease reply to this email.\n\nKind regards,\nTom',
    phrases: [
      'Can we meet on ...?',
      "I'd like to ...",
      'Could you help me, please?',
      'Sorry, can you repeat that?',
      'Please find the file attached.',
      'Thank you for your help.',
    ],
    questions: [
      [
        "I have a ___ with the manager at 3 o'clock.",
        ['meeting', 'meet', 'meets', 'meeted'],
      ],
      [
        'Which is a polite way to ask a colleague to meet?',
        [
          'You meet me on Tuesday.',
          'Can we meet on Tuesday?',
          'Tuesday meeting you.',
          'I meet Tuesday you.',
        ],
      ],
      [
        "What does 'due' mean in 'The report is due on Friday'?",
        [
          'Already finished',
          'Cancelled',
          'Must be ready by that day',
          'Too difficult',
        ],
      ],
      [
        'Which is the best way to end a work email?',
        ['Bye bye!!!', 'Whatever.', 'Kind regards,', 'See you, dude.'],
      ],
    ],
    answers: [0, 1, 2, 2],
    gapText: [
      'Please ___ to my email by Monday.',
      'I sent the file as an ___.',
      'The ___ for the project is Friday.',
      'A ___ works in the same company as you.',
      'The ___ wants to buy two laptops.',
    ],
    gapAnswers: ['reply', 'attachment', 'deadline', 'colleague', 'customer'],
    taskTitle: 'Ask a colleague for a meeting',
    task: 'Write a short email to a colleague. Ask to meet next week and say why.',
    minimum: '40-60 words',
  },
  {
    id: 'b1',
    label: 'B1 / Intermediate',
    title: 'Everyday business communication',
    focus: 'Write with ease',
    goal: 'Write clear, polite emails, change arrangements, join meetings and handle routine phone calls.',
    vocabulary: [
      [
        'agenda',
        'a list of topics for a meeting',
        "I've attached the agenda for Thursday.",
      ],
      [
        'minutes',
        'a record of what was said and decided',
        'Anna will take the minutes.',
      ],
      [
        'follow up',
        'contact someone again about something',
        "I'm writing to follow up on our call.",
      ],
      [
        'postpone',
        'move something to a later time',
        'We need to postpone the call until Monday.',
      ],
      [
        'availability',
        'the times when you are free',
        'Please send me your availability.',
      ],
      ['proposal', 'a formal plan or offer', 'The client liked our proposal.'],
      ['budget', 'money available for something', 'Our budget is limited.'],
      ['update', 'the latest information', 'Could you give me an update?'],
    ],
    modelTitle: 'Rescheduling a meeting',
    modelText:
      "Subject: Rescheduling Thursday's meeting\n\nDear Mr Evans,\n\nI'm afraid I can't attend our meeting on Thursday because of a client visit. Would it be possible to postpone it to Friday morning? I'm available any time after 9:00.\n\nI've attached the agenda so you can see what we plan to discuss. Please let me know which time suits you.\n\nKind regards,\nSara Lopez",
    phrases: [
      "I'm afraid I can't ...",
      'Would it be possible to ...?',
      "I'm writing to ...",
      'Could you let me know ...?',
      'Just to confirm, ...',
      'I look forward to hearing from you.',
    ],
    questions: [
      [
        "'I'm afraid I can't attend' politely ...",
        ['Shows fear', 'Says no', 'Asks for help', 'Ends the meeting'],
      ],
      [
        'Which sentence is the most polite?',
        [
          'Send me the budget.',
          'You must send the budget.',
          'I want the budget now.',
          'Could you send me the budget, please?',
        ],
      ],
      [
        "'We need to postpone the call' means ...",
        [
          'Move it later',
          'Cancel it forever',
          'Make it shorter',
          'Start it earlier',
        ],
      ],
      [
        'Choose the correct sentence.',
        [
          'I look forward to hear from you.',
          'I look forward hearing from you.',
          'I look forward to hearing from you.',
          'I look forwards to hear you.',
        ],
      ],
    ],
    answers: [1, 3, 0, 2],
    gapText: [
      'Could you send me the ___ before the meeting?',
      "I'm writing to ___ on our conversation.",
      'Our ___ for the new project is limited.',
      'Anna will take the ___ and send them to everyone.',
      'The client liked our ___.',
    ],
    gapAnswers: ['agenda', 'follow up', 'budget', 'minutes', 'proposal'],
    taskTitle: 'Postpone a meeting',
    task: "Write an email to a client. You cannot attend tomorrow's meeting. Apologise and suggest a new time.",
    minimum: '80-100 words',
  },
  {
    id: 'b2',
    label: 'B2 / Upper-intermediate',
    title: 'Meetings, negotiation & presentations',
    focus: 'Lead the room',
    goal: 'Lead project updates, disagree politely, negotiate simple deals and present results with confidence.',
    vocabulary: [
      [
        'stakeholder',
        'a person or group interested in a project',
        'We must keep all stakeholders informed.',
      ],
      [
        'deliverable',
        'a product or result given to a client',
        'The final deliverables include a report.',
      ],
      [
        'bottleneck',
        'a point that slows a process',
        'The main bottleneck is the legal review.',
      ],
      [
        'milestone',
        'an important point in a project',
        'The prototype is our next milestone.',
      ],
      [
        'concession',
        'something given up in negotiation',
        'We made a concession on delivery.',
      ],
      [
        'forecast',
        'a prediction of future results',
        'The forecast shows sales rising.',
      ],
      [
        'on track',
        'progressing as planned',
        "We're on track to finish in March.",
      ],
      [
        'scope',
        'everything a project includes',
        'Changing the scope will delay launch.',
      ],
    ],
    modelTitle: 'A project status meeting',
    modelText:
      "Maya: Let's go through the project status. Are we on track for the March milestone?\nDev: Mostly. The main bottleneck is the approval stage. It's adding about a week.\nMaya: Could we ask the stakeholders to approve in parallel?\nDev: That could work, as long as the scope doesn't change again.\nMaya: Fair point. I'll raise it with them and confirm by Wednesday.",
    phrases: [
      'I see your point, but ...',
      "Let's move on to ...",
      'Could we revisit ...?',
      "I'd like to propose ...",
      'We could meet you halfway on ...',
      'To sum up, ...',
    ],
    questions: [
      [
        "The plan works as long as the scope doesn't change. This means ...",
        [
          'Even if it changes',
          "Only if the project's content stays the same",
          'Because the scope is long',
          'After it changes',
        ],
      ],
      [
        'Which is the best polite disagreement?',
        [
          "You're wrong.",
          "That's a bad idea.",
          "I see your point, but I'm not sure that would work.",
          'No way.',
        ],
      ],
      [
        'In a negotiation, a concession is ...',
        [
          'A final price',
          'Something given up to reach a deal',
          'A rejection',
          'A signed contract',
        ],
      ],
      [
        "'We're on track' means ...",
        ['Progressing as planned', 'Late', 'Cancelled', 'Over budget'],
      ],
    ],
    answers: [1, 2, 1, 0],
    gapText: [
      'The ___ for next quarter shows sales rising.',
      'Our main ___ is the legal review.',
      'Completing the prototype is our next major ___.',
      'We must keep all ___ informed.',
      'The final ___ include a report and a presentation.',
    ],
    gapAnswers: [
      'forecast',
      'bottleneck',
      'milestone',
      'stakeholders',
      'deliverables',
    ],
    taskTitle: 'Give a project update',
    task: 'Give a two-minute spoken update, or write about a project. State its status, name a risk, propose a solution and give the next date.',
    minimum: 'About 120 words',
  },
  {
    id: 'c1',
    label: 'C1 / Advanced',
    title: 'Strategy, persuasion & diplomacy',
    focus: 'Make the case',
    goal: 'Recommend decisions, challenge ideas diplomatically, write executive summaries and handle high-stakes discussions.',
    vocabulary: [
      [
        'leverage',
        'use something to its greatest advantage',
        'We can leverage existing partnerships.',
      ],
      [
        'due diligence',
        'careful research before a decision',
        'Legal completed due diligence.',
      ],
      ['buy-in', 'agreement and active support', 'We need executive buy-in.'],
      [
        'pivot',
        'change strategic direction',
        'We need to pivot towards subscriptions.',
      ],
      ['mitigate', 'make something less serious', 'This will mitigate risk.'],
      [
        'headwinds',
        'difficulties that slow progress',
        'Despite economic headwinds, profits grew.',
      ],
      ['scalable', 'able to grow efficiently', 'The platform is scalable.'],
      [
        'contingency',
        'a plan or fund for what may go wrong',
        'We built a contingency into the budget.',
      ],
    ],
    modelTitle: 'Executive summary',
    modelText:
      'Following our due diligence, we recommend proceeding with the acquisition, subject to two conditions. First, the integration plan must secure buy-in from regional leadership. Second, we should establish a contingency fund to mitigate currency headwinds.\n\nWhile the deal is not without risk, the platform is scalable, and we believe the long-term upside outweighs the short-term disruption.',
    phrases: [
      "I wonder whether we've fully considered ...",
      'That said, ...',
      'With that in mind, ...',
      "Let me play devil's advocate ...",
      "I'd suggest we err on the side of caution.",
      'On balance, the upside outweighs the downside.',
    ],
    questions: [
      [
        'A deal subject to two conditions ...',
        [
          'Is complete',
          'Depends on two conditions',
          'Needs two signatures',
          'Has two stages',
        ],
      ],
      [
        "'The deal is not without risk' is ...",
        [
          'A hedged admission of risk',
          'A claim of no risk',
          'A refusal',
          'A request for money',
        ],
      ],
      [
        'Which is the most diplomatic challenge?',
        [
          "That won't work.",
          "You haven't thought this through.",
          "I wonder whether we've considered the implications for smaller clients.",
          'Bad idea.',
        ],
      ],
      [
        "'We need to pivot' means ...",
        [
          'Continue the same strategy',
          'Change strategic direction',
          'Reduce prices only',
          'Hire more staff',
        ],
      ],
    ],
    answers: [1, 0, 2, 1],
    gapText: [
      'We should ___ our partnerships to enter the new market.',
      'The legal team completed thorough ___.',
      'Without executive ___, the initiative will stall.',
      'Diversifying suppliers will help ___ risk.',
      'Despite economic ___, the company grew.',
    ],
    gapAnswers: [
      'leverage',
      'due diligence',
      'buy-in',
      'mitigate',
      'headwinds',
    ],
    taskTitle: 'Write an executive recommendation',
    task: 'Write a recommendation to senior leadership about a new market, product launch or partnership. Make a clear recommendation, support it, acknowledge a risk and offer a mitigation.',
    minimum: 'About 150 words',
  },
];

export default function BusinessEnglishPage() {
  const [levelId, setLevelId] = useState<LevelId>('a2');
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, number>
  >({});
  const [gapAnswers, setGapAnswers] = useState<string[]>([]);
  const [writing, setWriting] = useState('');
  const level = levels.find((item) => item.id === levelId) ?? levels[0];
  const wordCount = writing.trim() ? writing.trim().split(/\s+/).length : 0;

  function changeLevel(id: LevelId) {
    setLevelId(id);
    setSelectedAnswers({});
    setGapAnswers([]);
    setWriting('');
  }

  return (
    <>
      <header className='site-header'>
        <SiteLogo />
        <nav className='course-nav' aria-label='Main navigation'>
          <Link href='/ready-for-ielts'>Ready for IELTS</Link>
          <Link href='/general-english'>General English</Link>
          <Link href='/business-english' aria-current='page'>
            Business English
          </Link>
          <Link href='/ready-for-flex'>Ready for Flex</Link>
        </nav>
      </header>

      <main className='business-page'>
        <section className='business-hero' aria-labelledby='business-title'>
          <div className='business-hero-copy'>
            <p className='eyebrow'>
              A2 to C1 <span aria-hidden='true'>&middot;</span> English for work
            </p>
            <h1 id='business-title'>
              Say it well
              <br />
              <span>at work.</span>
            </h1>
            <p className='ready-lead'>
              Build the language for emails, meetings, negotiations and
              decisions. Choose your level and practise one useful task at a
              time.
            </p>
            <a className='primary-link' href='#business-levels'>
              Choose your level <span aria-hidden='true'>&rarr;</span>
            </a>
          </div>
          <div
            className='business-stamp'
            aria-label='Email, meetings, negotiation, strategy'
          >
            <span>EMAIL</span>
            <span>MEET</span>
            <span>DEAL</span>
            <span>LEAD</span>
          </div>
          <span className='hero-index' aria-hidden='true'>
            BUSINESS / 01
          </span>
        </section>

        <nav className='section-nav' aria-label='Business English sections'>
          <a href='#business-levels'>Levels</a>
          <a href='#business-language'>Language</a>
          <a href='#business-practice'>Practice</a>
          <a href='#business-task'>Task</a>
        </nav>

        <section
          className='business-levels'
          id='business-levels'
          aria-labelledby='levels-title'
        >
          <div className='section-intro'>
            <p className='eyebrow'>01 / Find your level</p>
            <h2 id='levels-title'>Your work, your words.</h2>
            <p>
              Start where the language feels useful, then move up when you are
              ready.
            </p>
          </div>
          <div
            className='level-tabs'
            role='tablist'
            aria-label='Business English levels'
          >
            {levels.map((item) => (
              <button
                key={item.id}
                className={
                  item.id === level.id ? 'level-tab is-active' : 'level-tab'
                }
                type='button'
                role='tab'
                aria-selected={item.id === level.id}
                onClick={() => changeLevel(item.id)}
              >
                <span>{item.label}</span>
                <strong>{item.focus}</strong>
              </button>
            ))}
          </div>
          <div className='level-overview'>
            <div>
              <p className='eyebrow'>{level.label}</p>
              <h3>{level.title}</h3>
            </div>
            <p>{level.goal}</p>
          </div>
        </section>

        <section
          className='business-section language-section'
          id='business-language'
          aria-labelledby='language-title'
        >
          <div className='section-intro'>
            <p className='eyebrow'>02 / Build your language</p>
            <h2 id='language-title'>Words that do work.</h2>
            <p>
              See each word in context, then borrow the useful phrases for your
              next conversation.
            </p>
          </div>
          <div className='business-language-grid'>
            <div className='vocabulary-list'>
              {level.vocabulary.map(([word, meaning, example]) => (
                <article className='vocabulary-item' key={word}>
                  <h3>{word}</h3>
                  <p>{meaning}</p>
                  <small>{example}</small>
                </article>
              ))}
            </div>
            <div className='model-column'>
              <article className='model-text'>
                <p className='tool-label'>Model text / {level.modelTitle}</p>
                <p className='model-copy'>{level.modelText}</p>
              </article>
              <article className='phrase-list'>
                <p className='tool-label'>Useful phrases</p>
                <ul>
                  {level.phrases.map((phrase) => (
                    <li key={phrase}>{phrase}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section
          className='business-section business-practice'
          id='business-practice'
          aria-labelledby='practice-title'
        >
          <div className='section-intro'>
            <p className='eyebrow'>03 / Check your understanding</p>
            <h2 id='practice-title'>Try it in context.</h2>
            <p>Choose an answer, then complete the phrases from memory.</p>
          </div>
          <div className='business-practice-grid'>
            <article className='quiz-tool'>
              <p className='tool-label'>Activity 1 / Multiple choice</p>
              {level.questions.map(([question, options], questionIndex) => (
                <div className='quiz-question' key={question}>
                  <p>
                    <strong>{questionIndex + 1}.</strong> {question}
                  </p>
                  <div className='quiz-options'>
                    {options.map((option, optionIndex) => (
                      <button
                        key={option}
                        className={
                          selectedAnswers[questionIndex] === optionIndex
                            ? 'quiz-option is-selected'
                            : 'quiz-option'
                        }
                        type='button'
                        aria-pressed={
                          selectedAnswers[questionIndex] === optionIndex
                        }
                        onClick={() =>
                          setSelectedAnswers({
                            ...selectedAnswers,
                            [questionIndex]: optionIndex,
                          })
                        }
                      >
                        {String.fromCharCode(97 + optionIndex)}) {option}
                      </button>
                    ))}
                  </div>
                  {selectedAnswers[questionIndex] !== undefined && (
                    <p
                      className={
                        selectedAnswers[questionIndex] ===
                        level.answers[questionIndex]
                          ? 'answer-feedback is-correct'
                          : 'answer-feedback'
                      }
                      role='status'
                    >
                      {selectedAnswers[questionIndex] ===
                      level.answers[questionIndex]
                        ? 'Correct.'
                        : 'Not quite. Try once more.'}
                    </p>
                  )}
                </div>
              ))}
            </article>
            <article className='gap-tool'>
              <p className='tool-label'>Activity 2 / Complete the sentences</p>
              <p className='word-bank'>
                Word bank: {level.gapAnswers.join(' | ')}
              </p>
              {level.gapText.map((sentence, index) => (
                <label className='gap-line' key={sentence}>
                  <span>{index + 1}.</span>
                  <span>
                    {sentence.split('___')[0]}
                    <input
                      aria-label={`Answer ${index + 1}`}
                      value={gapAnswers[index] ?? ''}
                      onChange={(event) => {
                        const next = [...gapAnswers];
                        next[index] = event.target.value;
                        setGapAnswers(next);
                      }}
                    />
                    {sentence.split('___')[1]}
                  </span>
                </label>
              ))}
              <button
                className='text-button'
                type='button'
                onClick={() => setGapAnswers(level.gapAnswers)}
              >
                Show answers <span aria-hidden='true'>&rarr;</span>
              </button>
            </article>
          </div>
        </section>

        <section
          className='business-section task-section'
          id='business-task'
          aria-labelledby='task-title'
        >
          <div className='task-heading'>
            <div className='section-intro'>
              <p className='eyebrow'>04 / Make it yours</p>
              <h2 id='task-title'>{level.taskTitle}</h2>
              <p>{level.task}</p>
            </div>
            <p className='task-minimum'>
              {level.minimum}
              <span>target</span>
            </p>
          </div>
          <div className='task-editor'>
            <div className='writing-heading'>
              <p className='tool-label'>Your response</p>
              <output className='word-count' aria-live='polite'>
                {wordCount}
                <span> words</span>
              </output>
            </div>
            <textarea
              value={writing}
              onChange={(event) => setWriting(event.target.value)}
              placeholder='Start writing here...'
              rows={8}
            />
            <div className='self-check'>
              <span>Self-check</span>
              <label>
                <input type='checkbox' /> Clear purpose
              </label>
              <label>
                <input type='checkbox' /> Polite tone
              </label>
              <label>
                <input type='checkbox' /> Useful target words
              </label>
            </div>
          </div>
        </section>
      </main>

      <footer className='site-footer'>
        <span>English Page</span>
        <a href='#business-levels'>Back to top &uarr;</a>
      </footer>
    </>
  );
}
