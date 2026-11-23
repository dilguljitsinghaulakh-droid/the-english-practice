export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "For Educators", href: "/english-for-teachers" },
  { label: "For Corporates", href: "/corporate-english" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export interface TrainingFormat {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  idealFor: string;
}

export const trainingFormats: TrainingFormat[] = [
  {
    id: "online",
    title: "Online Training",
    tagline: "Flexible remote learning sessions",
    description: "Develop professional communication skills through guided, interactive online learning sessions. Designed to fit demanding professional schedules while delivering focused, high-engagement practice.",
    features: [
      "Live interactive video sessions",
      "Digital learning materials & scenario exercises",
      "Focused speaking, writing, and feedback rounds",
      "Accessible from anywhere without travel overhead"
    ],
    idealFor: "Educators, individual working professionals, and distributed organisational teams."
  },
  {
    id: "one-to-one",
    title: "One-to-One Training",
    tagline: "Personalised, goal-specific guidance",
    description: "Individual learning focused on your specific communication responsibilities, unique workplace challenges, and personal development goals.",
    features: [
      "Customised curriculum aligned with your day-to-day role",
      "Targeted practice for upcoming presentations, meetings, or classes",
      "Direct, detailed feedback on pronunciation, tone, and clarity",
      "Self-paced progression adapted to your learning priorities"
    ],
    idealFor: "Subject teachers, team leads, executives, and professionals preparing for high-stakes communication."
  },
  {
    id: "group",
    title: "Group Training",
    tagline: "Collaborative cohort-based development",
    description: "Structured communication development for groups of educators, professionals, or departmental teams. Encourages shared learning, collaborative peer practice, and team-wide communication alignment.",
    features: [
      "Shared cohort discussions and realistic group simulations",
      "Cross-functional communication and alignment exercises",
      "Customised modules aligned with institution or company objectives",
      "Practical pair-work and collaborative role-playing"
    ],
    idealFor: "School faculties, academic departments, corporate units, and cross-functional teams."
  }
];

export interface ApproachStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  keyActivities: string[];
}

export const approachSteps: ApproachStep[] = [
  {
    step: "01",
    title: "DISCOVER",
    subtitle: "Understanding Context & Roles",
    description: "We begin by understanding your professional role, communication responsibilities, learning goals, and current workplace challenges. Rather than relying on generic assessments, we map the actual situations where English is required.",
    keyActivities: [
      "Role & responsibilities mapping",
      "Current communication challenge identification",
      "Target audience analysis (students, parents, clients, colleagues)",
      "Clear, actionable learning objective setting"
    ]
  },
  {
    step: "02",
    title: "DESIGN",
    subtitle: "Curriculum Suited to Real Situations",
    description: "We identify relevant communication skills and structure learning around the practical situations you face daily. Language development is purposefully connected to real documents, conversations, and classroom interactions.",
    keyActivities: [
      "Selection of role-relevant vocabulary & phrasing",
      "Structuring speaking & writing templates",
      "Tailoring workplace or classroom scenario briefs",
      "Sequencing modules for immediate practical application"
    ]
  },
  {
    step: "03",
    title: "PRACTISE",
    subtitle: "Realistic, Active Application",
    description: "Language skills are built through guided activities, simulated scenarios, structured discussions, writing tasks, and role-plays that replicate authentic professional situations.",
    keyActivities: [
      "Simulated parent meetings, client calls, and briefings",
      "Live drafting and refining of workplace emails and instructions",
      "Structured presentations with Q&A management",
      "Active pronunciation and intelligibility drills"
    ]
  },
  {
    step: "04",
    title: "REVIEW",
    subtitle: "Constructive Feedback & Progress",
    description: "We use constructive feedback, targeted reflection, and suitable progress checks to recognise strengths, refine nuance, and pinpoint clear directions for continued development.",
    keyActivities: [
      "Detailed, non-judgmental spoken and written feedback",
      "Self-reflection prompts on real-world communication tests",
      "Targeted adjustments to phrasing and delivery",
      "Actionable recommendations for sustained daily practice"
    ]
  }
];

export interface CommunicationLabExample {
  id: string;
  category: "educators" | "professionals";
  scenarioTitle: string;
  context: string;
  lessEffective: string;
  lessEffectiveLabel: string;
  clearer: string;
  clearerLabel: string;
  explanation: string;
  takeaway: string;
}

