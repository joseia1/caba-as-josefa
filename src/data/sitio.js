// Datos generales del negocio. Cambia aquí y se actualiza en toda la web.
// Fuente: Instagram @_cabanasjosefa y Facebook /cabanasjosefaq (octubre 2026).

export const sitio = {
  nombre: 'Cabañas Josefa',
  subtitulo: 'Quintero · Valparaíso',
  descripcion:
    '5 cabañas totalmente equipadas, con piscina temperada y vista al mar, cerca de las playas de Quintero. Capacidad de 2 a 6 personas.',

  // Número de WhatsApp sin "+" ni espacios (formato internacional)
  whatsapp: '56941247257',
  whatsappVisible: '+56 9 4124 7257',
  email: 'cabanasjosefa220@hotmail.com',

  instagram: '_cabanasjosefa',
  facebookUrl: 'https://www.facebook.com/cabanasjosefaq/',

  // PENDIENTE: dirección exacta (no aparece en las redes)
  ubicacion: 'Quintero, Región de Valparaíso, Chile',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Quintero%2C+Valpara%C3%ADso%2C+Chile',
  mapsEmbed: 'https://maps.google.com/maps?q=Quintero,+Valpara%C3%ADso,+Chile&z=13&output=embed',

  normas: ['No se permiten fiestas', 'Reservas solo por WhatsApp (no respondemos mensajes directos)'],

  logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNRNoRfpEtX2HwI5kRxwIq49uIUY5iUZpkE1FolboUOdW2PoRU6x_ZLwG6NEp27facBWO3if--S3jWs4I3dk6B3bAdqQ0uwWv1M6Tmrtz0qENcG8b6-4TxnWl9huC5Bb1l6CMVd4476z8BRryZFFXphbbuiOiMPce-j6pEG85CeDDVuC6dUpA8AKGhVwQdXoIdaDmLlQU2mCqoe3fzKUNxwMP58UcUtfmEDJKsTO0',
};

export const instagramUrl = `https://instagram.com/${sitio.instagram}`;

export function whatsappUrl(mensaje) {
  const base = `https://wa.me/${sitio.whatsapp}`;
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base;
}

// Enlaces del menú: el id debe coincidir con el id de cada sección
export const menu = [
  { id: 'inicio', texto: 'Inicio' },
  { id: 'cabanas', texto: 'Cabañas' },
  { id: 'servicios', texto: 'Servicios' },
  { id: 'instagram', texto: 'Galería' },
  { id: 'contacto', texto: 'Contacto' },
];
