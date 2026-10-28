const stages = [
    {
        title: "المحطة الأولى: الإتيكيت والبروتوكول",
        scenario: "ما هو الفرق الأساسي بين الإتيكيت والبروتوكول من حيث الإلزام؟",
        options: {
            "أ": "أ) الإتيكيت إلزامي والبروتوكول اختياري.",
            "ب": "ب) الإتيكيت قواعد السلوك والالتزام بها إلزامي، والبروتوكول مواقف ومخالفتها لا يترتب عليها ضرر.",
            "ج": "ج) الإتيكيت قواعد التعامل في المواقف الرسمية واتباعها مفضل ومخالفتها لا يترتب عليها ضرر، بينما البروتوكول قواعد السلوك واللباقة والالتزام به إلزامي.",
            "د": "د) كلاهما غير ملزم على الإطلاق."
        },
        correct: "ج",
        wrongMessage: "إجابة خاطئة! الإجابة الصحيحة هي: ج."
    },
    {
        title: "المحطة الثانية: لغة الجسد",
        scenario: "أي مما يلي يُعد من لغة الجسد السلبية (Don't Do) أثناء التعامل الرسمي؟",
        options: {
            "أ": "أ) الوقوف بشكل مستقيم.",
            "ب": "ب) الحفاظ على تواصل بصري سليم.",
            "ج": "ج) تشبيك الذراعين بشكل دفاعي.",
            "د": "د) ابتسامة وتعبير وجه هادئ."
        },
        correct: "ج",
        wrongMessage: "إجابة خاطئة! تشبيك الذراعين حركة دفاعية وسلبية."
    },
    {
        title: "المحطة الثالثة: التقديم والتعريف",
        scenario: "ما هي القاعدة الذهبية في التقديم والتعريف بالشخصيات؟",
        options: {
            "أ": "أ) يتم تقديم الشخص الأعلى رتبة إلى الشخص الأقل رتبة دائماً.",
            "ب": "ب) يتم تقديم الشخص 'الأقل رتبة' إلى الشخص 'الأعلى رتبة'، وليس العكس.",
            "ج": "ج) لا توجد قاعدة محددة للتقديم.",
            "د": "د) يتم تقديم الشخص حسب العمر بغض النظر عن الرتبة."
        },
        correct: "ب",
        wrongMessage: "إجابة خاطئة! يتم تقديم الأقل رتبة للأعلى رتبة."
    },
    {
        title: "المحطة الرابعة: الخطابات الرسمية",
        scenario: "كيف يتم ترتيب الكلمات والخطابات الرسمية على المسرح (المنصة)؟",
        options: {
            "أ": "أ) تبدأ بالشخص الأعلى رتبة وتنتهي بالأقل رتبة.",
            "ب": "ب) تتحدث الشخصيات عشوائياً.",
            "ج": "ج) تبدأ دائماً بالشخص الأقل رتبة وتتصاعد حتى يتحدث الشخص الأعلى رتبة في النهاية.",
            "د": "د) كلمة واحدة فقط لرئيس الحفل."
        },
        correct: "ج",
        wrongMessage: "إجابة خاطئة! الترتيب تصاعدي لتكون كلمة الختام للأعلى رتبة."
    },
    {
        title: "المحطة الخامسة: المنصة والميكروفون",
        scenario: "أين يوضع الميكروفون عادةً عند تنسيق المنصة (Podium)؟",
        options: {
            "أ": "أ) في منتصف المسرح تماماً.",
            "ب": "ب) في يسار المسرح من وجهة نظر الجمهور.",
            "ج": "ج) في يمين المسرح (شمال من وجهة نظر الجمهور).",
            "د": "د) خارج المنصة."
        },
        correct: "ج",
        wrongMessage: "إجابة خاطئة! يوضع يمين المنصة للمتحدث (شمال الجمهور)."
    },
    {
        title: "المحطة السادسة: قواعد الجلوس",
        scenario: "في قواعد الجلوس والوقوف الرسمية (قاعدة المنتصف)، أين تجلس الشخصية ذات الرتبة الأولى (الأعلى رتبة)؟",
        options: {
            "أ": "أ) على أقصى اليمين.",
            "ب": "ب) على أقصى اليسار.",
            "ج": "ج) خلف الحضور.",
            "د": "د) في المنتصف تماماً، وتكون الرتبة الثانية على يمينها والرتبة الثالثة على يسارها."
        },
        correct: "د",
        wrongMessage: "إجابة خاطئة! الشخصية الأعلى رتبة تجلس بالمنتصف دائماً."
    },
    {
        title: "المحطة السابعة: تجهيز المنصة",
        scenario: "ما هو الإتيكيت الخاص بتجهيز زجاجة المياه على المنصة؟",
        options: {
            "أ": "أ) أن تكون زجاجة مغلقة ومكتوب عليها السعر.",
            "ب": "ب) أن تكون زجاجة مياه (بدون ليبل تجاري إن أمكن) ومعها كوب زجاجي نظيف جاهزين دائماً.",
            "ج": "ج) منع وضع المياه على المنصة نهائياً.",
            "د": "د) وضع مشروبات ساخنة بدلاً من المياه."
        },
        correct: "ب",
        wrongMessage: "إجابة خاطئة! الزجاجة بدون ليبل ومعها كوب نظيف."
    },
    {
        title: "المحطة الثامنة: استقبال الـ VIPs",
        scenario: "ما هي الخطوات المتبعة عند التعامل مع ضيوف الـ (VIPs) عند باب القاعة؟",
        options: {
            "أ": "أ) تجاهلهم حتى يدخلوا بمفردهم.",
            "ب": "ب) التعرف على الـ (VIP)، الترحيب بهم بأسلوب لائق، وتسليمهم مباشرة إلى مسؤول العلاقات العامة (PR).",
            "ج": "ج) طلب التذاكر منهم.",
            "د": "د) إيقافهم خارج الأبواب لحين امتلاء القاعة."
        },
        correct: "ب",
        wrongMessage: "إجابة خاطئة! الترحيب بأسلوب لائق وتسليمهم لمسؤول الـ PR هو التصرف الصحيح."
    },
    {
        title: "المحطة التاسعة: التواصل الفعال",
        scenario: "أي من العبارات التالية يمثل قاعدة صحيحة في التواصل الفعال (Communication Etiquette)؟",
        options: {
            "أ": "أ) مقاطعة المتحدث لإثبات وجهة نظرك بسرعة.",
            "ب": "ب) السخرية من الشخص الآخر لكسر الجليد.",
            "ج": "ج) التحدث بنبرة هادئة وواثقة، وعدم مقاطعة المتحدث مع إظهار الاهتمام أثناء الاستماع.",
            "د": "د) المزاح دائماً في كل الأوقات."
        },
        correct: "ج",
        wrongMessage: "إجابة خاطئة! الاستماع الجيد وعدم المقاطعة أساس التواصل الفعال."
    },
    {
        title: "المحطة العاشرة: التنسيق بين اللجان",
        scenario: "ما هي إحدى خطوات التنسيق المشترك بين اللجان (Cross-Committee Coordination) أثناء الفعالية؟",
        options: {
            "أ": "أ) العشوائية في تنفيذ المهام.",
            "ب": "ب) تجنب التواصل نهائياً بين اللجان.",
            "ج": "ج) تحديد الأدوار، ونقطة التسليم والتسلم، والتواصل الصامت واللاسلكي، وإدارة الأزمات المشتركة.",
            "د": "د) الاعتماد على الفردية في اتخاذ القرار."
        },
        correct: "ج",
        wrongMessage: "إجابة خاطئة! تحديد الأدوار ونقاط التسليم بوضوح."
    }
];

