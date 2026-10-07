import { TimelineEvent, TimelinePeriod } from '../models/timeline.model';

export const timelinePeriods: TimelinePeriod[] = [
  {
    id: 'predynastic',
    name: 'Predynastic Period',
    slug: 'predynastic-period',
    dateRange: 'c. 6000–3100 BCE',
    startYear: -6000,
    endYear: -3100,
    description: 'Period of gradual cultural development before Egypt\'s unification. Hunter-gatherers and early farmers adapted to the Nile Valley, developing agriculture, pottery, and social structures.',
    characteristics: [
      'Gradual development from hunter-gatherers to farmers',
      'Badarian culture (c. 4400–4000 BCE)',
      'Naqada I–III cultures (c. 4000–3100 BCE)',
      'Development of pottery, tools, and trade',
      'Emergence of social hierarchy and chieftains',
      'Proto-writing and symbolic representation'
    ],
    color: '#b59862'
  },
  {
    id: 'early-dynastic',
    name: 'Early Dynastic Period',
    slug: 'early-dynastic-period',
    dateRange: 'c. 3100–2686 BCE',
    startYear: -3100,
    endYear: -2686,
    description: 'Egypt\'s first unified state under the rule of pharaohs. Established the foundations of pharaonic civilization, including the divine kingship model that would persist for three millennia.',
    characteristics: [
      'Unification of Upper and Lower Egypt under Narmer',
      'Establishment of the First Dynasty',
      'Development of a centralized bureaucracy',
      'Creation of the dual crown symbolism',
      'Hieroglyphic writing system',
      'Mastaba tomb construction'
    ],
    color: '#c3ad7c'
  },
  {
    id: 'old-kingdom',
    name: 'Old Kingdom',
    slug: 'old-kingdom',
    dateRange: 'c. 2686–2181 BCE',
    startYear: -2686,
    endYear: -2181,
    description: 'Age of pyramid building and centralized pharaonic power. The pyramids of Giza were built during this period. Egypt reached unprecedented heights of organizational achievement, resources, and religious authority.',
    characteristics: [
      'Age of pyramid building (Third–Sixth Dynasties)',
      'Construction of the Great Pyramids',
      'Centralization of power and divine kingship',
      'Sophisticated administrative system',
      'Development of the priesthood of Ra',
      'Extensive trade networks'
    ],
    color: '#d7c19a'
  },
  {
    id: 'first-intermediate',
    name: 'First Intermediate Period',
    slug: 'first-intermediate-period',
    dateRange: 'c. 2181–2055 BCE',
    startYear: -2181,
    endYear: -2055,
    description: 'Period of political fragmentation and declining central authority. Local governors (nomarchs) gained power at the expense of pharaonic rule. Cultural and artistic production continued, though on a reduced scale.',
    characteristics: [
      'Decline of pharaonic central authority',
      'Rise of regional governor power',
      'Civil conflict and instability',
      'Development of local artistic traditions',
      'Democratization of afterlife beliefs',
      'Economic disruption and resource strain'
    ],
    color: '#b08a3c'
  },
  {
    id: 'middle-kingdom',
    name: 'Middle Kingdom',
    slug: 'middle-kingdom',
    dateRange: 'c. 2055–1650 BCE',
    startYear: -2055,
    endYear: -1650,
    description: 'Period of restoration, cultural flourishing, and renewed centralized power. Often called the "classical age" of Egyptian civilization. Literature, art, and architecture reached new sophistication.',
    characteristics: [
      'Reunification of Egypt under Amenemhat III',
      'Height of artistic and literary achievement',
      'Development of classical Egyptian literature',
      'Expansion of trade and foreign relations',
      'Sophisticated tomb and temple construction',
      'Development of the Coffin Texts (funerary literature)'
    ],
    color: '#8a6d3f'
  },
  {
    id: 'second-intermediate',
    name: 'Second Intermediate Period',
    slug: 'second-intermediate-period',
    dateRange: 'c. 1650–1550 BCE',
    startYear: -1650,
    endYear: -1550,
    description: 'Period of fragmentation and foreign incursion. The Hyksos, foreign rulers from the Levant, controlled northern Egypt. Marked the transition to the New Kingdom.',
    characteristics: [
      'Invasion and rule of the Hyksos in northern Egypt',
      'Division of Egypt into Hyksos (north) and Theban (south) kingdoms',
      'Introduction of new military technology (horse and chariot)',
      'Cultural interaction and conflict',
      'Economic disruption and regional instability',
      'Rise of Theban power'
    ],
    color: '#96702f'
  },
  {
    id: 'new-kingdom',
    name: 'New Kingdom',
    slug: 'new-kingdom',
    dateRange: 'c. 1550–1070 BCE',
    startYear: -1550,
    endYear: -1070,
    description: 'Egypt\'s imperial age. The most powerful and prosperous period in Egyptian history. The pharaohs were warrior-kings who expanded Egypt\'s empire across the Near East and Nubia. Great temples were built; art and literature flourished.',
    characteristics: [
      'Expulsion of the Hyksos and reunification under Ahmose',
      'Military expansion and imperial power',
      'Greatest territorial extent of Egyptian empire',
      'Age of great pharaohs (Hatshepsut, Thutmose III, Amenhotep III, Akhenaten, Tutankhamun, Ramses II)',
      'Construction of great temples (Karnak, Luxor, Abu Simbel)',
      'Valley of the Kings as royal burial ground',
      'Sophisticated art, literature, and intellectual achievement'
    ],
    color: '#245b67'
  },
  {
    id: 'third-intermediate',
    name: 'Third Intermediate Period',
    slug: 'third-intermediate-period',
    dateRange: 'c. 1070–664 BCE',
    startYear: -1070,
    endYear: -664,
    description: 'Period of declining pharaonic power and increased priestly influence. Egypt was divided between the high priests of Amun in the south and a weaker pharaonic authority in the north.',
    characteristics: [
      'Decline of pharaonic military and political power',
      'Rise of the priesthood of Amun as de facto rulers',
      'Libyan immigration and settlement',
      'Division of Egypt into north (pharaonic) and south (priestly)',
      'Economic strain and resource constraints',
      'Cultural continuity but political fragmentation'
    ],
    color: '#7a5828'
  },
  {
    id: 'late-period',
    name: 'Late Period',
    slug: 'late-period',
    dateRange: 'c. 664–332 BCE',
    startYear: -664,
    endYear: -332,
    description: 'Final period of native Egyptian rule before Alexander the Great\'s conquest. Brief renewal of Egyptian power and cultural achievement under the Saite Dynasty, followed by Persian invasions.',
    characteristics: [
      'Saite Dynasty (664–525 BCE)—cultural and artistic renaissance',
      'Persian conquest and rule (525–332 BCE)',
      'Brief period of independence (404–341 BCE)',
      'Continued Egyptian cultural traditions',
      'Foreign military threats and invasions',
      'Maintenance of Egyptian religious and artistic practices'
    ],
    color: '#654826'
  },
  {
    id: 'ptolemaic',
    name: 'Ptolemaic Period',
    slug: 'ptolemaic-period',
    dateRange: 'c. 332–30 BCE',
    startYear: -332,
    endYear: -30,
    description: 'Greek Macedonian rule following Alexander the Great\'s conquest. The Ptolemaic dynasty established Alexandria as a great intellectual center and maintained Egyptian traditions while introducing Greek culture.',
    characteristics: [
      'Greek-Macedonian conquest under Alexander the Great',
      'Ptolemaic dynasty rule (332–30 BCE)',
      'Foundation of Alexandria and its famous library',
      'Greek-Egyptian cultural fusion',
      'Continued temple construction in Egyptian style',
      'Cleopatra VII and the end of Egyptian independence (30 BCE)'
    ],
    color: '#1b404a'
  },
  {
    id: 'roman',
    name: 'Roman Egypt',
    slug: 'roman-egypt',
    dateRange: 'c. 30 BCE–641 CE',
    startYear: -30,
    endYear: 641,
    description: 'Egypt under Roman rule as a province. The end of pharaonic Egypt and the beginning of Coptic Christian Egypt. Wealthy Roman province supplying grain to the empire.',
    characteristics: [
      'Conquest by Octavian (Augustus)',
      'Egypt becomes Roman province',
      'Adoption of Christianity beginning in 1st century CE',
      'Continued use of hieroglyphic and temple traditions',
      'Blend of Roman, Greek, and Egyptian cultures',
      'End of pharaonic Egypt with the fall of Rome and rise of Islam'
    ],
    color: '#172e35'
  }
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    title: 'Unification of Egypt under Narmer',
    date: 'c. 3100 BCE',
    year: -3100,
    period: 'Early Dynastic Period',
    description: 'Narmer unifies Upper and Lower Egypt, establishing the First Dynasty and the foundations of pharaonic civilization.',
    significance: 'Marks the beginning of Egypt\'s long history as a unified state and the establishment of the pharaonic system of divine kingship.',
    relatedArticles: ['narmer-and-unification', 'rise-of-ancient-egypt']
  },
  {
    id: '2',
    title: 'Construction of the Step Pyramid begins',
    date: 'c. 2670 BCE',
    year: -2670,
    period: 'Old Kingdom',
    description: 'Pharaoh Djoser commissions the Step Pyramid at Saqqara, designed by the brilliant vizier Imhotep.',
    significance: 'The world\'s first monumental stone structure, revolutionizing architecture and establishing Egypt\'s tradition of eternal monuments.',
    relatedArticles: ['djoser-and-step-pyramid', 'how-great-pyramid-was-built']
  },
  {
    id: '3',
    title: 'Construction of the Great Pyramid begins',
    date: 'c. 2589 BCE',
    year: -2589,
    period: 'Old Kingdom',
    description: 'Pharaoh Khufu begins construction of the Great Pyramid at Giza, which will become the sole surviving Wonder of the Ancient World.',
    significance: 'The last surviving Wonder of the Ancient World, representing the pinnacle of Old Kingdom engineering and organizational achievement.',
    relatedArticles: ['how-great-pyramid-was-built', 'khufu-profile']
  },
  {
    id: '4',
    title: 'Beginning of the First Intermediate Period',
    date: 'c. 2181 BCE',
    year: -2181,
    period: 'First Intermediate Period',
    description: 'Decline of pharaonic central authority. Local governors (nomarchs) gain power; Egypt fragments into regional kingdoms.',
    significance: 'Marks a significant shift in Egypt\'s political structure and the end of the Old Kingdom\'s unified power.',
    relatedArticles: []
  },
  {
    id: '5',
    title: 'Reunification of Egypt',
    date: 'c. 2055 BCE',
    year: -2055,
    period: 'Middle Kingdom',
    description: 'Amenemhat I of Thebes reunifies Egypt, ending the First Intermediate Period and beginning the classical Middle Kingdom.',
    significance: 'Restoration of centralized pharaonic authority and the beginning of Egypt\'s classical age of art and literature.',
    relatedArticles: []
  },
  {
    id: '6',
    title: 'Hyksos invasion of northern Egypt',
    date: 'c. 1650 BCE',
    year: -1650,
    period: 'Second Intermediate Period',
    description: 'Foreign rulers from the Levant (Hyksos) invade and establish control over northern Egypt.',
    significance: 'Marks the beginning of the Second Intermediate Period, the introduction of new military technology, and the eventual rise of the New Kingdom.',
    relatedArticles: []
  },
  {
    id: '7',
    title: 'Expulsion of the Hyksos and reunification of Egypt',
    date: 'c. 1550 BCE',
    year: -1550,
    period: 'New Kingdom',
    description: 'Pharaoh Ahmose defeats the Hyksos and reunifies Egypt, establishing the Eighteenth Dynasty and the New Kingdom.',
    significance: 'Marks the beginning of Egypt\'s imperial age and the most powerful period in Egyptian history.',
    relatedArticles: []
  },
  {
    id: '8',
    title: 'Hatshepsut becomes pharaoh',
    date: 'c. 1479 BCE',
    year: -1479,
    period: 'New Kingdom',
    description: 'Hatshepsut, initially regent, declares herself pharaoh and rules Egypt for over 20 years.',
    significance: 'One of Egypt\'s most successful rulers; her reign saw Egypt flourish economically and militarily.',
    relatedArticles: ['hatshepsut-female-pharaoh', 'role-of-women-ancient-egypt']
  },
  {
    id: '9',
    title: 'Hatshepsut\'s expedition to Punt',
    date: 'c. 1470 BCE',
    year: -1470,
    period: 'New Kingdom',
    description: 'Hatshepsut launches a successful trading expedition to the land of Punt, bringing back exotic goods and expanding Egypt\'s international connections.',
    significance: 'Demonstrates Egypt\'s diplomatic and commercial reach; detailed reliefs at Deir el-Bahari provide invaluable information about ancient trade.',
    relatedArticles: ['hatshepsut-female-pharaoh']
  },
  {
    id: '10',
    title: 'Akhenaten\'s religious revolution',
    date: 'c. 1353 BCE',
    year: -1353,
    period: 'New Kingdom',
    description: 'Pharaoh Amenhotep IV changes his name to Akhenaten and establishes worship of the Aten as Egypt\'s supreme god.',
    significance: 'One of history\'s most radical religious experiments; represents a fundamental challenge to Egypt\'s traditional religious structure.',
    relatedArticles: ['akhenaten-amarna-revolution']
  },
  {
    id: '11',
    title: 'Akhenaten founds Amarna',
    date: 'c. 1346 BCE',
    year: -1346,
    period: 'New Kingdom',
    description: 'Akhenaten abandons Thebes and builds a new capital at Akhetaten (modern Amarna), dedicated to the worship of the Aten.',
    significance: 'Creates a unique archaeological site preserving daily life during Egypt\'s most revolutionary period.',
    relatedArticles: ['akhenaten-amarna-revolution']
  },
  {
    id: '12',
    title: 'Tutankhamun becomes pharaoh',
    date: 'c. 1332 BCE',
    year: -1332,
    period: 'New Kingdom',
    description: 'Young Tutankhaten (later Tutankhamun) ascends to the throne as a child and quickly reverses Akhenaten\'s religious revolution.',
    significance: 'Marks the end of the Amarna period and restoration of traditional Egyptian religion and society.',
    relatedArticles: ['tutankhamun-forgotten-kingdom']
  },
  {
    id: '13',
    title: 'Battle of Kadesh',
    date: '1274 BCE',
    year: -1274,
    period: 'New Kingdom',
    description: 'Ramses II leads Egyptian forces against the Hittite Empire at Kadesh, resulting in a stalemate and the world\'s first recorded peace treaty.',
    significance: 'Demonstrates the scale of ancient military campaigns and marks the apex of Egyptian imperial power.',
    relatedArticles: ['ramses-ii-imperial-egypt']
  },
  {
    id: '14',
    title: 'Construction of Abu Simbel temples',
    date: 'c. 1265–1260 BCE',
    year: -1265,
    period: 'New Kingdom',
    description: 'Ramses II carves two temples from the living rock at Abu Simbel, including the Great Temple with four colossal statues.',
    significance: 'One of ancient Egypt\'s most impressive monuments; demonstrates the engineering and artistic achievement of Ramses II\'s reign.',
    relatedArticles: ['ramses-ii-imperial-egypt']
  },
  {
    id: '15',
    title: 'Decline of pharaonic power begins',
    date: 'c. 1070 BCE',
    year: -1070,
    period: 'Third Intermediate Period',
    description: 'End of the New Kingdom. The high priests of Amun gain increasing power; pharaonic authority declines.',
    significance: 'Marks the beginning of Egypt\'s transition from a unified imperial power to a fragmented state divided between priests and pharaohs.',
    relatedArticles: []
  },
  {
    id: '16',
    title: 'Saite Dynasty begins—cultural renaissance',
    date: 'c. 664 BCE',
    year: -664,
    period: 'Late Period',
    description: 'The Saite Dynasty (664–525 BCE) establishes a period of cultural and artistic renewal, often considered a classical age.',
    significance: 'Egypt experiences a final flowering of indigenous culture before the end of native Egyptian rule.',
    relatedArticles: []
  },
  {
    id: '17',
    title: 'Persian conquest of Egypt',
    date: '525 BCE',
    year: -525,
    period: 'Late Period',
    description: 'Persian king Cambyses II conquers Egypt, ending the Saite Dynasty and establishing Persian rule.',
    significance: 'Marks the beginning of foreign rule over Egypt and the end of the Late Period.',
    relatedArticles: []
  },
  {
    id: '18',
    title: 'Alexander the Great conquers Egypt',
    date: '332 BCE',
    year: -332,
    period: 'Ptolemaic Period',
    description: 'Alexander the Great conquers Egypt, ending Persian rule. He is crowned pharaoh at Memphis.',
    significance: 'Marks the beginning of Greek-Macedonian rule in Egypt and the foundation of the Ptolemaic dynasty.',
    relatedArticles: []
  },
  {
    id: '19',
    title: 'Foundation of Alexandria',
    date: 'c. 331–330 BCE',
    year: -331,
    period: 'Ptolemaic Period',
    description: 'Alexander founds the city of Alexandria, which becomes the capital of Ptolemaic Egypt and a center of learning.',
    significance: 'Alexandria becomes one of the ancient world\'s greatest intellectual and cultural centers.',
    relatedArticles: ['ptolemies-and-cleopatra']
  },
  {
    id: '20',
    title: 'Death of Cleopatra VII',
    date: '30 BCE',
    year: -30,
    period: 'Ptolemaic Period',
    description: 'After the defeat of Mark Antony and Cleopatra by Octavian (Augustus) at the Battle of Actium (31 BCE), Cleopatra commits suicide.',
    significance: 'Marks the end of pharaonic Egypt and the beginning of Roman rule. Egypt becomes a province of the Roman Empire.',
    relatedArticles: ['ptolemies-and-cleopatra']
  }
];
