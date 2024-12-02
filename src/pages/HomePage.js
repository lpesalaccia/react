import React from "react";

const HomePage = (props) => {
  return (
    <main className="holder">
      <div className="foto">
        <img src="img/cafe.jpg" className="d-block w-100" alt="home" />
      </div>

      <div className="contenidos">
        <div className="bienvenidos">
          <h2>Bienvenidos a Expresso Hub!</h2>

          <p>
            En esta página, queremos facilitarte el acceso a excelentes opciones
            de café. Sabemos que salir a disfrutar de un buen café puede ser
            complicado y, a veces, costoso. Con tantas opciones disponibles,
            encontrar un lugar que se ajuste a tus preferencias y presupuesto no
            siempre es fácil. Te ofrecemos una guía para que descubras
            cafeterías que destacan por su calidad, sin que eso signifique un
            gasto excesivo.
          </p>

          <p>
            Unite y escubrí cómo disfrutar del café de especialidad de manera
            sencilla y conveniente, aprovechando los beneficios que ofrecemos
            para hacer cada salida aún más agradable.
          </p>
        </div>

        <div className="testimonios">
          <h2>Testimonios</h2>

          <div className="testimonios-secciones">
            <div>
              <h3>María González</h3>
              <p>
                "Gracias a esta guía, he descubierto cafeterías increíbles sin
                gastar demasiado."
              </p>
            </div>

            <div>
              <h3>Carlos Petersen</h3>
              <p>
                "Encontrar café de calidad a buen precio solía ser complicado,
                pero ahora tengo varias opciones geniales. ¡La recomiendo
                totalmente!"
              </p>
            </div>

            <div>
              <h3>Lucas Devoto</h3>
              <p>
                "Esta página me llevó a lugares únicos que no conocía. Ahora
                disfruto del café de especialidad sin preocuparme por el
                precio."
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
