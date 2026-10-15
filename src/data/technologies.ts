// Technology detail pages (EN / PT / ES).
// Generated from the Claude Design project "The Skin Center.dc.html".
import type { Language } from '@/data/blog';

export type TechItem = { title: string; text: string };
export type TechCopy = {
  sub: string; about: string; platformTitle: string; platform: TechItem[];
  benefits: TechItem[]; indications: string[]; ctaTitle: string; ctaText: string;
};
export type Technology = { slug: string; title: string; image: string; copy: Record<Language, TechCopy> };

export const techLabels: Record<Language, { learn: string; back: string; about: string; ben: string; ind: string; book: string }> = {
  "en": {
    "learn": "Learn more",
    "back": "All technologies",
    "about": "About",
    "ben": "Key Benefits",
    "ind": "Recommended Indications",
    "book": "Book a consultation"
  },
  "pt": {
    "learn": "Saiba mais",
    "back": "Todas as tecnologias",
    "about": "Sobre",
    "ben": "Principais Benefícios",
    "ind": "Indicações Recomendadas",
    "book": "Agendar consulta"
  },
  "es": {
    "learn": "Saber más",
    "back": "Todas las tecnologías",
    "about": "Acerca de",
    "ben": "Beneficios Clave",
    "ind": "Indicaciones Recomendadas",
    "book": "Reservar consulta"
  }
};

