const lessons = [
  {
    id: 'greetings',
    title: 'Pozdravi in osnove',
    focus: 'Greetings, polite phrases, introducing yourself',
    emoji: '👋',
    progress: 0.35,
    exercises: [
      { type: 'choice', prompt: 'Translate to Slovene: "Good morning"', options: ['Dober dan', 'Dobro jutro', 'Lahko noč'], answer: 'Dobro jutro' },
      { type: 'choice', prompt: 'How do you say "See you soon"?', options: ['Se vidimo kmalu', 'Na zdravje', 'Kako si?'], answer: 'Se vidimo kmalu' },
      { type: 'text', prompt: 'Write the informal "Hi" greeting.', answer: 'Živjo' },
      { type: 'choice', prompt: 'Select the polite form of "How are you?"', options: ['Kako si?', 'Kako ste?'], answer: 'Kako ste?' },
      { type: 'text', prompt: 'Respond to "Hvala" with a short, polite phrase.', answer: 'Prosim' },
    ],
    tips: [
      'Use "živjo" or "zdravo" with friends; use "dober dan" in formal contexts.',
      'The polite you is **vi/vas/vam**; use **kako ste?** when you would use Sie in German.',
      'Remember accent: **č** (ch), **š** (sh), **ž** (zh).',
    ],
  },
  {
    id: 'family',
    title: 'Družina in ljudje',
    focus: 'Family, professions, describing people',
    emoji: '👨‍👩‍👧',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Translate: "my sister"', options: ['moja sestra', 'moj brat', 'moja teta'], answer: 'moja sestra' },
      { type: 'choice', prompt: 'Choose the dual form: "we two"', options: ['midva/midve', 'midvi', 'midvi'], answer: 'midva/midve' },
      { type: 'text', prompt: 'Write the word for "engineer" (masc.).', answer: 'inženir' },
      { type: 'choice', prompt: 'Pick the correct adjective order: "a tall Slovenian student"', options: ['visok slovenski študent', 'slovenski visok študent', 'študent visok slovenski'], answer: 'visok slovenski študent' },
    ],
    tips: [
      'Dual shows up with two people: **midva** (males/mixed), **midve** (females).',
      'Professions often stay masculine in neutral context: *Moja prijateljica je zdravnica* (feminine form).',
      'Adjectives usually precede nouns: **mlada učiteljica**, **visok slovenski študent**.',
    ],
  },
  {
    id: 'work-school',
    title: 'Delo in šola',
    focus: 'Office talk, meetings, university life',
    emoji: '💼',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Translate: "I have a meeting at nine."', options: ['Imam sestanek ob devetih.', 'Imam srečanje v devet.', 'Sestanek je na deveto.'], answer: 'Imam sestanek ob devetih.' },
      { type: 'choice', prompt: 'Pick the correct phrase for deadline.', options: ['rok', 'cilj', 'čas'], answer: 'rok' },
      { type: 'text', prompt: 'Write: "I am studying economics."', answer: 'Študiram ekonomijo.' },
      { type: 'choice', prompt: 'Choose the correct verb: "to prepare slides"', options: ['pripraviti', 'pripraviti se', 'pripravljati se'], answer: 'pripraviti' },
    ],
    tips: [
      'Meetings use **sestanek**; **rok** is a deadline, **naloga** a task/assignment.',
      'At university say **Študiram + tožilnik**: *Študiram arhitekturo.*',
      'Verb aspects: **pripraviti** (finish preparing) vs **pripravljati** (be in the middle of it).',
    ],
  },
  {
    id: 'numbers',
    title: 'Številke in čas',
    focus: 'Numbers, days of the week, telling time',
    emoji: '🔢',
    progress: 0.1,
    exercises: [
      { type: 'choice', prompt: 'Pick the translation for 17.', options: ['sedemnajst', 'sedemdeset', 'sedemsto'], answer: 'sedemnajst' },
      { type: 'choice', prompt: 'Translate: "It is three o\'clock."', options: ['Ura je tri.', 'Ura je tretja.', 'Tri ure.'], answer: 'Ura je tri.' },
      { type: 'text', prompt: 'Write the Slovene word for "Monday".', answer: 'ponedeljek' },
      { type: 'choice', prompt: 'Which option means "quarter past five"?', options: ['pet čez četrt', 'četrt čez pet', 'pol šestih'], answer: 'četrt čez pet' },
    ],
    tips: [
      'Teen numbers end with **-najst** (trinajst, štirinajst...). Tens end with **-deset** (trideset, štirideset).',
      'Use **ob** + locative time: *Tečaj se začne ob sedmih.*',
      'For clock time: **ura je** + number; **pol šestih** = half past five (literally half of six).',
    ],
  },
  {
    id: 'shopping',
    title: 'Nakupi in denar',
    focus: 'Shopping, currency, preferences',
    emoji: '🛍️',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Translate: "How much does it cost?"', options: ['Koliko stane?', 'Kje je cena?', 'Kaj to stane?'], answer: 'Koliko stane?' },
      { type: 'choice', prompt: 'Pick the correct currency.', options: ['evro', 'dolar', 'kuna'], answer: 'evro' },
      { type: 'text', prompt: 'Write the verb for "to try on" clothes.', answer: 'pomeriti' },
      { type: 'choice', prompt: 'Select the right phrase: "I prefer this one."', options: ['Raje imam tega.', 'Všeč sem tega.', 'To je moj raje.'], answer: 'Raje imam tega.' },
    ],
    tips: [
      'Prices: **Koliko stane?** / **Imate to ceneje?**.',
      'Use **raje imam** for preferences; **všeč mi je** for liking: *Všeč mi je ta majica.*',
      'Try on = **pomeriti/pomerjati** (do not confuse with **pomiriti** = to calm); cashier = **blagajna**.',
    ],
  },
  {
    id: 'travel',
    title: 'Potovanja in bivanje',
    focus: 'Transport, lodging, tickets, weekend trips',
    emoji: '🧳',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Translate: "return ticket"', options: ['povratna karta', 'eno smer', 'karta za povratek'], answer: 'povratna karta' },
      { type: 'choice', prompt: 'Pick the right preposition: "___ Ljubljani" (toward Ljubljana)', options: ['Proti', 'S', 'Pod'], answer: 'Proti' },
      { type: 'text', prompt: 'Write: "Do you have a free room?"', answer: 'Imate prosto sobo?' },
      { type: 'choice', prompt: 'Choose the correct phrase: "We are staying for two nights."', options: ['Ostajamo dve noči.', 'Ostanemo dve noči.', 'Ostajamo dva noč.'], answer: 'Ostajamo dve noči.' },
    ],
    tips: [
      'Trains: **v eno smer** (one-way), **povratna karta** (return).',
      'Use **proti** + dative for direction toward: *Vlak gre proti Mariboru.*',
      'At hotels you can ask: **Imate prosto sobo?** / **Ali je zajtrk vključen?**',
    ],
  },
  {
    id: 'cases',
    title: 'Skloni: tožilnik in dajalnik',
    focus: 'Accusative for direct objects; dative for giving and motion toward',
    emoji: '🧭',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Pick the correct accusative: "Vidim ___ (mama)."', options: ['mama', 'mamo', 'mami'], answer: 'mamo' },
      { type: 'choice', prompt: 'Choose the correct dative: "Dajem knjigo ___ (Ana)."', options: ['Ani', 'Ano', 'Ana'], answer: 'Ani' },
      { type: 'text', prompt: 'Fill with accusative: "Poznam ___ (tvoj brat)."', answer: 'tvojega brata' },
      { type: 'choice', prompt: 'Select the verb that often takes dative: "pomagati" means...', options: ['to help', 'to need', 'to love'], answer: 'to help' },
    ],
    tips: [
      '**Tožilnik (Accusative)** answers *whom/what* after transitive verbs. Feminine nouns often gain **-o**, masculine animate gain **-a**.',
      '**Dajalnik (Dative)** marks recipients: **dajem Ani**, **pomagam bratu**.',
      'Animate vs inanimate matters: **Vidim psa** (I see a dog) vs **Vidim stol** (chair stays nominative).',
    ],
  },
  {
    id: 'past-tense',
    title: 'Preteklik in deležniki',
    focus: 'Past tense with biti + participle, agreement, common pairs',
    emoji: '🕰️',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Pick correct past tense: "Včeraj ___ (iti, jaz masc.) v kino."', options: ['sem šel', 'sem šeliti', 'sem hodil'], answer: 'sem šel' },
      { type: 'choice', prompt: 'Choose participle agreement: "Ana je ___ (kupiti) karto."', options: ['kupil', 'kupila', 'kupilo'], answer: 'kupila' },
      { type: 'text', prompt: 'Write: "We (fem.) have visited Ljubljana."', answer: 'Bile smo v Ljubljani.' },
      { type: 'choice', prompt: 'Which auxiliary forms the past?', options: ['biti', 'imeti', 'delati'], answer: 'biti' },
    ],
    tips: [
      'Past = present of **biti** + participle: *sem šel*, *si prišla*, *smo videli*.',
      'Participles agree in gender and number: **kupil/kupila/kupili/kupile**.',
      'Negation: **nisem bil**, **nisva jedla**.',
    ],
  },
  {
    id: 'future-conditional',
    title: 'Prihodnost in pogojnik',
    focus: 'Future with bom + infinitive, conditional courtesy',
    emoji: '⏭️',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Translate: "I will read tomorrow."', options: ['Bom bral jutri.', 'Sem bral jutri.', 'Brala sem jutri.'], answer: 'Bom bral jutri.' },
      { type: 'choice', prompt: 'Choose the polite conditional: "I would like to reserve."', options: ['Rad bi rezerviral.', 'Bom rezerviral.', 'Hočem rezervirati.'], answer: 'Rad bi rezerviral.' },
      { type: 'text', prompt: 'Write the future of "to be" (first person singular).', answer: 'bom' },
      { type: 'choice', prompt: 'Pick conditional helper word.', options: ['bi', 'bom', 'sem'], answer: 'bi' },
    ],
    tips: [
      'Future = **bom/boš/bo/bomo/boste/bodo** + infinitive: *Bom šel domov.*',
      'Conditional **bi** softens: **Rad bi kavo**, **Bi mi lahko pomagali?**',
      'Use perfective for one-time future: **bom kupil**; imperfective for ongoing: **bom bral ves teden**.',
    ],
  },
  {
    id: 'verbs',
    title: 'Glagoli gibanja in vid',
    focus: 'Motion verbs, perfective pairs, present vs. future',
    emoji: '🏃',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Pick the imperfective verb for ongoing motion.', options: ['iti', 'iti vs. priti', 'hoditi'], answer: 'hoditi' },
      { type: 'choice', prompt: 'Perfective of "pisati" is...', options: ['napisati', 'pisal', 'pisano'], answer: 'napisati' },
      { type: 'text', prompt: 'Translate: "I will arrive at seven." (use future perfective of priti)', answer: 'Prišel bom ob sedmih.' },
      { type: 'choice', prompt: 'Which option is habitual walking?', options: ['hodim v šolo', 'grem v šolo', 'bom šel v šolo'], answer: 'hodim v šolo' },
    ],
    tips: [
      'Pairs: **pisati/napisati**, **delati/narediti**, **iti/priti**.',
      'Use perfective for completed future: **bom napisal**, **bom kupil**.',
      'Habitual motion uses **hoditi**; one-time motion uses **iti** with future auxiliary **bom**.',
    ],
  },
  {
    id: 'health',
    title: 'Zdravje in nuja',
    focus: 'Emergencies, pharmacy, symptoms',
    emoji: '⛑️',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Translate: "Call an ambulance!"', options: ['Pokličite rešilca!', 'Kličem bolnišnico.', 'Je rešilca?'], answer: 'Pokličite rešilca!' },
      { type: 'choice', prompt: 'Pick the pharmacy.', options: ['lekarna', 'trgovina', 'banka'], answer: 'lekarna' },
      { type: 'text', prompt: 'Write: "I have a fever."', answer: 'Imam vročino.' },
      { type: 'choice', prompt: 'Choose polite help phrase.', options: ['Potrebujem pomoč.', 'Hočem pomoč.', 'Pomagaj!'], answer: 'Potrebujem pomoč.' },
    ],
    tips: [
      'Emergency number in Slovenia: **112**.',
      'Pharmacy = **lekarna**; health center = **zdravstveni dom**.',
      'Describe symptoms with **imam** + noun: **imam vročino**, **boli me glava**.',
    ],
  },
  {
    id: 'food',
    title: 'Hrana in restavracija',
    focus: 'Ordering food, cases after prepositions, quantities',
    emoji: '🥟',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Translate: "I would like water."', options: ['Rad bi vodo.', 'Jaz jem vodo.', 'Hočem voda.'], answer: 'Rad bi vodo.' },
      { type: 'choice', prompt: 'Pick the genitive after quantity: "kozarec ___ (vino)"', options: ['vina', 'vino', 'vinu'], answer: 'vina' },
      { type: 'text', prompt: 'Write the polite phrase for paying the bill.', answer: 'Račun, prosim.' },
      { type: 'choice', prompt: 'Choose the correct preposition: "___ restavracijo" (into the restaurant)', options: ['V', 'Na', 'Pri'], answer: 'V' },
    ],
    tips: [
      'After quantities use genitive: **kozarec vina, skodelica kave**.',
      'Use **bi** + infinitive for polite requests: **Rad bi naročil**, **Lahko dobim menu?**.',
      'Prepositions change case: **v restavracijo** (to/into, accusative) vs **v restavraciji** (in, locative).',
    ],
  },
  {
    id: 'nature',
    title: 'Narava in prosti čas',
    focus: 'Hiking, weather, sports, festivals',
    emoji: '⛰️',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Translate: "The weather is sunny."', options: ['Vreme je sončno.', 'Je sonce.', 'Sončno je vreme je.'], answer: 'Vreme je sončno.' },
      { type: 'choice', prompt: 'Pick the correct verb: "We are hiking in the Alps."', options: ['Pohodimo v Alpah.', 'Hodimo v Alpah.', 'Pohajkujemo v Alpah.'], answer: 'Hodimo v Alpah.' },
      { type: 'text', prompt: 'Write the word for "festival".', answer: 'festival' },
      { type: 'choice', prompt: 'Choose the right preposition: "___ koncert" (at the concert)', options: ['Na', 'V', 'Ob'], answer: 'Na' },
    ],
    tips: [
      'For locations of events use **na**: *na koncertu, na festivalu, na Pohorju*.',
      'Weather: **sončno**, **oblačno**, **deževno**, **vetrovno**.',
      'Common free-time verbs: **smučati**, **plavati**, **igrati nogomet**, **pohoditi** (to hike).',
    ],
  },
  {
    id: 'smalltalk',
    title: 'Klepet in kultura',
    focus: 'Small talk, traditions, inviting friends',
    emoji: '🗨️',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Translate: "Where are you from?"', options: ['Od kod si?', 'Kje si?', 'Kam si?'], answer: 'Od kod si?' },
      { type: 'choice', prompt: 'Pick the phrase for an invitation.', options: ['Greš na kavo?', 'Kje je kava?', 'Kavo imam.'], answer: 'Greš na kavo?' },
      { type: 'text', prompt: 'Write a word meaning "festival".', answer: 'festival' },
      { type: 'choice', prompt: 'Choose the cultural note.', options: ['Trubar printed the first Slovene book.', 'Triglav is in Croatia.', 'Prešeren wrote in German only.'], answer: 'Trubar printed the first Slovene book.' },
    ],
    tips: [
      'Invitations: **Greš na kavo?**, **Pridi na obisk!**',
      'Share culture: **Prešernov dan** (Culture Day), **kurentovanje** (carnival).',
      'Ask origin politely: **Od kod ste?** for formal; **Od kod si?** informal.',
    ],
  },
  {
    id: 'housing',
    title: 'Dom in opravila',
    focus: 'Housing search, utilities, errands',
    emoji: '🏠',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Translate: "The rent is included."', options: ['Najemnina je vključena.', 'Najemnina je zaprta.', 'Najemnina je zapravljena.'], answer: 'Najemnina je vključena.' },
      { type: 'choice', prompt: 'Pick the word for deposit.', options: ['varščina', 'polog', 'račun'], answer: 'varščina' },
      { type: 'text', prompt: 'Write: "Where can I pay the bills?"', answer: 'Kje lahko plačam račune?' },
      { type: 'choice', prompt: 'Choose the correct helper: "lightbulb"', options: ['žarnica', 'žarulja', 'žarnilo'], answer: 'žarnica' },
    ],
    tips: [
      'Utilities = **stroški**, deposit = **varščina**.',
      'At the post office you can **plačati račune** (pay bills).',
      'Use **stanovanje** for apartment, **najemodajalec** for landlord.',
    ],
  },
  {
    id: 'genitive-locative',
    title: 'Skloni: rodilnik in mestnik',
    focus: 'Genitive for possession/quantities, locative after prepositions',
    emoji: '📚',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Pick the genitive: "brez ___ (sladkor)"', options: ['sladkorja', 'sladkor', 'sladkorju'], answer: 'sladkorja' },
      { type: 'choice', prompt: 'Choose the locative: "v ___ (mesto)" meaning "in the city"', options: ['mestu', 'mesto', 'mesta'], answer: 'mestu' },
      { type: 'text', prompt: 'Write the genitive plural of "otroci" (children) after veliko.', answer: 'veliko otrok' },
      { type: 'choice', prompt: 'Which preposition triggers locative?', options: ['v/na', 'čez', 'brez'], answer: 'v/na' },
    ],
    tips: [
      'Genitive shows possession and absence: **brez sladkorja**, **knjiga prijatelja**.',
      'Quantities pull genitive plural: **veliko otrok**, **preveč nalog**.',
      'Locative appears after **v, na, o, pri** when static: **v mestu**, **na koncertu**.',
    ],
  },
  {
    id: 'tech',
    title: 'Tehnologija in mediji',
    focus: 'Digital life, news, appointments online',
    emoji: '💻',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Translate: "I will join the video call."', options: ['Pridružil se bom video klicu.', 'Grem na telefon.', 'Imam video pogled.'], answer: 'Pridružil se bom video klicu.' },
      { type: 'choice', prompt: 'Pick the Slovene word for password.', options: ['geslo', 'pass', 'ključ'], answer: 'geslo' },
      { type: 'text', prompt: 'Write: "Please send the attachment."', answer: 'Prosim, pošlji priponko.' },
      { type: 'choice', prompt: 'Choose the media phrase.', options: ['prebrati članek', 'peči članek', 'članek plesati'], answer: 'prebrati članek' },
    ],
    tips: [
      'Use **geslo** for password, **račun** for account.',
      'For news: **članek**, **novice**, **oddaja** (show).',
      'Appointments online: **rezervirati termin**, **video klic**.',
    ],
  },
  {
    id: 'culture',
    title: 'Zapuščina in prazniki',
    focus: 'Holidays, traditions, history snippets',
    emoji: '🎉',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Which day is Prešeren Day?', options: ['8. februar', '25. junij', '31. december'], answer: '8. februar' },
      { type: 'choice', prompt: 'Translate: "We celebrate independence."', options: ['Praznujemo samostojnost.', 'Praznujemo neodvisno.', 'Smo praznovani.'], answer: 'Praznujemo samostojnost.' },
      { type: 'text', prompt: 'Write the carnival figure famous in Ptuj.', answer: 'kurent' },
      { type: 'choice', prompt: 'Pick the historical place.', options: ['Predjamski grad', 'Times Square', 'Niagara'], answer: 'Predjamski grad' },
    ],
    tips: [
      'National holidays: **Prešernov dan (8. 2.)**, **Dan državnosti (25. 6.)**.',
      'Kurentovanje is a UNESCO-listed carnival in Ptuj.',
      'Mention heritage spots: **Predjamski grad**, **Lipica**, **Blejski otok**.',
    ],
  },
  {
    id: 'city-directions',
    title: 'Mesto in usmerjanje',
    focus: 'Directions, transport signs, civic places',
    emoji: '🗺️',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Translate: "Go straight and then left."', options: ['Pojdite naravnost in potem levo.', 'Greš desno in naravnost.', 'Pojdi za levo naravnost.'], answer: 'Pojdite naravnost in potem levo.' },
      { type: 'choice', prompt: 'Pick the sign for "exit".', options: ['izhod', 'vhod', 'pot'], answer: 'izhod' },
      { type: 'text', prompt: 'Write: "near the river" using pri.', answer: 'pri reki' },
      { type: 'choice', prompt: 'Choose the correct noun for town hall.', options: ['občina', 'župnik', 'grad'], answer: 'občina' },
    ],
    tips: [
      'Use **naravnost, levo, desno** for directions; add polite **prosim** when asking.',
      '**vhod/izhod** = entrance/exit, **prehod za pešce** = crosswalk.',
      'Public places: **občina** (municipality), **pošta**, **bankomat**, **trg** (square).',
    ],
  },
  {
    id: 'environment',
    title: 'Okolje in trajnost',
    focus: 'Weather extremes, recycling, nature care',
    emoji: '🌿',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Translate: "We recycle paper and glass."', options: ['Recikliramo papir in steklo.', 'Recikliramo papir in stekleni.', 'Papir in steklo recikliram.'], answer: 'Recikliramo papir in steklo.' },
      { type: 'choice', prompt: 'Pick the word for drought.', options: ['suša', 'sneg', 'megla'], answer: 'suša' },
      { type: 'text', prompt: 'Write the phrase for "protected area".', answer: 'zavarovano območje' },
      { type: 'choice', prompt: 'Choose the correct verb: "to save energy"', options: ['varčevati z energijo', 'rešiti energijo', 'hraniti energijo'], answer: 'varčevati z energijo' },
    ],
    tips: [
      'Eco bins: **papir**, **steklo**, **plastika**, **bio odpadki**.',
      'Extreme weather: **neurje**, **toča**, **poplava**, **suša**.',
      'Use **varčevati z** for saving resources: *varčevati z vodo/energijo*.',
    ],
  },
  {
    id: 'business',
    title: 'Posel in pogajanja',
    focus: 'Meetings, offers, polite negotiation',
    emoji: '📈',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Translate: "We propose a discount."', options: ['Predlagamo popust.', 'Predlagamo račun.', 'Predlagamo ceno.'], answer: 'Predlagamo popust.' },
      { type: 'choice', prompt: 'Pick the right question: "What is your budget?"', options: ['Kakšen je vaš proračun?', 'Koliko je vaša denar?', 'Kakšen je vaš denar?'], answer: 'Kakšen je vaš proračun?' },
      { type: 'text', prompt: 'Write the word for "contract".', answer: 'pogodba' },
      { type: 'choice', prompt: 'Choose the softener for negotiation.', options: ['morda', 'absolutno', 'nikoli'], answer: 'morda' },
    ],
    tips: [
      'Offers: **ponudba**, counter-offer: **protiponudba**, agreement: **dogovor**.',
      'Use polite hedging: **morda**, **zdi se**, **bi lahko**.',
      'Budget = **proračun**, **stroški** = costs, **pogodba** = contract.',
    ],
  },
  {
    id: 'news-opinions',
    title: 'Novice in mnenja',
    focus: 'Sharing opinions, discussing news, connectors',
    emoji: '📰',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Translate: "In my opinion, the city needs more parks."', options: ['Po mojem mnenju mesto potrebuje več parkov.', 'Mesto potrebuje park moje mnenje.', 'Moje mnenje park mesto.'], answer: 'Po mojem mnenju mesto potrebuje več parkov.' },
      { type: 'choice', prompt: 'Pick the connector for contrast.', options: ['vendar', 'tudi', 'zato'], answer: 'vendar' },
      { type: 'text', prompt: 'Write: "according to the article".', answer: 'po članku' },
      { type: 'choice', prompt: 'Choose the verb meaning "to agree".', options: ['strinjati se', 'ujeti se', 'počakati'], answer: 'strinjati se' },
    ],
    tips: [
      'Opinion openers: **po mojem mnenju**, **mislim, da**, **menim, da**.',
      'Connectors: **vendar** (however), **poleg tega** (in addition), **zato** (therefore).',
      'To agree/disagree: **strinjam se / ne strinjam se**.',
    ],
  },
  {
    id: 'exam-writing',
    title: 'Izpit in pisanje',
    focus: 'Emails, complaints, cohesive writing',
    emoji: '📝',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Translate: "Dear Sir or Madam" (formal opening).', options: ['Spoštovani', 'Pozdravljeni prijatelj', 'Hej'], answer: 'Spoštovani' },
      { type: 'choice', prompt: 'Pick the correct ending for a complaint email.', options: ['Hvala za razumevanje.', 'Lp, čao!', 'Ajde.'], answer: 'Hvala za razumevanje.' },
      { type: 'text', prompt: 'Write the phrase for attaching a document.', answer: 'V priponki pošiljam dokument.' },
      { type: 'choice', prompt: 'Choose the paragraph connector meaning "firstly".', options: ['najprej', 'nazadnje', 'kdaj'], answer: 'najprej' },
    ],
    tips: [
      'Formal openings: **Spoštovani**, closings: **Lep pozdrav**.',
      'Complaint language: **želim prijaviti**, **prosim za povračilo**.',
      'Structure with connectors: **najprej**, **potem**, **poleg tega**, **na koncu**.',
    ],
  },
  {
    id: 'idioms-fillers',
    title: 'Fraze in povezovalci',
    focus: 'Idioms, fillers for natural speech',
    emoji: '🧩',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Pick the filler meaning "you know".', options: ['veš', 'zato', 'ker'], answer: 'veš' },
      { type: 'choice', prompt: 'Translate the idiom: "imeti polne roke dela"', options: ['to be very busy', 'to be empty-handed', 'to have big hands'], answer: 'to be very busy' },
      { type: 'text', prompt: 'Write the phrase meaning "just in case".', answer: 'za vsak slučaj' },
      { type: 'choice', prompt: 'Choose the soft agreement.', options: ['Se strinjam, ja.', 'Ne, ne mogoče.', 'To ni moja ideja.'], answer: 'Se strinjam, ja.' },
    ],
    tips: [
      'Fillers: **pač**, **v bistvu**, **mislim**, **veš** make speech natural.',
      'Idioms: **imeti polne roke dela** (be swamped), **iti naravnost na stvar** (get to the point).',
      'Use **za vsak slučaj** for “just in case”, **po svoje** for “in your own way”.',
    ],
  },
  {
    id: 'art-literature',
    title: 'Umetnost in literatura',
    focus: 'Museums, books, describing style',
    emoji: '🎨',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Translate: "I enjoyed the exhibition."', options: ['Uživala sem na razstavi.', 'Uživala sem na razstava.', 'Razstava uživa mene.'], answer: 'Uživala sem na razstavi.' },
      { type: 'choice', prompt: 'Pick the word for "novel".', options: ['roman', 'pesem', 'slika'], answer: 'roman' },
      { type: 'text', prompt: 'Write the adjective for "modern" (art).', answer: 'sodoben' },
      { type: 'choice', prompt: 'Choose the correct phrase: "The book is about history."', options: ['Knjiga je o zgodovini.', 'Knjiga je zgodovina.', 'Zgodovina knjiga je.'], answer: 'Knjiga je o zgodovini.' },
    ],
    tips: [
      'Arts vocabulary: **razstava** (exhibition), **galerija**, **gledališče**, **roman**.',
      'Express taste: **Všeč mi je**, **navdušen sem nad**, **ni mi blizu** (not my style).',
      'Describe style: **sodobna umetnost**, **klasična**, **ljudska glasba**, **poezija**.',
    ],
  },
  {
    id: 'paperwork-admin',
    title: 'Uradne zadeve in finance',
    focus: 'Banking, paperwork, residency appointments',
    emoji: '🏦',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Translate: "I would like to open an account."', options: ['Rad bi odprl račun.', 'Rad bi zaprl račun.', 'Rad bi imel denar.'], answer: 'Rad bi odprl račun.' },
      { type: 'choice', prompt: 'Pick the noun for an appointment at an office.', options: ['termin', 'čas', 'vrsta'], answer: 'termin' },
      { type: 'text', prompt: 'Write: "I need proof of address."', answer: 'Potrebujem potrdilo o prebivališču.' },
      { type: 'choice', prompt: 'Choose the correct preposition: "vloge ___ dokumente" (submit documents)', options: ['oddati', 'iti', 'voziti'], answer: 'oddati' },
    ],
    tips: [
      'Residency/visa paperwork uses **vloga**, **urad**, **termin** (appointment).',
      'Bank phrases: **odpreti / zapreti račun**, **dvig gotovine**, **nakazilo**.',
      'Proofs: **potrdilo o prebivališču**, **zdravstveno zavarovanje**, **osebni dokument**.',
    ],
  },
  {
    id: 'science-innovation',
    title: 'Znanost in inovacije',
    focus: 'STEM vocabulary, presenting findings, polite disagreement',
    emoji: '🧪',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Translate: "The research shows interesting results."', options: ['Raziskava kaže zanimive rezultate.', 'Raziskava ima zanimivo.', 'Rezultat je raziskava.'], answer: 'Raziskava kaže zanimive rezultate.' },
      { type: 'choice', prompt: 'Pick the Slovene word for experiment.', options: ['poskus', 'poskusa', 'poskušnjava'], answer: 'poskus' },
      { type: 'text', prompt: 'Write the verb meaning "to present" findings.', answer: 'predstaviti' },
      { type: 'choice', prompt: 'Choose a polite disagreement opener.', options: ['Se ne strinjam povsem,', 'To je napačno.', 'Ne, narobe.'], answer: 'Se ne strinjam povsem,' },
    ],
    tips: [
      'STEM nouns: **raziskava** (research), **poskus** (experiment), **podatki** (data).',
      'Presenting: **predstaviti rezultate**, **poudariti**, **primerjati**.',
      'Disagree softly: **Se ne strinjam povsem, ampak...**, **Morda bi bilo bolje**, **Po mojem**.',
    ],
  },
  {
    id: 'sports-events',
    title: 'Šport in dogodki',
    focus: 'Sports vocabulary, tickets, cheering at games',
    emoji: '🏟️',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Translate: "He plays for the national team."', options: ['Igra za reprezentanco.', 'Igra za naravo.', 'Igra nacionalno.'], answer: 'Igra za reprezentanco.' },
      { type: 'choice', prompt: 'Pick the noun for match.', options: ['tekma', 'igra', 'igrica'], answer: 'tekma' },
      { type: 'text', prompt: 'Write: "We bought two tickets." (use dva)', answer: 'Kupila sva dve vstopnici.' },
      { type: 'choice', prompt: 'Choose the cheer phrase.', options: ['Gremo, Slovenija!', 'Dober tek!', 'Hvala lepa!'], answer: 'Gremo, Slovenija!' },
    ],
    tips: [
      'Sports: **tekma** (match), **reprezentanca** (national team), **navijač** (fan).',
      'Tickets: **vstopnica**, **sektor**, **tribuna**.',
      'Cheering: **Gremo, Slovenija!**, **Bravo!**, **Gol!**',
    ],
  },
  {
    id: 'dialects-slang',
    title: 'Dialekti in vsakdanji izrazi',
    focus: 'Colloquial fillers, regional words, switching register',
    emoji: '🧢',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Pick the Primorska word for "boy" often heard.', options: ['fanta', 'dečko', 'mulc'], answer: 'mulc' },
      { type: 'choice', prompt: 'Translate the filler "pa kaj potem".', options: ['so what', 'of course', 'right now'], answer: 'so what' },
      { type: 'text', prompt: 'Write the Ljubljana café way to say “coffee to go.”', answer: 'kava za s sabo' },
      { type: 'choice', prompt: 'Choose the formal equivalent of “ful dobro.”', options: ['zelo dobro', 'dobr ful', 'dobra polno'], answer: 'zelo dobro' },
    ],
    tips: [
      'Colloquial intensity: **ful dobro** = zelo dobro; formalize to **zelo/odlično** in emails.',
      'Regional: **kruh** vs. **žemlja** (roll), **mulc** (kid), **bajta** (house, informal).',
      'Register shift: swap **pa kaj potem** with softer **ni problema** depending on context.',
    ],
  },
  {
    id: 'history-heritage',
    title: 'Zgodovina in dediščina',
    focus: 'Landmarks, key dates, and heritage vocabulary',
    emoji: '🏰',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Translate: "The castle is from the 12th century."', options: ['Grad je iz 12. stoletja.', 'Grad je 12 stoletje.', 'Grad je stoletni.'], answer: 'Grad je iz 12. stoletja.' },
      { type: 'choice', prompt: 'Pick the Slovene word for heritage site.', options: ['dediščina', 'podedovanje', 'dedovanje'], answer: 'dediščina' },
      { type: 'text', prompt: 'Write: "He visited the museum exhibition." (masc.)', answer: 'Obiskal je muzejsko razstavo.' },
      { type: 'choice', prompt: 'Choose the correct commemorative day.', options: ['Prešernov dan', 'Valentinovo', 'Noč čarovnic'], answer: 'Prešernov dan' },
    ],
    tips: [
      'Heritage = **dediščina**, cultural site = **spomenik**; UNESCO listing is **seznam svetovne dediščine**.',
      'Prešernov dan (8. februar) is Culture Day; many museums are free.',
      'Describe history with **iz + rodilnik**: *Grad je iz 12. stoletja.*',
    ],
  },
  {
    id: 'listening-media',
    title: 'Poslušanje in mediji',
    focus: 'Listening strategies, subtitles, summarizing audio',
    emoji: '🎧',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Pick the verb for “to subtitle.”', options: ['podnasloviti', 'nasloviti', 'prebrati'], answer: 'podnasloviti' },
      { type: 'choice', prompt: 'Translate: "Turn on slower playback."', options: ['Vklopi počasnejše predvajanje.', 'Prižgi tišino.', 'Predvajaj hitro.'], answer: 'Vklopi počasnejše predvajanje.' },
      { type: 'text', prompt: 'Write the noun meaning “transcript.”', answer: 'prepis' },
      { type: 'choice', prompt: 'Choose the summary sentence starter.', options: ['Posnetek govori o...', 'Všeč mi je...', 'Kaj misliš?'], answer: 'Posnetek govori o...' },
    ],
    tips: [
      'Ask for slower speed: **Lahko predvajaš počasneje?**; subtitles = **podnapisi**.',
      'Summaries: **Posnetek govori o...**, **Glavne točke so...**, **Govorec poudari, da...**',
      'Combine listening + writing with **prepis** (transcript) to reinforce endings.',
    ],
  },
  {
    id: 'debate-rhetoric',
    title: 'Razprava in retorika',
    focus: 'Agree/disagree politely, linking arguments, hedging',
    emoji: '🧭',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Choose a soft disagreement opener.', options: ['Razumem, vendar...', 'To je slabo.', 'Nima smisla.'], answer: 'Razumem, vendar...' },
      { type: 'choice', prompt: 'Pick a connector for contrast.', options: ['vendar', 'in', 'ali'], answer: 'vendar' },
      { type: 'text', prompt: 'Write: "In my opinion" in Slovene.', answer: 'Po mojem mnenju' },
      { type: 'choice', prompt: 'Select the hedging adverb.', options: ['morda', 'zanesljivo', 'vedno'], answer: 'morda' },
    ],
    tips: [
      'Polite debate starters: **Po mojem mnenju**, **Razumem, vendar**, **Delno se strinjam**.',
      'Link reasons with **ker/zato**, contrast with **vendar/vseeno**.',
      'Hedging: **morda**, **verjetno**, **predvidevam, da**.',
    ],
  },
  {
    id: 'research-writing',
    title: 'Pisanje poročil',
    focus: 'Abstracts, structure, citing sources in Slovene',
    emoji: '📝',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Translate: "The purpose of this report is..."', options: ['Namen tega poročila je...', 'Poročilo je namen.', 'To poročilo namen je.'], answer: 'Namen tega poročila je...' },
      { type: 'choice', prompt: 'Pick the word for appendix (document).', options: ['priloga', 'dodatek', 'dodaj'], answer: 'priloga' },
      { type: 'text', prompt: 'Write a citation verb meaning “to reference.”', answer: 'navesti' },
      { type: 'choice', prompt: 'Choose a closing formula.', options: ['Hvala za pozornost.', 'Lep pozdrav in dober tek.', 'Adijo.'], answer: 'Hvala za pozornost.' },
    ],
    tips: [
      'Structure: **Namen**, **Metodologija**, **Rezultati**, **Zaključek**.',
      'Appendix = **priloga**; cite with **navesti vir**.',
      'Close formal texts with **Hvala za pozornost** or **Lep pozdrav**.',
    ],
  },
  {
    id: 'service-complaints',
    title: 'Reševanje težav',
    focus: 'Service issues, complaints, and fixes',
    emoji: '🛠️',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Translate: "There is an issue with the bill."', options: ['Račun ima težavo.', 'Račun je problem.', 'Račun je dobro.'], answer: 'Račun ima težavo.' },
      { type: 'choice', prompt: 'Pick the verb for to refund.', options: ['povrniti', 'vrniti se', 'pobrati'], answer: 'povrniti' },
      { type: 'text', prompt: 'Write: "Could you fix this quickly?"', answer: 'Bi lahko to hitro popravili?' },
      { type: 'choice', prompt: 'Choose the polite opener.', options: ['Oprostite, opazil sem...', 'To je narobe!', 'Popravi to.'], answer: 'Oprostite, opazil sem...' },
    ],
    tips: [
      'Polite complaint: **Oprostite, opazil sem...**, **Zdi se, da je napaka na računu.**',
      'Refund/return = **povračilo**, **povrniti denar**; repair = **popraviti**.',
      'Offer solutions: **Lahko zamenjate izdelek?**, **Bi lahko preverili račun?**',
    ],
  },
  {
    id: 'weather-climate',
    title: 'Vreme in podnebje',
    focus: 'Forecasts, temperatures, and climate change talk',
    emoji: '🌦️',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Translate: "It will be cloudy and windy."', options: ['Bilo bo oblačno in vetrovno.', 'Je oblak in veter.', 'Oblačno bo veter.'], answer: 'Bilo bo oblačno in vetrovno.' },
      { type: 'choice', prompt: 'Pick the correct degree phrase.', options: ['minus pet stopinj', 'pet minus stopinj', 'pet stopinj minus'], answer: 'minus pet stopinj' },
      { type: 'text', prompt: 'Write the noun meaning “heat wave.”', answer: 'vročinski val' },
      { type: 'choice', prompt: 'Choose the climate change verb.', options: ['se segreva', 'se ogreva', 'se hladi'], answer: 'se segreva' },
    ],
    tips: [
      'Weather report: **Danes bo sončno/oblačno/vetrovno/deževno.**',
      'Temperature: **plus/minus** + number + **stopinj**; freezing = **zmrzuje**.',
      'Climate: **podnebje se segreva**, **podnebne spremembe**, **poplave** (floods).',
    ],
  },
  {
    id: 'tech-support',
    title: 'Tehnika in podpora',
    focus: 'Devices, troubleshooting, online safety',
    emoji: '🖥️',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Translate: "The Wi‑Fi does not work."', options: ['Wi‑Fi ne deluje.', 'Wi‑Fi ne delaš.', 'Wi‑Fi ni dela.'], answer: 'Wi‑Fi ne deluje.' },
      { type: 'choice', prompt: 'Pick the verb for “to restart.”', options: ['znova zagnati', 'ponovno začeti', 'prebrati'], answer: 'znova zagnati' },
      { type: 'text', prompt: 'Write the noun for “settings.”', answer: 'nastavitve' },
      { type: 'choice', prompt: 'Choose the safe password tip.', options: ['dolgo geslo z znaki', 'geslo = ime', 'geslo brez črk'], answer: 'dolgo geslo z znaki' },
    ],
    tips: [
      'Restart a device = **znova zagnati**, **ponovni zagon**.',
      'Settings = **nastavitve**, update = **posodobitev**, backup = **varnostna kopija**.',
      'Safety talk: **dvofaktorska prijava**, **močno geslo**, **preveriti vir** (verify the source).',
    ],
  },
  {
    id: 'community-events',
    title: 'Skupnost in dogodki',
    focus: 'Local clubs, volunteering, and neighborhood news',
    emoji: '🤝',
    progress: 0,
    exercises: [
      { type: 'choice', prompt: 'Translate: "There is a neighborhood meeting tomorrow."', options: ['Jutri je zbor soseske.', 'Sosedje jutri srečajo.', 'Soseska jutri je.'], answer: 'Jutri je zbor soseske.' },
      { type: 'choice', prompt: 'Pick the word for volunteer (noun).', options: ['prostovoljec', 'volilec', 'prosti čas'], answer: 'prostovoljec' },
      { type: 'text', prompt: 'Write: "We are collecting donations."', answer: 'Zbiramo donacije.' },
      { type: 'choice', prompt: 'Choose the phrase for “community center.”', options: ['kulturni dom', 'središče doma', 'dom kulture'], answer: 'kulturni dom' },
    ],
    tips: [
      'Community = **skupnost**, neighborhood = **soseska**; meeting = **zbor** or **sestanek**.',
      'Volunteer (n.) **prostovoljec/prostovoljka**; to volunteer = **prostovoljiti**.',
      'Events often happen at **kulturni dom**, **društvo** (club), or **občina** (municipality offices).',
    ],
  },
];

