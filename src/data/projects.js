const projects = [
  // === GP1 ===
  {
    id: 1,
    category: 'GP1',
    sub: 'Teaching Activities and Subject Goals',
    title: 'Teaching Goals & Lesson Strategies',
    blocks: [
      {
        type: 'paragraph',
        content: 'This section outlines the objectives of the lesson plans and the subject-specific strategies used to engage students.',
      },
      {
        type: 'image',
        src: '/src/assets/images/teaching/teach1.jpeg',
        alt: 'Teaching Plan',
      },
      {
        type: 'video',
        src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        type: 'slideshow',
        images: [
          '/images/activity1.jpg',
          '/images/activity2.jpg',
          '/images/activity3.jpg',
        ],
      },
    ],
  },
  {
    id: 2,
    category: 'GP1',
    sub: 'Subject Connectivity and Relevant Checklist',
    title: 'Curriculum Relevance Checklist',
    blocks: [
      {
        type: 'paragraph',
        content: 'Checklist showing how subject matter is aligned with real-world application and connects to cross-curricular goals.',
      },
      {
        type: 'image',
        src: '/images/checklist.jpg',
        alt: 'Connectivity Checklist',
      },
    ],
  },
  {
    id: 3,
    category: 'GP1',
    sub: 'Student paper /Essays/ Creative works',
    title: 'Student Creative Work Showcase',
    blocks: [
      {
        type: 'slideshow',
        images: [
          '/images/essay1.jpg',
          '/images/essay2.jpg',
        ],
      },
      {
        type: 'paragraph',
        content: 'These are samples of essays, poetry, and creative assignments submitted by students.',
      },
    ],
  },

  // === GP2 ===
  {
    id: 4,
    category: 'GP2',
    sub: 'Action research/Case study',
    title: 'Action Research: Impact of Interactive Tools',
    blocks: [
      {
        type: 'paragraph',
        content: 'This case study explores the impact of interactive whiteboards on student engagement.',
      },
      {
        type: 'video',
        src: 'https://www.youtube.com/embed/kXYiU_JCYtU',
      },
      {
        type: 'image',
        src: '/images/research-summary.jpg',
        alt: 'Research Summary',
      },
    ],
  },

  // === GP3 ===
  {
    id: 5,
    category: 'GP3',
    sub: 'Teachers Incentive to Students',
    title: 'Motivational Tools and Student Rewards',
    blocks: [
      {
        type: 'paragraph',
        content: 'Includes examples of how teachers use badges, praise, and certificates to encourage student growth.',
      },
      {
        type: 'image',
        src: '/images/incentives.jpg',
        alt: 'Student Incentives',
      },
    ],
  },
  {
    id: 6,
    category: 'GP3',
    sub: 'Strategies to Develop Critical Thinking in Students',
    title: 'Building Critical Thinking Skills',
    blocks: [
      {
        type: 'paragraph',
        content: 'Methods include Socratic questioning, problem-based learning, and open discussion prompts.',
      },
      {
        type: 'slideshow',
        images: [
          '/images/critical-thinking1.jpg',
          '/images/critical-thinking2.jpg',
        ],
      },
    ],
  },
  {
    id: 7,
    category: 'GP3',
    sub: 'Assessment Instruments /Records',
    title: 'Assessment Records Overview',
    blocks: [
      {
        type: 'image',
        src: '/images/assessment-chart.jpg',
        alt: 'Assessment Chart',
      },
      {
        type: 'paragraph',
        content: 'Overview of quizzes, rubrics, and record-keeping used in class assessments.',
      },
    ],
  },
  {
    id: 8,
    category: 'GP3',
    sub: 'Students overall development',
    title: 'Student Development Reports',
    blocks: [
      {
        type: 'image',
        src: '/src/assets/images/Development/1.jpeg',
        alt: 'Rules Poster',
      },
      {
        type: 'paragraph',
        content: 'Tracking student progress through emotional, social, and academic indicators.',
      },
      {
        type: 'image',
        src: '/src/assets/images/Development/2.jpeg',
        alt: 'Rules Poster',
      },
      {
        type: 'paragraph',
        content: 'Tracking student progress through emotional, social, and academic indicators.',
      },
      {
        type: 'slideshow',
        images: ['/src/assets/images/Development/3.jpeg', '/src/assets/images/Development/4.jpeg','/src/assets/images/Development/5.jpeg', '/src/assets/images/Development/6.jpeg'],
      },
    ],
  },
  {
    id: 9,
    category: 'GP3',
    sub: 'Classroom Rules and Procedures',
    title: 'Standard Classroom Rules',
    blocks: [
      {
        type: 'image',
        src: '/images/rules.jpg',
        alt: 'Rules Poster',
      },
      {
        type: 'paragraph',
        content: 'Posted rules and behavior expectations help maintain classroom discipline.',
      },
    ],
  },

  // === GP4 ===
  {
    id: 10,
    category: 'GP4',
    sub: 'Professional Development',
    title: 'Courses & Workshops',
    blocks: [
      {
        type: 'slideshow',
        images: ['/images/workshop1.jpg', '/images/workshop2.jpg'],
      },
      {
        type: 'paragraph',
        content: 'Certificates and attendance from PD courses attended during the school year.',
      },
    ],
  },
  {
    id: 11,
    category: 'GP4',
    sub: 'Assessment Records',
    title: 'Formal Assessment Logs',
    blocks: [
      {
        type: 'paragraph',
        content: 'Screenshots of spreadsheets and student grade logs.',
      },
      {
        type: 'image',
        src: '/images/records.jpg',
        alt: 'Assessment Records',
      },
    ],
  },
  {
    id: 12,
    category: 'GP4',
    sub: 'Action Research',
    title: 'Teacher-led Research Paper',
    blocks: [
      {
        type: 'paragraph',
        content: 'Paper describing research conducted to improve group-based learning in math.',
      },
    ],
  },
  {
    id: 13,
    category: 'GP4',
    sub: 'Professional Membership',
    title: 'Professional Groups',
    blocks: [
      {
        type: 'image',
        src: '/images/membership-card.jpg',
        alt: 'Membership',
      },
    ],
  },
  {
    id: 14,
    category: 'GP4',
    sub: 'Certificates',
    title: 'Certification & Licensing',
    blocks: [
      {
        type: 'image',
        src: '/images/cert1.jpg',
        alt: 'Certificate 1',
      },
      {
        type: 'image',
        src: '/images/cert2.jpg',
        alt: 'Certificate 2',
      },
    ],
  },
  {
    id: 15,
    category: 'GP4',
    sub: 'Presentations',
    title: 'Workshop Presentations',
    blocks: [
      {
        type: 'video',
        src: 'https://www.youtube.com/embed/V-_O7nl0Ii0',
      },
      {
        type: 'paragraph',
        content: 'Recordings of sessions and slide decks used during training.',
      },
    ],
  },
  {
    id: 16,
    category: 'GP4',
    sub: 'Observations',
    title: 'Class Observations Feedback',
    blocks: [
      {
        type: 'paragraph',
        content: 'Feedback from school administrators and fellow teachers after observation.',
      },
    ],
  },

  // === GP5 ===
  {
    id: 17,
    category: 'GP5',
    sub: 'Interaction with parents',
    title: 'Parent Engagement Activities',
    blocks: [
      {
        type: 'paragraph',
        content: 'Summary of parent-teacher conferences, call logs, and newsletters sent home.',
      },
    ],
  },
  {
    id: 18,
    category: 'GP5',
    sub: 'Community Involvement',
    title: 'Community Service Projects',
    blocks: [
      {
        type: 'image',
        src: '/images/community.jpg',
        alt: 'Community Event',
      },
      {
        type: 'paragraph',
        content: 'Images and descriptions from cleanup drives and volunteer activities.',
      },
    ],
  },
  {
    id: 19,
    category: 'GP6',
    sub: '',
    title: 'GP6',
    blocks: [
      {
        type: 'image',
        src: '/images/community.jpg',
        alt: 'Community Event',
      },
      {
        type: 'paragraph',
        content: 'Images and descriptions from cleanup drives and volunteer activities.',
      },
    ],
  },
]

export default projects
