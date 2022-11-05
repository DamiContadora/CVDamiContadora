//*********************************************************** */
// Es importante llenar toda la información de la siguiente sección
//*********************************************************** */

const InformacionPersonal = {
  Nombre: "Damaris",
  Apellidos: "Barbosa",
  Cargo: "Licenciada en Contabilidad",
  Genero: "Femenino",
  WebSite: "----",
  Nacionalidad: "Mexicana",
  FechaNacimiento: "Septiembre 1985",
  Edad: "35",
  EstadoCivil: "Casada",
  Email: "dami181010@gmail.com",
  Telefono: "----",
  DescripcionCorta: `Soy una amante y apasionada de la contabilidad con mis más de 9 años de experiencia, me gusta involucrarme en proyectos y retos cada vez más grandes y ambiciosos para poder continuar creciendo como profesional y me ayuden en mi camino como emprendedora.`,
  DescripcionProfesional: `Actualmente soy Co-Fundadora y Contadora de la Startup Tu Encargo App donde ayudamos a los pequeños negocios con sus ventas y sus finanzas.
  
Por el momento estoy buscando nuevos retos y me gusta creer que soy una de las mejores opciones del mercado por mi amplia experiencia tanto en contabilidad como con Startup's, por lo que me emociona aprender cosas nuevas. Por lo que si estás buscando mi perfil, espero poder charlar en alguna ocasión.

Mis valores y como me gusta desenvolverme en los trabajos son: La Familia, La Valentía, La Honestidad, El Esfuerzo y Ser mejor cada día.
`,
};

//*********************************************************** */
// Deja en blanco la red social que no quieras que se muestre
//*********************************************************** */
const RedesSociales = {
  twitter: "",
  facebook: "",
  instagram: "",
  linkedin: "https://www.linkedin.com/in/damaris-barbosa-moreno-4707b3229/",
};

//*********************************************************** */
// Deja en blanco la red social que no quieras que se muestre
//Para agregar o quitar SKILLS solo reá necesario agregar o quitar las siguientes líneas:
/*

{
  Skill: "Liderazgo",
  Puntaje: 100,
  Experiencia: "2 Años",
},

*/
//Debes copiar las llaves y la ", (Coma)" del final
//*********************************************************** */

const Skills = [
 {
  Skill: "Excel Avanzado",
  Puntaje: 90,
  Experiencia: "5 Años",
},
{
  Skill: "SAE",
  Puntaje: 80,
  Experiencia: "2 Años",
},
{
  Skill: "Conciliaciones bancarias",
  Puntaje: 80,
  Experiencia: "6 Años",
},
  {
  Skill: "Determinación y presentación de DIOT",
  Puntaje: 80,
  Experiencia: "4 Años",
},
];

//*********************************************************** */
//  Es importante llenar toda la información de la siguiente sección
// Para agregar otra sección de "Educación" o cupa el siguiente template
/*
  {
      Escuela: "",
      Periodo: "",
      Titulo: "", //Dejar en blanco si no hay titulo o diploma
      DescripcionCorta:"",
  },
*/
//*********************************************************** */

const Resumen = {
  DescripcionCorta: `En esta sección te contare un poco de mi, de mi educación y de mi experiencia laboral`,
  Mi_Resumen: `Innovador, Alegre y Apasionado por la programación, con más de 13 años de experiencia. Me gusta formar un gran ambiente laboral y en mi caso, aplica el dicho "Trabaja en lo que amas y así, ningun día de tu vida tendrás que trabajar"`,
  Puntos_A_Destacar: [
    "Cuento con 5 emprendimeintos",
    "Deportista de alto renidmiento de joven",
    "Estudiante de Platzi por más de 2 años",
  ],
  Educación: [
    {
      Escuela: "ESCUELA DE PLATZI",
      Periodo: "2019 - 2022",
      Titulo: "He logrado terminar 5 escuelas completas", //Dejar en blanco si no hay titulo o diploma
      DescripcionCorta:
        "Al ser estudiante de platzi ha impulsado mi carrera de una manera increible al aplicar sui lema 'Nunca pares de Aprender'",
    },
    {
      Escuela: "INSTITUTO POLITÉCNICO NACIONAL (IPN)",
      Periodo: "2008 - 2013",
      Titulo: "Ing. en Computación", //Dejar en blanco si no hay titulo o diploma
      DescripcionCorta:
        "Logre conseguir mi carrera en el IPN, mi segunda casa. Dando el discurso de Graduación de la generación en la que sali.",
    },
  ],
};

//*********************************************************** */
// EXPERIENCIA PROFESIONAL
//En caso de querer agregar más experiencia agregue las siguientes líneas:
/*
{
    Cargo: "",
    Fecha: "",
    Empresa: "",
    Funciones: [
      "",
      "",
      "",
      "",
    ], //Agregar una funcion encerrada en coma y agregar un coma (,) al final de cada función
  },
*/

//*********************************************************** */