const tipsList = [
  'Listen to Radio Si or Slovenian podcasts for authentic rhythm.',
  'Shadow sentences aloud: **Kdo si? Kako ti je ime?**',
  'Track cases with colors: nominative (blue), accusative (red), dative (green).',
  'Notice dual forms (midva/midve) when counting people.',
  'Watch the daily news snippet on RTV SLO and imitate the first 30 seconds.',
  'Build mini-scenarios: order coffee, book a train ticket, then ask for directions.',
  'Watch one Slovene vlog weekly and write 3 new phrases in a journal.',
  'Switch your phone to Slovene for 24 hours to reinforce interface vocabulary.',
  'Summarize one article weekly in 3 bullet points using ker/zato/vendar.',
  'Read a museum blurb aloud; then rewrite it in two shorter sentences.',
  'Scan official forms for **ime/priemek/naslov** so paperwork goes faster at the counter.',
  'Try paraphrasing a science headline in two registers: casual chat vs. short presentation.',
];

const coachPlan = [
  {
    day: 'Day 1',
    focus: 'Greetings + numbers',
    tasks: ['Pozdravi in osnove', 'Številke in čas', '5-question sprint'],
  },
  {
    day: 'Day 2',
    focus: 'Cases + travel basics',
    tasks: ['Skloni: tožilnik in dajalnik', 'Potovanja in bivanje', 'Case dojo'],
  },
  {
    day: 'Day 3',
    focus: 'Food + shopping',
    tasks: ['Hrana in restavracija', 'Nakupe in denar', 'Mixed drill'],
  },
  {
    day: 'Day 4',
    focus: 'Work + future',
    tasks: ['Delo in šola', 'Prihodnost in pogojnik', 'Warmup sprint'],
  },
  {
    day: 'Day 5',
    focus: 'Health + small talk',
    tasks: ['Zdravje in nuja', 'Klepet in kultura', 'Weekend challenge'],
  },
  {
    day: 'Day 6',
    focus: 'Cases + opinions',
    tasks: ['Skloni: rodilnik in mestnik', 'Novice in mnenja', 'Mixed drill'],
  },
  {
    day: 'Day 7',
    focus: 'Business + writing',
    tasks: ['Posel in pogajanja', 'Izpit in pisanje', 'Story mode'],
  },
  {
    day: 'Day 8',
    focus: 'Paperwork + register shift',
    tasks: ['Uradne zadeve in finance', 'Dialekti in vsakdanji izrazi', 'Warmup sprint'],
  },
  {
    day: 'Day 9',
    focus: 'Sports + science recap',
    tasks: ['Šport in dogodki', 'Znanost in inovacije', 'Mixed drill'],
  },
];

