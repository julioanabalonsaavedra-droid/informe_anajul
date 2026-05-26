import "./App.css";

function App() {
  return (
    <main className="app">

      <div className="container">

        {/* PORTADA */}

        <header className="hero">

          <h1>
            🚨 Ciberataque al Estado Mayor Conjunto (EMCO)
          </h1>

          <p>
            Informe técnico, legal y de ciberseguridad
          </p>

          <br/>

          <p>
            Autor: Julio Anabalón
          </p>

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

          <div className="card">

            <p>

              La ciberseguridad representa uno de los mayores desafíos
              para organizaciones públicas y privadas debido al aumento
              constante de amenazas digitales, vulnerabilidades y ataques
              informáticos.

            </p>

            <br/>

            <p>

              Durante los últimos años, las instituciones han debido
              fortalecer sus sistemas debido a que la información digital
              se ha transformado en uno de los activos más importantes
              para cualquier organización.

            </p>

            <br/>

            <p>

              En Chile uno de los casos más relevantes relacionados con
              seguridad informática fue el ataque sufrido por el Estado
              Mayor Conjunto (EMCO) durante el año 2022.

            </p>

          </div>

        </section>




        {/* RESUMEN */}

        <section id="resumen" className="section">

          <h2>📌 Resumen Ejecutivo</h2>

          <div className="card">

            <p>

              Durante septiembre de 2022 el grupo conocido como
              Guacamaya obtuvo acceso no autorizado a sistemas
              pertenecientes al Estado Mayor Conjunto.

            </p>

            <br/>

            <p>

              El incidente permitió la extracción de aproximadamente
              400.000 correos electrónicos institucionales que
              posteriormente fueron publicados.

            </p>

            <br/>

            <p>

              La filtración generó riesgos relacionados con seguridad
              institucional, exposición de información y protección
              de datos.

            </p>

          </div>

        </section>




        {/* MARCO */}

        <section id="marco" className="section">

          <h2>⚖ Marco Normativo</h2>

          <div className="grid">

            <div className="card">

              <h3>Ley Nº 21.459</h3>

              <p>

                Establece delitos informáticos en Chile y sanciona
                acciones relacionadas con acceso ilícito, manipulación
                y ataques contra sistemas.

              </p>

            </div>

            <div className="card">

              <h3>Ley Nº 19.628</h3>

              <p>

                Regula el tratamiento y protección de datos personales.

              </p>

            </div>

            <div className="card">

              <h3>Convenio Budapest</h3>

              <p>

                Facilita cooperación internacional frente a ciberdelitos.

              </p>

            </div>

            <div className="card">

              <h3>ISO 27001</h3>

              <p>

                Estándar internacional relacionado con seguridad
                informática.

              </p>

            </div>

          </div>

        </section>





        {/* DELITOS */}

        <section id="delitos" className="section">

          <h2>🚨 Delitos Informáticos</h2>

          <div className="card">

            <ul>

              <li>
                Acceso ilícito a sistemas informáticos.
              </li>

              <li>
                Interceptación ilícita de comunicaciones.
              </li>

              <li>
                Ataque a integridad de datos.
              </li>

              <li>
                Ataque a integridad de sistemas.
              </li>

            </ul>

          </div>

        </section>





        {/* COMPARACION */}

        <section id="comparacion" className="section">

          <h2>📊 Comparación Normativa</h2>

          <div className="card">

            <table>

              <thead>

              <tr>

                <th>Norma</th>
                <th>Enfoque</th>
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
                <td>Privacidad</td>
                <td>Datos personales</td>

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




        {/* RESPONSABILIDADES */}

        <section id="responsabilidades" className="section">

          <h2>👨‍⚖ Responsabilidades</h2>

          <div className="card">

            <ul>

              <li>
                Grupo Guacamaya → Responsabilidad penal.
              </li>

              <li>
                EMCO → Responsabilidad administrativa.
              </li>

              <li>
                Administradores TI → Posible negligencia.
              </li>

            </ul>

          </div>

        </section>





        {/* DATOS */}

        <section id="datos" className="section">

          <h2>🔒 Datos y Derechos ARCO</h2>

          <div className="card">

            <p>

              Entre los datos afectados se encontraban:

            </p>

            <br/>

            <ul>

              <li>Nombres</li>

              <li>Correos electrónicos</li>

              <li>Cargos</li>

              <li>Información institucional</li>

            </ul>

            <br/>

            <p>

              Los derechos ARCO consideran:

            </p>

            <br/>

            <ul>

              <li>Acceso</li>

              <li>Rectificación</li>

              <li>Cancelación</li>

              <li>Oposición</li>

            </ul>

          </div>

        </section>




        {/* CONCLUSIONES */}

        <section id="conclusiones" className="section">

          <h2>🛡 Conclusiones</h2>

          <div className="card">

            <p>

              El caso EMCO demuestra que incluso instituciones
              críticas pueden verse afectadas por amenazas
              digitales avanzadas.

            </p>

            <br/>

            <p>

              La implementación de medidas preventivas,
              capacitación continua y mejores controles
              de seguridad puede reducir riesgos futuros.

            </p>

          </div>

        </section>


        <footer>

          Julio Anabalón | Proyecto EMCO | React + Vite

        </footer>

      </div>

    </main>
  )
}

export default App;