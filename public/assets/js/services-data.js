/**
 * TSC - The Skin Center | Complete Services & Procedures Catalog
 * Detailed in 3 languages (EN, PT, ES) with clinical parameters
 */

const servicesData = [
  // ================= 1. ROSTRO / FACE / ROSTO =================
  {
    id: "rostro-limpieza",
    category: "rostro",
    categoryLabel: { en: "Face & Skin", pt: "Rosto e Pele", es: "Rostro" },
    icon: "sparkles",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    title: {
      en: "Deep Skin Health & Clinical Cleansing",
      pt: "Limpeza Profunda e Saúde da Pele",
      es: "Limpieza y Salud de la Piel"
    },
    shortDesc: {
      en: "Medical-grade extraction, ultrasonic exfoliation, and custom botanical infusion to restore cellular oxygenation and pore clarity.",
      pt: "Extração clínica dermatológica, esfoliação ultrassônica e infusão de ativos calmantes para desobstrução e viço imediato.",
      es: "Extracción médica dermatológica, exfoliación ultrasónica e infusión de principios activos para desobstrucción y luminosidad inmediata."
    },
    fullDesc: {
      en: "A comprehensive multi-phase medical facial tailored to your current skin barrier condition. Utilizing gentle ultrasonic peeling, manual and vortex extractions, followed by lymphatic stimulation and therapeutic LED light therapy. Refines texture, balances sebum, and provides an instantly healthy, luminous glow without post-treatment irritation.",
      pt: "Tratamento facial médico completo desenvolvido para restaurar o equilíbrio do manto hidrolipídico. Combina peeling ultrassônico, extração atraumática minuciosa, drenagem facial e fotobiomodulação com LED. Proporciona poros desobstruídos, controle da oleosidade e viço saudável duradouro.",
      es: "Tratamiento facial clínico completo diseñado para restablecer la barrera dérmica. Integra peeling ultrasónico, extracción atraumática meticulosa, drenaje linfático facial y fototerapia LED. Descongestiona los poros, regula el sebo y devuelve un resplandor saludable y fresco."
    },
    duration: "60 - 75 min",
    downtime: { en: "None (zero recovery)", pt: "Nenhum (retorno imediato)", es: "Ninguno (recuperación inmediata)" },
    sessions: { en: "Every 4 to 6 weeks", pt: "A cada 4 a 6 semanas", es: "Cada 4 a 6 semanas" },
    idealFor: {
      en: "Congested pores, dull complexion, uneven surface, preparatory step for injectables.",
      pt: "Poros dilatados, pele opaca, excesso de oleosidade e preparação para outros procedimentos.",
      es: "Poros obstruidos, piel apagada, exceso de sebo y como paso previo a otros procedimientos."
    }
  },
  {
    id: "rostro-manchas",
    category: "rostro",
    categoryLabel: { en: "Face & Skin", pt: "Rosto e Pele", es: "Rostro" },
    icon: "sun",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    title: {
      en: "Pigment Correction & Tone Harmonization",
      pt: "Tratamento de Manchas e Tom da Pele",
      es: "Manchas y Tono"
    },
    shortDesc: {
      en: "Targeted medical peels, picosecond lasers, and melanin inhibitors designed for melasma, sun damage, and post-inflammatory dark spots.",
      pt: "Peelings químicos médicos, lasers de picossegundos e inibidores de tirosinase para melasma, lentigos solares e hiperpigmentação.",
      es: "Peelings médicos, láser de picosegundos e inhibidores de melanina para melasma, daño solar y manchas postinflamatorias."
    },
    fullDesc: {
      en: "Hyperpigmentation requires targeted, gentle treatment to avoid rebound effects. Our physician-formulated pigmentation protocol alternates medical grade chemical peels with gentle fractional phototherapy and medical tyrosinase inhibitors, safely degrading melanin clusters while preserving surrounding melanocyte integrity.",
      pt: "O clareamento de manchas exige controle biológico rigoroso para evitar efeito rebote. Nosso protocolo médico combina lasers atérmicos, peelings magistrais e bloqueadores enzimáticos da melanina, uniformizando o tom de maneira progressiva, segura e duradoura.",
      es: "El control del pigmento requiere máxima precisión para evitar efectos rebote. Nuestro protocolo médico combina láseres atérmicos, exfoliaciones químicas magistrales y activos despigmentantes avanzados para emparejar el tono de forma progresiva y segura."
    },
    duration: "45 min",
    downtime: { en: "1 - 3 days mild flaking", pt: "1 - 3 dias de leve descamação", es: "1 - 3 días de leve descamación" },
    sessions: { en: "3 to 5 sessions", pt: "3 a 5 sessões recomendadas", es: "3 a 5 sesiones recomendadas" },
    idealFor: {
      en: "Melasma, age spots, freckles, hormonal pigmentation, sun-damaged skin.",
      pt: "Melasma, manchas solares, hiperpigmentação pós-acne e fotoenvelhecimento.",
      es: "Melasma, léntigos solares, manchas post-acné y fotoenvejecimiento."
    }
  },
  {
    id: "rostro-textura",
    category: "rostro",
    categoryLabel: { en: "Face & Skin", pt: "Rosto e Pele", es: "Rostro" },
    icon: "layers",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    title: {
      en: "Skin Texture & Scar Refinement",
      pt: "Textura Dérmica e Cicatrizes",
      es: "Textura y Cicatrices"
    },
    shortDesc: {
      en: "Fractional micro-resurfacing and medical collagen induction therapy to smooth acne scars, enlarged pores, and fine surface irregularities.",
      pt: "Microagulhamento médico de precisão e resurfacing fracionado para alisar cicatrizes de acne, poros dilatados e irregularidades.",
      es: "Microagujas médicas de alta precisión y resurfacing fraccionado para alisar cicatrices de acné, poros y relieves irregulares."
    },
    fullDesc: {
      en: "Engineered to rebuild the dermal extracellular matrix from within. By stimulating fibroblasts and neocollagenesis at precise microscopic depths, this protocol breaks down fibrotic scar tissue and restores silky, glass-like smoothness across the cheeks, temples, and perioral areas.",
      pt: "Criado para regenerar a matriz dérmica de forma profunda. Através de microinjeções controladas de bioativos e estímulo de colágeno novo, desorganiza as traves fibróticas das cicatrizes de acne e devolve à pele uma textura lisa, uniforme e aveludada.",
      es: "Diseñado para reestructurar la matriz extracelular de la dermis. Estimula la formación de colágeno nuevo y elastina para desvanecer marcas de acné, cerrar poros dilatados y devolver una textura suave y sedosa al rostro."
    },
    duration: "60 min",
    downtime: { en: "24 - 48 hours mild erythema", pt: "24 a 48h de leve vermelhidão", es: "24 a 48h de leve enrojecimiento" },
    sessions: { en: "3 to 4 sessions", pt: "3 a 4 sessões", es: "3 a 4 sesiones" },
    idealFor: {
      en: "Acne scarring, rough texture, crepey skin, enlarged pores.",
      pt: "Cicatrizes de acne, textura áspera, poros abertos e linhas finas superficiais.",
      es: "Cicatrices de acné, textura áspera, poros dilatados y líneas de expresión."
    }
  },
  {
    id: "rostro-firmeza",
    category: "rostro",
    categoryLabel: { en: "Face & Skin", pt: "Rosto e Pele", es: "Rostro" },
    icon: "shield",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    title: {
      en: "Facial Firmness & Vector Contour",
      pt: "Firmeza Facial e Definição de Contorno",
      es: "Firmeza y Contorno"
    },
    shortDesc: {
      en: "Non-surgical tightening, SMAS remodeling, and ultrasound lifting to sharpen jawline angles, lift the midface, and firm the neck.",
      pt: "Efeito tensor não-cirúrgico, ancoragem do SMAS e estímulo dérmico para redesenhar a mandíbula, maçãs do rosto e pescoço.",
      es: "Tensado no quirúrgico, remodelado del plano SMAS y estimulación dérmica para redefinir mandíbula, pómulos y cuello."
    },
    fullDesc: {
      en: "Delivers focalized deep thermal energy directly to the structural muscular aponeurotic system (SMAS) and deep dermis. Triggers immediate tissue contraction and continuous long-term tightening over 90 days, defining the jawline, reducing jowling, and elevating drooping contours naturally.",
      pt: "Atua nas camadas profundas de sustentação facial (sistema aponeurótico SMAS) induzindo contração imediata das fibras colágenas e firmeza progressiva. Redefine o ângulo mandibular, reduz a papada e proporciona efeito lifting sofisticado e sem cortes.",
      es: "Aplica energía térmica en las capas de sustentación profunda (SMAS) y dermis media. Estimula una contracción inmediata del tejido y una redensificación progresiva durante 90 días, recuperando el óvalo facial y reduciendo la flacidez de cuello y papada."
    },
    duration: "60 - 90 min",
    downtime: { en: "None", pt: "Zero tempo de inatividade", es: "Sin tiempo de recuperación" },
    sessions: { en: "1 to 2 sessions per year", pt: "1 a 2 sessões por ano", es: "1 a 2 sesiones anuales" },
    idealFor: {
      en: "Mild to moderate skin laxity, undefined jawline, early jowls, turkey neck.",
      pt: "Flacidez facial e cervical, perda de definição da mandíbula e queda do terço inferior.",
      es: "Flacidez facial y de cuello, pérdida de contorno mandibular y descolgamiento leve a moderado."
    }
  },

  // ================= 2. CUERPO / BODY / CORPO =================
  {
    id: "cuerpo-contorno",
    category: "cuerpo",
    categoryLabel: { en: "Body Sculpting", pt: "Contorno Corporal", es: "Cuerpo" },
    icon: "activity",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    title: {
      en: "Body Contour & Structural Firmness",
      pt: "Contorno Corporal e Firmeza",
      es: "Contorno y Firmeza"
    },
    shortDesc: {
      en: "Targeted deep radiofrequency and lipolytic thermal modeling to contour localized fat pockets and tighten skin laxity on abdomen, thighs, and arms.",
      pt: "Radiofrequência profunda e modelagem térmica lipolítica para redução de gordura localizada e tratamento de flacidez em abdômen, coxas e braços.",
      es: "Radiofrecuencia profunda y modelado térmico lipolítico para grasa localizada y tensado de piel en abdomen, muslos y brazos."
    },
    fullDesc: {
      en: "Combining non-invasive acoustic and thermal technologies to selectively disrupt subcutaneous adipose tissue while simultaneously stimulating collagen synthesis. Smooths contours, tightens postpartum or weight-loss skin laxity, and delivers toned, refined silhouette architecture.",
      pt: "Tecnologia combinada que associa choque térmico e ondas eletromagnéticas focadas para degradar a gordura resistente e compactar a derme. Ideal para abdômen pós-parto, flacidez nos braços (tchauzinho), flancos e glúteos.",
      es: "Asociación de energía térmica focalizada y ondas electromagnéticas para degradar células grasas y compactar la piel. Excelente para flacidez abdominal post-parto, brazos, flancos y cara interna de muslos."
    },
    duration: "45 - 60 min per area",
    downtime: { en: "None", pt: "Nenhum", es: "Ninguno" },
    sessions: { en: "4 to 6 sessions", pt: "4 a 6 sessões", es: "4 a 6 sesiones" },
    idealFor: {
      en: "Subborn localized fat, crepey body skin, abdomen laxity, cellulite dimpling.",
      pt: "Gordura localizada resistente, flacidez corporal, celulite e pós-emagrecimento.",
      es: "Grasa localizada rebelde, flacidez post-embarazo, celulitis y pérdida de tono."
    }
  },
  {
    id: "cuerpo-drenaje",
    category: "cuerpo",
    categoryLabel: { en: "Body Sculpting", pt: "Contorno Corporal", es: "Cuerpo" },
    icon: "refresh-cw",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
    title: {
      en: "Lymphatic Drainage & Post-Procedure Recovery",
      pt: "Drenagem Linfática e Recuperação",
      es: "Drenaje y Recuperación"
    },
    shortDesc: {
      en: "Medical manual lymphatic therapy and pneumatic compression designed to accelerate fluid clearance, relieve bloating, and speed surgical recovery.",
      pt: "Drenagem linfática médica manual e compressão mecânica para eliminação de líquidos retidos, desinchaço e pós-operatório cirúrgico.",
      es: "Drenaje linfático médico manual y compresión secuencial para eliminar retención de líquidos, desinflamar y optimizar el postoperatorio."
    },
    fullDesc: {
      en: "Follows strict physiological lymphatic flow pathways using gentle, rhythmically calibrated movements. Highly recommended for combating fluid retention, systemic inflammation, chronic heavy-leg sensation, and optimizing surgical outcomes following liposuction or aesthetic procedures.",
      pt: "Realizada conforme a anatomia do sistema linfático com manobras suaves e ritmadas. Estimula a eliminação de toxinas, alivia a sensação de pernas pesadas, reduz edemas pós-cirúrgicos e acelera a cicatrização dos tecidos.",
      es: "Ejecutado conforme la fisiología linfática con maniobras rítmicas suaves. Alivia edemas, desinflama el cuerpo, aligera piernas cansadas y es indispensable para una recuperación rápida y sin fibrosis tras procedimientos estéticos o cirugías."
    },
    duration: "50 - 60 min",
    downtime: { en: "None (immediate lightness)", pt: "Nenhum (alívio imediato)", es: "Ninguno (alivio inmediato)" },
    sessions: { en: "Weekly or customized post-op pack", pt: "Semanal ou pacote pós-cirúrgico", es: "Semanal o pack postquirúrgico" },
    idealFor: {
      en: "Fluid retention, sluggish lymphatic flow, post-aesthetic recovery, heavy legs.",
      pt: "Retenção hídrica, pós-operatório de cirurgia plástica, celulite edematosa e inchaço.",
      es: "Retención de líquidos, postoperatorio estético, pesadez en extremidades y celulitis edematosa."
    }
  },
  {
    id: "cuerpo-piel",
    category: "cuerpo",
    categoryLabel: { en: "Body Sculpting", pt: "Contorno Corporal", es: "Cuerpo" },
    icon: "feather",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    title: {
      en: "Body Skin Rejuvenation & Texture",
      pt: "Saúde e Rejuvenescimento da Pele do Corpo",
      es: "Piel del Cuerpo"
    },
    shortDesc: {
      en: "Medical body peels, intensive hydrators, and collagen biostimulators for keratosis pilaris, sun damage on décolletage, and neck bands.",
      pt: "Peelings corporais magistrais, bioestimulação de colágeno e hidratação profunda para colo, pescoço, mãos e queratose pilar.",
      es: "Peelings corporales, bioestimulación de colágeno e hidratación médica para escote, cuello, manos y queratosis pilaris."
    },
    fullDesc: {
      en: "Addresses neglected areas including the décolleté, hands, knees, and back. Treats foliculitis, keratosis pilaris (rough chicken skin on arms), sun freckles on chest, and crepey texture, restoring an even, cashmere-soft skin quality across your entire body.",
      pt: "Focado em áreas comumente esquecidas como colo, mãos, joelhos e costas. Trata ceratose pilar (aspereza nos braços), manchas de sol no decote e pele apergaminhada, proporcionando toque macio, viço radiante e textura homogênea.",
      es: "Especialmente indicado para zonas como escote, manos, codos y espalda. Trata la queratosis pilar (aspereza en brazos), manchas solares en el pecho y piel apergaminada, devolviendo suavidad y tersura a todo el cuerpo."
    },
    duration: "45 min",
    downtime: { en: "1 - 2 days light renewal", pt: "1 a 2 dias de renovação suave", es: "1 a 2 días de renovación sutil" },
    sessions: { en: "3 to 4 sessions", pt: "3 a 4 sessões", es: "3 a 4 sesiones" },
    idealFor: {
      en: "Aging hands, sun-spotted décolleté, rough arms, folliculitis.",
      pt: "Envelhecimento das mãos, manchas no colo, foliculite e asperezas.",
      es: "Fotoenvejecimiento en manos y escote, foliculitis y textura irregular."
    }
  },

  // ================= 3. DEPILACIÓN / HAIR REMOVAL / DEPILAÇÃO =================
  {
    id: "depilacion-laser",
    category: "depilacion",
    categoryLabel: { en: "Laser & Waxing", pt: "Depilação", es: "Depilación" },
    icon: "zap",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80",
    title: {
      en: "Medical Laser Hair Removal",
      pt: "Depilação a Laser Médica",
      es: "Depilación Láser"
    },
    shortDesc: {
      en: "Triple-wavelength medical laser technology with integrated contact cooling for virtually painless, permanent hair reduction across all skin phototypes.",
      pt: "Tecnologia a laser médica com ponteira super refrigerada a safira para eliminação definitiva de pelos de forma confortável em todos os fototipos.",
      es: "Tecnología láser de grado médico con cabezal de zafiro ultra refrigerado para reducción permanente de vello en todos los tonos de piel sin dolor."
    },
    fullDesc: {
      en: "Targeting hair follicles at multiple depths simultaneously using diode and alexandrite wavelengths. The continuous motion protocol and ice-cold contact cooling tip protect the epidermal barrier while destroying the germinative cells responsible for hair growth. Effective, fast, and completely safe for light to deeply pigmented skin tones.",
      pt: "Atua nos folículos pilosos em diferentes profundidades através de feixes de laser combinados. O sistema de resfriamento constante da ponteira garante máxima proteção epidérmica e uma experiência praticamente indolor. Elimina a foliculite e reduz os pelos de forma permanente e uniforme.",
      es: "Ataca el folículo piloso en múltiples profundidades mediante longitudes de onda combinadas. Su sistema de refrigeración de contacto continuo a -5°C previene quemaduras y minimiza molestias. Trata la foliculitis y elimina el vello de manera duradera y segura."
    },
    duration: "15 - 60 min (area dependent)",
    downtime: { en: "None", pt: "Zero tempo de inatividade", es: "Ninguno" },
    sessions: { en: "6 to 8 sessions", pt: "6 a 8 sessões", es: "6 a 8 sesiones" },
    idealFor: {
      en: "All body and facial areas, ingrown hairs, folliculitis, smooth long-term results.",
      pt: "Rosto e corpo, foliculite recorrente, pelos encravados e praticidade definitiva.",
      es: "Rostro y cuerpo, foliculitis recurrente, vellos enquistados y suavidad permanente."
    }
  },
  {
    id: "depilacion-cera",
    category: "depilacion",
    categoryLabel: { en: "Laser & Waxing", pt: "Depilação", es: "Depilación" },
    icon: "check-circle",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    title: {
      en: "Luxury Calming Waxing Services",
      pt: "Depilação com Cera Suave & Hidratante",
      es: "Depilación con Cera"
    },
    shortDesc: {
      en: "Hypoallergenic hot honey and elastic botanical waxes infused with azulene and chamomile for sensitive skin areas and immediate satin softness.",
      pt: "Ceras elásticas hipoalergênicas aquecidas com camomila e azuleno para peles sensíveis, proporcionando remoção suave e toque acetinado.",
      es: "Cera elástica hipoalergénica enriquecida con azuleno y manzanilla para pieles delicadas, garantizando retiro limpio sin irritaciones."
    },
    fullDesc: {
      en: "Formulated specifically for intimate and sensitive zones like eyebrows, upper lip, bikini, and underarms. Our peel-off elastic wax adheres only to the hair shaft rather than the live skin layer, drastically minimizing discomfort, skin tearing, and post-wax redness.",
      pt: "Indicada especialmente para áreas delicadas como sobrancelhas, buço, axilas e virilha. A cera elástica adere unicamente ao pelo sem repuxar a derme viva, reduzindo drasticamente o desconforto e a irritação pós-remoção.",
      es: "Formulada especialmente para zonas sensibles como cejas, bozo, axilas y línea de bikini. La cera elástica abraza el vello sin adherirse a la piel viva, disminuyendo significativamente la molestia y el enrojecimiento posterior."
    },
    duration: "20 - 45 min",
    downtime: { en: "None", pt: "Nenhum", es: "Ninguno" },
    sessions: { en: "Every 3 to 4 weeks", pt: "A cada 3 a 4 semanas", es: "Cada 3 a 4 semanas" },
    idealFor: {
      en: "Instant hair removal, blonde/grey hairs not responsive to lasers, precise shaping.",
      pt: "Pelos claros que não respondem ao laser, retoques rápidos e desenho de sobrancelhas.",
      es: "Vellos claros o canos no aptos para láser, retoques inmediatos y perfilado de cejas."
    }
  },

  // ================= 4. CABELLO / HAIR / CABELO =================
  {
    id: "cabello-caida",
    category: "cabello",
    categoryLabel: { en: "Hair & Scalp", pt: "Cabelo e Couro Cabeludo", es: "Cabello" },
    icon: "wind",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
    title: {
      en: "Hair Loss & Follicular Regeneration Protocol",
      pt: "Tratamento para Queda de Cabelo & Densidade",
      es: "Caída del Cabello"
    },
    shortDesc: {
      en: "Medical mesotherapy, autologous growth factors (PRP), and low-level laser therapy to halt androgenic thinning and reactivate dormant follicles.",
      pt: "Mesoterapia capilar médica com fatores de crescimento, biotina e fotobioestimulação para frear a queda e engrossar os fios.",
      es: "Mesoterapia capilar médica con factores de crecimiento, biotina y bioestimulación lumínica para frenar la alopecia y densificar la hebra."
    },
    fullDesc: {
      en: "A clinically proven protocol addressing telogen effluvium, postpartum shedding, and genetic thinning. Micro-infuses high-potency peptides, amino acids, vitamins, and cellular stimulants directly into the hair bulb layer, prolonging the anagen (growth) phase and visibly increasing hair density.",
      pt: "Protocolo médico comprovado para eflúvio telógeno, queda pós-parto e alopecia androgenética. Realiza a microinjeção direta no bulbo capilar de peptídeos bioidênticos, d-pantenol, minerais e fatores de estímulo para reativar folículos adormecidos e fortalecer a raiz.",
      es: "Protocolo clínico para efluvio telógeno, caída estacional o postparto y alopecia androgenética. Microinfunde directamente en la raíz capilar vitaminas, péptidos y estimulantes celulares para prolongar la fase anágena y multiplicar la densidad capilar."
    },
    duration: "45 min",
    downtime: { en: "None", pt: "Zero tempo de inatividade", es: "Ninguno" },
    sessions: { en: "4 to 6 sessions every 2 weeks", pt: "4 a 6 sessões quinzenais", es: "4 a 6 sesiones quincenales" },
    idealFor: {
      en: "Thinning hair, widening part line, post-COVID shedding, early androgenic alopecia.",
      pt: "Queda acentuada, rarefação na linha frontal, fios finos sem volume e eflúvio pós-estresse.",
      es: "Disminución de densidad, pérdida difusa de cabello, debilitamiento capilar y afinamiento."
    }
  },
  {
    id: "cabello-cuero",
    category: "cabello",
    categoryLabel: { en: "Hair & Scalp", pt: "Cabelo e Couro Cabeludo", es: "Cabello" },
    icon: "droplet",
    image: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=800&q=80",
    title: {
      en: "Scalp Health & Detox Spa Therapy",
      pt: "Saúde e Desintoxicação do Couro Cabeludo",
      es: "Salud del Cuero Cabelludo"
    },
    shortDesc: {
      en: "Trichological scalp peeling, sebum rebalancing, and oxygen micro-jet infusion to treat dandruff, inflammation, and follicular congestion.",
      pt: "Peeling tricológico, oxigenoterapia e equilíbrio do microbioma capilar para tratar caspa, oleosidade excessiva e inflamação folicular.",
      es: "Peeling tricológico, oxigenoterapia y reequilibrio de la microbiota del cuero cabelludo para caspa, exceso de sebo e inflamación folicular."
    },
    fullDesc: {
      en: "Healthy hair growth is impossible without a balanced scalp ecosystem. This medical trichology treatment cleanses microscopic follicular plugs, neutralizes Malassezia yeast overgrowth, soothes scalp tenderness, and stimulates micro-circulation to foster thick, lustrous strands from the root.",
      pt: "O crescimento saudável dos fios depende diretamente do equilíbrio do couro cabeludo. Este tratamento desobstrui os óstios foliculares, controla a dermatite seborreica, reduz a descamação e estimula a oxigenação da raiz para fios mais resistentes e brilhantes.",
      es: "Un cabello fuerte requiere un cuero cabelludo limpio y oxigenado. Este tratamiento dermatológico elimina tapones de queratina y sebo, alivia picores o dermatitis seborreica y oxigena el folículo para un cabello más vital y vigoroso."
    },
    duration: "50 min",
    downtime: { en: "None", pt: "Nenhum", es: "Ninguno" },
    sessions: { en: "Monthly maintenance", pt: "Manutenção mensal", es: "Mantenimiento mensual" },
    idealFor: {
      en: "Flaky scalp, excessive oiliness, itchy or tender scalp, product buildup.",
      pt: "Caspa, oleosidade excessiva, coceira no couro cabeludo e acúmulo de resíduos.",
      es: "Descamación, exceso de grasa, picor o sensibilidad y saturación por productos capilares."
    }
  },

  // ================= 5. BIENESTAR / WELLNESS / BEM-ESTAR =================
  {
    id: "bienestar-iv",
    category: "bienestar",
    categoryLabel: { en: "Longevity & Wellness", pt: "Bem-Estar e Longevidade", es: "Bienestar" },
    icon: "activity",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    title: {
      en: "Medical IV Therapy (Sueroterapia)",
      pt: "Soroterapia Intravenosa Médica (IV Therapy)",
      es: "Sueroterapia IV"
    },
    shortDesc: {
      en: "Physician-compounded intravenous infusions of glutathione, high-dose vitamin C, magnesium, and electrolytes for rapid cellular revitalisation.",
      pt: "Infusões intravenosas sob prescrição médica com glutationa, altas doses de vitamina C, magnésio e eletrólitos para vitalidade celular imediata.",
      es: "Infusiones intravenosas médicas con glutatión, megadosis de vitamina C, magnesio y electrolitos para revitalización celular instantánea."
    },
    fullDesc: {
      en: "Bypasses digestive breakdown for 100% cellular bioavailability. Customized blends include: Glow & Radiance (Glutathione + Vitamin C for luminous skin brightening), Jet-Lag & Energy Boost (B-Complex, CoQ10, Electrolytes), and Immune Shield (Zinc, Trace Minerals, Antioxidants) in our luxury private infusion lounge.",
      pt: "Biodisponibilidade celular imediata sem perda pelo trato gastrointestinal. Protocolos personalizados: Glow & Radiance (Glutationa e Vitamina C para clareamento e viço dérmico), Imunidade Total (Zinco, Minerais e Antioxidantes) e Energia & Recuperação (Complexo B e Magnésio) em salas privativas com máximo conforto.",
      es: "Máxima absorción celular sin degradación digestiva. Fórmulas personalizadas: Glow & Juventud (Glutatión + Vitamina C para luminosidad dérmica), Energía Vital (Complejo B, Magnesio) e Inmuno-Protección en un ambiente relajante y exclusivo."
    },
    duration: "45 - 60 min",
    downtime: { en: "None (immediate rejuvenation)", pt: "Nenhum (revitalização imediata)", es: "Ninguno (efecto energizante inmediato)" },
    sessions: { en: "Bi-weekly or monthly", pt: "Quinzenal ou mensal", es: "Quincenal o mensual" },
    idealFor: {
      en: "Chronic fatigue, dehydrated dull skin, athletic recovery, immune enhancement.",
      pt: "Cansaço crônico, pele desidratada, recuperação pós-viagem, atletas e imunidade.",
      es: "Fatiga crónica, piel opaca y deshidratada, recuperación de viajes y defensas bajas."
    }
  },
  {
    id: "bienestar-inyecciones",
    category: "bienestar",
    categoryLabel: { en: "Longevity & Wellness", pt: "Bem-Estar e Longevidade", es: "Bienestar" },
    icon: "plus-circle",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    title: {
      en: "Targeted Vitamin & Booster Injections",
      pt: "Injeções Vitamínicas e Boosters Metabólicos",
      es: "Inyecciones Vitamínicas"
    },
    shortDesc: {
      en: "Rapid intramuscular micro-injections of Methylcobalamin (B12), Vitamin D3, Biotin, and lipotropic blends for instant metabolic and mental clarity.",
      pt: "Aplicações intramusculares rápidas de Vitamina B12 pura, Vitamina D3 em alta concentração, Biotina e aceleradores metabólicos.",
      es: "Aplicaciones intramusculares rápidas de Vitamina B12 activa, Vitamina D3 de alta pureza, Biotina y potenciadores metabólicos."
    },
    fullDesc: {
      en: "A swift 10-minute wellness boost designed for busy lifestyles. Methylcobalamin (B12) sharpens neurological focus and erythrocyte production, high-potency Vitamin D3 balances immune regulation, and Biotin bolsters hair and nail keratin matrix synthesis.",
      pt: "Aporte rápido de nutrientes em menos de 10 minutos. A metilcobalamina (B12) restaura o foco cognitivo e o metabolismo energético, a Vitamina D3 em dose calculada regula a imunidade e a Biotina reforça a estrutura dos cabelos e unhas.",
      es: "Aporte nutricional directo en solo 10 minutos. La vitamina B12 potencia la agilidad mental y los niveles de energía, la vitamina D3 regula la inmunidad y la Biotina estimula la síntesis de queratina en cabello y uñas."
    },
    duration: "10 - 15 min",
    downtime: { en: "None", pt: "Nenhum", es: "Ninguno" },
    sessions: { en: "Weekly or as needed", pt: "Semanal ou conforme avaliação médica", es: "Semanal o según prescripción médica" },
    idealFor: {
      en: "Energy dips, vitamin deficiencies, brittle hair and nails, mood support.",
      pt: "Fadiga, deficiências vitamínicas comprovadas, unhas fracas e suporte ao metabolismo.",
      es: "Falta de energía, deficiencias vitamínicas, uñas frágiles y apoyo inmunometabólico."
    }
  },
  {
    id: "bienestar-ortomolecular",
    category: "bienestar",
    categoryLabel: { en: "Longevity & Wellness", pt: "Bem-Estar e Longevidade", es: "Bienestar" },
    icon: "compass",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
    title: {
      en: "Comprehensive Orthomolecular Protocol",
      pt: "Protocolo Ortomolecular Integrativo",
      es: "Protocolo Ortomolecular"
    },
    shortDesc: {
      en: "In-depth biochemical diagnostic profiling, heavy metal testing, and bio-identical micronutrient correction to optimize longevity from the inside out.",
      pt: "Investigação laboratorial bioquímica, avaliação de estresse oxidativo e reposição de micronutrientes para longevidade e equilíbrio integral.",
      es: "Estudio bioquímico avanzado, detección de estrés oxidativo y modulación con micronutrientes para promover longevidad y vitalidad celular."
    },
    fullDesc: {
      en: "True aesthetic radiance is an external manifestation of internal biochemical equilibrium. Dr. Marcos and our medical team evaluate cellular inflammation markers, mitochondrial function, gut microbiome health, and antioxidant defenses to create a personalized longevity strategy.",
      pt: "A beleza sustentável é o reflexo direto do equilíbrio celular interno. Nossa equipe médica analisa marcadores inflamatórios, saúde mitocondrial, perfil hormonal e carências oligoelementares para prescrever um plano de longevidade sob medida.",
      es: "La belleza exterior refleja la salud celular interior. Evaluamos biomarcadores de inflamación, función mitocondrial, perfil hormonal y micronutrición para formular un protocolo personalizado de bienestar y antienvejecimiento biológico."
    },
    duration: "60 min consultation",
    downtime: { en: "None", pt: "Nenhum", es: "Ninguno" },
    sessions: { en: "Quarterly follow-ups", pt: "Acompanhamento trimestral", es: "Seguimiento trimestral" },
    idealFor: {
      en: "Preventive aging, metabolic sluggishness, chronic inflammation, optimal vitality.",
      pt: "Anti-aging preventivo, estresse oxidativo crônico, cansaço inexplicado e vitalidade.",
      es: "Medicina antienvejecimiento, inflamación silenciosa, fatiga y optimización biológica."
    }
  },

  // ================= 6. MEDICINA ESTÉTICA / MEDICAL AESTHETICS =================
  {
    id: "medicina-botox",
    category: "medicina",
    categoryLabel: { en: "Medical Aesthetics", pt: "Medicina Estética", es: "Medicina estética" },
    icon: "target",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
    title: {
      en: "Neuromodulators (Botox® & Dysport®) — Precision Wrinkle Smoothing",
      pt: "Toxina Botulínica (Botox® & Dysport®) — Suavização de Rugas com Expressão Natural",
      es: "Inyectables: Botox® (Neuromoduladores de Alta Precisión)"
    },
    shortDesc: {
      en: "Micro-dosed neuromodulators administered by aesthetic physicians to smooth forehead lines, crow's feet, frown furrows, and slim masseters naturally.",
      pt: "Aplicações milimétricas de toxina botulínica para atenuar linhas de expressão, pés de galinha, testa e afinamento mandibular (masseter) sem engessar o rosto.",
      es: "Inyección precisa de neuromoduladores para suavizar arrugas de frente, entrecejo, patas de gallo y afinar el óvalo mandibular (masetero)."
    },
    fullDesc: {
      en: "At TSC, we reject the frozen look. Our physician injectors employ 'Baby Botox' micro-vector dosing to selectively relax expressive hyperkinetic muscles while fully preserving your warmth, smiles, and authentic charisma. Also highly effective for bruxism, masseter slimming, lip flip, and hyperhidrosis (excessive sweating).",
      pt: "Na TSC priorizamos resultados refinados e naturais. Nossos médicos utilizam dosagens vetoriais calculadas que suavizam rugas dinâmicas na fronte, glabela e olhos sem comprometer a expressividade. Também indicado para afinamento facial (músculo masseter/bruxismo), arqueamento de sobrancelhas e controle de suor excessivo.",
      es: "En TSC defendemos una estética libre del rostro congelado. Administramos microdosis anatómicas que relajan los músculos hipercinéticos de la frente y contorno de ojos, preservando toda la expresividad natural. También disponible para bruxismo, afinamiento de masetero y sonrisa gingival."
    },
    duration: "20 - 30 min",
    downtime: { en: "None (zero recovery)", pt: "Nenhum (retorno imediato)", es: "Ninguno (reincorporación inmediata)" },
    sessions: { en: "Every 4 to 6 months", pt: "A cada 4 a 6 meses", es: "Cada 4 a 6 meses" },
    idealFor: {
      en: "Forehead lines, 11's frown lines, crow's feet, masseter clenching, gummy smile.",
      pt: "Rugas na testa e entrecejo, pés de galinha, bruxismo, sorriso gengival e prevenção.",
      es: "Líneas de la frente y entrecejo, patas de gallo, bruxismo y prevención antiedad."
    }
  },
  {
    id: "medicina-filler",
    category: "medicina",
    categoryLabel: { en: "Medical Aesthetics", pt: "Medicina Estética", es: "Medicina estética" },
    icon: "award",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80",
    title: {
      en: "Hyaluronic Acid Dermal Fillers — Lip & Structural Architecture",
      pt: "Preenchimento com Ácido Hialurônico (Filler) — Lábios e Contorno Estrutural",
      es: "Inyectables: Dermal Fillers (Relleno con Ácido Hialurônico)"
    },
    shortDesc: {
      en: "Architectural volume restoration using premium Juvederm® and Restylane® for lip hydration, jawline contour, cheekbone lift, and undereye tear troughs.",
      pt: "Preenchedores de última geração com ácido hialurônico para volumização labial discreta, projeção malar, queixo, mandíbula e olheiras profundas.",
      es: "Rellenos premium de ácido hialurónico para hidratación y perfilado labial, pómulos, ángulo de la mandíbula y ojeras hundidas."
    },
    fullDesc: {
      en: "Hyaluronic acid is an endogenous biological molecule that binds moisture and structure. Using blunt microcannulas for minimal bruising, our doctors replenish deep structural fat compartments lost with age: elevating sunken cheeks, sharpening blurry jawlines, softening marionette folds, and sculpting plush, balanced lips.",
      pt: "O ácido hialurônico restaura os compartimentos de sustentação facial reabsorvidos com o envelhecimento. Com cânulas atraumáticas que evitam hematomas, nossos médicos refinam o contorno mandibular, elevam as maçãs do rosto, preenchem olheiras fundas e desenham lábios harmônicos e hidratados.",
      es: "El ácido hialurónico restablece la estructura y turgencia perdida. Mediante microcánulas atraumáticas, nuestros médicos reponen volúmenes en pómulos, definen el perfil mandibular, corrigen surcos nasogenianos y aportan a los labios un volumen jugoso y elegante."
    },
    duration: "45 min",
    downtime: { en: "1 - 2 days minor swelling", pt: "1 a 2 dias de leve inchaço", es: "1 a 2 días de leve inflamación" },
    sessions: { en: "Lasts 12 to 18 months", pt: "Duração de 12 a 18 meses", es: "Duración de 12 a 18 meses" },
    idealFor: {
      en: "Thin lips, hollow under-eyes, weak chin, sunken cheeks, nasolabial folds.",
      pt: "Lábios finos ou desidratados, olheiras profundas, queixo recuado e perda de volume malar.",
      es: "Labios finos, ojeras marcadas, mentón retraído, pérdida de volumen en pómulos."
    }
  },
  {
    id: "medicina-bioestimuladores",
    category: "medicina",
    categoryLabel: { en: "Medical Aesthetics", pt: "Medicina Estética", es: "Medicina estética" },
    icon: "git-commit",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    title: {
      en: "Collagen Biostimulators (Sculptra® / Radiesse®) & PDO Threads",
      pt: "Bioestimuladores de Colágeno & Fios de PDO",
      es: "Bioestimuladores de Colágeno e Hilos Tensores"
    },
    shortDesc: {
      en: "Poly-L-lactic acid (Sculptra) and Calcium Hydroxylapatite (Radiesse) to trigger massive endogenous neocollagenesis, complemented by dissolvable PDO thread lifting.",
      pt: "Estímulo biológico profundo de colágeno com Sculptra® e Radiesse®, associado a fios de sustentação PDO para tração e reposicionamento tecidual.",
      es: "Inducción masiva de colágeno propio con Sculptra® y Radiesse®, combinada con hilos tensores reabsorbibles de PDO para un efecto lifting sutil."
    },
    fullDesc: {
      en: "Unlike traditional fillers that simply add volume, biostimulators activate your own fibroblasts to produce up to 66% more type I collagen over 6 months. Paired with barbed and mono PDO threads, this protocol tightens skin laxity on the lower face, neck, arms, and buttocks with results lasting over 2 years.",
      pt: "Diferente de preenchedores volumizadores, os bioestimuladores reprogramam as células da sua própria derme para produzir colágeno novo por meses. Associados aos fios de PDO de tração e estímulo dérmico, tratam a flacidez do terço inferior do rosto, pescoço, mãos e abdômen com durabilidade superior a 24 meses.",
      es: "A diferencia de los rellenos que solo aportan volumen, los bioestimuladores reactivan la síntesis de colágeno propio de forma progresiva. Combinados con hilos espiculados y lisos de PDO, tensan la piel flácida en rostro, cuello y cuerpo con una duración de más de 2 años."
    },
    duration: "60 min",
    downtime: { en: "24 - 48 hours mild swelling", pt: "24 a 48h de leve edema", es: "24 a 48h de leve hinchazón" },
    sessions: { en: "2 to 3 sessions", pt: "2 a 3 sessões", es: "2 a 3 sesiones" },
    idealFor: {
      en: "Crepey skin, sagging jawline, neck laxity, progressive anti-aging collagen restoration.",
      pt: "Flacidez dérmica, perda de firmeza facial, pescoço apergaminhado e rejuvenescimento gradual.",
      es: "Piel fina y descolgada, pérdida de firmeza en mandíbula y cuello, antienvejecimiento preventivo."
    }
  },
  {
    id: "medicina-radiofrecuencia",
    category: "medicina",
    categoryLabel: { en: "Medical Aesthetics", pt: "Medicina Estética", es: "Medicina estética" },
    icon: "radio",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    title: {
      en: "Medical-Grade Fractional Radiofrequency",
      pt: "Radiofrequência Médica Fracionada com Microagulhas",
      es: "Radiofrecuencia Médica"
    },
    shortDesc: {
      en: "Deep subdermal adipose remodeling (similar to Morpheus8) penetrating up to 4mm to coagulate fat, contract fibrosepta, and tighten lax skin dramatically.",
      pt: "Remodelamento subdérmico profundo com microagulhas e calor de radiofrequência para compactação tecidual, estímulo de colágeno e redução de papada.",
      es: "Remodelación subdérmica profunda con microagujas y energía térmica para compactar tejido, regenerar colágeno y tensar la piel en profundidad."
    },
    fullDesc: {
      en: "A transformative medical technology combining gold-plated microneedling with fractional radiofrequency energy. Reaches the deepest layers of the dermis and subdermal fat to liquefy localized fatty deposits (such as the double chin), tighten skin laxity, and dramatically shrink enlarged pores and acne scars.",
      pt: "Tecnologia médica de alta performance que une microagulhamento com pontas de ouro à emissão de radiofrequência fracionada. Aquece o colágeno em profundidade, coagula pequenos acúmulos de gordura (como na papada) e restaura a firmeza dérmica de forma espetacular.",
      es: "Tratamiento de vanguardia que combina microagujas bañadas en oro con energía fraccionada de radiofrecuencia. Penetra hasta capas subdérmicas para retraer la piel, disolver grasa focalizada en papada y borrar cicatrices con resultados comparables a un minilifting."
    },
    duration: "60 min (with topical numbing)",
    downtime: { en: "2 to 3 days mild erythema", pt: "2 a 3 dias de leve rubor", es: "2 a 3 días de enrojecimiento manejable" },
    sessions: { en: "3 sessions spaced 4 to 6 weeks", pt: "3 sessões com intervalo mensal", es: "3 sesiones espaciadas 4-6 semanas" },
    idealFor: {
      en: "Submental fullness (double chin), lower face sagging, deep acne scars, neck crepiness.",
      pt: "Papada resistente, contorno facial indefinido, cicatrizes de acne e flacidez cervical.",
      es: "Doble mentón (papada), descolgamiento del tercio inferior, cicatrices y flacidez de cuello."
    }
  },
  {
    id: "medicina-hormonas",
    category: "medicina",
    categoryLabel: { en: "Medical Aesthetics", pt: "Medicina Estética", es: "Medicina estética" },
    icon: "heart",
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=800&q=80",
    title: {
      en: "Hormone Optimization & Medical Weight Management",
      pt: "Saúde Hormonal Integrativa e Controle de Peso Médico",
      es: "Salud Hormonal y Control de Peso"
    },
    shortDesc: {
      en: "Physician-directed bioidentical hormone balancing, GLP-1 metabolic protocols, and body composition monitoring for sustainable vitality and lean mass.",
      pt: "Equilíbrio hormonal bioidêntico com supervisão médica, protocolos metabólicos modernos e controle de gordura visceral para energia e boa forma duradoura.",
      es: "Modulación hormonal bioidéntica supervisada por médicos, protocolos metabólicos GLP-1 y control de composición corporal para vitalidad y peso saludable."
    },
    fullDesc: {
      en: "Hormonal decline directly accelerates skin thinning, collagen degradation, and abdominal weight gain. Under medical supervision, our physicians perform extensive endocrine panels to calibrate bioidentical hormones, optimize thyroid function, and deliver medically supervised weight management programs.",
      pt: "Desbalanços hormonais afetam diretamente a densidade da pele, a perda de colágeno e o acúmulo de gordura. Nossos médicos realizam dosagens laboratoriais minuciosas para equilibrar hormônios bioidênticos, regular a tireoide e conduzir programas de emagrecimento sustentável.",
      es: "Los desajustes hormonales aceleran el envejecimiento de la piel y el aumento de grasa rebelde. Nuestros especialistas realizan analíticas endocrinas exhaustivas para restablecer niveles óptimos de hormonas bioidénticas y guiar planes médicos de pérdida de peso segura."
    },
    duration: "45 min consultation",
    downtime: { en: "None", pt: "Nenhum", es: "Ninguno" },
    sessions: { en: "Personalized ongoing medical program", pt: "Programa médico contínuo personalizado", es: "Programa médico continuo personalizado" },
    idealFor: {
      en: "Menopause / andropause symptoms, sluggish metabolism, stubborn visceral fat, low vitality.",
      pt: "Climatério, andropausa, metabolismo lento, ganho de peso hormonal e perda de tônus.",
      es: "Transición menopáusica, andropausia, metabolismo lento, ganho de peso y pérdida de energía."
    }
  },
  {
    id: "medicina-varices",
    category: "medicina",
    categoryLabel: { en: "Medical Aesthetics", pt: "Medicina Estética", es: "Medicina estética" },
    icon: "activity",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
    title: {
      en: "Spider Vein Therapy (Sclerotherapy & Vascular Laser)",
      pt: "Tratamento de Varizes e Vasinhos (Escleroterapia & Laser)",
      es: "Várices y Vasitos"
    },
    shortDesc: {
      en: "Liquid and foam micro-sclerotherapy combined with vascular transdermal laser to eliminate unsightly spider veins and reticular veins on the legs and face.",
      pt: "Microescleroterapia com espuma ou glicose associada a laser vascular para secagem definitiva de vasinhos (telangiectasias) nas pernas e rosto.",
      es: "Microescleroterapia química y láser vascular transdérmico para eliminar arañas vasculares y pequeñas venas en piernas y rostro de manera segura."
    },
    fullDesc: {
      en: "Telangiectasias (spider veins) and reticular veins are safely closed using ultra-fine micro-injections of sclerosant agents and targeted Nd:YAG vascular lasers. The treated vessels collapse and are naturally reabsorbed by the body, restoring clear, uniform leg skin without surgery.",
      pt: "Os vasinhos avermelhados e arroxeados nas pernas são tratados através de microaplicações precisas de agentes esclerosantes e laser vascular. Os vasos tratados são reabsorvidos naturalmente pelo organismo, devolvendo pernas uniformes e livres de manchas vasculares.",
      es: "Las arañitas vasculares en piernas y rostro se eliminan mediante microinyecciones con agentes esclerosantes y láser Nd:YAG. El vaso se ocluye y es reabsorbido de forma natural por el organismo, dejando la piel uniforme y despejada."
    },
    duration: "30 - 45 min",
    downtime: { en: "Mild bruising for 3-5 days (compression advised)", pt: "Leves hematomas por 3 a 5 dias (uso de meia elástica)", es: "Hematomas leves durante 3-5 días (se aconseja compresión)" },
    sessions: { en: "2 to 4 sessions", pt: "2 a 4 sessões", es: "2 a 4 sesiones" },
    idealFor: {
      en: "Spider veins on thighs/calves, broken facial capillaries, tired legs.",
      pt: "Vasinhos aparentes nas pernas, telangiectasias no rosto e queixas estéticas vasculares.",
      es: "Arañas vasculares en piernas, capilares rotos en mejillas o nariz y pesadez circulatoria."
    }
  },

  // ================= 7. MICROPIGMENTACIÓN / MICROPIGMENTATION =================
  {
    id: "micro-cejas",
    category: "micropigmentacion",
    categoryLabel: { en: "Micropigmentation", pt: "Micropigmentação", es: "Micropigmentación" },
    icon: "eye",
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80",
    title: {
      en: "Nano-Brows & Ombré Powder Eyebrow Micropigmentation",
      pt: "Micropigmentação de Sobrancelhas (Fio a Fio & Shadow)",
      es: "Micropigmentación de Cejas"
    },
    shortDesc: {
      en: "Ultra-precise hyperrealistic hair strokes and soft pixel shading designed using golden ratio facial geometry to frame your eyes with effortless elegance.",
      pt: "Técnica hiper-realista fio a fio ou efeito sombreado translúcido respeitando a visagismo e a proporção áurea facial.",
      es: "Trazos hiperrealistas pelo a pelo o sombreado en polvo diseñados con visagismo áureo para enmarcar su mirada con naturalidad."
    },
    fullDesc: {
      en: "Using organic medical-grade pigments matched to your exact hair undertone. We custom map your brow architecture based on facial bone structure, filling sparse gaps, balancing asymmetries, and creating a soft, naturally groomed appearance that lasts 1 to 2 years.",
      pt: "Utiliza pigmentos minerais biocompatíveis que não degradam para tons indesejados. O desenho é personalizado de acordo com a anatomia óssea, preenchendo falhas, equilibrando assimetrias e garantindo um resultado elegante que dura de 1 a 2 anos.",
      es: "Emplea pigmentos orgánicos de alta pureza calibrados con su subtono natural. Mapeamos la estructura ósea para rellenar vacíos, corregir asimetrías y lograr unas cejas pulidas y armoniosas que perduran de 1 a 2 años."
    },
    duration: "90 - 120 min",
    downtime: { en: "5 - 7 days light healing", pt: "5 a 7 dias de cicatrização superficial", es: "5 a 7 días de curación superficial" },
    sessions: { en: "Initial + 1 touch-up after 30 days", pt: "Sessão inicial + retoque em 30 dias", es: "Sesión inicial + retoque a los 30 días" },
    idealFor: {
      en: "Sparse brows, over-plucked brows, asymmetrical arches, daily makeup freedom.",
      pt: "Sobrancelhas ralas, falhas, assimetrias ou para quem busca praticidade diária.",
      es: "Cejas despobladas, asimétricas, con falta de definición o cicatrices."
    }
  },
  {
    id: "micro-labios",
    category: "micropigmentacion",
    categoryLabel: { en: "Micropigmentation", pt: "Micropigmentação", es: "Micropigmentación" },
    icon: "heart",
    image: "https://images.unsplash.com/photo-1588515724527-074a7a56616c?auto=format&fit=crop&w=800&q=80",
    title: {
      en: "Lip Blush & Contour Definition",
      pt: "Micropigmentação Labial (Lip Blush & Neutralização)",
      es: "Micropigmentación de Labios"
    },
    shortDesc: {
      en: "Subtle watercolor tinting and vermilion border enhancement to neutralize dark tones and impart a healthy, rosy, youthful flush to the lips.",
      pt: "Neutralização de lábios escuros e efeito aquarela translúcido para devolver cor saudável, jovialidade e contorno nítido aos lábios.",
      es: "Efecto acuarela y perfilado sutil para neutralizar labios oscuros o pálidos y aportar un tono rosado fresco y saludable."
    },
    fullDesc: {
      en: "Restores the youthful border lost with chronological aging. Perfect for pale lips or hyperpigmented borders. Deposits micronized tint beneath the epidermal layer, delivering a natural tint that never looks heavy or like drawn-on lipstick.",
      pt: "Devolve a nitidez do contorno labial que se perde com a idade. Excelente para lábios pálidos, arroxeados ou com assimetrias. O resultado após a cicatrização é um efeito de boca saudável com cor suave, iluminada e duradoura.",
      es: "Restaura la definición del borde bermellón. Ideal para neutralizar manchas oscuras o devolver vitalidad a labios descoloridos, logrando un acabado jugoso, aterciopelado y de aspecto completamente natural."
    },
    duration: "90 min",
    downtime: { en: "3 - 5 days light exfoliation", pt: "3 a 5 dias de descamação fina", es: "3 a 5 días de exfoliación sutil" },
    sessions: { en: "Initial + 1 touch-up after 45 days", pt: "Inicial + retoque após 45 dias", es: "Inicial + retoque a los 45 días" },
    idealFor: {
      en: "Pale lips, loss of lip contour, asymmetrical lips, dark lip neutralization.",
      pt: "Lábios desbotados, contorno indefinido, assimetrias e neutralização de tons arroxeados.",
      es: "Labios pálidos, pérdida de borde labial, asimetrías y corrección de tonalidad."
    }
  },
  {
    id: "micro-delineado",
    category: "micropigmentacion",
    categoryLabel: { en: "Micropigmentation", pt: "Micropigmentação", es: "Micropigmentación" },
    icon: "eye",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
    title: {
      en: "Lash Line Enhancement & Eyeliner Definition",
      pt: "Delineado de Olhos & Realce da Linha dos Cílios",
      es: "Delineado de Ojos"
    },
    shortDesc: {
      en: "Delicate pigment deposit directly along the lash root line to create the illusion of denser lashes and elegantly defined almond-shaped eyes.",
      pt: "Pigmentação minuciosa rente à raiz dos cílios para conferir profundidade ao olhar e aspecto de cílios mais cheios e expressivos.",
      es: "Pigmentación milimétrica entre las pestañas para realzar la profundidad de la mirada y crear la ilusión de pestañas más densas."
    },
    fullDesc: {
      en: "An understated, smudge-free enhancement placed strictly within the lash line. Gives eyes instant depth and sparkle without the appearance of exaggerated liquid makeup, remaining pristine through workouts, swimming, and humid climates.",
      pt: "Uma técnica discreta e à prova de manchas que deposita o pigmento entre os folículos ciliares. Confere amplitude e brilho aos olhos com elegância contida, perfeita para quem deseja acordar pronta todos os dias.",
      es: "Técnica sofisticada y resistente al agua que deposita el pigmento en la línea interciliar. Aporta intensidad y luminosidad a los ojos sin sobrecargar, conservándose impecable en el día a día."
    },
    duration: "60 - 75 min",
    downtime: { en: "2 - 3 days mild swelling", pt: "2 a 3 dias de leve inchaço", es: "2 a 3 días de ligera hinchazón" },
    sessions: { en: "Initial + 1 touch-up", pt: "Inicial + retoque em 30 dias", es: "Inicial + retoque a los 30 días" },
    idealFor: {
      en: "Sparse eyelashes, watery eyes, time-saving daily beauty routine.",
      pt: "Cílios ralos, olhos sensíveis à maquiagem e praticidade duradoura.",
      es: "Pestañas escasas, ojos llorosos o con dificultad para maquillarse a diario."
    }
  },
  {
    id: "micro-camuflaje",
    category: "micropigmentacion",
    categoryLabel: { en: "Micropigmentation", pt: "Micropigmentação", es: "Micropigmentación" },
    icon: "shield",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    title: {
      en: "Medical Camouflage & Reconstruction (Stretch Marks & Scars)",
      pt: "Camuflagem e Reconstrução Médica (Estrias e Cicatrizes)",
      es: "Camuflaje y Reconstrucción"
    },
    shortDesc: {
      en: "Paramedical skin-tone micropigmentation to disguise white stretch marks, surgical scars, and areola reconstruction post-mastectomy.",
      pt: "Micropigmentação paramédica de estrias brancas, cicatrizes cirúrgicas e reconstrução de aréola mamária com realismo tridimensional.",
      es: "Micropigmentación paramédica para disimular estrías blancas, cicatrices postquirúrgicas y reconstrucción areolar 3D."
    },
    fullDesc: {
      en: "Using custom computerized color spectrometry to match your exact surrounding skin undertones. We implant stable, non-oxidizing biocompatible pigments into white hypo-pigmented stretch marks and healed surgical scars, blending them invisibly into the surrounding skin.",
      pt: "Avaliação colorimétrica precisa para igualar o tom da cicatriz ou estria à tonalidade da pele circundante. Também realizamos reconstrução de aréola mamária 3D pós-mastectomia com extrema sensibilidade, restaurando a autoestima e a harmonia corporal.",
      es: "Medición colorimétrica personalizada para igualar el color de cicatrices o estrías al tono exacto de su piel. Incluye reconstrucción estética de areola 3D tras cirugías mamarias, restaurando la confianza con el más alto rigor estético."
    },
    duration: "60 - 120 min",
    downtime: { en: "7 - 10 days healing", pt: "7 a 10 dias de cicatrização dérmica", es: "7 a 10 días de regeneración dérmica" },
    sessions: { en: "2 to 3 sessions", pt: "2 a 3 sessões", es: "2 a 3 sesiones" },
    idealFor: {
      en: "White stretch marks, surgical incisions, abdominoplasty scars, areola restoration.",
      pt: "Estrias brancas, cicatriz de cesárea/abdominoplastia, vitiligo estável e aréolas.",
      es: "Estrías nacaradas, cicatrices postoperatorias, abdominoplastia y reconstrucción areolar."
    }
  },

  // ================= 8. REMOCIONES / REMOVALS / REMOÇÕES =================
  {
    id: "remocion-tatuajes",
    category: "remociones",
    categoryLabel: { en: "Removal Protocols", pt: "Remoções e Correção", es: "Remociones" },
    icon: "slash",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80",
    title: {
      en: "Medical Picosecond Laser Tattoo Removal",
      pt: "Remoção a Laser de Tatuagens (Tecnologia Picossegundos)",
      es: "Remoción de Tatuajes"
    },
    shortDesc: {
      en: "Ultra-short picosecond acoustic shockwaves to shatter ink pigments into microscopic dust without scarring or burning the skin.",
      pt: "Pulsos ultracurtos de picossegundos que fragmentam os pigmentos de tinta em micropartículas sem queimar ou deixar cicatrizes na pele.",
      es: "Pulsos de picosegundos que pulverizan las partículas de tinta en polvo microscópico sin quemaduras ni riesgo de cicatriz."
    },
    fullDesc: {
      en: "Conventional lasers rely on heat which can cause blistering and scar tissue. Our medical picosecond system utilizes pure photoacoustic pressure, shattering stubborn black and colored ink particles into fine dust for rapid clearance by your body's lymphatic macrophages with minimal discomfort.",
      pt: "Diferente de lasers antigos que aquecem a pele e causam queimaduras, nosso laser de picossegundos fragmenta a tinta através de impacto fotoacústico ultra veloz. O organismo elimina as partículas naturalmente pela linfa, preservando intacta a textura da pele.",
      es: "A diferencia de láseres antiguos basados en calor, nuestro sistema de picosegundos fragmenta la tinta por impacto fotoacústico. El sistema linfático elimina las partículas rápidamente, preservando la integridad y suavidad de la piel sin marcas."
    },
    duration: "20 - 45 min",
    downtime: { en: "3 - 5 days healing (keep protected)", pt: "3 a 5 dias com pomada regeneradora", es: "3 a 5 días con cuidado dérmico regenerador" },
    sessions: { en: "4 to 8 sessions (ink & age dependent)", pt: "4 a 8 sessões conforme a tinta e profundidade", es: "4 a 8 sesiones según antigüedad y color" },
    idealFor: {
      en: "Unwanted black and color tattoos, tattoo lightening for cover-ups.",
      pt: "Tatuagens pretas ou coloridas indesejadas, clareamento para nova cobertura.",
      es: "Tatuajes indeseados negros o de color, aclarado para futuros cover-ups."
    }
  },
  {
    id: "remocion-cejas",
    category: "remociones",
    categoryLabel: { en: "Removal Protocols", pt: "Remoções e Correção", es: "Remociones" },
    icon: "x-circle",
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80",
    title: {
      en: "Eyebrow PMU & Microblading Laser Removal",
      pt: "Remoção a Laser de Micropigmentação de Sobrancelhas",
      es: "Remoción de Micropigmentación de Cejas"
    },
    shortDesc: {
      en: "Gentle selective laser removal for oxidized, blue/red, or asymmetrical old eyebrow micropigmentation while completely preserving natural brow hairs.",
      pt: "Remoção seletiva a laser para pigmentos antigos alterados (cinzas, azuis ou avermelhados), preservando 100% dos fios naturais.",
      es: "Aclarado y eliminación selectiva con láser para pigmentos de cejas oxidados (azules, rojizos o grisáceos) sin dañar el vello natural."
    },
    fullDesc: {
      en: "Many older eyebrow pigments turn salmon, gray, or blue over time due to improper depth or unstable metals. Our calibrated laser wavelength safely targets synthetic dyes beneath the skin without scorching or bleaching your natural eyebrow hair follicles, preparing the area for fresh, modern brow artistry.",
      pt: "Pigmentos antigos frequentemente oxidam para tons chumbo, avermelhados ou azulados. Nosso laser atua com precisão nanométrica sobre a tinta residual sem queimar a raiz dos pelos nem comprometer seu crescimento, limpando a área para um novo trabalho impecável.",
      es: "Los pigmentos antiguos suelen degradarse hacia tonos azulados, grisáceos o anaranjados. Nuestro láser desintegra las partículas de tinta sin alterar ni quemar el folículo de la ceja natural, dejando la zona lista para un diseño fresco y moderno."
    },
    duration: "20 min",
    downtime: { en: "24 - 48 hours mild redness", pt: "24 a 48h de leve vermelhidão", es: "24 a 48h de leve enrojecimiento" },
    sessions: { en: "2 to 4 sessions", pt: "2 a 4 sessões", es: "2 a 4 sesiones" },
    idealFor: {
      en: "Discolored microblading, asymmetrical old tattoo brows, over-saturated pigment.",
      pt: "Sobrancelhas com pigmento azulado/avermelhado, traços desiguais ou excesso de tinta.",
      es: "Cejas pigmentadas con tonos virados a rojo o azul, asimetrías y saturación de color."
    }
  }
];
