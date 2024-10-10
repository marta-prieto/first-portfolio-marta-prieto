import foto from './linkedin_photo_24.jpeg';
import constructionPic from './under_construction.jpg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS

function App() {
  return (
    <div className="App">
    {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Prueba <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <header class="bg-light py-3">
        <div class="container d-flex justify-content-between align-items-center">
            <div class="logo">Mi Logo</div>
            <nav>
                <ul class="nav">
                    <li class="nav-item"><a class="nav-link" href="#perfil">Perfil Profesional</a></li>
                    <li class="nav-item"><a class="nav-link" href="#experiencia">Experiencia</a></li>
                    <li class="nav-item"><a class="nav-link" href="#habilidades">Habilidades y Conocimientos</a></li>
                    <li class="nav-item"><a class="nav-link" href="#formacion">Formación</a></li>
                    <li class="nav-item"><a class="nav-link" href="#soft-skills">Soft Skills</a></li>
                    <li class="nav-item"><a class="nav-link" href="#ocio">Ocio</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section id="bienvenida" class="text-center py-5 bg-light">
        <div class="container">
        <p class="building_alert">¡APP EN CONSTRUCCIÓN!</p>
        <img src={constructionPic} alt={"Foto web en desarrollo"} class=""/>
            <h1>¡Hola! Soy Marta</h1>
            <p>Frontend Web Developer</p>
        </div>
    </section>

    <section id="perfil" class="py-5">
        <div class="container text-center">
            <h2>Perfil Profesional</h2>
            <img src={foto} alt={"Foto de Perfil"} class="foto rounded-circle mb-3"/>

        </div>
    </section>

    <section id="experiencia" class="py-5 bg-light">
        <div class="container">
            <h2 class="text-center">Experiencia</h2>
            <div class="timeline">
                {/*  Añadir elementos de la línea de tiempo aquí */}
            </div>
        </div>
    </section>

    <section id="habilidades" class="py-5">
        <div class="container">
            <h2 class="text-center">Habilidades y Conocimientos</h2>
            <div class="skills">
            {/*   ejemplos de tecnologías */}
            </div>
        </div>
    </section>

    <section id="formacion" class="py-5 bg-light">
        <div class="container">
            <h2 class="text-center">Formación</h2>
            <div class="education">
            {/*   Universidad y cursos */}
            </div>
        </div>
    </section>

    <section id="soft-skills" class="py-5">
        <div class="container">
            <h2 class="text-center">Soft Skills</h2>
            <div class="soft-skills">
            {/*   soft skills y aptitudes */}
            </div>
        </div>
    </section>

    <section id="ocio" class="py-5 bg-light">
        <div class="container">
            <h2 class="text-center">Ocio</h2>
            <div class="hobbies">
            {/*   gustos y ocio */}
            </div>
        </div>
    </section>

    <footer class="bg-light py-3">
        <div class="container text-center">
            <div class="social-media mb-3">
            {/*   redes sociales  */}
            </div>
            <form>
                <label for="contact">Contacto:</label>
                <input type="text" id="contact" name="contact" class="form-control mb-2" placeholder="Tu mensaje"/>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
        </div>
    </footer>

    
    </div>
  );
}

export default App;
