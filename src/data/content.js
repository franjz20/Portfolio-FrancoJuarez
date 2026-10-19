// ============================================================================
//  CONTENIDO DEL PORTFOLIO
//  ----------------------------------------------------------------------------
//  Este es el ÚNICO archivo que necesitas editar para personalizar el sitio.
//
//  · Cada texto existe en español (es) e inglés (en): edita ambos bloques.
//  · Las imágenes se reemplazan en /public/assets manteniendo el mismo nombre
//    (avatar.svg, project-1.svg...) o cambiando la ruta `image` de cada item.
//  · Los iconos de tecnologías y redes se resuelven por nombre en los
//    componentes (Skills.jsx y Contact.jsx).
// ============================================================================

// Redes sociales y correo — se usan en Hero, Contact y Footer.
export const socials = [
  { label: 'GitHub', url: 'https://github.com/franjz20', icon: 'github' },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/franco-juarez-184985236/',
    icon: 'linkedin',
  },
  { label: 'Email', url: 'mailto:francodanielj@gmail.com', icon: 'mail' },
]

// Tecnologías: `name` debe coincidir con el mapa de iconos en Skills.jsx.
// `category` puede ser: 'frontend' | 'backend' | 'database' | 'tools'.
export const skills = [
  { name: 'JavaScript', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Java', category: 'backend' },
  { name: 'Spring Boot', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'NestJS', category: 'backend' },
  { name: 'C#', category: 'backend' },
  { name: 'PHP', category: 'backend' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'MySQL', category: 'database' },
  { name: 'MongoDB', category: 'database' },
  { name: 'Supabase', category: 'database' },
  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'Devin', category: 'tools' },
]