const achievements = [
  { label: 'Explorer', detail: 'Tried 5 different units', icon: '🧭' },
  { label: 'Streak saver', detail: 'Completed a warmup sprint', icon: '🔥' },
  { label: 'Grammar ninja', detail: 'Finished a case dojo', icon: '🀄' },
  { label: 'Traveler', detail: 'Won the weekend challenge', icon: '🛄' },
];

const phrasebook = [
  { tag: 'Restaurant', phrase: 'Lahko dobim račun, prosim?', hint: 'Can I get the bill, please?' },
  { tag: 'Directions', phrase: 'Kje je najbližja avtobusna postaja?', hint: 'Where is the nearest bus stop?' },
  { tag: 'Work', phrase: 'Imamo rok jutri, lahko pomagaš?', hint: 'We have a deadline tomorrow, can you help?' },
  { tag: 'Health', phrase: 'Boli me grlo in imam vročino.', hint: 'My throat hurts and I have a fever.' },
];

const roadmap = [
  {
    title: 'Bridge to B1',
    focus: 'Clean up grammar gaps and add complex sentences.',
    items: ['Shadow a daily news paragraph aloud.', 'Alternate perfective/imperfective in mini stories.', 'Practice dual/plural drills with cases.'],
  },
  {
    title: 'Conversation depth',
    focus: 'Handle follow-up questions and opinions.',
    items: ['Rephrase answers with zato/ker (because).', 'Use **bi** for soft suggestions: Bi šli na pohod?', 'Add emotions with res, morda, verjetno.'],
  },
  {
    title: 'Certification warmup',
    focus: 'Align with basic A2/B1 exam tasks.',
    items: ['Write 5–6 sentence email requests.', 'Describe a photo in 6 keywords.', 'Roleplay complaint/reservation calls.'],
  },
];

