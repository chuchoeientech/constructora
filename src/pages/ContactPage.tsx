import React, { useState } from 'react';
import { Mail, Phone, Clock, Building2 } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);

      const response = await fetch('https://formspree.io/f/movlrodp', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('¡Gracias! Tu mensaje ha sido enviado.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        setSubmitMessage('Hubo un problema al enviar tu mensaje. Intenta de nuevo más tarde.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Error de red. Verifica tu conexión e intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contáctanos</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para responder a todas tus consultas. Nuestro equipo está disponible para ayudarte
            con cualquier proyecto de construcción que tengas en mente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Building2 className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Oficina Central</h3>
                    <p className="text-gray-600">Comendador Nicolas Bo 1868 casi San Esteban<br />Lambaré, Paraguay</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Teléfonos</h3>
                    <p className="text-gray-600">+595981613500</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">constructorafenar@hotmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Horario de Atención</h3>
                    <p className="text-gray-600">Lunes a Viernes: 8:30 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Áreas de Servicio</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Construcción Residencial</li>
                <li>• Construcción Comercial</li>
                <li>• Diseño Arquitectónico</li>
                <li>• Remodelaciones</li>
                <li>• Consultoría en Construcción</li>
                <li>• Gestión de Proyectos</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Asunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="presupuesto">Solicitud de Presupuesto</option>
                    <option value="consulta">Consulta General</option>
                    <option value="proyecto">Propuesta de Proyecto</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando…' : 'Enviar mensaje'}
                </button>
                {submitStatus !== 'idle' && (
                  <p className={`text-sm mt-3 ${submitStatus === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                    {submitMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;