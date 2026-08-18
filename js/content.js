const SITE_CONTENT = {
  book: {
    title: 'Relatos para la próxima humanidad',
    author: 'Javier Ochoa',
    subtitle: 'Ocho historias breves para reflexionar sobre inteligencia artificial, tecnologías emergentes, sociedad y futuro.',
    audience: '4º ESO, Bachillerato y Formación Profesional',
    cover: 'assets/Portada.jpg',
    intro: 'Cada relato puede trabajarse de forma independiente en una única sesión o integrarse en un proyecto de lectura más amplio. No pretende ofrecer respuestas cerradas, sino generar reflexión, pensamiento crítico y debate.',
    note: 'Contenido editable en js/content.js. Sustituye los placeholders por la información definitiva cuando esté disponible.'
  },
  navigation: [
    ['Inicio', 'aula.html#inicio'],
    ['El libro', 'aula.html#libro'],
    ['Guía docente', 'aula.html#guia-docente'],
    ['Los relatos', 'aula.html#relatos'],
    ['Recursos', 'aula.html#recursos'],
    ['Encuentro con el autor', 'aula.html#encuentro'],
    ['Solicitar piloto', 'aula.html#piloto']
  ],
  destinatarios: {
    cursos: ['4º ESO', '1º Bachillerato', '2º Bachillerato', 'Formación Profesional'],
    materias: ['Lengua Castellana y Literatura', 'Filosofía', 'Tecnología y Digitalización', 'Tutoría', 'Club de lectura', 'Biblioteca escolar'],
    competencias: ['Comprensión lectora', 'Pensamiento crítico', 'Argumentación', 'Comunicación oral', 'Creatividad', 'Ciudadanía digital', 'Reflexión ética']
  },
  relatos: [
    {
      slug: 'cara-a-cara',
      title: 'Cara a cara',
      tema: 'El valor de la experiencia humana',
      pregunta: '¿El valor estará en la experiencia?',
      idea: 'Cuando las máquinas realizan muchas tareas mejor que las personas, surge una pregunta: ¿qué seguirá haciendo valioso al ser humano?',
      antes: 'Si una IA pudiera hacer tu futuro trabajo mejor que tú, ¿qué seguiría diferenciándote?',
      durante: 'Anota un momento del relato que haya cambiado tu forma de pensar.',
      objetivos: ['Reflexionar sobre el valor de la experiencia humana.', 'Analizar qué tareas pueden automatizarse y cuáles conservan dimensión humana.', 'Argumentar con ejemplos sobre identidad, trabajo y futuro.'],
      debate: ['¿Qué nos hace únicos?', '¿Todo puede automatizarse?', '¿La experiencia seguirá teniendo valor?', '¿Qué perderíamos si siempre eligiera una IA?'],
      actividad: 'Diseña el currículum de una persona en el año 2050. ¿Qué habilidades seguirán siendo exclusivamente humanas?',
      recursosIA: ['[Añadir prompt de apoyo para comparar habilidades humanas y automatizables]', '[Añadir pauta de uso responsable de IA para la actividad]']
    },
    {
      slug: 'los-curvistas',
      title: 'Los Curvistas',
      tema: 'Automatización y pérdida de habilidades',
      pregunta: '¿Dejaremos de conducir?',
      idea: '¿Qué ocurre cuando dejamos de practicar habilidades porque las máquinas las realizan por nosotros?',
      antes: '¿Cuántas habilidades humanas desaparecerán durante vuestra vida?',
      durante: '[Añadir indicación durante la lectura]',
      objetivos: ['Identificar efectos de la automatización sobre las habilidades humanas.', 'Debatir la relación entre seguridad, comodidad y pérdida de capacidades.', 'Proyectar cambios tecnológicos a medio y largo plazo.'],
      debate: ['¿Conduciremos dentro de 30 años?', '¿Importa perder una habilidad si ganamos seguridad?', '¿Qué otras capacidades podrían desaparecer?'],
      actividad: 'Elabora una lista de diez habilidades actuales que podrían dejar de enseñarse.',
      recursosIA: ['[Añadir prompt para explorar habilidades en riesgo de desaparición]', '[Añadir pauta de verificación y contraste de respuestas de IA]']
    },
    {
      slug: 'el-juicio-del-gemelo',
      title: 'El juicio del gemelo',
      tema: 'Identidad y gemelos digitales',
      pregunta: '¿Tendremos un gemelo digital?',
      idea: 'Los datos permiten construir una copia digital capaz de conocernos mejor que nosotros mismos.',
      antes: '[Añadir pregunta inicial antes de leer]',
      durante: '[Añadir indicación durante la lectura]',
      objetivos: ['Comprender el concepto de identidad digital.', 'Relacionar datos personales, responsabilidad y toma de decisiones.', 'Practicar la argumentación a través de un juicio simulado.'],
      debate: ['¿Quién eres realmente?', '¿Puede una copia tomar decisiones por ti?', '¿Quién sería responsable de sus errores?'],
      actividad: 'Juicio simulado con grupos de defensa, fiscalía, juez y jurado.',
      recursosIA: ['[Añadir prompt para preparar argumentos de defensa y fiscalía]', '[Añadir pauta para distinguir ayuda de IA y criterio propio]']
    },
    {
      slug: 'la-sonrisa-de-maquina',
      title: 'La sonrisa de máquina',
      tema: 'Conciencia artificial',
      pregunta: '¿Tendrá la IA conciencia?',
      idea: 'La frontera entre inteligencia y conciencia.',
      antes: '[Añadir pregunta inicial antes de leer]',
      durante: '[Añadir indicación durante la lectura]',
      objetivos: ['Diferenciar inteligencia, simulación y conciencia.', 'Explorar dilemas éticos sobre derechos de entidades artificiales.', 'Crear un diálogo argumentativo entre perspectivas opuestas.'],
      debate: ['¿Puede una máquina sentir?', '¿Cómo lo demostraría?', '¿Debería tener derechos?'],
      actividad: 'Escribir un diálogo entre un humano y una IA consciente.',
      recursosIA: ['[Añadir prompt para generar preguntas sobre conciencia artificial]', '[Añadir pauta para revisar sesgos o antropomorfismos en respuestas de IA]']
    },
    {
      slug: 'los-que-no-subieron',
      title: 'Los que no subieron',
      tema: 'Desigualdad tecnológica',
      pregunta: '¿Habrá una distopía?',
      idea: 'Las consecuencias de una sociedad donde no todos avanzan al mismo ritmo.',
      antes: '[Añadir pregunta inicial antes de leer]',
      durante: '[Añadir indicación durante la lectura]',
      objetivos: ['Analizar desigualdades asociadas al acceso tecnológico.', 'Identificar quién puede quedar excluido de una innovación.', 'Diseñar propuestas de inclusión tecnológica.'],
      debate: ['¿Toda innovación beneficia a todos?', '¿Quién queda atrás?', '¿Qué responsabilidad tiene la sociedad?'],
      actividad: 'Diseñar una sociedad donde nadie quede excluido por la tecnología.',
      recursosIA: ['[Añadir prompt para detectar riesgos de exclusión tecnológica]', '[Añadir pauta para contrastar propuestas con criterios de equidad]']
    },
    {
      slug: 'la-clase',
      title: 'La clase',
      tema: 'El futuro de la educación',
      pregunta: '¿Cambiará la educación?',
      idea: 'La inteligencia artificial transforma el aprendizaje.',
      antes: '[Añadir pregunta inicial antes de leer]',
      durante: '[Añadir indicación durante la lectura]',
      objetivos: ['Reflexionar sobre el papel del profesorado en escenarios con IA.', 'Imaginar aprendizajes relevantes para el futuro.', 'Defender qué elementos de la educación deberían conservarse.'],
      debate: ['¿Seguirán existiendo profesores?', '¿Qué debería aprender un estudiante en 2045?', '¿Qué nunca debería desaparecer?'],
      actividad: 'Diseñar el colegio del futuro.',
      recursosIA: ['[Añadir prompt para comparar modelos educativos futuros]', '[Añadir pauta de uso responsable de IA en tareas escolares]']
    },
    {
      slug: 'el-hilo-roto',
      title: 'El hilo roto',
      tema: 'Dolor, emociones y humanidad',
      pregunta: '¿Sentiremos dolor?',
      idea: 'El papel del dolor en la construcción de nuestra identidad.',
      antes: '[Añadir pregunta inicial antes de leer]',
      durante: '[Añadir indicación durante la lectura]',
      objetivos: ['Reflexionar sobre la relación entre dolor, aprendizaje e identidad.', 'Debatir límites éticos de la eliminación del sufrimiento.', 'Escribir desde una perspectiva social alternativa.'],
      debate: ['¿Eliminarías el dolor si pudieras?', '¿Aprendemos gracias al sufrimiento?', '¿Qué perderíamos?'],
      actividad: 'Redactar una carta desde una sociedad donde el dolor ha desaparecido.',
      recursosIA: ['[Añadir prompt para explorar argumentos éticos sobre dolor y sufrimiento]', '[Añadir pauta para cuidar el enfoque emocional en el aula]']
    },
    {
      slug: 'el-senado-de-las-conciencias',
      title: 'El senado de las conciencias',
      tema: 'Nuevos modelos de gobierno',
      pregunta: '¿Habrá modelos de gobierno distintos?',
      idea: 'La inteligencia artificial participa en la toma de decisiones colectivas.',
      antes: '[Añadir pregunta inicial antes de leer]',
      durante: '[Añadir indicación durante la lectura]',
      objetivos: ['Analizar modelos de gobierno con participación de IA.', 'Delimitar decisiones que deberían permanecer en manos humanas.', 'Practicar deliberación democrática mediante simulación parlamentaria.'],
      debate: ['¿Confiarías en una IA para gobernar?', '¿Qué decisiones nunca debería tomar una máquina?', '¿Cómo combinarías inteligencia humana e inteligencia artificial?'],
      actividad: 'Simulación parlamentaria. Cada grupo representa un modelo de gobierno diferente y debe defender sus propuestas.',
      recursosIA: ['[Añadir prompt para comparar modelos de gobierno humano/IA]', '[Añadir pauta para evaluar riesgos democráticos y de transparencia]']
    }
  ],
  sections: {
    libro: ['Relatos para la próxima humanidad reúne ocho historias breves que utilizan la inteligencia artificial y las tecnologías emergentes para plantear preguntas sobre el ser humano, la sociedad y el futuro.', 'Cada relato puede trabajarse de forma independiente en una única sesión o integrarse en un proyecto de lectura más amplio.', 'No pretende ofrecer respuestas cerradas, sino generar reflexión, pensamiento crítico y debate.'],
    guia: ['Lectura breve antes de clase.', 'Pregunta inicial para activar conocimientos previos.', 'Debate guiado con evidencias del texto.', 'Actividad de producción, reflexión o transferencia.', 'Cierre metacognitivo: qué pensaba antes y qué pienso ahora.'],
    recursos: ['[Añadir guía docente descargable]', '[Añadir rúbricas]', '[Añadir fichas imprimibles]', '[Añadir presentación para aula]', '[Añadir banco de prompts]'],
    encuentro: ['Charla-coloquio: ¿Estamos preparados para la próxima humanidad?', 'Cómo nació el libro.', 'Qué tecnologías ya existen.', 'Qué sigue siendo ciencia ficción.', 'Debate abierto con los alumnos.', 'Turno de preguntas.']
  },
  contact: {
    name: 'Javier Ochoa',
    role: 'Autor de Relatos para la próxima humanidad',
    email: '[Añadir correo electrónico]',
    website: '[Añadir web]',
    qr: '[Añadir código QR]',
    formAction: '',
    privacy: '[Añadir texto legal o enlace a política de privacidad antes de publicar]'
  }
};
