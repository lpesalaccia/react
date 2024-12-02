import React from "react";

const ContactoPage = (props) => {
  return (
    <main className="holder contacto">
      <div>
        <h2>Contacto Rapido</h2>
        <form action="" method="" className="formulario" />
        <p>
          <label for="nombre">Nombre</label>
          <input type="text" name="" />
        </p>
        <p>
          <label for="email">Email</label>
          <input type="text" name="" />
        </p>
        <p>
          <label for="telefono">Telefono</label>
          <input type="text" name="" />
        </p>
        <p>
          <label for="mensaje">Mensaje</label>
          <textarea name=""></textarea>
        </p>
        <p>
          <input type="submit" value="Enviar" />
        </p>
      </div>
      <div>
        <h2>Otras formas de contactarnos</h2>
        <p>Tambien pueden contactarse por los siguientes medios:</p>
        <ul>
          <li>Teléfono: 011-859674</li>
          <li>Email: contacto@expresohub.com.ar</li>
          <li>Instagram/facebook: expreso_hub</li>
        </ul>
      </div>
    </main>
  );
};

export default ContactoPage;
