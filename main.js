const quizData = [
    {
      question: 'Which of the following methods is used to update the state of a component in React?',
      a: 'setState()',
      b: 'updateState()',
      c: 'modifyState()',
      d: 'changeState()',
      e: 'stateUpdate()',
      correct: 'a',
    },
    {
      question: 'In React, what is the significance of the "props" keyword?',
      a: '  It is used to define component methods.',
      b: ' It is used to manage component state.',
      c: 'It is used to pass data from a parent component to a child component.',
      d: ' It is used to handle user interactions.',
      e: 'It is used to create reusable custom hooks.',
      correct: 'c',
    },
    {
      question: 'What is the purpose of the getDerivedStateFromProps() lifecycle method in React?',
      a: 'It is used to fetch data from an API.',
      b: 'It is used to update the components state.',
      c: 'It is used to define the initial state of a component.',
      d: 'It is used to handle user interactions.',
      e: 'It is used to perform side effects in functional components.',
      correct: 'c',
    },
    {
      question: 'Which React hook is used to perform side effects in functional components?',
      a: 'useState()',
      b: 'useEffect()',
      c: 'useCallback()',
      d: 'useMemo()',
      e: 'useRef()',
      correct: 'b',
    },
    {
      question: ' What is the JSX syntax used for in React?',
      a: 'Defining component methods.',
      b: 'Managing component state.',
      c: 'Handling user interactions.',
      d: 'Fetching data from an API.',
      e: 'Writing HTML-like code in JavaScript.',
      correct: 'e',
    },
    {
        question: ' What is the purpose of the map() method when working with arrays in React?',
        a: 'It creates a new array with the results of calling a provided function on every element in the original array.',
        b: ' It filters the original array based on a provided condition.',
        c: 'It sorts the original array in ascending order.',
        d: 'It removes the specified element from the original array.',
        e: 'It reverses the order of elements in the original array.',
        correct: 'a',
      },
      {
        question: ' In React, what is the recommended way to make AJAX requests?',
        a: 'Using the fetch() API.',
        b: 'Using the jQuery library.',
        c: 'Using the axios library.',
        d: ' Using the XMLHttpRequest object.',
        e: 'Using the native XMLHttpRequest in JavaScript.',
        correct: 'a',
      },
      {
        question: ' Which React method is used to handle form submissions?',
        a: 'handleChange()',
        b: 'handleInput()',
        c: 'handleSubmit()',
        d: 'handleForm()',
        e: 'handleUserInput()',
        correct: 'c',
      },
      {
        question: ' Which React method is used to handle user input in forms?',
        a: 'handleChange()',
        b: 'handleInput()',
        c: 'handleSubmit()',
        d: 'handleForm()',
        e: 'handleUserInput()',
        correct: 'a',
      },
      {
        question: ' What is the purpose of the React.Fragment component in React?',
        a: ' It is used to define functional components.',
        b: 'It is used to manage component state.',
        c: 'It is used to create reusable custom hooks.',
        d: ' It is used to group multiple elements without adding an extra DOM node.',
        e: 'It is used to fetch data from an API.',
        correct: 'd',
      },
  ]
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const d_text = document.getElementById('d_text')
  const e_text = document.getElementById('e_text')
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]
  
    deselectedAnswers()
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
  }
  
  function deselectedAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false))
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id
      }
    })
    return answer
  }
  
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
  
    //console.log(answer)
  
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++
      }
      currentQuiz++
  
      if (currentQuiz < quizData.length) {
        loadQuiz()
      } else {
        quiz.innerHTML = `
        <h2> Test completed, ${score * 10} you got points.🥳 </h2>
        <button class="submit" onClick="location.reload()"> Try again:( 🌀  </button>
  
      `
      }
    }
  })