let currentStage = 0;
let playerName = "";
let score = 0;

const emojis = ["🧐", "💡", "🔍", "😎", "🎯", "🌟", "🏆", "🧠", "💼", "🔥"];

function startGame() {
    const nameInput = document.getElementById('player-name').value;
    if (nameInput.trim() === "") {
        alert("من فضلك اكتب اسمك لتبدأ المغامرة!");
        return;
    }
    playerName = nameInput;
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    loadStage();
}

function loadStage() {
    if (currentStage < stages.length) {
        const stage = stages[currentStage];
        document.getElementById('room-title').innerText = stage.title;
        document.getElementById('scenario-text').innerText = stage.scenario;
        document.getElementById('stage-counter').innerText = `المحطة ${currentStage + 1} من ${stages.length}`;
        
        // تحديث شريط التقدم والشخصية
        const progressPercent = ((currentStage + 1) / stages.length) * 100;
        document.getElementById('progress-fill').style.width = `${progressPercent}%`;
        document.getElementById('avatar-emoji').innerText = emojis[currentStage % emojis.length];

        const feedbackElement = document.getElementById('feedback');
        feedbackElement.innerText = '';

        const buttons = document.querySelectorAll('.options-container .btn');
        const optionsKeys = Object.keys(stage.options);
        
        buttons.forEach((button, index) => {
            const key = optionsKeys[index];
            button.innerText = stage.options[key];
            button.dataset.key = key;
            button.disabled = false;
        });
    } else {
        openSafe();
    }
}

