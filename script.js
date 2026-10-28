const stages = [
    { scenario: "ما هو الفرق الأساسي بين الإتيكيت والبروتوكول من حيث الإلزام؟", options: { "أ": "أ) الإتيكيت إلزامي والبروتوكول اختياري.", "ب": "ب) الإتيكيت قواعد السلوك والالتزام بها إلزامي...", "ج": "ج) الإتيكيت قواعد التعامل في المواقف الرسمية واتباعها مفضل ومخالفتها لا يترتب عليها ضرر، بينما البروتوكول قواعد السلوك واللباقة والالتزام به إلزامي.", "د": "د) كلاهما غير ملزم على الإطلاق." }, correct: "ج" },
    { scenario: "أي مما يلي يُعد من لغة الجسد السلبية (Don't Do) أثناء التعامل الرسمي؟", options: { "أ": "أ) الوقوف بشكل مستقيم.", "ب": "ب) الحفاظ على تواصل بصري سليم.", "ج": "ج) تشبيك الذراعين بشكل دفاعي.", "د": "د) ابتسامة وتعبير وجه هادئ." }, correct: "ج" },
    { scenario: "ما هي القاعدة الذهبية في التقديم والتعريف بالشخصيات؟", options: { "أ": "أ) يتم تقديم الشخص الأعلى رتبة إلى الشخص الأقل رتبة دائماً.", "ب": "ب) يتم تقديم الشخص 'الأقل رتبة' إلى الشخص 'الأعلى رتبة'، وليس العكس.", "ج": "ج) لا توجد قاعدة محددة للتقديم.", "د": "د) يتم تقديم الشخص حسب العمر بغض النظر عن الرتبة." }, correct: "ب" },
    { scenario: "كيف يتم ترتيب الكلمات والخطابات الرسمية على المسرح (المنصة)؟", options: { "أ": "أ) تبدأ بالشخص الأعلى رتبة وتنتهي بالأقل رتبة.", "ب": "ب) تتحدث الشخصيات عشوائياً.", "ج": "ج) تبدأ دائماً بالشخص الأقل رتبة وتتصاعد حتى يتحدث الشخص الأعلى رتبة في النهاية.", "د": "د) كلمة واحدة فقط لرئيس الحفل." }, correct: "ج" },
    { scenario: "أين يوضع الميكروفون عادةً عند تنسيق المنصة (Podium)؟", options: { "أ": "أ) في منتصف المسرح تماماً.", "ب": "ب) في يسار المسرح من وجهة نظر الجمهور.", "ج": "ج) في يمين المسرح (شمال من وجهة نظر الجمهور).", "د": "د) خارج المنصة." }, correct: "ج" },
    { scenario: "في قواعد الجلوس والوقوف الرسمية (قاعدة المنتصف)، أين تجلس الشخصية ذات الرتبة الأولى (الأعلى رتبة)؟", options: { "أ": "أ) على أقصى اليمين.", "ب": "ب) على أقصى اليسار.", "ج": "ج) خلف الحضور.", "د": "د) في المنتصف تماماً، وتكون الرتبة الثانية على يمينها والرتبة الثالثة على يسارها." }, correct: "د" },
    { scenario: "ما هو الإتيكيت الخاص بتجهيز زجاجة المياه على المنصة؟", options: { "أ": "أ) أن تكون زجاجة مغلقة ومكتوب عليها السعر.", "ب": "ب) أن تكون زجاجة مياه (بدون ليبل تجاري إن أمكن) ومعها كوب زجاجي نظيف جاهزين دائماً.", "ج": "ج) منع وضع المياه على المنصة نهائياً.", "د": "د) وضع مشروبات ساخنة بدلاً من المياه." }, correct: "ب" },
    { scenario: "ما هي الخطوات المتبعة عند التعامل مع ضيوف الـ (VIPs) عند باب القاعة؟", options: { "أ": "أ) تجاهلهم حتى يدخلوا بمفردهم.", "ب": "ب) التعرف على الـ (VIP)، الترحيب بهم بأسلوب لائق، وتسليمهم مباشرة إلى مسؤول العلاقات العامة (PR).", "ج": "ج) طلب التذاكر منهم.", "د": "د) إيقافهم خارج الأبواب لحين امتلاء القاعة." }, correct: "ب" },
    { scenario: "أي من العبارات التالية يمثل قاعدة صحيحة في التواصل الفعال (Communication Etiquette)؟", options: { "أ": "أ) مقاطعة المتحدث لإثبات وجهة نظرك بسرعة.", "ب": "ب) السخرية من الشخص الآخر لكسر الجليد.", "ج": "ج) التحدث بنبرة هادئة وواثقة، وعدم مقاطعة المتحدث مع إظهار الاهتمام أثناء الاستماع.", "د": "د) المزاح دائماً في كل الأوقات." }, correct: "ج" },
    { scenario: "ما هي إحدى خطوات التنسيق المشترك بين اللجان (Cross-Committee Coordination) أثناء الفعالية؟", options: { "أ": "أ) العشوائية في تنفيذ المهام.", "ب": "ب) تجنب التواصل نهائياً بين اللجان.", "ج": "ج) تحديد الأدوار، ونقطة التسليم والتسلم، والتواصل الصامت واللاسلكي، وإدارة الأزمات المشتركة.", "د": "د) الاعتماد على الفردية في اتخاذ القرار." }, correct: "ج" }
];