const topicTree = [
  {
    lane: 'Foundations',
    tag: 'A1',
    blurb: 'Greetings, numbers, polite basics, moving around the city.',
    nodes: [
      { lesson: 'greetings', label: 'Pozdravi', status: 'active' },
      { lesson: 'numbers', label: 'Številke', status: 'active' },
      { lesson: 'family', label: 'Družina', status: 'next' },
      { lesson: 'city-directions', label: 'Smeri', status: 'next' },
      { lesson: 'food', label: 'Hrana', status: 'locked' },
    ],
  },
  {
    lane: 'Everyday moves',
    tag: 'A2',
    blurb: 'Shopping, travel, cases, housing, culture, emergencies.',
    nodes: [
      { lesson: 'shopping', label: 'Nakupe', status: 'active' },
      { lesson: 'travel', label: 'Potovanja', status: 'active' },
      { lesson: 'cases', label: 'Skloni', status: 'active' },
      { lesson: 'housing', label: 'Dom', status: 'next' },
      { lesson: 'health', label: 'Nujno', status: 'next' },
      { lesson: 'weather-climate', label: 'Vreme', status: 'next' },
      { lesson: 'culture', label: 'Prazniki', status: 'locked' },
      { lesson: 'environment', label: 'Okolje', status: 'locked' },
    ],
  },
  {
    lane: 'Fluent stories',
    tag: 'B1 bridge',
    blurb: 'Opinions, connectors, business, news, idioms, art.',
    nodes: [
      { lesson: 'past-tense', label: 'Preteklik', status: 'active' },
      { lesson: 'future-conditional', label: 'Prihodnost', status: 'active' },
      { lesson: 'verbs', label: 'Vid + gibanje', status: 'next' },
      { lesson: 'news-opinions', label: 'Mnenja', status: 'next' },
      { lesson: 'business', label: 'Posel', status: 'locked' },
      { lesson: 'community-events', label: 'Skupnost', status: 'locked' },
      { lesson: 'idioms-fillers', label: 'Fraze', status: 'locked' },
      { lesson: 'exam-writing', label: 'Pisanje', status: 'locked' },
      { lesson: 'art-literature', label: 'Umetnost', status: 'locked' },
    ],
  },
  {
    lane: 'Real-world proof',
    tag: 'B1+',
    blurb: 'Admin tasks, science talk, stadium phrases, and register switching.',
    nodes: [
      { lesson: 'paperwork-admin', label: 'Uradno', status: 'next' },
      { lesson: 'science-innovation', label: 'Znanost', status: 'locked' },
      { lesson: 'tech-support', label: 'Tehnika', status: 'locked' },
      { lesson: 'sports-events', label: 'Šport', status: 'locked' },
      { lesson: 'dialects-slang', label: 'Dialekti', status: 'locked' },
      { lesson: 'service-complaints', label: 'Reklamacije', status: 'locked' },
    ],
  },
  {
    lane: 'Polish & present',
    tag: 'B1+/B2-lite',
    blurb: 'Listening strategy, heritage contexts, debate, and formal writing.',
    nodes: [
      { lesson: 'listening-media', label: 'Poslušanje', status: 'next' },
      { lesson: 'history-heritage', label: 'Dediščina', status: 'locked' },
      { lesson: 'debate-rhetoric', label: 'Razprava', status: 'locked' },
      { lesson: 'research-writing', label: 'Poročila', status: 'locked' },
    ],
  },
];

