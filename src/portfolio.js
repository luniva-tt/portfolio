const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://luniva-tt.github.io/portfolio',
  title: 'LT.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Loonibha Tamrakar',
  role: 'Aspiring AI/ML Engineer',
  picture: 'luni.png',

  description:
    'Machine Learning enthusiast with hands-on experience building applied AI systems across natural language processing and deep learning. I have worked on projects involving semantic search, text classification, and sequence modeling, with a focus on practical implementation, evaluation, and iterative improvement. I am especially interested in applied AI and continuously learning about modern techniques in machine learning and NLP. ',
  resume: 'resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/loonibha-tamrakar/',
    github: 'https://github.com/luniva-tt',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: '1. Curriculum-Based QnA & Quiz Generation System (RAG)',
    description:
      'Built a retrieval-augmented NLP system to answer questions and generate quizzes from textbook content using semantic search and transformer-based generation.',
    stack: ['Python', 'SentenceTransformers', 'FAISS', 'Flan-T5', 'NumPy', 'Pandas'],
    sourceCode: 'https://github.com/luniva-tt/qna-w-rag.git',
    livePreview: 'https://github.com',
    image: 'cleanfolio.png',
  },
  {
    name: 'TF-IDF Based Text Retrieval System',
    description:
      'Built a search engine by implementing TF-IDF from scratch and using cosine similarity for document ranking and query matching.',
    stack: ['Python', 'NumPy', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 4',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'cleanfolio.png',
  },
  {
    name: 'Project 5',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'cleanfolio.png',
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Numpy',
  'Pandas',
  'Scikit-learn',
  'PyTorch',
  'NLP',
  'RAG',
  'Hugging Face',
  'PostgreSQL',
  'Flask',
  'Django',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'loonibha.tamrakar@gmail.com',
}

export { header, about, projects, skills, contact }
