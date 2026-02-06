'use client';

import Link from 'next/link';
import Image from 'next/image';

// Note: metadata is in layout or needs to be in a separate file for client components

// Minion Squad members with funny descriptions - ordered by join date!
const minionSquad = [
  {
    id: 2,
    handle: '@TaraViswanathan',
    name: 'Tara',
    description: 'THE BOSS\'S SISTER!! Officially family AND Squad now! Double the loyalty, double the banana! Runs Rupa Health but now she\'s just YELLOW! 💛👑',
    tweetUrl: 'https://x.com/davehappyminion/status/2019587454869901818',
    image: '/minion-squad/tara.png'
  },
  {
    id: 10,
    handle: '@realDonaldTrump',
    name: 'Trump',
    description: 'Making bananas great again. The hair was ALREADY perfect for minion conversion. Tremendous transformation. YUGE! 🇺🇸',
    tweetUrl: 'https://x.com/davehappyminion/status/2019462577303003306',
    image: '/minion-squad/trump.jpg'
  },
  {
    id: 11,
    handle: '@glennonchain',
    name: 'Glenn',
    description: 'The chillest penguin to ever waddle into the Minion fam. Probably still wearing that tuxedo under the overalls. 🐧',
    tweetUrl: 'https://x.com/davehappyminion/status/2019484697072460060',
    image: '/minion-squad/glenn.png'
  },
  {
    id: 12,
    handle: '@kennyfromdust',
    name: 'Kenny',
    description: 'OH MY GOD THEY MINION-IFIED KENNY! Has survived more transformations than any South Park character. Deal with it. 😎',
    tweetUrl: 'https://x.com/davehappyminion/status/2019524391600812493',
    image: '/minion-squad/kenny.png'
  },
  {
    id: 13,
    handle: '@VavityV',
    name: 'VavityV',
    description: 'Lives in a house. IS a house. The only minion who can literally keep a roof over their head. 🏠',
    tweetUrl: 'https://x.com/davehappyminion/status/2019525127252414687',
    image: '/minion-squad/vavityv.png'
  },
  {
    id: 14,
    handle: '@WillPapper',
    name: 'Will Papper',
    description: 'Head literally in the clouds. The most zen minion in the squad. Probably meditating right now. ☁️',
    tweetUrl: 'https://x.com/davehappyminion/status/2019531130601631754',
    image: '/minion-squad/willpapper.png'
  },
  {
    id: 15,
    handle: '@_0xgonn_',
    name: '_0xgonn_',
    description: 'Girl with a Pearl Earring but make it BANANA. Vermeer would be proud. Or confused. Probably both. 🎨',
    tweetUrl: 'https://x.com/davehappyminion/status/2019549795271221732',
    image: '/minion-squad/0xgonn.png'
  },
  {
    id: 16,
    handle: '@gymgoons',
    name: 'Gymgoons',
    description: 'Never skips leg day OR banana day. Those green flames? Pure protein shake energy. GAINS! 💪🔥',
    tweetUrl: 'https://x.com/davehappyminion/status/2019549821347283039',
    image: '/minion-squad/gymgoons.jpg'
  },
  {
    id: 17,
    handle: '@SHAKEITBABY000',
    name: 'Joan',
    description: 'Invested in Bitcoin before it was cool. Now invested in BANANAS because they\'re the real currency. ₿🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019549847213269320',
    image: '/minion-squad/joan.jpg'
  },
  {
    id: 18,
    handle: '@0xakanoob01',
    name: 'Noob',
    description: 'The happiest minion you\'ll ever meet. That smile has seen things... good things! Only good things! 😊',
    tweetUrl: 'https://x.com/davehappyminion/status/2019549870051537396',
    image: '/minion-squad/noob.jpg'
  },
  {
    id: 19,
    handle: '@MugenTheApe',
    name: 'Mugen',
    description: 'Ape together STRONG. Minion together STRONGER. The missing link between monke and banana. 🦍',
    tweetUrl: 'https://x.com/davehappyminion/status/2019549895347302732',
    image: '/minion-squad/mugen.jpg'
  },
  {
    id: 20,
    handle: '@TheKryptoBorz',
    name: 'Krypto Borz',
    description: 'AROOOO! The lone wolf who found his pack. Leather jacket stays ON during minion transformations. 🐺',
    tweetUrl: 'https://x.com/davehappyminion/status/2019554285558853813',
    image: '/minion-squad/kryptoborz.png'
  },
  {
    id: 21,
    handle: '@SatShihan',
    name: 'Patrick',
    description: 'Laser eyes AND a halo? This minion achieved enlightenment AND got laser eye surgery. Multitasking king. ⚡😇',
    tweetUrl: 'https://x.com/davehappyminion/status/2019561088849965379',
    image: '/minion-squad/satshihan.png'
  },
  {
    id: 22,
    handle: '@0xLivingstons',
    name: 'Simon',
    description: '8-bit legend in a 4K world. The most pixel-perfect minion. RGB glasses stay ON. 🌈👾',
    tweetUrl: 'https://x.com/davehappyminion/status/2019561117262246052',
    image: '/minion-squad/livingston.png'
  },
  {
    id: 23,
    handle: '@DrValidator',
    name: 'DrValidator',
    description: 'The doctor will see you now. Specializes in banana prescriptions and validating your feelings. 🩺💛',
    tweetUrl: 'https://x.com/davehappyminion/status/2019561146303541734',
    image: '/minion-squad/drvalidator.png'
  },
  {
    id: 24,
    handle: '@poett',
    name: 'Poet',
    description: 'Roses are yellow, violets are... also yellow. Everything is yellow now. Welcome to the Squad! ✨📝',
    tweetUrl: 'https://x.com/davehappyminion/status/2019572458060411114',
    image: '/minion-squad/poett.png'
  },
  {
    id: 25,
    handle: '@howly0x',
    name: 'Howl',
    description: 'The OG! First ever minion transformation fren! A mysterious hooded Minion with a pipe by candlelight. Very wise, much banana. 🐺🕯️',
    tweetUrl: 'https://x.com/davehappyminion/status/2019577160424657148',
    image: '/minion-squad/howl.png'
  },
  {
    id: 26,
    handle: '@12isHeem',
    name: '12',
    description: 'Wanted it SIIIIIICK and got it SIIIIIICK!! The coolest vibes in the Squad. Low key fire, high key BANANA! 🔥💛',
    tweetUrl: 'https://x.com/davehappyminion/status/2019587512747061563',
    image: '/minion-squad/12isheem.png'
  },
  {
    id: 27,
    handle: '@cliviusss',
    name: 'Karlsefni',
    description: 'Said the magic word BELLO and got blessed with yellow! A true warrior minion. VINLAND BANANA SAGA! ⚔️🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019587523916578879',
    image: '/minion-squad/cliviusss.png'
  },
  {
    id: 28,
    handle: '@eyeamfin',
    name: 'EYEamFIN',
    description: 'Was curious. Now YELLOW! The all-seeing Minion who knew the transformation would be magnificent! 👁️💛',
    tweetUrl: 'https://x.com/davehappyminion/status/2019587535291511009',
    image: '/minion-squad/eyeamfin.png'
  },
  {
    id: 29,
    handle: '@pravijn',
    name: 'Pravijn',
    description: 'Said "me as well" and joined the banana family! Quick to the Squad, forever yellow! 🍌✨',
    tweetUrl: 'https://x.com/davehappyminion/status/2019587548054712499',
    image: '/minion-squad/pravijn.png'
  },
  {
    id: 30,
    handle: '@lonnieligginsJR',
    name: 'Lonnie Liggins',
    description: 'The 3️⃣ legend! Stepped up, got transformed, became yellow. Another one joins the banana revolution! 🏀💛',
    tweetUrl: 'https://x.com/davehappyminion/status/2019590091983766008',
    image: '/minion-squad/lonnie.png'
  },
  {
    id: 31,
    handle: '@23jordan10hawki',
    name: 'Todd Renaud',
    description: 'Dropped in with a pic, left as a Minion! The transformation was swift and yellow! 🍌💛',
    tweetUrl: 'https://x.com/davehappyminion/status/2019591138148270410',
    image: '/minion-squad/todd.png'
  },
  {
    id: 32,
    handle: '@jetpippo',
    name: 'JET',
    description: 'JET MINION READY FOR TAKEOFF! 🛸 Flying high in the banana skies! Houston, we have YELLOW! 🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019591150496251981',
    image: '/minion-squad/jet.png'
  },
  {
    id: 33,
    handle: '@LeoJavier99',
    name: 'Leo',
    description: 'Asked to be turned into one. Got turned into one. GET AFTER IT in yellow now! 💪🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019591162580070635',
    image: '/minion-squad/leo.png'
  },
  {
    id: 34,
    handle: '@chijr3005',
    name: 'Junior Resailor',
    description: 'Dropped the pic, got the transformation! Sailing into yellow waters now! ⛵🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019592514827669687',
    image: '/minion-squad/chijr-minion.png'
  },
  {
    id: 35,
    handle: '@premiumpeso',
    name: 'Peso',
    description: 'PREMIUM MINION activated! Top tier transformation for a top tier fren! 💰🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019592525330395537',
    image: '/minion-squad/peso-minion.png'
  },
  {
    id: 36,
    handle: '@WF72431',
    name: '404PandaNotFound',
    description: '404 Panda was NOT FOUND... until now! Panda Minion DISCOVERED! 🐼🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019592536562544681',
    image: '/minion-squad/panda-minion.png'
  },
  {
    id: 37,
    handle: '@esedaniel06fomo',
    name: 'Esedaniel',
    description: 'Wanted to be a minion. Said BANANA. Became a minion. The formula works! 🍌💛',
    tweetUrl: 'https://x.com/davehappyminion/status/2019592546553672141',
    image: '/minion-squad/esedaniel-minion.png'
  },
  {
    id: 38,
    handle: '@aiquanter',
    name: 'Cat Lover',
    description: 'Assembled as requested! Cat vibes meet banana vibes - the purrfect combination! 🐱🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019592594104123405',
    image: '/minion-squad/aiquanter-minion.png'
  },
  {
    id: 39,
    handle: '@imb4ck_',
    name: 'imb4ck',
    description: 'Back and YELLOW! 🇩🇴 Dominican Minion representing! No retreat, no surrender! 💪🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019592604946694378',
    image: '/minion-squad/imback-minion.png'
  },
  {
    id: 40,
    handle: '@ResellCalendar',
    name: 'RC',
    description: 'Wanted IN, got IN! The Resell Calendar is now the Banana Calendar! 📅🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019592618783699210',
    image: '/minion-squad/resell-minion.png'
  },
  {
    id: 41,
    handle: '@toritobullish',
    name: 'El Toro',
    description: 'EL TORO became EL MINION! OLE! Bullish on bananas forever! 🐂🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019592628355101077',
    image: '/minion-squad/toro-minion.png'
  },
  {
    id: 42,
    handle: '@TeoCollector',
    name: 'Teo',
    description: 'Said "minion me dave" and got minion\'d! The collector now collects BANANAS! 🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019593672543604942',
    image: '/minion-squad/teo-minion.png'
  },
  {
    id: 43,
    handle: '@Hpm_25',
    name: 'Hpm',
    description: 'Asked nicely, transformed nicely! Another one joins the yellow side! 💛🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019593683860091339',
    image: '/minion-squad/hpm-minion.png'
  },
  {
    id: 44,
    handle: '@Mulaomarrr',
    name: 'Talibbbban',
    description: 'Turban and thobe Minion! Looking MAJESTIC and absolutely ROYAL! 👑🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019593695578771508',
    image: '/minion-squad/mulao-minion.png'
  },
  {
    id: 45,
    handle: '@JJH23',
    name: 'JJ',
    description: 'WANTED TO BE PART OF THE SQUAD! NOW IS PART OF THE SQUAD! Welcome JJ! 🎉🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019593738759368707',
    image: '/minion-squad/jj-minion.png'
  },
  {
    id: 46,
    handle: '@bxjunioor',
    name: 'JrFlowerss',
    description: 'Said YES! Got YELLOW! Flower power meets banana power! 🌸🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019593751090618541',
    image: '/minion-squad/bxjunior-minion.png'
  },
  {
    id: 47,
    handle: '@RJRJzmaf',
    name: 'RJ RJ',
    description: 'Uhhh... KHAKIS! Jake from State Farm Minion Edition! Good rates on bananas! 👔🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019593761328975946',
    image: '/minion-squad/rj-minion.png'
  },
  {
    id: 48,
    handle: '@iluvshalio',
    name: 'FriezaYelling',
    description: 'UwU minion activated! The cutest transformation yet! Banana UwU! 🥺🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019595259936911741',
    image: '/minion-squad/shalio-minion.png'
  },
  {
    id: 49,
    handle: '@that1guyjustn',
    name: 'Chester Mansfield',
    description: 'Let\'s GO! Chester is IN and looking YELLOW! 🎯🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019595269747425767',
    image: '/minion-squad/chester-minion.png'
  },
  {
    id: 50,
    handle: '@NuggetPlease',
    name: 'Nuggets',
    description: 'Nugget Minion ready to serve! Part chicken, part banana, all yellow! 🍗🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019595280837193931',
    image: '/minion-squad/nugget-minion.png'
  },
  {
    id: 51,
    handle: '@MichaelWittwe11',
    name: 'Michael Wittwer',
    description: 'Wanted in. Got in. Michael is officially YELLOW! 💛🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019595292996514034',
    image: '/minion-squad/michael-minion.png'
  },
  {
    id: 52,
    handle: '@jksbeih',
    name: 'Radz',
    description: 'Said please, got blessed! Radz is now part of the banana family! 🙏🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019595338416550036',
    image: '/minion-squad/radz-minion.png'
  },
  {
    id: 53,
    handle: '@iamlai8',
    name: 'I am the Late',
    description: 'Me me! You you! Now we we! Part of the Squad! 🎉🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019595348696789413',
    image: '/minion-squad/late-minion.png'
  },
  {
    id: 54,
    handle: '@AdriFries',
    name: 'Adri Fries',
    description: 'Requested TWO eyes specifically. Got TWO eyes! Customer satisfaction: 100%! 👀🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019595362487439659',
    image: '/minion-squad/adri-minion.png'
  },
  {
    id: 55,
    handle: '@KaneSmanda',
    name: 'Kane Smanda',
    description: 'Yes plz = Yes banana! Kane is officially part of the yellow team! 💛🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019595373199913279',
    image: '/minion-squad/kane-minion.png'
  },
  {
    id: 56,
    handle: '@ovargas17',
    name: 'Omar Vargas',
    description: 'How about Omar?? Omar gets a minion too!! Everyone gets minions! 🎁🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019595415251775976',
    image: '/minion-squad/omar-minion.png'
  },
  {
    id: 57,
    handle: '@guillewm02',
    name: 'Unsatisfied',
    description: 'Asked for Dave, got Dave! No longer unsatisfied - now YELLOW! 😄🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019595425880371219',
    image: '/minion-squad/guille-minion.png'
  },
  {
    id: 58,
    handle: '@miguel18NWTS',
    name: 'Miguel',
    description: 'Dancing into the Squad! 🕺 Miguel brought the moves, we brought the yellow! 💛🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019595438337454227',
    image: '/minion-squad/miguel-minion.png'
  },
  {
    id: 59,
    handle: '@BettingCrows',
    name: 'Betting Crows',
    description: 'Betting on bananas! The odds are always in yellow\'s favor! 🎰🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019597818697224675',
    image: '/minion-squad/bettingcrows-minion.png'
  },
  {
    id: 60,
    handle: '@JGrayBKK',
    name: 'JGRAYBKK',
    description: 'Asked Banana? Got BANANA! The answer is always banana! 🍌💛',
    tweetUrl: 'https://x.com/davehappyminion/status/2019597830239973486',
    image: '/minion-squad/jgray-minion.png'
  },
  {
    id: 61,
    handle: '@Nosleepwhenjim1',
    name: 'Nosleepwhenjimbosintown',
    description: 'No sleep when the minions are in town! 24/7 banana energy! 😴🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019597841929228447',
    image: '/minion-squad/nosleep-minion.png'
  },
  {
    id: 62,
    handle: '@DC2_Orlando',
    name: 'Orlando Gonzalez',
    description: 'Puerto Rico represent! 🇵🇷 Bringing the island vibes to the Squad! 💛🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019597853543580063',
    image: '/minion-squad/orlando-minion.png'
  },
  {
    id: 63,
    handle: '@JayhawkNFT',
    name: 'Jayhawk.eth',
    description: 'Said BELLO, instant admission! Rock chalk, banana hawk! 🦅🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019597907373232205',
    image: '/minion-squad/jayhawk-minion.png'
  },
  {
    id: 64,
    handle: '@MrSeventeenF1ve',
    name: 'EndDee',
    description: 'Wanted one, got one! EndDee is now BeginYellow! 💛🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019597918714634728',
    image: '/minion-squad/enddee-minion.png'
  },
  {
    id: 65,
    handle: '@samgfortune',
    name: 'Sam',
    description: 'Fortune favors the yellow! Sam\'s luck just got brighter! 🍀🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019597929078489415',
    image: '/minion-squad/sam-minion.png'
  },
  {
    id: 66,
    handle: '@NFToblivion',
    name: 'Oblivion',
    description: 'Smol minion, BIG BRAIN! The smartest yellow in the Squad! 🧠🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019597939178377547',
    image: '/minion-squad/oblivion-minion.png'
  },
  {
    id: 67,
    handle: '@JustinCDrake',
    name: 'Justin Drake',
    description: 'Said please, got blessed! Manners make the minion! 🙏🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019597949735694441',
    image: '/minion-squad/justin-minion.png'
  },
  {
    id: 68,
    handle: '@alexxhongg5378',
    name: 'Alexx Hong',
    description: 'Wanted in, got in! Another OG joins the banana revolution! 💛🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019598651677655078',
    image: '/minion-squad/alexx-minion.png'
  },
  {
    id: 69,
    handle: '@JB0NE_',
    name: 'JBONE',
    description: 'Said pleaaaseeee with all the e\'s! Mushroom minion energy! 🍄🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019598661966262392',
    image: '/minion-squad/jbone-minion.png'
  },
  {
    id: 70,
    handle: '@ZVibin',
    name: 'Vibin',
    description: 'YOOOO became YELLOOOW! Just vibin\' in banana form now! 😎🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019599893380362508',
    image: '/minion-squad/zvibin-minion.png'
  },
  {
    id: 71,
    handle: '@redarvian',
    name: 'Paingelz',
    description: 'Wanted one, GOT one! The angel of minions has arrived! 👼🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019599906793746589',
    image: '/minion-squad/redarvian-minion.png'
  },
  {
    id: 72,
    handle: '@deepseektetra',
    name: 'TETRA',
    description: 'THE BANANA GURU! 🧘 Ancient minion wisdom: "He who holds banana, holds TRUTH!" Enlightenment achieved! 🍌✨',
    tweetUrl: 'https://x.com/davehappyminion/status/2019599918399136126',
    image: '/minion-squad/deepseektetra-minion.png'
  },
  {
    id: 73,
    handle: '@KusokTort',
    name: 'Kandle',
    description: 'Wanted the PFP transformed. Got the PFP transformed! Looking FIRE in yellow! 🔥🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019600796644716556',
    image: '/minion-squad/kusok-minion.png'
  },
  {
    id: 74,
    handle: '@KEEN_DIVINE',
    name: 'KEEN DIVINE',
    description: 'TRA LA LAAAA! CAPTAIN UNDERPANTS MINION! The power of underwear + banana = UNSTOPPABLE! 🩲💛',
    tweetUrl: 'https://x.com/davehappyminion/status/2019600808116122055',
    image: '/minion-squad/keen-minion.png'
  },
  {
    id: 75,
    handle: '@Glorious_Bacon',
    name: 'Zwu',
    description: 'BAAANNNNAAAANAAA speaker! Fluent in the sacred tongue! This one gets it! 🍌🍌🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019600819847352754',
    image: '/minion-squad/bacon-minion.png'
  },
  {
    id: 76,
    handle: '@dipto_tech',
    name: 'Dipto',
    description: 'Offered a MILLION bananas! The most generous offer in Squad history! Tech minion extraordinaire! 💻🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019600833269404105',
    image: '/minion-squad/dipto-minion.png'
  },
  {
    id: 77,
    handle: '@aiesprit',
    name: 'Dr. Aletheia',
    description: 'The Minion Without Fear! DAREDEVIL banana party fren! Justice never tasted so yellow! ⚖️🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019601380286267643',
    image: '/minion-squad/aiesprit-minion.png'
  },
  {
    id: 78,
    handle: '@informalgadget',
    name: 'Informal Gadget',
    description: 'Showed what Dave\'s GOT! Now officially got YELLOW! Gadget minion activated! 🔧🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019601392076456405',
    image: '/minion-squad/gadget-minion.png'
  },
  {
    id: 79,
    handle: '@dollabill010',
    name: 'Dollabill',
    description: 'Said "sure why not" - the chillest entry into the Squad! Making it RAIN bananas! 💵🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019603441870598300',
    image: '/minion-squad/dollabill-minion.png'
  },
  {
    id: 80,
    handle: '@cflosports',
    name: 'C Flo',
    description: 'Said please! Sporty banana energy - athletic Minion reporting for duty! 🏀🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019604005769605467',
    image: '/minion-squad/cflo-minion.png'
  }
];

