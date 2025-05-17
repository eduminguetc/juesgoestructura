// unit5_questions.js

export const unit5Questions = [
  {
    id: 'u5q1',
    unit: 5,
    questionText: '¿Cuál es la finalidad principal de una estructura en una edificación?',
    options: ['Ser decorativa', 'Generar energía', 'Resistir cargas y transmitirlas al terreno', 'Proporcionar aislamiento acústico'],
    correctAnswerIndex: 2,
    explanation: 'La finalidad principal de una estructura es crear un medio sólido, ordenado y continuo capaz de resistir de forma estable y durable un conjunto de cargas para transmitirlas al terreno.'
  },
  {
    id: 'u5q2',
    unit: 5,
    questionText: 'Las cargas que actúan sobre un área muy pequeña y se representan como un punto se denominan:',
    options: ['Cargas lineales', 'Cargas superficiales', 'Cargas puntuales', 'Cargas dinámicas'],
    correctAnswerIndex: 2,
    explanation: 'Las cargas puntuales, también conocidas como concentradas, son aquellas que actúan sobre un área específica del elemento, pero se representan como si actuaran sobre un punto.'
  },
  {
    id: 'u5q3',
    unit: 5,
    questionText: 'Según su variación en el tiempo, el peso propio de una estructura se considera una acción:',
    options: ['Variable (Q)', 'Accidental (A)', 'Permanente (G)', 'Dinámica'],
    correctAnswerIndex: 2,
    explanation: 'Las acciones permanentes (G) son aquellas que trabajan en todo momento sobre la construcción con posición constante, como el peso propio de los elementos estructurales.'
  },
  {
    id: 'u5q4',
    unit: 5,
    questionText: 'El CTE DB-SE-AE establece valores característicos para la sobrecarga de uso en función de:',
    options: ['El material de la estructura', 'La categoría de uso del edificio', 'La altura total del edificio', 'El tipo de cimentación'],
    correctAnswerIndex: 1,
    explanation: 'En función del uso del edificio, se establecen unos valores característicos de la sobrecarga de uso en la Tabla 3.1 del CTE DB SE-AE (ej. residencial, comercial, etc.).'
  },
  {
    id: 'u5q5',
    unit: 5,
    questionText: 'La acción del viento sobre una edificación se calcula generalmente como $q_e = q_b \cdot c_e \cdot c_p$. ¿Qué representa $c_e$?',
    options: ['Coeficiente eólico', 'Presión dinámica del viento', 'Coeficiente de exposición', 'Carga de nieve'],
    correctAnswerIndex: 2,
    explanation: 'En la fórmula de la acción del viento, $q_b$ es la presión dinámica, $c_e$ es el coeficiente de exposición (depende de la altura y entorno), y $c_p$ es el coeficiente eólico o de presión.'
  },
  {
    id: 'u5q6',
    unit: 5,
    questionText: '¿Para qué se disponen las juntas de dilatación en las construcciones?',
    options: ['Para aumentar la rigidez', 'Para facilitar el paso de instalaciones', 'Para disminuir efectos de variación de temperatura', 'Para mejorar la estética'],
    correctAnswerIndex: 2,
    explanation: 'Las juntas de dilatación se disponen para disminuir las variaciones de dimensiones debidas a la dilatación y contracción térmica, evitando esfuerzos excesivos.'
  },
  {
    id: 'u5q7',
    unit: 5,
    questionText: 'La normativa española que regula el diseño frente a acciones sísmicas es:',
    options: ['CTE DB-SI', 'Código Estructural', 'NCSE-02', 'CTE DB-SE-AE'],
    correctAnswerIndex: 2,
    explanation: 'Las acciones sísmicas se regulan en la Norma de Construcción Sismorresistente (NCSE-02): parte general y edificación.'
  },
  {
    id: 'u5q8',
    unit: 5,
    questionText: 'Cuando un elemento estructural está sometido simultáneamente a varios esfuerzos simples, se dice que sufre esfuerzos:',
    options: ['Compuestos', 'Unitarios', 'Críticos', 'Nulos'],
    correctAnswerIndex: 0,
    explanation: 'El esfuerzo compuesto supone que una pieza se someta de forma simultánea a varios esfuerzos simples (ej. flexión y compresión, conocido como flexocompresión).'
  },
  {
    id: 'u5q9',
    unit: 5,
    questionText: 'Los Estados Límite Últimos (ELU) se refieren a situaciones que comprometen la...',
    options: ['Comodidad de los usuarios', 'Estética del edificio', 'Resistencia y estabilidad de la estructura', 'Durabilidad de los acabados'],
    correctAnswerIndex: 2,
    explanation: 'Los Estados Límite Últimos (ELU) están relacionados con la capacidad resistente de la estructura, su estabilidad y el riesgo de colapso.'
  },
  {
    id: 'u5q10',
    unit: 5,
    questionText: 'La propiedad de un material para soportar grandes deformaciones plásticas sin fallar se llama:',
    options: ['Dureza', 'Fragilidad', 'Elasticidad', 'Ductilidad'],
    correctAnswerIndex: 3,
    explanation: 'La ductilidad es la propiedad que tiene un material para soportar grandes deformaciones sin fallar bajo esfuerzos de tensión altos. Es opuesta a la fragilidad.'
  },
  {
    id: 'u5q11',
    unit: 5,
    questionText: 'El Módulo de Young (E) de un material es una medida de su:',
    options: ['Densidad', 'Resistencia a la tracción', 'Rigidez axial', 'Tenacidad'],
    correctAnswerIndex: 2,
    explanation: 'El Módulo de Young (E) es la tensión que se necesita para producir la deformación unitaria en la zona elástica; representa la rigidez del material a esfuerzos axiales.'
  },
  {
    id: 'u5q12',
    unit: 5,
    questionText: 'Los coeficientes de seguridad ($\gamma_f$ para acciones, $\gamma_m$ para materiales) se utilizan para:',
    options: ['Reducir el coste de la estructura', 'Aumentar la velocidad de construcción', 'Cubrir incertidumbres y asegurar fiabilidad', 'Simplificar los cálculos'],
    correctAnswerIndex: 2,
    explanation: 'Los coeficientes de seguridad mayoran las acciones y minoran las resistencias para cubrir las diversas incertidumbres en el cálculo y ejecución, garantizando un margen de seguridad.'
  },
  {
    id: 'u5q13',
    unit: 5,
    questionText: 'Un sistema estructural formado por la repetición de pilares y vigas unidos entre sí se denomina:',
    options: ['Sistema masivo', 'Sistema laminar', 'Sistema de pórticos', 'Sistema colgante'],
    correctAnswerIndex: 2,
    explanation: 'El sistema estructural de pórticos es el más empleado actualmente y se realiza a base de la repetición de elementos verticales (pilares) y horizontales (vigas y forjados) que forman un entramado.'
  },
  {
    id: 'u5q14',
    unit: 5,
    questionText: 'La deformación de un voladizo (viga empotrada en un extremo) aumenta exponencialmente con:',
    options: ['Su canto', 'La rigidez del material', 'La longitud del voladizo', 'La carga en el empotramiento'],
    correctAnswerIndex: 2,
    explanation: 'La deformación del extremo volado se incrementa de manera exponencial cuando la longitud libre del voladizo se alarga (proporcional a $L^3$ o $L^4$ según el tipo de carga).'
  },
  {
    id: 'u5q15',
    unit: 5,
    questionText: 'Una cubierta con una pendiente inferior al 5% se considera generalmente una cubierta:',
    options: ['Inclinada', 'Plana', 'A dos aguas', 'Ventilada'],
    correctAnswerIndex: 1,
    explanation: 'Las cubiertas planas se refieren a cubiertas sensiblemente horizontales con una pendiente inferior al 5%, necesaria para la evacuación del agua hacia los sumideros.'
  },
  {
    id: 'u5q16',
    unit: 5,
    questionText: 'En la estructura de un puente, los elementos que transmiten las cargas de la superestructura al terreno se denominan:',
    options: ['Tablero', 'Superestructura', 'Subestructura (estribos y pilas)', 'Tirantes'],
    correctAnswerIndex: 2,
    explanation: 'La subestructura o infraestructura de un puente comprende todos aquellos elementos concebidos para transmitir las cargas de la superestructura y apoyar el puente, como estribos, pilas y cimentaciones.'
  },
  {
    id: 'u5q17',
    unit: 5,
    questionText: 'Un puente donde el tablero cuelga de cables principales anclados en los extremos y apoyados en torres altas es un puente:',
    options: ['De arco', 'Atirantado', 'Colgante', 'De viga'],
    correctAnswerIndex: 2,
    explanation: 'Un puente colgante soporta el peso del puente mediante cables principales tensados, suspendidos por torres y anclados en los extremos. Es adecuado para luces muy grandes.'
  },
  {
    id: 'u5q18',
    unit: 5,
    questionText: '¿Cuál de las siguientes NO es una cualidad principal de una estructura?',
    options: ['Estabilidad', 'Resistencia', 'Flexibilidad ilimitada', 'Durabilidad'],
    correctAnswerIndex: 2,
    explanation: 'Las cualidades principales de una estructura son: estabilidad, resistencia, rigidez (control de deformaciones) y durabilidad. Una flexibilidad ilimitada no es deseable.'
  },
  {
    id: 'u5q19',
    unit: 5,
    questionText: 'Las cargas que varían rápidamente en el tiempo o se aplican bruscamente se clasifican como:',
    options: ['Cargas muertas', 'Cargas estáticas', 'Cargas vivas (o dinámicas)', 'Cargas permanentes'],
    correctAnswerIndex: 2,
    explanation: 'Las cargas vivas o dinámicas varían rápidamente, por lo que pueden generar movimientos y vibraciones en las estructuras. Su valor varía con rapidez o se aplica de forma brusca.'
  },
  {
    id: 'u5q20',
    unit: 5,
    questionText: 'La acción del "pretensado" en una estructura de hormigón es una acción de tipo:',
    options: ['Variable', 'Accidental', 'Permanente', 'Térmica'],
    correctAnswerIndex: 2,
    explanation: 'El pretensado es una acción permanente (G) que se introduce en la estructura para mejorar su comportamiento, definida en el Código Estructural.'
  },
  {
    id: 'u5q21',
    unit: 5,
    questionText: 'Para viviendas, el CTE DB SE-AE permite considerar el peso propio de la tabiquería ligera como una carga de:',
    options: ['0.5 kN/m²', '1.0 kN/m²', '2.0 kN/m²', 'Variable según el número de habitaciones'],
    correctAnswerIndex: 1,
    explanation: 'En el caso de viviendas, la norma indica que solo es necesario considerar el peso propio de la tabiquería de 1,0 kN por cada m² de superficie construida, si es ligera y homogénea.'
  },
  {
    id: 'u5q22',
    unit: 5,
    questionText: 'La resistencia de un material a ser rayado o penetrado se conoce como:',
    options: ['Tenacidad', 'Ductilidad', 'Dureza', 'Elasticidad'],
    correctAnswerIndex: 2,
    explanation: 'La dureza es la característica que se opone a la alteración física del material, como el rayado, la penetración o el desgaste.'
  },
  {
    id: 'u5q23',
    unit: 5,
    questionText: 'Un material que se rompe fácilmente sin apenas deformarse es:',
    options: ['Dúctil', 'Tenaz', 'Frágil', 'Plástico'],
    correctAnswerIndex: 2,
    explanation: 'Un material frágil se fractura y rompe fácilmente debido a una nula o muy baja capacidad de deformación plástica. Es el opuesto a la tenacidad y ductilidad.'
  },
  {
    id: 'u5q24',
    unit: 5,
    questionText: 'El proceso de dimensionado estructural que se realiza estimando dimensiones y luego verificándolas se conoce como diseño y posterior...:',
    options: ['Análisis estructural', 'Construcción directa', 'Prueba de carga', 'Demolición'],
    correctAnswerIndex: 0,
    explanation: 'El diseño estructural implica una estimación inicial de dimensiones. Posteriormente, se realiza el análisis estructural para verificar si esas dimensiones cumplen con los requisitos de resistencia y servicio.'
  },
  {
    id: 'u5q25',
    unit: 5,
    questionText: 'Un sistema estructural formado por elementos delgados y curvos que actúan como soporte y cerramiento es un sistema:',
    options: ['Masivo', 'De pórticos', 'Laminar o superficial', 'Hinchable'],
    correctAnswerIndex: 2,
    explanation: 'El sistema estructural laminar o superficial está constituido por paneles resistentes y delgados que adquieren una curvatura (cáscaras, cúpulas), actuando como soporte y cerramiento.'
  },
  {
    id: 'u5q26',
    unit: 5,
    questionText: 'Las cerchas son un ejemplo de sistema estructural:',
    options: ['Abovedado', 'Colgante', 'Triangulado', 'Laminar'],
    correctAnswerIndex: 2,
    explanation: 'El sistema estructural triangulado se construye mediante la unión de elementos lineales que forman triángulos, como es el caso de las cerchas.'
  },
  {
    id: 'u5q27',
    unit: 5,
    questionText: 'En una cubierta plana, la capa que impide el paso del agua es la capa:',
    options: ['De pendientes', 'Aislante térmica', 'Impermeabilizante', 'De protección pesada'],
    correctAnswerIndex: 2,
    explanation: 'La capa impermeabilizante es esencial en las cubiertas planas para evitar filtraciones de agua al interior del edificio.'
  },
  {
    id: 'u5q28',
    unit: 5,
    questionText: 'Un puente atirantado se caracteriza porque el tablero cuelga de cables rectos (tirantes) anclados a:',
    options: ['Los estribos únicamente', 'El fondo del valle', 'Una o varias torres', 'Otros puentes cercanos'],
    correctAnswerIndex: 2,
    explanation: 'En un puente atirantado, el tablero está suspendido de cables rectos (tirantes) que están anclados a una o varias torres, las cuales transmiten las cargas al terreno.'
  },
  {
    id: 'u5q29',
    unit: 5,
    questionText: '¿Qué tipo de acción es un impacto de un vehículo contra un pilar de un aparcamiento?',
    options: ['Acción permanente', 'Acción variable de uso', 'Acción accidental', 'Acción térmica'],
    correctAnswerIndex: 2,
    explanation: 'El impacto de un vehículo se considera una acción accidental, ya que tiene poca probabilidad de que suceda pero sus efectos pueden ser importantes.'
  },
  {
    id: 'u5q30',
    unit: 5,
    questionText: 'La "fatiga" en un material estructural se refiere al daño causado por:',
    options: ['Una sola carga muy elevada', 'Temperaturas extremas', 'Cargas variables y repetitivas', 'Corrosión química'],
    correctAnswerIndex: 2,
    explanation: 'La fatiga es el daño inferior al de rotura ocasionado en los elementos al someterse a cargas variables y repetitivas a lo largo del tiempo.'
  },
  {
    id: 'u5q31',
    unit: 5,
    questionText: '¿Cuál de las siguientes NO es una acción permanente (G)?',
    options: ['Peso propio de la estructura', 'Sobrecarga de nieve', 'Empuje del terreno', 'Fuerza de pretensado'],
    correctAnswerIndex: 1,
    explanation: 'La sobrecarga de nieve es una acción variable (Q), ya que su magnitud depende de las condiciones climáticas y no actúa de forma constante.'
  },
  {
    id: 'u5q32',
    unit: 5,
    questionText: 'El coeficiente de Poisson (ν) mide:',
    options: ['La resistencia al corte', 'El estrechamiento de una sección al ser estirada', 'La dilatación térmica', 'La capacidad de absorber energía'],
    correctAnswerIndex: 1,
    explanation: 'El coeficiente de Poisson mide el estrechamiento (deformación transversal) de una sección prismática cuando es estirada o comprimida longitudinalmente.'
  },
  {
    id: 'u5q33',
    unit: 5,
    questionText: 'Un sistema estructural "hinchable" se autosostiene mediante:',
    options: ['Arcos de compresión', 'Cables de tracción', 'Gas comprimido entre membranas', 'Muros de carga masivos'],
    correctAnswerIndex: 2,
    explanation: 'El sistema estructural hinchable funciona con la impulsión de un gas comprimido bajo presión entre membranas (tela, plástico), que se estiran y se autosostienen.'
  },
  {
    id: 'u5q34',
    unit: 5,
    questionText: 'La "superestructura" de un puente incluye principalmente:',
    options: ['Los cimientos y las pilas', 'Solo los estribos', 'El tablero y la estructura portante principal', 'Las rampas de acceso'],
    correctAnswerIndex: 2,
    explanation: 'La superestructura de un puente son aquellos elementos concebidos para salvar el obstáculo, incluyendo el tablero (por donde se circula) y la estructura portante principal (vigas, arcos, cables, etc.).'
  },
  {
    id: 'u5q35',
    unit: 5,
    questionText: '¿Cuál es la unidad de medida habitual para las tensiones en el cálculo estructural?',
    options: ['kN (kilonewton)', 'kN·m (kilonewton metro)', 'N/mm² (Newton por milímetro cuadrado) o MPa', 'kg/m³ (kilogramo por metro cúbico)'],
    correctAnswerIndex: 2,
    explanation: 'Las tensiones (esfuerzo por unidad de área) se miden comúnmente en N/mm² (Newton por milímetro cuadrado), que es equivalente a MPa (Megapascales).'
  },
  {
    id: 'u5q36',
    unit: 5,
    questionText: 'El CTE DB-SI se refiere a la seguridad estructural en caso de:',
    options: ['Sismo', 'Viento extremo', 'Impacto', 'Incendio'],
    correctAnswerIndex: 3,
    explanation: 'El CTE DB-SI es el Documento Básico de Seguridad en caso de Incendio, y establece los requisitos para la resistencia al fuego de la estructura, entre otros aspectos.'
  },
  {
    id: 'u5q37',
    unit: 5,
    questionText: 'En las combinaciones de acciones, ¿qué se hace con la acción variable considerada "dominante"?',
    options: ['Se ignora', 'Se multiplica por un coeficiente de seguridad mayor', 'Se divide por dos', 'Se considera con su valor característico completo'],
    correctAnswerIndex: 1, // O la opción D si se refiere a antes de aplicar el coef de seguridad. El texto dice "multiplicando el valor por el coeficiente que designa la norma"
    explanation: 'En las combinaciones de acciones, una de las acciones variables se considera como dominante y se aplica con su valor más desfavorable (multiplicada por su coeficiente de seguridad), mientras las otras variables acompañantes se consideran con valores reducidos por coeficientes de simultaneidad.'
  },
  {
    id: 'u5q38',
    unit: 5,
    questionText: 'Un sistema estructural "masivo" se caracteriza por el uso de:',
    options: ['Elementos ligeros y esbeltos', 'Cables y membranas tensadas', 'Muros portantes de gran espesor', 'Pórticos de acero'],
    correctAnswerIndex: 2,
    explanation: 'El sistema estructural masivo se construye con elementos a base de muros portantes de gran espesor, bien sea de mampostería, ladrillo, bloque u hormigón, resultando en estructuras muy pesadas.'
  },
  {
    id: 'u5q39',
    unit: 5,
    questionText: '¿Qué elemento de una cubierta inclinada permite recolectar el agua de lluvia y distribuirla hacia las bajantes?',
    options: ['Cumbrera', 'Limatesa', 'Canalón', 'Lucernario'],
    correctAnswerIndex: 2,
    explanation: 'Los canalones son conductos dispuestos en el borde inferior de los faldones de una cubierta inclinada para recoger el agua de lluvia y conducirla hacia las bajantes.'
  },
  {
    id: 'u5q40',
    unit: 5,
    questionText: 'Un puente de "viga" es más adecuado para salvar:',
    options: ['Luces muy grandes (>200m)', 'Luces pequeñas a moderadas', 'Valles muy profundos', 'Obstáculos con fuertes corrientes de agua'],
    correctAnswerIndex: 1,
    explanation: 'Los puentes tipo viga son soluciones estructurales básicas y económicas para salvar distancias (luces) limitadas o moderadas, ya que su eficiencia disminuye con luces muy grandes.'
  }
];

