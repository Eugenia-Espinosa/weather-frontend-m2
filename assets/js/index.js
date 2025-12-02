$(function () {
  let ciudades = [
    {
      capital: "Rio de Janeiro",
      img: "rio_de_janeiro.jpg",
      descripcion:
        "Río de Janeiro, conocida como la 'Ciudad Maravillosa', es una ciudad brasileña famosa por su exuberante paisaje natural, que combina montañas y selva con el océano Atlántico. Es un centro cultural vibrante, reconocido por la UNESCO como Patrimonio de la Humanidad por su paisaje cultural urbano, y hogar de íconos como el Cristo Redentor y el cerro Pan de Azúcar. La ciudad es también mundialmente conocida por sus playas como Copacabana e Ipanema, su carnaval, la samba y la bossa nova.",

    },
    {
      capital: "Buenos Aires",
      img: "buenos_aires.jpg",
      descripcion: "Buenos Aires es la gran capital cosmopolita de Argentina. Su centro es la Plaza de Mayo, rodeada de imponentes edificios del siglo XIX, incluida la Casa Rosada, el icónico palacio presidencial que tiene varios balcones. Entre otras atracciones importantes, se incluyen el Teatro Colón, un lujoso teatro de ópera de 1908 con cerca de 2,500 asientos, y el moderno museo MALBA, que exhibe arte latinoamericano",
    },
    {
      capital: "Santiago",
      img: "santiago.jpg",
      descripcion: "Santiago, la capital y la ciudad más grande de Chile, se ubica en un valle rodeado de cimas nevadas de los Andes y la Cordillera de la Costa chilena. La Plaza de Armas, el gran núcleo del centro colonial antiguo de la ciudad, tiene 2 monumentos neoclásicos: el Palacio de la Real Audiencia de 1808, donde está el Museo Histórico Nacional, y la Catedral Metropolitana del siglo XVIII. La Chascona es la casa transformada en museo del poeta Pablo Neruda.",

    },
    {
      capital: "Lima",
      img: "lima.jpg",
      descripcion: "Lima es la capital de Perú ubicada en la árida costa del Pacífico del país. Pese a que su centro colonial se conserva, es una desbordante metrópolis y una de las ciudades más grandes de Sudamérica. El Museo Larco alberga una colección de arte precolombino y el Museo de la Nación recorre la historia de las civilizaciones antiguas de Perú. La Plaza de Armas y la catedral del siglo XVI son el núcleo del antiguo centro de Lima.",

    },

    {
      capital: "La Paz",
      img: "lapaz.jpg",
      descripcion: "La Paz, en Bolivia, es la capital administrativa más alta del mundo, ubicada en la meseta del Altiplano de los Andes a más de 3,500 m sobre el nivel del mar. Se extiende hasta la ciudad de El Alto en las zonas altas, con el monte nevado Illimani de fondo, con 6,438 m de altura. Se puede acceder al espectacular entorno de la ciudad a través del sistema de teleférico de la ciudad llamado Mi Teleférico.",

    },
    {
      capital: "Montevideo",
      img: "montevideo.jpg",
      descripcion: "Montevideo, la capital de Uruguay, es una importante ciudad de la Bahía de Montevideo. Se ubica en torno a la Plaza de la Independencia, donde alguna vez hubo una ciudadela española. La plaza se conecta con la Ciudad Vieja, con edificios art deco, casas coloniales y lugares emblemáticos como el altísimo Palacio Salvo y el Teatro Solís neoclásico. El antiguo Mercado del Puerto está lleno de restaurantes para degustar carnes.",

    },
    {
      capital: "Asunción",
      img: "asuncion.jpg",
      descripcion: "Asunción es la ciudad capital de Paraguay rodeada por el río Paraguay. Es conocida por su gran Palacio de López, la sede de gobierno que alberga las oficinas presidenciales. Cerca, el Panteón Nacional de los Héroes tiene un mausoleo y placas que conmemoran las figuras históricas de Paraguay. El Museo Casa de la Independencia se caracteriza por su arquitectura colonial y cuenta con artefactos que documentan la emancipación del régimen español.",

    },
    {
      capital: "Quito",
      img: "quito.jpg",
      descripcion: "Quito, la capital de Ecuador, se ubica en la altura de las laderas de los Andes a 2,850 m. Fue construida sobre los cimientos de una antigua ciudad inca y es famosa por su centro colonial bien conservado, con varias iglesias de los siglos XVI y XVII, y otras estructuras que mezclan estilos europeos, moriscos e indígenas. Estos incluyen la catedral, en la Plaza Grande, y la iglesia jesuita altamente decorada de la Compañía de Jesú",

    },
    {
      capital: "Caracas",
      img: "caracas.jpg",
      descripcion: "Caracas, la capital de Venezuela, es un centro comercial y cultural ubicado en un valle montañoso del norte. El líder de la independencia Simón Bolívar está enterrado en el Panteón Nacional de Venezuela, establecido en el siglo XIX en el casco antiguo de la ciudad. La Catedral de Caracas, un lugar emblemático de la arquitectura romanesca, data del siglo XVII. Las torres gemelas de 225 de altura en el Parque Central son el símbolo del perfil de la ciudad.",

    },
    {
      capital: "Bogotá",
      img: "bogota.jpg",
      descripcion: "Bogotá es la extensa capital en altura de Colombia. La Candelaria, su centro con adoquines, cuenta con sitios coloniales como el Teatro Colón neoclásico y la Iglesia de San Francisco del siglo XVII. También alberga museos populares, incluido el Museo Botero, que exhibe arte de Fernando Botero, y el Museo del Oro, con piezas de oro precolombinas",

    },
  ];

  let contenedor = $("#clima_container");
  console.log(contenedor);
  let tarjetas = "";

  $.each(ciudades, function (index, value) {
    tarjetas += `
        <div class="col-md-4">
            <div class="card">
              <img src="./assets/img/${value.img}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${value.capital}</h5>
                <p class="card-text">
                    ${value.descripcion}
                </p>
                <a href="" class="btn btn-primary"       
                data-bs-toggle="modal"
                id="buttonModal-${index}"
                data-bs-target="#exampleModal"
                data-descripcion = "${value.descripcion}"
                data-image = "${value.img}"
                
                >Ver Clima</a>
              </div>
            </div>
          </div>
        `
  })
  contenedor.html(tarjetas)

  $(".btn-primary").click(function () {
    let descripcion = $(this).data("descripcion")
    let imagen = $(this).data("image")

    $(".modal-body").html(
      `
           <img src="./assets/img/${imagen}"  class="img-fluid" alt="" 
            <p>"${descripcion}"</p>

           `
    )
  })
})
