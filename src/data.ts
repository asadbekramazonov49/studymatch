// Static content. Names and short texts come in three languages: en | ru | uz.
export type L3 = { en: string; ru: string; uz: string };

// [category, en, ru, uz, description en, ru, uz]
const M: string[][] = [
  ['STEM','Computer Science','Информатика','Kompyuter fanlari','Programming, algorithms, systems and how software is built.','Программирование, алгоритмы, системы и создание программ.','Dasturlash, algoritmlar, tizimlar va dasturiy ta’minot yaratish.'],
  ['STEM','Data Science','Наука о данных','Ma’lumotlar fani','Statistics and code used to find answers in data.','Статистика и программирование для поиска ответов в данных.','Ma’lumotlardan javob topish uchun statistika va dasturlash.'],
  ['STEM','Artificial Intelligence','Искусственный интеллект','Sun’iy intellekt','Machine learning, language and vision models, ethics of AI.','Машинное обучение, модели языка и зрения, этика ИИ.','Mashinali o‘qitish, til va tasvir modellari, SI axloqi.'],
  ['STEM','Mathematics','Математика','Matematika','Proof-based study of numbers, structures and patterns.','Доказательное изучение чисел, структур и закономерностей.','Sonlar, tuzilmalar va qonuniyatlarni isbotlar orqali o‘rganish.'],
  ['STEM','Physics','Физика','Fizika','How matter, energy, space and time behave.','Как ведут себя материя, энергия, пространство и время.','Materiya, energiya, fazo va vaqt qanday ishlashi.'],
  ['STEM','Chemistry','Химия','Kimyo','Substances, reactions and the lab work behind them.','Вещества, реакции и лабораторная работа.','Moddalar, reaksiyalar va laboratoriya ishlari.'],
  ['STEM','Biology','Биология','Biologiya','Living things from cells to ecosystems.','Живые организмы от клеток до экосистем.','Hujayradan ekotizimgacha tirik mavjudotlar.'],
  ['STEM','Mechanical Engineering','Машиностроение','Mashinasozlik muhandisligi','Design of machines, engines and manufacturing systems.','Проектирование машин, двигателей и производства.','Mashinalar, dvigatellar va ishlab chiqarish tizimlarini loyihalash.'],
  ['STEM','Electrical Engineering','Электротехника','Elektrotexnika muhandisligi','Circuits, power, signals and embedded hardware.','Схемы, энергетика, сигналы и встроенная электроника.','Sxemalar, energetika, signallar va o‘rnatilgan elektronika.'],
  ['STEM','Civil Engineering','Строительная инженерия','Qurilish muhandisligi','Bridges, roads, buildings and water systems.','Мосты, дороги, здания и водные системы.','Ko‘priklar, yo‘llar, binolar va suv tizimlari.'],
  ['Business','Business Administration','Менеджмент','Biznesni boshqarish','How organisations are run: strategy, operations, people.','Как управляют организациями: стратегия, операции, люди.','Tashkilotlar qanday boshqariladi: strategiya, jarayonlar, odamlar.'],
  ['Business','Economics','Экономика','Iqtisodiyot','Markets, incentives and policy, with a lot of statistics.','Рынки, стимулы и политика, много статистики.','Bozorlar, rag‘batlar va siyosat, ko‘p statistika bilan.'],
  ['Business','Finance','Финансы','Moliya','Investment, risk, banking and corporate money decisions.','Инвестиции, риски, банки и корпоративные решения.','Investitsiya, xavf, bank ishi va korporativ moliyaviy qarorlar.'],
  ['Business','Accounting','Бухгалтерский учёт','Buxgalteriya hisobi','Recording and auditing the financial health of a business.','Учёт и аудит финансового состояния бизнеса.','Biznesning moliyaviy holatini yuritish va tekshirish.'],
  ['Business','Marketing','Маркетинг','Marketing','Understanding customers and building brands people choose.','Понимание клиентов и создание брендов.','Mijozlarni tushunish va brend yaratish.'],
  ['Business','Entrepreneurship','Предпринимательство','Tadbirkorlik','Starting and growing ventures; pitching, product, first customers.','Запуск и рост проектов: питчи, продукт, первые клиенты.','Loyiha boshlash va rivojlantirish: taqdimot, mahsulot, birinchi mijozlar.'],
  ['Health','Medicine','Медицина','Tibbiyot','Human body, diagnosis and treatment; long, demanding training.','Тело человека, диагностика и лечение; долгая подготовка.','Inson tanasi, tashxis va davolash; uzoq va qiyin tayyorgarlik.'],
  ['Health','Pharmacy','Фармация','Farmatsevtika','How drugs are made, tested and used safely.','Как создают, проверяют и безопасно применяют лекарства.','Dorilar qanday yaratiladi, sinaladi va xavfsiz qo‘llanadi.'],
  ['Health','Public Health','Общественное здравоохранение','Jamoat salomatligi','Preventing disease and improving health across populations.','Профилактика болезней и здоровье населения.','Kasalliklarning oldini olish va aholi salomatligini yaxshilash.'],
  ['Social','Psychology','Психология','Psixologiya','Behaviour and the mind, with research methods and statistics.','Поведение и психика, методы исследований и статистика.','Xulq-atvor va ong, tadqiqot usullari va statistika.'],
  ['Social','Law','Право','Huquqshunoslik','Legal systems, argument and how rules are made and applied.','Правовые системы, аргументация, создание и применение норм.','Huquqiy tizimlar, dalillash, qoidalar yaratilishi va qo‘llanishi.'],
  ['Social','International Relations','Международные отношения','Xalqaro munosabatlar','Diplomacy, security and how states and institutions interact.','Дипломатия, безопасность и взаимодействие государств.','Diplomatiya, xavfsizlik va davlatlar o‘rtasidagi munosabatlar.'],
  ['Social','Political Science','Политология','Siyosatshunoslik','Power, governments and public decision-making.','Власть, государство и принятие решений.','Hokimiyat, davlat boshqaruvi va qarorlar qabul qilish.'],
  ['Social','Sociology','Социология','Sotsiologiya','How groups and societies work and change.','Как устроены и меняются группы и общества.','Guruhlar va jamiyatlar qanday ishlashi va o‘zgarishi.'],
  ['Social','Education','Педагогика','Pedagogika','How people learn and how to teach well.','Как люди учатся и как хорошо учить.','Odamlar qanday o‘rganishi va yaxshi o‘qitish usullari.'],
  ['Humanities','Linguistics','Лингвистика','Tilshunoslik','The structure, sound and history of languages.','Строение, звучание и история языков.','Tillarning tuzilishi, tovushlari va tarixi.'],
  ['Humanities','Literature','Литература','Adabiyot','Reading closely and writing about stories and poetry.','Внимательное чтение и письмо о прозе и поэзии.','Nasr va she’riyatni sinchiklab o‘qish va ular haqida yozish.'],
  ['Humanities','History','История','Tarix','Evidence, sources and how we explain the past.','Источники, свидетельства и объяснение прошлого.','Manbalar, dalillar va o‘tmishni izohlash.'],
  ['Humanities','Philosophy','Философия','Falsafa','Logic, ethics and big questions, argued carefully.','Логика, этика и большие вопросы.','Mantiq, axloq va katta savollar.'],
  ['Humanities','Journalism','Журналистика','Jurnalistika','Reporting, verifying facts and telling stories for an audience.','Репортаж, проверка фактов и истории для аудитории.','Reportaj, faktlarni tekshirish va auditoriya uchun hikoya.'],
  ['Design','Graphic Design','Графический дизайн','Grafik dizayn','Visual communication: type, layout, identity, interfaces.','Визуальная коммуникация: шрифт, вёрстка, айдентика, интерфейсы.','Vizual muloqot: shrift, maket, brend, interfeyslar.'],
  ['Design','Architecture','Архитектура','Arxitektura','Designing buildings and spaces; studio work and drawing.','Проектирование зданий и пространств; студийная работа.','Bino va makonlarni loyihalash; studiya ishi va chizmachilik.'],
];
export const MAJORS = M.map(([cat, en, ru, uz, den, dru, duz]) => ({
  cat, en, name: { en, ru, uz } as L3, desc: { en: den, ru: dru, uz: duz } as L3,
}));
export const MAJOR_CATS = ['STEM', 'Business', 'Health', 'Social', 'Humanities', 'Design'];