export const technologies: Technology[] = [
  {
    "slug": "igniterf",
    "title": "IgniteRF by InMode",
    "image": "/assets/images/tech/tech-igniterf-card.jpg",
    "copy": {
      "en": {
        "sub": "Advanced technology for body and facial treatments.",
        "about": "IgniteRF by InMode is our next-generation radiofrequency workstation, a multi-modality platform for precision procedures that unites three complementary technologies: Morpheus8, QuantumRF and the Tite family (RFAL). Covering treatment depths from 0.5 mm to 60 mm, it delivers controlled bipolar RF energy exactly where your plan needs it, from skin-quality refinement to deep soft-tissue contraction for face and body, with real-time temperature and impedance monitoring for safety. Every IgniteRF plan begins with a personalized consultation to define which technology, or combination, best fits your anatomy, goals and desired downtime.",
        "platformTitle": "One platform, three technologies",
        "platform": [
          {
            "title": "Morpheus8",
            "text": "Morpheus8 Burst: fractional RF microneedling that delivers bipolar energy at multiple depths within millisecond intervals, deep dermal and subdermal remodeling for texture, acne scars, jawline and body contour."
          },
          {
            "title": "QuantumRF",
            "text": "Clinically proven fractional RF delivered beneath the skin through a fine cannula, not microneedling. It contracts tissue from within, down to the subdermal plexus, with less downtime and reduced risk of post-inflammatory hyperpigmentation."
          },
          {
            "title": "Tite",
            "text": "The minimally invasive side of the platform (FaceTite, BodyTite, AccuTite): radiofrequency-assisted lipo-coagulation for remarkable soft-tissue contraction in a single treatment, with real-time temperature monitoring for safety."
          }
        ],
        "benefits": [
          {
            "title": "Body contouring & targeted fat reduction",
            "text": "Helps sculpt areas of stubborn fullness by focusing energy precisely where contour refinement is desired."
          },
          {
            "title": "Skin tightening, firmness & lifting",
            "text": "Promotes a smoother, more toned look by supporting collagen remodeling and improved skin elasticity over time."
          },
          {
            "title": "Minimally invasive approach with advanced control",
            "text": "Designed for precision, with treatments tailored to your anatomy and goals, often with limited downtime depending on the area and protocol."
          },
          {
            "title": "Natural, progressive improvement",
            "text": "Results typically continue to develop as the skin’s supportive structures respond, creating a refreshed look that doesn’t appear “overdone.”"
          },
          {
            "title": "Customized treatment planning",
            "text": "Suitable for face and body protocols, with individualized settings to address different tissue depths, skin types, and aesthetic objectives."
          }
        ],
        "indications": [
          "Localized fat in abdomen, flanks, and thighs",
          "Body sagging post-weight loss",
          "Facial contour modeling"
        ],
        "ctaTitle": "Explore the right IgniteRF procedure",
        "ctaText": "IgniteRF combines several radiofrequency technologies. A consultation determines which procedure, if any, fits your anatomy and goals."
      },
      "pt": {
        "sub": "Tecnologia avançada para tratamentos corporais e faciais.",
        "about": "O IgniteRF by InMode é nossa estação de radiofrequência de nova geração, uma plataforma multimodal para procedimentos de precisão que une três tecnologias complementares: Morpheus8, QuantumRF e a família Tite (RFAL). Com profundidades de tratamento de 0,5 mm a 60 mm, entrega energia de RF bipolar controlada exatamente onde o seu plano precisa, do refinamento da qualidade da pele à contração profunda de tecidos moles no rosto e no corpo, com monitoramento em tempo real de temperatura e impedância para mais segurança. Todo plano IgniteRF começa com uma consulta personalizada para definir qual tecnologia, ou combinação, melhor se adapta à sua anatomia, aos seus objetivos e ao tempo de recuperação desejado.",
        "platformTitle": "Uma plataforma, três tecnologias",
        "platform": [
          {
            "title": "Morpheus8",
            "text": "Morpheus8 Burst: microagulhamento com radiofrequência fracionada que entrega energia bipolar em várias profundidades em intervalos de milissegundos, com remodelação dérmica profunda e subdérmica para textura, cicatrizes de acne, mandíbula e contorno corporal."
          },
          {
            "title": "QuantumRF",
            "text": "RF fracionada comprovada clinicamente, entregue sob a pele por uma cânula fina, sem microagulhamento. Contrai o tecido por dentro, até o plexo subdérmico, com menos tempo de recuperação e menor risco de hiperpigmentação pós-inflamatória."
          },
          {
            "title": "Tite",
            "text": "O lado minimamente invasivo da plataforma (FaceTite, BodyTite, AccuTite): lipocoagulação assistida por radiofrequência para uma contração notável dos tecidos moles em um único tratamento, com monitoramento de temperatura em tempo real."
          }
        ],
        "benefits": [
          {
            "title": "Contorno corporal e redução localizada de gordura",
            "text": "Ajuda a esculpir áreas de acúmulo resistente, concentrando a energia exatamente onde se deseja refinar o contorno."
          },
          {
            "title": "Tensionamento, firmeza e lifting da pele",
            "text": "Promove um aspecto mais liso e tonificado ao estimular a remodelação do colágeno e a elasticidade da pele ao longo do tempo."
          },
          {
            "title": "Abordagem minimamente invasiva com controle avançado",
            "text": "Pensado para precisão, com tratamentos adaptados à sua anatomia e aos seus objetivos, geralmente com pouco tempo de recuperação, conforme a área e o protocolo."
          },
          {
            "title": "Melhora natural e progressiva",
            "text": "Os resultados costumam continuar evoluindo conforme as estruturas de sustentação da pele respondem, criando um aspecto renovado que não parece “exagerado”."
          },
          {
            "title": "Planejamento personalizado",
            "text": "Indicado para protocolos faciais e corporais, com ajustes individualizados para diferentes profundidades de tecido, tipos de pele e objetivos estéticos."
          }
        ],
        "indications": [
          "Gordura localizada no abdômen, flancos e coxas",
          "Flacidez corporal após perda de peso",
          "Modelagem do contorno facial"
        ],
        "ctaTitle": "Descubra o procedimento IgniteRF ideal",
        "ctaText": "O IgniteRF combina várias tecnologias de radiofrequência. A consulta determina qual procedimento, se houver, se adapta à sua anatomia e aos seus objetivos."
      },
      "es": {
        "sub": "Tecnología avanzada para tratamientos corporales y faciales.",
        "about": "IgniteRF by InMode es nuestra estación de radiofrecuencia de nueva generación, una plataforma multimodal para procedimientos de precisión que une tres tecnologías complementarias: Morpheus8, QuantumRF y la familia Tite (RFAL). Con profundidades de tratamiento de 0,5 mm a 60 mm, entrega energía de RF bipolar controlada justo donde tu plan la necesita, desde el refinamiento de la calidad de la piel hasta la contracción profunda de tejidos blandos en rostro y cuerpo, con monitoreo en tiempo real de temperatura e impedancia para mayor seguridad. Cada plan IgniteRF comienza con una consulta personalizada para definir qué tecnología, o combinación, se ajusta mejor a tu anatomía, tus objetivos y el tiempo de recuperación deseado.",
        "platformTitle": "Una plataforma, tres tecnologías",
        "platform": [
          {
            "title": "Morpheus8",
            "text": "Morpheus8 Burst: microneedling de radiofrecuencia fraccionada que entrega energía bipolar a múltiples profundidades en intervalos de milisegundos, con remodelación dérmica profunda y subdérmica para textura, cicatrices de acné, mandíbula y contorno corporal."
          },
          {
            "title": "QuantumRF",
            "text": "RF fraccionada clínicamente comprobada, aplicada bajo la piel mediante una cánula fina, sin microneedling. Contrae el tejido desde adentro, hasta el plexo subdérmico, con menos tiempo de recuperación y menor riesgo de hiperpigmentación postinflamatoria."
          },
          {
            "title": "Tite",
            "text": "El lado mínimamente invasivo de la plataforma (FaceTite, BodyTite, AccuTite): lipocoagulación asistida por radiofrecuencia para una notable contracción de tejidos blandos en un solo tratamiento, con monitoreo de temperatura en tiempo real."
          }
        ],
        "benefits": [
          {
            "title": "Contorno corporal y reducción localizada de grasa",
            "text": "Ayuda a esculpir zonas de acumulación rebelde, concentrando la energía justo donde se busca refinar el contorno."
          },
          {
            "title": "Tensado, firmeza y lifting de la piel",
            "text": "Promueve un aspecto más liso y tonificado al apoyar la remodelación del colágeno y la elasticidad de la piel con el tiempo."
          },
          {
            "title": "Enfoque mínimamente invasivo con control avanzado",
            "text": "Diseñado para la precisión, con tratamientos adaptados a tu anatomía y tus objetivos, a menudo con poco tiempo de recuperación según la zona y el protocolo."
          },
          {
            "title": "Mejora natural y progresiva",
            "text": "Los resultados suelen seguir evolucionando a medida que responden las estructuras de soporte de la piel, logrando un aspecto renovado que no se ve “exagerado”."
          },
          {
            "title": "Planificación personalizada",
            "text": "Apto para protocolos faciales y corporales, con ajustes individualizados para distintas profundidades de tejido, tipos de piel y objetivos estéticos."
          }
        ],
        "indications": [
          "Grasa localizada en abdomen, flancos y muslos",
          "Flacidez corporal tras la pérdida de peso",
          "Modelado del contorno facial"
        ],
        "ctaTitle": "Descubre el procedimiento IgniteRF adecuado",
        "ctaText": "IgniteRF combina varias tecnologías de radiofrecuencia. Una consulta determina qué procedimiento, si corresponde, se ajusta a tu anatomía y tus objetivos."
      }
    }
  },
  {
    "slug": "lavieen",
    "title": "Lavieen",
    "image": "/assets/images/tech/tech-lavieen.jpg",
    "copy": {
      "en": {
        "sub": "The 1927 nm thulium “BB laser”, superficial resurfacing for glass skin, pigment and pores, with minimal downtime.",
        "about": "Lavieen is our 1927 nm thulium fractional laser, the original ‘BB laser’. Its wavelength is absorbed by the skin’s own moisture, so the energy lands precisely in the epidermis and upper dermis (around 0.15–0.3 mm deep), exactly where pigment and texture live, while preserving the protective stratum corneum. Depending on the parameters our physicians set, the same platform works as a gentle non-ablative brightening treatment or a true ablative resurfacing, which is why it handles melasma and sun damage, post-inflammatory hyperpigmentation, enlarged pores, fine lines and acne scarring. Recovery follows a short, predictable rhythm: mild redness on day one, fine micro-crusts by day three, shedding naturally by day five, revealing the polished, luminous glass-skin finish it is famous for.",
        "platformTitle": "",
        "platform": [],
        "benefits": [
          {
            "title": "Moisture-targeted 1927 nm wavelength",
            "text": "Water absorption far higher than classic fractional lasers, energy lands in the epidermis and upper dermis while the protective barrier stays intact."
          },
          {
            "title": "Non-ablative or ablative, one platform",
            "text": "Our physicians tune power, pulse and overlap for each lesion, from gentle brightening to true resurfacing."
          },
          {
            "title": "Pigment, pores, lines and scars",
            "text": "Fades melasma, sun damage and PIH; refines enlarged pores, fine lines and acne scarring."
          },
          {
            "title": "The glass-skin finish",
            "text": "Micro-crusts carry pigment away as they shed, revealing the polished, luminous glow that earned the BB-laser name."
          },
          {
            "title": "Short, predictable downtime",
            "text": "Redness on day one, micro-crusts by day three, shed by day five, a makeup-friendly recovery."
          }
        ],
        "indications": [
          "Pigmentation, melasma & PIH",
          "Enlarged pores & uneven texture",
          "Fine lines & acne scars"
        ],
        "ctaTitle": "Is Lavieen appropriate for your skin?",
        "ctaText": "A consultation determines whether a Lavieen laser procedure fits your skin, concerns, expected downtime and treatment plan."
      },
      "pt": {
        "sub": "O “BB laser” de túlio 1927 nm: resurfacing superficial para glass skin, pigmento e poros, com recuperação mínima.",
        "about": "O Lavieen é nosso laser de túlio fracionado de 1927 nm, o original “BB laser”. Seu comprimento de onda é absorvido pela própria umidade da pele, e a energia atinge com precisão a epiderme e a derme superior (cerca de 0,15–0,3 mm de profundidade), exatamente onde estão o pigmento e a textura, preservando o estrato córneo protetor. Conforme os parâmetros definidos pelos nossos médicos, a mesma plataforma funciona como um clareamento suave não ablativo ou como um resurfacing ablativo de verdade, por isso trata melasma e danos solares, hiperpigmentação pós-inflamatória, poros dilatados, linhas finas e cicatrizes de acne. A recuperação segue um ritmo curto e previsível: leve vermelhidão no primeiro dia, microcrostas finas por volta do terceiro dia e descamação natural até o quinto, revelando o acabamento luminoso de glass skin pelo qual é famoso.",
        "platformTitle": "",
        "platform": [],
        "benefits": [
          {
            "title": "Comprimento de onda de 1927 nm voltado à umidade da pele",
            "text": "Absorção de água muito superior à dos lasers fracionados clássicos: a energia atinge a epiderme e a derme superior, mantendo a barreira protetora intacta."
          },
          {
            "title": "Não ablativo ou ablativo, em uma só plataforma",
            "text": "Nossos médicos ajustam potência, pulso e sobreposição para cada lesão, do clareamento suave ao resurfacing completo."
          },
          {
            "title": "Pigmento, poros, linhas e cicatrizes",
            "text": "Atenua melasma, danos solares e hiperpigmentação pós-inflamatória; refina poros dilatados, linhas finas e cicatrizes de acne."
          },
          {
            "title": "O acabamento glass skin",
            "text": "As microcrostas levam o pigmento embora ao descamar, revelando o brilho polido e luminoso que deu nome ao BB laser."
          },
          {
            "title": "Recuperação curta e previsível",
            "text": "Vermelhidão no primeiro dia, microcrostas no terceiro, descamação até o quinto: uma recuperação compatível com maquiagem."
          }
        ],
        "indications": [
          "Pigmentação, melasma e hiperpigmentação pós-inflamatória",
          "Poros dilatados e textura irregular",
          "Linhas finas e cicatrizes de acne"
        ],
        "ctaTitle": "O Lavieen é indicado para a sua pele?",
        "ctaText": "A consulta determina se um procedimento a laser Lavieen é adequado à sua pele, às suas queixas, ao tempo de recuperação esperado e ao seu plano de tratamento."
      },
      "es": {
        "sub": "El “BB laser” de tulio de 1927 nm: resurfacing superficial para piel de porcelana, pigmento y poros, con recuperación mínima.",
        "about": "Lavieen es nuestro láser de tulio fraccionado de 1927 nm, el original “BB laser”. Su longitud de onda es absorbida por la humedad natural de la piel, de modo que la energía llega con precisión a la epidermis y la dermis superior (a unos 0,15–0,3 mm de profundidad), justo donde viven el pigmento y la textura, preservando el estrato córneo protector. Según los parámetros que definen nuestros médicos, la misma plataforma funciona como un suave tratamiento iluminador no ablativo o como un verdadero resurfacing ablativo, por lo que trata melasma y daño solar, hiperpigmentación postinflamatoria, poros dilatados, líneas finas y cicatrices de acné. La recuperación sigue un ritmo corto y predecible: ligero enrojecimiento el primer día, microcostras finas hacia el tercero y descamación natural hacia el quinto, revelando el acabado luminoso de piel de porcelana por el que es famoso.",
        "platformTitle": "",
        "platform": [],
        "benefits": [
          {
            "title": "Longitud de onda de 1927 nm dirigida a la humedad",
            "text": "Absorción de agua muy superior a la de los láseres fraccionados clásicos: la energía llega a la epidermis y la dermis superior mientras la barrera protectora permanece intacta."
          },
          {
            "title": "No ablativo o ablativo, en una sola plataforma",
            "text": "Nuestros médicos ajustan potencia, pulso y superposición para cada lesión, desde un suave aclarado hasta un verdadero resurfacing."
          },
          {
            "title": "Pigmento, poros, líneas y cicatrices",
            "text": "Atenúa melasma, daño solar e hiperpigmentación postinflamatoria; afina poros dilatados, líneas finas y cicatrices de acné."
          },
          {
            "title": "El acabado piel de porcelana",
            "text": "Las microcostras se llevan el pigmento al descamar, revelando el brillo pulido y luminoso que dio nombre al BB laser."
          },
          {
            "title": "Recuperación corta y predecible",
            "text": "Enrojecimiento el primer día, microcostras al tercero, descamación hacia el quinto: una recuperación compatible con el maquillaje."
          }
        ],
        "indications": [
          "Pigmentación, melasma e hiperpigmentación postinflamatoria",
          "Poros dilatados y textura irregular",
          "Líneas finas y cicatrices de acné"
        ],
        "ctaTitle": "¿Es Lavieen adecuado para tu piel?",
        "ctaText": "Una consulta determina si un procedimiento láser Lavieen se ajusta a tu piel, tus inquietudes, el tiempo de recuperación esperado y tu plan de tratamiento."
      }
    }
  },
  {
    "slug": "triton",
    "title": "Triton",
    "image": "/assets/images/tech/tech-triton.jpg",
    "copy": {
      "en": {
        "sub": "Multi-wavelength Fusion laser hair removal, tailored across a wide range of skin tones and hair types.",
        "about": "Triton™ by InMode represents a new standard in advanced laser hair removal, designed for refined, high-performance results. By combining three clinically proven wavelengths in a single platform, Triton delivers precise energy to hair follicles across a wide range of skin tones and hair types, with an emphasis on efficacy, comfort, and safety. Unlike conventional single-wavelength devices, Triton’s multi-wavelength approach allows providers to tailor treatment more intelligently, addressing different depths of the follicle and variations in hair thickness for consistently smooth outcomes.",
        "platformTitle": "",
        "platform": [],
        "benefits": [
          {
            "title": "Hair removal across a wide range of skin tones",
            "text": "Advanced energy delivery lets providers select parameters for your phototype, assessed at your consultation."
          },
          {
            "title": "Triple-wavelength technology for maximum coverage",
            "text": "Triton combines diode, alexandrite, and Nd:YAG wavelengths to target hair at multiple depths, helping improve response across fine to coarse hair and lighter to darker hair."
          },
          {
            "title": "Fast treatments for large areas",
            "text": "Optimized speed and coverage make it ideal for high-demand zones like legs, back, chest, and arms, reducing overall treatment time without sacrificing precision."
          },
          {
            "title": "More comfortable experience",
            "text": "Patient comfort is prioritized with advanced cooling and consistent energy delivery, supporting a smoother session with minimal downtime."
          },
          {
            "title": "Long-lasting results with a safety-first approach",
            "text": "Designed to minimize unwanted skin impact while focusing energy where it matters most: the follicle, helping support reliable, long-term smoothness."
          }
        ],
        "indications": [
          "Hair removal in large areas",
          "Light and dark hair",
          "A wide range of skin phototypes"
        ],
        "ctaTitle": "Plan your laser hair removal assessment",
        "ctaText": "A consultation helps determine whether Triton is appropriate for your skin tone, hair characteristics and treatment area."
      },
      "pt": {
        "sub": "Depilação a laser Fusion multicomprimento de onda, adaptada a uma ampla variedade de tons de pele e tipos de pelo.",
        "about": "O Triton™ by InMode representa um novo padrão em depilação a laser avançada, criado para resultados refinados e de alto desempenho. Ao combinar três comprimentos de onda clinicamente comprovados em uma única plataforma, o Triton entrega energia precisa aos folículos em uma ampla variedade de tons de pele e tipos de pelo, com ênfase em eficácia, conforto e segurança. Diferente dos aparelhos convencionais de comprimento de onda único, a abordagem multicomprimento do Triton permite ao profissional adaptar o tratamento de forma mais inteligente, atuando em diferentes profundidades do folículo e em variações de espessura do pelo para resultados consistentemente lisos.",
        "platformTitle": "",
        "platform": [],
        "benefits": [
          {
            "title": "Depilação em uma ampla variedade de tons de pele",
            "text": "A entrega avançada de energia permite ao profissional escolher os parâmetros para o seu fototipo, avaliado na consulta."
          },
          {
            "title": "Tecnologia de três comprimentos de onda para máxima cobertura",
            "text": "O Triton combina diodo, alexandrita e Nd:YAG para atingir o pelo em várias profundidades, ajudando a melhorar a resposta de pelos finos a grossos e de claros a escuros."
          },
          {
            "title": "Tratamentos rápidos para áreas extensas",
            "text": "Velocidade e cobertura otimizadas o tornam ideal para zonas de alta demanda, como pernas, costas, peito e braços, reduzindo o tempo total sem perder precisão."
          },
          {
            "title": "Experiência mais confortável",
            "text": "O conforto do paciente é prioridade, com resfriamento avançado e entrega consistente de energia, para uma sessão mais suave e com recuperação mínima."
          },
          {
            "title": "Resultados duradouros com foco em segurança",
            "text": "Pensado para minimizar o impacto indesejado na pele e concentrar a energia onde importa: o folículo, ajudando a sustentar uma pele lisa e duradoura."
          }
        ],
        "indications": [
          "Depilação em áreas extensas",
          "Pelos claros e escuros",
          "Ampla variedade de fototipos de pele"
        ],
        "ctaTitle": "Planeje sua avaliação de depilação a laser",
        "ctaText": "A consulta ajuda a determinar se o Triton é adequado ao seu tom de pele, às características dos seus pelos e à área de tratamento."
      },
      "es": {
        "sub": "Depilación láser Fusion multilongitud de onda, adaptada a una amplia variedad de tonos de piel y tipos de vello.",
        "about": "Triton™ by InMode representa un nuevo estándar en depilación láser avanzada, diseñado para resultados refinados y de alto rendimiento. Al combinar tres longitudes de onda clínicamente comprobadas en una sola plataforma, Triton entrega energía precisa a los folículos en una amplia variedad de tonos de piel y tipos de vello, con énfasis en eficacia, comodidad y seguridad. A diferencia de los equipos convencionales de una sola longitud de onda, el enfoque multilongitud de Triton permite al profesional adaptar el tratamiento de forma más inteligente, abordando distintas profundidades del folículo y variaciones en el grosor del vello para lograr resultados uniformemente suaves.",
        "platformTitle": "",
        "platform": [],
        "benefits": [
          {
            "title": "Depilación en una amplia variedad de tonos de piel",
            "text": "La entrega avanzada de energía permite al profesional elegir los parámetros para tu fototipo, evaluado en la consulta."
          },
          {
            "title": "Tecnología de tres longitudes de onda para máxima cobertura",
            "text": "Triton combina diodo, alejandrita y Nd:YAG para alcanzar el vello a múltiples profundidades, ayudando a mejorar la respuesta del vello fino al grueso y del claro al oscuro."
          },
          {
            "title": "Tratamientos rápidos para áreas extensas",
            "text": "Su velocidad y cobertura optimizadas lo hacen ideal para zonas de alta demanda como piernas, espalda, pecho y brazos, reduciendo el tiempo total sin perder precisión."
          },
          {
            "title": "Experiencia más cómoda",
            "text": "Se prioriza la comodidad del paciente con enfriamiento avanzado y entrega constante de energía, para una sesión más suave y con recuperación mínima."
          },
          {
            "title": "Resultados duraderos con un enfoque de seguridad primero",
            "text": "Diseñado para minimizar el impacto no deseado en la piel y concentrar la energía donde importa: el folículo, ayudando a lograr una suavidad fiable y duradera."
          }
        ],
        "indications": [
          "Depilación en áreas extensas",
          "Vello claro y oscuro",
          "Amplia variedad de fototipos de piel"
        ],
        "ctaTitle": "Planifica tu evaluación de depilación láser",
        "ctaText": "Una consulta ayuda a determinar si Triton es apropiado para tu tono de piel, las características de tu vello y la zona de tratamiento."
      }
    }
  },
  {
    "slug": "picocare",
    "title": "Picocare Majesty",
    "image": "/assets/images/tech/tech-picocare.jpg",
    "copy": {
      "en": {
        "sub": "The newest generation of picosecond laser, 250 ps pulses and four wavelengths, from pigment and tattoos to scars and pores.",
        "about": "Our picosecond platform is the PicoCare Majesty, the newest generation of pico laser, firing ultra-short 250-picosecond pulses, among the shortest in aesthetic lasers, with peak power up to 2 GW. The shorter the pulse, the more purely photoacoustic the effect: pigment is shattered by a pressure wave rather than cooked by heat, into particles far finer than Q-switched lasers can achieve, small enough for your immune cells to clear efficiently, in fewer sessions and with a lower risk of post-inflammatory hyperpigmentation across skin types. Four wavelengths (1064 and 532 nm picosecond, plus 595 and 660 nm dye handpieces) and seven handpieces cover melasma, sun spots and PIH, multi-color tattoo removal, including stubborn reds, greens and blues, and, through the MLA ‘Pico-Fraxel’ handpiece, LIOB collagen remodeling for acne scars, pores and skin texture.",
        "platformTitle": "",
        "platform": [],
        "benefits": [
          {
            "title": "250-picosecond pulses",
            "text": "Among the shortest pulse durations in aesthetic lasers, roughly half that of conventional pico devices, for a purely photoacoustic effect."
          },
          {
            "title": "Peak power up to 2 GW",
            "text": "Shatters ink and melanin into far finer particles than Q-switched lasers, cleared faster by your body, in fewer sessions."
          },
          {
            "title": "Gentler on melanin-rich skin",
            "text": "A pulse shorter than the melanosome’s stress-relaxation time treats pigment with minimal collateral heat, lower PIH risk across skin types."
          },
          {
            "title": "Four wavelengths, seven handpieces",
            "text": "1064 and 532 nm plus 595 and 660 nm dye handpieces cover deep and superficial pigment, vascular tones and multi-color tattoos."
          },
          {
            "title": "Pico-Fraxel for scars and pores",
            "text": "The MLA handpiece focuses peak power into LIOB micro-zones that rebuild collagen, with roughly half the downtime of traditional fractional resurfacing."
          }
        ],
        "indications": [
          "Pigmented lesion treatment",
          "Multi-colored tattoo removal",
          "Skin rejuvenation",
          "Scar treatment"
        ],
        "ctaTitle": "Is PicoCare appropriate for your concerns?",
        "ctaText": "A consultation determines whether a PicoCare laser procedure is appropriate for pigment, tattoo, texture or scar concerns."
      },
      "pt": {
        "sub": "A mais nova geração de laser de picossegundos, com pulsos de 250 ps e quatro comprimentos de onda, de pigmentos e tatuagens a cicatrizes e poros.",
        "about": "Nossa plataforma de picossegundos é o PicoCare Majesty, a mais nova geração de laser pico, com pulsos ultracurtos de 250 picossegundos, entre os mais curtos dos lasers estéticos, e potência de pico de até 2 GW. Quanto mais curto o pulso, mais puramente fotoacústico é o efeito: o pigmento é fragmentado por uma onda de pressão, e não “cozido” pelo calor, em partículas muito mais finas do que os lasers Q-switched conseguem, pequenas o bastante para as suas células imunes eliminarem com eficiência, em menos sessões e com menor risco de hiperpigmentação pós-inflamatória em diferentes tipos de pele. Quatro comprimentos de onda (1064 e 532 nm em picossegundos, mais as ponteiras de corante de 595 e 660 nm) e sete ponteiras cobrem melasma, manchas solares e hiperpigmentação pós-inflamatória, remoção de tatuagens de várias cores, incluindo vermelhos, verdes e azuis difíceis, e, pela ponteira MLA “Pico-Fraxel”, remodelação de colágeno LIOB para cicatrizes de acne, poros e textura.",
        "platformTitle": "",
        "platform": [],
        "benefits": [
          {
            "title": "Pulsos de 250 picossegundos",
            "text": "Entre as menores durações de pulso dos lasers estéticos, cerca de metade da dos aparelhos pico convencionais, para um efeito puramente fotoacústico."
          },
          {
            "title": "Potência de pico de até 2 GW",
            "text": "Fragmenta tinta e melanina em partículas muito mais finas que as dos lasers Q-switched, eliminadas mais rápido pelo corpo, em menos sessões."
          },
          {
            "title": "Mais gentil com peles ricas em melanina",
            "text": "Um pulso mais curto que o tempo de relaxamento de tensão do melanossomo trata o pigmento com mínimo calor colateral e menor risco de hiperpigmentação pós-inflamatória."
          },
          {
            "title": "Quatro comprimentos de onda, sete ponteiras",
            "text": "1064 e 532 nm, mais as ponteiras de corante de 595 e 660 nm, cobrem pigmento profundo e superficial, tons vasculares e tatuagens multicoloridas."
          },
          {
            "title": "Pico-Fraxel para cicatrizes e poros",
            "text": "A ponteira MLA concentra a potência de pico em microzonas LIOB que reconstroem o colágeno, com cerca de metade do tempo de recuperação do resurfacing fracionado tradicional."
          }
        ],
        "indications": [
          "Tratamento de lesões pigmentadas",
          "Remoção de tatuagens multicoloridas",
          "Rejuvenescimento da pele",
          "Tratamento de cicatrizes"
        ],
        "ctaTitle": "O PicoCare é indicado para a sua queixa?",
        "ctaText": "A consulta determina se um procedimento a laser PicoCare é adequado para pigmento, tatuagem, textura ou cicatrizes."
      },
      "es": {
        "sub": "La última generación de láser de picosegundos, con pulsos de 250 ps y cuatro longitudes de onda, desde pigmento y tatuajes hasta cicatrices y poros.",
        "about": "Nuestra plataforma de picosegundos es el PicoCare Majesty, la última generación de láser pico, con pulsos ultracortos de 250 picosegundos, entre los más cortos de los láseres estéticos, y una potencia pico de hasta 2 GW. Cuanto más corto es el pulso, más puramente fotoacústico es el efecto: el pigmento se fragmenta por una onda de presión y no se “cocina” con calor, en partículas mucho más finas que las de los láseres Q-switched, lo bastante pequeñas para que tus células inmunes las eliminen con eficiencia, en menos sesiones y con menor riesgo de hiperpigmentación postinflamatoria en distintos tipos de piel. Cuatro longitudes de onda (1064 y 532 nm en picosegundos, más los cabezales de colorante de 595 y 660 nm) y siete cabezales cubren melasma, manchas solares e hiperpigmentación postinflamatoria, eliminación de tatuajes multicolor, incluidos rojos, verdes y azules difíciles, y, mediante el cabezal MLA “Pico-Fraxel”, remodelación de colágeno LIOB para cicatrices de acné, poros y textura.",
        "platformTitle": "",
        "platform": [],
        "benefits": [
          {
            "title": "Pulsos de 250 picosegundos",
            "text": "Entre las duraciones de pulso más cortas de los láseres estéticos, aproximadamente la mitad de la de los equipos pico convencionales, para un efecto puramente fotoacústico."
          },
          {
            "title": "Potencia pico de hasta 2 GW",
            "text": "Fragmenta tinta y melanina en partículas mucho más finas que las de los láseres Q-switched, eliminadas más rápido por el cuerpo, en menos sesiones."
          },
          {
            "title": "Más suave con pieles ricas en melanina",
            "text": "Un pulso más corto que el tiempo de relajación de tensión del melanosoma trata el pigmento con mínimo calor colateral y menor riesgo de hiperpigmentación postinflamatoria."
          },
          {
            "title": "Cuatro longitudes de onda, siete cabezales",
            "text": "1064 y 532 nm, más los cabezales de colorante de 595 y 660 nm, cubren pigmento profundo y superficial, tonos vasculares y tatuajes multicolor."
          },
          {
            "title": "Pico-Fraxel para cicatrices y poros",
            "text": "El cabezal MLA concentra la potencia pico en microzonas LIOB que reconstruyen el colágeno, con aproximadamente la mitad del tiempo de recuperación del resurfacing fraccionado tradicional."
          }
        ],
        "indications": [
          "Tratamiento de lesiones pigmentadas",
          "Eliminación de tatuajes multicolor",
          "Rejuvenecimiento de la piel",
          "Tratamiento de cicatrices"
        ],
        "ctaTitle": "¿Es PicoCare adecuado para tu inquietud?",
        "ctaText": "Una consulta determina si un procedimiento láser PicoCare es apropiado para pigmento, tatuajes, textura o cicatrices."
      }
    }
  },
  {
    "slug": "aura3d",
    "title": "Aura 3D",
    "image": "/assets/images/tech/tech-aura3d.jpg",
    "copy": {
      "en": {
        "sub": "Advanced 3D imaging platform for personalized aesthetic consultations and treatment planning.",
        "about": "The Aura 3D is a cutting-edge aesthetic intelligence platform engineered for the modern clinic and powered by Hexagon technology. It combines clinical precision with visual elegance to elevate every consultation. Manufactured in Switzerland, it reflects the precision and innovation for which the country is renowned. With a single capture, the Aura 3D generates a photorealistic digital twin of the patient’s face and neck, instantly analyzing facial structures, skin condition, and volumetric changes. The system bridges the communication gap between patient and practitioner through an immersive shared visual language covering everything from wrinkles and pores to volume loss, facial proportions, and treatment simulations across multiple areas. Advanced tools include 3D skin analysis, before-and-after comparison, precise facial measurements, volume and vector mapping, dynamic drawing and lighting adjustments, and multi-zone treatment simulation, all designed to create clear, confident, and personalized aesthetic journeys for every patient.",
        "platformTitle": "",
        "platform": [],
        "benefits": [
          {
            "title": "See yourself in 3D",
            "text": "A single capture builds a photo-realistic digital twin of your face and neck, wrinkles, pores, pigment, volume and proportions, analyzed instantly."
          },
          {
            "title": "Decide with clarity",
            "text": "Treatment simulations across temples, cheeks, jawline, under-eye and more, up to three approaches per scan, reviewed with your physician before anything is done."
          },
          {
            "title": "Track your real progress",
            "text": "Objective before-and-after comparisons of your own digital twins show volumetric change and lifting effects over time, results you can see, not guess."
          },
          {
            "title": "Swiss-made precision",
            "text": "Engineered by Hexagon in Switzerland, measurement precision trusted in the world’s most exacting industries, applied to your consultation."
          }
        ],
        "indications": [
          "Patients seeking a clear, visual understanding of their skin condition and aging concerns",
          "Consultations requiring precise facial measurements and volumetric assessment",
          "Treatment planning for areas such as temples, cheeks, jawline, chin, and submental region",
          "Anyone who wants to see and understand their options before committing to a treatment plan"
        ],
        "ctaTitle": "See your skin with greater clarity",
        "ctaText": "Aura 3D helps our medical team document your skin and support a personalized consultation and treatment plan."
      },
      "pt": {
        "sub": "Plataforma avançada de imagem 3D para consultas estéticas personalizadas e planejamento de tratamento.",
        "about": "O Aura 3D é uma plataforma de inteligência estética de ponta, projetada para a clínica moderna e baseada na tecnologia Hexagon. Une precisão clínica e elegância visual para elevar cada consulta. Fabricado na Suíça, reflete a precisão e a inovação pelas quais o país é conhecido. Com uma única captura, o Aura 3D gera um gêmeo digital fotorrealista do rosto e do pescoço do paciente, analisando instantaneamente estruturas faciais, condição da pele e alterações volumétricas. O sistema aproxima paciente e profissional por uma linguagem visual imersiva e compartilhada, que vai de rugas e poros a perda de volume, proporções faciais e simulações de tratamento em várias áreas. As ferramentas avançadas incluem análise 3D da pele, comparação de antes e depois, medições faciais precisas, mapeamento de volume e vetores, desenho dinâmico e ajuste de iluminação e simulação de tratamento em múltiplas zonas, tudo para criar jornadas estéticas claras, seguras e personalizadas para cada paciente.",
        "platformTitle": "",
        "platform": [],
        "benefits": [
          {
            "title": "Veja-se em 3D",
            "text": "Uma única captura cria um gêmeo digital fotorrealista do rosto e do pescoço: rugas, poros, pigmento, volume e proporções, analisados instantaneamente."
          },
          {
            "title": "Decida com clareza",
            "text": "Simulações de tratamento em têmporas, maçãs do rosto, mandíbula, região dos olhos e mais, com até três abordagens por escaneamento, revistas com o seu médico antes de qualquer procedimento."
          },
          {
            "title": "Acompanhe o seu progresso real",
            "text": "Comparações objetivas de antes e depois dos seus próprios gêmeos digitais mostram mudanças volumétricas e efeitos de lifting ao longo do tempo: resultados que você vê, e não apenas imagina."
          },
          {
            "title": "Precisão suíça",
            "text": "Desenvolvido pela Hexagon, na Suíça, com uma precisão de medição confiada pelas indústrias mais exigentes do mundo, aplicada à sua consulta."
          }
        ],
        "indications": [
          "Pacientes que buscam uma compreensão visual clara da condição da pele e das queixas de envelhecimento",
          "Consultas que exigem medições faciais precisas e avaliação volumétrica",
          "Planejamento de tratamento para áreas como têmporas, maçãs do rosto, mandíbula, queixo e região submentoniana",
          "Quem quer ver e entender suas opções antes de decidir por um plano de tratamento"
        ],
        "ctaTitle": "Veja a sua pele com mais clareza",
        "ctaText": "O Aura 3D ajuda a nossa equipe médica a documentar a sua pele e apoia uma consulta e um plano de tratamento personalizados."
      },
      "es": {
        "sub": "Plataforma avanzada de imagen 3D para consultas estéticas personalizadas y planificación de tratamientos.",
        "about": "Aura 3D es una plataforma de inteligencia estética de vanguardia, diseñada para la clínica moderna y basada en la tecnología Hexagon. Une precisión clínica y elegancia visual para elevar cada consulta. Fabricada en Suiza, refleja la precisión y la innovación por las que el país es conocido. Con una sola captura, Aura 3D genera un gemelo digital fotorrealista del rostro y el cuello del paciente, analizando al instante las estructuras faciales, el estado de la piel y los cambios volumétricos. El sistema acerca al paciente y al profesional mediante un lenguaje visual inmersivo y compartido, que abarca desde arrugas y poros hasta pérdida de volumen, proporciones faciales y simulaciones de tratamiento en varias zonas. Las herramientas avanzadas incluyen análisis 3D de la piel, comparación de antes y después, mediciones faciales precisas, mapeo de volumen y vectores, dibujo dinámico y ajuste de iluminación, y simulación de tratamiento en múltiples zonas, todo pensado para crear recorridos estéticos claros, seguros y personalizados para cada paciente.",
        "platformTitle": "",
        "platform": [],
        "benefits": [
          {
            "title": "Mírate en 3D",
            "text": "Una sola captura crea un gemelo digital fotorrealista de tu rostro y cuello: arrugas, poros, pigmento, volumen y proporciones, analizados al instante."
          },
          {
            "title": "Decide con claridad",
            "text": "Simulaciones de tratamiento en sienes, pómulos, mandíbula, contorno de ojos y más, con hasta tres enfoques por escaneo, revisadas con tu médico antes de hacer nada."
          },
          {
            "title": "Sigue tu progreso real",
            "text": "Comparaciones objetivas de antes y después de tus propios gemelos digitales muestran el cambio volumétrico y los efectos de lifting con el tiempo: resultados que puedes ver, no adivinar."
          },
          {
            "title": "Precisión suiza",
            "text": "Desarrollado por Hexagon en Suiza, con una precisión de medición en la que confían las industrias más exigentes del mundo, aplicada a tu consulta."
          }
        ],
        "indications": [
          "Pacientes que buscan una comprensión visual clara del estado de su piel y de sus inquietudes por el envejecimiento",
          "Consultas que requieren mediciones faciales precisas y evaluación volumétrica",
          "Planificación de tratamientos para zonas como sienes, pómulos, mandíbula, mentón y región submentoniana",
          "Quienes quieren ver y entender sus opciones antes de decidirse por un plan de tratamiento"
        ],
        "ctaTitle": "Mira tu piel con mayor claridad",
        "ctaText": "Aura 3D ayuda a nuestro equipo médico a documentar tu piel y respalda una consulta y un plan de tratamiento personalizados."
      }
    }
  }
];
