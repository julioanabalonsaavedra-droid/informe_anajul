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

        <p>

        La siguiente tabla compara distintos marcos regulatorios
        y estándares aplicables al caso del ciberataque al
        Estado Mayor Conjunto (EMCO), considerando alcance,
        sujetos regulados, sanciones y aplicabilidad práctica
        dentro del incidente analizado.

        </p>

        <br/>

        <div className="tableContainer">

        <table>

        <thead>

        <tr>

        <th>Marco</th>
        <th>Alcance</th>
        <th>Sujeto regulado</th>
        <th>Sanciones / Consecuencias</th>
        <th>Aplicabilidad en el caso EMCO</th>

        </tr>

        </thead>

        <tbody>

        <tr>

        <td>Ley Nº 21.459</td>

        <td>
        Regula delitos informáticos:
        acceso ilícito, interceptación,
        ataque a sistemas y manipulación de datos.
        </td>

        <td>
        Personas naturales y responsables
        de delitos informáticos.
        </td>

        <td>
        Penas privativas de libertad,
        multas y sanciones penales.
        </td>

        <td>
        Aplica directamente por acceso
        no autorizado y extracción de correos.
        </td>

        </tr>

        <tr>

        <td>Ley Nº 19.628</td>

        <td>
        Protección y tratamiento
        de datos personales.
        </td>

        <td>
        Organizaciones públicas y privadas.
        </td>

        <td>
        Responsabilidad administrativa y
        protección de derechos.
        </td>

        <td>
        Aplica por exposición de datos
        personales en registros y correos.
        </td>

        </tr>

        <tr>

        <td>Convenio Budapest</td>

        <td>
        Cooperación internacional frente
        a delitos informáticos.
        </td>

        <td>
        Estados firmantes y organismos
        internacionales.
        </td>

        <td>
        Coordinación judicial internacional.
        </td>

        <td>
        Facilita investigación y cooperación.
        </td>

        </tr>

        <tr>

        <td>ISO 27001</td>

        <td>
        Seguridad y gestión
        de información.
        </td>

        <td>
        Instituciones públicas y privadas.
        </td>

        <td>
        No establece sanciones legales.
        </td>

        <td>
        Permite controles preventivos
        y gestión de riesgos.
        </td>

        </tr>

        </tbody>

        </table>

        </div>

        <br/>

        <p>

        La comparación evidencia que cada
        marco regulatorio cumple funciones
        diferentes dentro del caso analizado,
        permitiendo abordar aspectos penales,
        administrativos, preventivos y de
        protección de información.

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

Responsabilidades legales de los actores

</h2>

</div>

<div className="card">

<p>

La siguiente sección identifica los principales actores
involucrados dentro del caso del Estado Mayor Conjunto
(EMCO), diferenciando tipos de responsabilidades y
normas aplicables según el contexto del incidente.

</p>

<br/>


<h3>

Grupo Guacamaya (Atacantes)

</h3>

<ul>

<li>

<strong>Tipo:</strong>
Responsabilidad penal

</li>

<li>

<strong>Norma:</strong>
Ley Nº 21.459

</li>

<li>

<strong>Artículos aplicables:</strong>

Artículo 2 (Acceso ilícito),
Artículo 3 (Interceptación ilícita)
y Artículo 6 (Ataque a integridad de datos).

</li>

<li>

<strong>Justificación:</strong>

Obtuvieron acceso no autorizado a sistemas
institucionales y extrajeron aproximadamente
400.000 correos electrónicos.

</li>

</ul>

<br/>


<h3>

Estado Mayor Conjunto (EMCO)

</h3>

<ul>

<li>

<strong>Tipo:</strong>

Responsabilidad administrativa

</li>

<li>

<strong>Norma:</strong>

Ley Nº 21.663 (Marco de Ciberseguridad)

</li>

<li>

<strong>Artículo aplicable:</strong>

Obligaciones relacionadas con
protección de infraestructura crítica
y gestión de incidentes.

</li>

<li>

<strong>Justificación:</strong>