export type Guide = {
  id: string; cat: 'IELTS' | 'SAT' | 'Abroad' | 'Scholarships' | 'Resources';
  title: L3; sum: L3; pts: { en: string[]; ru: string[]; uz: string[] };
  links: { l: string; u: string }[];
};
export const GUIDES: Guide[] = [
  {
    id: 'ielts', cat: 'IELTS',
    title: { en: 'IELTS: what to expect and how to prepare', ru: 'IELTS: что ожидать и как готовиться', uz: 'IELTS: nimalar kutadi va qanday tayyorlanish kerak' },
    sum: { en: 'The English test most universities abroad accept. Scores run from 0 to 9.', ru: 'Тест по английскому, который принимает большинство зарубежных вузов. Баллы от 0 до 9.', uz: 'Chet eldagi ko‘plab universitetlar qabul qiladigan ingliz tili testi. Ballar 0 dan 9 gacha.' },
    pts: {
      en: [
        'Academic IELTS has four parts: Listening (about 30 minutes), Reading (60), Writing (60) and Speaking (11–14, face to face).',
        'Each part gets a band from 0 to 9, plus an overall band. Check the minimum your university asks for in every part, not only the overall score.',
        'Writing has two tasks: describe a chart or process in at least 150 words, then write an essay of at least 250 words. Task 2 counts for more.',
        'Practise under timed conditions at least once a week and ask someone to mark your writing and speaking.',
        'You can take it on paper or on a computer. Book through the British Council, IDP or the official site.',
      ],
      ru: [
        'Academic IELTS состоит из четырёх частей: аудирование (около 30 минут), чтение (60), письмо (60) и говорение (11–14, лично).',
        'За каждую часть ставят балл от 0 до 9 и общий балл. Проверьте минимальный балл вуза по каждой части, а не только общий.',
        'В письме два задания: описать график или процесс (от 150 слов), затем эссе (от 250 слов). Задание 2 весит больше.',
        'Тренируйтесь с таймером минимум раз в неделю и просите кого-нибудь проверять письмо и говорение.',
        'Сдавать можно на бумаге или на компьютере. Регистрация через British Council, IDP или официальный сайт.',
      ],
      uz: [
        'Academic IELTS to‘rt qismdan iborat: Listening (taxminan 30 daqiqa), Reading (60), Writing (60) va Speaking (11–14, yuzma-yuz).',
        'Har bir qism uchun 0 dan 9 gacha ball va umumiy ball qo‘yiladi. Universitet talab qilgan minimal ballni har bir qism bo‘yicha tekshiring.',
        'Writing’da ikkita topshiriq bor: grafik yoki jarayonni tasvirlash (kamida 150 so‘z), keyin esse (kamida 250 so‘z). 2-topshiriq muhimroq.',
        'Haftasiga kamida bir marta vaqtni o‘lchab mashq qiling va yozma hamda og‘zaki javoblaringizni birovga tekshirtiring.',
        'Qog‘ozda yoki kompyuterda topshirish mumkin. British Council, IDP yoki rasmiy sayt orqali ro‘yxatdan o‘ting.',
      ],
    },
    links: [{ l: 'IELTS official', u: 'https://ielts.org' }, { l: 'British Council', u: 'https://takeielts.britishcouncil.org' }, { l: 'IDP IELTS', u: 'https://ielts.idp.com' }],
  },
  {
    id: 'sat', cat: 'SAT',
    title: { en: 'Digital SAT: format and free practice', ru: 'Цифровой SAT: формат и бесплатная практика', uz: 'Raqamli SAT: format va bepul mashq' },
    sum: { en: 'A standardised test used for US admissions. The digital SAT is scored from 400 to 1600.', ru: 'Стандартизированный тест для поступления в США. Цифровой SAT оценивается от 400 до 1600.', uz: 'AQSh’ga qabul uchun standart test. Raqamli SAT 400 dan 1600 gacha baholanadi.' },
    pts: {
      en: [
        'Two sections: Reading and Writing (64 minutes, 54 questions) and Math (70 minutes, 44 questions).',
        'It is adaptive: how you do on the first module of a section decides how hard the second one is.',
        'You take it on a laptop or tablet in the Bluebook app. A calculator is allowed for the whole Math section.',
        'Official practice is free: full practice tests in Bluebook and Official Digital SAT Prep on Khan Academy.',
        'Policies change. Some universities require scores, others make them optional. Check each one before you register.',
      ],
      ru: [
        'Две секции: чтение и письмо (64 минуты, 54 вопроса) и математика (70 минут, 44 вопроса).',
        'Тест адаптивный: результат первого модуля секции определяет сложность второго.',
        'Сдают на ноутбуке или планшете в приложении Bluebook. Калькулятор разрешён на всей секции математики.',
        'Официальная практика бесплатна: полные пробные тесты в Bluebook и подготовка на Khan Academy.',
        'Правила меняются. Одни вузы требуют баллы, другие нет. Проверяйте каждый вуз до регистрации.',
      ],
      uz: [
        'Ikki bo‘lim: Reading and Writing (64 daqiqa, 54 savol) va Math (70 daqiqa, 44 savol).',
        'Test moslashuvchan: bo‘limning birinchi modulidagi natijangiz ikkinchisining qiyinligini belgilaydi.',
        'Noutbuk yoki planshetda Bluebook ilovasida topshiriladi. Math bo‘limida kalkulyator ruxsat etiladi.',
        'Rasmiy mashq bepul: Bluebook’dagi to‘liq sinov testlari va Khan Academy’dagi tayyorgarlik.',
        'Qoidalar o‘zgaradi. Ba’zi universitetlar ball talab qiladi, boshqalari yo‘q. Ro‘yxatdan oldin har birini tekshiring.',
      ],
    },
    links: [{ l: 'College Board SAT', u: 'https://satsuite.collegeboard.org' }, { l: 'Khan Academy', u: 'https://www.khanacademy.org' }],
  },
  {
    id: 'abroad', cat: 'Abroad',
    title: { en: 'Studied abroad: getting your diploma recognised in Uzbekistan', ru: 'Учились за рубежом: признание диплома в Узбекистане', uz: 'Chet elda o‘qiganlar: diplomni O‘zbekistonda tan oldirish' },
    sum: { en: 'Graduates of top-ranked foreign universities do not need special exams to have a diploma recognised.', ru: 'Выпускникам вузов из топ-рейтингов не нужны специальные экзамены для признания диплома.', uz: 'Yuqori reytingdagi xorijiy universitetlar bitiruvchilariga diplomni tan oldirish uchun maxsus imtihon kerak emas.' },
    pts: {
      en: [
        'Since 2019, Uzbekistan recognises diplomas from foreign universities ranked in the top 1,000 of QS, Times Higher Education or ARWU without special tests (presidential decree PQ-4119).',
        'The Ministry of Higher Education, Science and Innovation published the list of these universities in January 2025.',
        'Diplomas earned on state quotas, grants or targeted-training programmes are also recognised without extra requirements.',
        'Uzbekistan has ratified the UNESCO Global Convention on recognition of higher-education qualifications. It requires fair, transparent assessment, including partial recognition.',
        'Applications go through public service centres or the unified public services portal (my.gov.uz).',
        'Rules change, so confirm the current procedure on gov.uz before you apply.',
      ],
      ru: [
        'С 2019 года Узбекистан признаёт дипломы иностранных вузов из первой тысячи QS, Times Higher Education или ARWU без специальных испытаний (указ ПП-4119).',
        'Министерство высшего образования, науки и инноваций опубликовало список таких вузов в январе 2025 года.',
        'Дипломы, полученные по госквотам, грантам или программам целевой подготовки, тоже признаются без дополнительных требований.',
        'Узбекистан ратифицировал Глобальную конвенцию ЮНЕСКО о признании квалификаций высшего образования: оценка должна быть справедливой и прозрачной, включая частичное признание.',
        'Заявления подаются через центры госуслуг или единый портал госуслуг (my.gov.uz).',
        'Правила меняются, поэтому перед подачей уточните процедуру на gov.uz.',
      ],
      uz: [
        '2019-yildan boshlab O‘zbekiston QS, Times Higher Education yoki ARWU bo‘yicha dastlabki 1000 talikka kirgan xorijiy universitetlar diplomlarini maxsus sinovlarsiz tan oladi (PQ-4119-son farmon).',
        'Oliy ta’lim, fan va innovatsiyalar vazirligi bunday universitetlar ro‘yxatini 2025-yil yanvarida e’lon qildi.',
        'Davlat kvotalari, grantlar yoki maqsadli tayyorlash dasturlari hisobiga olingan diplomlar ham qo‘shimcha talablarsiz tan olinadi.',
        'O‘zbekiston YUNESKOning oliy ta’lim malakalarini tan olish bo‘yicha Global konventsiyasini ratifikatsiya qildi. U adolatli va shaffof baholashni, jumladan qisman tan olishni talab qiladi.',
        'Arizalar davlat xizmatlari markazlari yoki yagona interaktiv davlat xizmatlari portali (my.gov.uz) orqali topshiriladi.',
        'Qoidalar o‘zgaradi, shuning uchun topshirishdan oldin joriy tartibni gov.uz da tekshiring.',
      ],
    },
    links: [
      { l: 'kun.uz: top-1000 rule (2019)', u: 'https://kun.uz/en/news/2019/01/17/uzbekistan-now-nostrifies-graduates-of-top-1000-universities-of-the-world' },
      { l: 'kun.uz: list of universities (2025)', u: 'https://kun.uz/en/news/2025/01/25/list-of-higher-education-institutions-with-direct-diploma-recognition-in-uzbekistan-approved' },
      { l: 'gov.uz', u: 'https://gov.uz' },
    ],
  },
  {
    id: 'scholar', cat: 'Scholarships',
    title: { en: 'Scholarships to look at first', ru: 'Стипендии, с которых стоит начать', uz: 'Birinchi navbatda ko‘rib chiqiladigan stipendiyalar' },
    sum: { en: 'Programmes open to citizens of Uzbekistan. Always check the official site for current rules and deadlines.', ru: 'Программы для граждан Узбекистана. Актуальные правила и сроки смотрите на официальных сайтах.', uz: 'O‘zbekiston fuqarolari uchun dasturlar. Joriy qoidalar va muddatlarni rasmiy saytdan tekshiring.' },
    pts: {
      en: [
        'Chevening (UK, one-year master’s): open to citizens of Uzbekistan. Applications usually open in the summer and close in autumn.',
        'Islamic Development Bank scholarships: master’s and PhD for citizens of member countries, which include Uzbekistan, with a commitment to work in a member country afterwards.',
        'UWC: need-based scholarships for the two-year IB Diploma, applied for through the UWC Uzbekistan National Committee.',
        'Tashkent International School: up to three full Grade 10 scholarships a year for Uzbek citizens from Uzbek national schools.',
        'Also worth checking: DAAD (Germany), Türkiye Burslari (Turkey), Stipendium Hungaricum (Hungary), GKS (Korea) and CSC (China).',
      ],
      ru: [
        'Chevening (Великобритания, магистратура на год): открыта для граждан Узбекистана. Приём заявок обычно летом, дедлайн осенью.',
        'Стипендии Исламского банка развития: магистратура и PhD для граждан стран-членов, включая Узбекистан, с обязательством работать в стране-члене.',
        'UWC: стипендии по потребности на двухлетний IB Diploma через Национальный комитет UWC Узбекистан.',
        'Tashkent International School: до трёх полных стипендий в 10 класс ежегодно для граждан Узбекистана из национальных школ.',
        'Стоит также проверить: DAAD (Германия), Türkiye Burslari (Турция), Stipendium Hungaricum (Венгрия), GKS (Корея), CSC (Китай).',
      ],
      uz: [
        'Chevening (Buyuk Britaniya, bir yillik magistratura): O‘zbekiston fuqarolari uchun ochiq. Arizalar odatda yozda boshlanib, kuzda yopiladi.',
        'Islom taraqqiyot banki stipendiyalari: a’zo davlatlar, jumladan O‘zbekiston fuqarolari uchun magistratura va PhD, keyin a’zo davlatda ishlash sharti bilan.',
        'UWC: ikki yillik IB Diploma uchun ehtiyojga qarab beriladigan stipendiyalar, UWC O‘zbekiston Milliy qo‘mitasi orqali.',
        'Tashkent International School: O‘zbekiston milliy maktablaridan kelgan fuqarolar uchun yiliga uchtagacha to‘liq 10-sinf stipendiyasi.',
        'Yana tekshirib ko‘ring: DAAD (Germaniya), Türkiye Burslari (Turkiya), Stipendium Hungaricum (Vengriya), GKS (Koreya), CSC (Xitoy).',
      ],
    },
    links: [
      { l: 'Chevening', u: 'https://www.chevening.org' }, { l: 'UWC Uzbekistan', u: 'https://uz.uwc.org' },
      { l: 'Tashkent Intl School', u: 'https://www.tashschool.org' }, { l: 'DAAD', u: 'https://www.daad.de' },
      { l: 'Türkiye Burslari', u: 'https://turkiyeburslari.gov.tr' }, { l: 'Stipendium Hungaricum', u: 'https://stipendiumhungaricum.hu' },
    ],
  },
  {
    id: 'resources', cat: 'Resources',
    title: { en: 'Free resources worth bookmarking', ru: 'Бесплатные ресурсы для закладок', uz: 'Xatcho‘pga qo‘shishga arziydigan bepul manbalar' },
    sum: { en: 'Official and well-known free sites for exam practice and academic English.', ru: 'Официальные и известные бесплатные сайты для практики экзаменов и академического английского.', uz: 'Imtihon mashqi va akademik ingliz tili uchun rasmiy va mashhur bepul saytlar.' },
    pts: {
      en: ['Khan Academy and the Bluebook app give free official digital SAT practice.', 'British Council LearnEnglish and BBC Learning English have free listening and reading practice that helps with IELTS.', 'Purdue OWL explains grammar, essay structure and citation for free.', 'Use Practice in Materials for short sample tests written for Studymatch.'],
      ru: ['Khan Academy и приложение Bluebook дают бесплатную официальную практику цифрового SAT.', 'British Council LearnEnglish и BBC Learning English — бесплатная практика аудирования и чтения, полезная для IELTS.', 'Purdue OWL бесплатно объясняет грамматику, структуру эссе и цитирование.', 'В разделе «Практика» в Материалах есть короткие пробные тесты, написанные для Studymatch.'],
      uz: ['Khan Academy va Bluebook ilovasi raqamli SAT uchun bepul rasmiy mashq beradi.', 'British Council LearnEnglish va BBC Learning English’da IELTS’ga yordam beradigan bepul tinglab tushunish va o‘qish mashqlari bor.', 'Purdue OWL grammatika, esse tuzilishi va iqtibos keltirishni bepul tushuntiradi.', 'Materiallardagi «Mashq» bo‘limida Studymatch uchun yozilgan qisqa sinov testlari bor.'],
    },
    links: [{ l: 'Bluebook', u: 'https://bluebook.collegeboard.org' }, { l: 'Khan Academy', u: 'https://www.khanacademy.org' }, { l: 'LearnEnglish', u: 'https://learnenglish.britishcouncil.org' }, { l: 'BBC Learning English', u: 'https://www.bbc.co.uk/learningenglish' }, { l: 'Purdue OWL', u: 'https://owl.purdue.edu' }],
  },
];

