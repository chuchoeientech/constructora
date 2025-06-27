import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Building2 } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(formData);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header mejorado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6 shadow-lg">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Estamos aquí para responder tus preguntas y ayudarte a hacer realidad tu próximo proyecto de construcción
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Información de contacto mejorada */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Información de contacto</h3>
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Teléfono</p>
                    <p className="text-gray-800 font-semibold">+595 21 123 4567</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email</p>
                    <p className="text-gray-800 font-semibold">contacto@constructorapy.com</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Ubicación</p>
                    <p className="text-gray-800 font-semibold">Asunción, Paraguay</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horarios de atención */}
            <div className="bg-primary rounded-2xl p-8 text-white shadow-xl">
              <h4 className="text-xl font-semibold mb-4">Horarios de atención</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Lunes - Viernes</span>
                  <span className="font-semibold">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados</span>
                  <span className="font-semibold">9:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos</span>
                  <span className="font-semibold">Cerrado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario mejorado */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  placeholder="+595 21 123 4567"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar mensaje</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;