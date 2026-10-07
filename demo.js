(function () {
  // Örnek sorular. Her olgunun birden çok sorulma biçimi vardır; her seçeneğin ilki doğru cevaptır.
  // Bunlar tanıtım için yazılmış örneklerdir, uygulamadaki gerçek kartlar değildir.
  function V(qtr, qen, opts) { return { q: { tr: qtr, en: qen }, o: opts.map(function (x) { return { tr: x[0], en: x[1] }; }) }; }

  var SUBJECTS = {
    bio: [
      [
        V('ATP en çok hangi organelde üretilir?', 'In which organelle is most ATP produced?', [['Mitokondri', 'Mitochondrion'], ['Ribozom', 'Ribosome'], ['Golgi cisimciği', 'Golgi apparatus'], ['Lizozom', 'Lysosome']]),
        V('Hücresel solunumun büyük bölümünün gerçekleştiği çift zarlı organel hangisidir?', 'Which double-membrane organelle hosts most of cellular respiration?', [['Mitokondri', 'Mitochondrion'], ['Endoplazmik retikulum', 'Endoplasmic reticulum'], ['Koful', 'Vacuole'], ['Sentrozom', 'Centrosome']]),
        V('Aşağıdakilerden hangisi mitokondrinin temel görevidir?', 'Which of these is the main function of the mitochondrion?', [['Enerji (ATP) üretimi', 'Energy (ATP) production'], ['Protein sentezi', 'Protein synthesis'], ['Hücre içi sindirim', 'Intracellular digestion'], ['Madde paketleme ve salgılama', 'Packaging and secretion']])
      ],
      [
        V('Protein sentezinin gerçekleştiği organel hangisidir?', 'Which organelle is where proteins are synthesized?', [['Ribozom', 'Ribosome'], ['Lizozom', 'Lysosome'], ['Golgi cisimciği', 'Golgi apparatus'], ['Koful', 'Vacuole']]),
        V('Hem prokaryot hem ökaryot hücrelerde bulunan organel hangisidir?', 'Which organelle is found in both prokaryotic and eukaryotic cells?', [['Ribozom', 'Ribosome'], ['Mitokondri', 'Mitochondrion'], ['Golgi cisimciği', 'Golgi apparatus'], ['Endoplazmik retikulum', 'Endoplasmic reticulum']])
      ]
    ],
    fiz: [
      [
        V('Net kuvvet sabitken kütle iki katına çıkarsa ivme nasıl değişir?', 'If the net force stays constant and the mass doubles, how does the acceleration change?', [['Yarıya iner', 'It halves'], ['İki katına çıkar', 'It doubles'], ['Değişmez', 'It stays the same'], ['Dört katına çıkar', 'It quadruples']]),
        V('Sürtünmesiz yatay düzlemde 2 kg\'lık cisme 10 N\'luk net kuvvet uygulanırsa ivmesi kaç m/s² olur?', 'A 2 kg object on a frictionless horizontal surface gets a 10 N net force. What is its acceleration in m/s²?', [['5', '5'], ['20', '20'], ['12', '12'], ['0,2', '0.2']]),
        V('Aynı kuvvetle itilen iki cisimden hangisi daha büyük ivme kazanır?', 'Pushed with the same force, which of two objects gains the larger acceleration?', [['Kütlesi küçük olan', 'The one with smaller mass'], ['Kütlesi büyük olan', 'The one with larger mass'], ['İkisi de aynı', 'Both the same'], ['Hızı büyük olan', 'The one with higher speed']])
      ],
      [
        V('Kütlesi 60 g, hacmi 20 cm³ olan cismin özkütlesi kaç g/cm³\'tür?', 'An object has a mass of 60 g and a volume of 20 cm³. What is its density in g/cm³?', [['3', '3'], ['0,33', '0.33'], ['40', '40'], ['80', '80']]),
        V('Kütle sabitken hacim iki katına çıkarsa özkütle nasıl değişir?', 'If the mass stays constant and the volume doubles, how does the density change?', [['Yarıya iner', 'It halves'], ['İki katına çıkar', 'It doubles'], ['Değişmez', 'It stays the same'], ['Dört katına çıkar', 'It quadruples']])
      ]
    ],
    kim: [
      [
        V('Bir atomun proton sayısını belirten nicelik hangisidir?', 'Which quantity gives the number of protons in an atom?', [['Atom numarası', 'Atomic number'], ['Kütle numarası', 'Mass number'], ['Nötron sayısı', 'Neutron count'], ['Değerlik elektron sayısı', 'Valence electron count']]),
        V('Atom numarası 11 olan nötr bir atomun elektron sayısı kaçtır?', 'How many electrons does a neutral atom with atomic number 11 have?', [['11', '11'], ['12', '12'], ['10', '10'], ['23', '23']]),
        V('Aynı elementin tüm atomlarında ortak olan nicelik hangisidir?', 'Which quantity is shared by all atoms of the same element?', [['Proton sayısı', 'Proton count'], ['Nötron sayısı', 'Neutron count'], ['Kütle numarası', 'Mass number'], ['Atom kütlesi', 'Atomic mass']])
      ],
      [
        V('Soygazlar periyodik tabloda hangi grupta yer alır?', 'Which group of the periodic table do the noble gases belong to?', [['8A (18. grup)', 'Group 8A (18)'], ['1A', '1A'], ['7A', '7A'], ['2A', '2A']]),
        V('Bileşik oluşturma eğilimi en düşük olan element grubu hangisidir?', 'Which element group has the lowest tendency to form compounds?', [['Soygazlar', 'Noble gases'], ['Halojenler', 'Halogens'], ['Alkali metaller', 'Alkali metals'], ['Toprak alkali metaller', 'Alkaline earth metals']])
      ]
    ],
    cog: [
      [
        V('Mevsimlerin oluşmasının temel nedeni nedir?', 'What is the main cause of the seasons?', [['Dünya\'nın eksen eğikliği ve Güneş etrafında dolanması', 'Earth\'s axial tilt and its orbit around the Sun'], ['Dünya\'nın kendi ekseni etrafında dönmesi', 'Earth rotating on its own axis'], ['Dünya\'nın Güneş\'e yaklaşıp uzaklaşması', 'Earth moving closer to and farther from the Sun'], ['Ay\'ın Dünya etrafında dönmesi', 'The Moon orbiting Earth']]),
        V('Dünya\'nın eksen eğikliği olmasaydı aşağıdakilerden hangisi gerçekleşmezdi?', 'If Earth had no axial tilt, which of these would not happen?', [['Mevsimlerin oluşması', 'The seasons forming'], ['Gece ve gündüzün oluşması', 'Day and night forming'], ['Ay\'ın evreleri', 'The phases of the Moon'], ['Gelgit olayı', 'Tides']])
      ],
      [
        V('Türkiye\'nin en geniş yüzölçümüne sahip coğrafi bölgesi hangisidir?', 'Which geographic region of Türkiye has the largest area?', [['Doğu Anadolu', 'Eastern Anatolia'], ['İç Anadolu', 'Central Anatolia'], ['Karadeniz', 'Black Sea'], ['Marmara', 'Marmara']]),
        V('Yüzölçümü bakımından Türkiye\'nin en büyük bölgesi aşağıdakilerden hangisidir?', 'By area, which of these is the largest region of Türkiye?', [['Doğu Anadolu', 'Eastern Anatolia'], ['Akdeniz', 'Mediterranean'], ['Ege', 'Aegean'], ['Güneydoğu Anadolu', 'Southeastern Anatolia']])
      ]
    ],
    tar: [
      [
        V('Malazgirt Savaşı hangi yılda yapılmıştır?', 'In which year was the Battle of Manzikert fought?', [['1071', '1071'], ['1176', '1176'], ['1243', '1243'], ['1402', '1402']]),
        V('Anadolu\'nun kapılarını Türklere açan savaş hangisidir?', 'Which battle opened the gates of Anatolia to the Turks?', [['Malazgirt Savaşı', 'Battle of Manzikert'], ['Miryokefalon Savaşı', 'Battle of Myriokephalon'], ['Kösedağ Savaşı', 'Battle of Köse Dağ'], ['Dandanakan Savaşı', 'Battle of Dandanaqan']]),
        V('Alparslan, Malazgirt\'te hangi Bizans imparatorunu esir almıştır?', 'Which Byzantine emperor did Alp Arslan capture at Manzikert?', [['IV. Romanos Diogenes', 'Romanos IV Diogenes'], ['I. Aleksios Komnenos', 'Alexios I Komnenos'], ['II. Basileios', 'Basil II'], ['Herakleios', 'Heraclius']])
      ],
      [
        V('İstanbul hangi yılda fethedilmiştir?', 'In which year was Istanbul conquered?', [['1453', '1453'], ['1389', '1389'], ['1517', '1517'], ['1071', '1071']]),
        V('İstanbul\'un fethiyle hangi çağ kapanmıştır?', 'The conquest of Istanbul closed which historical age?', [['Ortaçağ', 'The Middle Ages'], ['İlkçağ', 'Antiquity'], ['Yeniçağ', 'The Early Modern Age'], ['Tunç Çağı', 'The Bronze Age']])
      ]
    ],
    din: [
      [
        V('Aşağıdakilerden hangisi İslam\'ın şartlarından biridir?', 'Which of these is one of the pillars of Islam?', [['Zekât', 'Zakat'], ['Kader', 'Divine decree'], ['Âhiret', 'The hereafter'], ['Melekler', 'Angels']]),
        V('İslam\'ın şartları arasında yer alan mali bir ibadet hangisidir?', 'Which financial act of worship is among the pillars of Islam?', [['Zekât', 'Zakat'], ['Namaz', 'Prayer'], ['Oruç', 'Fasting'], ['Kelime-i şehadet', 'Declaration of faith']])
      ],
      [
        V('Aşağıdakilerden hangisi imanın şartlarından biridir?', 'Which of these is one of the articles of faith?', [['Kader', 'Divine decree'], ['Hac', 'Pilgrimage'], ['Namaz', 'Prayer'], ['Oruç', 'Fasting']]),
        V('Cebrail ve Mikâil gibi varlıklara inanmak imanın hangi şartı kapsamındadır?', 'Believing in beings such as Gabriel and Michael falls under which article of faith?', [['Meleklere iman', 'Belief in angels'], ['Peygamberlere iman', 'Belief in prophets'], ['Kitaplara iman', 'Belief in the books'], ['Âhirete iman', 'Belief in the hereafter']])
      ]
    ]
  };

  var EXTRA = {
    tr: {
      'demo.badge.new': 'Yeni soru', 'demo.badge.again': 'Aynı olgu · farklı soru', 'demo.badge.review': 'Tekrar vakti · farklı soru',
      'demo.idle': 'Bir şık seç. Doğruysa yeni bir soru gelir, yanlışsa aynı konu başka bir soruyla yeniden sorulur.',
      'demo.right': 'Doğru! Sıradaki soru yepyeni. Bu kartın tekrar vakti geldiğinde de aynı olguyu farklı bir soruyla göreceksin.',
      'demo.wrong': 'Yanlış. Aynı konuyu bu sefer farklı bir soruyla sorduk, şıklar da karıştı. Kart tekrar öğrenme aşamasına girdi.',
      'demo.revisit': 'Doğru! Bu kartın tekrar vakti gelmişti. Aynı olgu bu sefer farklı bir soruyla geldi.',
      'demo.note': 'Zorluğu sen işaretlemezsin: cevabın doğruluğu ve süresi tekrar zamanını belirler. Örnek sorular tanıtım içindir.',
      'al.h2': 'Sorular hep değişir', 'al.sub': 'Aynı soruyu iki kez ezberleyemezsin. Her durumda uygulama sana yeni bir bakış açısı verir.',
      'al1.h': 'Doğru bildin → yeni soru', 'al1.p': 'Sıradaki kart farklı bir olguyu sorar. Doğru ve hızlı cevap kartın dönüşünü de geciktirir.',
      'al2.h': 'Yanlış bildin → aynı olgu, farklı soru', 'al2.p': 'Kart tekrar öğrenme aşamasına girer ve aynı oturumda yeniden gelir. Bu sefer soru kökü ve şıklar farklıdır.',
      'al3.h': 'Tekrar vakti geldi → yine farklı soru', 'al3.p': 'Bildiğin kartı günler sonra gördüğünde de aynı cümleyle karşılaşmazsın. Ezber değil, konu hakimiyeti ölçülür.',
      'al.note': 'Ölçümümüze göre soru bankasındaki kartların %99\'undan fazlasında aynı olgu birden çok soru köküyle sorulabiliyor. Bu yüzden her tekrarda soru farklı gelir, şıklar ise her seferinde yeniden karışır.',
      'f1.p': 'Soruyu sabit bir metin değil, kazanıma bağlı bir üretici kod çalışma anında oluşturur. Aynı olgu her tekrarda farklı bir soruyla ve karışık şıklarla gelir.',
      'w1.p': 'Aynı olgu her seferinde farklı soru kökleri ve farklı çeldiricilerle sorulur. Cevabı ezberlemek işe yaramaz.',
      'q3': 'Yanlış bilirsem ne olur, soru değişiyor mu?', 'a3': 'Evet. Kart aynı oturumda yeniden sorulur ve tekrar öğrenme aşamasına girer. Aynı olgu bu sefer farklı bir soruyla ve karışık şıklarla gelir. Tekrar vakti geldiğinde de doğru bildiğin kart farklı bir soruyla karşına çıkar.'
    },
    en: {
      'demo.badge.new': 'New question', 'demo.badge.again': 'Same fact · different question', 'demo.badge.review': 'Due for review · different question',
      'demo.idle': 'Pick an option. If you are right a new question comes up, if you are wrong the same topic is asked again as a different question.',
      'demo.right': 'Correct! The next question is brand new. When this card is due again you will see the same fact as a different question.',
      'demo.wrong': 'Incorrect. We asked the same topic again, this time as a different question with reshuffled options. The card entered relearning.',
      'demo.revisit': 'Correct! This card was due for review. The same fact came back as a different question.',
      'demo.note': 'You do not rate difficulty yourself: whether you were right and how long you took set the review time. Sample questions are for illustration.',
      'al.h2': 'Questions keep changing', 'al.sub': 'You cannot memorize one fixed question. In every case the app gives you a new angle.',
      'al1.h': 'You got it right → new question', 'al1.p': 'The next card asks about a different fact. A correct and fast answer also pushes the card back further.',
      'al2.h': 'You got it wrong → same fact, different question', 'al2.p': 'The card enters relearning and returns in the same session. This time the stem and options are different.',
      'al3.h': 'It is due again → different question once more', 'al3.p': 'When you meet a card you know days later, it will not use the same sentence. It measures mastery, not memorization.',
      'al.note': 'By our own count, more than 99% of the cards in the question bank can ask the same fact through more than one question stem. So the question differs on every review, and the options are reshuffled each time.',
      'f1.p': 'A generator tied to each curriculum objective builds the question when you study, not a fixed text. The same fact returns as a different question with reshuffled options on every review.',
      'w1.p': 'The same fact is asked with different stems and different distractors each time. Memorizing the answer does not help.',
      'q3': 'If I get a question wrong, does it change?', 'a3': 'Yes. The card is asked again in the same session and enters relearning. The same fact comes back as a different question with reshuffled options. When it is due again, a card you knew also appears as a different question.'
    }
  };
  var D = window.DR && window.DR.dict;
  if (D) { Object.assign(D.tr, EXTRA.tr); Object.assign(D.en, EXTRA.en); }

  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  document.addEventListener('DOMContentLoaded', function () {
    var card = document.getElementById('qcard'), tagEl = document.getElementById('qtag'), qEl = document.getElementById('qtext'),
        optsEl = document.getElementById('opts'), res = document.getElementById('result'), tabs = document.querySelectorAll('[data-subj]');
    if (!card) return;
    var subj = 'bio', f = 0, seen = [], cur = null, locked = false, badge = 'new', resKey = 'demo.idle', resCls = '';

    function reset() { f = 0; seen = SUBJECTS[subj].map(function () { return 0; }); show('new'); setRes('demo.idle', ''); }
    function pickVariant() { var vs = SUBJECTS[subj][f]; var v = vs[seen[f] % vs.length]; seen[f]++; return v; }
    function lang() { return window.DR.lang; }

    function show(b) {
      cur = { v: pickVariant(), opts: null };
      cur.opts = shuffle(cur.v.o.map(function (o, i) { return { o: o, ok: i === 0 }; }));
      badge = b; locked = false; render();
    }
    function render() {
      var L = lang(), t = window.DR.t;
      var name = t('sub.' + ({ bio: 'bio', fiz: 'phy', kim: 'chem', cog: 'geo', tar: 'hist', din: 'rel' })[subj]);
      tagEl.textContent = name + ' · ' + t('demo.badge.' + badge);
      qEl.textContent = cur.v.q[L];
      optsEl.innerHTML = '';
      cur.opts.forEach(function (x, i) {
        var b = document.createElement('button'); b.type = 'button'; b.className = 'opt'; b.dataset.i = i;
        b.innerHTML = '<b>' + 'ABCD'.charAt(i) + '</b><span></span>'; b.lastChild.textContent = x.o[L];
        b.addEventListener('click', function () { answer(i, b); });
        optsEl.appendChild(b);
      });
      res.textContent = t(resKey); res.className = 'result' + (resCls ? ' ' + resCls : '');
    }
    function setRes(k, c) { resKey = k; resCls = c; res.textContent = window.DR.t(k); res.className = 'result' + (c ? ' ' + c : ''); }

    function answer(i, btn) {
      if (locked) return; locked = true;
      var ok = cur.opts[i].ok, nodes = optsEl.querySelectorAll('.opt');
      nodes.forEach(function (n, k) { if (cur.opts[k].ok) n.classList.add('right'); });
      var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (ok) {
        var wasReview = seen[(f + 1) % SUBJECTS[subj].length] > 0;
        setRes(wasReview ? 'demo.revisit' : 'demo.right', 'right');
        setTimeout(function () {
          card.classList.add('leave');
          setTimeout(function () {
            f = (f + 1) % SUBJECTS[subj].length;
            var rev = seen[f] > 0; show(rev ? 'review' : 'new');
            card.classList.remove('leave'); card.classList.add('enter');
            void card.offsetWidth; card.classList.remove('enter');
          }, reduce ? 0 : 320);
        }, reduce ? 300 : 900);
      } else {
        btn.classList.add('wrong'); card.classList.add('shake');
        setRes('demo.wrong', 'wrong');
        setTimeout(function () {
          card.classList.remove('shake'); card.classList.add('flipout');
          setTimeout(function () {
            show('again'); card.classList.remove('flipout'); card.classList.add('flipin');
            void card.offsetWidth; card.classList.remove('flipin');
          }, reduce ? 0 : 260);
        }, reduce ? 400 : 1100);
      }
    }
    tabs.forEach(function (t) {
      t.addEventListener('click', function () {
        tabs.forEach(function (x) { x.setAttribute('aria-pressed', x === t ? 'true' : 'false'); });
        subj = t.dataset.subj; reset();
      });
    });
    document.addEventListener('langchange', function () { if (cur) render(); });
    reset();
  });
})();
