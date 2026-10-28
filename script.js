
const questions = [
  {
    q: "ما هو الفرق الأساسي بين الإتيكيت والبروتوكول من حيث الإلزام؟",
    a: [
      "الإتيكيت إلزامي والبروتوكول اختياري.",
      "الإتيكيت قواعد السلوك والالتزام بها إلزامي، والبروتوكول مواقف ومخالفتها لا يترتب عليها ضرر.",
      "الإتيكيت قواعد التعامل في المواقف الرسمية واتباعها مفضل ومخالفتها لا يترتب عليها ضرر، بينما البروتوكول قواعد السلوك واللباقة والالتزام به إلزامي.",
      "كلاهما غير ملزم على الإطلاق."
    ],
    correct: 2
  },
  {
    q: "أي مما يلي يُعتبر من لغة الجسد السلبية (Don't Do) أثناء التعامل الرسمي؟",
    a: [
      "الوقوف بشكل مستقيم.",
      "الحفاظ على تواصل بصري سليم.",
      "تشبيك الذراعين بشكل دفاعي.",
      "ابتسامة وتعبير وجه هادئ."
    ],
    correct: 2
  },
  {
    q: "ما هي القاعدة الذهبية في التقديم والتعريف بالشخصيات؟",
    a: [
      "يتم تقديم الشخص الأعلى رتبة إلى الشخص الأقل رتبة دائماً.",
      "يتم تقديم الشخص الأقل رتبة إلى الشخص الأعلى رتبة، وليس العكس.",
      "لا توجد قاعدة محددة للتقديم.",
      "يتم تقديم الشخص حسب العمر بغض النظر عن الرتبة."
    ],
    correct: 1
  },
  {
    q: "كيف يتم ترتيب الكلمات والخطابات الرسمية على المسرح (المنصة)؟",
    a: [
      "تبدأ بالشخص الأعلى رتبة وتنتهي بالأقل رتبة.",
      "تتحدث الشخصيات عشوائياً.",
      "تبدأ بالشخص الأقل رتبة وتتصاعد حتى يتحدث الشخص الأعلى رتبة (VIP) .",
      "كلمة واحدة فقط لرئيس الحفل."
    ],
    correct: 2
  },
  {
    q: "أين يوضع الميكروفون عادةً عند تنسيق المنصة (Podium)؟",
    a: [
      "في منتصف المسرح تماماً.",
      "في يسار المسرح من وجهة نظر الجمهور.",
      "في يمين المسرح (شمال من وجهة نظر الجمهور).",
      "خارج المنصة."
    ],
    correct: 2
  },
  {
    q: "في قواعد الجلوس والوقوف الرسمية (قاعدة المنتصف)، أين تجلس الشخصية ذات الرتبة الأولى (الأعلى رتبة)؟",
    a: [
      "على أقصى اليمين.",
      "على أقصى اليسار.",
      "خلف الحضور.",
      "في المنتصف تماماً، وتكون الرتبة الثانية على يمينها والرتبة الثالثة على يسارها."
    ],
    correct: 3
  },
  {
    q: "ما هو الإتيكيت الخاص بتجهيز زجاجة المياه على المنصة؟",
    a: [
      "أن تكون زجاجة مغلقة ومكتوب عليها السعر.",
      "أن تكون زجاجة مياه بدون لوجو تجاري إن أمكن ومعها كوب زجاجي نظيف جاهزين دائماً.",
      "منع وضع المياه على المنصة نهائياً.",
      "وضع مشروبات ساخنة بدلاً من المياه."
    ],
    correct: 1
  },
  {
    q: "ما هي الخطوات المتبعة عند التعامل مع ضيوف الـ VIPs عند باب القاعة؟",
    a: [
      "تجاهلهم حتى يدخلوا بمفردهم.",
      "التعرف على الـ VIP، والترحيب بهم بأسلوب لائق، وتسليمهم مباشرة إلى مسؤول العلاقات العامة (PR).",
      "طلب التذاكر منهم.",
      "إيقافهم خارج الأبواب لحين امتلاء القاعة."
    ],
    correct: 1
  },
  {
    q: "أي من العبارات التالية يمثل قاعدة صحيحة في التواصل الفعال (Communication Etiquette)؟",
    a: [
      "مقاطعة المتحدث لإثبات وجهة نظرك بسرعة.",
      "السخرية من الشخص الآخر لكسر الجليد.",
      "التحدث بنبرة هادئة وواثقة، وعدم مقاطعة المتحدث مع إظهار الاهتمام أثناء الاستماع: استمع لكي تفهم، وليس لكي ترد.",
      "المزاح دائماً في كل الأوقات."
    ],
    correct: 2
  },
  {
    q: "ما هي إحدى خطوات التنسيق المشترك بين اللجان (Cross-Committee Coordination) أثناء الفعالية؟",
    a: [
      "العشوائية في تنفيذ المهام.",
      "تجنب التواصل نهائياً بين اللجان.",
      "تحديد الأدوار، ونقطة التسليم والتسلم، والتواصل الصامت واللاسلكي، وإدارة الأزمات المشتركة.",
      "الاعتماد على الفردية في اتخاذ القرار."
    ],
    correct: 2
  }
];

