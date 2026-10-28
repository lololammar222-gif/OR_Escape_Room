
const questions = [
  {
    question: "ما هو الفرق الأساسي بين الإتيكيت والبروتوكول من حيث الإلزام؟",
    answers: [
      "الإتيكيت إلزامي والبروتوكول اختياري.",
      "الإتيكيت قواعد السلوك والالتزام بها إلزامي، والبروتوكول مواقف ومخالفته لا يترتب عليها ضرر.",
      "الإتيكيت قواعد التعامل في المواقف الرسمية واتباعها مفضل ومخالفتها لا يترتب عليها ضرر، بينما البروتوكول قواعد السلوك واللباقة والالتزام به إلزامي.",
      "كلاهما غير ملزم على الإطلاق."
    ],
    correct: 2,
    digit: "7"
  },
  {
    question: "أي مما يلي يُعتبر من لغة الجسد السلبية (Don't Do) أثناء التعامل الرسمي؟",
    answers: [
      "الوقوف بشكل مستقيم.",
      "الحفاظ على تواصل بصري سليم.",
      "تشبيك الذراعين بشكل دفاعي.",
      "ابتسامة وتعبير وجه هادئ."
    ],
    correct: 2,
    digit: "3"
  },
  {
    question: "ما هي القاعدة الذهبية في التقديم والتعريف بالشخصيات؟",
    answers: [
      "يتم تقديم الشخص الأعلى رتبة إلى الشخص الأقل رتبة دائماً.",
      "يتم تقديم الشخص الأقل رتبة إلى الشخص الأعلى رتبة، وليس العكس.",
      "لا توجد قاعدة محددة للتقديم.",
      "يتم تقديم الشخص حسب العمر بغض النظر عن الرتبة."
    ],
    correct: 1,
    digit: "9"
  },
  {
    question: "كيف يتم ترتيب الكلمات والخطابات الرسمية على المسرح (المنصة)؟",
    answers: [
      "تبدأ بالشخص الأعلى رتبة وتنتهي بالأقل رتبة.",
      "تتحدث الشخصيات عشوائياً.",
      "تبدأ بالشخص الأقل رتبة وتصاعدياً حتى يتحدث الشخص الأعلى رتبة (VIP) في النهاية.",
      "كلمة واحدة فقط لرئيس الحفل."
    ],
    correct: 2,
    digit: "2"
  },
  {
    question: "أين يوضع الميكروفون عادةً عند تنسيق المنصة (Podium)؟",
    answers: [
      "في منتصف المسرح تماماً.",
      "في يسار المسرح من وجهة نظر الجمهور.",
      "في يمين المسرح، أي شمال من وجهة نظر الجمهور.",
      "خارج المنصة."
    ],
    correct: 2,
    digit: "5"
  },
  {
    question: "في قاعدة المنتصف للجلوس والوقوف الرسمي، أين تجلس الشخصية الأعلى رتبة؟",
    answers: [
      "على أقصى اليمين.",
      "على أقصى اليسار.",
      "خلف الحضور.",
      "في المنتصف، والرتبة الثانية على يمينها والثالثة على يسارها."
    ],
    correct: 3,
    digit: "1"
  },
  {
    question: "ما هو الإتيكيت الخاص بتجهيز زجاجة المياه على المنصة؟",
    answers: [
      "زجاجة مغلقة ومكتوب عليها السعر.",
      "زجاجة مياه، ويفضل دون ملصق تجاري، ومعها كوب زجاجي نظيف.",
      "منع وضع المياه على المنصة نهائياً.",
      "وضع مشروبات ساخنة بدلاً من المياه."
    ],
    correct: 1,
    digit: "8"
  },
  {
    question: "ما الخطوات المتبعة عند التعامل مع ضيوف VIP عند باب القاعة؟",
    answers: [
      "تجاهلهم حتى يدخلوا بمفردهم.",
      "التعرف عليهم والترحيب بهم وتسليمهم مباشرة لمسؤول العلاقات العامة PR.",
      "طلب التذاكر منهم.",
      "إيقافهم خارج الأبواب حتى تمتلئ القاعة."
    ],
    correct: 1,
    digit: "4"
  },
  {
    question: "أي عبارة تمثل قاعدة صحيحة في التواصل الفعال؟",
    answers: [
      "مقاطعة المتحدث لإثبات وجهة نظرك بسرعة.",
      "السخرية من الشخص الآخر لكسر الجليد.",
      "التحدث بنبرة هادئة وواثقة، وعدم المقاطعة، والاستماع للفهم وليس للرد.",
      "المزاح دائماً في كل الأوقات."
    ],
    correct: 2,
    digit: "6"
  },
  {
    question: "ما إحدى خطوات التنسيق المشترك بين اللجان أثناء الفعالية؟",
    answers: [
      "العشوائية في تنفيذ المهام.",
      "تجنب التواصل نهائياً بين اللجان.",
      "تحديد الأدوار ونقاط التسليم والتسلم والتواصل وإدارة الأزمات المشتركة.",
      "الاعتماد على الفردية في اتخاذ القرار."
    ],
    correct: 2,
    digit: "0"
  }
];

