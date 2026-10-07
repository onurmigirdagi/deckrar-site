(function () {
  var D = {
    tr: {
      'meta.title': 'deck.rar · YKS için aralıklı tekrar kartları',
      'meta.desc': "deck.rar, YKS'ye hazırlananlar için her seferinde yeniden üretilen sorularla aralıklı tekrar yapan Android flashcard uygulamasıdır.",
      'nav.features': 'Özellikler', 'nav.how': 'Nasıl çalışır', 'nav.subjects': 'Dersler', 'nav.journey': 'Gelişim', 'nav.faq': 'SSS', 'nav.contact': 'İletişim',
      'nav.cta': 'Haberdar ol',
      'hero.badge': "Şubat 2026'dan beri geliştiriliyor · yayına hazırlanıyor",
      'hero.h1a': 'Ezberi değil, ', 'hero.h1b': 'tekrarı', 'hero.h1c': ' planla.',
      'hero.lead': 'deck.rar, bildiğin konuyu seyrek, unutmaya yaklaştığın konuyu sık sorar. Kartların çoğu her açılışta yeniden üretilir, böylece cevabı değil konuyu öğrenirsin.',
      'hero.cta1': 'Gelişmelerden haberdar ol', 'hero.cta2': 'Nasıl çalışır?',
      'demo.tag': 'Biyoloji · örnek soru', 'demo.q': 'ATP en çok hangi organelde üretilir?',
      'demo.o1': 'Ribozom', 'demo.o2': 'Mitokondri', 'demo.o3': 'Golgi cisimciği', 'demo.o4': 'Lizozom',
      'demo.idle': 'Bir şık seç. Uygulamanın cevabına nasıl tepki verdiğini gör.',
      'demo.right': 'Doğru. Doğru ve hızlı bir cevap kartı daha geç geri getirir, doğru ama yavaş cevap daha erken getirir.',
      'demo.wrong': 'Yanlış. Kart aynı oturumda yeniden sorulur ve tekrar öğrenme aşamasına girer. Şıklar yeniden karışır, kartın türüne göre soru da değişebilir.',
      'demo.note': 'Zorluğu sen işaretlemezsin: cevabın doğruluğu ve süresi tekrar zamanını belirler.',
      'feat.h2': 'Çalışmayı verimli yapan şeyler',
      'feat.sub': 'Uygulamanın temelinde kart destesi, aralıklı tekrar motoru ve soru üreten bir altyapı var.',
      'f1.h': 'Her seferinde yeni soru', 'f1.p': 'Soruyu veritabanı değil, kazanıma bağlı bir üretici kod çalışma anında oluşturur. Aynı kart her açılışta farklı şıklarla gelir, kartın türüne göre soru metni de değişebilir.',
      'f2.h': 'Aralıklı tekrar', 'f2.p': 'Her cevabın doğruluğuna ve süresine göre bir sonraki tekrar zamanı hesaplanır. Yanlış bildiğin kart yeniden öğrenme adımına girer, doğru bildikçe aralık uzar.',
      'f3.h': 'İlerleme ve istatistik', 'f3.p': 'Ders bazında çözülen soru sayısını ve genel gidişini ekranda gör. Neyi sık yanlış yaptığını kendin fark et.',
      'f4.h': 'Seviye, XP ve coin', 'f4.p': 'Çalıştıkça XP ve coin kazanırsın, seviye atlarsın. Coin ile uygulama temalarını açabilirsin.',
      'f5.h': 'Hesap ve senkronizasyon', 'f5.p': 'E-posta hesabınla ilerlemen, profilin ve temaların bulutta yedeklenir. Telefon değiştirsen de kaldığın yerden devam edersin.',
      'f6.h': 'Kalite kontrollü soru bankası', 'f6.p': 'Kartlar otomatik kalite kurallarından geçer: şık uzunlukları, çeldirici işlevi, ikinci doğru cevap riski gibi sorunlar tek tek denetlenir.',
      'how.h2': 'Üç adımda tekrar', 'how.sub': 'Her gün birkaç dakika yeter. Hangi kartın ne zaman geleceğini uygulama planlar.',
      's1.h': 'Soruyu çöz', 's1.p': 'Ders ve konuya göre sana sıra gelen kartı aç, şıklardan birini seç.',
      's2.h': 'Uygulama değerlendirir', 's2.p': 'Doğru ya da yanlış olması ve ne kadar sürede cevapladığın, kartın bir sonraki tekrar tarihini belirler.',
      's3.h': 'Zamanı gelince tekrarla', 's3.p': 'Unutmaya yaklaştığın kartlar öne gelir. Bildiklerin seyrekleşir, çalışma süren zorlandığın konulara gider.',
      'sub.h2': 'Kapsanan dersler',
      'sub.sub': 'Soru bankası MEB kazanımlarına göre kurulur. Her kazanım atomik olgulara bölünür ve bu olguların her biri ayrı bir kart olarak çalışılır.',
      'st1': 'ders', 'st2': 'kart', 'st3': 'soru üretici', 'st4': 'sınıf kazanımları',
      'sub.bio': 'Biyoloji', 'sub.phy': 'Fizik', 'sub.chem': 'Kimya', 'sub.geo': 'Coğrafya', 'sub.hist': 'Tarih', 'sub.rel': 'Din Kültürü',
      'sub.note': 'Soru bankası düzenli olarak denetlenip iyileştirilir. Sayılar geliştirme aşamasındaki bankaya aittir ve zamanla değişir.',
      'j.h2': 'Gelişim süreci',
      'j.sub': 'deck.rar bir günde yapılmış bir proje değil. İlk satırları Şubat 2026\'da yazıldı ve düzenli olarak geliştirilmeye devam ediyor. Şu anda yayına hazırlık aşamasında.',
      'j1.d': 'Şubat 2026', 'j1.h': 'Başlangıç', 'j1.p': 'Kart motoru, ders ve konu yapısı, ilk Android uygulaması.',
      'j2.d': 'Şubat 2026', 'j2.h': 'Profil, mağaza ve bulut', 'j2.p': 'Profil ekranı, tema mağazası, XP ve coin, Supabase ile ilerleme senkronizasyonu, koyu tema.',
      'j3.d': 'Mart 2026', 'j3.h': 'Yeniden öğrenme', 'j3.p': 'Yanlış bilinen kartlar için Anki tarzı yeniden öğrenme adımları ve veri tutarlılığı çalışmaları.',
      'j4.d': 'Haziran–Eylül 2026', 'j4.h': 'Soru bankası ve kalite kapısı', 'j4.p': 'Soru üreticilerinin yazılması, otomatik kalite kapısı ve inceleme sistemi, çeldirici dengeleme.',
      'j5.d': 'Ekim 2026', 'j5.h': 'Genişleme ve yayına hazırlık', 'j5.p': 'Biyoloji, fizik, kimya, coğrafya, tarih ve din kültürü içeriğinin denetimi ve genişletilmesi.',
      'why.h2': 'Neden deck.rar?', 'why.sub': 'Hazır kartı ezberlemek bir noktada cevabı ezberlemeye dönüşür. Burada amaç konuyu gerçekten tutmak.',
      'w1.h': 'Cevap değil konu', 'w1.p': 'Üretilen sorular aynı olguyu farklı köklerle ve farklı çeldiricilerle sorar.',
      'w2.h': 'Dengeli çeldiriciler', 'w2.p': 'Yanlış şıklar bilinen yanılgıları temsil edecek şekilde kurulur, "bariz yanlış" şık sayısı sınırlı tutulur.',
      'w3.h': 'Kısa oturumlar', 'w3.p': 'Günlük birkaç dakikalık çalışma için tasarlandı. Bırakıp kaldığın yerden devam edersin.',
      'faq.h2': 'Sık sorulanlar', 'faq.sub': 'Aklına takılan bir şey varsa aşağıdan ulaşabilirsin.',
      'q1': 'deck.rar hangi platformlarda çalışıyor?', 'a1': 'Şu an Android için geliştirilmektedir ve yayına hazırlanmaktadır. Çıkış duyurusu ve mağaza bağlantısı hazır olduğunda bu sayfada yer alacak.',
      'q2': 'Aralıklı tekrar nedir?', 'a2': 'Bir bilgiyi unutmaya yaklaştığın anda tekrar etmeye dayanan bir çalışma yöntemidir. Uygulama, cevabının doğruluğuna ve süresine göre her kartın bir sonraki gösterim zamanını hesaplar.',
      'q3': 'Yanlış bilirsem soru değişiyor mu?', 'a3': 'Kart aynı oturumda yeniden sorulur ve tekrar öğrenme aşamasına girer. Kart yeniden üretildiği için şıklar yeniden karışır. Soru metninin de değişip değişmeyeceği kartın türüne bağlıdır: bazı kartlar sabit bir soruyu, bazıları her seferinde farklı üretilmiş bir soruyu sorar.',
      'q4': 'Zor, orta, kolay seçeneğini ben mi işaretliyorum?', 'a4': 'Hayır. Cevabın doğru olup olmadığı ve ne kadar sürede verdiğin, kartın bir sonraki tekrar zamanını belirler.',
      'q5': 'Hesap açmam gerekiyor mu?', 'a5h': 'E-posta hesabı ilerlemeni, profilini ve temalarını bulutta yedeklemek için kullanılır. Ayrıntılar için <a href="gizlilik.html">gizlilik sayfasına</a> bakabilirsin.',
      'q6': 'Soru bankası nasıl denetleniyor?', 'a6': 'Kartlar otomatik kalite kurallarından geçer: şık uzunlukları, çeldirici işlevi, mutlak sözcük kullanımı gibi ölçütler her kart için kontrol edilir. Ayrıca kartlar anlamsal olarak da incelenir. Bir hata bulursan bize yaz.',
      'q7': 'Hata ya da yanlış bir kart gördüm, ne yapayım?', 'a7h': 'Kartın dersini, konusunu ve ekranda gördüğün metni <a href="mailto:info@deckrar.tech">info@deckrar.tech</a> adresine gönder, inceleyelim.',
      'c.h2': 'Çıkıştan haberdar ol, geri bildirimini paylaş', 'c.p': 'Öneriler, bulduğun hatalar ve iş birliği teklifleri için bize yaz.',
      'foot.priv': 'Gizlilik', 'foot.contact': 'İletişim',
      'p.title': 'Gizlilik · deck.rar', 'p.h1': 'Gizlilik bilgilendirmesi', 'p.upd': 'Son güncelleme: Ekim 2026', 'p.back': 'Ana sayfa',
      'p.draft': '<b>Taslak metin.</b> Bu sayfa uygulamanın kodundaki mevcut davranışa göre hazırlanmış bir taslaktır, hukuki danışmanlık yerine geçmez. Yayına çıkmadan önce gözden geçirilmelidir.',
      'p.h2a': 'Biz kimiz', 'p.pa': 'deck.rar, YKS\'ye hazırlananlar için geliştirilen bir Android flashcard uygulamasıdır. İletişim: <a href="mailto:info@deckrar.tech">info@deckrar.tech</a>.',
      'p.h2b': 'Hangi verileri işliyoruz',
      'p.b1': '<b>Hesap bilgisi:</b> Hesap oluşturduğunuzda e-posta adresiniz.',
      'p.b2': '<b>Çalışma verisi:</b> Kartlara verdiğiniz cevaplar, tekrar zamanlamaları, ders ve konu bazlı ilerlemeniz.',
      'p.b3': '<b>Profil ve oyunlaştırma verisi:</b> XP, seviye, coin ve seçtiğiniz tema.',
      'p.b4': '<b>Kullanım kayıtları:</b> Uygulamanın çalışması ve iyileştirilmesi için tutulan çalışma kayıtları.',
      'p.h2c': 'Bu verileri nasıl kullanıyoruz',
      'p.u1': 'Tekrar zamanlarını hesaplamak ve ilerlemenizi göstermek için.', 'p.u2': 'İlerlemenizi bulutta yedekleyip cihazlar arasında senkronize etmek için.', 'p.u3': 'Soru bankasını ve uygulamayı iyileştirmek için.',
      'p.h2d': 'Verilerin saklanması ve paylaşımı',
      'p.pd': 'Hesap ve senkronizasyon verileri, uygulamanın arka uç hizmeti olan Supabase üzerinde saklanır. Verilerinizi satmıyoruz. Uygulama, reklam gösterimi için Google AdMob entegrasyonu içerir. Reklamlar yayın sürümünde etkinleştirildiğinde, reklam hizmeti kendi gizlilik politikasına göre cihaz tanımlayıcıları işleyebilir.',
      'p.h2e': 'Haklarınız', 'p.pe': 'Hesabınızın ve verilerinizin silinmesini, verilerinize erişmeyi ya da düzeltmeyi talep etmek için <a href="mailto:info@deckrar.tech">info@deckrar.tech</a> adresine yazabilirsiniz. Türkiye\'de yaşıyorsanız 6698 sayılı KVKK kapsamındaki haklarınızı da bu adresten kullanabilirsiniz.',
      'p.h2f': 'Çocuklar', 'p.pf': 'Uygulama lise öğrencilerine yöneliktir. 18 yaşından küçük kullanıcıların ebeveyn ya da vasi bilgisi dahilinde kullanmasını öneririz.',
      'p.h2g': 'Değişiklikler', 'p.pg': 'Bu bilgilendirmeyi zaman zaman güncelleyebiliriz. Güncel sürüm her zaman bu sayfada yayınlanır.'
    },
    en: {
      'meta.title': 'deck.rar · Spaced-repetition flashcards for the YKS exam',
      'meta.desc': 'deck.rar is an Android flashcard app for students preparing for the Turkish YKS exam. Questions are regenerated each time and scheduled with spaced repetition.',
      'nav.features': 'Features', 'nav.how': 'How it works', 'nav.subjects': 'Subjects', 'nav.journey': 'Progress', 'nav.faq': 'FAQ', 'nav.contact': 'Contact',
      'nav.cta': 'Get updates',
      'hero.badge': 'In development since February 2026 · getting ready to launch',
      'hero.h1a': 'Plan your ', 'hero.h1b': 'repetition', 'hero.h1c': ', not your cramming.',
      'hero.lead': 'deck.rar asks about what you know less often, and about what you are about to forget more often. Most cards are regenerated every time you open them, so you learn the topic, not the answer.',
      'hero.cta1': 'Get launch updates', 'hero.cta2': 'How does it work?',
      'demo.tag': 'Biology · sample question', 'demo.q': 'In which organelle is most ATP produced?',
      'demo.o1': 'Ribosome', 'demo.o2': 'Mitochondrion', 'demo.o3': 'Golgi apparatus', 'demo.o4': 'Lysosome',
      'demo.idle': 'Pick an option and see how the app reacts to your answer.',
      'demo.right': 'Correct. A correct and fast answer brings the card back later, a correct but slow answer brings it back sooner.',
      'demo.wrong': 'Incorrect. The card is asked again in the same session and enters relearning. The options are reshuffled, and depending on the card type the question itself can change.',
      'demo.note': 'You do not rate difficulty yourself: whether you were right and how long you took set the review time.',
      'feat.h2': 'What makes studying efficient',
      'feat.sub': 'The app is built on a flashcard deck, a spaced-repetition engine and a question-generating backend.',
      'f1.h': 'A new question every time', 'f1.p': 'A generator tied to each curriculum objective builds the question when you study, not a database. The same card comes with different options each time, and depending on its type the question text can change too.',
      'f2.h': 'Spaced repetition', 'f2.p': 'The next review time is calculated from whether you were right and how long you took. A card you got wrong enters a relearning step, and the interval grows as you get it right.',
      'f3.h': 'Progress and statistics', 'f3.p': 'See how many questions you solved per subject and your overall trend. Notice for yourself what you keep getting wrong.',
      'f4.h': 'Levels, XP and coins', 'f4.p': 'You earn XP and coins as you study and level up. Coins unlock app themes.',
      'f5.h': 'Account and sync', 'f5.p': 'Your progress, profile and themes are backed up in the cloud with your email account. Switch phones and carry on where you left off.',
      'f6.h': 'A quality-checked question bank', 'f6.p': 'Cards go through automatic quality rules: option lengths, distractor usefulness and the risk of a second correct answer are all checked one by one.',
      'how.h2': 'Repetition in three steps', 'how.sub': 'A few minutes a day is enough. The app plans which card comes back and when.',
      's1.h': 'Answer the question', 's1.p': 'Open the card that is due for a subject and topic and pick one of the options.',
      's2.h': 'The app evaluates it', 's2.p': 'Whether you were right and how long you took decide the next review date of the card.',
      's3.h': 'Review when it is due', 's3.p': 'Cards you are about to forget come first. What you know appears less often, so your time goes to what you struggle with.',
      'sub.h2': 'Subjects covered',
      'sub.sub': 'The question bank is built from Turkish national curriculum objectives. Each objective is split into atomic facts, and each fact is studied as its own card.',
      'st1': 'subjects', 'st2': 'cards', 'st3': 'question generators', 'st4': 'grades covered',
      'sub.bio': 'Biology', 'sub.phy': 'Physics', 'sub.chem': 'Chemistry', 'sub.geo': 'Geography', 'sub.hist': 'History', 'sub.rel': 'Religious Culture',
      'sub.note': 'The question bank is reviewed and improved regularly. Figures describe the bank under development and change over time.',
      'j.h2': 'Development journey',
      'j.sub': 'deck.rar was not built in a day. The first lines were written in February 2026 and it has been developed steadily since. It is now getting ready for launch.',
      'j1.d': 'February 2026', 'j1.h': 'The start', 'j1.p': 'Card engine, subject and topic structure, the first Android app.',
      'j2.d': 'February 2026', 'j2.h': 'Profile, shop and cloud', 'j2.p': 'Profile screen, theme shop, XP and coins, progress sync with Supabase, dark mode.',
      'j3.d': 'March 2026', 'j3.h': 'Relearning', 'j3.p': 'Anki-style relearning steps for cards answered wrong, plus data consistency work.',
      'j4.d': 'June–September 2026', 'j4.h': 'Question bank and quality gate', 'j4.p': 'Writing the question generators, an automatic quality gate and review system, distractor balancing.',
      'j5.d': 'October 2026', 'j5.h': 'Expansion and launch preparation', 'j5.p': 'Reviewing and expanding the biology, physics, chemistry, geography, history and religious culture content.',
      'why.h2': 'Why deck.rar?', 'why.sub': 'Memorizing ready-made cards eventually turns into memorizing answers. The goal here is to really retain the topic.',
      'w1.h': 'The topic, not the answer', 'w1.p': 'Generated questions ask about the same fact with different stems and different distractors.',
      'w2.h': 'Balanced distractors', 'w2.p': 'Wrong options are built to represent common misconceptions, and the number of obviously wrong options is kept limited.',
      'w3.h': 'Short sessions', 'w3.p': 'Designed for a few minutes a day. Stop and pick up where you left off.',
      'faq.h2': 'Frequently asked questions', 'faq.sub': 'If something is unclear, you can reach us below.',
      'q1': 'Which platforms does deck.rar run on?', 'a1': 'It is currently being developed and prepared for launch on Android. The launch announcement and store link will appear on this page when ready.',
      'q2': 'What is spaced repetition?', 'a2': 'A study method based on reviewing something just as you are about to forget it. The app calculates the next time each card is shown from whether you were right and how long you took.',
      'q3': 'If I get a question wrong, does it change?', 'a3': 'The card is asked again in the same session and enters relearning. Because the card is regenerated, the options are reshuffled. Whether the question text changes too depends on the card type: some cards ask a fixed question, others a freshly generated one each time.',
      'q4': 'Do I rate a card as hard, medium or easy myself?', 'a4': 'No. Whether your answer is correct and how long you took decide the next review time of the card.',
      'q5': 'Do I need an account?', 'a5h': 'An email account is used to back up your progress, profile and themes in the cloud. See the <a href="gizlilik.html">privacy page</a> for details.',
      'q6': 'How is the question bank checked?', 'a6': 'Cards go through automatic quality rules: option lengths, distractor usefulness and absolute wording are checked for every card. Cards are also reviewed for meaning. If you find a mistake, write to us.',
      'q7': 'I found a mistake or a wrong card. What should I do?', 'a7h': 'Send the subject, topic and the text you saw on screen to <a href="mailto:info@deckrar.tech">info@deckrar.tech</a> and we will look into it.',
      'c.h2': 'Get launch updates and share feedback', 'c.p': 'Write to us with suggestions, mistakes you found and collaboration offers.',
      'foot.priv': 'Privacy', 'foot.contact': 'Contact',
      'p.title': 'Privacy · deck.rar', 'p.h1': 'Privacy notice', 'p.upd': 'Last updated: October 2026', 'p.back': 'Home',
      'p.draft': '<b>Draft text.</b> This page is a draft prepared from the app\'s current behavior in code and is not legal advice. It should be reviewed before launch.',
      'p.h2a': 'Who we are', 'p.pa': 'deck.rar is an Android flashcard app for students preparing for the Turkish YKS exam. Contact: <a href="mailto:info@deckrar.tech">info@deckrar.tech</a>.',
      'p.h2b': 'What data we process',
      'p.b1': '<b>Account data:</b> Your email address when you create an account.',
      'p.b2': '<b>Study data:</b> Your answers to cards, review schedules and your progress by subject and topic.',
      'p.b3': '<b>Profile and gamification data:</b> XP, level, coins and the theme you choose.',
      'p.b4': '<b>Usage logs:</b> Logs kept so the app works and can be improved.',
      'p.h2c': 'How we use this data',
      'p.u1': 'To calculate review times and show your progress.', 'p.u2': 'To back up your progress in the cloud and sync it across devices.', 'p.u3': 'To improve the question bank and the app.',
      'p.h2d': 'Storage and sharing',
      'p.pd': 'Account and sync data is stored on Supabase, the app\'s backend service. We do not sell your data. The app includes a Google AdMob integration for showing ads. When ads are enabled in the release version, the ad service may process device identifiers under its own privacy policy.',
      'p.h2e': 'Your rights', 'p.pe': 'To request deletion of your account and data, or access to or correction of your data, write to <a href="mailto:info@deckrar.tech">info@deckrar.tech</a>. If you live in Türkiye you can also exercise your rights under Law No. 6698 (KVKK) at this address.',
      'p.h2f': 'Children', 'p.pf': 'The app is aimed at high-school students. We recommend that users under 18 use it with the knowledge of a parent or guardian.',
      'p.h2g': 'Changes', 'p.pg': 'We may update this notice from time to time. The current version is always published on this page.'
    }
  };

  function pick() {
    var s = null;
    try { s = localStorage.getItem('lang'); } catch (e) {}
    if (s === 'tr' || s === 'en') return s;
    return (navigator.language || 'tr').toLowerCase().indexOf('tr') === 0 ? 'tr' : 'en';
  }

  function apply(lang) {
    var t = D[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n'); if (t[k] != null) el.textContent = t[k];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-html'); if (t[k] != null) el.innerHTML = t[k];
    });
    var tk = document.body.getAttribute('data-title') || 'meta.title';
    if (t[tk]) document.title = t[tk];
    var md = document.querySelector('meta[name="description"]');
    if (md && t['meta.desc'] && !document.body.getAttribute('data-title')) md.setAttribute('content', t['meta.desc']);
    document.querySelectorAll('[data-lang-btn]').forEach(function (b) {
      var on = b.getAttribute('data-lang-btn') === lang;
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
  }

  window.DR = { lang: pick(), t: function (k) { return D[window.DR.lang][k]; } };
  function set(lang) {
    window.DR.lang = lang;
    try { localStorage.setItem('lang', lang); } catch (e) {}
    apply(lang);
  }
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-lang-btn]').forEach(function (b) {
      b.addEventListener('click', function () { set(b.getAttribute('data-lang-btn')); });
    });
    apply(window.DR.lang);
  });
})();