export const communicationLabData: CommunicationLabExample[] = [
  // Educators
  {
    id: "edu-1",
    category: "educators",
    scenarioTitle: "Classroom Instructions",
    context: "Setting clear timeframes and behavioral expectations for an in-class activity.",
    lessEffective: "Complete this quickly.",
    lessEffectiveLabel: "Vague & Ambiguous",
    clearer: "You have three minutes to complete the activity. Please raise your hand if you need help.",
    clearerLabel: "Specific & Actionable",
    explanation: "Clear instructions help learners understand the task, available time, and expected response, reducing student confusion and frequent interruptions.",
    takeaway: "State the duration, the specific action required, and how to ask for assistance."
  },
  {
    id: "edu-2",
    category: "educators",
    scenarioTitle: "Student Feedback",
    context: "Guiding a student toward tangible improvement on an essay or assignment.",
    lessEffective: "You need to improve.",
    lessEffectiveLabel: "Discouraging & Unclear",
    clearer: "Your ideas are relevant. Try organising them into three points and adding an example to support each one.",
    clearerLabel: "Constructive & Instructive",
    explanation: "Specific feedback highlights what the learner did right while providing clear, step-by-step guidance on how to make the work stronger.",
    takeaway: "Pair genuine validation with concrete, structured steps for improvement."
  },
  {
    id: "edu-3",
    category: "educators",
    scenarioTitle: "Parent Communication",
    context: "Discussing student performance during a parent–teacher meeting or report.",
    lessEffective: "Your child must work harder.",
    lessEffectiveLabel: "Defensive & Vague",
    clearer: "Your child participates well in discussions. Additional reading practice at home may help strengthen reading fluency.",
    clearerLabel: "Collaborative & Informative",
    explanation: "Constructive communication provides meaningful observations, highlights student strengths, and suggests actionable next steps for the family.",
    takeaway: "Foster a partnership with parents through balanced observations and specific home routines."
  },

  // Professionals
  {
    id: "corp-1",
    category: "professionals",
    scenarioTitle: "Business Email",
    context: "Requesting project updates from a colleague or cross-functional team member.",
    lessEffective: "Send me the details soon.",
    lessEffectiveLabel: "Imprecise & Open to Delay",
    clearer: "Could you please share the updated project status by 4 PM, including any outstanding tasks?",
    clearerLabel: "Polite, Exact & Deadline-Driven",
    explanation: "The message specifies the exact information required, sets an unambiguous deadline, and maintains a courteous, professional tone.",
    takeaway: "Eliminate guesswork by defining scope, format, and exact time expectation."
  },
  {
    id: "corp-2",
    category: "professionals",
    scenarioTitle: "Meeting Discussion",
    context: "Expressing disagreement during a collaborative planning session or review.",
    lessEffective: "I don't agree with this.",
    lessEffectiveLabel: "Abrupt & Confrontational",
    clearer: "I see your point. Could we also consider another approach?",
    clearerLabel: "Collaborative & Respectful",
    explanation: "The speaker communicates disagreement constructively while acknowledging the colleague's perspective and inviting collaborative exploration.",
    takeaway: "Acknowledge the existing viewpoint first before proposing alternative solutions."
  },
  {
    id: "corp-3",
    category: "professionals",
    scenarioTitle: "Workplace Feedback",
    context: "Giving constructive review comments on a report or deliverable submitted by a team member.",
    lessEffective: "Your report needs improvement.",
    lessEffectiveLabel: "Demotivating & Non-Actionable",
    clearer: "The analysis is useful. Adding a short summary of the key findings would make the report clearer.",
    clearerLabel: "Specific & Value-Adding",
    explanation: "The feedback identifies a concrete strength and suggests a specific, straightforward refinement that improves reader comprehension.",
    takeaway: "Recognise the core effort and pinpoint the exact modification needed."
  }
];

export interface EducatorModule {
  id: string;
  number: string;
  title: string;
  headline: string;
  focusPoints: string[];
  practicalAspect: string;
}