let currentStage = 0;
let score = 0;
let secretCode = "";

function startGame() {
    const playerName = document.getElementById('player-name').value;
    if (playerName.trim() === "") {
        alert("من فضلك اكتبي اسمكِ للبدء!");
        return;
    }
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    loadStage();
}

function loadStage() {
    if (currentStage < stages.length) {
        const stage = stages[currentStage];
        document.getElementById('scenario-text').innerText = stage.scenario;
        
        const feedbackElement = document.getElementById('feedback');
        feedbackElement.innerText = '';

        const buttons = document.querySelectorAll('#options-container .btn');
        const optionsKeys = Object.keys(stage.options);
        
        buttons.forEach((button, index) => {
            const key = optionsKeys[index];
            button.innerText = stage.options[key];
            button.disabled = false;
        });
    } else {
        showSafeScreen();
    }
}

function checkAnswer(selectedKey) {
    const stage = stages[currentStage];
    const feedbackElement = document.getElementById('feedback');
    const buttons = document.querySelectorAll('#options-container .btn');

    buttons.forEach(btn => btn.disabled = true);

    if (selectedKey === stage.correct) {
        score += 1;
        feedbackElement.style.color = '#10b981';
        feedbackElement.innerText = "إجابة صحيحة!";
    } else {
        feedbackElement.style.color = '#ef4444';
        feedbackElement.innerText = "إجابة خاطئة!";
    }

    setTimeout(() => {
        currentStage++;
        if (currentStage < stages.length) {
            loadStage();
        } else {
            showSafeScreen();
        }
    }, 1200);
}

function generateCode(length) {
    if (length === 0) return "0";
    let code = "";
    for (let i = 0; i < length; i++) {
        code += Math.floor(Math.random() * 10);
    }
    return code;
}

function showSafeScreen() {
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('safe-screen').style.display = 'block';

    secretCode = generateCode(score);
    document.getElementById('generated-code').innerText = secretCode;
    document.getElementById('final-score-text').innerText = `حصلتِ على ${score} من 10`;
}

function verifyCode() {
    const enteredCode = document.getElementById('code-input').value;
    const codeFeedback = document.getElementById('code-feedback');

    if (enteredCode.trim() === secretCode) {
        document.getElementById('safe-screen').style.display = 'none';
        document.getElementById('message-screen').style.display = 'block';
        showMessage();
    } else {
        codeFeedback.style.color = '#ef4444';
        codeFeedback.innerText = "الكود غير صحيح، تأكدي من إدخاله بدقة.";
    }
}

function showMessage() {
    const messageTitle = document.getElementById('message-title');
    const finalMessageText = document.getElementById('final-message-text');

    if (score === 10) {
        messageTitle.innerText = "أداء أسطوري واحترافي!";
        finalMessageText.innerText = "مبروك! لقد حصلتِ على العلامة الكاملة 10/10 وأثبتّ أنكِ خبيرة إتيكيت وبروتوكول من الطراز الأول واستحققتِ فتح الخزنة بجدارة!";
    } else if (score >= 7) {
        messageTitle.innerText = "عمل ممتاز!";
        finalMessageText.innerText = "نتيجة رائعة جداً! لديكِ معرفة ممتازة بقواعد الإتيكيت والبروتوكول.";
    } else if (score >= 5) {
        messageTitle.innerText = "محاولة جيدة!";
        finalMessageText.innerText = "نجحتِ في الحصول على كود الخزنة وفتحها، ويمكنكِ دائماً تطوير مهاراتكِ أكثر.";
    } else {
        messageTitle.innerText = "محاولة تحتاج للتطوير";
        finalMessageText.innerText = "الكود كان قصيراً هذه المرة، ننصحكِ بمراجعة قواعد الإتيكيت والبروتوكول مجدداً.";
    }
}