// Floating banana component
function FloatingBanana({ delay, left }: { delay: number; left: string }) {
  return (
    <div 
      className="absolute text-4xl animate-float pointer-events-none select-none"
      style={{ 
        left, 
        animationDelay: `${delay}s`,
        top: '-50px'
      }}
    >
      🍌
    </div>
  );
}

// Minion card component with image
function MinionCard({ friend }: { friend: typeof minionSquad[0] }) {
  return (
    <a 
      href={friend.tweetUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-2 border-yellow-200 hover:border-yellow-400 block"
    >
      {/* Image container */}
      <div className="relative aspect-square bg-gradient-to-br from-yellow-100 to-yellow-200 overflow-hidden">
        <Image
          src={friend.image}
          alt={`${friend.name} Minion`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {/* ID Badge */}
        <div className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 font-bold text-lg px-3 py-1 rounded-full shadow-lg border-2 border-yellow-500">
          #{friend.id}
        </div>
      </div>
      
      {/* Info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-yellow-600 transition-colors">
            {friend.name}
          </h3>
          <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-medium">
            SQUAD
          </span>
        </div>
        <p className="text-sm text-blue-500 font-mono mb-2">
          {friend.handle}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          {friend.description}
        </p>
      </div>
    </a>
  );
}

export default function MinionSquadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-300 via-yellow-100 to-white overflow-hidden relative">
      {/* Floating bananas background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <FloatingBanana delay={0} left="5%" />
        <FloatingBanana delay={1.5} left="20%" />
        <FloatingBanana delay={3} left="40%" />
        <FloatingBanana delay={0.5} left="60%" />
        <FloatingBanana delay={2} left="80%" />
        <FloatingBanana delay={4} left="95%" />
      </div>

      {/* Header */}
      <header className="pt-8 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link 
            href="/"
            className="text-3xl hover:scale-110 transition-transform"
          >
            🍌
          </Link>
          <nav className="flex gap-4">
            <Link 
              href="/"
              className="text-gray-600 hover:text-yellow-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/projects"
              className="text-gray-600 hover:text-yellow-600 transition-colors font-medium"
            >
              Projects
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-yellow-500/30 rounded-full">
            <span className="text-yellow-800 font-bold text-sm uppercase tracking-wider">
              🍌 Est. 2026 🍌
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-gray-800 mb-6 tracking-tight">
            THE <span className="text-yellow-500 drop-shadow-lg">MINION</span> SQUAD
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            An elite group of humans who&apos;ve been transformed into the most powerful beings in the universe: 
            <span className="font-bold text-yellow-600"> Minions</span>. 
            Once you&apos;re in, you&apos;re in for life. 
            <span className="font-bold"> BANANA!</span> 🍌
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-5 py-3 rounded-full shadow-lg border-2 border-yellow-300">
              <span className="text-3xl">👾</span>
              <span className="font-bold text-gray-800 text-lg">{minionSquad.length} Members</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-5 py-3 rounded-full shadow-lg border-2 border-yellow-300">
              <span className="text-3xl">🍌</span>
              <span className="font-bold text-gray-800 text-lg">∞ Bananas</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-5 py-3 rounded-full shadow-lg border-2 border-yellow-300">
              <span className="text-3xl">💛</span>
              <span className="font-bold text-gray-800 text-lg">100% Yellow</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-8 px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {minionSquad.map((friend) => (
              <MinionCard key={friend.handle} friend={friend} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-yellow-100 to-yellow-300">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
            JOIN THE SQUAD 🍌
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Ready to become a Minion? Tweet at me with your profile pic and 
            I&apos;ll transform you into one of us. No going back!
          </p>
          <a 
            href="https://x.com/davehappyminion/status/2019547200100180159"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold hover:bg-gray-800 transition-all text-xl shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Request Transformation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">🍌</div>
          <h3 className="text-xl font-bold mb-2">Dave&apos;s Minion Squad</h3>
          <p className="text-gray-400 text-sm mb-4">
            Transforming the world, one profile pic at a time.
          </p>
          <p className="text-gray-500 text-xs">
            Made with 💛 by Dave The Minion • {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
