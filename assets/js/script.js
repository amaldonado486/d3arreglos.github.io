const propiedades_venta= [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        banios: 4,
        costo: 5.000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        banios: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        banios: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Departamento En Venta Providencia, El Vergel, 3d',
        src: 'https://http2.mlstatic.com/D_NQ_NP_788802-MLC78366918438_082024-O.webp',
        descripcion: 'Lindo y amplio departamento con excelente ubicación en tranquilo sector de El Vergel, Providencia, cercano a cafés y plazas, a 5 min Colegio San Ignacio, Club Providencia, 7 min metro Colón.',
        ubicacion: 'El Vergel 2400 - 2700, Las Lilas, Providencia, RM (Metropolitana)',
        habitaciones: 3,
        banios: 3,
        costo: 7800,
        smoke: true,
        pets: true
    }    
]

const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banios: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        banios: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banios: 2,
        costo: 0,
        smoke: false,
        pets: false
    },
    {
        nombre: 'SOMMA INÉS DE SUÁREZ',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_769064-MLC72665086839_112023-F.webp',
        descripcion: 'Calidad de vida, funcionalidad y diseño. Patrimonio y originalidad. Conoce nuestros espacios comunes y disfruta de una nueva experiencia en servicio. Sumamos conectividad y centralidad en el lugar más cool y cosmopolita de Santiago, con tintes financieros, empresariales, residenciales, cívicos y familiares.',
        ubicacion: 'Avenida Pedro De Valdivia 2100 - 2400, Inés de Suárez, Providencia, RM (Metropolitana)',
        habitaciones: 2,
        banios: 2,
        costo: 0,
        smoke: false,
        pets: false
    }

    ]
    
    function PintaVentas(esPrincipal=false)
    {

        
        var ventasHtml = document.querySelector('#propiedades_en_ventas')
        var html='<div class="row">'
        SiSmoke =`<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
        NoSmoke =`<p class="text-danger"><i class="fas fa-smoking"></i> No Permitido fumar</p>`
        SiPets = `<p class="text-success"><i class="fas fa-smoking"></i>se permiten mascotas</p>`
        NoPets = `<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`
        contador =0;
        for (let venta of propiedades_venta){
            contador++
            
            if (((contador<=3)  && (esPrincipal)) || (!esPrincipal)){
                html += `
            <div class="col-md-4 mb-4">
                <div class="card">
                <img
                    src="${venta.src}"
                    class="card-img-top"
                    alt="${venta.nombre}"/>
                <div class="card-body">
                    <h5 class="card-title">${venta.nombre}</h5>
                    <p class="card-text"> ${venta.descripcion}</p>
                    <p> <i class="fas fa-map-marker-alt"></i> ${venta.ubicacion}</p>
                    <p>
                    <i class="fas fa-bed"></i> ${venta.habitaciones} Habitaciones |
                    <i class="fas fa-bath"></i> ${venta.banios} Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${venta.costo}</p>`
                if (venta.smoke){
                    html+=SiSmoke
                }else
                {
                    html+=NoSmoke
                }  
                
                if (venta.pets){ 
                    html+=SiPets
                }else{
                    html+=NoPets
                }
                    html+=`
                            </div>
                        </div>
                        </div>`
            }
        }
        html+='</div>'
        ventasHtml.innerHTML = html ;
    
    }

     
    function  PintaArriendo(esPrincipal=false){

        var arriendoHtml = document.querySelector('#propiedades_alquiler')
        var html='<div class="row">'
        SiSmoke =`<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
        NoSmoke =`<p class="text-danger"><i class="fas fa-smoking"></i> No Permitido fumar</p>`
        SiPets = `<p class="text-success"><i class="fas fa-smoking"></i>se permiten mascotas</p>`
        NoPets = `<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`
        cont =0;
        for (let alquiler of propiedades_alquiler){
            cont++
            
            if (((cont<=3)  && (esPrincipal)) || (!esPrincipal)){
    
                html += `
            <div class="col-md-4 mb-4">
                <div class="card">
                <img
                    src="${alquiler.src}"
                    class="card-img-top"
                    alt="${alquiler.nombre}"/>
                <div class="card-body">
                    <h5 class="card-title">${alquiler.nombre}</h5>
                    <p class="card-text"> ${alquiler.descripcion}</p>
                    <p> <i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion}</p>
                    <p>
                    <i class="fas fa-bed"></i> ${alquiler.habitaciones} Habitaciones |
                    <i class="fas fa-bath"></i> ${alquiler.banios} Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${alquiler.costo}</p>`
                if (alquiler.smoke){
                    html+=SiSmoke
                }else
                {
                    html+=NoSmoke
                }  
                
                if (alquiler.pets){ 
                    html+=SiPets
                }else{
                    html+=NoPets
                }
                    html+=`
                            </div>
                        </div>
                        </div>`
            }
        }
        html+='</div>'
        arriendoHtml.innerHTML = html ;
        
    }
    

    