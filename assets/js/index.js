$(function () {
  let ciudades = [
    { capital: "Rio de Janeiro",img: "rio_de_janeiro.jpg",temperatura: "10 C°",estado : "Parcial-nublado", icono: "🌥️", lunes : "12 C°🌥️", martes : "15 C° ",miercoles : "26 C°", jueves: "26 C°",viernes : "26 C°", sabado : "26 C°",domingo : "26 C°" },
    { capital: "Buenos Aires",img: "buenos_aires.jpg", temperatura: "25 C°",estado : "nublado",icono: "🌞",lunes : "26 C°", martes : "26 C°",miercoles : "26 C°", jueves: "26 C°",viernes : "26 C°", sabado : "26 C°",domingo : "26 C°"},
    { capital: "Santiago", img: "santiago.jpg", temperatura: "25 C°",estado : "nublado", icono:"☔",lunes : "26 C°", martes : "26 C°",miercoles : "26 C°", jueves: "26 C°",viernes : "26 C°", sabado : "26 C°",domingo : "26 C°" },
    { capital: "Lima", img: "lima.jpg",temperatura: "25 C°",estado : "nublado",icono: "☔",lunes : "26 C°", martes : "26 C°",miercoles : "26 C°", jueves: "26 C°",viernes : "26 C°", sabado : "26 C°",domingo : "26 C°" },
    { capital: "La Paz",img: "lapaz.jpg", temperatura: "25 C°",estado : "nublado",icono: "☔",lunes : "26 C°", martes : "26 C°",miercoles : "26 C°", jueves: "26 C°",viernes : "26 C°", sabado : "26 C°",domingo : "26 C°" },
    { capital: "Montevideo",img: "montevideo.jpg",temperatura: "25 C°",estado : "nublado",icono: "☔",lunes : "26 C°", martes : "26 C°",miercoles : "26 C°", jueves: "26 C°",viernes : "26 C°", sabado : "26 C°",domingo : "26 C°" },
    { capital: "Asunción",img: "asuncion.jpg",temperatura: "25 C°",estado : "nublado",icono: "☔",lunes : "26 C°", martes : "26 C°",miercoles : "26 C°", jueves: "26 C°",viernes : "26 C°", sabado : "26 C°",domingo : "26 C°" },
    { capital: "Quito",img: "quito.jpg",temperatura: "25 C°",estado : "nublado",icono: "☔",lunes : "26 C°", martes : "26 C°",miercoles : "26 C°", jueves: "26 C°",viernes : "26 C°", sabado : "26 C°",domingo : "26 C°" },
    { capital: "Caracas",img: "caracas.jpg",temperatura: "25 C°",estado : "nublado",icono: "☔",lunes : "26 C°", martes : "26 C°",miercoles : "26 C°", jueves: "26 C°",viernes : "26 C°", sabado : "26 C°",domingo : "26 C°" ,lunes : "26 C°", martes : "26 C°",miercoles : "26 C°", jueves: "26 C°",viernes : "26 C°", sabado : "26 C°",domingo : "26 C°" },
    { capital: "Bogotá",img: "bogota.jpg",temperatura: "25 C°",estado : "nublado",icono: "☔",lunes : "26 C°", martes : "26 C°",miercoles : "26 C°", jueves: "26 C°",viernes : "26 C°", sabado : "26 C°",domingo : "26 C°" },
  ]
    
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
                <p class="card-text" >
                    ${value.temperatura}
                </p>
                <p class="card-text" >
                    ${value.icono}
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
    let icono1 = $(this).data("iconos")
    let temp_lu = $(this).data("lun")
    let temp_ma = $(this).data("mar")
    let temp_mi = $(this).data("mie")
    let temp_ju = $(this).data("jue")
    let temp_vi = $(this).data("vie")
    let temp_sa = $(this).data("sab")
    let temp_do = $(this).data("dom")

    $(".modal-body").html(
      `
           <img src="./assets/img/${imagen}"  class="img-fluid" alt="" 

            <p>${icono1}</p>
            <p>Lunes ${temp_lu}</p>
            <p>Martes ${temp_ma}</p>
            <p>Miércoles ${temp_mi}</p>
            <p>Jueves ${temp_ju}</p>
            <p>Viernes ${temp_vi}</p>
            <p>Sábado ${temp_sa}</p>
            <pDomingo ${temp_do}</p>
            


           `
    )
  })
})
