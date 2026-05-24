import "./App.css";

function App() {
  return (
    <div className="container">

      {/* Encabezado */}

      <div className="hero">

        <h1>
          🚨 Ciberataque al <br />
          Estado Mayor Conjunto (EMCO)
        </h1>

        <p>
          Análisis legal y de ciberseguridad del incidente ocurrido en Chile durante 2022
        </p>

      </div>


      {/* RESUMEN */}

      <div className="card">

        <h2>📌 Resumen Ejecutivo</h2>

        <div className="grid">

          <div className="miniCard">

            <h3>¿Qué ocurrió?</h3>

            <p>
              El grupo de hackers Guacamaya obtuvo acceso no autorizado
              a sistemas pertenecientes al Estado Mayor Conjunto (EMCO),
              logrando extraer y filtrar aproximadamente 400.000 correos
              electrónicos institucionales.
            </p>

          </div>

          <div className="miniCard">

            <h3>📅 Fecha</h3>

            <p>
              Septiembre de 2022
            </p>

          </div>

          <div className="miniCard">

            <h3>👥 Actores involucrados</h3>

            <p>
              • Grupo Guacamaya <br/>
              • Estado Mayor Conjunto <br/>
              • Funcionarios afectados <br/>
              • Estado de Chile
            </p>

          </div>

        </div>

      </div>



      {/* MARCO */}

      <div className="card">

        <h2>⚖ Marco Normativo</h2>

        <div className="grid">

          <div className="miniCard">

            <h3>Ley Nº 21.459</h3>

            <p>
              Sanciona delitos informáticos como acceso ilícito,
              interceptación y manipulación de información.
            </p>

          </div>


          <div className="miniCard">

            <h3>Ley Nº 19.628</h3>

            <p>
              Protege datos personales y privacidad de personas afectadas.
            </p>

          </div>


          <div className="miniCard">

            <h3>Convenio Budapest</h3>

            <p>
              Facilita cooperación internacional frente a ciberdelitos.
            </p>

          </div>


          <div className="miniCard">

            <h3>ISO 27001</h3>

            <p>
              Estándar internacional para gestión de seguridad.
            </p>

          </div>

        </div>

      </div>



      {/* DELITOS */}

      <div className="card">

        <h2>🚨 Delitos Asociados</h2>

        <div className="grid">

          <div className="miniCard">

            <h3>Acceso ilícito</h3>

            <p>
              Ingreso no autorizado a servidores institucionales.
            </p>

          </div>

          <div className="miniCard">

            <h3>Interceptación ilícita</h3>

            <p>
              Obtención de comunicaciones privadas.
            </p>

          </div>

          <div className="miniCard">

            <h3>Ataque a integridad de datos</h3>

            <p>
              Extracción masiva de información protegida.
            </p>

          </div>

          <div className="miniCard">

            <h3>Ataque a sistemas</h3>

            <p>
              Afectación a infraestructura tecnológica institucional.
            </p>

          </div>

        </div>

      </div>



      {/* RESPONSABILIDADES */}

      <div className="card">

        <h2>👨‍⚖ Responsabilidades</h2>

        <div className="grid">

          <div className="miniCard">

            <h3>Grupo Guacamaya</h3>

            <p>
              Responsabilidad penal por acceso ilícito y
              obtención ilegal de información.
            </p>

          </div>

          <div className="miniCard">

            <h3>EMCO</h3>

            <p>
              Responsabilidad administrativa relacionada con
              protección y gestión de información.
            </p>

          </div>

          <div className="miniCard">

            <h3>Administradores TI</h3>

            <p>
              Posible responsabilidad por negligencia o
              debilidad en controles.
            </p>

          </div>

        </div>

      </div>



      {/* DATOS */}

      <div className="card">

        <h2>🔒 Datos afectados</h2>

        <div className="grid">

          <div className="miniCard">

            <h3>Datos personales</h3>

            <p>
              Nombres, correos electrónicos y cargos.
            </p>

          </div>

          <div className="miniCard">

            <h3>Datos sensibles</h3>

            <p>
              Información estratégica y reservada.
            </p>

          </div>

          <div className="miniCard">

            <h3>Derechos ARCO</h3>

            <p>
              Acceso, Rectificación, Cancelación y Oposición.
            </p>

          </div>

        </div>

      </div>



      {/* CONCLUSIÓN */}

      <div className="card">

        <h2>🛡 Recomendaciones Finales</h2>

        <ul>

          <li>Implementar autenticación multifactor</li>

          <li>Actualizar sistemas periódicamente</li>

          <li>Capacitar personal</li>

          <li>Monitorear vulnerabilidades</li>

          <li>Aplicar ISO 27001</li>

        </ul>

      </div>

    </div>
  );
}

export default App;