const labs = [
  { label: 'Pronunciation lab', detail: 'Shadow č/š/ž clusters and rolled r with slow playback cues.' },
  { label: 'Dictation minute', detail: 'Type what you hear from a slow news intro; compare endings.' },
  { label: 'Dialogue loop', detail: 'Repeat invites + refusals: Mogoče drugič, danes sem zaseden.' },
  { label: 'Intonation swipe', detail: 'Rise at yes/no questions: Greš z nami?, fall at statements.' },
];

const cultureCards = [
  { title: 'Regional flavors', note: 'Štruklji, prekmurska gibanica, and kraški pršut show dialect words on menus.' },
  { title: 'Politeness ladder', note: 'Switch med/medtem vs. medtem ko, and vi vs. ti depending on context.' },
  { title: 'Transit hacks', note: 'Validate bus cards (Urbana) and ask for postaja na zahtevo (request stop).' },
];

const quests = [
  { title: 'Warmup sprint', detail: '5 taps to refresh greetings + numbers.', status: 'ready' },
  { title: 'Pronunciation loop', detail: 'Shadow “Kaj počneš danes?” twice.', status: 'new' },
  { title: 'Immersion drip', detail: '1 short listen/read from the lane below.', status: 'lite' },
  { title: 'Case snap', detail: 'Spot 3 accusative endings in context.', status: 'ready' },
];