const ExperienciaProfesional = [
  {
    Cargo: "Supervising Senior FullStack Developer",
    Fecha: "2021 - Actual",
    Empresa: "KPMG México",
    Funciones: [
      "Project Manager para la automatización de los procesos manuales dentor de la firma",
      "Creación de Sistemas Web necesarios para la firma",
      "Creación de API´S necesarias para la firma",
      "Creación de Aplicaciones Web, Mobile o de escritorio, necesarias para la firma.",
    ], //Agregar una funcion encerrada en coma y agregar un coma (,) al final de cada función
  },
  {
    Cargo: "Sub-Gerente de Desarrollo",
    Fecha: "2014-2021",
    Empresa: "CENTRO CELULAR S.A. de CV.",
    Funciones: [
      `Liderar a mi equipo de trabajo para poder desarrollar y dar
      mantenimiento a los sistemas y módulos de la empresa para mejorar el flujo de trabajo de
      nuestros usuarios.`,
      "Crear el modelado y todos los controles técnicos necesarios en base de datos (SQL) para poder lanzar a producción los proyectos asignados.",
      "Testear el proyecto una vez terminado para minimizar los errores que se pudieran presentar.",
      "Crear videotutoriales y dar capacitación a los usuarios de los sistemas creados.",
    ], //Agregar una funcion encerrada en coma y agregar un coma (,) al final de cada función
  },
  {
    Cargo: "Desarrollador WEB",
    Fecha: "2013-2014",
    Empresa: "ONISVIDA",
    Funciones: [
      "Mantenimiento a la página Web",
      "Creación App informativa",
      "Soporte técnico",
      "Creación de Página para cliente",
    ], //Agregar una funcion encerrada en coma y agregar un coma (,) al final de cada función
  },
];

//*********************************************************** */
//  SECCIÓN ¿PORQUE DEBES CONTACTARME?

/*
  {
      Titulo: "",
      Link:"", // Si no hay un link para redirigir, DEJALO VACÍO.
      DescripcionCorta:``,
  },
     */
//*********************************************************** */

const PorqueDebesContactarme = {
  Descripcion: `Sí estas buscando crear un proyecto técnologíco, ya sea una página web, una aplicación mobile, una automatización para tu empresa o simplemente un buen desarrollador para tu empresa,
   yo soy el indicado. Soy un apasionado por la programación, el diseño y la innovación.  Te contare un poco de lo que he hecho en los siguientes puntos, gracias por tu interes. `,
  Motivos: [
    {
      Titulo: "Tu Mentor Web",
      Link: "https://tumentorweb.com.mx", // Si no hay un link para redirigir, DEJALO VACÍO.
      DescripcionCorta: `Tu mentor Web es mi consultora con la que puedes contactar a mi equipo para la cotización y creación de proyectos digitales.`,
    },
    {
      Titulo: "Tu Encargo",
      Link: "https://tuencargo.com.mx", // Si no hay un link para redirigir, DEJALO VACÍO.
      DescripcionCorta: `Este proyecto es una aplicación movil donde ayudabamos al comercio local a crear una pequeña tienda en línea, con la finalidad de que pudiera promocionar sus productos con sus vecinos
  y aunque la pandemia no los dejaba abrir, ellos pudieran seguir vendiendo.`,
    },
    {
      Titulo: "Detalles Ciberneticos",
      Link: "", // Si no hay un link para redirigir, DEJALO VACÍO.
      DescripcionCorta: `Este proyecto era una página web donde los clientes compraban una serie de mini juegos en forma de calabozos que se configuraban con fotos de la pareja o información de la relación donde 
    experimentaban una detalle único para al final llegar a una carta de amor animada.`,
    },
    {
      Titulo: "Torneos Platino Mexico FIFA",
      Link: "", // Si no hay un link para redirigir, DEJALO VACÍO.
      DescripcionCorta: `Este proyecto era una página web donde cree una comunidad de jugadores del juego FIFA, con un ranking y creaba torneos para que la comunidad pudiera competir.`,
    },

    {
      Titulo: "Hay Paro",
      Link: "", // Si no hay un link para redirigir, DEJALO VACÍO.
      DescripcionCorta: `HayParo es un proyecto que cree hace un par de años con mi socio. El proyecto pretendía tener una comunidad que se ayudará para encontrar mascotas extraviadas, para ayudar a encontrar autos robados o para alertar de las zonas
      más inseguras de la ciudad, con alertas de estabas y robos, donde los ciudadanos pudieran estar más consientes de las zonas que transita.`,
    },
    {
      Titulo: "Más de 10 años de Experiencia",
      Link: "", // Si no hay un link para redirigir, DEJALO VACÍO.
      DescripcionCorta: `Como puedes ver estos han sido mis emprendimientos, he estado en proyectos que empiezan desde 0 o he llegado ha proyectos que necesitan mantenimiento, mejoras o hasta un rediseño. 
      Así que, contáctame y hablemos del proyecto que tienes en mente.`,
    },
  ],
};