// Schools. tier 'uzbek' = scholarship for Uzbek students confirmed on the school's own pages.
// tier 'check' = known to offer aid to international students; Uzbek eligibility not confirmed.
const UWC_SCH: L3 = { en: 'Need-based, full or partial. UWC says over 80% of IB Diploma students selected by a national committee receive some financial support.', ru: 'По потребности, полная или частичная. UWC сообщает, что более 80% учащихся IB Diploma, отобранных национальным комитетом, получают финансовую поддержку.', uz: 'Ehtiyojga qarab, to‘liq yoki qisman. UWC ma’lumotiga ko‘ra, milliy qo‘mita tanlagan IB Diploma o‘quvchilarining 80% dan ko‘pi moliyaviy yordam oladi.' };
const UWC_HOW: L3 = { en: 'Apply through the UWC Uzbekistan National Committee, not to the college directly. After selection, families go through a financial assessment that sets the scholarship amount.', ru: 'Подавайте заявку через Национальный комитет UWC Узбекистан, а не напрямую в колледж. После отбора семья проходит финансовую оценку, по ней определяют размер стипендии.', uz: 'Kollejga to‘g‘ridan-to‘g‘ri emas, UWC O‘zbekiston Milliy qo‘mitasi orqali ariza bering. Tanlovdan keyin oila moliyaviy baholashdan o‘tadi, stipendiya miqdori shu bilan belgilanadi.' };
const CHK_SCH: L3 = { en: 'Many schools like this offer need-based financial aid or scholarships to some international students. Amounts and availability vary and can be limited. We have not confirmed aid specifically for Uzbek citizens.', ru: 'Многие такие школы предлагают финансовую помощь по потребности или стипендии отдельным иностранным ученикам. Суммы и наличие различаются и могут быть ограничены. Помощь именно для граждан Узбекистана мы не подтверждали.', uz: 'Bunday maktablarning ko‘pchiligi ba’zi xorijiy o‘quvchilarga ehtiyojga qarab moliyaviy yordam yoki stipendiya beradi. Miqdori va mavjudligi har xil va cheklangan bo‘lishi mumkin. O‘zbekiston fuqarolari uchun alohida yordamni tasdiqlamadik.' };
const CHK_HOW: L3 = { en: 'Check the school’s admissions and financial aid pages for the current application round, deadlines and whether international families can apply for aid. Typical requirements: transcripts, English test (TOEFL or Duolingo), recommendations and an interview.', ru: 'Смотрите на сайте школы страницы приёма и финансовой помощи: текущий набор, сроки и могут ли иностранные семьи подавать на помощь. Обычно нужны: табель, тест по английскому (TOEFL или Duolingo), рекомендации и собеседование.', uz: 'Maktab saytidagi qabul va moliyaviy yordam sahifalarini tekshiring: joriy qabul, muddatlar va xorijiy oilalar yordamga ariza bera olishi. Odatda kerak: baholar jadvali, ingliz tili testi (TOEFL yoki Duolingo), tavsiyanomalar va suhbat.' };
type School = { n: string; co: string; city: string; url: string; tier: 'uzbek' | 'check'; scholar: L3; how: L3 };
const uwc = (n: string, co: string, city: string): School => ({ n, co, city, url: 'https://uz.uwc.org', tier: 'uzbek', scholar: UWC_SCH, how: UWC_HOW });
const chk = (n: string, co: string, city: string, u: string): School => ({ n, co, city, url: 'https://' + u, tier: 'check', scholar: CHK_SCH, how: CHK_HOW });
const US = 'United States', UK = 'United Kingdom', CA = 'Canada';
export const SCHOOLS: School[] = [
  uwc('UWC Atlantic College', UK, 'Wales'), uwc('Pearson College UWC', CA, 'Victoria'), uwc('UWC Southeast Asia', 'Singapore', 'Singapore'),
  uwc('UWC USA', US, 'Montezuma'), uwc('Waterford Kamhlaba UWCSA', 'Eswatini', 'Mbabane'), uwc('UWC Red Cross Nordic', 'Norway', 'Flekke'),
  uwc('UWC Adriatic', 'Italy', 'Duino'), uwc('Li Po Chun UWC', 'Hong Kong SAR China', 'Hong Kong'), uwc('Mahindra UWC', 'India', 'Pune'),
  uwc('UWC Costa Rica', 'Costa Rica', 'Santa Ana'), uwc('UWC Mostar', 'Bosnia and Herzegovina', 'Mostar'), uwc('UWC Maastricht', 'Netherlands', 'Maastricht'),
  uwc('UWC Robert Bosch College', 'Germany', 'Freiburg'), uwc('UWC Dilijan', 'Armenia', 'Dilijan'), uwc('UWC ISAK Japan', 'Japan', 'Karuizawa'),
  uwc('UWC Changshu China', 'China', 'Changshu'), uwc('UWC Thailand', 'Thailand', 'Phuket'), uwc('UWC East Africa', 'Tanzania', 'Arusha'),
  {
    n: 'Tashkent International School', co: 'Uzbekistan', city: 'Tashkent', url: 'https://www.tashschool.org', tier: 'uzbek',
    scholar: { en: 'Grade 10 Host Country National scholarship, running since 1999. The school has offered up to three full scholarships a year.', ru: 'Стипендия для граждан принимающей страны в 10 класс, действует с 1999 года. Школа предлагала до трёх полных стипендий в год.', uz: 'Mezbon davlat fuqarolari uchun 10-sinf stipendiyasi, 1999-yildan beri mavjud. Maktab yiliga uchtagacha to‘liq stipendiya taklif qilgan.' },
    how: { en: 'Open to Uzbek citizens studying in Uzbek national schools. Students can earn a US high school diploma and the IB Diploma. Check the school’s admissions page for the current round.', ru: 'Для граждан Узбекистана из национальных школ. Можно получить американский аттестат и IB Diploma. Текущий набор смотрите на странице приёма школы.', uz: 'O‘zbekiston milliy maktablarida o‘qiyotgan fuqarolar uchun. AQSh maktab diplomi va IB Diplomani olish mumkin. Joriy qabulni maktab sahifasida tekshiring.' },
  },
  chk('Phillips Exeter Academy', US, 'Exeter', 'www.exeter.edu'), chk('Phillips Academy Andover', US, 'Andover', 'www.andover.edu'), chk('Choate Rosemary Hall', US, 'Wallingford', 'www.choate.edu'),
  chk('Deerfield Academy', US, 'Deerfield', 'deerfield.edu'), chk('The Lawrenceville School', US, 'Lawrenceville', 'www.lawrenceville.org'), chk('The Hotchkiss School', US, 'Lakeville', 'www.hotchkiss.org'),
  chk('Taft School', US, 'Watertown', 'www.taftschool.org'), chk('Groton School', US, 'Groton', 'www.groton.org'), chk('St. Paul’s School', US, 'Concord', 'www.sps.edu'),
  chk('Milton Academy', US, 'Milton', 'www.milton.edu'), chk('Loomis Chaffee', US, 'Windsor', 'www.loomischaffee.org'), chk('Northfield Mount Hermon', US, 'Mount Hermon', 'www.nmhschool.org'),
  chk('Middlesex School', US, 'Concord', 'www.middlesexschool.org'), chk('Emma Willard School', US, 'Troy', 'www.emmawillard.org'), chk('Peddie School', US, 'Hightstown', 'www.peddie.org'),
  chk('The Hill School', US, 'Pottstown', 'www.thehill.org'),
  chk('Blair Academy', US, 'Blairstown', 'www.blair.edu'), chk('Mercersburg Academy', US, 'Mercersburg', 'www.mercersburg.edu'), chk('The Thacher School', US, 'Ojai', 'www.thacher.org'),
  chk('Cate School', US, 'Carpinteria', 'www.cate.org'), chk('Berkshire School', US, 'Sheffield', 'www.berkshireschool.org'), chk('Salisbury School', US, 'Salisbury', 'www.salisburyschool.org'),
  chk('The Webb Schools', US, 'Claremont', 'www.webb.org'), chk('Cranbrook Schools', US, 'Bloomfield Hills', 'www.cranbrook.edu'), chk('Kent School', US, 'Kent', 'www.kent-school.edu'),
  chk('Sevenoaks School', UK, 'Sevenoaks', 'www.sevenoaksschool.org'), chk('Oundle School', UK, 'Oundle', 'www.oundleschool.org.uk'), chk('Harrow School', UK, 'Harrow', 'www.harrowschool.org.uk'),
  chk('Appleby College', CA, 'Oakville', 'www.appleby.on.ca'), chk('Upper Canada College', CA, 'Toronto', 'www.ucc.on.ca'), chk('Brentwood College School', CA, 'Mill Bay', 'www.brentwood.bc.ca'),
];

