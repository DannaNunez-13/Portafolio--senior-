// Efecto máquina de escribir para textos dinámicos
function typeWriterEffect(element, text, speed = 40) {
  element.textContent = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

document.addEventListener('DOMContentLoaded', function() {
  // Máquina de escribir para todos los .dynamic-text
  document.querySelectorAll('.dynamic-text').forEach(el => {
    const text = el.textContent;
    typeWriterEffect(el, text, 30);
  });
});

// Datos de mascotas para la galería
const mascotas = [
  {
    nombre: 'Luna',
    imagen: 'https://th.bing.com/th/id/R.719eebb1558bb9d218936717e054b6c0?rik=rkAS%2f2VEctfLNw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-LEva2La5waM%2fUk2-eHvIO6I%2fAAAAAAAAAFE%2ftAbz4PuIEbQ%2fs640%2fimagenes-de-perrita-peque%c3%b1a.jpg&ehk=VKjfQb1o4nhuwGoEBiuY5KlciW6q1UXJOVeXZ4allTs%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
    descripcion: 'Luna es una perrita juguetona y muy cariñosa. Le encanta correr en el parque y jugar con su pelota favorita.'
  },
  {
    nombre: 'Milo',
    imagen: 'https://enciclopedia.net/imgs/Gato.jpg',
    descripcion: 'Milo es un gato curioso y elegante. Disfruta de las siestas al sol y de observar a las aves por la ventana.'
  },
  {
    nombre: 'Mimi',
    imagen: 'https://extincionanimal.org/wp-content/uploads/2020/05/cotorra-puertorique%C3%B1a-3.jpg',
    descripcion: 'Mimi es una cotorra muy inteligente y sociable. Le encanta imitar sonidos y saludar a todos.'
  },
  {
    nombre: 'Golden',
    imagen: 'https://th.bing.com/th/id/R.05f738a1a73b4d26dde030c53a9af716?rik=%2b4gvWUk3Uh7TBw&pid=ImgRaw&r=0',
    descripcion: 'Golden es un pez dorado que nada felizmente en su acuario. Es muy tranquilo y le gusta ver pasar a la gente.'
  },
  {
    nombre: 'Kiwi',
    imagen: 'https://www.tiendanimal.es/articulos/wp-content/uploads/2010/05/pig-1200x823.jpg',
    descripcion: 'Kiwi es un canario alegre que canta cada mañana. Su color amarillo ilumina cualquier habitación.'
  },
  {
    nombre: 'Max',
    imagen: 'https://www.perrosamigos.com/Uploads/perrosamigos.com/ImagenesGrandes/m-perros-husky-siberiano.html-0-3.jpg',
    descripcion: 'Max es un perro fiel y protector. Siempre está listo para acompañar a su familia a todas partes.'
  }
];

// Renderizar galería de mascotas
function renderGallery() {
  const galleryRow = document.getElementById('gallery-row');
  galleryRow.innerHTML = '';
  mascotas.forEach((mascota, idx) => {
    const col = document.createElement('div');
    col.className = 'col-md-4';
    col.innerHTML = `
      <div class="gallery-card animate__animated animate__fadeInUp" style="animation-delay: ${idx * 0.1}s">
        <img src="${mascota.imagen}" class="gallery-img mb-2" alt="${mascota.nombre}">
        <div class="gallery-caption">${mascota.nombre}</div>
        <button class="btn btn-cool" onclick="showMascotaModal(${idx})">Ver más</button>
      </div>
    `;
    galleryRow.appendChild(col);
  });
}

// Modal para mostrar detalles de la mascota
window.showMascotaModal = function(idx) {
  const mascota = mascotas[idx];
  const modal = new bootstrap.Modal(document.getElementById('galleryModal'));
  document.getElementById('galleryModalLabel').textContent = mascota.nombre;
  document.getElementById('galleryModalBody').innerHTML = `
    <img src="${mascota.imagen}" class="img-fluid mb-3" alt="${mascota.nombre}">
    <p>${mascota.descripcion}</p>
  `;
  modal.show();
}

// Interactividad en Sobre mí: mostrar dato curioso
const datosCuriosos = [
  'Los perros pueden oler enfermedades como el cáncer y la diabetes.',
  'Los gatos duermen entre 12 y 16 horas al día.',
  'Los loros pueden aprender a decir palabras y frases humanas.',
  'Tener una mascota reduce el estrés y la presión arterial.',
  'Los peces reconocen a sus dueños y pueden ser entrenados.'
];

document.addEventListener('DOMContentLoaded', function() {
  renderGallery();
  const btn = document.getElementById('sobreMiBtn');
  const dato = document.getElementById('datoCurioso');
  if(btn && dato) {
    btn.addEventListener('click', function() {
      const random = Math.floor(Math.random() * datosCuriosos.length);
      dato.textContent = '🐾 ' + datosCuriosos[random];
      dato.style.display = 'block';
      dato.className = 'alert alert-info mt-2';
    });
  }
});

// Modal para galería Disney
window.showModal = function(personaje) {
  const modal = new bootstrap.Modal(document.getElementById('galleryModal'));
  const title = document.getElementById('galleryModalLabel');
  const body = document.getElementById('galleryModalBody');
  let content = '';
  switch(personaje) {
    case 'Mickey Mouse':
      content = `<img src='https://cdn.pixabay.com/photo/2016/03/31/19/56/mickey-mouse-1298782_1280.png' class='img-fluid mb-2'><p>El ícono de Disney, símbolo de alegría y amistad.</p>`;
      break;
    case 'Elsa (Frozen)':
      content = `<img src='https://images.pexels.com/photos/3770580/pexels-photo-3770580.jpeg' class='img-fluid mb-2'><p>La reina del hielo, protagonista de Frozen.</p>`;
      break;
    case 'Buzz Lightyear':
      content = `<img src='https://cdn.pixabay.com/photo/2017/01/31/13/14/avatar-2026510_1280.png' class='img-fluid mb-2'><p>El guardián espacial de Toy Story.</p>`;
      break;
    case 'Moana':
      content = `<img src='https://images.pexels.com/photos/3770582/pexels-photo-3770582.jpeg' class='img-fluid mb-2'><p>La valiente navegante del océano.</p>`;
      break;
    case 'Simba (El Rey León)':
      content = `<img src='https://cdn.pixabay.com/photo/2017/01/31/13/14/avatar-2026510_1280.png' class='img-fluid mb-2'><p>El rey de la sabana africana.</p>`;
      break;
    case 'Stitch':
      content = `<img src='https://cdn.pixabay.com/photo/2017/01/31/13/14/avatar-2026510_1280.png' class='img-fluid mb-2'><p>El travieso y adorable alienígena azul.</p>`;
      break;
    default:
      content = '';
  }
  title.textContent = personaje;
  body.innerHTML = content;
  modal.show();
} 