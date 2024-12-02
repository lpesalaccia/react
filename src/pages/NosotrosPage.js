import React from "react";

const NosotrosPage = (props) => {
  return (
    <main className="holder">
      <div className="contenidos">
        <div className="historia">
          <h2>Historia</h2>
          <p>
            En Buenos Aires, Martín y Ana siempre buscaban el café perfecto,
            pero notaron que muchas cafeterías de especialidad no lograban
            destacar. Para ayudar a estos locales, decidieron crear Expresso
            Hub, una plataforma online que conecta a los amantes del café con
            las mejores cafeterías de la ciudad.
          </p>
          <p>
            La propuesta era simple: ofrecer descuentos exclusivos a los
            usuarios registrados, animando a la gente a descubrir y disfrutar de
            estas joyas ocultas. Al hablar con varios dueños de cafeterías,
            lograron reunir un grupo comprometido con la calidad y la pasión por
            el café.
          </p>
          <p>
            Hoy, Expresso Hub no solo ofrece descuentos, sino que también se ha
            convertido en un referente para quienes buscan la mejor experiencia
            cafetera en Buenos Aires, apoyando a las cafeterías locales en su
            crecimiento.
          </p>
        </div>
        <div className="staff">
          <h2>Staff</h2>
          <div className="personas">
            <div className="persona">
              <img src="img/perfiljuan.jpg" alt="juan" />
              <h5>Juan Gómez</h5>
              <h6>Director de operaciones</h6>
              <p>
                Juan, es el motor de nuestro equipo. Su experiencia en la
                gestión de locales garantiza que cada café cumpla con nuestros
                altos estándares. Siempre en busca de la perfección, su amor por
                el café lo lleva a explorar nuevas técnicas de preparación.
              </p>
            </div>
            <div className="persona">
              <img src="img/perfilmaria.jpg" alt="juan" />
              <h5>María Ríos</h5>
              <h6>Directora de marketing</h6>
              <p>
                Valentina, es la voz de nuestra marca. Con un ojo agudo para las
                tendencias, ha llevado nuestras campañas a otro nivel. Su pasión
                por el café argentino la impulsa a crear conexiones auténticas
                entre nuestros productos y los consumidores.
              </p>
            </div>
            <div className="persona">
              <img src="img/perfilana.jpg" alt="juan" />
              <h5>Ana Martínez</h5>
              <h6>Gerente General</h6>
              <p>
                Ana es nuestra experta en recetas de café, con más de diez años
                de experiencia. Apasionada por la sostenibilidad y el comercio
                justo, transforma cada taza en una experiencia única que conecta
                a los clientes con los agricultores.
              </p>
            </div>
            <div className="persona">
              <img src="img/perfilmartin.jpg" alt="juan" />
              <h5>Martín Pizarro</h5>
              <h6>Jefe de desarrollo de producto</h6>
              <p>
                Lucas es un apasionado del café que selecciona los mejores
                granos de Argentina. Con un paladar refinado, busca crear
                experiencias sensoriales únicas, fusionando tradición y
                modernidad en cada taza.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NosotrosPage;