export const educatorModules: EducatorModule[] = [
  {
    id: "edu-mod-1",
    number: "01",
    title: "Classroom Communication",
    headline: "Explain clearly. Guide effectively.",
    focusPoints: [
      "Classroom instructions and pacing",
      "Explaining complex concepts with precision",
      "Giving step-by-step directions",
      "Essential classroom language and signaling",
      "Checking student understanding effectively",
      "Organising learning transitions and activities"
    ],
    practicalAspect: "Simulated instruction delivery, classroom setup commands, and transition phrasing."
  },
  {
    id: "edu-mod-2",
    number: "02",
    title: "Student Engagement & Interaction",
    headline: "Encourage participation through meaningful communication.",
    focusPoints: [
      "Asking effective, open-ended questions",
      "Facilitating structured classroom discussions",
      "Encouraging hesitant student responses",
      "Clarifying student doubts without discouraging them",
      "Supporting active English-medium participation",
      "Constructive verbal feedback in the moment"
    ],
    practicalAspect: "Questioning strategies, discussion prompt frameworks, and live response handling."
  },
  {
    id: "edu-mod-3",
    number: "03",
    title: "Parent–Teacher Communication",
    headline: "Make important conversations clear and constructive.",
    focusPoints: [
      "Conducting structured parent–teacher meetings",
      "Discussing student academic and behavioural progress",
      "Communicating sensitive concerns respectfully",
      "Sharing balanced, constructive observations",
      "Building trust and active family collaboration",
      "Professional written correspondence with parents"
    ],
    practicalAspect: "Mock parent-teacher dialogues, email response templates, and progress report phrasing."
  },
  {
    id: "edu-mod-4",
    number: "04",
    title: "Professional English for Educators",
    headline: "Communicate confidently beyond the classroom.",
    focusPoints: [
      "Formal school emails and staff circulars",
      "Active participation in staff and department meetings",
      "Written student evaluation and report card remarks",
      "Academic reports and curriculum documentation",
      "Professional correspondence with leadership",
      "Collaborative peer-to-peer faculty communication"
    ],
    practicalAspect: "Report card comment drafting, meeting intervention phrasing, and professional memo writing."
  },
  {
    id: "edu-mod-5",
    number: "05",
    title: "Speaking Clarity & Presentation Skills",
    headline: "Speak with purpose and clarity.",
    focusPoints: [
      "Speech intelligibility, articulation, and pacing",
      "Voice modulation and projection for teaching spaces",
      "Structuring explanations for maximum retention",
      "Delivering school assembly and seminar presentations",
      "Organising spoken arguments and information logically",
      "Building speaking confidence in formal forums"
    ],
    practicalAspect: "Micro-teaching presentations, audio-reflective drills, and pronunciation clarity exercises."
  },
  {
    id: "edu-mod-6",
    number: "06",
    title: "Practical Classroom Scenarios",
    headline: "Practise what you teach with.",
    focusPoints: [
      "Guided role-plays of challenging classroom events",
      "Simulated student-teacher interactions",
      "Communication problem-solving under time constraints",
      "Handling unexpected student queries",
      "Parent communication role-play drills",
      "Reflective analysis and peer feedback sessions"
    ],
    practicalAspect: "Live interactive scenario drills with real-time coaching and constructive refinement."
  }
];

export interface CorporateModule {
  id: string;
  number: string;
  title: string;
  headline: string;
  topics: string[];
  practicalExamples: string[];
}

export const corporateModules: CorporateModule[] = [
  {
    id: "corp-mod-1",
    number: "01",
    title: "Business English & Professional Writing",
    headline: "Write with clarity. Communicate with purpose.",
    topics: [
      "Email structure, etiquette, and subject lines",
      "Calibrating professional tone across audiences",
      "Making clear requests and courteous follow-ups",
      "Drafting executive summaries and project reports",
      "Refining professional vocabulary and eliminating jargon",
      "Concise, impact-driven written communication"
    ],
    practicalExamples: [
      "Project status updates",
      "Client follow-up emails",
      "Executive summaries",
      "Meeting action-item notes"
    ]
  },
  {
    id: "corp-mod-2",
    number: "02",
    title: "Meetings & Workplace Discussions",
    headline: "Participate meaningfully. Make your contributions count.",
    topics: [
      "Expressing viewpoint and rationale clearly",
      "Asking relevant, incisive questions",
      "Seeking clarification tactfully",
      "Agreeing and disagreeing professionally",
      "Contributing actively to cross-functional discussions",
      "Summarising key decisions and action items"
    ],
    practicalExamples: [
      "Cross-functional team check-ins",
      "Sprint planning & strategy syncs",
      "Department updates",
      "Consensus-building discussions"
    ]
  },
  {
    id: "corp-mod-3",
    number: "03",
    title: "Presentations & Public Speaking",
    headline: "Present ideas clearly and with purpose.",
    topics: [
      "Structuring presentations for logical flow",
      "Crafting compelling openings and clear conclusions",
      "Using signposting language to connect complex ideas",
      "Explaining technical data and metrics simply",
      "Pacing, vocal emphasis, and professional posture",
      "Confidently handling audience Q&A sessions"
    ],
    practicalExamples: [
      "Quarterly project presentations",
      "Team review updates",
      "Business proposals & pitches",
      "Internal workshop delivery"
    ]
  },
  {
    id: "corp-mod-4",
    number: "04",
    title: "Client & Customer Communication",
    headline: "Build understanding through better conversations.",
    topics: [
      "Professional introductory conversations",
      "Active listening and requirement discovery",
      "Asking perceptive discovery questions",
      "Articulating products, services, and value propositions",
      "De-escalating friction and addressing concerns gracefully",
      "Structured post-meeting follow-ups"
    ],
    practicalExamples: [
      "Client discovery calls",
      "Service explanation briefings",
      "Scope alignment meetings",
      "Customer support resolutions"
    ]
  },
  {
    id: "corp-mod-5",
    number: "05",
    title: "Leadership & Team Communication",
    headline: "Lead conversations with clarity and respect.",
    topics: [
      "Clear, unambiguous task delegation",
      "Delivering constructive, actionable feedback",
      "Facilitating productive 1-on-1 conversations",
      "Managing sensitive or difficult workplace discussions",
      "Articulating team expectations and timelines",
      "Explaining business priorities and strategic shifts"
    ],
    practicalExamples: [
      "One-on-one performance check-ins",
      "Task allocation and goal setting",
      "Team retrospective meetings",
      "Change communication updates"
    ]
  },
  {
    id: "corp-mod-6",
    number: "06",
    title: "Professional Speaking & Language Development",
    headline: "Develop English for the situations that matter to you.",
    topics: [
      "Practical workplace grammar and sentence structure",
      "Industry- and role-relevant vocabulary acquisition",
      "Speech intelligibility and international comprehensibility",
      "Developing conversational fluency and spontaneity",
      "Organising spontaneous thoughts under pressure",
      "Formulating concise, well-reasoned answers"
    ],
    practicalExamples: [
      "Guided role-play drills",
      "Spontaneous workplace Q&A simulations",
      "Pronunciation refinement",
      "Personalised communication exercises"
    ]
  }
];