const immersionFeed = [
  { type: 'Audio mini', title: 'Kava z prijatelji', length: '2:10', note: 'Shadow café small talk about plans.', tag: 'A1-A2' },
  { type: 'Micro article', title: 'Vikend v Bohinju', length: '3 min', note: 'Read a weekend trip with prepositions v/na.', tag: 'Travel' },
  { type: 'Dialog', title: 'Na pošti', length: '2:30', note: 'Practice bill paying phrases at the counter.', tag: 'Errands' },
  { type: 'News byte', title: 'Vreme danes', length: '1:40', note: 'Listen for weather adjectives and numbers.', tag: 'Weather' },
];

const scenarioPacks = [
  {
    title: 'Café + Wi‑Fi fix',
    level: 'A2',
    beats: ['Order espresso & štrukelj', 'Ask for Wi‑Fi and seating', 'Politely swap a wrong drink'],
  },
  {
    title: 'Job call & scheduling',
    level: 'B1',
    beats: ['Confirm time with ob + locative', 'Clarify tasks and deadlines', 'Send follow-up email line'],
  },
  {
    title: 'Emergency + directions',
    level: 'A2-B1',
    beats: ['Call 112 and describe symptoms', 'Ask for nearest lekarna', 'Give short directions to a helper'],
  },
  {
    title: 'Community meeting',
    level: 'B1+',
    beats: ['Open with polite greeting', 'State an agenda item', 'Close with proposal and vote'],
  },
];

const grammarShots = [
  { label: 'Rodilnik po iz/od', tip: 'Iz/od + genitive for origin: iz Maribora, od zdravnika.' },
  { label: 'Mestnik kraja', tip: 'O/na/v + locative for location: v Ljubljani, na pošti, o koncertu.' },
  { label: 'Vid (aspect)', tip: 'Plan vs. complete: bom bral (ongoing) vs. bom prebral (finished).' },
  { label: 'Vreme števniki', tip: 'Use stopinj (gen.) after numbers: 12 stopinj, minus dve stopinji.' },
  { label: 'Prijazna prošnja', tip: 'Bi lahko + nedoločnik softens requests: Bi lahko preverili račun?' },
];

const examSprints = [
  { title: 'Poslušanje · vreme', timer: '4 min', focus: 'Listen to forecast and jot temps + warnings.' },
  { title: 'Branje · obvestilo', timer: '6 min', focus: 'Scan a community notice and extract dates/places.' },
  { title: 'Pisanje · email', timer: '8 min', focus: 'Write a polite support email with problem + request.' },
  { title: 'Govorni oris', timer: '5 min', focus: 'Outline a short talk on tech safety or volunteering.' },
];

const milestones = [
  {
    label: 'Checkpoint 1 · Survival',
    status: 'complete',
    summary: 'Finish greetings, numbers, and food basics.',
    tasks: ['Pozdravi in osnove', 'Številke in čas', 'Hrana in restavracija'],
  },
  {
    label: 'Checkpoint 2 · Everyday',
    status: 'progress',
    summary: 'Be ready for travel, cases, and emergency talk.',
    tasks: ['Potovanja in bivanje', 'Skloni: tožilnik in dajalnik', 'Zdravje in nuja'],
  },
  {
    label: 'Checkpoint 3 · Story lane',
    status: 'progress',
    summary: 'Tell short stories and react to news/opinions.',
    tasks: ['Preteklik in deležniki', 'Prihodnost in pogojnik', 'Novice in mnenja'],
  },
  {
    label: 'Checkpoint 4 · Bridge proof',
    status: 'locked',
    summary: 'Handle paperwork plus debate/listening tasks.',
    tasks: ['Uradne zadeve in finance', 'Znanost in inovacije', 'Poslušanje in mediji'],
  },
  {
    label: 'Checkpoint 5 · Community & tech',
    status: 'locked',
    summary: 'Survive weather alerts, tech outages, and local announcements.',
    tasks: ['Vreme in podnebje', 'Tehnika in podpora', 'Skupnost in dogodki'],
  },
];

const momentumWeek = [
  { label: 'Mon', filled: 80, tone: 'steady' },
  { label: 'Tue', filled: 100, tone: 'bright' },
  { label: 'Wed', filled: 60, tone: 'rest' },
  { label: 'Thu', filled: 90, tone: 'steady' },
  { label: 'Fri', filled: 70, tone: 'steady' },
  { label: 'Sat', filled: 40, tone: 'rest' },
  { label: 'Sun', filled: 55, tone: 'rest' },
];

const microStats = [
  { label: 'Avg. session', value: '7 min', detail: 'Your best focus is mornings before 10:00.' },
  { label: 'Most confident', value: 'Tožilnik', detail: 'You rarely miss direct-object endings.' },
  { label: 'Immersion hits', value: '3/4', detail: 'Keep the daily drip to hold your streak.' },
];

let currentLesson = null;
let currentIndex = 0;
let xp = 0;
let streak = 3;
const goal = 10; // target questions per day
let treeFilter = 'all';

