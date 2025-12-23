$(function () {
  let ciudades = [
    { capital: "Rio de Janeiro", img: "rio_de_janeiro.jpg", temperatura: "25 C°", estado: "Parcialmente nublado", icono: "🌥️", lunes: "Parcialmente nublado 24 C°🌥️", martes: "Parcialmente Nublado 23 C° 🌥️", miercoles: "Soleado 29 C° 🌞", jueves: "Soleado 26 C°🌞", viernes: "Parcialmente soleado 25 C° 🌤️", sabado: "Parcialmente Soleado 24 C° 🌤️", domingo: "Parcialmente Soleado 26 C°🌤️" },

    { capital: "Buenos Aires", img: "buenos_aires.jpg", temperatura: "29 C°", estado: "Soleado", icono: "🌞", lunes: "Parcialmente soleado 25 C° 🌤️", martes: "Parcialmente nublado 17 C°🌥️", miercoles: "Parcialmente nublado 15 C°🌥️", jueves: "Chubascos 17 C° 🌦️", viernes: "Lluvias 15 C° ☔", sabado: "Lluvias 15 C° ☔", domingo: "Parcialmente nublado 17 C°🌥️" },

    { capital: "Santiago", img: "santiago.jpg", temperatura: "20 C°", estado: "Nublado", icono: "☁️", lunes: "Parcialmente nublado 12 C°🌥️", martes: "Parcialmente Nublado 15 C° 🌥️", miercoles: "Soleado 20 C° 🌞", jueves: "Soleado 26 C°🌞", viernes: "Parcialmente soleado 25 C° 🌤️", sabado: "Parcialmente Soleado 24 C° 🌤️", domingo: "Parcialmente Soleado 26 C°🌤️" },

    { capital: "Lima", img: "lima.jpg", temperatura: "30 C°", estado: "Soleado", icono: "🌞", lunes: "Parcialmente soleado 25 C° 🌤️", martes: "Parcialmente nublado 17 C°🌥️", miercoles: "Parcialmente nublado 15 C°🌥️", jueves: "Chubascos 17 C° 🌦️", viernes: "Lluvias 15 C° ☔", sabado: "Lluvias 15 C° ☔", domingo: "Parcialmente nublado 17 C°🌥️" },

    { capital: "La Paz", img: "lapaz.jpg", temperatura: "29 C°", estado: "Soleado", icono: "🌞", lunes: "Parcialmente soleado 25 C° 🌤️", martes: "Parcialmente nublado 17 C°🌥️", miercoles: "Parcialmente nublado 15 C°🌥️", jueves: "Chubascos 17 C° 🌦️", viernes: "Lluvias 15 C° ☔", sabado: "Lluvias 15 C° ☔", domingo: "Parcialmente nublado 17 C°🌥️" },

    { capital: "Montevideo", img: "montevideo.jpg", temperatura: "18 C°", estado: "Parcialmente nublado", icono: "🌥️", lunes: "Parcialmente nublado 12 C°🌥️", martes: "Parcialmente Nublado 15 C° 🌥️", miercoles: "Soleado 20 C° 🌞", jueves: "Soleado 26 C°🌞", viernes: "Parcialmente soleado 25 C° 🌤️", sabado: "Parcialmente Soleado 24 C° 🌤️", domingo: "Parcialmente Soleado 26 C°🌤️" },

    { capital: "Asunción", img: "asuncion.jpg", temperatura: "29 C°", estado: "Soleado", icono: "🌞", lunes: "Parcialmente soleado 25 C° 🌤️", martes: "Parcialmente nublado 17 C°🌥️", miercoles: "Parcialmente nublado 15 C°🌥️", jueves: "Chubascos 17 C° 🌦️", viernes: "Lluvias 15 C° ☔", sabado: "Lluvias 15 C° ☔", domingo: "Parcialmente nublado 17 C°🌥️" },

    { capital: "Quito", img: "quito.jpg", temperatura: "25 C°", estado: "Parcialmente nublado", icono: "🌥️", lunes: "Parcialmente nublado 12 C°🌥️", martes: "Parcialmente Nublado 15 C° 🌥️", miercoles: "Soleado 20 C° 🌞", jueves: "Soleado 26 C°🌞", viernes: "Parcialmente soleado 25 C° 🌤️", sabado: "Parcialmente Soleado 24 C° 🌤️", domingo: "Parcialmente Soleado 26 C°🌤️" },

    { capital: "Caracas", img: "caracas.jpg", temperatura: "25 C°", estado: "Parcialmente nublado", icono: "🌥️", lunes: "Parcialmente nublado 12 C°🌥️", martes: "Parcialmente Nublado 15 C° 🌥️", miercoles: "Soleado 20 C° 🌞", jueves: "Soleado 26 C°🌞", viernes: "Parcialmente soleado 25 C° 🌤️", sabado: "Parcialmente Soleado 24 C° 🌤️", domingo: "Parcialmente Soleado 26 C°🌤️" },

    { capital: "Bogotá", img: "bogota.jpg", temperatura: "25 C°", estado: "Parcialmente nublado", icono: "🌥️", lunes: "Parcialmente nublado 12 C°🌥️", martes: "Parcialmente Nublado 15 C° 🌥️", miercoles: "Soleado 20 C° 🌞", jueves: "Soleado 26 C°🌞", viernes: "Parcialmente soleado 25 C° 🌤️", sabado: "Parcialmente Soleado 24 C° 🌤️", domingo: "Parcialmente Soleado 26 C°🌤️" },
  ]

  let contenedor = $("#clima_container");
  console.log(contenedor);
  let tarjetas = "";

  $.each(ciudades, function (index, value) {
    tarjetas += `
        <div class="col-md-4">
            <div class="card mt-5">
              <img src="./assets/img/${value.img}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${value.capital}</h5>
                <p class="card-text" >
                    ${value.estado}
                </p>
                <p class="card-text" >
                    ${value.temperatura} ${value.icono}
                </p>
                               
                <a href="" class="btn btn-primary"       
                data-bs-toggle="modal"
                id="buttonModal-${index}"
                data-bs-target="#exampleModal"
                data-temperatura = "${value.temperatura}"
                data-image = "${value.img}"
                data-iconos = "${value.icono}"
                data-lun = "${value.lunes}"
                data-mar = "${value.martes}"
                data-mie = "${value.miercoles}"
                data-jue = "${value.jueves}"
                data-vie = "${value.viernes}"
                data-sab = "${value.sabado}"
                data-dom = "${value.domingo}"
                data-ciu = "${value.capital}"
                >Ver Clima Semana</a>
              </div>
            </div>
          </div>
        `
  })

  contenedor.html(tarjetas)

  $(".btn-primary").click(function () {
    let temperatura = $(this).data("temperatura")
    let imagen = $(this).data("image")
    let temp_lu = $(this).data("lun")
    let temp_ma = $(this).data("mar")
    let temp_mi = $(this).data("mie")
    let temp_ju = $(this).data("jue")
    let temp_vi = $(this).data("vie")
    let temp_sa = $(this).data("sab")
    let temp_do = $(this).data("dom")
    let ciud = $(this).data("ciu")

    $(".modal-body").html(
      `
      <p>${ciud}</p>
      <img src="./assets/img/${imagen}"  class="img-fluid" alt="" 
      
      <p>Lunes     :${temp_lu}</p>
      <p>Martes    :${temp_ma}</p>
      <p>Miércoles :${temp_mi}</p>
      <p>Jueves    :${temp_ju}</p>
      <p>Viernes   :${temp_vi}</p>
      <p>Sábado    :${temp_sa}</p>
      <p>Domingo   :${temp_do}</p>
      
       `
    )
  })
})
