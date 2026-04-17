import { defineField, defineType } from 'sanity';

const servicio = defineType({
  name: 'servicio',
  title: 'Servicios',
  type: 'document',
  fields: [
    defineField({ name: 'titulo', title: 'Título', type: 'string' }),
    defineField({ name: 'descripcion', title: 'Descripción', type: 'text' }),
    defineField({ name: 'icono', title: 'Icono', type: 'string' }),
    defineField({ name: 'activo', title: 'Mostrar en el sitio', type: 'boolean', initialValue: true }),
    defineField({ name: 'orden', title: 'Orden', type: 'number' }),
    defineField({
      name: 'imagen',
      title: 'Imagen',
      type: 'image',
      options: { hotspot: true }
    }),
  ],
});

const testimonio = defineType({
  name: 'testimonio',
  title: 'Testimonios',
  type: 'document',
  fields: [
    defineField({ name: 'nombre', title: 'Nombre', type: 'string' }),
    defineField({ name: 'empresa', title: 'Empresa', type: 'string' }),
    defineField({ name: 'texto', title: 'Testimonio', type: 'text' }),
    defineField({ name: 'iniciales', title: 'Iniciales (ej: MG)', type: 'string' }),
    defineField({ name: 'activo', title: 'Mostrar en el sitio', type: 'boolean', initialValue: true }),
  ],
});

const hero = defineType({
  name: 'hero',
  title: 'Hero (sección principal)',
  type: 'document',
  fields: [
    defineField({ name: 'titulo', title: 'Título principal', type: 'string' }),
    defineField({ name: 'bajada', title: 'Texto bajada', type: 'text' }),
    defineField({ name: 'ctaTexto', title: 'Texto del botón', type: 'string' }),
  ],
});



export const schemaTypes = [servicio, testimonio, hero];