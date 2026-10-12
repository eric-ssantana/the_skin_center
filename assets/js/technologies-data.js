/**
 * TSC - The Skin Center | Cutting-Edge Aesthetic Technology Database
 * Replicated from Lumini Medical Spa & Clinica Nina standards
 */
const technologiesData = [
  {
    id: "sp-dynamis",
    name: "SP Dynamis",
    manufacturer: "Fotona",
    category: {
      en: "MULTI-PROTOCOL LASER",
      pt: "LASER MULTI-PROTOCOLO",
      es: "LÁSER MULTIPROTOCOLO"
    },
    shortDesc: {
      en: "Fotona’s dual-wavelength Er:YAG + Nd:YAG platform behind our signature treatments: Fotona 4D laser facelift, HairLase, LipLase, SmoothEye, NightLase, IntimaLase, vein removal and skin resurfacing.",
      pt: "Plataforma de comprimento de onda duplo Er:YAG + Nd:YAG da Fotona, por trás de tratamentos consagrados como Fotona 4D, HairLase, LipLase, SmoothEye, NightLase, remoção de vasinhos e resurfacing cutâneo.",
      es: "Plataforma de doble longitud de onda Er:YAG + Nd:YAG de Fotona, base de tratamientos exclusivos como Fotona 4D, HairLase, LipLase, SmoothEye, NightLase, eliminación de venas y rejuvenecimiento cutáneo."
    },
    fullDesc: {
      en: "The Fotona SP Dynamis combines Er:YAG (2,940 nm) and Nd:YAG (1,064 nm) laser wavelengths into a single medical workstation. It enables non-surgical 4-dimensional facial lifting via intraoral tightening, fractional collagen stimulation, deep tissue heating, and superficial micro-peels.",
      pt: "O Fotona SP Dynamis combina os comprimentos de onda Er:YAG (2.940 nm) e Nd:YAG (1.064 nm) em uma estação médica completa. Permite lifting facial não-cirúrgico em 4 dimensões com aquecimento intraoral, indução profunda de colágeno e micro-peelings superficiais.",
      es: "El Fotona SP Dynamis combina longitudes de onda Er:YAG (2.940 nm) y Nd:YAG (1.064 nm) en una estación médica de alta precisión. Permite tensado facial 4D no quirúrgico mediante calor intraoral, estimulación profunda de colágeno y micro-peelings."
    },
    image: "assets/images/tech/tech-fotona.jpg",
    wavelengths: "Er:YAG (2940 nm) & Nd:YAG (1064 nm)",
    depth: "Full-thickness dermis down to intraoral SMAS",
    indications: {
      en: "Facial skin laxity, nasolabial folds, lip volume loss, snoring/sleep apnea, vascular lesions.",
      pt: "Flacidez facial, sulcos nasogenianos, perda de volume labial, lesões vasculares e textura irregular.",
      es: "Flacidez facial, surcos nasogenianos, pérdida de volumen labial, lesiones vasculares y textura irregular."
    },
    treatments: "Fotona 4D, LipLase, SmoothEye, HairLase, Spider Vein Removal"
  },
  {
    id: "igniterf",
    name: "IgniteRF by InMode",
    manufacturer: "InMode Aesthetics",
    category: {
      en: "RF + CONTOURING",
      pt: "RADIOFREQUÊNCIA + CONTORNO",
      es: "RADIOFRECUENCIA + CONTORNO"
    },
    shortDesc: {
      en: "The InMode platform powering our Morpheus8 Burst fractional RF microneedling, QuantumRF and the FaceTite, BodyTite and AccuTite RFAL family, with treatment depths from 0.5 to 60 mm with real-time temperature monitoring.",
      pt: "A plataforma InMode que impulsiona o microagulhamento com radiofrequência fracionada Morpheus8 Burst, QuantumRF e a família FaceTite/BodyTite, com profundidades de 0,5 a 60 mm e controle térmico contínuo.",
      es: "La plataforma de InMode que potencia el microneedling fraccionado Morpheus8 Burst, QuantumRF y la línea FaceTite/BodyTite, con profundidades de 0.5 a 60 mm y control térmico en tiempo real."
    },
    fullDesc: {
      en: "IgniteRF is the premier radiofrequency workstation engineered for subdermal adipose remodeling (SARD). Morpheus8 Burst delivers multi-depth energy up to 8 mm deep, remodeling facial contours, tightening skin laxity, and melting focal fat deposits with clinical safety.",
      pt: "O IgniteRF é a estação médica definitiva para remodelamento adiposo subdérmico (SARD). O Morpheus8 Burst deposita energia fracionada em múltiplas profundidades até 8 mm, remodelando contornos faciais e estimulando colágeno com rigor clínico.",
      es: "IgniteRF es la estación médica definitiva para remodelación de tejido adiposo subdérmico. Morpheus8 Burst entrega energía fraccionada en múltiples profundidades hasta 8 mm, redefiniendo contornos y tensando la piel con seguridad clínica."
    },
    image: "assets/images/tech/tech-igniterf.jpg",
    wavelengths: "Fractional Bipolar & Subdermal RF (1 MHz)",
    depth: "0.5 mm to 8 mm (Morpheus8) / up to 60 mm (RFAL)",
    indications: {
      en: "Jowls, submental fullness, jawline definition, acne scarring, body skin laxity.",
      pt: "Papada, perda de contorno mandibular, cicatrizes de acne, flacidez corporal e pescoço.",
      es: "Papada, pérdida de contorno mandibular, cicatrices de acné, flacidez corporal y cuello."
    },
    treatments: "Morpheus8 Face, Morpheus8 Body, QuantumRF, FaceTite"
  },
  {
    id: "lavieen",
    name: "Lavieen",
    manufacturer: "Wontech Medical",
    category: {
      en: "TONE + TEXTURE",
      pt: "TONALIDADE + TEXTURA",
      es: "TONALIDAD + TEXTURA"
    },
    shortDesc: {
      en: "Thulium fractional 'BB laser' that resurfaces at the ideal superficial depth for glass skin, fading pigment and melasma, shrinking pores and smoothing texture with minimal downtime.",
      pt: "Laser de Túlio Fracionado 1927 nm ('BB Laser') que atua na profundidade ideal para o efeito glass skin, clareando manchas e melasma, reduzindo poros e refinando a textura com recuperação mínima.",
      es: "Láser de Tulio Fraccionado 1927 nm ('BB Laser') que renueva la superficie cutánea para un efecto piel de porcelana, atenuando manchas y melasma, cerrando poros y alisando la textura."
    },
    fullDesc: {
      en: "Lavieen utilizes a 1927 nm sub-ablative Thulium wavelength with high water absorption, creating micro-thermal zones in the basal epidermal layer where melanin deposits reside. It creates the iconic 'BB cream effect' without destroying the protective stratum corneum.",
      pt: "O Lavieen opera no comprimento de onda de 1927 nm com alta afinidade pela água da pele, atingindo com precisão a camada basal onde se concentram melanina e manchas. Proporciona o cobiçado efeito 'BB cream' com regeneração celular acelerada.",
      es: "Lavieen utiliza una longitud de onda de 1927 nm con alta absorción de agua, actuando con precisión sobre la capa basal de la epidermis donde se ubica el pigmento. Logra el efecto 'BB cream' con rápida regeneración cutánea."
    },
    image: "assets/images/tech/tech-lavieen.jpg",
    wavelengths: "Sub-ablative Thulium (1927 nm)",
    depth: "Superficial to mid-epidermal (100 - 300 µm)",
    indications: {
      en: "Melasma, sun spots, enlarged pores, dull skin, fine textural lines, uneven tone.",
      pt: "Melasma, manchas solares, poros dilatados, opacidade da pele, linhas finas e viço.",
      es: "Melasma, manchas solares, poros dilatados, piel opaca, líneas finas y luminosidad."
    },
    treatments: "Lavieen BB Glow, Melasma Clarifying Laser, Pore Refinement"
  },
  {
    id: "picocare",
    name: "PicoCare Majesty",
    manufacturer: "Wontech Global",
    category: {
      en: "ULTRA-FAST PICOPULSE",
      pt: "PICOSEGUNDO ULTRA-RÁPIDO",
      es: "PICOSEGUNDO ULTRA-RÁPIDO"
    },
    shortDesc: {
      en: "250-picosecond pulses and four wavelengths for pigment, tattoos, scars and pores, shattering melanin particles through photoacoustic shockwaves with minimal thermal injury.",
      pt: "Pulsos ultracurtos de 250 picossegundos e quatro comprimentos de onda para pigmentos, tatuagens, cicatrizes e poros, fragmentando a melanina por impacto fotoacústico sem calor excessivo.",
      es: "Pulsos ultracortos de 250 picosegundos y cuatro longitudes de onda para pigmentos, tatuajes, cicatrices y poros, fragmentando la melanina por impacto fotoacústico sin daño térmico."
    },
    fullDesc: {
      en: "PicoCare Majesty is the shortest pulse-duration aesthetic picosecond platform (250 ps), providing supreme photoacoustic impact that shatters recalcitrant pigment into dust-like micro-particles easily cleared by the immune system.",
      pt: "O PicoCare Majesty entrega a menor duração de pulso da dermatologia mundial (250 ps). Sua onda de choque fotoacústica pulveriza pigmentos resistentes em micropartículas eliminadas naturalmente pelo organismo.",
      es: "PicoCare Majesty ofrece la duración de pulso más corta de la dermatología estética (250 ps). Su onda de choque fotoacústica pulveriza pigmentos rebeldes en micropartículas eliminadas por el sistema linfático."
    },
    image: "assets/images/tech/tech-picocare.jpg",
    wavelengths: "1064 nm, 532 nm, 595 nm & 660 nm (250 ps)",
    depth: "Epidermal to deep dermal pigment targets",
    indications: {
      en: "Recalcitrant melasma, tattoo removal, dark scars, hyperpigmentation, collagen renewal.",
      pt: "Melasma resistente, remoção de micropigmentação e tatuagens, hipercromias pós-inflamatórias.",
      es: "Melasma resistente, eliminación de micropigmentación y tatuajes, manchas oscuras y cicatrices."
    },
    treatments: "Pico Toning, Tattoo & Microblading Removal, Acne Scar Revision"
  },
  {
    id: "triton",
    name: "Triton by InMode",
    manufacturer: "InMode Aesthetics",
    category: {
      en: "LASER HAIR REMOVAL",
      pt: "DEPILAÇÃO A LASER AVANÇADA",
      es: "DEPILACIÓN LÁSER AVANZADA"
    },
    shortDesc: {
      en: "Multi-wavelength Fusion Technology that blends the three most effective hair-removal wavelengths in a single platform, safe for all skin types up to VI, with greater results in fewer sessions.",
      pt: "Tecnologia de fusão multi-comprimento de onda que combina os três maiores lasers de depilação em uma única plataforma, segura para todos os tons de pele (I a VI) em menos sessões.",
      es: "Tecnología de fusión multi-longitud de onda que combina los tres láseres de depilación más eficaces en una sola plataforma, segura para todos los fototipos (I a VI) en menos sesiones."
    },
    fullDesc: {
      en: "Triton delivers simultaneous emission of Alexandrite (755 nm), Diode (810 nm), and Nd:YAG (1064 nm). It targets hair follicles across different hair growth cycles and depths concurrently, providing pain-free cooling and superior long-term reduction.",
      pt: "O Triton emite simultaneamente Alexandrita (755 nm), Diodo (810 nm) e Nd:YAG (1064 nm). Atinge folículos em diferentes estágios de crescimento e profundidades de forma simultânea, com resfriamento de safira indolor.",
      es: "Triton emite simultáneamente Alexandrita (755 nm), Diodo (810 nm) y Nd:YAG (1064 nm). Actúa en folículos a diferentes profundidades y etapas de crecimiento simultáneamente, con enfriamiento por zafiro indoloro."
    },
    image: "assets/images/tech/tech-triton.jpg",
    wavelengths: "Alexandrite 755 nm + Diode 810 nm + Nd:YAG 1064 nm",
    depth: "Follicular bulb down to 4.5 mm",
    indications: {
      en: "Unwanted facial and body hair, ingrown hairs, folliculitis, all Fitzpatrick skin types I–VI.",
      pt: "Pelos indesejados faciais e corporais, foliculite, pelos encravados, todos os fototipos I a VI.",
      es: "Vello no deseado facial y corporal, foliculitis, vellos encarnados, todos los fototipos I a VI."
    },
    treatments: "Triton Permanent Hair Reduction, Folliculitis Protocol"
  },
  {
    id: "aura-3d",
    name: "Aura 3D",
    manufacturer: "Swiss Medical Innovations",
    category: {
      en: "3D FACIAL SCAN & DIAGNOSIS",
      pt: "SCANNER FACIAL 3D & DIAGNÓSTICO",
      es: "ESCÁNER FACIAL 3D & DIAGNÓSTICO"
    },
    shortDesc: {
      en: "Swiss-made 3D imaging that captures a photo-realistic digital twin of your face and neck in a single scan: precise measurements, skin analysis and treatment-outcome simulations.",
      pt: "Scanner óptico 3D suíço que captura um gêmeo digital fotorrealista da face e pescoço em um segundo: medições volumétricas precisas, análise dérmica profunda e simulação de resultados.",
      es: "Escáner óptico 3D suizo que captura un gemelo digital fotorrealista de rostro y cuello en un segundo: mediciones volumétricas exactas, análisis dérmico y simulación de resultados."
    },
    fullDesc: {
      en: "Aura 3D provides high-definition spatial topography, sub-surface vascular visualization, and porcine-grade volumetric loss mapping. Patients can visualize their bespoke harmonization roadmap and simulate treatment results side-by-side with their physician.",
      pt: "O Aura 3D oferece topografia espacial em altíssima definição, visualização vascular e mapeamento preciso de perda de volume. Permite ao paciente visualizar seu plano de harmonização e simular os resultados antes de iniciar o tratamento.",
      es: "Aura 3D ofrece topografía espacial de alta definición, visualización vascular y mapeo preciso de pérdida de volumen. Permite visualizar el plan de armonización y simular los resultados antes de iniciar."
    },
    image: "assets/images/tech/tech-aura3d.jpg",
    wavelengths: "Multi-spectrum stereoscopic optical mapping",
    depth: "Epidermal surface to subcutaneous adipose volume",
    indications: {
      en: "Pre-procedure anatomical mapping, volume loss tracking, vascular & melanin analysis, 3D simulation.",
      pt: "Mapeamento anatômico pré-procedimento, acompanhamento de volume facial e análise dérmica 3D.",
      es: "Mapeo anatómico previo al tratamiento, seguimiento de volumen y análisis dérmico 3D."
    },
    treatments: "Aura 3D Diagnostic Mapping, Virtual Treatment Simulation"
  }
];
