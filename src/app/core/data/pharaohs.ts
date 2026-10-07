import { Pharaoh } from '../models/pharaoh.model';

export const pharaohs: Pharaoh[] = [
  {
    id: '1',
    slug: 'narmer',
    name: 'Narmer',
    dynasty: 'First Dynasty',
    dynastyNumber: 1,
    reign: 'c. 3100–3050 BCE',
    approximateDates: '3100–3050 BCE',
    period: 'Early Dynastic Period',
    biography: `Narmer is credited with the unification of Upper and Lower Egypt, transforming two rival kingdoms into a single empire. The famous Narmer Palette, a carved slate ceremonial object, depicts him wearing both the White Crown of Upper Egypt and the Red Crown of Lower Egypt, symbolizing his dominion over both lands. Whether Narmer achieved this through military conquest or inherited a unified kingdom remains debated among scholars. What is certain is that his reign marked the beginning of Egypt's first dynasty and established the foundations of pharaonic kingship that would endure for three thousand years.`,
    achievements: [
      'Unification of Upper and Lower Egypt',
      'Established the First Dynasty',
      'Created the dual crown symbolism',
      'Established Memphis as capital',
      'Initiated the Early Dynastic Period'
    ],
    monuments: [
      'Narmer Palette (ceremonial artifact)',
      'Fortress at Hierakonpolis',
      'Tombs at Abydos'
    ],
    family: 'Father of Djer (successor)',
    importantEvents: [
      'The unification of Egypt c. 3100 BCE',
      'Establishment of the First Dynasty',
      'Creation of dual crown iconography'
    ],
    relatedArticles: [
      'rise-of-ancient-egypt',
      'narmer-and-unification',
      'who-was-manetho'
    ],
    image: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800',
    imageAlt: 'Ancient Egyptian hieroglyphic inscriptions depicting Narmer'
  },
  {
    id: '2',
    slug: 'djoser',
    name: 'Djoser',
    dynasty: 'Third Dynasty',
    dynastyNumber: 3,
    reign: 'c. 2670–2650 BCE',
    approximateDates: '2670–2650 BCE',
    period: 'Old Kingdom',
    biography: `Djoser commissioned the world's first monumental stone structure: the Step Pyramid at Saqqara. Under the direction of his vizier, the brilliant Imhotep, Djoser transformed the mud-brick mastaba tomb into a revolutionary six-tiered pyramid rising 62 meters above the desert floor. This unprecedented achievement demonstrated Egypt's mastery of engineering and stone construction, establishing a precedent for the great pyramids that would follow. Djoser's reign saw Egypt transition from the mud-brick architecture of earlier dynasties to permanent stone monuments.`,
    achievements: [
      'Commissioned the Step Pyramid at Saqqara',
      'Pioneered monumental stone architecture',
      'Established the Old Kingdom artistic tradition',
      'Expanded Egyptian influence into Sinai',
      'Created institutional frameworks for monument building'
    ],
    monuments: [
      'Step Pyramid at Saqqara (world\'s first monumental stone structure)',
      'Mortuary temple complex at Saqqara',
      'Limestone shrine at Saqqara'
    ],
    family: 'Probably son of Khasekhemwy; founder of Third Dynasty',
    importantEvents: [
      'Commission of the Step Pyramid c. 2670 BCE',
      'Revolution in architectural technology',
      'Beginning of the Old Kingdom monumental tradition'
    ],
    relatedArticles: [
      'djoser-and-step-pyramid',
      'how-great-pyramid-was-built'
    ],
    image: 'https://images.unsplash.com/photo-1590133324192-1df305deeefc?w=800',
    imageAlt: 'The Step Pyramid of Djoser at Saqqara'
  },
  {
    id: '3',
    slug: 'khufu',
    name: 'Khufu',
    throneName: 'Khuf',
    dynasty: 'Fourth Dynasty',
    dynastyNumber: 4,
    reign: 'c. 2589–2566 BCE',
    approximateDates: '2589–2566 BCE',
    period: 'Old Kingdom',
    biography: `Khufu is immortalized as the builder of the Great Pyramid of Giza—the sole surviving Wonder of the Ancient World. For 3,800 years, his pyramid remained the tallest structure on Earth. Built with approximately 2.3 million limestone blocks and covering an area of 13 acres, the Great Pyramid represents an extraordinary achievement of engineering, organization, and vision. Khufu's reign saw Egypt reach new heights of prosperity and power. Though he is remembered primarily for this monument, he was also an accomplished administrator and military commander.`,
    achievements: [
      'Built the Great Pyramid of Giza',
      'Commissioned extensive pyramid temples and complexes',
      'Expanded Egyptian military power',
      'Organized one of history\'s greatest building projects',
      'Maintained Egypt\'s wealth and stability'
    ],
    monuments: [
      'The Great Pyramid of Giza (original height 146.6m)',
      'Pyramid temples and causeways',
      'Satellite pyramids',
      'Valley temples'
    ],
    family: 'Son of Sneferu; father of Khafre and Menkaure',
    importantEvents: [
      'Construction of the Great Pyramid c. 2589–2566 BCE',
      'Organization of the Egyptian workforce',
      'Peak of Fourth Dynasty prosperity'
    ],
    relatedArticles: [
      'how-great-pyramid-was-built',
      'djoser-and-step-pyramid'
    ],
    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800',
    imageAlt: 'The Great Pyramid of Giza against a clear sky'
  },
  {
    id: '4',
    slug: 'hatshepsut',
    name: 'Hatshepsut',
    dynasty: 'Eighteenth Dynasty',
    dynastyNumber: 18,
    reign: 'c. 1479–1458 BCE',
    approximateDates: '1479–1458 BCE',
    period: 'New Kingdom',
    biography: `Hatshepsut was one of ancient Egypt's most successful rulers—yet after her death, her monuments were systematically destroyed and her name erased. She began as regent for her young stepson, Thutmose III, but declared herself pharaoh and ruled for over twenty years. She wore the royal regalia, including the false beard, and was depicted as male in official art—yet maintained her feminine identity in inscriptions. Her reign saw Egypt flourish economically and militarily. She is most famous for her trading expedition to Punt and the construction of her magnificent mortuary temple at Deir el-Bahari.`,
    achievements: [
      'Ruled as female pharaoh in a male-dominated role',
      'Launched successful trading expedition to Punt',
      'Oversaw Egypt\'s greatest prosperity and expansion',
      'Commissioned the mortuary temple at Deir el-Bahari',
      'Maintained military stability and expanded Egyptian influence'
    ],
    monuments: [
      'Mortuary temple at Deir el-Bahari',
      'Obelisk at Karnak',
      'Chapels and sanctuaries throughout Egypt',
      'Rock-cut tomb in the Valley of the Kings'
    ],
    family: 'Daughter of Thutmose I; wife of Thutmose II; regent then co-ruler with Thutmose III',
    importantEvents: [
      'Became regent for Thutmose III c. 1479 BCE',
      'Declared herself pharaoh',
      'Expedition to Punt c. 1470 BCE',
      'Construction of Deir el-Bahari mortuary temple'
    ],
    relatedArticles: [
      'hatshepsut-female-pharaoh',
      'role-of-women-ancient-egypt'
    ],
    image: 'https://images.unsplash.com/photo-1590133324192-1df305deeefc?w=800',
    imageAlt: 'Mortuary temple of Hatshepsut at Deir el-Bahari'
  },
  {
    id: '5',
    slug: 'akhenaten',
    name: 'Akhenaten',
    throneName: 'Amenhotep IV (original name)',
    dynasty: 'Eighteenth Dynasty',
    dynastyNumber: 18,
    reign: 'c. 1353–1336 BCE',
    approximateDates: '1353–1336 BCE',
    period: 'New Kingdom',
    biography: `Akhenaten revolutionized Egyptian religion by abolishing the worship of Amun and instituting worship of the Aten—the solar disk—as the supreme, if not sole, god. He abandoned Thebes, building a new capital at Akhetaten (modern Amarna), where he pursued his religious revolution with intensity. His reign saw radical changes in art, moving away from the rigid formal style of traditional Egyptian art toward something more intimate and naturalistic. Yet his revolution was short-lived; his successors, including Tutankhamun, quickly reversed his policies and restored the traditional religion. Despite his controversial reign, Akhenaten's influence on Egyptian art and philosophy was profound.`,
    achievements: [
      'Religious revolution: promotion of Aten monotheism',
      'Founded new capital at Akhetaten (Amarna)',
      'Revolutionary changes in artistic style',
      'Promoted naturalism in art and representation',
      'Challenged the power of the priesthood of Amun'
    ],
    monuments: [
      'City of Akhetaten (Amarna)',
      'Temple of Aten at Amarna',
      'Tombs and palaces at Amarna',
      'Rock temples at Amarna'
    ],
    family: 'Son of Amenhotep III; husband of Nefertiti; father of six daughters; likely father of Tutankhamun',
    importantEvents: [
      'Took throne as Amenhotep IV c. 1353 BCE',
      'Changed name to Akhenaten',
      'Founded Akhetaten c. 1346 BCE',
      'Religious revolution promoting Aten worship',
      'Death c. 1336 BCE; religious counter-revolution follows'
    ],
    relatedArticles: [
      'akhenaten-amarna-revolution',
      'tutankhamun-forgotten-kingdom'
    ],
    image: 'https://images.unsplash.com/photo-1562779830-2403d77b5bc5?w=800',
    imageAlt: 'Ancient Egyptian statue showing Akhenaten with elongated features'
  },
  {
    id: '6',
    slug: 'tutankhamun',
    name: 'Tutankhamun',
    throneName: 'Tutankhaten (original name)',
    dynasty: 'Eighteenth Dynasty',
    dynastyNumber: 18,
    reign: 'c. 1332–1323 BCE',
    approximateDates: '1332–1323 BCE',
    period: 'New Kingdom',
    biography: `Tutankhamun ascended to the throne as a child and died mysteriously around age 19. Despite his brief and relatively unremarkable reign, he became the most famous pharaoh in the world due to the discovery of his nearly intact tomb by Howard Carter in 1922. The tomb contained over 5,000 objects, including his famous golden death mask. Tutankhamun reversed his father Akhenaten's religious revolution, restoring the worship of Amun and returning Egypt to traditional religious practices. Though he was likely manipulated by his advisors, his reign marked the restoration of order after the Amarna period's chaos.`,
    achievements: [
      'Restored traditional Egyptian religion',
      'Ended the Amarna period experiment',
      'Restored the power and wealth of the priesthood of Amun',
      'Returned the capital to Thebes',
      'Restored stability and order to Egypt'
    ],
    monuments: [
      'Tomb KV62 in the Valley of the Kings',
      'Restorations and additions to temples',
      'Monuments completed by his successors'
    ],
    family: 'Likely son of Akhenaten and Kiya; married to Ankhesenamun; possibly had two stillborn daughters',
    importantEvents: [
      'Ascended to throne c. 1332 BCE as a child',
      'Changed name from Tutankhaten to Tutankhamun',
      'Restored traditional religion c. 1331 BCE',
      'Died mysteriously c. 1323 BCE',
      'Tomb discovered by Howard Carter in 1922'
    ],
    relatedArticles: [
      'tutankhamun-forgotten-kingdom',
      'discovery-of-tutankhamuns-tomb',
      'valley-of-the-kings'
    ],
    image: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800',
    imageAlt: 'Golden death mask of Tutankhamun'
  },
  {
    id: '7',
    slug: 'seti-i',
    name: 'Seti I',
    dynasty: 'Nineteenth Dynasty',
    dynastyNumber: 19,
    reign: 'c. 1290–1279 BCE',
    approximateDates: '1290–1279 BCE',
    period: 'New Kingdom',
    biography: `Seti I was a powerful military commander and prolific builder who restored Egypt's international prestige after the Amarna period's disruptions. He campaigned extensively in the Levant and Nubia, reasserting Egyptian dominion. His reign saw the construction of magnificent temples and monuments, most notably the Great Hypostyle Hall at Karnak (completed by his son Ramses II) and his own mortuary temple at Abydos. Seti I's tomb in the Valley of the Kings is one of the finest and longest royal tombs, decorated with exquisite relief carving. He was the father of Ramses II, one of Egypt's greatest pharaohs.`,
    achievements: [
      'Restored Egyptian military dominance in the Levant',
      'Campaigned successfully in Nubia',
      'Commissioned the Great Hypostyle Hall at Karnak',
      'Built magnificent mortuary temple at Abydos',
      'Created an extensive tomb with exceptional relief decoration',
      'Father of Ramses II'
    ],
    monuments: [
      'Great Hypostyle Hall at Karnak',
      'Mortuary temple at Abydos',
      'Tomb KV17 in the Valley of the Kings',
      'Temple reliefs and inscriptions throughout Egypt'
    ],
    family: 'Son of Ramses I; father of Ramses II',
    importantEvents: [
      'Military campaigns in the Levant c. 1290–1280 BCE',
      'Construction of Karnak Hypostyle Hall',
      'Construction of Abydos temple complex',
      'Death c. 1279 BCE; succeeded by Ramses II'
    ],
    relatedArticles: [
      'ramses-ii-imperial-egypt',
      'valley-of-the-kings'
    ],
    image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800',
    imageAlt: 'Temple of Seti I at Abydos with hieroglyphic relief'
  },
  {
    id: '8',
    slug: 'ramses-ii',
    name: 'Ramses II',
    throneName: 'Usermaatra-setep-en-re',
    dynasty: 'Nineteenth Dynasty',
    dynastyNumber: 19,
    reign: 'c. 1279–1213 BCE',
    approximateDates: '1279–1213 BCE',
    period: 'New Kingdom',
    biography: `Ramses II, known as Ramses the Great, was one of ancient Egypt's most successful and prolific pharaohs. He ruled for 66 years, fathered over 100 children, and left his name on more monuments than any other pharaoh. His military campaigns extended Egyptian influence to the borders of Nubia and the Levant. Most famously, he fought the Hittites at Kadesh in 1274 BCE, resulting in the world's first recorded peace treaty. His building programs were extraordinary: he completed the Great Hypostyle Hall at Karnak, built his mortuary temple the Ramesseum, and carved the temples of Abu Simbel from the living rock. His reign represents the apex of Egyptian power and prosperity.`,
    achievements: [
      'Ruled for 66 years',
      'Fought the Hittites at Kadesh (1274 BCE)',
      'Signed the first recorded peace treaty',
      'Built temples at Abu Simbel',
      'Completed the Great Hypostyle Hall at Karnak',
      'Built the Ramesseum mortuary temple',
      'Extended Egyptian influence and power',
      'Fathered over 100 children'
    ],
    monuments: [
      'Abu Simbel temples (Great and Small temples)',
      'The Ramesseum mortuary temple',
      'Additions to Karnak and Luxor temples',
      'Numerous statues and reliefs throughout Egypt'
    ],
    family: 'Son of Seti I; father of over 100 children; principal wife was Nefertari',
    importantEvents: [
      'Battle of Kadesh against the Hittites (1274 BCE)',
      'Peace treaty with Hittite king Hattusili III',
      'Construction of Abu Simbel temples',
      'Construction of the Ramesseum'
    ],
    relatedArticles: [
      'ramses-ii-imperial-egypt',
      'valley-of-the-kings'
    ],
    image: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800',
    imageAlt: 'Abu Simbel temple carved into cliff face by Ramses II'
  },
  {
    id: '9',
    slug: 'cleopatra-vii',
    name: 'Cleopatra VII',
    dynasty: 'Ptolemaic Dynasty',
    dynastyNumber: 31,
    reign: 'c. 51–30 BCE',
    approximateDates: '51–30 BCE',
    period: 'Ptolemaic Period / Late Period',
    biography: `Cleopatra VII was the last active pharaoh of independent Egypt. Unlike other Ptolemaic rulers, she learned to speak Egyptian and connected deeply with Egyptian culture and traditions. She was highly educated, intelligent, and politically astute. Her diplomatic relationships with Julius Caesar and Mark Antony sustained Egypt's independence for as long as possible, but after her defeat by Octavian (the future Augustus) at the Battle of Actium in 31 BCE, Egypt became a Roman province. Cleopatra's suicide in 30 BCE marked the end of pharaonic Egypt and the beginning of Roman rule. Her legacy endures as one of history's most iconic figures.`,
    achievements: [
      'First Ptolemaic ruler to learn the Egyptian language',
      'Maintained Egypt\'s independence during Roman expansion',
      'Navigated complex diplomacy with Rome',
      'Promoted Egyptian culture and traditions',
      'Established partnerships with Caesar and Antony',
      'Protected Egypt\'s wealth and autonomy as long as possible'
    ],
    monuments: [
      'Temple of Dendera (reliefs depicting her and her son)',
      'Additions to various temples',
      'Coins and inscriptions bearing her image'
    ],
    family: 'Daughter of Ptolemy XII; sister-wives to Ptolemy XIII and Ptolemy XIV; mother of Caesarion (by Caesar) and twins and son by Antony',
    importantEvents: [
      'Became co-ruler with brother Ptolemy XIII c. 51 BCE',
      'Civil war and exile c. 48 BCE',
      'Alliance with Julius Caesar c. 48 BCE',
      'Battle of Actium defeat (31 BCE)',
      'Suicide and end of pharaonic Egypt (30 BCE)'
    ],
    relatedArticles: [
      'ptolemies-and-cleopatra',
      'role-of-women-ancient-egypt'
    ],
    image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800',
    imageAlt: 'Temple relief depicting Cleopatra VII'
  },
  {
    id: '10',
    slug: 'thutmose-iii',
    name: 'Thutmose III',
    throneName: 'Menkheperre',
    dynasty: 'Eighteenth Dynasty',
    dynastyNumber: 18,
    reign: 'c. 1479–1425 BCE',
    approximateDates: '1479–1425 BCE',
    period: 'New Kingdom',
    biography: `Thutmose III ruled for 54 years and is considered one of Egypt's greatest military commanders. Initially overshadowed by his regent Hatshepsut, he later became sole ruler and transformed Egypt into a military superpower. He led at least 16 military campaigns into the Levant, establishing Egyptian dominion over Syria and Nubia. His military strategy and organizational skills were legendary, earning him the title "Napoleon of Egypt" from modern historians. Though he is often overlooked in favor of his predecessors and successors, his military achievements and territorial expansions made Egypt the most powerful empire of the ancient Near East during his reign.`,
    achievements: [
      'Led 16+ successful military campaigns',
      'Expanded Egyptian empire to greatest territorial extent',
      'Established Egyptian hegemony in the Levant and Nubia',
      'Created sophisticated military administrative system',
      'Maintained stable and prosperous reign for 54 years',
      'Commissioned multiple temples and monuments'
    ],
    monuments: [
      'Mortuary temple at Deir el-Bahari',
      'Additions to Karnak temple',
      'Various temples and chapels',
      'Rock-cut tomb in Valley of the Kings'
    ],
    family: 'Son of Thutmose II; initially co-ruler then sole ruler after Hatshepsut\'s death',
    importantEvents: [
      'Co-ruled with Hatshepsut c. 1479–1458 BCE',
      'Became sole ruler c. 1458 BCE',
      'Battle of Megiddo (first military campaign) c. 1457 BCE',
      'Multiple campaigns to expand and maintain empire',
      'Death and succession by Amenhotep II c. 1425 BCE'
    ],
    relatedArticles: [
      'hatshepsut-female-pharaoh',
      'egyptian-temples-architecture'
    ],
    image: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800',
    imageAlt: 'Ancient Egyptian temple relief depicting Thutmose III'
  }
];
