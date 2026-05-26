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

            <p>
              Informe técnico, legal y de ciberseguridad
            </p>

            <span className="autor">
              Autor: Julio Anabalón
            </span>

          </div>

        </header>



        {/* NAVEGACIÓN */}

        <nav className="nav">

          <a href="#introduccion">Introducción</a>
          <a href="#resumen">Resumen</a>
          <a href="#marco">Marco</a>
          <a href="#delitos">Delitos</a>
          <a href="#comparacion">Comparación</a>
          <a href="#responsabilidades">Responsabilidades</a>
          <a href="#datos">Datos</a>
          <a href="#conclusiones">Conclusiones</a>

        </nav>



        {/* INTRODUCCIÓN */}

        <section id="introduccion" className="section">

          <h2>📖 Introducción</h2>

          <article className="card">

            <p>
              La ciberseguridad representa uno de los principales
              desafíos actuales para instituciones públicas y privadas.
              El crecimiento de amenazas digitales y ataques
              informáticos ha obligado a las organizaciones a
              fortalecer mecanismos de protección.
            </p>

            <br/>

            <p>
              Durante el año 2022 Chile enfrentó uno de los casos
              más relevantes relacionados con seguridad informática:
              el ataque sufrido por el Estado Mayor Conjunto (EMCO).
            </p>

          </article>

        </section>




        {/* RESUMEN */}

        <section id="resumen" className="section">

          <h2>📌 Resumen Ejecutivo</h2>

          <article className="card">

            <p>
              Durante septiembre de 2022 el grupo Guacamaya obtuvo
              acceso no autorizado a sistemas institucionales del
              Estado Mayor Conjunto.
            </p>

            <br/>

            <p>
              El incidente permitió la extracción aproximada de
              400.000 correos electrónicos institucionales.
            </p>

          </article>

        </section>




        {/* MARCO */}

        <section id="marco" className="section">

          <h2>⚖ Marco Normativo</h2>

          <div className="grid">

            <article className="card">
              <h3>Ley Nº 21.459</h3>
              <p>Regula delitos informáticos en Chile.</p>
            </article>

            <article className="card">
              <h3>Ley Nº 19.628</h3>
              <p>Protección de datos personales.</p>
            </article>

            <article className="card">
              <h3>Convenio Budapest</h3>
              <p>Cooperación internacional.</p>
            </article>

            <article className="card">
              <h3>ISO 27001</h3>
              <p>Seguridad de información.</p>
            </article>

          </div>

        </section>



        {/* TABLA RESPONSIVE */}

        <section
        id="comparacion"
        className="section"
        >

          <h2>📊 Comparación</h2>

          <div className="tableContainer">

            <table>

              <thead>

                <tr>

                  <th>Norma</th>
                  <th>Objetivo</th>
                  <th>Aplicación</th>

                </tr>

              </thead>

              <tbody>

                <tr>

                  <td>Ley 21.459</td>
                  <td>Delitos</td>
                  <td>Sanciones</td>

                </tr>

                <tr>

                  <td>Ley 19.628</td>
                  <td>Datos</td>
                  <td>Privacidad</td>

                </tr>

                <tr>

                  <td>ISO 27001</td>
                  <td>Seguridad</td>
                  <td>Prevención</td>

                </tr>

              </tbody>

            </table>

          </div>

        </section>



        <footer>

          Julio Anabalón | Proyecto EMCO | React + Vite

        </footer>

      </div>

    </main>
  )
}

export default App