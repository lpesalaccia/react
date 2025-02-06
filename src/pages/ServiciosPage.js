import '../styles/ServiciosPage.css'
import React from "react";

const ServiciosPage = (props) => {
  return (
    <main className='holder'>
      <div className="contenidos">
        <h2>Servicios</h2>

        <div className="servicio">
          <img src="img/servicios1.jpg" alt="cafeteria" />
          <div className="info">
            <h4>Como utilizar la app</h4>
            <p>
              Sigue los pasos para registrarte y define tus preferencias de
              búsqueda. Explora las diferentes ociones de cafeterias, cafe y
              descuentos disponibles. Luego solo elije la opcion que mas te
              gusta y vé hasta la cafeteria asociada!
            </p>
          </div>
        </div>

        <div className="servicio">
          <img src="img/servicios2.jpg" alt="cafeteria" />
          <div className="info">
            <h4>Obtén tu descuento!</h4>
            <p>
              Una vez en tu lugar ejelido para disfrutar de tu café, indicale a
              la cajera sobre tu decuento y escanea luego el código qr
              proporcionado.
            </p>
          </div>
        </div>

        <div className="servicio">
          <img src="img/servicios3.jpg" alt="cafeteria" />
          <div className="info">
            <h4>A disfrutar</h4>
            <p>
              Solo queda que disfrutes de tu elección! A medida que utilices tus
              descuentos en distintos lugares, veras como en la app se acumulan
              tus beneficios, para luego poder canjearlos en tus cafeterías
              favoritas.
            </p>
          </div>
        </div>

        <div className="servicio">
          <img src="img/servicios4.jpg" alt="cafeteria" />
          <div className="info">
            <h4>Comparte!</h4>
            <p>
              Cuéntales a tus amigos sobre nosotros, asi todos pueden disfrutar
              de tener en su teléfono los beneficios de Expresso Hub!!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiciosPage;
