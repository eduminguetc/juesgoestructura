// unit1_questions.js

export const unit1Questions = [
  {
    id: 'u1q1',
    unit: 1,
    questionText: '¿Qué rama de la mecánica estudia las condiciones de equilibrio de los cuerpos bajo la acción de fuerzas?',
    options: ['Dinámica', 'Cinemática', 'Estática', 'Termodinámica'],
    correctAnswerIndex: 2,
    explanation: 'La estática es la rama de la mecánica que estudia las condiciones de equilibrio de los cuerpos, ya sea en reposo (equilibrio estático) o en movimiento rectilíneo uniforme (equilibrio cinético).'
  },
  {
    id: 'u1q2',
    unit: 1,
    questionText: 'Para simplificar el estudio estructural, se utiliza el modelo de...',
    options: ['Cuerpo elástico', 'Sólido rígido', 'Fluido ideal', 'Partícula puntual'],
    correctAnswerIndex: 1,
    explanation: 'En el estudio estructural se utiliza el modelo de sólido rígido, que asume que las distancias entre las partículas internas del cuerpo no cambian (no se deforma).'
  },
  {
    id: 'u1q3',
    unit: 1,
    questionText: '¿Cuál NO es una cantidad básica fundamental en la estática mencionada en la unidad?',
    options: ['Longitud', 'Masa', 'Velocidad', 'Fuerza'],
    correctAnswerIndex: 2,
    explanation: 'Las cantidades básicas mencionadas para comprender la estática son: longitud, masa, tiempo y fuerza. La velocidad es una cantidad derivada.'
  },
  {
    id: 'u1q4',
    unit: 1,
    questionText: 'Una fuerza se caracteriza por tener un punto de aplicación, una magnitud o módulo y una...',
    options: ['Temperatura', 'Dirección', 'Densidad', 'Carga eléctrica'],
    correctAnswerIndex: 1,
    explanation: 'La fuerza, al ser vectorial, se caracteriza por tener un punto de aplicación, una magnitud o módulo y una dirección (que incluye un sentido).'
  },
  {
    id: 'u1q5',
    unit: 1,
    questionText: 'La suma vectorial de todas las fuerzas que actúan sobre un cuerpo se denomina:',
    options: ['Fuerza normal', 'Fuerza de fricción', 'Fuerza neta', 'Fuerza equivalente'],
    correctAnswerIndex: 3,
    explanation: 'La fuerza equivalente, también conocida como resultante, es la suma vectorial de todas las fuerzas que actúan sobre un cuerpo o partícula.'
  },
  {
    id: 'u1q6',
    unit: 1,
    questionText: 'Para que una estructura inmóvil esté en equilibrio estático, la suma de todas las fuerzas aplicadas debe ser nula y...',
    options: ['La suma de momentos debe ser máxima', 'La suma de momentos debe ser nula', 'La energía cinética debe ser constante', 'La aceleración debe ser positiva'],
    correctAnswerIndex: 1,
    explanation: 'Las condiciones de equilibrio estático son: 1. La suma de todas las fuerzas (acciones y reacciones) debe ser nula ($\sum F = 0$). 2. La suma de los momentos de todas las fuerzas respecto a cualquier punto debe ser nula ($\sum M = 0$).'
  },
  {
    id: 'u1q7',
    unit: 1,
    questionText: 'El proceso de proyectar una fuerza sobre los ejes X e Y para obtener sus componentes se llama:',
    options: ['Composición de fuerzas', 'Equilibrio de fuerzas', 'Descomposición de fuerzas', 'Transmisibilidad de fuerzas'],
    correctAnswerIndex: 2,
    explanation: 'La descomposición de fuerzas consiste en dibujar las proyecciones en los ejes X e Y de una fuerza, transformándolas en otras dos que son perpendiculares entre sí.'
  },
  {
    id: 'u1q8',
    unit: 1,
    questionText: '¿Cuántos grados de libertad tiene un cuerpo en el plano (2D)?',
    options: ['1', '2', '3', '6'],
    correctAnswerIndex: 2,
    explanation: 'Un cuerpo en el plano tiene 3 grados de libertad: dos de desplazamiento (en X y en Y) y uno de giro.'
  },
  {
    id: 'u1q9',
    unit: 1,
    questionText: 'La fuerza perpendicular que ejerce una superficie sobre un objeto apoyado en ella se conoce como:',
    options: ['Fuerza de tensión', 'Fuerza normal', 'Fuerza de empuje', 'Fuerza cortante'],
    correctAnswerIndex: 1,
    explanation: 'La fuerza normal es la fuerza perpendicular que ejerce una superficie sobre un objeto apoyado en ella.'
  },
  {
    id: 'u1q10',
    unit: 1,
    questionText: 'El principio que establece que la resultante de dos fuerzas aplicadas en un punto es la diagonal del paralelogramo formado por ellas es el de:',
    options: ['Acción-Reacción', 'Transmisibilidad', 'Equilibrio', 'Paralelogramo de fuerzas'],
    correctAnswerIndex: 3,
    explanation: 'El Principio del paralelogramo de fuerzas indica que si dos fuerzas están aplicadas a un cuerpo en un punto, su acción es equivalente a la de una única fuerza, obtenida como diagonal del paralelogramo construido sobre ellas.'
  },
  {
    id: 'u1q11',
    unit: 1,
    questionText: 'Según el Principio de Acción-Reacción, toda acción sobre un cuerpo provoca una reacción de:',
    options: ['Igual magnitud y mismo sentido', 'Menor magnitud y sentido opuesto', 'Igual magnitud y sentido opuesto', 'Mayor magnitud y mismo sentido'],
    correctAnswerIndex: 2,
    explanation: 'El Principio de Acción-Reacción (3ª Ley de Newton) establece que toda acción (fuerza) sobre un cuerpo provoca una reacción (fuerza) igual en magnitud y de sentido contrario sobre el mismo cuerpo.'
  },
  {
    id: 'u1q12',
    unit: 1,
    questionText: 'El efecto externo de una fuerza sobre un sólido rígido no cambia si la fuerza se traslada a lo largo de su línea de acción. Esto se conoce como Principio de:',
    options: ['Inercia', 'Transmisibilidad', 'Superposición', 'Conservación'],
    correctAnswerIndex: 1,
    explanation: 'El Principio de Transmisibilidad enuncia que cuando actúa una fuerza sobre un punto de un sólido rígido existirá otra equivalente, siempre que tengan la misma magnitud y misma dirección, pero aplicadas en un punto distinto del sólido rígido sobre la misma línea de acción.'
  },
  {
    id: 'u1q13',
    unit: 1,
    questionText: 'Las fuerzas que otros cuerpos ejercen sobre el cuerpo estudiado y determinan su estado de reposo o movimiento se denominan:',
    options: ['Fuerzas internas', 'Fuerzas de cohesión', 'Fuerzas externas', 'Fuerzas ficticias'],
    correctAnswerIndex: 2,
    explanation: 'Las fuerzas externas son las acciones que otros cuerpos ejercen sobre un cuerpo determinado; el comportamiento exterior (sea de reposo o de movimiento) del cuerpo depende de estas fuerzas.'
  },
  {
    id: 'u1q14',
    unit: 1,
    questionText: '¿Qué tipo de momento mide la distribución de una masa o área respecto a un eje y sirve para localizar el centroide, sin producir giro por sí mismo?',
    options: ['Momento de inercia', 'Momento flector', 'Momento estático', 'Momento torsor'],
    correctAnswerIndex: 2,
    explanation: 'El momento estático (o de primer orden) de un área o masa es el producto de dicha masa/área por la distancia de su centroide al eje establecido. Sirve para localizar el centro de masas y no produce giro.'
  },
  {
    id: 'u1q15',
    unit: 1,
    questionText: 'La Primera Ley de Newton, o Ley de la Inercia, establece que si la fuerza resultante sobre un cuerpo es cero, el cuerpo...',
    options: ['Acelera uniformemente', 'Permanece en reposo o en MRU', 'Describe un movimiento circular', 'Se detiene instantáneamente'],
    correctAnswerIndex: 1,
    explanation: 'La Primera Ley de Newton dice que cuando la fuerza resultante que actúa sobre un cuerpo es igual a cero, dicho cuerpo permanecerá en reposo o en movimiento rectilíneo uniforme (MRU).'
  },
  {
    id: 'u1q16',
    unit: 1,
    questionText: 'Una estructura isostática en el plano tiene...',
    options: ['2 reacciones', '3 reacciones', '4 reacciones', '6 reacciones'],
    correctAnswerIndex: 1,
    explanation: 'Las estructuras isostáticas en el plano tienen 3 reacciones, que es el número justo de enlaces para restringir su movimiento y cuyas reacciones se pueden calcular usando solo las ecuaciones de la estática.'
  },
  {
    id: 'u1q17',
    unit: 1,
    questionText: '¿Cuál de las siguientes NO es una ecuación fundamental del equilibrio en el plano (2D)?',
    options: ['∑Fx = 0', '∑Fy = 0', '∑Fz = 0', '∑M = 0'],
    correctAnswerIndex: 2,
    explanation: 'Las ecuaciones fundamentales del equilibrio en el plano son: ∑Fx = 0, ∑Fy = 0, y ∑M = 0. La ecuación ∑Fz = 0 pertenece al equilibrio en el espacio (3D).'
  },
  {
    id: 'u1q18',
    unit: 1,
    questionText: 'Las fuerzas que actúan sobre una longitud o área específica, como el peso de la nieve sobre un tejado, se denominan:',
    options: ['Fuerzas puntuales', 'Fuerzas de impacto', 'Fuerzas distribuidas', 'Fuerzas concentradas'],
    correctAnswerIndex: 2,
    explanation: 'Las fuerzas distribuidas son fuerzas que actúan sobre un área o longitud específica, no en un solo punto. Ejemplos incluyen el peso de la nieve o el peso propio de una viga.'
  },
  {
    id: 'u1q19',
    unit: 1,
    questionText: 'El punto donde se considera concentrado todo el peso de un cuerpo se llama:',
    options: ['Centro de presión', 'Centro de masas', 'Centro de gravedad', 'Punto de equilibrio inestable'],
    correctAnswerIndex: 2,
    explanation: 'El centro de gravedad (CG) o centroide es el punto de la partícula en donde actúa la fuerza de gravedad neta; es el punto donde se encuentra localizado el peso total del cuerpo.'
  },
  {
    id: 'u1q20',
    unit: 1,
    questionText: 'En un objeto simétrico y homogéneo, el centro de gravedad coincide con el...',
    options: ['Punto más bajo', 'Centro geométrico', 'Punto más pesado', 'Borde exterior'],
    correctAnswerIndex: 1,
    explanation: 'Para un objeto de forma simétrica y homogénea, el centro de gravedad está localizado en el centro geométrico que será la intersección de sus ejes.'
  },
  {
    id: 'u1q21',
    unit: 1,
    questionText: '¿Qué propiedad geométrica de una sección transversal mide su resistencia a la flexión o torsión?',
    options: ['Área', 'Perímetro', 'Momento estático', 'Momento de inercia'],
    correctAnswerIndex: 3,
    explanation: 'El momento de inercia (o segundo momento de área) es una propiedad de la sección transversal de los elementos estructurales que mide su resistencia a la flexión o torsión.'
  },
  {
    id: 'u1q22',
    unit: 1,
    questionText: 'El momento de inercia de una masa puntual se calcula como:',
    options: ['M / r²', 'M * r', 'M * r²', 'M² * r'],
    correctAnswerIndex: 2,
    explanation: 'La fórmula para el cálculo de momento de inercia de una masa puntual es I = M * r², donde M es la masa y r es la distancia de la masa puntual al eje de referencia.'
  },
  {
    id: 'u1q23',
    unit: 1,
    questionText: 'Una viga con mayor momento de inercia (I) tendrá...',
    options: ['Menor resistencia a la flexión', 'Mayor resistencia a la flexión', 'Igual resistencia que una con menor I', 'Mayor peso necesariamente'],
    correctAnswerIndex: 1,
    explanation: 'A mayor momento de inercia, mayor es la resistencia del elemento a la flexión. Esto significa que, a igualdad de material, una sección con mayor I se deformará menos o soportará más carga antes de fallar por flexión.'
  },
  {
    id: 'u1q24',
    unit: 1,
    questionText: '¿Cuál es la unidad de medida de la fuerza en el Sistema Internacional (S.I.)?',
    options: ['Kilogramo (kg)', 'Metro (m)', 'Segundo (s)', 'Newton (N)'],
    correctAnswerIndex: 3,
    explanation: 'En el Sistema Internacional (S.I.), la fuerza se mide en Newton (N).'
  },
  {
    id: 'u1q25',
    unit: 1,
    questionText: 'El equilibrio cinético se refiere a un cuerpo que está...',
    options: ['En reposo absoluto', 'Acelerando constantemente', 'En movimiento rectilíneo uniforme', 'Rotando a velocidad variable'],
    correctAnswerIndex: 2,
    explanation: 'La estática estudia los cuerpos en equilibrio, ya sea en reposo (equilibrio estático) o en movimiento rectilíneo uniforme (equilibrio cinético).'
  },
  {
    id: 'u1q26',
    unit: 1,
    questionText: 'Las fuerzas internas en una estructura son aquellas que...',
    options: ['Provienen del exterior del cuerpo', 'Mantienen unidas las partículas del cuerpo', 'Causan el movimiento del cuerpo', 'Son siempre iguales a cero'],
    correctAnswerIndex: 1,
    explanation: 'Las fuerzas internas representan las fuerzas de unión de las partículas que forman un cuerpo rígido. Si una estructura se encuentra constituida por distintas partes, las fuerzas que unen estas partes también se consideran internas.'
  },
  {
    id: 'u1q27',
    unit: 1,
    questionText: '¿Qué tipo de movimiento puede generar una fuerza externa sobre un cuerpo si no hay oposición?',
    options: ['Solo traslación', 'Solo rotación', 'Traslación, rotación o ambas', 'Ningún movimiento'],
    correctAnswerIndex: 2,
    explanation: 'Cada una de las fuerzas externas que actúan sobre un cuerpo pueden generar movimientos de traslación, rotación o ambos, si no encuentran oposición.'
  },
  {
    id: 'u1q28',
    unit: 1,
    questionText: 'Si el momento estático de un área respecto a un eje es nulo, significa que el eje pasa por...',
    options: ['El borde del área', 'Un punto exterior al área', 'El centroide del área', 'Un punto aleatorio'],
    correctAnswerIndex: 2,
    explanation: 'Si el momento estático es nulo, se está realizando el cálculo en el centro de masa (o centroide para un área) del cuerpo respecto a ese eje.'
  },
  {
    id: 'u1q29',
    unit: 1,
    questionText: 'Una estructura con más enlaces (apoyos) de los estrictamente necesarios para su estabilidad se denomina:',
    options: ['Isostática', 'Hipostática', 'Hiperestática', 'Isoelástica'],
    correctAnswerIndex: 2,
    explanation: 'Cuando el número de incógnitas (reacciones) es mayor de las que se pueden resolver con las ecuaciones de la estática (3 en el plano, 6 en el espacio), hablamos de un sistema hiperestático.'
  },
  {
    id: 'u1q30',
    unit: 1,
    questionText: '¿Para qué se idealizan los cuerpos como "sólidos rígidos" en la mecánica elemental?',
    options: ['Para estudiar sus deformaciones', 'Para simplificar los problemas de equilibrio', 'Porque los cuerpos reales no se deforman', 'Para analizar su comportamiento térmico'],
    correctAnswerIndex: 1,
    explanation: 'En la mecánica elemental se suponen muchos de los cuerpos como rígidos e indeformables para poder simplificar los problemas de equilibrio. En la realidad, las estructuras se deforman.'
  },
  {
    id: 'u1q31',
    unit: 1,
    questionText: '¿Cuál de estos principios es fundamental para entender las reacciones en los apoyos de una estructura?',
    options: ['Principio de Arquímedes', 'Principio de Pascal', 'Principio de Acción-Reacción', 'Principio de Bernoulli'],
    correctAnswerIndex: 2,
    explanation: 'El Principio de Acción-Reacción (Tercera Ley de Newton) es fundamental, ya que las reacciones en los apoyos son las fuerzas que estos ejercen sobre la estructura para contrarrestar las acciones (cargas) y mantener el equilibrio.'
  },
  {
    id: 'u1q32',
    unit: 1,
    questionText: 'La capacidad de una fuerza para hacer girar un cuerpo alrededor de un eje se denomina:',
    options: ['Trabajo', 'Potencia', 'Momento de una fuerza', 'Impulso'],
    correctAnswerIndex: 2,
    explanation: 'Un momento (de una fuerza) es la resultante de una fuerza por una distancia, lo cual hace girar elementos en torno a un eje o punto.'
  },
  {
    id: 'u1q33',
    unit: 1,
    questionText: 'El momento de inercia de un cuerpo depende de la geometría del cuerpo y de...',
    options: ['Las fuerzas que actúan sobre él', 'La posición del eje de rotación', 'La temperatura del cuerpo', 'La velocidad del cuerpo'],
    correctAnswerIndex: 1,
    explanation: 'El momento de inercia depende de la distribución de la masa (o área) en un cuerpo, de la geometría del cuerpo y de la posición del eje de rotación, pero no depende de las fuerzas que intervienen en el movimiento.'
  },
  {
    id: 'u1q34',
    unit: 1,
    questionText: 'En una viga sometida a flexión, las tensiones máximas de tracción suelen producirse en...',
    options: ['El eje neutro', 'El cordón superior', 'El cordón inferior', 'Los apoyos'],
    correctAnswerIndex: 2,
    explanation: 'En una viga simplemente apoyada con carga hacia abajo, la flexión ocasiona tensiones de tracción en el cordón inferior (sus fibras se alargan) y de compresión en el cordón superior.'
  },
  {
    id: 'u1q35',
    unit: 1,
    questionText: '¿Qué es la "fuerza normal" en el contexto de un objeto apoyado sobre una superficie inclinada?',
    options: ['La componente del peso paralela al plano', 'La fuerza de rozamiento', 'La fuerza perpendicular a la superficie de apoyo', 'La resultante de todas las fuerzas'],
    correctAnswerIndex: 2,
    explanation: 'La fuerza normal se refiere a la fuerza perpendicular a la superficie donde se encuentra apoyado el objeto, independientemente de si el plano es horizontal o inclinado.'
  },
  {
    id: 'u1q36',
    unit: 1,
    questionText: 'Un cuerpo en el espacio (3D) tiene ¿cuántos grados de libertad de movimiento?',
    options: ['2', '3', '4', '6'],
    correctAnswerIndex: 3,
    explanation: 'Un cuerpo en el espacio tiene 6 grados de libertad con respecto a su movilidad: 3 desplazamientos (según los ejes X, Y, Z) y 3 giros (alrededor de los ejes X, Y, Z).'
  },
  {
    id: 'u1q37',
    unit: 1,
    questionText: 'El concepto de "fuerza equivalente" es igual a:',
    options: ['La fuerza más pequeña del sistema', 'La fuerza promedio del sistema', 'La suma vectorial de todas las fuerzas', 'La fuerza de reacción en un apoyo'],
    correctAnswerIndex: 2,
    explanation: 'La fuerza equivalente es la suma vectorial (resultante) de todas las fuerzas que actúan sobre una partícula o cuerpo.'
  },
  {
    id: 'u1q38',
    unit: 1,
    questionText: '¿Cuál de las siguientes opciones describe mejor el "momento estático" de un área?',
    options: ['Resistencia al giro del área', 'Producto del área por la distancia a un eje', 'Capacidad del área para deformarse', 'Fuerza por unidad de área'],
    correctAnswerIndex: 1,
    explanation: 'El momento estático (o momento de primer orden) de un área es el producto de dicha área por la distancia de su centroide al eje establecido. Se usa para localizar centroides.'
  },
  {
    id: 'u1q39',
    unit: 1,
    questionText: 'La segunda ley de Newton relaciona la fuerza resultante (R) con la masa (m) y la aceleración (a) mediante la fórmula:',
    options: ['R = m/a', 'R = a/m', 'R = m*a', 'R = m*a²'],
    correctAnswerIndex: 2,
    explanation: 'La segunda Ley de Newton o ley de la dinámica de partículas se enuncia así: "La fuerza que actúa sobre un cuerpo es directamente proporcional a su aceleración", por lo que R = ΣF = m*a.'
  },
  {
    id: 'u1q40',
    unit: 1,
    questionText: 'El "centro de gravedad" de una placa plana irregular se puede calcular mediante:',
    options: ['Solo observación directa', 'Métodos de integración o descomposición', 'Midiendo su temperatura', 'Todas las anteriores son correctas'],
    correctAnswerIndex: 1,
    explanation: 'Para objetos irregulares, el centro de gravedad debe calcularse, por ejemplo, mediante el método de integración o descomponiendo la figura en formas geométricas simples conocidas.'
  }
];