export interface FAQItem {
  question: string;
  answer: string;
  category?: "general" | "educators" | "corporate";
}

export const globalFaqs: FAQItem[] = [
  {
    question: "What is English for Specific Purposes (ESP)?",
    answer: "English for Specific Purposes focuses on the language and communication skills relevant to particular professional, academic, or workplace situations. Rather than teaching general conversational English in the abstract, ESP centers on the exact vocabulary, discourse, and communication tasks learners require in their daily roles.",
    category: "general"
  },
  {
    question: "How is ESP different from general English?",
    answer: "General English supports broader foundational language development and everyday conversational contexts. In contrast, ESP places greater emphasis on the specific communication tasks, tone, vocabulary, and situations used in defined professional or academic settings, such as classrooms, meetings, or client discussions.",
    category: "general"
  },
  {
    question: "Is English for Educators only for English teachers?",
    answer: "No. It is designed for all educators, including subject teachers (Science, Mathematics, Social Studies), teachers delivering instruction through English-medium classrooms, academic coordinators, and school administrators who use English for classroom teaching, parent communication, and institutional meetings.",
    category: "educators"
  },
  {
    question: "Do corporate learners need advanced English to benefit?",
    answer: "Not necessarily. Training priorities are determined according to participants' current communication abilities, job responsibilities, and specific learning goals. The focus is on practical clarity, confidence, and effectiveness in their role, regardless of starting level.",
    category: "corporate"
  },
  {
    question: "Is training available for individuals?",
    answer: "Yes. One-to-one training is among the confirmed available learning formats, offering tailored sessions focused directly on an individual's specific communication priorities and responsibilities.",
    category: "general"
  },
  {
    question: "Is group training available?",
    answer: "Yes. Group training is available for school faculties, academic departments, corporate units, and organisational teams, structured around agreed programme arrangements and learning objectives.",
    category: "general"
  },
  {
    question: "Is online training available?",
    answer: "Yes. The English Practice delivers guided online training sessions, providing interactive, live learning with flexible scheduling for professionals and institutions across locations.",
    category: "general"
  },
  {
    question: "How long is a training programme?",
    answer: "Programme duration depends on learning needs, objectives, participant availability, and the agreed training structure. Details are established during the initial consultation based on your specific requirements.",
    category: "general"
  },
  {
    question: "Are programmes customised?",
    answer: "Yes. Training needs are discussed during consultation to identify suitable learning priorities, realistic workplace or classroom scenarios, and a relevant programme structure aligned with your goals.",
    category: "general"
  },
  {
    question: "How do I enquire about fees?",
    answer: "Fees can be discussed after identifying the required training format (online, one-to-one, or group), learning objectives, participant count, and programme scope through our enquiry consultation.",
    category: "general"
  }
];