function checkAnswer(selectedKey) {
    const stage = stages[currentStage];
    const feedbackElement = document.getElementById('feedback');
    const buttons = document.querySelectorAll('.options-container .btn');

    buttons.forEach(btn => btn.disabled = true);

    if (selectedKey === stage.correct) {
        score += 1; // زيادة نقطة واحدة
        feedbackElement.style.color = '#10b981';
        feedbackElement.innerText = "أحسنت! إجابة صحيحة. جاري الانتقال...";
    } else {
        feedbackElement.style.color = '#ef4444';
        feedbackElement.innerText = stage.wrongMessage;
    }

    setTimeout(() => {
        currentStage++;
        if (currentStage < stages.length) {
            loadStage();
        } else {
            openSafe();
        }
    }, 1500);
}

// توليد كود عشوائي بعدد أرقام يساوي السكور
function generateCode(length) {
    if (length === 0) return "لا يوجد كود (0)";
    let code = "";
    for (let i = 0; i < length; i++) {
        code += Math.floor(Math.random() * 10);
    }
    return code;
}

function openSafe() {
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('safe-screen').style.display = 'block';

    const code = generateCode(score);
    document.getElementById('generated-code').innerText = code;
    document.getElementById('final-score-text').innerText = `النتيجة النهائية: ${score} من 10`;

    const messageText = document.getElementById('final-message-text');
    const safeAvatar = document.getElementById('safe-avatar');

    if (score === 10) {
        safeAvatar.innerText = "👑🏆";
        messageText.innerText = `مبهر يا ${playerName}! أداء أسطوري واحترافي 10/10! أثبتّ أنك خبير بروتوكول وإتيكيت من الطراز الأول واستحققت الخروج من الغرفة بجدارة!`;
    } else if (score >= 7) {
        safeAvatar.innerText = "🎉🔓";
        messageText.innerText = `عاش يا ${playerName}! نتيجة ممتازة جداً، قدراتك عالية وكود الخزنة فتح معاك بنجاح!`;
    } else if (score >= 5) {
        safeAvatar.innerText = "🔑👍";
        messageText.innerText = `محاولة جيدة يا ${playerName}! فتحت الخزنة بكود جزئي، وتقدر تحسن سكورك أكتر المرة الجاية.`;
    } else {
        safeAvatar.innerText = "🔒😅";
        messageText.innerText = `حاول مرة تانية يا ${playerName}! كود الخزنة قصير المرة دي، راجع قواعد الإتيكيت والبروتوكول وجرب تاني!`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.options-container .btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedKey = button.dataset.key;
            checkAnswer(selectedKey);
        });
    });
});
