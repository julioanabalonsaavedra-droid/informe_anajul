import "./App.css";

function App() {
  return (
    <main className="app">

      <div className="container">

        {/* PORTADA */}

        <header className="hero">

          <div className="heroContent">

            <h1>
              🚨 Ciberataque al Estado Mayor Conjunto (EMCO)
            </h1>

            <p className="subtitulo">
              Informe técnico, legal y análisis de ciberseguridad
            </p>

            <div className="autorBox">

              <span>Autor:</span>

              <strong> Julio Anabalón </strong>

            </div>

          </div>

        </header>



        {/* MENU */}

        <nav className="nav">

          <a href="#resumen">01 Resumen</a>

          <a href="#marco">02 Marco</a>

          <a href="#delitos">03 Delitos</a>

          <a href="#comparacion">04 Comparación</a>

          <a href="#responsabilidades">05 Responsabilidades</a>

          <a href="#datos">06 Datos</a>

          <a href="#conclusiones">07 Conclusiones</a>

          <a href="#prompts">08 Bitácora IA</a>

        </nav>





        {/* RESUMEN */}

        <section
        id="resumen"
        className="section"
        >

        <div className="titleBox">

        <span>01</span>

        <h2>
        Resumen Ejecutivo
        </h2>

        </div>


        <div className="card">

        <p>

        El ciberataque al Estado Mayor Conjunto (EMCO)
        ocurrido durante septiembre del año 2022
        corresponde a uno de los incidentes de
        ciberseguridad más importantes registrados
        en Chile debido a la cantidad de información
        comprometida y las consecuencias asociadas
        a seguridad nacional.

        </p>

        <br/>

        <p>

        El grupo Guacamaya obtuvo acceso no autorizado
        a sistemas institucionales pertenecientes
        al Estado Mayor Conjunto y logró extraer
        aproximadamente 400.000 correos electrónicos
        asociados a organismos militares y administrativos.

        </p>

        <br/>

        <p>

        Entre los documentos comprometidos
        se encontraban:

        </p>

        <ul>

        <li>
        Reportes militares
        </li>

        <li>
        Información estratégica
        </li>

        <li>
        Comunicaciones institucionales
        </li>

        <li>
        Documentación reservada
        </li>

        <li>
        Información asociada a seguridad
        </li>

        </ul>


        <br/>

        <p>

        Las consecuencias principales del incidente fueron:

        </p>


        <ul>

        <li>
        Riesgo para seguridad nacional
        </li>

        <li>
        Exposición de datos institucionales
        </li>

        <li>
        Investigaciones internas
        </li>

        <li>
        Impacto en infraestructura crítica
        </li>

        </ul>

        </div>

        </section>





        {/* MARCO NORMATIVO */}

        <section
        id="marco"
        className="section"
        >

        <div className="titleBox">

        <span>02</span>

        <h2>

        Marco Normativo

        </h2>

        </div>

        <div className="grid">

        <div className="card">

        <h3>

        Ley Nº 21.459

        </h3>

        <p>

        Regula delitos informáticos
        relacionados con acceso ilícito,
        interceptación y manipulación
        de información.

        </p>

        </div>



        <div className="card">

        <h3>

        Ley Nº 19.628

        </h3>

        <p>

        Regula protección y tratamiento
        de datos personales.

        </p>

        </div>



        <div className="card">

        <h3>

        Convenio Budapest

        </h3>

        <p>

        Facilita cooperación internacional
        frente a delitos informáticos.

        </p>

        </div>


        <div className="card">

        <h3>

        ISO 27001

        </h3>

        <p>

        Gestión de seguridad y prevención.

        </p>

        </div>

        </div>

        </section>
                {/* DELITOS */}

        <section
        id="delitos"
        className="section"
        >

        <div className="titleBox">

        <span>03</span>

        <h2>

        Tipificación de Delitos Informáticos

        </h2>

        </div>

        <div className="card">

        <p>

        De acuerdo con la Ley Nº 21.459 sobre delitos informáticos,
        las acciones realizadas durante el ataque al Estado Mayor
        Conjunto pueden asociarse directamente a diversos artículos.

        </p>

        <br/>

        <ul>

        <li>

        <strong>Artículo 2 — Acceso ilícito:</strong>

        Obtención de acceso no autorizado a sistemas
        institucionales pertenecientes al EMCO.

        </li>


        <li>

        <strong>Artículo 3 — Interceptación ilícita:</strong>

        Obtención y extracción de comunicaciones
        electrónicas y correos institucionales.

        </li>


        <li>

        <strong>Artículo 6 — Ataque a integridad de datos:</strong>

        Obtención, manipulación y exposición
        de información almacenada.

        </li>

        </ul>

        <br/>

        <p>

        La conducta observada durante el incidente
        coincide con acciones sancionadas por la legislación
        chilena debido a la existencia de acceso no autorizado,
        obtención de información y vulneración
        de sistemas informáticos.

        </p>

        </div>

        </section>





        {/* COMPARACIÓN */}

        <section
        id="comparacion"
        className="section"
        >

        <div className="titleBox">

        <span>04</span>

        <h2>

        Comparación de marcos regulatorios

        </h2>

        </div>

        <div className="card">

        <table>

        <thead>

        <tr>

        <th>Marco</th>

        <th>Objetivo</th>

        <th>Aplicabilidad</th>

        </tr>

        </thead>


        <tbody>

        <tr>

        <td>Ley 21.459</td>

        <td>

        Delitos informáticos

        </td>

        <td>

        Sanciona acceso ilícito y extracción.

        </td>

        </tr>



        <tr>

        <td>Ley 19.628</td>

        <td>

        Protección datos personales

        </td>

        <td>

        Protege información afectada.

        </td>

        </tr>


        <tr>

        <td>ISO 27001</td>

        <td>

        Gestión seguridad

        </td>

        <td>

        Prevención y controles.

        </td>

        </tr>

        </tbody>

        </table>


        <br/>

        <p>

        La comparación evidencia que cada marco
        posee un enfoque distinto. Mientras la Ley
        21.459 establece sanciones penales, la Ley
        19.628 protege derechos asociados a datos
        personales y la ISO 27001 incorpora medidas
        preventivas.

        </p>

        </div>

        </section>





        {/* RESPONSABILIDADES */}

        <section
        id="responsabilidades"
        className="section"
        >

        <div className="titleBox">

        <span>05</span>

        <h2>

        Responsabilidades legales

        </h2>

        </div>

        <div className="card">

        <ul>

        <li>

        <strong>Grupo Guacamaya:</strong>

        Responsabilidad penal debido
        a acceso ilícito y obtención
        de información.

        </li>


        <li>

        <strong>Estado Mayor Conjunto:</strong>

        Responsabilidad administrativa
        relacionada con medidas
        de protección y seguridad.

        </li>


        <li>

        <strong>Administradores TI:</strong>

        Posibles responsabilidades
        civiles y administrativas
        relacionadas con controles
        internos.

        </li>

        </ul>

        </div>

        </section>





        {/* DATOS */}

        <section
        id="datos"
        className="section"
        >

        <div className="titleBox">

        <span>06</span>

        <h2>

        Tratamiento de Datos Personales

        </h2>

        </div>

        <div className="card">

        <h3>

        Datos comprometidos

        </h3>

        <ul>

        <li>
        Correos electrónicos
        </li>

        <li>
        Nombres funcionarios
        </li>

        <li>
        Cargos institucionales
        </li>

        </ul>


        <br/>

        <h3>

        Clasificación

        </h3>

        <ul>

        <li>
        Datos personales
        </li>

        <li>
        Datos sensibles
        </li>

        </ul>


        <br/>

        <h3>

        Derechos ARCO afectados

        </h3>

        <ul>

        <li>Acceso</li>

        <li>Rectificación</li>

        <li>Cancelación</li>

        <li>Oposición</li>

        </ul>

        </div>

        </section>
                {/* CONCLUSIONES */}

        <section
        id="conclusiones"
        className="section"
        >

        <div className="titleBox">

        <span>07</span>

        <h2>

        Conclusiones y reflexión final

        </h2>

        </div>

        <div className="card">

        <p>

        El caso del ciberataque al Estado Mayor Conjunto
        demuestra que incluso organizaciones consideradas
        críticas pueden presentar vulnerabilidades que
        permitan el acceso no autorizado a sistemas e
        información sensible.

        </p>

        <br/>

        <p>

        La filtración de aproximadamente 400.000 correos
        institucionales generó riesgos asociados a
        seguridad nacional, protección de datos y
        exposición de información estratégica.

        </p>

        <br/>

        <p>

        La existencia de marcos regulatorios como
        la Ley Nº 21.459 y la Ley Nº 19.628 permite
        establecer responsabilidades y medidas
        relacionadas con protección de sistemas y
        datos personales.

        </p>

        <br/>

        <p>

        Se recomienda fortalecer mecanismos
        preventivos mediante:

        </p>

        <ul>

        <li>

        Implementación de autenticación multifactor

        </li>

        <li>

        Capacitación continua de usuarios

        </li>

        <li>

        Actualización permanente de sistemas

        </li>

        <li>

        Aplicación de estándares internacionales
        como ISO 27001

        </li>

        <li>

        Monitoreo continuo de amenazas

        </li>

        </ul>

        <br/>

        <p>

        Como reflexión final, este caso evidencia que
        la ciberseguridad ya no corresponde únicamente
        a un área técnica, sino que constituye una
        necesidad estratégica para cualquier institución.

        </p>

        </div>

        </section>





        {/* BITÁCORA IA */}

        <section
        id="prompts"
        className="section"
        >

        <div className="titleBox">

        <span>08</span>

        <h2>

        Bitácora IA y Prompts utilizados

        </h2>

        </div>

        <div className="card">

        <p>

        Durante el desarrollo del proyecto se utilizó
        inteligencia artificial como apoyo para investigación,
        organización y análisis del caso del ciberataque al
        Estado Mayor Conjunto (EMCO). Las respuestas obtenidas
        fueron revisadas y ajustadas para mantener coherencia
        con el caso y los requisitos de la rúbrica.

        </p>

        <br/>

        <h3>

        Prompts utilizados por sección

        </h3>

        <ul>

        <li>

        <strong>Resumen:</strong>

        "Necesito un caso real de ciberataque ocurrido en Chile que incluya consecuencias, actores involucrados y afectación institucional."

        </li>

        <li>

        <strong>Marco normativo:</strong>

        "Indica normas nacionales e internacionales aplicables al caso EMCO y justifica su relación con hechos concretos."

        </li>

        <li>

        <strong>Delitos:</strong>

        "Relaciona artículos específicos de la Ley Nº 21.459 con las acciones realizadas durante el ataque."

        </li>

        <li>

        <strong>Comparación:</strong>

        "Genera una tabla comparativa entre Ley Nº 21.459, Ley Nº 19.628 e ISO 27001 indicando alcance, objetivo y aplicabilidad."

        </li>

        <li>

        <strong>Responsabilidades:</strong>

        "Identifica actores involucrados y diferencia responsabilidades penales, civiles y administrativas."

        </li>

        <li>

        <strong>Datos:</strong>

        "Clasifica datos comprometidos entre personales y sensibles e identifica derechos ARCO afectados."

        </li>

        <li>

        <strong>Conclusiones:</strong>

        "Genera conclusiones y recomendaciones sobre medidas preventivas para reducir riesgos similares."

        </li>

        </ul>

        <br/>

        <h3>

        Correcciones realizadas

        </h3>

        <ul>

        <li>

        Inicialmente se generó contenido resumido y fue necesario ampliar información para ajustarse a la rúbrica.

        </li>

        <li>

        Se corrigieron responsabilidades legales agregando tipos de responsabilidad y relación con normas.

        </li>

        <li>

        Se agregaron artículos específicos de la Ley Nº 21.459 para mejorar precisión.

        </li>

        <li>

        Se reorganizó el contenido para convertir una infografía en un informe completo.

        </li>

        </ul>

        <br/>

        <h3>

        Reflexión final sobre IA

        </h3>

        <p>

        La inteligencia artificial fue utilizada como una herramienta de apoyo y no como sustituto del análisis humano. El chatbot permitió generar ideas y organizar información, mientras que el usuario actuó como agente activo revisando, corrigiendo y adaptando las respuestas según el contexto del caso y los criterios de evaluación.

        </p>

        </div>

        </section>





        {/* FOOTER */}

        <footer>

        <p>

        Julio Anabalón | Proyecto EMCO | React + Vite

        </p>

        <br/>

        <p>

        Informe académico sobre análisis de
        ciberseguridad y delitos informáticos.

        </p>

        </footer>

      </div>

    </main>

  );
}

export default App;