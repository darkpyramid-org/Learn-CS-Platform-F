import { ArchaeologicalSite } from '../models/site.model';

export const archaeologicalSites: ArchaeologicalSite[] = [
  {
    id: '1',
    slug: 'giza',
    name: 'Giza',
    location: 'Giza Governorate, Egypt (20 km southwest of Cairo)',
    period: 'Old Kingdom (primarily Fourth Dynasty, c. 2589–2500 BCE)',
    historicalImportance: 'Home to the Great Pyramid of Khufu, the sole surviving Wonder of the Ancient World, and the enigmatic Great Sphinx. Giza represents the pinnacle of Old Kingdom architectural achievement and Egypt\'s power at its height.',
    description: `The Giza Plateau is one of the world's most iconic archaeological sites, containing three great pyramids (Khufu, Khafre, and Menkaure) and the Great Sphinx. Built by the pharaohs of the Fourth Dynasty, these monuments have dominated the Egyptian landscape for nearly 4,600 years. The precision of their construction, the scale of the engineering, and the mysteries surrounding their building methods continue to captivate scholars and visitors alike. Giza was not merely a necropolis but a complete complex, including temples, causeways, worker villages, and support facilities.`,
    majorDiscoveries: [
      'The Great Pyramid of Khufu (Khufu Pyramid)',
      'The Pyramid of Khafre with intact casing stones',
      'The Pyramid of Menkaure',
      'The Great Sphinx (carved from living rock)',
      'Valley temples and causeway systems',
      'Workers\' villages and bakeries',
      'Boat pits (ceremonial boats for the afterlife)',
      'Subsidiary pyramids and queens\' pyramids'
    ],
    monuments: [
      'Great Pyramid of Khufu (146.6 m original height)',
      'Pyramid of Khafre (143.5 m original height)',
      'Pyramid of Menkaure (65.5 m original height)',
      'The Great Sphinx (73 m long, 20 m high)',
      'Valley temples',
      'Mortuary temples',
      'Causeways connecting temples'
    ],
    timeline: 'Built primarily c. 2589–2500 BCE (Fourth Dynasty). Continuously investigated and excavated from the 18th century CE to present.',
    relatedArticles: [
      'how-great-pyramid-was-built',
      'djoser-and-step-pyramid'
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800',
        alt: 'The Great Pyramid of Giza with blue sky',
        caption: 'The Great Pyramid of Khufu—the last surviving Wonder of the Ancient World'
      },
      {
        url: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800',
        alt: 'The Sphinx with pyramids in the background',
        caption: 'The Great Sphinx of Giza, carved from living limestone'
      }
    ]
  },
  {
    id: '2',
    slug: 'saqqara',
    name: 'Saqqara',
    location: 'Giza Governorate, Egypt (20 km southwest of Cairo)',
    period: 'Multiple periods: Third Dynasty onwards (c. 2670 BCE – Roman Period)',
    historicalImportance: 'Site of the Step Pyramid, the world\'s first monumental stone structure, commissioned by Djoser. Saqqara contains hundreds of mastabas, temples, and monuments spanning over 2,500 years of Egyptian history.',
    description: `Saqqara served as the necropolis for Memphis, Egypt's ancient capital, and covers an area of over 7 square kilometers. The site contains monuments spanning from the Third Dynasty through the Roman Period, making it one of the richest archaeological sites in Egypt. The Step Pyramid of Djoser, designed by the vizier Imhotep, stands as the world's oldest monumental stone building. Beyond the famous pyramid, Saqqara contains thousands of mastabas (flat-roofed tombs) belonging to nobles and officials, many decorated with reliefs and hieroglyphic inscriptions that provide invaluable information about daily life, administration, and religious beliefs in ancient Egypt.`,
    majorDiscoveries: [
      'Step Pyramid of Djoser (world\'s first monumental stone structure)',
      'Pyramid Complex of Unas with Pyramid Texts',
      'Pyramid Complex of Pepi I and Pepi II',
      'Thousands of mastabas of nobles and officials',
      'Tomb of Ti with exceptional relief decoration',
      'Tomb of Kagemni with scenes of daily life',
      'Pyramid Texts and mortuary inscriptions',
      'Statues and artistic works'
    ],
    monuments: [
      'Step Pyramid Complex of Djoser',
      'Mortuary temple of Djoser',
      'Pyramid of Unas with Pyramid Texts',
      'Pyramids of Pepi I and Pepi II',
      'Mastaba of Ti',
      'Mastaba of Kagemni',
      'Causeway and valley temples'
    ],
    timeline: 'Primary construction c. 2670–2180 BCE (Third–Sixth Dynasties). Continued use through Ptolemaic and Roman periods. Excavated extensively from 19th century to present.',
    relatedArticles: [
      'djoser-and-step-pyramid',
      'egyptian-mummification'
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1590133324192-1df305deeefc?w=800',
        alt: 'Step Pyramid of Djoser at Saqqara',
        caption: 'The Step Pyramid of Djoser—the world\'s first monumental stone building'
      }
    ]
  },
  {
    id: '3',
    slug: 'valley-of-the-kings',
    name: 'Valley of the Kings',
    location: 'West Bank of Thebes (Luxor), Upper Egypt',
    period: 'New Kingdom (primarily Eighteenth–Twentieth Dynasties, c. 1550–1070 BCE)',
    historicalImportance: 'Royal necropolis where Egyptian pharaohs of the New Kingdom were buried in rock-cut tombs. Over 60 known tombs, including that of Tutankhamun. Contains some of the finest artistic and religious texts in Egyptian history.',
    description: `Hidden in a remote valley on the west bank of the Nile near Thebes, the Valley of the Kings served as the burial ground for Egypt's greatest rulers for nearly 500 years. The site contains over 60 rock-cut tombs, from the modest to the magnificent, decorated with scenes from the Book of the Dead and other funerary texts. The tombs follow a general plan: a descending corridor leading to burial chambers where the pharaoh's mummy was placed alongside grave goods meant to sustain them in the afterlife. Though nearly all tombs were robbed in antiquity, they remain invaluable sources of information about royal funerary practices, religious beliefs, and artistic traditions.`,
    majorDiscoveries: [
      'Tomb of Tutankhamun (KV62) – nearly intact with over 5,000 objects',
      'Tomb of Seti I (KV17) – elaborate decoration and religious texts',
      'Tomb of Ramses VI (KV9) – astronomical ceiling decorations',
      'Cache of royal mummies (moved by priests of the Twenty-First Dynasty)',
      'Royal tomb inscriptions and religious texts',
      'Funerary equipment and artistic works',
      'Evidence of ancient tomb robberies and administrative records'
    ],
    monuments: [
      'Tomb of Tutankhamun',
      'Tomb of Seti I',
      'Tomb of Ramses VI',
      'Tomb of Thutmose III',
      'Tomb of Amenhotep III',
      'Tomb of Ramses II',
      'Over 60 documented tombs total'
    ],
    timeline: 'Primary use c. 1550–1070 BCE (Eighteenth–Twentieth Dynasties). Robbed primarily c. 1150–900 BCE. Excavated extensively from 19th century to present. Most famous discovery: Tutankhamun (1922).',
    relatedArticles: [
      'tutankhamun-forgotten-kingdom',
      'discovery-of-tutankhamuns-tomb',
      'egyptian-mummification',
      'valley-of-the-kings'
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800',
        alt: 'Entrance to a tomb in the Valley of the Kings',
        caption: 'Valley of the Kings—burial place of pharaohs for 500 years'
      }
    ]
  },
  {
    id: '4',
    slug: 'karnak',
    name: 'Karnak',
    location: 'East Bank of the Nile, Thebes (Luxor), Upper Egypt',
    period: 'New Kingdom and later periods (c. 1550 BCE – Roman Period)',
    historicalImportance: 'Largest temple complex in ancient Egypt, dedicated primarily to the god Amun. Continuously expanded over 1,300 years. Contains the Great Hypostyle Hall, one of the most impressive architectural achievements of the ancient world.',
    description: `Karnak temple complex sprawls across 100 acres and contains multiple temples, halls, pylons, and sacred lakes. The Great Hypostyle Hall alone covers 5,000 square meters and contains 134 massive columns arranged in 16 rows. The entire complex was built over more than 1,300 years by successive pharaohs, each adding their own monuments and inscriptions. Karnak was not only a religious center but also an economic powerhouse—the temple owned vast estates, employed thousands, and functioned as a bank and administrative center. The walls are covered with hieroglyphic inscriptions and reliefs depicting religious ceremonies, military campaigns, and royal events.`,
    majorDiscoveries: [
      'Great Hypostyle Hall of Seti I and Ramses II (134 columns)',
      'Pylon system dating to multiple dynasties',
      'Sacred Lake and purification facilities',
      'Statues and religious inscriptions',
      'Records of religious festivals and ceremonies',
      'Evidence of administrative and economic operations',
      'Later Ptolemaic and Roman additions'
    ],
    monuments: [
      'Great Hypostyle Hall',
      'Pylon I and Pylon II (entrance pylons)',
      'Sanctuaries of Amun-Ra',
      'Temple of Amun',
      'Sacred Lake',
      'Obelisks of Hatshepsut and Thutmose I',
      'Temple of Montu (north side)',
      'Temple of Mut (south side)',
      'Various chapels and smaller temples'
    ],
    timeline: 'Primary construction c. 1550–1070 BCE (New Kingdom). Continued additions through Ptolemaic and Roman periods. Partially destroyed in antiquity; excavated and restored from 19th century to present.',
    relatedArticles: [
      'egyptian-temples-architecture',
      'ramses-ii-imperial-egypt'
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800',
        alt: 'Hypostyle Hall at Karnak Temple with massive columns',
        caption: 'Great Hypostyle Hall at Karnak—134 columns representing the papyrus marsh of creation'
      }
    ]
  },
  {
    id: '5',
    slug: 'luxor',
    name: 'Luxor (Thebes)',
    location: 'East and West Banks of the Nile, Upper Egypt',
    period: 'New Kingdom and later periods (c. 1400 BCE – Roman Period)',
    historicalImportance: 'Site of ancient Thebes, Egypt\'s capital during the New Kingdom and a major religious center. Contains the Temple of Luxor and the Valley of the Kings, making it one of the richest archaeological zones in Egypt.',
    description: `Thebes (modern Luxor) was Egypt's greatest city during the New Kingdom, serving as the political and religious capital. The city was divided between the east bank (site of temples and administrative buildings) and the west bank (site of the Valley of the Kings and mortuary temples). The Temple of Luxor, dedicated to Amun-Ra, stands as one of the most beautiful temples in Egypt with its colossal statues and ornate reliefs. The site continued to be important through the Greco-Roman period and remains one of the most visited archaeological sites in the world.`,
    majorDiscoveries: [
      'Temple of Luxor with colossal statues and obelisk',
      'Avenue of Sphinxes connecting Luxor and Karnak temples',
      'Mortuary temples of New Kingdom pharaohs',
      'Valley of the Kings with 60+ royal tombs',
      'Administrative buildings and residences',
      'Royal statues and religious artwork',
      'Hieroglyphic inscriptions documenting religious and military events'
    ],
    monuments: [
      'Temple of Luxor',
      'Avenue of Sphinxes',
      'Ramesseum (mortuary temple of Ramses II)',
      'Mortuary temple of Hatshepsut at Deir el-Bahari',
      'Valley of the Kings',
      'Valley of the Queens',
      'Worker villages'
    ],
    timeline: 'Primary development c. 1550–1070 BCE (New Kingdom). Continued importance through Ptolemaic and Roman periods. Major excavations and restorations from 19th century to present.',
    relatedArticles: [
      'valley-of-the-kings',
      'egyptian-temples-architecture'
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800',
        alt: 'Temple of Luxor with colossal statues',
        caption: 'Temple of Luxor with its famous colossal statues of Ramses II'
      }
    ]
  },
  {
    id: '6',
    slug: 'abu-simbel',
    name: 'Abu Simbel',
    location: 'Southern Nubia, near the border with Sudan, southern Upper Egypt',
    period: 'New Kingdom (Nineteenth Dynasty, c. 1279–1213 BCE)',
    historicalImportance: 'Two temples carved into the cliff face by Ramses II. The Great Temple is one of the most impressive monuments of ancient Egypt. Famous for its four colossal statues of Ramses II and the solar alignment phenomenon on his birthday.',
    description: `Abu Simbel consists of two temples carved from the living rock by Ramses II: the Great Temple dedicated to Ramses II, Ptah, Amun-Ra, and Ra-Horakhty; and the Small Temple dedicated to Hathor and Nefertari (Ramses II's principal wife). The Great Temple features four colossal statues of Ramses II, each 67 feet (20 meters) high, guarding the entrance. Inside, the walls are covered with reliefs depicting military campaigns, religious ceremonies, and divine beings. The site is famous for the solar alignment phenomenon: twice a year (February 21 and October 21), the sun's rays penetrate deep into the inner sanctuary, illuminating the sacred statues.`,
    majorDiscoveries: [
      'Great Temple with four colossal statues of Ramses II',
      'Small Temple with statues of Hathor and Nefertari',
      'Interior reliefs depicting military and religious scenes',
      'Hieroglyphic inscriptions',
      'Solar alignment phenomenon',
      'Evidence of ancient quarrying techniques'
    ],
    monuments: [
      'Great Temple of Abu Simbel (temple dedicated to Ra-Horakhty)',
      'Small Temple of Abu Simbel (temple dedicated to Hathor and Nefertari)',
      'Four colossal statues of Ramses II (67 feet each)',
      'Interior sanctuary with solar alignment'
    ],
    timeline: 'Carved by Ramses II c. 1265–1260 BCE. Abandoned and buried by sandstorms around 1100 BCE. Rediscovered in 1813. Relocated in 1968 to prevent flooding from Lake Nasser dam.',
    relatedArticles: [
      'ramses-ii-imperial-egypt'
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800',
        alt: 'Abu Simbel temples with colossal statues carved into cliff',
        caption: 'Abu Simbel—Great Temple with colossal statues of Ramses II'
      }
    ]
  },
  {
    id: '7',
    slug: 'abydos',
    name: 'Abydos',
    location: 'Upper Egypt, west bank of the Nile',
    period: 'Old Kingdom through Ptolemaic Period (c. 3000 BCE – Ptolemaic Period)',
    historicalImportance: 'Sacred city dedicated to Osiris, god of the afterlife. Contains temples and tombs of many pharaohs, including one of Egypt\'s oldest king lists. Home to the temple of Seti I with its famous Abydos King List.',
    description: `Abydos was one of ancient Egypt's most sacred sites, dedicated primarily to Osiris and associated with the afterlife and resurrection. Thousands of pilgrims traveled to Abydos seeking connection with Osiris. The temple of Seti I contains one of the most important historical documents in Egypt: the Abydos King List, a chronological record of 76 pharaohs. The temple also contains exquisite relief carving depicting religious ceremonies and royal rituals. Abydos contains numerous tombs and monuments spanning over 3,000 years, making it an invaluable source of information about Egyptian funerary practices and religious beliefs.`,
    majorDiscoveries: [
      'Temple of Seti I with Abydos King List',
      'Mortuary temple of Ramses II',
      'Cemetery with royal tombs of Early Dynastic Period',
      'Cenotaph structures (symbolic tombs)',
      'Hieroglyphic inscriptions recording king lists',
      'Religious texts and rituals',
      'Statues and religious artwork'
    ],
    monuments: [
      'Temple of Seti I',
      'Mortuary temple of Ramses II',
      'Osireion (sacred structure)',
      'Royal tomb cemetery',
      'Cenotaph structures',
      'Sacred pool and purification facilities'
    ],
    timeline: 'Sacred site from c. 3000 BCE onwards. Major temples built c. 1290–1279 BCE (Seti I) and c. 1279–1213 BCE (Ramses II). Continued importance through Ptolemaic period.',
    relatedArticles: [
      'osiris-and-afterlife',
      'egyptian-temples-architecture'
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800',
        alt: 'Temple of Seti I at Abydos',
        caption: 'Temple of Seti I—site of the famous Abydos King List'
      }
    ]
  },
  {
    id: '8',
    slug: 'amarna',
    name: 'Amarna (Akhetaten)',
    location: 'Middle Egypt, east bank of the Nile',
    period: 'New Kingdom (Eighteenth Dynasty, c. 1346–1332 BCE)',
    historicalImportance: 'Capital city founded by Akhenaten during his religious revolution. Abandoned after his death. Provides unique snapshot of life during Egypt\'s most radical period of religious and artistic change.',
    description: `Akhenaten founded the city of Akhetaten (modern Amarna) as a new capital dedicated to the worship of the Aten—a revolutionary religious concept in ancient Egypt. The city was inhabited for only about 15 years before being abandoned after Akhenaten\'s death. Unlike most Egyptian cities, Amarna has been continuously excavated since the late 19th century, providing an exceptionally well-preserved record of daily life. The city contains royal palaces, administrative buildings, temples, and residential areas. The artistic style of Amarna is distinctly different from traditional Egyptian art—more naturalistic and intimate, depicting royal family members in human situations rather than formal ceremonial poses.`,
    majorDiscoveries: [
      'Royal palaces and administrative buildings',
      'Temple of the Aten',
      'Residential areas with remains of homes',
      'Sculpture workshop with artistic works',
      'The famous bust of Nefertiti',
      'Hieroglyphic inscriptions and papyri',
      'Pottery and domestic artifacts',
      'Boundary stelae marking city limits'
    ],
    monuments: [
      'Great Temple of the Aten',
      'Small Temple of the Aten',
      'Royal Palace complex',
      'Administrative building',
      'Residential neighborhoods',
      'Boundary stelae'
    ],
    timeline: 'Founded c. 1346 BCE. Inhabited c. 1346–1332 BCE. Abandoned after Akhenaten\'s death. Continuously excavated from 1891 to present.',
    relatedArticles: [
      'akhenaten-amarna-revolution',
      'tutankhamun-forgotten-kingdom'
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1562779830-2403d77b5bc5?w=800',
        alt: 'Archaeological remains at Amarna',
        caption: 'Amarna—the city founded by Akhenaten for his religious revolution'
      }
    ]
  }
];
