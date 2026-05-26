import "./App.css";

function App() {
return (

<main className="app">

<div className="container">

<header className="hero">

<h1>🚨 Ciberataque al Estado Mayor Conjunto (EMCO)</h1>

<p>
Informe técnico, legal y análisis de ciberseguridad
</p>

<p className="autor">
Autor: Julio Anabalón
</p>

</header>


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



<section
id="introduccion"
className="section"
>

<h2>📖 Introducción</h2>

<div className="card">

<p>

La ciberseguridad constituye uno de los principales desafíos para instituciones públicas y privadas debido al crecimiento de amenazas digitales.

</p>

<br/>

<p>

Durante el año 2022 Chile enfrentó uno de los incidentes más relevantes relacionados con seguridad informática: el ataque sufrido por el Estado Mayor Conjunto (EMCO), atribuido al grupo Guacamaya.

</p>

<br/>

<p>

Este caso permite analizar delitos informáticos, normativas legales, protección de datos y responsabilidades asociadas.

</p>

</div>

</section>



<section
id="resumen"
className="section"
>

<h2>📌 Resumen Ejecutivo</h2>

<div className="card">

<p>

En septiembre de 2022 el grupo Guacamaya obtuvo acceso no autorizado a sistemas del Estado Mayor Conjunto.

</p>

<br/>

<p>

Los atacantes lograron extraer aproximadamente 400.000 correos electrónicos institucionales.

</p>

<br/>

<p>

El incidente produjo riesgos relacionados con seguridad institucional, protección de datos personales y exposición de información sensible.

</p>

</div>

</section>




<section
id="marco"
className="section"
>

<h2>⚖ Marco Normativo</h2>

<div className="grid">

<div className="card">

<h3>Ley 21.459</h3>

<p>

Regula delitos informáticos en Chile y aplica al acceso no autorizado y extracción de información.

</p>

</div>

<div className="card">

<h3>Ley 19.628</h3>

<p>

Protección y tratamiento de datos personales comprometidos.

</p>

</div>

<div className="card">

<h3>Convenio Budapest</h3>

<p>

Cooperación internacional para investigación de delitos informáticos.

</p>

</div>

<div className="card">

<h3>ISO 27001</h3>

<p>

Estándar para gestión y prevención de incidentes de seguridad.

</p>

</div>

</div>

</section>




<section
id="delitos"
className="section"
>

<h2>🚨 Delitos Informáticos (Ley 21.459)</h2>

<div className="card">

<ul>

<li>

Artículo 2:
Acceso ilícito a sistemas informáticos.

</li>

<li>

Artículo 3:
Interceptación ilícita de información.

</li>

<li>

Artículo 6:
Ataque a integridad de datos y sistemas.

</li>

</ul>

</div>

</section>




<section
id="comparacion"
className="section"
>

<h2>📊 Comparación de marcos regulatorios</h2>

<div className="tableContainer">

<table>

<thead>

<tr>

<th>Norma</th>
<th>Alcance</th>
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
Sanciona acciones del atacante
</td>

</tr>

<tr>

<td>Ley 19.628</td>

<td>
Datos personales
</td>

<td>
Protección información afectada
</td>

</tr>

<tr>

<td>ISO 27001</td>

<td>
Seguridad
</td>

<td>
Prevención y controles
</td>

</tr>

</tbody>

</table>

</div>

</section>




<section
id="responsabilidades"
className="section"
>

<h2>👨‍⚖ Responsabilidades legales</h2>

<div className="card">

<ul>

<li>

Grupo Guacamaya:
Responsabilidad penal por acceso ilícito.

</li>

<li>

EMCO:
Responsabilidad administrativa por controles internos.

</li>

<li>

Administradores TI:
Posible responsabilidad civil y administrativa.

</li>

</ul>

</div>

</section>




<section
id="datos"
className="section"
>

<h2>🔒 Datos personales y derechos ARCO</h2>

<div className="card">

<h3>Datos comprometidos</h3>

<ul>

<li>Correos electrónicos</li>

<li>Nombres de funcionarios</li>

<li>Cargos institucionales</li>

</ul>

<br/>

<h3>Clasificación</h3>

<ul>

<li>Datos personales</li>

<li>Datos sensibles</li>

</ul>

<br/>

<h3>Derechos ARCO afectados</h3>

<ul>

<li>Acceso</li>
<li>Rectificación</li>
<li>Cancelación</li>
<li>Oposición</li>

</ul>

</div>

</section>




<section
id="conclusiones"
className="section"
>

<h2>🛡 Conclusiones</h2>

<div className="card">

<p>

El caso EMCO demuestra que incluso organizaciones críticas pueden sufrir incidentes de seguridad relevantes.

</p>

<br/>

<p>

La implementación de autenticación multifactor, capacitación continua, actualización tecnológica y aplicación de normas como ISO 27001 permiten reducir riesgos futuros.

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