
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
    q: "أي مما يلي يُعتبر من لغة الجسد السلبية أثناء التعامل الرسمي؟",
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
      "تقديم الأعلى رتبة إلى الأقل رتبة.",
      "تقديم الأقل رتبة إلى الأعلى رتبة.",
      "لا توجد قاعدة محددة للتقديم.",
      "التقديم حسب العمر بغض النظر عن الرتبة."
    ],
    correct: 1
  },
  {
    q: "كيف يتم ترتيب الكلمات والخطابات الرسمية على المنصة؟",
    a: [
      "تبدأ بالأعلى رتبة وتنتهي بالأقل رتبة.",
      "تتحدث الشخصيات عشوائياً.",
      "تبدأ بالأقل رتبة وتنتهي بالأعلى رتبة VIP.",
      "كلمة واحدة فقط لرئيس الحفل."
    ],
    correct: 2
  },
  {
    q: "أين يوضع الميكروفون عادةً عند تنسيق المنصة؟",
    a: [
      "في منتصف المسرح تماماً.",
      "في يسار المسرح من وجهة نظر الجمهور.",
      "في يمين المسرح، أي شمال من وجهة نظر الجمهور.",
      "خارج المنصة."
    ],
    correct: 2
  },
  {
    q: "أين تجلس الشخصية ذات الرتبة الأولى حسب قاعدة المنتصف؟",
    a: [
      "على أقصى اليمين.",
      "على أقصى اليسار.",
      "خلف الحضور.",
      "في المنتصف، والثانية على يمينها والثالثة على يسارها."
    ],
    correct: 3
  },
  {
    q: "ما هو الإتيكيت الخاص بتجهيز زجاجة المياه على المنصة؟",
    a: [
      "زجاجة مغلقة ومكتوب عليها السعر.",
      "مياه بدون ليبل تجاري إن أمكن، ومعها كوب زجاجي نظيف.",
      "منع المياه على المنصة نهائياً.",
      "مشروبات ساخنة بدلاً من المياه."
    ],
    correct: 1
  },
  {
    q: "ما خطوات التعامل مع ضيوف VIP عند باب القاعة؟",
    a: [
      "تجاهلهم حتى يدخلوا بمفردهم.",
      "التعرف عليهم والترحيب بهم وتسليمهم لمسؤول العلاقات العامة PR.",
      "طلب التذاكر منهم.",
      "إيقافهم خارج الأبواب حتى تمتلئ القاعة."
    ],
    correct: 1
  },
  {
    q: "أي عبارة تمثل قاعدة صحيحة في التواصل الفعال؟",
    a: [
      "مقاطعة المتحدث لإثبات وجهة نظرك.",
      "السخرية لكسر الجليد.",
      "التحدث بهدوء وثقة والاستماع دون مقاطعة.",
      "المزاح دائماً في كل الأوقات."
    ],
    correct: 2
  },
  {
    q: "ما إحدى خطوات التنسيق المشترك بين اللجان أثناء الفعالية؟",
    a: [
      "العشوائية في تنفيذ المهام.",
      "تجنب التواصل بين اللجان.",
      "تحديد الأدوار والتسليم والتسلم والتواصل وإدارة الأزمات المشتركة.",
      "الاعتماد على الفردية في اتخاذ القرار."
    ],
    correct: 2
  }
];

const outcomes = [
  {
    min: 9, max: 10,
    code: "109584756",
    title: "OR LEGEND",
    message: "يا OR يا جامد إنت 😂🔥\n\nطب ما تيجي إنت تمسك اللجنة بقى وإحنا نقعد نتفرج 😂🔥"
  },
  {
    min: 7, max: 8,
    code: "53685866",
    title: "GREAT JOB",
    message: "عاش 🧡🔥\nأنت على الطريق الصح، وكل خطوة بتقربك من الأفضل كمّل بنفس الحماس، ومستنيين منك إنجازات أكبر في اللي جاي 💪🏻✨"
  },
  {
    min: 5, max: 6,
    code: "268917",
    title: "KEEP GOING",
    message: "عاش 🧡👏🏻\nكل خطوة بتتعلم منها بتفرق، ودي لسه البداية! كمّل بنفس الروح، وثق في نفسك، والـ 10/10 المرة الجاية مش بعيدة عليك! 💪🏻"
  },
  {
    min: 0, max: 4,
    code: "8654",
    title: "NEXT TIME",
    message: "ولا يهمك 🧡✨\nكلنا بنتعلم بالتجربة، والمهم مش جبت كام المرة دي، المهم تطلع منها بحاجة جديدة وتكون أحسن المرة الجاية! يلا دي فرصتك تثبت لنفسك إنك تقدر 💪🏻🔥"
  }
];

