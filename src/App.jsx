import "./App.css";

function App() {
  return (
    <main className="app">

      <div className="container">

        <header className="hero">

          <h1>
            🚨 Ciberataque al Estado Mayor Conjunto (EMCO)
          </h1>

          <p>
            Análisis legal, técnico y de ciberseguridad
            del incidente ocurrido en Chile durante 2022
          </p>

        </header>

        <nav className="nav">

          <a href="#resumen">Resumen</a>
          <a href="#marco">Marco</a>
          <a href="#delitos">Delitos</a>
          <a href="#comparacion">Comparación</a>
          <a href="#responsabilidades">Responsabilidades</a>
          <a href="#datos">Datos</a>
          <a href="#conclusiones">Conclusiones</a>

        </nav>



        <section id="resumen" className="section">

          <h2>📌 Resumen Ejecutivo</h2>

          <div className="card">

            <p>
              Durante septiembre de 2022 el Estado Mayor Conjunto
              sufrió un ciberataque atribuido al grupo Guacamaya.

              Los atacantes obtuvieron acceso no autorizado a sistemas
              institucionales y lograron filtrar aproximadamente
              400.000 correos electrónicos.
            </p>

          </div>

        </section>



        <section id="marco" className="section">

          <h2>⚖ Marco Normativo</h2>

          <div className="grid">

            <div className="card">

              <h3>Ley 21.459</h3>

              <p>
                Regula delitos informáticos en Chile.
              </p>

            </div>

            <div className="card">

              <h3>Ley 19.628</h3>

              <p>
                Protección de datos personales.
              </p>

            </div>

            <div className="card">

              <h3>Convenio Budapest</h3>

              <p>
                Cooperación internacional.
              </p>

            </div>

            <div className="card">

              <h3>ISO 27001</h3>

              <p>
                Gestión de seguridad.
              </p>

            </div>

          </div>

        </section>




        <section id="delitos" className="section">

          <h2>🚨 Delitos asociados</h2>

          <ul>

            <li>Acceso ilícito a sistemas</li>

            <li>Interceptación ilícita</li>

            <li>Ataque a integridad de datos</li>

            <li>Ataque a integridad de sistemas</li>

          </ul>

        </section>



        <section id="comparacion" className="section">

          <h2>📊 Comparación</h2>

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

        </section>




        <section id="responsabilidades" className="section">

          <h2>👨‍⚖ Responsabilidades</h2>

          <div className="card">

            <ul>

              <li>Grupo Guacamaya → Responsabilidad penal</li>

              <li>EMCO → Responsabilidad administrativa</li>

              <li>Administradores TI → Posible negligencia</li>

            </ul>

          </div>

        </section>



        <section id="datos" className="section">

          <h2>🔒 Datos y Derechos ARCO</h2>

          <div className="grid">

            <div className="card">

              <h3>Datos personales</h3>

              <p>Nombres, cargos y correos.</p>

            </div>

            <div className="card">

              <h3>Datos sensibles</h3>

              <p>Información estratégica.</p>

            </div>

            <div className="card">

              <h3>Derechos ARCO</h3>

              <p>
                Acceso,
                Rectificación,
                Cancelación
                y Oposición.
              </p>

            </div>

          </div>

        </section>



        <section id="conclusiones" className="section">

          <h2>🛡 Conclusiones</h2>

          <div className="card">

            <p>
              Este caso demuestra la importancia
              de fortalecer medidas de ciberseguridad
              y protección de información crítica.
            </p>

          </div>

        </section>

        <footer>

          Julio Anabalón | Proyecto EMCO | React + Vite

        </footer>

      </div>

    </main>
  );
}

export default App;