La institución posee responsabilidad
sobre implementación de controles,
protección de sistemas y medidas
preventivas.

</li>

</ul>

<br/>


<h3>

Administradores y encargados TI

</h3>

<ul>

<li>

<strong>Tipo:</strong>

Responsabilidad civil y administrativa

</li>

<li>

<strong>Norma:</strong>

Ley Nº 19.628
e ISO 27001

</li>

<li>

<strong>Artículo aplicable:</strong>

Ley Nº 19.628 sobre protección
y tratamiento de datos personales.

</li>

<li>

<strong>Justificación:</strong>

Podría existir responsabilidad asociada
a falta de controles, negligencia o
gestión inadecuada de seguridad.

</li>

</ul>

<br/>

<p>

La diferenciación entre tipos de
responsabilidad permite identificar que
las consecuencias legales no afectan
únicamente a los atacantes, sino también
a instituciones y responsables de gestión
tecnológica dependiendo de sus acciones
u omisiones.

</p>

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

Tratamiento de Datos Personales (Ley Nº 19.628)

</h2>

</div>

<div className="card">

<p>

Durante el incidente sufrido por el Estado Mayor
Conjunto (EMCO), la filtración de correos y documentos
institucionales pudo comprometer distintos tipos de
datos personales asociados a funcionarios y personas
relacionadas con organismos militares.

</p>

<br/>

<h3>

Datos personales identificados
(Ley Nº 19.628 Artículo 2 letra f)

</h3>

<ul>

<li>

Nombres y apellidos de funcionarios.

</li>

<li>

Correos electrónicos institucionales.

</li>

<li>

Cargos y funciones desempeñadas.

</li>

<li>

Números telefónicos.

</li>

<li>

Identificación institucional.

</li>

<li>

Información asociada a comunicaciones internas.

</li>

</ul>

<br/>


<h3>

Datos sensibles identificados
(Ley Nº 19.628 Artículo 2 letra g)

</h3>

<ul>

<li>

Información médica eventualmente registrada.

</li>

<li>

Información relacionada con seguridad nacional.

</li>

<li>

Datos biométricos
(si existieran sistemas de autenticación).

</li>

<li>

Información asociada a antecedentes personales sensibles.

</li>

</ul>

<br/>


<h3>

Derechos ARCO afectados

</h3>

<p>

Los derechos ARCO corresponden a mecanismos
establecidos por la Ley Nº 19.628 que permiten
a las personas ejercer control sobre sus datos.

</p>

<br/>

<ul>

<li>

<strong>Acceso:</strong>

Permite conocer qué información personal
está siendo tratada.

</li>

<li>

<strong>Rectificación:</strong>

Permite corregir datos incorrectos
o desactualizados.

</li>

<li>

<strong>Cancelación:</strong>

Permite solicitar eliminación de
información cuando corresponda.

</li>

<li>

<strong>Oposición:</strong>

Permite impedir utilización de datos
para determinados fines.

</li>

</ul>

<br/>

<h3>

Aplicación al caso EMCO

</h3>

<p>

La exposición de información institucional y
personal genera riesgos asociados a privacidad,
suplantación de identidad, uso indebido de datos
y vulneración de derechos establecidos por la Ley
Nº 19.628. Esto evidencia la importancia de aplicar
medidas de protección y tratamiento seguro de la
información almacenada.

</p>

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

        <footer className="footer">

        <p>

        Julio Anabalón | Proyecto EMCO | React + Vite

        </p>

        <br/>

        <p>

        Informe académico sobre análisis de
        ciberseguridad y delitos informáticos.

        </p>

        <div className="footerGithub">

        <span>

        Encuéntrame en GitHub

        </span>

        <a
        href="https://github.com/julioanabalonsaavedra-droid"
        target="_blank"
        rel="noopener noreferrer"
        className="githubBtn"
        >

        🐙 github.com/julioanabalonsaavedra-droid

        </a>

        </div>

        </footer>

      </div>

    </main>

  );
}

export default App;