const STORAGE_KEY = "OR_ESCAPE_ROOM_ATTEMPT";

const $ = id => document.getElementById(id);

let playerName = "";
let currentQuestion = 0;
let score = 0;
let answered = false;

function showScreen(screenId) {
  ["startScreen", "gameScreen", "resultScreen"].forEach(id => {
    $(id).classList.toggle("hidden", id !== screenId);
  });
  window.scrollTo(0, 0);
}

function startGame() {
  playerName = $("playerName").value.trim();

  if (!playerName) {
    $("startError").textContent = "اكتب اسمك الأول.";
    return;
  }

  if (localStorage.getItem(STORAGE_KEY)) {
    $("startError").textContent =
      "المحاولة اتستخدمت بالفعل على المتصفح ده.";
    return;
  }

  // نسجل بدء المحاولة لمنع إعادة البدء على نفس المتصفح
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    name: playerName,
    status: "started",
    startedAt: new Date().toISOString()
  }));

  currentQuestion = 0;
  score = 0;
  showScreen("gameScreen");
  renderQuestion();
}

function renderQuestion() {
  answered = false;

  const item = questions[currentQuestion];

  $("questionCount").textContent =
    `السؤال ${currentQuestion + 1} من ${questions.length}`;

  $("score").textContent = `السكور: ${score}/10`;
  $("questionTitle").textContent = item.q;
  $("progressBar").style.width =
    `${currentQuestion / questions.length * 100}%`;

  $("feedback").textContent = "";
  $("nextBtn").disabled = true;
  $("nextBtn").textContent =
    currentQuestion === questions.length - 1
      ? "عرض النتيجة ✓"
      : "السؤال التالي ←";

  $("answers").innerHTML = "";

  item.a.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.textContent =
      `${String.fromCharCode(65 + index)}. ${answer}`;

    button.addEventListener("click", () => chooseAnswer(index));
    $("answers").appendChild(button);
  });
}

function chooseAnswer(selected) {
  if (answered) return;
  answered = true;

  const correct = questions[currentQuestion].correct;
  const buttons = $("answers").querySelectorAll("button");

  buttons.forEach(button => button.disabled = true);

  if (selected === correct) {
    score++;
    buttons[selected].classList.add("correct");
    $("feedback").textContent = "إجابة صحيحة! عاش 🧡";
  } else {
    buttons[selected].classList.add("wrong");
    buttons[correct].classList.add("correct");
    $("feedback").textContent = "الإجابة مش صحيحة، كمّل 💪🏻";
  }

  $("score").textContent = `السكور: ${score}/10`;
  $("progressBar").style.width =
    `${(currentQuestion + 1) / questions.length * 100}%`;

  $("nextBtn").disabled = false;
}

function nextQuestion() {
  if (!answered) return;

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    finishGame();
  }
}

function finishGame() {
  const outcome = outcomes.find(
    item => score >= item.min && score <= item.max
  );

  $("resultTitle").textContent = outcome.title;
  $("finalScore").textContent = `${score} / 10`;
  $("resultMessage").textContent = outcome.message;
  $("secretCode").textContent = outcome.code;
  $("copyFeedback").textContent = "";

  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    name: playerName,
    status: "completed",
    score,
    code: outcome.code,
    completedAt: new Date().toISOString()
  }));

  showScreen("resultScreen");
}

$("startBtn").addEventListener("click", startGame);
$("nextBtn").addEventListener("click", nextQuestion);

$("playerName").addEventListener("keydown", event => {
  if (event.key === "Enter") startGame();
});

$("copyBtn").addEventListener("click", async () => {
  const code = $("secretCode").textContent;

  try {
    await navigator.clipboard.writeText(code);
    $("copyFeedback").textContent = "تم نسخ الكود 🧡";
  } catch {
    $("copyFeedback").textContent =
      `انسخ الكود يدويًا: ${code}`;
  }
});

// منع محاولة جديدة على نفس المتصفح
(function checkPreviousAttempt() {
  if (localStorage.getItem(STORAGE_KEY)) {
    $("startBtn").disabled = true;
    $("startError").textContent =
      "فيه محاولة مسجلة بالفعل على الجهاز ده.";
  }
})();