const FINAL_CODE = "7392518460";

const $ = id => document.getElementById(id);

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let answered = false;
let playerName = "";
let collectedDigits = [];
let seconds = 0;
let timerInterval = null;
let started = false;

function formatTime(totalSeconds) {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;

  return String(mins).padStart(2, "0") + ":" +
         String(secs).padStart(2, "0");
}

function startTimer() {
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    seconds++;
    $("timer").textContent = formatTime(seconds);
  }, 1000);
}

function startGame() {
  const name = $("player-name").value.trim();

  if (!name) {
    alert("اكتب اسمك الأول علشان تبدأ المهمة!");
    $("player-name").focus();
    return;
  }

  playerName = name;
  currentQuestion = 0;
  score = 0;
  seconds = 0;
  selectedAnswer = null;
  answered = false;
  collectedDigits = [];
  started = true;

  $("timer").textContent = "00:00";
  $("score").textContent = "النتيجة: 0";
  $("start-screen").classList.add("hidden");
  $("final-screen").classList.add("hidden");
  $("quiz-screen").classList.remove("hidden");

  startTimer();
  showQuestion();
}

function showQuestion() {
  selectedAnswer = null;
  answered = false;

  const q = questions[currentQuestion];

  $("question-number").textContent =
    `السؤال ${currentQuestion + 1} من ${questions.length}`;

  $("score").textContent = `النتيجة: ${score}`;
  $("progress-bar").style.width =
    `${(currentQuestion / questions.length) * 100}%`;

  $("question-text").textContent = q.question;
  $("feedback").textContent = "";
  $("secret-code").classList.add("hidden");
  $("submit-btn").classList.remove("hidden");
  $("submit-btn").disabled = false;
  $("next-btn").classList.add("hidden");

  const container = $("answers-container");
  container.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";

    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.textContent = ["A", "B", "C", "D"][index];

    const text = document.createElement("span");
    text.textContent = answer;

    button.append(letter, text);

    button.addEventListener("click", () => {
      if (answered) return;

      selectedAnswer = index;

      container.querySelectorAll(".answer-option")
        .forEach(option => option.classList.remove("selected"));

      button.classList.add("selected");
    });

    container.appendChild(button);
  });
}