const unitGrid = document.getElementById('unit-grid');
const tipsContainer = document.getElementById('tips');
const sessionEl = document.getElementById('session');
const versionBadge = document.getElementById('app-version');
const platformLabel = document.getElementById('app-platform');
const promptText = document.getElementById('prompt-text');
const choicesEl = document.getElementById('choices');
const inputRow = document.getElementById('input-row');
const textAnswer = document.getElementById('text-answer');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const skipBtn = document.getElementById('skip-btn');
const feedbackEl = document.getElementById('feedback');
const sessionTitle = document.getElementById('session-title');
const sessionProgress = document.getElementById('session-progress');
const xpPill = document.getElementById('xp-pill');
const streakPill = document.getElementById('streak-pill');
const startBtn = document.getElementById('start-btn');
const resumeBtn = document.getElementById('resume-btn');
const reviewBtn = document.getElementById('review-btn');
const warmupBtn = document.getElementById('warmup-btn');
const mixBtn = document.getElementById('mix-btn');
const caseBtn = document.getElementById('case-btn');
const travelBtn = document.getElementById('travel-btn');
const storyBtn = document.getElementById('story-btn');
const advancedBtn = document.getElementById('advanced-btn');
const goalPercent = document.getElementById('goal-percent');
const ring = document.getElementById('ring-progress');
const fallbackSection = document.getElementById('fallback');
const coachGrid = document.getElementById('coach-grid');
const achievementGrid = document.getElementById('achievements');
const phrasebookEl = document.getElementById('phrasebook');
const roadmapEl = document.getElementById('roadmap');
const labGrid = document.getElementById('labs');
const cultureGrid = document.getElementById('culture');
const questList = document.getElementById('quest-list');
const immersionList = document.getElementById('immersion-list');
const momentumBars = document.getElementById('momentum-bars');
const microStatsEl = document.getElementById('micro-stats');
const skillTreeEl = document.getElementById('skill-tree');
const treeFilters = document.getElementById('tree-filters');
const milestoneGrid = document.getElementById('milestone-grid');
const scenarioGrid = document.getElementById('scenario-grid');
const grammarGrid = document.getElementById('grammar-grid');
const examList = document.getElementById('exam-list');

function setDesktopBadges() {
  if (versionBadge) {
    const tag = window.SloveneQuestDesktop?.version ? `v${window.SloveneQuestDesktop.version}` : 'desktop';
    versionBadge.textContent = tag;
  }

  if (platformLabel) {
    const platform = window.SloveneQuestDesktop?.platform;
    if (platform === 'darwin') platformLabel.textContent = 'Ready for macOS';
    else if (platform === 'win32') platformLabel.textContent = 'Ready for Windows';
    else if (platform === 'linux') platformLabel.textContent = 'Ready for Linux';
    else if (platform) platformLabel.textContent = `Ready on ${platform}`;
  }
}

function renderUnits() {
  const template = document.getElementById('unit-template');
  lessons.forEach((lesson) => {
    const clone = template.content.cloneNode(true);
    const unit = clone.querySelector('.unit');
    unit.querySelector('.unit-icon').textContent = lesson.emoji;
    unit.querySelector('.eyebrow').textContent = lesson.focus;
    unit.querySelector('h4').textContent = lesson.title;
    unit.querySelector('.muted').textContent = `${lesson.exercises.length} quick tasks`;
    unit.querySelector('.fill').style.width = `${lesson.progress * 100}%`;
    unit.querySelector('.primary').addEventListener('click', () => beginLesson(lesson));
    unitGrid.appendChild(clone);
  });
}