const letters = ["أ", "ب", "ج", "د"];

const screens = {
  start: document.getElementById("startScreen"),
  quiz: document.getElementById("quizScreen"),
  result: document.getElementById("resultScreen")
};

const $ = id => document.getElementById(id);

let playerName = "";
let currentQuestion = 0;
let score = 0;
let timeLeft = 30 * 60;
let timerInterval = null;
let answered = false;
let gameEnded = false;

function showScreen(screen) {
  Object.values(screens).forEach(s => s.classList.add("hidden"));
  screen.classList.remove("hidden");
}

function startGame() {
  playerName = $("playerName").value.trim();

  if (!playerName) {
    $("playerName").focus();
    $("playerName").placeholder = "اكتب اسمك الأول علشان تبدأ 👀";
    return;
  }

  currentQuestion = 0;
  score = 0;
  timeLeft = 30 * 60;
  answered = false;
  gameEnded = false;

  showScreen(screens.quiz);
  renderQuestion();
  updateTimer();
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    if (gameEnded) return;

    timeLeft--;
    updateTimer();

    if (timeLeft <= 0) {
      finishGame(true);
    }
  }, 1000);
}

function updateTimer() {
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;

  $("timer").textContent =
    String(mins).padStart(2, "0") + ":" +
    String(secs).padStart(2, "0");
}

function renderQuestion() {
  answered = false;

  const question = questions[currentQuestion];

  $("questionCounter").textContent =
    `QUESTION ${currentQuestion + 1} / ${questions.length}`;

  $("questionNumber").textContent =
    String(currentQuestion + 1).padStart(2, "0");

  $("questionText").textContent = question.q;
  $("scoreLabel").textContent = `SCORE: ${score}`;
  $("progressBar").style.width =
    `${(currentQuestion / questions.length) * 100}%`;

  $("feedback").textContent = "";
  $("feedback").className = "feedback";
  $("nextBtn").classList.add("hidden");
  $("nextBtn").textContent =
    currentQuestion === questions.length - 1
      ? "VIEW RESULTS 🏆"
      : "NEXT QUESTION ➜";

  const answersContainer = $("answers");
  answersContainer.innerHTML = "";

  question.a.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn";

    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.textContent = letters[index];

    const text = document.createElement("span");
    text.textContent = answer;

    button.append(letter, text);
    button.addEventListener("click", () => checkAnswer(index, button));

    answersContainer.appendChild(button);
  });
}

function checkAnswer(selectedIndex, selectedButton) {
  if (answered || gameEnded) return;

  answered = true;

  const question = questions[currentQuestion];
  const buttons = [...$("answers").querySelectorAll("button")];

  buttons.forEach(button => button.disabled = true);

  if (selectedIndex === question.correct) {
    score += 10;
    selectedButton.classList.add("correct");
    $("feedback").textContent = "إجابة صحيحة! عاش 🔥🧡";
    $("feedback").classList.add("good");
  } else {
    selectedButton.classList.add("wrong");
    buttons[question.correct].classList.add("correct");
    $("feedback").textContent =
      `مش دي الإجابة الصحيحة. الإجابة الصحيحة: ${letters[question.correct]}`;
    $("feedback").classList.add("bad");
  }

  $("scoreLabel").textContent = `SCORE: ${score}`;
  $("progressBar").style.width =
    `${((currentQuestion + 1) / questions.length) * 100}%`;

  $("nextBtn").classList.remove("hidden");
}

function nextQuestion() {
  if (!answered || gameEnded) return;

  if (currentQuestion === questions.length - 1) {
    finishGame(false);
    return;
  }

  currentQuestion++;
  renderQuestion();
}

function getResult(correctAnswers) {
  if (correctAnswers >= 9) {
    return {
      code: "109584756",
      title: "OUTSTANDING! 🏆",
      message: "عاش! أداء ممتاز، أثبت إنك فاهم قواعد الإتيكيت والبروتوكول ومستعد للمهمة الجاية 🔥"
    };
  }

  if (correctAnswers >= 7) {
    return {
      code: "53685866",
      title: "GREAT JOB! 🔥",
      message: "عاش! أنت على الطريق الصح، وكل خطوة بتقربك من الأفضل. كمّل بنفس الحماس! 💪🏻"
    };
  }

  if (correctAnswers >= 5) {
    return {
      code: "268917",
      title: "KEEP GOING! 🧡",
      message: "ولا يهمك، كلنا بنتعلم بالتجربة. راجع إجاباتك وحاول تاني، تقدر تبقى أحسن المرة الجاية!"
    };
  }

  return {
    code: "8654",
    title: "MISSION RETRY! 🚀",
    message: "ولا يهمك، المهم إنك تتعلم من التجربة. راجع المعلومات وجرب تاني، الفرصة لسه موجودة!"
  };
}

