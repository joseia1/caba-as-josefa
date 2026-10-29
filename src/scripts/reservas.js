// Formularios y modal: todo termina en un mensaje de WhatsApp prellenado.
import { whatsappUrl } from '../data/sitio.js';

function formatoFecha(iso) {
  if (!iso) return '';
  const [a, m, d] = iso.split('-');
  return `${d}/${m}/${a}`;
}

// Las fechas no pueden ser pasadas y la salida debe ser posterior a la llegada
function prepararFechas(llegada, salida) {
  const hoy = new Date().toISOString().slice(0, 10);
  llegada.min = hoy;
  salida.min = hoy;
  llegada.addEventListener('change', () => {
    salida.min = llegada.value || hoy;
    if (salida.value && salida.value <= llegada.value) salida.value = '';
  });
}

// Cotizador del hero
const formCotizar = document.getElementById('form-cotizar');
prepararFechas(formCotizar.llegada, formCotizar.salida);
formCotizar.addEventListener('submit', (e) => {
  e.preventDefault();
  const { llegada, salida, huespedes } = formCotizar;
  const mensaje = `Hola Cabañas Josefa, quisiera cotizar estadía desde el ${formatoFecha(llegada.value)} al ${formatoFecha(salida.value)} para ${huespedes.value}.`;
  window.open(whatsappUrl(mensaje), '_blank');
});

// Formulario de reserva
const formReserva = document.getElementById('form-reserva');
prepararFechas(formReserva.llegada, formReserva.salida);
formReserva.addEventListener('submit', (e) => {
  e.preventDefault();
  const { nombre, telefono, cabana, huespedes, llegada, salida, notas } = formReserva;
  const aviso = document.getElementById('reserva-mensaje');
  aviso.classList.remove('hidden');
  aviso.textContent = `¡Gracias ${nombre.value}! Abriendo WhatsApp para confirmar los detalles de tu reserva en ${cabana.value}...`;

  const mensaje =
    `Hola Cabañas Josefa, soy ${nombre.value} (${telefono.value}). ` +
    `Quisiera reservar ${cabana.value} para ${huespedes.value} personas ` +
    `desde el ${formatoFecha(llegada.value)} hasta el ${formatoFecha(salida.value)}.` +
    (notas.value ? ` Notas: ${notas.value}` : '');
  window.open(whatsappUrl(mensaje), '_blank');
});

// Modal "Consultar Disponibilidad"
const modal = document.getElementById('modal-cabana');

function abrirModal(nombre, capacidad) {
  document.getElementById('modal-titulo').textContent = nombre;
  document.getElementById('modal-capacidad').textContent = capacidad;
  document.getElementById('modal-whatsapp').href = whatsappUrl(
    `Hola Cabañas Josefa, me gustaría consultar disponibilidad para ${nombre} (${capacidad}).`
  );
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function cerrarModal() {
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

document.querySelectorAll('.btn-consultar').forEach((boton) => {
  boton.addEventListener('click', () => abrirModal(boton.dataset.nombre, boton.dataset.capacidad));
});
modal.querySelectorAll('.cerrar-modal').forEach((b) => b.addEventListener('click', cerrarModal));
modal.addEventListener('click', (e) => {
  if (e.target === modal) cerrarModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') cerrarModal();
});
