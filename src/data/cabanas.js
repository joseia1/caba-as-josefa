// Tipos de cabaña (5 cabañas en total). Para agregar uno, copia un bloque y edítalo.
// categoria: 'parejas' (2-3 personas) o 'familia' (5-6 personas) — se usa en los filtros.
// precio: déjalo en null para mostrar "Consultar precio".
// Iconos: nombres de Material Symbols (https://fonts.google.com/icons)

const equipamientoBase = [
  { icono: 'kitchen', texto: 'Equipada completa' },
  { icono: 'pool', texto: 'Piscina temperada' },
];

export const cabanas = [
  {
    nombre: 'Cabaña Pareja',
    precio: null,
    capacidad: '2 personas',
    categoria: 'parejas',
    etiqueta: { icono: 'favorite', texto: 'Ideal Parejas' },
    descripcion: 'Cabaña para dos personas, totalmente equipada, con acceso a la piscina temperada del recinto.',
    imagen: '/fotos/piscina-reposeras.jpg',
    alt: 'Reposeras junto a la piscina de Cabañas Josefa',
    caracteristicas: [...equipamientoBase],
  },
  {
    nombre: 'Cabaña Familiar Pequeña',
    precio: null,
    capacidad: '2 adultos + 1 menor',
    categoria: 'parejas',
    etiqueta: { icono: 'child_care', texto: 'Menor hasta 12 años' },
    descripcion: 'Para 2 adultos y un niño o niña de hasta 12 años. Equipada completa y con terraza.',
    imagen: '/fotos/terraza-vista-mar.jpg',
    alt: 'Terraza de madera con parrilla y vista al mar y a la piscina',
    caracteristicas: [...equipamientoBase],
  },
  {
    nombre: 'Cabaña 5 Personas',
    precio: null,
    capacidad: 'Hasta 5 personas',
    categoria: 'familia',
    etiqueta: { icono: 'groups', texto: 'Familias' },
    descripcion: 'Cabaña totalmente equipada con capacidad para hasta cinco personas, ideal para familias.',
    imagen: '/fotos/cabanas-patio.jpg',
    alt: 'Patio y cabañas del recinto',
    caracteristicas: [...equipamientoBase],
  },
  {
    nombre: 'Cabaña 6 Personas',
    precio: null,
    capacidad: 'Hasta 6 personas',
    categoria: 'familia',
    etiqueta: { icono: 'groups', texto: 'Espaciosa' },
    descripcion: 'Nuestra cabaña más amplia, para seis personas, con Wi-Fi, TV cable y estacionamiento propio.',
    imagen: '/fotos/interior-living.jpg',
    alt: 'Living y comedor de una cabaña con revestimiento de madera',
    caracteristicas: [
      ...equipamientoBase,
      { icono: 'wifi', texto: 'Wi-Fi' },
      { icono: 'tv', texto: 'TV cable' },
      { icono: 'local_parking', texto: '1 estacionamiento' },
    ],
  },
];

export function formatoPrecio(valor) {
  return '$' + valor.toLocaleString('es-CL');
}
