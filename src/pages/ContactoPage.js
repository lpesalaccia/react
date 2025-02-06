import { useState } from 'react';
import axios from 'axios';

import '../styles/ContactoPage.css'


const ContactoPage = (props) => {

  const initialForm = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value  //forma dinamica
    }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true)
    const response = await axios.post('http://localhost:3000/api/contacto', formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm)
    }
  }

  return (
    <main className="holder contacto">
      <div>
        <h2>Contacto Rapido</h2>
        <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario" >
        <p>
          <label for="nombre">Nombre</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
        </p>
        <p>
          <label for="email">Email</label>
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
        </p>
        <p>
          <label for="telefono">Telefono</label>
          <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
        </p>
        <p>
          <label for="mensaje">Mensaje</label>
          <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
        </p>
        <p className="centrar"><input type="submit" value="Enviar" /></p>
        
        {sending ? <p>Enviando...</p> : null}
        {msg ? <p>{msg}</p> : null}

        </form>
      </div>
      <div className='columna datos'>
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