// Short original practice tests. Answers are indexes into opts.
export type Q = { q: string; opts: string[]; ans: number };
export type PTest = { id: string; kind: 'SAT' | 'IELTS'; title: string; mins?: number; passage?: string; questions: Q[] };
export const SAMPLE_TESTS: PTest[] = [
  { id: 's-math', kind: 'SAT', title: 'SAT-style Math: 10 warm-up questions', mins: 15, questions: [
    { q: 'If 3x + 7 = 25, what is the value of x?', opts: ['4', '5', '6', '7'], ans: 2 },
    { q: 'A line passes through (0, 2) and (4, 10). What is its slope?', opts: ['4', '1', '2', '3'], ans: 2 },
    { q: 'What is the value of 2^5 − 3^2?', opts: ['21', '25', '23', '27'], ans: 2 },
    { q: 'If f(x) = 2x² − 3, what is f(3)?', opts: ['12', '18', '21', '15'], ans: 3 },
    { q: 'What is 20% of 150?', opts: ['30', '20', '25', '35'], ans: 0 },
    { q: 'What is the sum of the solutions of x² − 5x + 6 = 0?', opts: ['5', '−5', '6', '−6'], ans: 0 },
    { q: 'A rectangle has a perimeter of 30 and a length of 9. What is its area?', opts: ['45', '60', '81', '54'], ans: 3 },
    { q: 'If y = 3x and x + y = 20, what is x?', opts: ['5', '4', '10', '15'], ans: 0 },
    { q: 'The mean of 4, 8, 10 and x is 8. What is x?', opts: ['8', '12', '10', '14'], ans: 2 },
    { q: 'Which expression is equivalent to (x + 3)²?', opts: ['x² + 9', 'x² + 3x + 9', 'x² + 6x + 9', 'x² + 6x + 6'], ans: 2 },
  ] },
  { id: 's-rw', kind: 'SAT', title: 'SAT-style Reading and Writing: 8 questions', mins: 10, questions: [
    { q: 'The committee’s decision was ______; no member objected to it.', opts: ['controversial', 'unanimous', 'tentative', 'arbitrary'], ans: 1 },
    { q: 'Neither the teacher nor the students ______ ready for the exam.', opts: ['was', 'is', 'were', 'has been'], ans: 2 },
    { q: 'The scientist’s results were so ______ that other researchers could not reproduce them.', opts: ['robust', 'erratic', 'reliable', 'consistent'], ans: 1 },
    { q: 'The library, which opened in 1925 ______ is the oldest building on campus. Which punctuation fits the blank?', opts: [',', ';', ':', '—'], ans: 0 },
    { q: 'Although she was nervous, Mara delivered the speech with ______.', opts: ['composure', 'hesitation', 'confusion', 'reluctance'], ans: 0 },
    { q: 'Which revision of “Due to the fact that it rained, the match was cancelled” is the most concise?', opts: ['Because it rained, the match was cancelled.', 'The match was cancelled, due to the fact that rain.', 'Rain fell, therefore cancelling the match.', 'It rained and so the match it was cancelled.'], ans: 0 },
    { q: 'The senator’s remarks were meant to mollify the angry crowd. “Mollify” most nearly means', opts: ['provoke', 'calm', 'ignore', 'question'], ans: 1 },
    { q: 'The experiment failed at first. ______, the team revised the method and tried again.', opts: ['However', 'For example', 'Similarly', 'Consequently'], ans: 3 },
  ] },
  { id: 'i-read', kind: 'IELTS', title: 'IELTS-style Reading: urban beekeeping', mins: 10,
    passage: 'Urban beekeeping has grown quickly in many cities over the past fifteen years. Hives are now found on the roofs of offices, hotels and universities. Supporters say bees help pollinate parks and gardens, and city honey is often sold locally. However, some ecologists warn that too many managed hives can compete with wild pollinators for the same flowers. In one study of a large European city, researchers found that areas with the highest number of hives had fewer wild bee species. The authors did not conclude that beekeeping should stop. Instead, they recommended that city councils count existing hives and plant a wider variety of flowering plants before allowing more.',
    questions: [
      { q: 'Urban beekeeping has become less common in recent years.', opts: ['True', 'False', 'Not given'], ans: 1 },
      { q: 'Hives can be found on university buildings.', opts: ['True', 'False', 'Not given'], ans: 0 },
      { q: 'All ecologists are against urban beekeeping.', opts: ['True', 'False', 'Not given'], ans: 1 },
      { q: 'Honey from city hives is exported abroad.', opts: ['True', 'False', 'Not given'], ans: 2 },
      { q: 'The study found fewer wild bee species where there were the most hives.', opts: ['True', 'False', 'Not given'], ans: 0 },
      { q: 'What did the authors recommend?', opts: ['Banning hives', 'Counting hives and planting more kinds of flowers', 'Moving hives to parks', 'Selling less honey'], ans: 1 },
      { q: 'What is the writer’s main purpose?', opts: ['To promote honey sales', 'To describe a debate about urban beekeeping', 'To explain how to keep bees', 'To criticise city councils'], ans: 1 },
    ] },
  { id: 'i-vocab', kind: 'IELTS', title: 'IELTS-style Academic Vocabulary: 8 words', mins: 6, questions: [
    { q: '“Mitigate” means', opts: ['make worse', 'make less severe', 'ignore', 'measure'], ans: 1 },
    { q: '“Ubiquitous” means', opts: ['rare', 'expensive', 'found everywhere', 'ancient'], ans: 2 },
    { q: '“Substantial” means', opts: ['considerable', 'tiny', 'hidden', 'temporary'], ans: 0 },
    { q: '“Consequently” means', opts: ['in contrast', 'for example', 'as a result', 'at first'], ans: 2 },
    { q: '“Reluctant” means', opts: ['eager', 'unwilling', 'certain', 'careful'], ans: 1 },
    { q: '“Obsolete” means', opts: ['out of date', 'modern', 'popular', 'powerful'], ans: 0 },
    { q: '“Scarce” means', opts: ['plentiful', 'colourful', 'limited in supply', 'harmful'], ans: 2 },
    { q: '“Coherent” means', opts: ['noisy', 'logical and clear', 'accidental', 'incomplete'], ans: 1 },
  ] },
];

