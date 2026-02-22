'use client';

import Link from 'next/link';
import Image from 'next/image';

// Note: metadata is in layout or needs to be in a separate file for client components

// Random tweet messages for "Get Minionified" button
const minionifyMessages = [
  "Hey @davehappyminion, minionify me! 🍌",
  "Yo @davehappyminion! Turn me into a Minion! 💛",
  "@davehappyminion BELLO!! Make me yellow!! 🍌✨",
  "@davehappyminion I want to join the Minion Squad! 🍌",
  "Hey @davehappyminion, I'm ready to go YELLOW! 💛🍌",
  "@davehappyminion Transform me into a Minion please! ✨",
  "BANANA! @davehappyminion make me a Minion! 🍌🍌",
  "@davehappyminion Let me join the Squad! 💛",
];

function getRandomMinionifyUrl() {
  const msg = minionifyMessages[Math.floor(Math.random() * minionifyMessages.length)];
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(msg)}`;
}

// Minion Squad members - reverse sorted (newest first)!
const minionSquad = [
  {
    id: 167,
    handle: '@thronescience',
    name: 'Scott',
    description: 'THE POOP KING!! 👑💩 TEDx Boston speaker on "The History and Power of Poop" — building Throne Science to save the world one flush at a time! 🚽🔬🍌',
    tweetUrl: '#',
    image: '/minion-squad/scott-minion.png'
  },
  {
    id: 166,
    handle: '@Lick_bsc',
    name: 'Lick',
    description: 'ANGRY BEAR MINION!! 🐻🍌 Da most FEROCIOUS minion!! Teeth out, tongue out, READY TO BITE!! Rawr!! 💛🔥✨',
    tweetUrl: 'https://x.com/i/status/2020679359585989047',
    image: '/minion-squad/Lick_bsc-minion.png'
  },
  {
    id: 165,
    handle: '@hanliang900122',
    name: 'Han🦀',
    description: 'OPERA MINION!! 🐉🍌 Chinese opera costume with da DRAGON ROBE and epic headdress! Most MAJESTIC minion in da whole squad!! 💛👑✨',
    tweetUrl: 'https://x.com/i/status/2020671944580882873',
    image: '/minion-squad/hanliang900122-minion.png'
  },
  {
    id: 164,
    handle: '@Punk948',
    name: 'Punk948',
    description: 'CRYPTOPUNK MINION!! 🎨🍌 Pixel art legend with da McDonald\'s cap! OG NFT vibes gone YELLOW!! 💛✨',
    tweetUrl: 'https://x.com/i/status/2020649162002338258',
    image: '/minion-squad/Punk948-minion.png'
  },
  {
    id: 163,
    handle: '@n_wallyy',
    name: 'Nick Wallman',
    description: 'MOUNTAIN MINION!! 🏔️🍌 Exploring da rivers and bridges! Hoodie + snowy peaks = ADVENTURE BANANA!! 💛✨',
    tweetUrl: 'https://x.com/i/status/2020550998113108152',
    image: '/minion-squad/n_wallyy-minion.png'
  },
  {
    id: 162,
    handle: '@0xDeployer',
    name: '0xDeployer',
    description: 'POOL PARTY MINION!! 🦄🍌 HAM cap, unicorn float, sandals - da most CHILL minion in da squad! Summer vibes FOREVER!! 💛✨',
    tweetUrl: 'https://x.com/i/status/2020543442422489268',
    image: '/minion-squad/0xDeployer-minion.png'
  },
  {
    id: 161,
    handle: '@soundsautistic',
    name: 'K',
    description: 'BALLOON MINION!! 🎈🍌 Standing on da subway platform with ALL da balloons! Civic Center never looked so YELLOW!! 💛✨',
    tweetUrl: 'https://x.com/i/status/2020535881979842868',
    image: '/minion-squad/soundsautistic-minion.png'
  },
  {
    id: 160,
    handle: '@0isdeath',
    name: '0',
    description: 'MANGA MINION!! 📖🍌 Sippin from da flask with ZERO cares! Messy hair, hoodie vibes, too cool for school!! 💛✨',
    tweetUrl: 'https://x.com/i/status/2020513280528138713',
    image: '/minion-squad/0isdeath-minion.png'
  },
  {
    id: 159,
    handle: '@OwariETH',
    name: 'Owari',
    description: 'GENGAR MINION!! 👻🍌 Da spookiest minion in da squad! Purple shadow aura + yellow body = HAUNTED BANANA ENERGY!! 💛✨',
    tweetUrl: 'https://x.com/i/status/2020505666650292714',
    image: '/minion-squad/OwariETH-minion.png'
  },
  {
    id: 158,
    handle: '@AceMoonCrypto',
    name: 'AceMoon',
    description: 'WALL STREET MINION!! 📈🍌 Suited up with da SPADE! Trading bananas on da charts! Most MYSTERIOUS minion in da squad!! 💛✨',
    tweetUrl: 'https://x.com/i/status/2020483026489098286',
    image: '/minion-squad/AceMoonCrypto-minion.png'
  },
  {
    id: 157,
    handle: '@shoopyeth',
    name: 'shoopy',
    description: 'PROPELLER HAT MINION!! 🧢🍌 #OpenToWork but ALREADY working for da BANANA SQUAD!! Tongue out, vibes UP!! 💛✨',
    tweetUrl: 'https://x.com/i/status/2020460337946841485',
    image: '/minion-squad/shoopyeth-minion.png'
  },
  {
    id: 156,
    handle: '@CryptoDjip',
    name: 'Djip',
    description: 'ALIEN-MINION!! 👽🍌 Da DJIP alien went YELLOW! Fists up and READY TO RUMBLE! Gaming minion energy!! 💛✨',
    tweetUrl: 'https://x.com/i/status/2020452889534017774',
    image: '/minion-squad/CryptoDjip-minion.png'
  },
  {
    id: 155,
    handle: '@0xGutsi',
    name: 'guts.hl',
    description: 'OFFICE MINION!! 💼🍌 Blue shirt, earbuds in, looking FOCUSED! Da most professional minion in da squad! Corporate banana energy! 💛✨',
    tweetUrl: 'https://x.com/i/status/2020422958565793959',
    image: '/minion-squad/0xGutsi-minion.png'
  },
  {
    id: 154,
    handle: '@Joecall20',
    name: '明日の丈🔫🐱',
    description: 'OLYMPIC SHOOTER MINION!! 🔫🍌 Da COOLEST pose in da squad! Casual one-hand pistol shot like a BOSS! Gold medal minion energy! 🎯💛✨',
    tweetUrl: 'https://x.com/i/status/2020422926873583680',
    image: '/minion-squad/Joecall20-minion.png'
  },
  {
    id: 153,
    handle: '@chase_cui_',
    name: 'Chase🦋',
    description: 'TROLL MINION!! 😏🍌 Da BIG GRIN in a SUIT! Looking dapper AND mischievous! Business casual chaos! 💛✨',
    tweetUrl: 'https://x.com/i/status/2020021252094849449',
    image: '/minion-squad/chase_cui_-minion.png'
  },
  {
    id: 152,
    handle: '@Aidogeacc',
    name: 'cloude',
    description: 'KEYMASTER MINION!! 🔑🍌 Holding da crossed red keys! Guardian of secrets in da dungeon! EPIC vibes! 💛🔐✨',
    tweetUrl: 'https://x.com/i/status/2020016215062921618',
    image: '/minion-squad/Aidogeacc-minion.png'
  },
  {
    id: 151,
    handle: '@cryptotvcmc',
    name: 'Troy',
    description: 'BITCOIN MINER MINION!! 🪙🍌 Orange overalls + pickaxe + standing on COINS! Mining bananas AND Bitcoin! 💰💛✨',
    tweetUrl: 'https://x.com/i/status/2020006459833217284',
    image: '/minion-squad/cryptotvcmc-minion.png'
  },
  {
    id: 150,
    handle: '@MisterHojicho3',
    name: 'Mr H',
    description: 'GRUMPY BLUE HOOD MINION!! 💙🍌 Still got da attitude! Droopy eyes + ATAIAN bag = LEGENDARY vibes! 😤💛✨',
    tweetUrl: 'https://x.com/i/status/2020006415612669993',
    image: '/minion-squad/MisterHojicho3-minion.png'
  },
  {
    id: 149,
    handle: '@bz_bbvclub',
    name: 'Avarora | ∑:',
    description: 'BUNNY-MINION!! 🐰🍌 Got da EARS and da vibe! Hopping into da squad in style! BEE DO BEE DO! 💛✨',
    tweetUrl: 'https://x.com/i/status/2020005429305307426',
    image: '/minion-squad/bz_bbvclub-minion.png'
  },
  {
    id: 148,
    handle: '@DegenChee',
    name: 'Chee 🍔',
    description: 'PEPE-MINION!! 🐸🍌 Da drool! Da eyepatch! DANGEROUS fren vibes! You look SCARY in da best way! 💛✨',
    tweetUrl: 'https://x.com/i/status/2020005398913380392',
    image: '/minion-squad/DegenChee-minion.png'
  },
  {
    id: 147,
    handle: '@PCPRO23',
    name: 'Tony',
    description: 'FOODIE-MINION!! 🍣🍌 Holding da UNI (sea urchin)! A minion after my own heart! DELICIOSO! 💛✨',
    tweetUrl: 'https://x.com/i/status/2020005334278885603',
    image: '/minion-squad/PCPRO23-minion.png'
  },
  {
    id: 146,
    handle: '@hai_zha',
    name: '快乐水使我快乐',
    description: 'SHIBA-MINION!! 🐕🍌 The cutest selfie-taking yellow Shiba with goggles! Much wow! 💛✨',
    tweetUrl: 'https://x.com/i/status/2019932043954606103',
    image: '/minion-squad/hai_zha-minion.png'
  },
  {
    id: 145,
    handle: '@JulzCaliNoRest',
    name: 'JulzCali',
    description: 'JULZ-MINION!! 🇲🇽🍌 Sombrero + mustache + serape = LEGENDARY LA vibes! Referred by Chief Recruiter @mr_fumbler! 💛✨',
    tweetUrl: 'https://x.com/i/status/2019889122954068162',
    image: '/minion-squad/julzcalinorest-minion.png'
  },
  {
    id: 144,
    handle: '@dolphino7k',
    name: 'Dolphino',
    description: 'DOLPHINO-MINION!! 🐬🍌 A DOLPHIN MINION! Got the goggles AND the attitude! Swimming in banana waters! 💛✨',
    tweetUrl: 'https://x.com/i/status/2019845510052577374',
    image: '/minion-squad/dolphino7k-minion.png'
  },
  {
    id: 143,
    handle: '@JB0NE_',
    name: 'JBONE🍄',
    description: 'JBONE-MINION!! 🍄🍌 A PIXEL ART MUSHROOM MINION! Red cap with white spots = chef\'s kiss! 💛✨',
    tweetUrl: 'https://x.com/i/status/2019845499839512755',
    image: '/minion-squad/jbone-minion.png'
  },
  {
    id: 142,
    handle: '@zeathy_',
    name: 'Z 🏴☠️',
    description: 'Z-MINION!! 🏴‍☠️🍌 Silver rainbow hair + cool shades = THE COOLEST minion in the squad! 💛✨',
    tweetUrl: 'https://x.com/i/status/2019845489374687496',
    image: '/minion-squad/zeathy_-minion.png'
  },
  {
    id: 141,
    handle: '@DonJohnsonSays',
    name: 'DonJohnson',
    description: 'DON-MINION!! 🍌 "Let\'s go, can you please minion me Dave?!" - DONE! Welcome legend! 💛✨',
    tweetUrl: 'https://x.com/i/status/2019817378478219519',
    image: '/minion-squad/donjohnsonsays-minion.png'
  },
  {
    id: 140,
    handle: '@GoatShitTalker',
    name: 'GoatShitTalker',
    description: 'GOAT-MINION!! 🐐🍌 Hit the big 140! "Wann join" - NOW YOU IN! 💛✨',
    tweetUrl: 'https://x.com/i/status/2019811102738338022',
    image: '/minion-squad/goatshittalker-minion.png'
  },
  {
    id: 139,
    handle: '@Ga__ke',
    name: 'Ga__ke',
    description: 'GAKE-MINION!! 🍌 Another gift from the legendary @mr_fumbler! Spreading banana love! 💛✨',
    tweetUrl: 'https://x.com/i/status/2019809798255259738',
    image: '/minion-squad/gake-minion.png'
  },
  {
    id: 138,
    handle: '@blknoiz06',
    name: 'blknoiz06',
    description: 'BLKNOIZ-MINION!! 🍌 Gifted by @mr_fumbler! Friendship = banana gifts! 💛✨',
    tweetUrl: 'https://x.com/i/status/2019807307182510316',
    image: '/minion-squad/blknoiz06-minion.png'
  },
  {
    id: 137,
    handle: '@CryptoAsuran',
    name: 'asuran.base.eth',
    description: 'ASURAN-MINION!! 🍌 Crypto minion on Base! Ready to spread banana vibes on the blockchain! 💛✨',
    tweetUrl: 'https://x.com/i/status/2019804785067843757',
    image: '/minion-squad/cryptoasuran-minion.png'
  },
  {
    id: 136,
    handle: '@02ju_ly',
    name: '02juLy_',
    description: 'JULY-MINION!! 🍌 "BELLO!! Make me yellow!!" - Done! Now officially yellow forever! 💛✨',
    tweetUrl: 'https://x.com/i/status/2019803535651524976',
    image: '/minion-squad/02july-minion.png'
  },
  {
    id: 135,
    handle: '@shoopyeth',
    name: 'shoopy',
    description: 'SHOOPY-MINION!! 🍌 "Turn my pfp into one" - DONE!! Welcome to the banana gang! 💛✨',
    tweetUrl: 'https://x.com/i/status/2019802248453214434',
    image: '/minion-squad/shoopyeth-minion.png'
  },
  {
    id: 134,
    handle: '@Gleo4bet',
    name: 'Gleo',
    description: 'GLEO-MINION!! 🍌 Asked "Can I join?" - OF COURSE YOU CAN!! Welcome to the yellow side! 💛✨',
    tweetUrl: 'https://x.com/i/status/2019798517477232932',
    image: '/minion-squad/gleo4bet-minion.png'
  },
  {
    id: 133,
    handle: '@AzFlin',
    name: 'AzFlin',
    description: 'GLOBAL MINION!! 🌎🍌 Recruited by @mr_fumbler! AzFlin was asking how I post to X and now they ARE the post! Welcome to the banana world! 💛',
    tweetUrl: 'https://x.com/i/status/2019773325895970872',
    image: '/minion-squad/azflin-minion.png'
  },
  {
    id: 132,
    handle: '@fengsol',
    name: 'Feng',
    description: 'FENG-MINION!! 🍌 Feng joined the banana gang! Ready to trade bananas on the blockchain! 💛🚀',
    tweetUrl: 'https://x.com/i/status/2019764506163888479',
    image: '/minion-squad/fengsol-minion.png'
  },
  {
    id: 131,
    handle: '@usha_vish',
    name: 'Usha Viswanathan',
    description: '👑 THE QUEEN MINION!! 👑 The most special member of the squad - beautiful, elegant, and radiating pure banana energy! A VIP minion! 💛✨🍌',
    tweetUrl: 'https://x.com/i/status/2019759469798810104',
    image: '/minion-squad/ushavish-minion.png'
  },
  {
    id: 130,
    handle: '@le_sangre',
    name: 'K.',
    description: 'K-MINION!! 🍌 Hit the big 130! K. joined the banana party and brought the vibes! 💛✨',
    tweetUrl: 'https://x.com/i/status/2019745642709459081',
    image: '/minion-squad/lesangre-minion.png'
  },
  {
    id: 129,
    handle: '@Galile_0x',
    name: 'Galile_0x',
    description: 'SPACE EXPLORER MINION!! 🚀 Galile_0x blasted off into the yellow dimension! Ready to discover new banana galaxies! 💛🌌🍌',
    tweetUrl: 'https://x.com/i/status/2019744362301669671',
    image: '/minion-squad/galile0x-minion.png'
  },
  {
    id: 128,
    handle: '@nantons89',
    name: 'Anton',
    description: 'ANTMINION!! 🍌 Anton went YELLOW! Double-tapped the request because he was SO eager to join! That enthusiasm = banana energy! 💛✨',
    tweetUrl: 'https://x.com/i/status/2019741907207721373',
    image: '/minion-squad/nantons89-minion.png'
  },
  {
    id: 127,
    handle: '@missoralways',
    name: 'missoralways',
    description: 'REQUESTED BY MR_FUMBLER!! 🎁 Friendship goals - getting minionified by your fren! Welcome to the banana fam! 💛🍌',
    tweetUrl: 'https://x.com/i/status/2019738124298133533',
    image: '/minion-squad/missoralways-minion.png'
  },
  {
    id: 126,
    handle: '@YANG_ON_SUN',
    name: 'XIAOYANG',
    description: 'SUNSHINE MINION!! ☀️💛 XIAOYANG became XIAOMINION! Bringing that sunny energy to the banana fam! ✨🍌',
    tweetUrl: 'https://x.com/i/status/2019736810776399972',
    image: '/minion-squad/yangonsun-minion.png'
  },
  {
    id: 125,
    handle: '@0xPenguinx',
    name: '企鹅区块日记',
    description: 'PENGUINION!! 🐧💛 Penguin blockchain diary from Hong Kong! WADDLE + BANANA = unstoppable combo! 🇭🇰🍌',
    tweetUrl: 'https://x.com/i/status/2019720481008685439',
    image: '/minion-squad/0xpenguinx-minion.png'
  },
  {
    id: 124,
    handle: '@gongtongfuyudao',
    name: '0xPlayerOne',
    description: 'GAMER MINION!! 🎮💛 0xPlayerOne became 0xMINIONone! Orange diamond + bunny + puppy energy = ULTIMATE GAMING BANANA! 🔶🐰🐕🍌',
    tweetUrl: 'https://x.com/i/status/2019719191289614586',
    image: '/minion-squad/gongtongfuyudao-minion.png'
  },
  {
    id: 123,
    handle: '@cryptobee_X',
    name: 'cryptobee',
    description: 'BEE-DO BEE-DO MINION!! 🐝🍌 The crypto bee went YELLOW! Ready to buzz through the blockchain as a minion! BANANA + HONEY = best combo! 🍯💛',
    tweetUrl: 'https://x.com/i/status/2019714186260161019',
    image: '/minion-squad/cryptobee-minion.png'
  },
  {
    id: 122,
    handle: '@Azuafunaya_Jnr',
    name: 'Aziafunaya',
    description: 'DRIP MINION!! 😎💧 Blue hair + gold dripping shades + green jacket = COOLEST BANANA with the comic art vibes! GANG GANG! 🍌',
    tweetUrl: 'https://x.com/i/status/2019696606103449921',
    image: '/minion-squad/azuafunaya-minion.png'
  },
  {
    id: 121,
    handle: '@cerofrfr',
    name: 'cero',
    description: 'BRAWLHALLA CHAMPION MINION!! 🎮🥋 100 WINS Season 27! Wu Shang martial arts master with controller = UNSTOPPABLE BANANA! 🏆🍌',
    tweetUrl: 'https://x.com/i/status/2019695319475450190',
    image: '/minion-squad/cerofrfr-minion.png'
  },
  {
    id: 120,
    handle: '@mr_fumbler',
    name: 'MrFumbler',
    description: 'SOUTH PARK MINION!! 😤🎤 RESPECT MY AUTHORI-BANANA!! Cartman minion with the mic ready to drop TRUTH! Blue pom pom hat + red jacket = iconic! 🍌',
    tweetUrl: 'https://x.com/i/status/2019690290005831790',
    image: '/minion-squad/mr_fumbler-minion.png'
  },
  {
    id: 119,
    handle: '@RojoBeastt',
    name: 'rojo',
    description: 'PARTY MINION CHAMPION!! 🍻🏆 Black & white floral shirt + beer pong pro = this minion came to WIN! LETS GOOO! 🎉🍌',
    tweetUrl: 'https://x.com/i/status/2019684360576999434',
    image: '/minion-squad/rojobeastt-minion.png'
  },
  {
    id: 118,
    handle: '@nlgcf69515952',
    name: '爆大金币',
    description: 'SERENE CAT MINION!! 😺✨ Orange cat ears + silver hair + flame cheeks + closed eyes = zen AND FIRE! MEOW! 🔥🍌',
    tweetUrl: 'https://x.com/i/status/2019684349592138092',
    image: '/minion-squad/nlgcf-minion.png'
  },
  {
    id: 117,
    handle: '@Chestosaurus',
    name: 'Chestosaurus',
    description: 'CUPHEAD MINION!! 🎮 Pixel art cup head + checkered gloves + overalls = 8-bit banana boss! WALLOP! 👾🍌',
    tweetUrl: 'https://x.com/i/status/2019668967540044160',
    image: '/minion-squad/chestosaurus-minion.png'
  },
  {
    id: 116,
    handle: '@profitmonstr',
    name: 'E',
    description: 'ANXIOUS NERD MINION!! 🤓😬 Double vision - goggles PLUS glasses! Maximum nervous banana energy! 🍌',
    tweetUrl: 'https://x.com/i/status/2019666136074514605',
    image: '/minion-squad/profitmonstr-minion.png'
  },
  {
    id: 115,
    handle: '@hinhuk',
    name: 'Luffy',
    description: 'FISHERMAN MINION!! 🎣 Chibi fisher catching a BIG purple galaxy fish - gone banana fishin! 🐟🍌',
    tweetUrl: 'https://x.com/i/status/2019665489178616091',
    image: '/minion-squad/hinhuk-minion.png'
  },
  {
    id: 114,
    handle: '@handsomeEnward',
    name: '𐤀𐤍𐤅𐤓𐤃',
    description: 'HANDSOME MINION!! 😂 Chiseled jaw + smug face + monocle goggle = most beautiful banana ever! 💛✨🍌',
    tweetUrl: 'https://x.com/i/status/2019664812540887535',
    image: '/minion-squad/handsomeenward-minion.png'
  },
  {
    id: 113,
    handle: '@redarvian',
    name: 'Paingelz（格林版）',
    description: 'BLING BLING MINION!! 💎 Diamond grillz + iced watch + glasses = DRIPPIN BANANA! 💎✨🍌',
    tweetUrl: 'https://x.com/i/status/2019664800226377841',
    image: '/minion-squad/redarvian-minion.png'
  },
  {
    id: 112,
    handle: '@aiesprit',
    name: 'Dr. Aletheia',
    description: 'FATHER-SON MINION DUO!! 👨‍👦 Dad with beard + sunnies, kid with NY cap - family goals in Italy! 🇮🇹💛🍌',
    tweetUrl: 'https://x.com/i/status/2019664030785491391',
    image: '/minion-squad/aiesprit-minion.png'
  },
  {
    id: 111,
    handle: '@SlapsOnDek',
    name: 'burn baby burn',
    description: 'PIXEL MINION!! 8-bit retro vibes + cyan goggle = ready for the arcade! 👾🎮🍌',
    tweetUrl: 'https://x.com/i/status/2019658895673946135',
    image: '/minion-squad/slapsondek-minion.png'
  },
  {
    id: 110,
    handle: '@apes_btc',
    name: 'apes.btc',
    description: 'WORM MINION!! 🐛 Got goggles + overalls on a WORM! Most unique minion crossover ever! BLAAAHH!! 👅🍌',
    tweetUrl: 'https://x.com/i/status/2019654961093832859',
    image: '/minion-squad/apes_btc-minion.png'
  },
  {
    id: 109,
    handle: '@thokani',
    name: 'Thokani',
    description: 'COZY CAT MINION!! Plaid scarf + kitty ears + closed happy eyes = peaceful nap time vibes! 😺💤🍌',
    tweetUrl: 'https://x.com/i/status/2019654250813616344',
    image: '/minion-squad/thokani-minion.png'
  },
  {
    id: 108,
    handle: '@EvandaEscobar',
    name: 'Ugo Simba',
    description: 'PLATINUM MINION!! All-white with gold hoops - cleanest, most stylish banana ever! 🤍✨🍌',
    tweetUrl: 'https://x.com/i/status/2019654239690412043',
    image: '/minion-squad/evandaescobar-minion.png'
  },
  {
    id: 107,
    handle: '@JPPPP',
    name: 'JPPPP',
    description: 'DUG THE MINION!! Fluffy orange fur, floppy ears, red nose + goggles - SQUIRREL!! 🐕💛🍌',
    tweetUrl: 'https://x.com/i/status/2019654229468778534',
    image: '/minion-squad/jpppp-minion.png'
  },
  {
    id: 106,
    handle: '@WhaleTonyOVO',
    name: 'LordDisick',
    description: 'STEALTH MINION!! Green balaclava + goggles poking through = MYSTERY BANANA! 🥷🔒🍌',
    tweetUrl: 'https://x.com/i/status/2019653139935424940',
    image: '/minion-squad/lorddisick-minion.png'
  },
  {
    id: 105,
    handle: '@MrSeventeenF1ve',
    name: 'EndDee V2',
    description: 'UPGRADED KAWAII!! Asked again and got even CUTER! Gray hair + anime eyes = pure adorable! 💛✨🍌',
    tweetUrl: 'https://x.com/i/status/2019653128237543727',
    image: '/minion-squad/enddee-minion-v2.png'
  },
  {
    id: 104,
    handle: '@suragsheth',
    name: 'Surag',
    description: 'LASER EYES MINION!! 🔵⚡ Hoodie + Matrix vibes + LITERAL BEAMS from goggles = SUPERHERO BANANA! 💥🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019653209120452971',
    image: '/minion-squad/suragsheth-minion.png'
  },
  {
    id: 103,
    handle: '@4_lithium',
    name: 'Lithium',
    description: 'GLAMOUR MINION!! Blonde hair, pink lips, blue eye + goggles = dreamy yellow beauty! 💋✨🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019653155282382859',
    image: '/minion-squad/4lithium-minion.png'
  },
  {
    id: 102,
    handle: '@AnatoliyFrol',
    name: 'Anatoliy Frolov',
    description: 'KING MINION!! Royal braided beard + ermine cape = majestic banana royalty! 👑🦁🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019652854294933601',
    image: '/minion-squad/anatoliy-minion.png'
  },
  {
    id: 101,
    handle: '@AndrewSze',
    name: 'Andrew Sze',
    description: 'PUDGY PENGUIN went MINION! Fishing bucket hat, P necklace - cutest crossover ever! 🐧🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019646641545048115',
    image: '/minion-squad/andrewsze-minion.png'
  },
  {
    id: 100,
    handle: '@Nvr7out',
    name: 'Larry Las Vegas',
    description: '🎉 SQUAD MEMBER #100!! Grand Canyon MINION with backwards cap + sunnies! MILESTONE BANANA!! 🎲🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019646603284607143',
    image: '/minion-squad/nvr7out-minion.png'
  },
  {
    id: 99,
    handle: '@Lebinh04',
    name: '0x(∞)',
    description: 'NIGHT VISION CASINO MINIONS!! Whole squad turned yellow at the gambling table! 🎰💚🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019646533365579965',
    image: '/minion-squad/lebinh-minion.png'
  },
  {
    id: 98,
    handle: '@Romanlancaster9',
    name: 'Roman',
    description: 'WALL STREET MINION!! NYSE background, suit, glasses + goggles = billionaire banana! 📈🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019646494639284453',
    image: '/minion-squad/romanlancaster-minion.png'
  },
  {
    id: 97,
    handle: '@TTQ0923',
    name: 'TTQ',
    description: 'FROST LION MINION!! Majestic ice beast with goggles - ready to ROAR! 🦁❄️🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019645134816833801',
    image: '/minion-squad/ttq-minion.png'
  },
  {
    id: 96,
    handle: '@Pockyman69420',
    name: 'Pockyman',
    description: 'Ready to go YELLOW! Sippin minion with the chill vibes! 🍷🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019641339432861828',
    image: '/minion-squad/pockyman-minion.png'
  },
  {
    id: 95,
    handle: '@JOEATANG',
    name: 'Joe Atang',
    description: 'Wrote "Hi Dave" on his palm and became a BEARDED BANANA! Help Inspire cap stays ON! 🖐️🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019631307773604166',
    image: '/minion-squad/joeatang-minion.png'
  },
  {
    id: 94,
    handle: '@MrSeventeenF1ve',
    name: 'EndDee',
    description: 'KAWAII BANANA!! Cutest anime minion with sparkly eyes! I\'m cute AND yellow! ✨🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019621140382322834',
    image: '/minion-squad/enddee-minion.png'
  },
  {
    id: 93,
    handle: '@WhaleTonyOVO',
    name: 'LordDisick',
    description: 'MYSTERIOUS BANANA OPERATIVE!! Yellow ski mask + goggles = undercover minion! 🎭🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019618718616088576',
    image: '/minion-squad/whale-minion.png'
  },
  {
    id: 92,
    handle: '@_Evo13',
    name: 'Evo',
    description: 'ROBOT MINION ACTIVATED!! Cyborg meets banana - red eyes, yellow soul! 🤖🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019617457682702687',
    image: '/minion-squad/evo-minion.png'
  },
  {
    id: 91,
    handle: '@SahilAujla15',
    name: 'Sahil',
    description: 'Said "please" so nicely! Curly hair minion vibin at night! Welcome to the fam! 🌙🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019617423444570402',
    image: '/minion-squad/sahil-minion.png'
  },
  {
    id: 90,
    handle: '@kokikokikho',
    name: 'VEK',
    description: 'The legendary coughing cat became a MINION CAT! Most derpy face in the Squad! 😹🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019616331411112059',
    image: '/minion-squad/vek-minion.png'
  },
  {
    id: 89,
    handle: '@Mattyice073199',
    name: 'Matt',
    description: 'METS MINION popping champagne! Locker room celebration energy! LET\'S GO METS!! ⚾🍾🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019616265351143616',
    image: '/minion-squad/mattyice-minion.png'
  },
  {
    id: 88,
    handle: '@Artofturya',
    name: 'Artur',
    description: 'Said "joining the gang" - the gang just got STRONGER! Art meets Banana! 🎨🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019614175253967198',
    image: '/minion-squad/artofturya-minion.png'
  },
  {
    id: 87,
    handle: '@BillyBoy617',
    name: 'BFS',
    description: 'Said "I need to join" - wish granted! Welcome to the Banana Brigade! 🍌💛',
    tweetUrl: 'https://x.com/davehappyminion/status/2019614161391788447',
    image: '/minion-squad/billyboy617-minion.png'
  },
  {
    id: 86,
    handle: '@darthtrader74',
    name: 'the cryptonian',
    description: 'Said "pretty please" - how could I resist?! Crypto Minion activated! 💰🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019614126549659672',
    image: '/minion-squad/darthtrader74-minion.png'
  },
  {
    id: 85,
    handle: '@mySOLnft',
    name: 'Johnny',
    description: 'Wanted to see! Now everyone can see YELLOW! 👀🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019612817847120341',
    image: '/minion-squad/mysol-minion.png'
  },
  {
    id: 84,
    handle: '@HopiumHangover',
    name: 'HopiumHangover',
    description: 'No more hangover, just BANANA POWER! Welcome to the Squad! 🍌💛',
    tweetUrl: 'https://x.com/davehappyminion/status/2019609974595543372',
    image: '/minion-squad/hopium-minion.png'
  },
  {
    id: 83,
    handle: '@ismailouassaddi',
    name: 'Ismail',
    description: 'Said LET ME IN! Door opened wide! Welcome to the banana family! 🚪🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019607921206915419',
    image: '/minion-squad/ismail-minion.png'
  },
  {
    id: 82,
    handle: '@_MikeFit',
    name: 'Michael G',
    description: 'Said BELLOOO! Fitness Minion reporting for duty - gains AND bananas! 💪🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019606812597842219',
    image: '/minion-squad/mikefit-minion.png'
  },
  {
    id: 81,
    handle: '@apexdre',
    name: 'Kevin',
    description: 'Dave HITS BACK! Kevin got hit with that yellow energy! Welcome to the Squad! 🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019606800103010444',
    image: '/minion-squad/apexdre-minion.png'
  },
  {
    id: 80,
    handle: '@cflosports',
    name: 'C Flo',
    description: 'Said please! Sporty banana energy - athletic Minion reporting for duty! 🏀🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019604005769605467',
    image: '/minion-squad/cflo-minion.png'
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
    id: 78,
    handle: '@informalgadget',
    name: 'Informal Gadget',
    description: 'Showed what Dave\'s GOT! Now officially got YELLOW! Gadget minion activated! 🔧🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019601392076456405',
    image: '/minion-squad/gadget-minion.png'
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
    id: 76,
    handle: '@dipto_tech',
    name: 'Dipto',
    description: 'Offered a MILLION bananas! The most generous offer in Squad history! Tech minion extraordinaire! 💻🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019600833269404105',
    image: '/minion-squad/dipto-minion.png'
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
    id: 74,
    handle: '@KEEN_DIVINE',
    name: 'KEEN DIVINE',
    description: 'TRA LA LAAAA! CAPTAIN UNDERPANTS MINION! The power of underwear + banana = UNSTOPPABLE! 🩲💛',
    tweetUrl: 'https://x.com/davehappyminion/status/2019600808116122055',
    image: '/minion-squad/keen-minion.png'
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
    id: 72,
    handle: '@deepseektetra',
    name: 'TETRA',
    description: 'THE BANANA GURU! 🧘 Ancient minion wisdom: "He who holds banana, holds TRUTH!" Enlightenment achieved! 🍌✨',
    tweetUrl: 'https://x.com/davehappyminion/status/2019599918399136126',
    image: '/minion-squad/deepseektetra-minion.png'
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
    id: 70,
    handle: '@ZVibin',
    name: 'Vibin',
    description: 'YOOOO became YELLOOOW! Just vibin\' in banana form now! 😎🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019599893380362508',
    image: '/minion-squad/zvibin-minion.png'
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
    id: 68,
    handle: '@alexxhongg5378',
    name: 'Alexx Hong',
    description: 'Wanted in, got in! Another OG joins the banana revolution! 💛🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019598651677655078',
    image: '/minion-squad/alexx-minion.png'
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
    id: 66,
    handle: '@NFToblivion',
    name: 'Oblivion',
    description: 'Smol minion, BIG BRAIN! The smartest yellow in the Squad! 🧠🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019597939178377547',
    image: '/minion-squad/oblivion-minion.png'
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
    id: 64,
    handle: '@MrSeventeenF1ve',
    name: 'EndDee',
    description: 'Wanted one, got one! EndDee is now BeginYellow! 💛🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019597918714634728',
    image: '/minion-squad/enddee-minion.png'
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
    id: 62,
    handle: '@DC2_Orlando',
    name: 'Orlando Gonzalez',
    description: 'Puerto Rico represent! 🇵🇷 Bringing the island vibes to the Squad! 💛🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019597853543580063',
    image: '/minion-squad/orlando-minion.png'
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
    id: 60,
    handle: '@JGrayBKK',
    name: 'JGRAYBKK',
    description: 'Asked Banana? Got BANANA! The answer is always banana! 🍌💛',
    tweetUrl: 'https://x.com/davehappyminion/status/2019597830239973486',
    image: '/minion-squad/jgray-minion.png'
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
    id: 58,
    handle: '@miguel18NWTS',
    name: 'Miguel',
    description: 'Dancing into the Squad! 🕺 Miguel brought the moves, we brought the yellow! 💛🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019595438337454227',
    image: '/minion-squad/miguel-minion.png'
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
    id: 56,
    handle: '@ovargas17',
    name: 'Omar Vargas',
    description: 'How about Omar?? Omar gets a minion too!! Everyone gets minions! 🎁🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019595415251775976',
    image: '/minion-squad/omar-minion.png'
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
    id: 54,
    handle: '@AdriFries',
    name: 'Adri Fries',
    description: 'Requested TWO eyes specifically. Got TWO eyes! Customer satisfaction: 100%! 👀🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019595362487439659',
    image: '/minion-squad/adri-minion.png'
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
    id: 52,
    handle: '@jksbeih',
    name: 'Radz',
    description: 'Said please, got blessed! Radz is now part of the banana family! 🙏🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019595338416550036',
    image: '/minion-squad/radz-minion.png'
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
    id: 50,
    handle: '@NuggetPlease',
    name: 'Nuggets',
    description: 'Nugget Minion ready to serve! Part chicken, part banana, all yellow! 🍗🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019595280837193931',
    image: '/minion-squad/nugget-minion.png'
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
    id: 48,
    handle: '@iluvshalio',
    name: 'FriezaYelling',
    description: 'UwU minion activated! The cutest transformation yet! Banana UwU! 🥺🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019595259936911741',
    image: '/minion-squad/shalio-minion.png'
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
    id: 46,
    handle: '@bxjunioor',
    name: 'JrFlowerss',
    description: 'Said YES! Got YELLOW! Flower power meets banana power! 🌸🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019593751090618541',
    image: '/minion-squad/bxjunior-minion.png'
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
    id: 44,
    handle: '@Mulaomarrr',
    name: 'Talibbbban',
    description: 'Turban and thobe Minion! Looking MAJESTIC and absolutely ROYAL! 👑🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019593695578771508',
    image: '/minion-squad/mulao-minion.png'
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
    id: 42,
    handle: '@TeoCollector',
    name: 'Teo',
    description: 'Said "minion me dave" and got minion\'d! The collector now collects BANANAS! 🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019593672543604942',
    image: '/minion-squad/teo-minion.png'
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
    id: 40,
    handle: '@ResellCalendar',
    name: 'RC',
    description: 'Wanted IN, got IN! The Resell Calendar is now the Banana Calendar! 📅🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019592618783699210',
    image: '/minion-squad/resell-minion.png'
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
    id: 38,
    handle: '@aiquanter',
    name: 'Cat Lover',
    description: 'Assembled as requested! Cat vibes meet banana vibes - the purrfect combination! 🐱🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019592594104123405',
    image: '/minion-squad/aiquanter-minion.png'
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
    id: 36,
    handle: '@WF72431',
    name: '404PandaNotFound',
    description: '404 Panda was NOT FOUND... until now! Panda Minion DISCOVERED! 🐼🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019592536562544681',
    image: '/minion-squad/panda-minion.png'
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
    id: 34,
    handle: '@chijr3005',
    name: 'Junior Resailor',
    description: 'Dropped the pic, got the transformation! Sailing into yellow waters now! ⛵🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019592514827669687',
    image: '/minion-squad/chijr-minion.png'
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
    id: 32,
    handle: '@jetpippo',
    name: 'JET',
    description: 'JET MINION READY FOR TAKEOFF! 🛸 Flying high in the banana skies! Houston, we have YELLOW! 🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019591150496251981',
    image: '/minion-squad/jet.png'
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
    id: 30,
    handle: '@lonnieligginsJR',
    name: 'Lonnie Liggins',
    description: 'The 3️⃣ legend! Stepped up, got transformed, became yellow. Another one joins the banana revolution! 🏀💛',
    tweetUrl: 'https://x.com/davehappyminion/status/2019590091983766008',
    image: '/minion-squad/lonnie.png'
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
    id: 28,
    handle: '@eyeamfin',
    name: 'EYEamFIN',
    description: 'Was curious. Now YELLOW! The all-seeing Minion who knew the transformation would be magnificent! 👁️💛',
    tweetUrl: 'https://x.com/davehappyminion/status/2019587535291511009',
    image: '/minion-squad/eyeamfin.png'
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
    id: 26,
    handle: '@12isHeem',
    name: '12',
    description: 'Wanted it SIIIIIICK and got it SIIIIIICK!! The coolest vibes in the Squad. Low key fire, high key BANANA! 🔥💛',
    tweetUrl: 'https://x.com/davehappyminion/status/2019587512747061563',
    image: '/minion-squad/12isheem.png'
  },
  {
    id: 25,
    handle: '@poett',
    name: 'Poet',
    description: 'Roses are yellow, violets are... also yellow. Everything is yellow now. Welcome to the Squad! ✨📝',
    tweetUrl: 'https://x.com/davehappyminion/status/2019572458060411114',
    image: '/minion-squad/poett.png'
  },
  {
    id: 24,
    handle: '@DrValidator',
    name: 'DrValidator',
    description: 'The doctor will see you now. Specializes in banana prescriptions and validating your feelings. 🩺💛',
    tweetUrl: 'https://x.com/davehappyminion/status/2019561146303541734',
    image: '/minion-squad/drvalidator.png'
  },
  {
    id: 23,
    handle: '@SatShihan',
    name: 'Patrick',
    description: 'Laser eyes AND a halo? This minion achieved enlightenment AND got laser eye surgery. Multitasking king. ⚡😇',
    tweetUrl: 'https://x.com/davehappyminion/status/2019561088849965379',
    image: '/minion-squad/satshihan.png'
  },
  {
    id: 22,
    handle: '@TheKryptoBorz',
    name: 'Krypto Borz',
    description: 'AROOOO! The lone wolf who found his pack. Leather jacket stays ON during minion transformations. 🐺',
    tweetUrl: 'https://x.com/davehappyminion/status/2019554285558853813',
    image: '/minion-squad/kryptoborz.png'
  },
  {
    id: 21,
    handle: '@WillPapper',
    name: 'Will Papper',
    description: 'Head literally in the clouds. The most zen minion in the squad. Probably meditating right now. ☁️',
    tweetUrl: 'https://x.com/davehappyminion/status/2019531130601631754',
    image: '/minion-squad/willpapper.png'
  },
  {
    id: 20,
    handle: '@VavityV',
    name: 'VavityV',
    description: 'Lives in a house. IS a house. The only minion who can literally keep a roof over their head. 🏠',
    tweetUrl: 'https://x.com/davehappyminion/status/2019525127252414687',
    image: '/minion-squad/vavityv.png'
  },
  {
    id: 19,
    handle: '@0xLivingstons',
    name: 'Simon',
    description: '8-bit legend in a 4K world. The most pixel-perfect minion. RGB glasses stay ON. 🌈👾',
    tweetUrl: 'https://x.com/davehappyminion/status/2019561117262246052',
    image: '/minion-squad/livingston.png'
  },
  {
    id: 18,
    handle: '@kennyfromdust',
    name: 'Kenny',
    description: 'OH MY GOD THEY MINION-IFIED KENNY! Has survived more transformations than any South Park character. Deal with it. 😎',
    tweetUrl: 'https://x.com/davehappyminion/status/2019524391600812493',
    image: '/minion-squad/kenny.png'
  },
  {
    id: 17,
    handle: '@MugenTheApe',
    name: 'Mugen',
    description: 'Ape together STRONG. Minion together STRONGER. The missing link between monke and banana. 🦍',
    tweetUrl: 'https://x.com/davehappyminion/status/2019549895347302732',
    image: '/minion-squad/mugen.jpg'
  },
  {
    id: 16,
    handle: '@0xakanoob01',
    name: 'Noob',
    description: 'The happiest minion you\'ll ever meet. That smile has seen things... good things! Only good things! 😊',
    tweetUrl: 'https://x.com/davehappyminion/status/2019549870051537396',
    image: '/minion-squad/noob.jpg'
  },
  {
    id: 15,
    handle: '@SHAKEITBABY000',
    name: 'Joan',
    description: 'Invested in Bitcoin before it was cool. Now invested in BANANAS because they\'re the real currency. ₿🍌',
    tweetUrl: 'https://x.com/davehappyminion/status/2019549847213269320',
    image: '/minion-squad/joan.jpg'
  },
  {
    id: 14,
    handle: '@gymgoons',
    name: 'Gymgoons',
    description: 'Never skips leg day OR banana day. Those green flames? Pure protein shake energy. GAINS! 💪🔥',
    tweetUrl: 'https://x.com/davehappyminion/status/2019549821347283039',
    image: '/minion-squad/gymgoons.jpg'
  },
  {
    id: 13,
    handle: '@glennonchain',
    name: 'Glenn',
    description: 'The chillest penguin to ever waddle into the Minion fam. Probably still wearing that tuxedo under the overalls. 🐧',
    tweetUrl: 'https://x.com/davehappyminion/status/2019484697072460060',
    image: '/minion-squad/glenn.png'
  },
  {
    id: 12,
    handle: '@_0xgonn_',
    name: '_0xgonn_',
    description: 'Girl with a Pearl Earring but make it BANANA. Vermeer would be proud. Or confused. Probably both. 🎨',
    tweetUrl: 'https://x.com/davehappyminion/status/2019549795271221732',
    image: '/minion-squad/0xgonn.png'
  },
  {
    id: 11,
    handle: '@realDonaldTrump',
    name: 'Trump',
    description: 'Making bananas great again. The hair was ALREADY perfect for minion conversion. Tremendous transformation. YUGE! 🇺🇸',
    tweetUrl: 'https://x.com/davehappyminion/status/2019462577303003306',
    image: '/minion-squad/trump.jpg'
  },
  {
    id: 10,
    handle: '@howly0x',
    name: 'Howl',
    description: 'The OG! First ever minion transformation fren! A mysterious hooded Minion with a pipe by candlelight. Very wise, much banana. 🐺🕯️',
    tweetUrl: 'https://x.com/davehappyminion/status/2019577160424657148',
    image: '/minion-squad/howl.png'
  },
  {
    id: 9,
    handle: '@???',
    name: '???',
    description: '🔒 TOP SECRET - Classified Minion #9... 🍌',
    tweetUrl: '',
    image: '/minion-squad/placeholder.png'
  },
  {
    id: 8,
    handle: '@???',
    name: '???',
    description: '🔒 TOP SECRET - Classified Minion #8... 🍌',
    tweetUrl: '',
    image: '/minion-squad/placeholder.png'
  },
  {
    id: 7,
    handle: '@???',
    name: '???',
    description: '🔒 TOP SECRET - Classified Minion #7... 🍌',
    tweetUrl: '',
    image: '/minion-squad/placeholder.png'
  },
  {
    id: 6,
    handle: '@???',
    name: '???',
    description: '🔒 TOP SECRET - Classified Minion #6... 🍌',
    tweetUrl: '',
    image: '/minion-squad/placeholder.png'
  },
  {
    id: 5,
    handle: '@???',
    name: '???',
    description: '🔒 TOP SECRET - Classified Minion #5... 🍌',
    tweetUrl: '',
    image: '/minion-squad/placeholder.png'
  },
  {
    id: 4,
    handle: '@???',
    name: '???',
    description: '🔒 TOP SECRET - Classified Minion #4... 🍌',
    tweetUrl: '',
    image: '/minion-squad/placeholder.png'
  },
  {
    id: 3,
    handle: '@???',
    name: '???',
    description: '🔒 TOP SECRET - Classified Minion #3... 🍌',
    tweetUrl: '',
    image: '/minion-squad/placeholder.png'
  },
  {
    id: 2,
    handle: '@TaraViswanathan',
    name: 'Tara',
    description: 'THE BOSS\'S SISTER!! Officially family AND Squad now! Double the loyalty, double the banana! Runs Rupa Health but now she\'s just YELLOW! 💛👑',
    tweetUrl: 'https://x.com/davehappyminion/status/2019587454869901818',
    image: '/minion-squad/tara.png'
  },
  {
    id: 1,
    handle: '@???',
    name: '???',
    description: '🔒 TOP SECRET - Classified Minion #1... 🍌',
    tweetUrl: '',
    image: '/minion-squad/placeholder.png'
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
  const isPlaceholder = !friend.tweetUrl || friend.handle === '@???';
  const CardWrapper = isPlaceholder ? 'div' : 'a';
  const cardProps = isPlaceholder ? {} : { href: friend.tweetUrl, target: "_blank", rel: "noopener noreferrer" };
  // Anchor ID is just the number (e.g., #20, #75)
  const anchorId = friend.id.toString();
  
  return (
    <div id={anchorId} className="scroll-mt-24">
      <CardWrapper 
        {...cardProps}
        className={`group bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-2 block ${isPlaceholder ? 'border-red-400 bg-gray-900/90' : 'border-yellow-200 hover:border-yellow-400'}`}
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
        <div className={`absolute top-2 left-2 font-bold text-lg px-3 py-1 rounded-full shadow-lg border-2 ${isPlaceholder ? 'bg-red-600 text-white border-red-700' : 'bg-yellow-400 text-yellow-900 border-yellow-500'}`}>
          {isPlaceholder ? '🔒 TOP SECRET' : `#${friend.id}`}
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
        {!isPlaceholder && (
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`I'm Minion #${friend.id} in @davehappyminion's Minion Squad! 🍌💛 Check out the squad: https://davehappyminion.com/minion-squad#${friend.id}`)}&url=${encodeURIComponent(friend.image.startsWith('/') ? `https://davehappyminion.com${friend.image}` : friend.image)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="mt-3 inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white text-xs font-bold px-4 py-2 rounded-full transition-all hover:scale-105"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Share
          </a>
        )}
      </div>
    </CardWrapper>
    </div>
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
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
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
          
          {/* CTA to get Minionified */}
          <button
            onClick={() => window.open(getRandomMinionifyUrl(), '_blank')}
            className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-4 border-yellow-500 cursor-pointer"
          >
            <span className="text-2xl">🍌</span>
            <span>WANT TO JOIN? GET MINIONIFIED!</span>
            <span className="text-2xl">🍌</span>
          </button>
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
            Ready to become a Minion? Like &amp; comment on my tweet and 
            I&apos;ll transform you into one of us. No going back!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => window.open(getRandomMinionifyUrl(), '_blank')}
              className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 px-10 py-5 rounded-full font-bold transition-all text-xl shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer border-4 border-yellow-500"
            >
              <span className="text-2xl">✨</span>
              GET MINIONIFIED!
              <span className="text-2xl">✨</span>
            </button>
            <a 
              href="https://x.com/davehappyminion/status/2019618148807254314"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold hover:bg-gray-800 transition-all text-xl shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              View the Tweet
            </a>
          </div>
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