function renderTips() {
  tipsContainer.innerHTML = '';
  lessons.forEach((lesson) => {
    lesson.tips.forEach((tip) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${lesson.title}:</strong> ${tip}`;
      tipsContainer.appendChild(li);
    });
  });
  tipsList.forEach((tip) => {
    const li = document.createElement('li');
    li.textContent = tip;
    tipsContainer.appendChild(li);
  });
}

function renderCoach() {
  if (!coachGrid) return;
  coachGrid.innerHTML = '';
  coachPlan.forEach((block) => {
    const item = document.createElement('div');
    item.className = 'coach-block';
    item.innerHTML = `
      <div class="coach-day">${block.day}</div>
      <h4>${block.focus}</h4>
      <ul>
        ${block.tasks.map((t) => `<li>${t}</li>`).join('')}
      </ul>
    `;
    coachGrid.appendChild(item);
  });
}

function renderAchievements() {
  if (!achievementGrid) return;
  achievementGrid.innerHTML = '';
  achievements.forEach((badge) => {
    const item = document.createElement('div');
    item.className = 'achievement';
    item.innerHTML = `
      <div class="achievement-icon">${badge.icon}</div>
      <div>
        <p class="eyebrow">${badge.detail}</p>
        <h4>${badge.label}</h4>
      </div>
    `;
    achievementGrid.appendChild(item);
  });
}

function renderPhrasebook() {
  if (!phrasebookEl) return;
  phrasebookEl.innerHTML = '';
  phrasebook.forEach((entry) => {
    const card = document.createElement('div');
    card.className = 'phrase';
    card.innerHTML = `
      <div class="eyebrow">${entry.tag}</div>
      <h4>${entry.phrase}</h4>
      <p class="muted">${entry.hint}</p>
    `;
    phrasebookEl.appendChild(card);
  });
}

function renderRoadmap() {
  if (!roadmapEl) return;
  roadmapEl.innerHTML = '';
  roadmap.forEach((step) => {
    const card = document.createElement('div');
    card.className = 'roadmap-step';
    card.innerHTML = `
      <p class="eyebrow">${step.title}</p>
      <h4>${step.focus}</h4>
      <ul>${step.items.map((item) => `<li>${item}</li>`).join('')}</ul>
    `;
    roadmapEl.appendChild(card);
  });
}

function renderTree() {
  if (!skillTreeEl) return;
  skillTreeEl.innerHTML = '';
  topicTree.forEach((tier) => {
    const row = document.createElement('div');
    row.className = 'tree-row';
    const label = document.createElement('div');
    label.className = 'tree-label';
    label.innerHTML = `
      <p class="eyebrow">${tier.tag}</p>
      <h4>${tier.lane}</h4>
      <p class="muted">${tier.blurb}</p>
    `;

    const track = document.createElement('div');
    track.className = 'tree-track';

    tier.nodes.forEach((node, idx) => {
      const lesson = lessons.find((l) => l.id === node.lesson);
      const card = document.createElement('div');
      card.className = `tree-node status-${node.status}`;
      card.dataset.status = node.status;
      const progress = Math.round((lesson?.progress || 0) * 100);
      const statusLabel = node.status === 'active' ? 'Now' : node.status === 'next' ? 'Next' : 'Queued';
      card.innerHTML = `
        <div class="node-meta">
          <span class="node-rank">${idx + 1}</span>
          <div class="node-chip">${lesson?.emoji || '✨'} <span>${statusLabel}</span></div>
        </div>
        <h5>${node.label || lesson?.title || node.lesson}</h5>
        <p>${node.focus || lesson?.focus || ''}</p>
        <div class="micro-bar"><span style="width:${progress}%;"></span></div>
      `;
      track.appendChild(card);
    });

    row.appendChild(label);
    row.appendChild(track);
    skillTreeEl.appendChild(row);
  });

  applyTreeFilter(treeFilter);
}

function applyTreeFilter(filter = 'all') {
  treeFilter = filter;
  const nodes = skillTreeEl?.querySelectorAll('.tree-node') || [];
  nodes.forEach((node) => {
    const matches = filter === 'all' || node.dataset.status === filter;
    node.classList.toggle('dimmed', !matches);
  });

  if (treeFilters) {
    treeFilters.querySelectorAll('.chip').forEach((chip) => {
      chip.classList.toggle('filled', chip.dataset.filter === filter);
    });
  }
}

function renderLabs() {
  if (!labGrid) return;
  labGrid.innerHTML = '';
  labs.forEach((lab) => {
    const card = document.createElement('div');
    card.className = 'lab-card';
    card.innerHTML = `
      <h4>${lab.label}</h4>
      <p class="muted">${lab.detail}</p>
    `;
    labGrid.appendChild(card);
  });
}

function renderCulture() {
  if (!cultureGrid) return;
  cultureGrid.innerHTML = '';
  cultureCards.forEach((entry) => {
    const card = document.createElement('div');
    card.className = 'culture-card';
    card.innerHTML = `
      <p class="eyebrow">${entry.title}</p>
      <p>${entry.note}</p>
    `;
    cultureGrid.appendChild(card);
  });
}

function renderQuests() {
  if (!questList) return;
  questList.innerHTML = '';
  quests.forEach((quest) => {
    const card = document.createElement('div');
    card.className = 'quest';
    card.innerHTML = `
      <span class="quest-status ${quest.status}">${quest.status === 'ready' ? 'On deck' : quest.status === 'new' ? 'New' : 'Lite'}</span>
      <h4>${quest.title}</h4>
      <p class="muted">${quest.detail}</p>
    `;
    questList.appendChild(card);
  });
}

function renderImmersion() {
  if (!immersionList) return;
  immersionList.innerHTML = '';
  immersionFeed.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'immersion-card';
    card.innerHTML = `
      <div class="immersion-meta">
        <span>${item.type}</span>
        <span>•</span>
        <span>${item.length}</span>
        <span class="pill ghost">${item.tag}</span>
      </div>
      <h4>${item.title}</h4>
      <p>${item.note}</p>
    `;
    immersionList.appendChild(card);
  });
}

function renderScenarios() {
  if (!scenarioGrid) return;
  scenarioGrid.innerHTML = '';
  scenarioPacks.forEach((pack) => {
    const card = document.createElement('div');
    card.className = 'scenario-card';
    card.innerHTML = `
      <div class="scenario-top">
        <span class="pill ghost">${pack.level}</span>
        <h4>${pack.title}</h4>
      </div>
      <ul>${pack.beats.map((beat) => `<li>${beat}</li>`).join('')}</ul>
    `;
    scenarioGrid.appendChild(card);
  });
}

function renderGrammarShots() {
  if (!grammarGrid) return;
  grammarGrid.innerHTML = '';
  grammarShots.forEach((shot) => {
    const card = document.createElement('div');
    card.className = 'grammar-card';
    card.innerHTML = `
      <p class="eyebrow">${shot.label}</p>
      <p>${shot.tip}</p>
    `;
    grammarGrid.appendChild(card);
  });
}

function renderExamSprints() {
  if (!examList) return;
  examList.innerHTML = '';
  examSprints.forEach((sprint) => {
    const card = document.createElement('div');
    card.className = 'exam-card';
    card.innerHTML = `
      <div class="exam-meta">
        <span>${sprint.timer}</span>
        <span class="pill ghost">${sprint.title}</span>
      </div>
      <p>${sprint.focus}</p>
    `;
    examList.appendChild(card);
  });
}

function renderMilestones() {
  if (!milestoneGrid) return;
  milestoneGrid.innerHTML = '';

  milestones.forEach((ms) => {
    const card = document.createElement('div');
    card.className = `milestone ${ms.status}`;
    const statusLabel = ms.status === 'complete' ? 'Complete' : ms.status === 'progress' ? 'In progress' : 'Queued';
    card.innerHTML = `
      <span class="pill ${ms.status === 'complete' ? '' : 'ghost'}">${statusLabel}</span>
      <h4>${ms.label}</h4>
      <p class="muted">${ms.summary}</p>
      <ul>${ms.tasks.map((task) => `<li>${task}</li>`).join('')}</ul>
    `;
    milestoneGrid.appendChild(card);
  });
}

function renderMomentum() {
  if (!momentumBars || !microStatsEl) return;
  momentumBars.innerHTML = '';
  momentumWeek.forEach((day) => {
    const row = document.createElement('div');
    row.className = 'momentum-bar';
    const toneLabel = day.tone === 'bright' ? 'Goal met' : day.tone === 'steady' ? 'On track' : 'Rest';
    row.innerHTML = `
      <div class="label">${day.label} · ${toneLabel}</div>
      <div class="momentum-track"><span class="fill" style="width:${day.filled}%;"></span></div>
    `;
    momentumBars.appendChild(row);
  });

  microStatsEl.innerHTML = '';
  microStats.forEach((stat) => {
    const card = document.createElement('div');
    card.className = 'micro-card';
    card.innerHTML = `
      <p class="eyebrow">${stat.label}</p>
      <h4>${stat.value}</h4>
      <p>${stat.detail}</p>
    `;
    microStatsEl.appendChild(card);
  });
}

function updatePills() {
  xpPill.textContent = `XP ${xp}`;
  streakPill.textContent = `🔥 ${streak}-day streak`;
  const completed = Math.min(xp / goal, 1);
  const percent = Math.round(completed * 100);
  goalPercent.textContent = `${percent}%`;
  ring.style.strokeDashoffset = 339.292 * (1 - completed);
}

function beginLesson(lesson) {
  currentLesson = lesson;
  currentIndex = 0;
  sessionTitle.textContent = `${lesson.title} · ${lesson.focus}`;
  sessionEl.hidden = false;
  loadExercise();
  window.scrollTo({ top: sessionEl.offsetTop, behavior: 'smooth' });
}

function loadExercise() {
  if (!currentLesson) return;
  const exercise = currentLesson.exercises[currentIndex];
  sessionProgress.textContent = `${currentIndex + 1}/${currentLesson.exercises.length}`;
  promptText.textContent = exercise.prompt;
  feedbackEl.textContent = '';
  nextBtn.disabled = true;
  submitBtn.disabled = false;
  textAnswer.disabled = false;
  choicesEl.innerHTML = '';
  inputRow.hidden = true;

  if (exercise.type === 'choice') {
    choicesEl.style.display = 'grid';
    exercise.options.forEach((opt) => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => checkChoice(btn, exercise.answer));
      choicesEl.appendChild(btn);
    });
  } else {
    choicesEl.style.display = 'none';
    inputRow.hidden = false;
    textAnswer.value = '';
    textAnswer.focus();
  }
}

function normalize(text) {
  return text.trim().toLowerCase().replace(/[.!?]/g, '');
}

function checkChoice(btn, answer) {
  const correct = normalize(btn.textContent) === normalize(answer);
  setFeedback(correct, answer);
  Array.from(choicesEl.children).forEach((child) => {
    child.disabled = true;
    const isCorrect = normalize(child.textContent) === normalize(answer);
    child.classList.toggle('correct', isCorrect);
    if (!isCorrect && child === btn) child.classList.add('incorrect');
  });
  finalize(correct);
}

function checkText() {
  if (!currentLesson) return;
  if (submitBtn.disabled) return;
  const exercise = currentLesson.exercises[currentIndex];
  const correct = normalize(textAnswer.value) === normalize(exercise.answer);
  setFeedback(correct, exercise.answer);
  submitBtn.disabled = true;
  textAnswer.disabled = true;
  finalize(correct);
}

function setFeedback(correct, answer) {
  feedbackEl.textContent = correct ? 'Odlično! 🎉' : `Pravilen odgovor: ${answer}`;
}

function finalize(correct) {
  if (correct) {
    xp += 2;
    streak += 1;
  } else {
    streak = Math.max(streak - 1, 0);
  }
  updatePills();
  nextBtn.disabled = false;
}

function nextExercise() {
  if (!currentLesson) return;
  currentIndex += 1;
  if (currentIndex >= currentLesson.exercises.length) {
    endLesson();
    return;
  }
  loadExercise();
}

function endLesson() {
  feedbackEl.textContent = 'Lesson complete! Crown up by repeating tomorrow.';
  sessionProgress.textContent = `${currentLesson.exercises.length}/${currentLesson.exercises.length}`;
  nextBtn.disabled = true;
}

function bindEvents() {
  submitBtn?.addEventListener('click', checkText);
  textAnswer?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') checkText();
  });
  nextBtn?.addEventListener('click', nextExercise);
  skipBtn?.addEventListener('click', nextExercise);
  startBtn?.addEventListener('click', () => beginLesson(lessons[0]));
  resumeBtn?.addEventListener('click', () => beginLesson(currentLesson || lessons[0]));
  reviewBtn?.addEventListener('click', () => beginLesson(createMixedDrill('Review mix', 8)));
  warmupBtn?.addEventListener('click', () => beginLesson(createMixedDrill('Warmup sprint', 5)));
  mixBtn?.addEventListener('click', () => beginLesson(createMixedDrill('Mixed drill', 6)));
  caseBtn?.addEventListener('click', () => beginLesson(createMixedDrill('Case dojo', 6, (lesson) => lesson.id === 'cases')));
  travelBtn?.addEventListener('click', () => beginLesson(createMixedDrill('Weekend challenge', 6, (lesson) => ['travel', 'nature'].includes(lesson.id))));
  storyBtn?.addEventListener('click', () => beginLesson(createMixedDrill('Story mode', 7, (lesson) => ['smalltalk', 'culture'].includes(lesson.id))));
  advancedBtn?.addEventListener('click', () => beginLesson(createMixedDrill('B1 bridge', 8, (lesson) => ['genitive-locative', 'future-conditional', 'past-tense', 'verbs'].includes(lesson.id))));
  treeFilters?.addEventListener('click', (e) => {
    const target = e.target.closest('.chip');
    if (!target) return;
    applyTreeFilter(target.dataset.filter || 'all');
  });
}

function init() {
  if (!unitGrid || !tipsContainer || !sessionEl || !fallbackSection) {
    fallbackSection?.removeAttribute('hidden');
    return;
  }
  setDesktopBadges();
  renderUnits();
  renderTips();
  renderCoach();
  renderAchievements();
  renderPhrasebook();
  renderRoadmap();
  renderTree();
  renderMilestones();
  renderLabs();
  renderCulture();
  renderQuests();
  renderImmersion();
  renderScenarios();
  renderGrammarShots();
  renderExamSprints();
  renderMomentum();
  updatePills();
  bindEvents();
  sessionEl.classList.add('subtle-grid');
}

function createMixedDrill(label = 'Mixed review', size = 5, filter = () => true) {
  const pool = lessons
    .filter(filter)
    .flatMap((lesson) =>
      lesson.exercises.map((exercise) => ({
        ...exercise,
        prompt: `${exercise.prompt} · ${lesson.title}`,
      }))
    );

  const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, size);

  return {
    id: `mix-${Date.now()}`,
    title: label,
    focus: 'Curated review across your path',
    emoji: '✨',
    progress: 0,
    exercises: shuffled,
    tips: [],
  };
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