export const content = {
  es: {
    nav: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      skills: 'Tecnologías',
      education: 'Educación',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, mi nombre es',
      name: 'Franco Juarez',
      role: 'Desarrollador Web Full Stack',
      tagline:
        'Desarrollador web de Jujuy, Argentina. Diseño y construyo aplicaciones completas — desde la API y la base de datos hasta la interfaz — y las llevo a producción.',
      ctaProjects: 'Ver proyectos',
      ctaContact: 'Contáctame',
    },
    about: {
      title: 'Sobre mí',
      paragraphs: [
        'Soy Analista Programador Universitario (Facultad de Ingeniería de Jujuy) y desarrollador web. Me oriento a resultados: escribir código limpio, resolver problemas reales y publicar productos que la gente pueda usar.',
        'Trabajé como desarrollador backend en TramitAR, una plataforma para gestionar trámites como el CUIL y gestiones de ANSES y AFIP, donde construí la API con TypeScript, Node.js, TypeORM y MySQL. Por mi cuenta llevé dos proyectos propios a producción: un analizador de CVs con IA y una plataforma de reservas de alojamientos.',
        'Me destaco por la comunicación, la escucha y la capacidad de adaptación. Tengo experiencia liderando equipos y trabajando con metodología Scrum.',
      ],
      highlightsTitle: 'Datos rápidos',
      highlights: [
        { label: 'Ubicación', value: 'Jujuy, Argentina' },
        { label: 'Rol', value: 'Desarrollador Web Full Stack' },
        { label: 'Enfoque', value: 'React · Next.js · Java · Node.js' },
      ],
      photoAlt: 'Foto de Franco Juarez',
    },
    projects: {
      title: 'Proyectos',
      viewCode: 'Código',
      viewDemo: 'Demo',
      items: [
        {
          title: 'CV Analyzer — Analizador de Currículums con IA',
          description:
            'Aplicación web que analiza currículums automáticamente con IA y ofrece recomendaciones de mejora. Incluye registro de usuarios, plan gratuito y plan de pago con cobro online vía Stripe. Desplegada y funcionando en producción.',
          image: '/assets/project-1.svg',
          tech: ['Next.js', 'NestJS', 'PostgreSQL', 'Supabase', 'Stripe', 'Gemini API'],
          github: 'https://github.com/franjz20',
        },
        {
          title: 'MiHotel — Plataforma de Reservas de Alojamientos',
          description:
            'Aplicación full stack para publicar y reservar hoteles, hostels y cabañas en Jujuy y Salta. Registro de huéspedes y dueños, autenticación con JWT, panel del dueño para gestionar alojamientos, habitaciones, precios y fotos, y reservas online. API REST con migraciones, validaciones y manejo de errores. Desplegada en producción.',
          image: '/assets/project-2.svg',
          tech: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Next.js'],
          github: 'https://github.com/franjz20',
        },
      ],
    },
    skillsSection: {
      title: 'Tecnologías',
      subtitle: 'Herramientas con las que trabajo a diario',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Bases de datos',
        tools: 'Herramientas',
      },
    },
    education: {
      title: 'Educación y Cursos',
      formalTitle: 'Educación',
      coursesTitle: 'Cursos y certificaciones',
      formal: [
        {
          title: 'Analista Programador Universitario',
          institution: 'Facultad de Ingeniería de Jujuy',
          period: '2020 — 2025',
          description:
            'Formación en programación, estructuras de datos, bases de datos y desarrollo de software.',
        },
      ],
      courses: [
        {
          title: 'React: De cero a experto',
          platform: 'Udemy — Fernando Herrera (DevTalles)',
          year: 'En curso',
        },
      ],
    },
    contact: {
      title: 'Hablemos',
      text: 'Estoy abierto a nuevas oportunidades. Si te interesa mi perfil o tienes un proyecto en mente, escríbeme.',
      cta: 'Enviar mensaje',
      email: 'francodanielj@gmail.com',
    },
    footer: {
      built: 'Diseñado y construido por Franco Juarez',
    },
  },

  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hi, my name is',
      name: 'Franco Juarez',
      role: 'Full Stack Web Developer',
      tagline:
        "I'm a web developer from Jujuy, Argentina. I design and build complete applications — from the API and database to the interface — and ship them to production.",
      ctaProjects: 'View projects',
      ctaContact: 'Get in touch',
    },
    about: {
      title: 'About me',
      paragraphs: [
        "I'm a University Programming Analyst graduate (Faculty of Engineering, Jujuy) and web developer. I'm results-driven: writing clean code, solving real problems and shipping products people can actually use.",
        'I worked as a backend developer on TramitAR, a platform for managing government procedures such as CUIL registration and ANSES/AFIP requests, where I built the API with TypeScript, Node.js, TypeORM and MySQL. On my own, I shipped two personal projects to production: an AI-powered resume analyzer and a lodging booking platform.',
        'I stand out for my communication, listening skills and adaptability. I have experience leading teams and working with the Scrum methodology.',
      ],
      highlightsTitle: 'Quick facts',
      highlights: [
        { label: 'Location', value: 'Jujuy, Argentina' },
        { label: 'Role', value: 'Full Stack Web Developer' },
        { label: 'Focus', value: 'React · Next.js · Java · Node.js' },
      ],
      photoAlt: 'Photo of Franco Juarez',
    },
    projects: {
      title: 'Projects',
      viewCode: 'Code',
      viewDemo: 'Live demo',
      items: [
        {
          title: 'CV Analyzer — AI Resume Analyzer',
          description:
            'Web application that automatically analyzes resumes with AI and provides improvement suggestions. Includes user registration, a free tier and a paid plan with online payments via Stripe. Deployed and running in production.',
          image: '/assets/project-1.svg',
          tech: ['Next.js', 'NestJS', 'PostgreSQL', 'Supabase', 'Stripe', 'Gemini API'],
          github: 'https://github.com/franjz20',
        },
        {
          title: 'MiHotel — Lodging Booking Platform',
          description:
            'Full stack application to publish and book hotels, hostels and cabins in Jujuy and Salta. Guest and owner registration, JWT authentication, owner dashboard to manage properties, rooms, prices and photos, and online booking. REST API with migrations, validations and error handling. Deployed in production.',
          image: '/assets/project-2.svg',
          tech: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Next.js'],
          github: 'https://github.com/franjz20',
        },
      ],
    },
    skillsSection: {
      title: 'Skills',
      subtitle: 'Tools I work with every day',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Databases',
        tools: 'Tools',
      },
    },
    education: {
      title: 'Education & Courses',
      formalTitle: 'Education',
      coursesTitle: 'Courses & certifications',
      formal: [
        {
          title: 'University Programming Analyst',
          institution: 'Faculty of Engineering, Jujuy',
          period: '2020 — 2025',
          description:
            'Degree focused on programming, data structures, databases and software development.',
        },
      ],
      courses: [
        {
          title: 'React: De cero a experto',
          platform: 'Udemy — Fernando Herrera (DevTalles)',
          year: 'In progress',
        },
      ],
    },
    contact: {
      title: 'Get in touch',
      text: 'I am open to new opportunities. If my profile interests you or you have a project in mind, feel free to reach out.',
      cta: 'Send message',
      email: 'francodanielj@gmail.com',
    },
    footer: {
      built: 'Designed & built by Franco Juarez',
    },
  },
}
