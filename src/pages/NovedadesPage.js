import '../styles/NovedadesPage.css'
import React from "react";

const NovedadesPage = (props) => {
  return (
    <main className="holdernov">
      <h2>Novedades</h2>
      <div className="novedades">
        <h3>
          Innovación en el Café: La Revolución de los Granos de Especialidad
        </h3>
        <p>
          {" "}
          El mundo del café está cambiando rápidamente, y una de las tendencias
          más emocionantes es el auge de los granos de café de especialidad. En
          los últimos años, los productores han adoptado prácticas más
          sostenibles y enfocadas en la calidad, creando cafés con perfiles de
          sabor únicos. ¡Es el momento perfecto para que explores nuevas
          variedades, como el café de origen único o el "micro-lote", y ofrezcas
          a tus clientes una experiencia verdaderamente diferenciada!
        </p>
        <hr />
      </div>

      <div className="novedades">
        <h3>El Café Nitro: La Nueva Tendencia en Bebidas Refrescantes</h3>
        <p>
          {" "}
          ¿Has probado el café nitro? Este innovador café infusionado con
          nitrógeno se ha convertido en una de las bebidas más populares de las
          cafeterías modernas. El proceso de infusionado con nitrógeno da como
          resultado una bebida cremosa y espumosa, ideal para el verano. Además,
          su textura suave y refrescante lo hace perfecto como base para
          cócteles o como una alternativa fresca al espresso tradicional. ¡Una
          opción ideal para sorprender a tus clientes!
        </p>
        <hr />
      </div>

      <div className="novedades">
        <h3>
          El Café Sostenible: Nuevas Iniciativas para Combatir el Cambio
          Climático
        </h3>
        <p>
          {" "}
          Con el cambio climático afectando cada vez más a las plantaciones de
          café, el sector está tomando medidas. Iniciativas sostenibles como la
          agricultura regenerativa y el uso de técnicas de cultivo ecológicas
          están ganando terreno. Los productores están comprometidos con la
          reducción de la huella de carbono y el aumento de la biodiversidad en
          las plantaciones. ¡Asegúrate de estar al tanto de estas tendencias y
          de incorporar cafés con certificación sostenible en tu oferta!
        </p>
        <hr />
      </div>
    </main>
  );
};

export default NovedadesPage;
