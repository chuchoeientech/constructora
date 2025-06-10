export default {
  name: 'obras',
  title: 'Obras',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
    },
    {
      name: 'mainImage',
      title: 'Imagen Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'additionalImages',
      title: 'Imágenes Adicionales',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'completationYear',
      title: 'Año de Completación',
      type: 'number',
    },
    {
      name: 'area',
      title: 'Área',
      type: 'number',
    },
    {
      name: 'location',
      title: 'Ubicación',
      type: 'string',
    },
    {
      name: 'investment',
      title: 'Inversión',
      type: 'number',
    },
  ],
}; 