function setupUnlock(result) {
  const code = result.code;
  const secretCode = $("secretCode");
  const copyButton = $("copyCodeBtn");

  // تقسيم الكود إلى أجزاء يجمعها اللاعب
  const parts = code.match(/.{1,3}/g) || [];

  secretCode.textContent = parts.join("  +  ");
  copyButton.classList.add("hidden");

  let box = $("unlockBox");

  if (!box) {
    box = document.createElement("div");
    box.id = "unlockBox";

    box.style.cssText = `
      margin: 24px auto;
      padding: 20px;
      max-width: 420px;
      background: rgba(255,255,255,0.06);
      border: 1px solid #ff9d32;
      border-radius: 16px;
      text-align: center;
      direction: rtl;
    `;

    const title = document.createElement("h3");
    title.textContent = "🔐 اجمع أجزاء الكود وافتح القفل";

    const hint = document.createElement("p");
    hint.textContent = "رتّب الأرقام واكتب الكود كامل في الخانة";

    const input = document.createElement("input");
    input.id = "unlockInput";
    input.type = "text";
    input.inputMode = "numeric";
    input.autocomplete = "off";
    input.placeholder = "اكتب الكود هنا...";
    input.maxLength = code.length;

    input.style.cssText = `
      width: 90%;
      max-width: 300px;
      padding: 13px;
      margin: 12px 0;
      border-radius: 10px;
      border: 1px solid #ff9d32;
      background: #111a2d;
      color: white;
      text-align: center;
      font-size: 20px;
      letter-spacing: 2px;
      box-sizing: border-box;
    `;

    const button = document.createElement("button");
    button.id = "unlockBtn";
    button.textContent = "UNLOCK 🔓";
    button.className = "answer-btn";

    const status = document.createElement("p");
    status.id = "unlockStatus";
    status.setAttribute("role", "status");

    button.addEventListener("click", () => {
      if (input.value.trim() === code) {
        status.textContent = "عاش يا بطل🧡👏🏻قدرت توصل للنهاية وتعدّي التحدي، وده في حد ذاته إنجاز! افتكر دايمًا إن كل تحدي بتخوضه فرصة تتعلم وتثبت إنك تقدر تكون أحسن 💪🏻✨";
        status.style.color = "#4ade80";
        input.disabled = true;
        button.disabled = true;

        $("resultMessage").textContent = result.message;
        $("resultMessage").classList.add("good");
      } else {
        status.textContent = "الكود مش مظبوط، جرّب تاني 💪🏻";
        status.style.color = "#ff6b6b";
        input.focus();
      }
    });

    input.addEventListener("keydown", event => {
      if (event.key === "Enter") {
        button.click();
      }
    });

    box.append(title, hint, input, button, status);
    screens.result.appendChild(box);
  }

  $("unlockInput").value = "";
  $("unlockInput").disabled = false;
  $("unlockBtn").disabled = false;
  $("unlockStatus").textContent = "";
  $("resultMessage").textContent =
    "جمّع أجزاء الكود واكتبها صح عشان تفتح القفل وتعرف رسالتك النهائية! 🔐";
  $("resultMessage").classList.remove("good");

  box.classList.remove("hidden");
}

function finishGame(timeUp = false) {
  if (gameEnded) return;

  gameEnded = true;
  clearInterval(timerInterval);

  const correctAnswers = score / 10;
  const result = getResult(correctAnswers);

  $("resultName").textContent = playerName;
  $("finalScore").textContent = `${score} / 100`;
  $("correctCount").textContent =
    `${correctAnswers} / ${questions.length}`;

  $("resultTitle").textContent =
    timeUp ? "TIME'S UP!" : result.title;

  $("resultIcon").textContent =
    timeUp ? "⏰" : correctAnswers >= 7 ? "🏆" : "🔐";

  $("progressBar").style.width = "100%";

  setupUnlock(result);
  showScreen(screens.result);
}

async function copyCode() {
  const code = $("secretCode").textContent;
  const button = $("copyCodeBtn");

  try {
    await navigator.clipboard.writeText(code);
    button.textContent = "COPIED! ✅";
  } catch {
    const temp = document.createElement("textarea");
    temp.value = code;
    document.body.appendChild(temp);
    temp.select();

    const copied = document.execCommand("copy");
    temp.remove();

    button.textContent = copied ? "COPIED! ✅" : "انسخي الكود يدويًا";
  }

  setTimeout(() => {
    button.textContent = "COPY CODE 📋";
  }, 2000);
}

function restartGame() {
  clearInterval(timerInterval);
  $("playerName").value = "";

  $("unlockBox")?.classList.add("hidden");
  $("copyCodeBtn").classList.remove("hidden");

  showScreen(screens.start);
}

$("startBtn").addEventListener("click", startGame);

$("playerName").addEventListener("keydown", event => {
  if (event.key === "Enter") startGame();
});

$("nextBtn").addEventListener("click", nextQuestion);
$("copyCodeBtn").addEventListener("click", copyCode);
$("restartBtn").addEventListener("click", restartGame);