function submitAnswer() {
  if (answered) return;

  if (selectedAnswer === null) {
    $("feedback").textContent = "اختار إجابة الأول يا بطل!";
    return;
  }

  answered = true;

  const q = questions[currentQuestion];
  const options = $("answers-container")
    .querySelectorAll(".answer-option");

  options.forEach(option => {
    option.disabled = true;
  });

  if (selectedAnswer === q.correct) {
    score += 10;
    collectedDigits.push(q.digit);

    $("feedback").textContent =
      "إجابة صحيحة! ممتاز، جمعت رقم سري جديد 🔑";

    $("feedback").style.color = "#16804a";
    $("earned-digit").textContent = q.digit;
    $("secret-code").classList.remove("hidden");
  } else {
    $("feedback").textContent =
      "الإجابة مش صحيحة المرة دي. هتقدر تكمل التحدي!";

    $("feedback").style.color = "#bd3737";
  }

  $("score").textContent = `النتيجة: ${score}`;
  $("progress-bar").style.width =
    `${((currentQuestion + 1) / questions.length) * 100}%`;

  $("submit-btn").classList.add("hidden");
  $("next-btn").classList.remove("hidden");

  $("next-btn").textContent =
    currentQuestion === questions.length - 1
      ? "عرض النتيجة 🏆"
      : "السؤال التالي ←";
}

function nextQuestion() {
  if (!answered) return;

  currentQuestion++;

  if (currentQuestion >= questions.length) {
    finishGame();
    return;
  }

  showQuestion();
}

function finishGame() {
  clearInterval(timerInterval);
  started = false;

  $("quiz-screen").classList.add("hidden");
  $("final-screen").classList.remove("hidden");

  $("final-name").textContent = playerName;
  $("final-score").textContent = `${score} / 100`;
  $("final-time").textContent = formatTime(seconds);

  $("final-title").textContent =
    score === 100 ? "🎉 مبروك! جاوبت على كل الأسئلة صح!" :
    score >= 60 ? "🏆 أحسنت! خلصت التحدي!" :
    "🔐 انتهى التحدي! جرّب مرة تانية";

  $("final-message").textContent =
    `يا ${playerName}، خلصت التحديات العشرة. ` +
    `جمعت ${collectedDigits.length} من 10 أرقام سرية.`;

  const codes = $("collected-codes");
  codes.innerHTML = "";

  if (collectedDigits.length === 0) {
    codes.textContent = "لم تجمع أي أرقام سرية في المحاولة دي.";
  } else {
    collectedDigits.forEach((digit, index) => {
      const chip = document.createElement("span");
      chip.className = "code-chip";
      chip.textContent = `السؤال ${questions.findIndex(q =>
        q.digit === digit) + 1}: ${digit}`;
      codes.appendChild(chip);
    });
  }

  $("final-code").value = "";
  $("unlock-feedback").textContent = "";
}

function unlockVault() {
  const enteredCode = $("final-code").value.trim();

  if (collectedDigits.length !== 10) {
    $("unlock-feedback").textContent =
      "لازم تجمع الأرقام العشرة الأول بالإجابة الصحيحة على كل الأسئلة.";
    $("unlock-feedback").style.color = "#bd3737";
    return;
  }

  if (enteredCode === FINAL_CODE) {
    $("unlock-feedback").textContent =
      "🎉 مبروك يا " + playerName +
      "! فتحت الخزنة السرية بنجاح!";
    $("unlock-feedback").style.color = "#16804a";
  } else {
    $("unlock-feedback").textContent =
      "الكود مش صحيح. راجع الأرقام اللي جمعتها وحاول تاني.";
    $("unlock-feedback").style.color = "#bd3737";
  }
}

function restartGame() {
  clearInterval(timerInterval);
  $("final-screen").classList.add("hidden");
  $("quiz-screen").classList.add("hidden");
  $("start-screen").classList.remove("hidden");
  $("player-name").value = "";
  $("timer").textContent = "00:00";
}

$("start-btn").addEventListener("click", startGame);
$("submit-btn").addEventListener("click", submitAnswer);
$("next-btn").addEventListener("click", nextQuestion);
$("unlock-btn").addEventListener("click", unlockVault);
$("restart-btn").addEventListener("click", restartGame);

$("player-name").addEventListener("keydown", event => {
  if (event.key === "Enter") startGame();
});

$("final-code").addEventListener("keydown", event => {
  if (event.key === "Enter") unlockVault();
});
