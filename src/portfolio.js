const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://luniva-tt.github.io/portfolio',
  title: 'LT.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Loonibha Tamrakar',
  role: 'Aspiring AI/ML Engineer',
  picture: 'https://github.com/luniva-tt/portfolio/blob/main/public/images/luni.png?raw=true',

  description:
    'Machine Learning enthusiast with hands-on experience building applied AI systems across natural language processing and deep learning. I have worked on projects involving semantic search, text classification, and sequence modeling, with a focus on practical implementation, evaluation, and iterative improvement. I am especially interested in applied AI and continuously learning about modern techniques in machine learning and NLP. ',
  resume: 'https://github.com/luniva-tt/portfolio/blob/main/public/resume.pdf?raw=true',
  social: {
    linkedin: 'https://www.linkedin.com/in/loonibha-tamrakar/',
    github: 'https://github.com/luniva-tt',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'SwiftStudy - AI-Powered Learning Platform',
    description:
      'Built an intelligent study platform integrating RAG-based content retrieval and YouTube video summarization, along with interactive virtual chemistry labs for experiential learning.',
    stack: ['Python', 'LangChain', 'SentenceTransformers', 'Ollama'],
    sourceCode: 'https://github.com/luniva-tt/SwiftStudy.git',
    livePreview: 'https://github.com',
    image: 'cleanfolio.png',
  },
  {
    name: 'Mamacare - Maternal Care System',
    description:
      'Developed a comprehensive maternal health system featuring risk prediction, a RAG-based medical chatbot, and geospatial routing to nearby emergency services.',
    stack: ['Python', 'FastAPI', 'Scikit-learn', 'Pydantic', 'SentenceTransformers', 'LangChain', 'Ollama', 'GeoPandas'],
    sourceCode: 'https://github.com/luniva-tt/nepal-pregancy.git',
    livePreview: 'https://github.com',
    image: 'cleanfolio.png',
  },
  {
    name: 'Curriculum-Based QnA System (RAG)',
    description:
      'Designed a retrieval-augmented question answering system using semantic search and transformer-based generation over structured textbook data.',
    stack: ['Python', 'SentenceTransformers', 'FAISS', 'Flan-T5', 'NumPy', 'Pandas'],
    sourceCode: 'https://github.com/luniva-tt/qna-w-rag.git',
    livePreview: 'cleanfolio.png',
    image: 'cleanfolio.png',
  },
  {
    name: 'Exersense - Video Pose Classification',
    description:
      'Implemented a spatio-temporal ensemble model combining R3D-18 and CNN-LSTM architectures to classify human poses from video sequences.',
    stack: ['Python', 'PyTorch', 'OpenCV', 'R3D-18', 'CNN', 'LSTM'],
    sourceCode: 'https://github.com/luniva-tt/pose_video_classification.git',
    livePreview: 'https://github.com',
    image: 'cleanfolio.png',
  },
  {
    name: 'Real-Time People Counter',
    description:
      'Built a real-time people counting system using YOLOv8 and OpenCV to track entries and exits from live video streams.',
    stack: ['Python', 'YOLOv8', 'OpenCV', 'NumPy', 'Pandas'],
    sourceCode: 'https://github.com/luniva-tt/pplcounter.git',
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
