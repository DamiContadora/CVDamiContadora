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
  AcercaDeMi: `Soy una mujer muy profesional, que ama lo que hace. Soy muy ordenada y super perfeccionista, me gusta leer (Aunque no sea de contabilidad). Me gusta automatizar mis procesos y tratar de innovar cada que veo la oportunidad.`,
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
  Mi_Resumen: `Innovadora, Alegre y Apasionada por la contabilidad, con más de 8 años de experiencia. Me gusta formar un gran ambiente laboral y en mi caso, aplica el dicho "Trabaja en lo que amas y así, ningun día de tu vida tendrás que trabajar"`,
  Puntos_A_Destacar: [
    "He trabajo para corporativos y para Startups",
    "Amante de la lectura",
    "Tuve un emprendimiento con una Starup",
  ],
  Educación: [
     {
      Escuela: "Universidad Milenium",
      Periodo: "Agosto 2015 - Enero 2019",
      Titulo: "Licenciatura en Contabilidad", //Dejar en blanco si no hay titulo o diploma
      DescripcionCorta:"Durante mi carrera logre obtener un promedio de 8.9 y logre obtener mi cedula profesional",
  },
    {
      Escuela: "Universidad de londres",
      Periodo: "Agosto 2013 - Junio 2015",
      Titulo: "", //Dejar en blanco si no hay titulo o diploma
      DescripcionCorta:"Estudie programación 3 años de mi vida y aunque no acabe, creo que esa experiencia me ayuda a querer innovar todo el tiempo, a querer automatizar mis procesos y ser la mejor en lo que hago.",
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
    Cargo: "Contador",
    Fecha: "Agosto 2021 - Actualmente",
    Empresa: "Servicio Pan Americano de Protección, S.A. de C.V.",
    Funciones: [
      "Facturación",
      "Revisión de cierres mensuales, elaboración de papeles de trabajo para auditoria, presentado la DIOT",
      "Aplicando pagos, depurando cuentas, realizando flujo de efectivo",
      "Cuentas por pagar, registros de ingresos, gastos, provisiones",
      " Responsable de la contabilidad",
    ], //Agregar una funcion encerrada en coma y agregar un coma (,) al final de cada función
  },
  {
    Cargo: "Contador JR",
    Fecha: "MARZO 2015 – Abril 2021",
    Empresa: "PLM México S.A. DE CV.",
    Funciones: [
      "Revisión de cierres mensuales, elaboración de papeles de trabajo para auditoria, presentado la DIOT",
      "Aplicando pagos, depurando cuentas, realizando flujo de efectivo",
      "Cuentas por pagar, registros de ingresos, gastos, provisiones",
      " Responsable de la contabilidad",
    ], //Agregar una funcion encerrada en coma y agregar un coma (,) al final de cada función
  },
 {
    Cargo: "Encargada Mesa de Control",
    Fecha: "OCTUBRE 2010 – DICIEMBRE 2015",
    Empresa: "COLLECTION MAGNAMENT GROUP",
    Funciones: [
      "Facturación",
      "Así como reportes de gastos, viáticos",
      "Atender las solicitudes de los clientes",
      "Lidereaba de una de las dos mesas de control con las que contaba la empresa",
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
  Descripcion: `Sí estas buscando alguien que pueda llevar tus finanzas personales, la contabilidad de tu empresa o Startup yo soy la indicada gracias a mi amplia experiencia y mi estrategia de trabajo, donde no solo te ayudare a mantenerte al día, te ayudare a implementar tecnología a tus procesos y podremos innovar juntos. `,
  Motivos: [
    {
      Titulo: "Contabilidad para Corporativos",
      Link: "", // Si no hay un link para redirigir, DEJALO VACÍO.
      DescripcionCorta: `Cuento con una amplia experiencia para poder llevar la facturación, reportes, diot y todo lo necesario para estar al día`,
    },
      {
      Titulo: "Automatización de procesos",
      Link: "", // Si no hay un link para redirigir, DEJALO VACÍO.
      DescripcionCorta: `He ayudado al área para poder automatizar procesos ya sea con Macros o con tecnologías de tipo ETL`,
    },
  ],
};
