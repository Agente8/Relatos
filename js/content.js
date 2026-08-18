const SITE_CONTENT = {
  book: {
    title: 'Relatos para la próxima humanidad',
    author: 'Javier Ochoa',
    subtitle: 'Un recurso educativo para pensar la inteligencia artificial, la identidad y la convivencia en el aula.',
    audience: 'Secundaria, Bachillerato y Formación Profesional',
    cover: 'assets/Portada.jpg',
    intro: 'Ocho relatos breves para abrir preguntas relevantes en tutoría, Lengua, Filosofía, Tecnología, Digitalización, Valores, Empresa e Iniciativa Emprendedora y módulos de FP.',
    note: 'Contenido editable en js/content.js. Sustituye estos textos por la información definitiva cuando esté disponible.'
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
  relatos: [
    { slug: 'cara-a-cara', title: 'Cara a cara' },
    { slug: 'los-curvistas', title: 'Los Curvistas' },
    { slug: 'el-juicio-del-gemelo', title: 'El juicio del gemelo' },
    { slug: 'la-sonrisa-de-maquina', title: 'La sonrisa de máquina' },
    { slug: 'los-que-no-subieron', title: 'Los que no subieron' },
    { slug: 'la-clase', title: 'La clase' },
    { slug: 'el-hilo-roto', title: 'El hilo roto' },
    { slug: 'el-senado-de-las-conciencias', title: 'El senado de las conciencias' }
  ],
  relatoTemplate: {
    pregunta: '[Añadir pregunta principal del relato]',
    idea: '[Añadir idea central del relato]',
    objetivos: ['[Añadir objetivo de aprendizaje 1]', '[Añadir objetivo de aprendizaje 2]', '[Añadir objetivo de aprendizaje 3]'],
    debate: ['[Añadir pregunta de debate 1]', '[Añadir pregunta de debate 2]', '[Añadir pregunta de debate 3]'],
    actividad: '[Describir una actividad de aula breve, evaluable y adaptable por nivel]',
    recursosIA: ['[Añadir prompt o recurso IA 1]', '[Añadir prompt o recurso IA 2]', '[Añadir pauta de uso responsable]']
  },
  sections: {
    libro: ['[Añadir sinopsis educativa del libro]', '[Añadir relación con competencias clave o resultados de aprendizaje]', '[Añadir indicaciones de edad, nivel o itinerarios recomendados]'],
    guia: ['Lectura breve antes de clase.', 'Pregunta inicial para activar conocimientos previos.', 'Debate guiado con evidencias del texto.', 'Actividad de producción, reflexión o transferencia.', 'Cierre metacognitivo: qué pensaba antes y qué pienso ahora.'],
    recursos: ['[Añadir guía docente descargable]', '[Añadir rúbricas]', '[Añadir fichas imprimibles]', '[Añadir presentación para aula]', '[Añadir banco de prompts]'],
    encuentro: ['[Añadir formato del encuentro]', '[Añadir duración]', '[Añadir modalidad presencial/online]', '[Añadir necesidades técnicas]']
  },
  contact: {
    email: '[Añadir email de contacto]',
    formAction: '',
    privacy: '[Añadir texto legal o enlace a política de privacidad antes de publicar]'
  }
};
