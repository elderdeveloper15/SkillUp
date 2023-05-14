var publicaciones = [
    {
      'titulo': 'Título 1',
      'area': 'Área 1',
      'sueldo': 'Sueldo 1',
      'modalidad': 'Presencial',
      'ubicacion': 'Ubicación 1',
      'horario': 'Horario 1',
      'descripcion': 'Descripción 1',
      'postulados': 'n'
    }
  ];
  
  function abrirVentanaEmergente(indice) {
    // Obtener los valores de la publicación en base al índice
    var publicacion = publicaciones[indice];
  
    // Asignar los valores a los campos del formulario en la ventana emergente
    document.getElementById('indice').value = indice;
    document.getElementById('titulo').value = publicacion.titulo;
    document.getElementById('area').value = publicacion.area;
    document.getElementById('sueldo').value = publicacion.sueldo;
    document.getElementById('modalidad').value = publicacion.modalidad;
    document.getElementById('ubicacion').value = publicacion.ubicacion;
    document.getElementById('horario').value = publicacion.horario;
    document.getElementById('descripcion').value = publicacion.descripcion;
  
    // Mostrar la ventana emergente
    document.getElementById('ventanaEmergente').style.display = 'block';
  }
  
  function guardarCambios(event) {
    event.preventDefault(); // Evitar que se envíe el formulario
  
    // Obtener los valores modificados del formulario
    var indice = document.getElementById('indice').value;
    var titulo = document.getElementById('titulo').value;
    var area = document.getElementById('area').value;
    var sueldo = document.getElementById('sueldo').value;
    var modalidad = document.getElementById('modalidad').value;
    var ubicacion = document.getElementById('ubicacion').value;
    var horario = document.getElementById('horario').value;
    var descripcion = document.getElementById('descripcion').value;
  
    // Actualizar los valores en el objeto de la publicación correspondiente
    publicaciones[indice].titulo = titulo;
    publicaciones[indice].area = area;
    publicaciones[indice].sueldo = sueldo;
    publicaciones[indice].modalidad = modalidad;
    publicaciones[indice].ubicacion = ubicacion;
    publicaciones[indice].horario = horario;
    publicaciones[indice].descripcion = descripcion;
  
    // Actualizar la visualización de la publicación modificada
    var publicacionElement = document.getElementsByClassName('publicacion')[indice];
    publicacionElement.querySelector('h2').innerText = titulo;
    publicacionElement.querySelector('p:nth-child(2)').innerText = 'Área: ' + area;
    publicacionElement.querySelector('p:nth-child(3)').innerText = 'Sueldo: ' + sueldo;
    publicacionElement.querySelector('p:nth-child(4)').innerText = 'Modalidad: ' + modalidad;
    publicacionElement.querySelector('p:nth-child(5)').innerText = 'Ubicación: ' + ubicacion;
    publicacionElement.querySelector('p:nth-child(6)').innerText = 'Horario: ' + horario;
    publicacionElement.querySelector('p:nth-child(7)').innerText = 'Descripción: ' + descripcion;
  
    // Cerrar la ventana emergente
    cerrarVentanaEmergente();
  }

  function cerrarVentanaEmergente() {
    var ventanaEmergente = document.getElementById('ventanaEmergente');
    ventanaEmergente.style.display = 'none';
  }
  
  