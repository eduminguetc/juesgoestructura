// unit2_questions.js

export const unit2Questions = [
  {
    id: 'u2q1',
    unit: 2,
    questionText: '¿Qué se entiende por "esfuerzo" ($\sigma$) en una estructura?',
    options: ['El cambio de forma del material', 'La fuerza interna por unidad de área', 'La carga externa total aplicada', 'La capacidad de un material para deformarse'],
    correctAnswerIndex: 1,
    explanation: 'El esfuerzo ($\sigma$) se refiere a las fuerzas internas por unidad de área dentro de un material, y se calcula como $\sigma = P/A$.'
  },
  {
    id: 'u2q2',
    unit: 2,
    questionText: 'La deformación que experimenta un cuerpo y que desaparece al cesar el esfuerzo se denomina:',
    options: ['Deformación plástica', 'Deformación permanente', 'Deformación elástica', 'Deformación unitaria'],
    correctAnswerIndex: 2,
    explanation: 'La deformación elástica se produce cuando el material es capaz de volver a su forma original sin que permanezcan las deformaciones al cesar los esfuerzos.'
  },
  {
    id: 'u2q3',
    unit: 2,
    questionText: '¿Qué tipo de material muestra una gran deformación plástica antes de romperse según su diagrama tensión-deformación?',
    options: ['Material frágil', 'Material rígido', 'Material dúctil', 'Material inelástico'],
    correctAnswerIndex: 2,
    explanation: 'Los materiales dúctiles, como el acero, presentan una pendiente menor en el diagrama tensión-deformación y muestran una deformación plástica importante antes de llegar a la falla.'
  },
  {
    id: 'u2q4',
    unit: 2,
    questionText: 'Un apoyo que impide el desplazamiento vertical y horizontal pero permite el giro se conoce como:',
    options: ['Apoyo móvil', 'Empotramiento', 'Apoyo fijo', 'Articulación deslizante'],
    correctAnswerIndex: 2,
    explanation: 'Un apoyo fijo (o articulación) impide el desplazamiento vertical y horizontal, pero permite el giro, generando dos reacciones (una horizontal y una vertical).'
  },
  {
    id: 'u2q5',
    unit: 2,
    questionText: 'El esfuerzo normal o axial (N) que tiende a alargar una pieza se denomina:',
    options: ['Compresión', 'Cortante', 'Tracción', 'Flexión'],
    correctAnswerIndex: 2,
    explanation: 'Los esfuerzos normales o axiales (N) pueden ser de tracción si estiran la viga (tienden a alargarla) o de compresión si la acortan.'
  },
  {
    id: 'u2q6',
    unit: 2,
    questionText: '¿Qué tipo de esfuerzo es paralelo a la sección transversal de una viga y tiende a deslizar unas partes respecto a otras?',
    options: ['Esfuerzo de tracción', 'Esfuerzo de compresión', 'Momento flector', 'Esfuerzo cortante'],
    correctAnswerIndex: 3,
    explanation: 'El esfuerzo cortante (V o T) es paralelo a la sección, pero perpendicular al eje geométrico, y se produce cuando se aplican fuerzas perpendiculares a la pieza, haciendo que las partículas tiendan a desplazarse las unas de las otras.'
  },
  {
    id: 'u2q7',
    unit: 2,
    questionText: 'En una viga sometida a flexión, la línea dentro de la sección donde la tensión por flexión es nula se llama:',
    options: ['Eje de simetría', 'Fibra extrema', 'Fibra neutra', 'Línea de carga'],
    correctAnswerIndex: 2,
    explanation: 'El eje de la barra que separa la sección y no tiene tensión por flexión se denomina fibra neutra.'
  },
  {
    id: 'u2q8',
    unit: 2,
    questionText: 'Según un criterio de signos común, un momento flector (M) que tracciona las fibras inferiores de una viga se considera:',
    options: ['Negativo', 'Nulo', 'Positivo', 'Indeterminado'],
    correctAnswerIndex: 2,
    explanation: 'Un momento flector es positivo (+) si tracciona las fibras inferiores, produciendo una curvatura cóncava ("cara sonriente").'
  },
  {
    id: 'u2q9',
    unit: 2,
    questionText: 'En una estructura simétrica (geometría, apoyos y cargas), el diagrama de esfuerzos cortantes (V) es:',
    options: ['Simétrico', 'Constante', 'Nulo', 'Antisimétrico'],
    correctAnswerIndex: 3,
    explanation: 'En una estructura simétrica, el diagrama de cortantes (V) es antisimétrico, lo que significa que tiene valores iguales pero de signo opuesto a cada lado del eje de simetría.'
  },
  {
    id: 'u2q10',
    unit: 2,
    questionText: 'En el eje de simetría de una estructura simétrica cargada simétricamente, el esfuerzo cortante es:',
    options: ['Máximo', 'Mínimo negativo', 'Nulo', 'Igual a la reacción'],
    correctAnswerIndex: 2,
    explanation: 'En el eje de simetría de una estructura simétrica, el esfuerzo cortante es nulo, así como el giro y el desplazamiento horizontal.'
  },
  {
    id: 'u2q11',
    unit: 2,
    questionText: 'La relación matemática entre la carga distribuida (q) y el esfuerzo cortante (V) es que q es la ... de V.',
    options: ['Integral', 'Constante', 'Derivada', 'Función inversa'],
    correctAnswerIndex: 2,
    explanation: 'La densidad de carga (q) es la derivada del cortante (V) con respecto a la longitud (q = dV/dx), lo que significa que q es la pendiente del diagrama de cortantes.'
  },
  {
    id: 'u2q12',
    unit: 2,
    questionText: 'Si en un tramo de viga la carga distribuida (q) es cero, el diagrama de momentos flectores (M) será:',
    options: ['Constante', 'Lineal (recta inclinada)', 'Parabólico', 'Cúbico'],
    correctAnswerIndex: 1,
    explanation: 'Si q=0, entonces V es constante. Como V es la derivada de M (V = dM/dx), si V es constante, M debe ser una función lineal (una recta inclinada).'
  },
  {
    id: 'u2q13',
    unit: 2,
    questionText: 'Una carga puntual aplicada hacia abajo en una viga produce en el diagrama de cortantes:',
    options: ['Un salto hacia arriba', 'Un cambio de pendiente', 'Un salto hacia abajo', 'Ningún efecto'],
    correctAnswerIndex: 2,
    explanation: 'Una carga puntual produce un salto en el diagrama de cortantes. Si la carga es hacia abajo, el salto en el diagrama de cortantes también es hacia abajo.'
  },
  {
    id: 'u2q14',
    unit: 2,
    questionText: 'En un apoyo simple (articulación) de una viga, si no hay un momento puntual aplicado, el momento flector es:',
    options: ['Máximo', 'Nulo', 'Igual a la reacción', 'Mínimo'],
    correctAnswerIndex: 1,
    explanation: 'En los extremos con apoyo simple o fijo, si no hay un momento puntual aplicado directamente en ese apoyo, el momento flector es nulo.'
  },
  {
    id: 'u2q15',
    unit: 2,
    questionText: 'Si el diagrama de momentos flectores (M) es positivo en un tramo, la viga se curva de forma:',
    options: ['Convexa (cara triste)', 'Recta', 'Cóncava (cara sonriente)', 'Ondulada'],
    correctAnswerIndex: 2,
    explanation: 'Un momento flector positivo (+) indica que las fibras inferiores están traccionadas, lo que resulta en una curvatura cóncava (como una "cara sonriente").'
  },
  {
    id: 'u2q16',
    unit: 2,
    questionText: '¿Cuál de los siguientes NO es un tipo de esfuerzo principal en elementos estructurales?',
    options: ['Tracción', 'Compresión', 'Dilatación', 'Cortante'],
    correctAnswerIndex: 2,
    explanation: 'Los tipos de esfuerzos principales son Normal (Tracción/Compresión), Cortante, Flector y Torsor. La dilatación es una deformación, no un esfuerzo en sí mismo.'
  },
  {
    id: 'u2q17',
    unit: 2,
    questionText: 'La deformación que se mantiene de forma permanente, a pesar de que cesen los esfuerzos sobre el material, se llama:',
    options: ['Deformación elástica', 'Deformación plástica', 'Deformación reversible', 'Deformación temporal'],
    correctAnswerIndex: 1,
    explanation: 'La deformación plástica es aquella en la que las deformaciones se mantienen de forma permanente, a pesar de que cesen los esfuerzos sobre el material.'
  },
  {
    id: 'u2q18',
    unit: 2,
    questionText: 'Un empotramiento en el extremo de una viga impide:',
    options: ['Solo el desplazamiento vertical', 'Solo el giro', 'El desplazamiento horizontal y vertical', 'Todos los desplazamientos y el giro'],
    correctAnswerIndex: 3,
    explanation: 'Un empotramiento impide el desplazamiento horizontal, el desplazamiento vertical y el giro, generando tres reacciones (dos fuerzas y un momento).'
  },
  {
    id: 'u2q19',
    unit: 2,
    questionText: 'El esfuerzo que tiende a retorcer una pieza sobre su eje central se denomina:',
    options: ['Flexión', 'Pandeo', 'Torsión', 'Cizalladura'],
    correctAnswerIndex: 2,
    explanation: 'La torsión es el esfuerzo que hace que una pieza tienda a retorcerse sobre su eje central, debido a momentos torsores.'
  },
  {
    id: 'u2q20',
    unit: 2,
    questionText: 'Si el diagrama de cortantes (V) es una recta inclinada en un tramo, el diagrama de momentos flectores (M) en ese tramo será:',
    options: ['Constante', 'Lineal', 'Parabólico', 'Nulo'],
    correctAnswerIndex: 2,
    explanation: 'Si el cortante (V) varía de forma lineal (recta inclinada), significa que la carga distribuida (q) es constante. En este caso, el momento flector (M) es una parábola de segundo grado.'
  },
  {
    id: 'u2q21',
    unit: 2,
    questionText: 'El primer paso para dibujar los diagramas de esfuerzos en una viga es:',
    options: ['Dibujar la deformada', 'Identificar los tramos', 'Calcular las reacciones en los apoyos', 'Aplicar el criterio de signos'],
    correctAnswerIndex: 2,
    explanation: 'El primer paso fundamental para poder dibujar los diagramas de esfuerzos y analizar la viga es calcular las reacciones que surgen en los apoyos utilizando las ecuaciones de equilibrio.'
  },
  {
    id: 'u2q22',
    unit: 2,
    questionText: 'En una estructura antisimétrica (geometría y apoyos simétricos, cargas antisimétricas), el diagrama de momentos flectores (M) es:',
    options: ['Simétrico', 'Antisimétrico', 'Constante', 'Nulo en los apoyos'],
    correctAnswerIndex: 1,
    explanation: 'Si un estado de cargas antisimétrico se aplica sobre una estructura simétrica, se producirán deformaciones, esfuerzos axiles y momentos flectores antisimétricos. El cortante será simétrico.'
  },
  {
    id: 'u2q23',
    unit: 2,
    questionText: 'La unidad de medida de la densidad de carga (q) es:',
    options: ['kN', 'kN·m', 'kN/m', 'kN/m²'],
    correctAnswerIndex: 2,
    explanation: 'La densidad de carga (q) representa la cantidad de carga por unidad de longitud, por lo que su unidad es fuerza por longitud, comúnmente kN/m.'
  },
  {
    id: 'u2q24',
    unit: 2,
    questionText: 'Si el esfuerzo cortante (V) es positivo en un tramo, la pendiente del diagrama de momento flector (M) será:',
    options: ['Negativa (decreciente)', 'Positiva (creciente)', 'Nula (horizontal)', 'Variable'],
    correctAnswerIndex: 1,
    explanation: 'El cortante V es la pendiente del flector M. Si V > 0, el flector M es creciente (pendiente positiva).'
  },
  {
    id: 'u2q25',
    unit: 2,
    questionText: 'Un momento puntual aplicado en sentido horario sobre una viga produce en el diagrama de momentos flectores:',
    options: ['Un salto hacia arriba', 'Un salto hacia abajo', 'Un cambio de pendiente suave', 'Ningún salto, solo un pico'],
    correctAnswerIndex: 1,
    explanation: 'Los momentos puntuales provocan saltos en el diagrama de flector. Un momento horario, según la convención habitual de dibujar momentos positivos hacia abajo, produce un salto hacia abajo.'
  },
  {
    id: 'u2q26',
    unit: 2,
    questionText: '¿Cuál de estos elementos NO es un tipo de enlace exterior o vínculo en el plano?',
    options: ['Apoyo fijo', 'Apoyo móvil', 'Empotramiento', 'Rótula interna'],
    correctAnswerIndex: 3,
    explanation: 'El apoyo fijo, el apoyo móvil y el empotramiento son enlaces exteriores. Una rótula interna es una conexión entre elementos dentro de la estructura, no un vínculo exterior.'
  },
  {
    id: 'u2q27',
    unit: 2,
    questionText: 'La Ley de Hooke, en su forma más simple para esfuerzo axial, establece que la tensión ($\sigma$) es proporcional a:',
    options: ['La fuerza (P)', 'El área (A)', 'La deformación unitaria ($\mathcal{E}$)', 'La longitud inicial (L)'],
    correctAnswerIndex: 2,
    explanation: 'La Ley de Hooke establece que, dentro del límite elástico, la tensión ($\sigma$) es directamente proporcional a la deformación unitaria ($\mathcal{E}$), siendo la constante de proporcionalidad el Módulo de Young (E): $\sigma = E \cdot \mathcal{E}$.'
  },
  {
    id: 'u2q28',
    unit: 2,
    questionText: 'Para dibujar la deformada de una viga, además del signo del flector, se deben considerar:',
    options: ['Solo las cargas aplicadas', 'Las coacciones de los enlaces', 'El material de la viga únicamente', 'La temperatura ambiente'],
    correctAnswerIndex: 1,
    explanation: 'La deformada de la viga se dibuja considerando el signo del flector (que indica la curvatura) y las coacciones (restricciones de movimiento y giro) que imponen los enlaces o apoyos de la viga.'
  },
  {
    id: 'u2q29',
    unit: 2,
    questionText: 'Si en un punto de una viga el esfuerzo cortante (V) es cero, el momento flector (M) en ese punto es:',
    options: ['Siempre cero', 'Máximo o mínimo local', 'Siempre positivo', 'Siempre negativo'],
    correctAnswerIndex: 1,
    explanation: 'Dado que V = dM/dx, cuando V=0, la pendiente del diagrama de momentos flectores es nula, lo que corresponde a un valor máximo o mínimo local del momento flector.'
  },
  {
    id: 'u2q30',
    unit: 2,
    questionText: 'Un material que se rompe de forma repentina, sin mostrar casi ninguna deformación plástica, se considera:',
    options: ['Dúctil', 'Elástico', 'Plástico', 'Frágil'],
    correctAnswerIndex: 3,
    explanation: 'Los materiales frágiles tienen una pendiente mayor en el diagrama tensión-deformación y la falla se produce de forma repentina, sin mostrar casi ninguna deformación plástica.'
  },
  {
    id: 'u2q31',
    unit: 2,
    questionText: 'El esfuerzo de compresión en una viga, según el criterio de signos habitual, se considera:',
    options: ['Positivo', 'Negativo', 'Nulo', 'Depende del material'],
    correctAnswerIndex: 1,
    explanation: 'Por convenio, el esfuerzo normal de tracción se considera positivo (+) y el de compresión se considera negativo (-).'
  },
  {
    id: 'u2q32',
    unit: 2,
    questionText: '¿Qué tipo de esfuerzo es predominante en las patas de una mesa que soporta un objeto pesado?',
    options: ['Tracción', 'Flexión', 'Torsión', 'Compresión'],
    correctAnswerIndex: 3,
    explanation: 'Las patas de una mesa que soporta un peso están sometidas principalmente a un esfuerzo de compresión, tendiendo a disminuir su altura.'
  },
  {
    id: 'u2q33',
    unit: 2,
    questionText: 'Si una estructura tiene una geometría y apoyos simétricos, pero las cargas son antisimétricas, la deformada será:',
    options: ['Simétrica', 'Antisimétrica', 'Nula', 'Impredecible'],
    correctAnswerIndex: 1,
    explanation: 'En el caso de que un estado de cargas antisimétrico se aplique sobre una estructura simétrica, se producirán deformaciones, esfuerzos axiles y flectores antisimétricos.'
  },
  {
    id: 'u2q34',
    unit: 2,
    questionText: 'La "fibra neutra" en una viga bajo flexión es donde:',
    options: ['El esfuerzo cortante es máximo', 'La tensión por flexión es máxima', 'La tensión por flexión es nula', 'La deformación es máxima'],
    correctAnswerIndex: 2,
    explanation: 'El eje de la barra que separa la zona de tracción de la de compresión en una viga flectada no tiene tensión normal por flexión y se denomina fibra neutra.'
  },
  {
    id: 'u2q35',
    unit: 2,
    questionText: '¿Cuál de las siguientes afirmaciones sobre los diagramas de esfuerzos es CORRECTA?',
    options: ['El flector es la derivada del cortante', 'El cortante es la derivada de la carga', 'La carga es la integral del flector', 'El cortante es la derivada del flector'],
    correctAnswerIndex: 3,
    explanation: 'Las relaciones fundamentales son: la carga distribuida (q) es la derivada del cortante (V), y el cortante (V) es la derivada del momento flector (M).'
  },
  {
    id: 'u2q36',
    unit: 2,
    questionText: 'Un apoyo móvil permite el desplazamiento horizontal y el giro, pero impide el desplazamiento...',
    options: ['Vertical', 'Angular', 'Longitudinal', 'Transversal y angular'],
    correctAnswerIndex: 0,
    explanation: 'Un apoyo móvil o simple impide el desplazamiento perpendicular al plano de apoyo (generalmente vertical) pero permite el desplazamiento paralelo y el giro.'
  },
  {
    id: 'u2q37',
    unit: 2,
    questionText: 'El esfuerzo que combina compresión en unas fibras y tracción en otras de una pieza es la:',
    options: ['Torsión', 'Compresión pura', 'Tracción pura', 'Flexión'],
    correctAnswerIndex: 3,
    explanation: 'La flexión es un esfuerzo que tiende a curvar la barra; como resultado, una parte de las fibras de la viga presenta esfuerzos de compresión y la otra, esfuerzos de tracción.'
  },
  {
    id: 'u2q38',
    unit: 2,
    questionText: 'Si la densidad de carga (q) es negativa y constante en un tramo, el diagrama de cortante (V) será:',
    options: ['Constante y positivo', 'Lineal creciente', 'Constante y negativo', 'Lineal decreciente'],
    correctAnswerIndex: 3,
    explanation: 'Si q < 0 y es constante, el cortante V será lineal y decreciente (su pendiente es q, que es negativa).'
  },
  {
    id: 'u2q39',
    unit: 2,
    questionText: 'Al dibujar la deformada, un momento flector nulo en un tramo implica que ese tramo de la viga...',
    options: ['Tiene curvatura máxima', 'Tiene curvatura cóncava', 'Permanece recto (curvatura nula)', 'Tiene curvatura convexa'],
    correctAnswerIndex: 2,
    explanation: 'Si el momento flector es nulo en un tramo, la curvatura es nula, lo que significa que ese tramo de la viga permanece recto o tiene un punto de inflexión.'
  },
  {
    id: 'u2q40',
    unit: 2,
    questionText: '¿Qué tipo de cargas son el peso propio de la estructura y los elementos constructivos fijos?',
    options: ['Cargas variables', 'Cargas accidentales', 'Cargas dinámicas', 'Cargas permanentes'],
    correctAnswerIndex: 3,
    explanation: 'Las cargas permanentes son aquellas que actúan constantemente sobre la estructura, como el peso propio de los elementos estructurales y constructivos fijos.'
  }
];

