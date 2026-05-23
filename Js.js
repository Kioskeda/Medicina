//Array de papeleria:
var paplist = [
  //Papeleria:
  "Resmas de papel",
  "Papel fotográfico",
  "Rollos térmicos",
  "Rollos bond",
  "Rollos de tiqueteadora",
  "Cinta transparente",
  "Cinta aislante",
  "Cinta de enmascarar",
  "Calculadora científica",
  "Cuadernos de espiral",
  "Hojas adhesivas",
  "Bolígrafos de tinta negra",
  "Bolígrafos de tinta roja",
  "Lápices de madera HB",
  "Portaminas 0.5mm",
  "Goma de borrar",
  "Sacapuntas con depósito",
  "Resaltadores de colores",
  "Marcadores permanentes",
  "Marcadores para tablero blanco",
  "Corrector en cinta",
  "Regla graduada 30cm",
  "Escuadra y transportador",
  "Compás metálico",
  "Tijeras de acero inoxidable",
  "Bisturí de precisión",
  "Pegante líquido blanco",
  "Pegante en barra",
  "Silicona líquida",
  "Engrapadora estándar",
  "Grapas 26/6",
  "Saca-grapas",
  "Perforadora de dos huecos",
  "Clips galvanizados",
  "Chinches y pins",
  "Bandas elásticas",
  "Carpetas legajadoras",
  "Folders con gancho",
  "Sobres de manila (Carta y Oficio)",
  "Calculadora básica",
  "Tablas con clip (apoyos)",
  "Índices adhesivos",
  "Cartulinas de colores",
  "Papel seda",
  "Papel silueta",
  "Fomi (Goma Eva)",
];

var proconf = [
    //"Elementos de una dulceria:
    "Chocolate blanco.\n",
    "Trufas de chocolate.\n",
    "Bombones rellenos de licor.\n",
    "Barra de chocolate con almendras.\n",
    "Monedas de chocolate.\n",
    "Pasas con chocolate.\n",
    "Granos de café cubiertos de chocolate.\n",
    "Gomitas de ositos.\n",
    "Gomitas de aros de durazno.\n",
    "Gomitas de lombrices ácidas.\n",
    "Gomitas de frutas surtidas.\n",
    "Malvaviscos con chocolate.\n",
    "Malvaviscos de colores.\n",
    "Regaliz rojo (Twizzlers).\n",
    "Regaliz negro.\n",
    "Pastillas de goma de eucalipto.\n",
    "Paletas de caramelo macizo.\n",
    "Paletas con relleno de chicle.\n",
    "Caramelos de menta.\n",
    "Caramelos de mantequilla (Butterscotch).\n",
    "Bastones de caramelo.\n",
    "Caramelos frutales acidulados.\n",
    "Paletas de malvavisco cubiertas.\n",
    "Cajeta quemada.\n",
    "Obleas con cajeta.\n",
    "Cocadas horneadas.\n",
    "Dulce de leche.\n",
    "Ate de membrillo.\n",
    "Palanquetas de cacahuate.\n",
    "Alegrías de amaranto.\n",
    "Borrachitos de vinagrillo.\n",
    "Mazapán de cacahuate.\n",
    "Chicles de bola.\n",
    "Chicles sin azúcar de menta.\n",
    "Caramelos masticables de fruta.\n",
    "Caramelos de suero de leche.\n",
    "Toffee de vainilla.\n",
    "Caramelo suave de café.\n",
    "Almendras confitadas.\n",
    "Cacahuates garapiñados.\n",
    "Fruta cristalizada (higo, calabaza).\n",
    "Hojuelas de maíz con chocolate.\n",
    "Grageas de colores.\n",
    "Lentejas de chocolate (tipo M&Ms).\n",
    "Huevo de chocolate con sorpresa.\n"
];

var hardware = [
    //"Hardware de computadora:
    "Procesador (CPU)",
    "Memoria RAM",
    "Placa Base (Motherboard)",
    "Tarjeta Gráfica (GPU)",
    "Fuente de Alimentación (PSU)",
    "Disco Duro (HDD) o SSD",
    "Sistema de Enfriamiento",
    "Teclado",
    "Ratón (Mouse)",
    "Micrófono",
    "Escáner",
    "Cámara Web",
    "Monitor",
    "Altavoces (Parlantes)",
    "Auriculares",
    "Impresora",
    "Tarjeta de Red (Wi-Fi/Ethernet)",
    "Gabinete (Chasis)",
    "Puertos USB/Thunderbolt",
    "Conectores cableados",
    "Disco de 3:1/2"
]
var soft = [
    //"Software básico",
    "Sistemas Operativos",
    "Windows", 
    "macOS", 
    "Linux",
    "Android", 
    "iOS",
    "Ubuntu",
    "Fedora",
    "Debian",
    "Google Chrome", 
    "Mozilla Firefox", 
    "Microsoft Edge", 
    "Safari", 
    "Opera",
    "Microsoft Office", 
    "Google Workspace", 
    "LibreOffice",
    "Microsoft Defender", 
    "Avast",
    "Malwarebytes", 
    "Norton",
    "Reproductores Multimedia",
    "VLC Media Player", 
    "Spotify", 
    "Windows Media Player", 
    "QuickTime",
    "WinRAR", 
    "7-Zip", 
    "WinZip",
    "Adobe Acrobat Reader",
    "Foxit Reader"
]

//alert("La lista de productos almacenados en los productos de papeleria son: " + paplist.length + ".\nLos productos son:.\n" + paplist);

/*function pap(){
    let cont = document.getElementById();
    paplist.forEach(element => {
        if(product != 0){
            let li = document.createElement("li");
            li.textContent = producto;
            contenedor.appendChild(li);
        }
    });
    alert(paplist);
}*/
//Lista de variables para urls de certificados.
 function salu(){
    //alert("Prueba.");
 }
function sws(){
    alert("prueba switch.");
    let x;
    x = Number(document.getElementById("sels").value);
    switch (x) {
    case 0:

        break;
    case 1:

        break;
    case 2:

        break;
    case 3:

        break;
    case 4:

        break;
    case 5:
        window.open("./PWEC.png");
        break;
    case 6:
        window.open("./PWEC1.png");
        break;
    case 7:
        window.open("./PWEC2.png");
        break;
    case 8:
        window.open("./PWEC.png");
        break;
    case 9:
        window.open("./PWEC1.png");
        break;
    case 10://Selector de certificados.
        //window.open("./index.html", "_blank");
        break;
    case 11://consulte su eps.
        window.open("https://www.adres.gov.co/consulte-su-eps", "_blank");
        break;

    case 12://Consulte procuraduria.
        window.open("https://www.procuraduria.gov.co/Pages/Consulta-de-Antecedentes.aspx", "_blank");
        break;

    case 13://Consulta de contraloria.
        window.open("https://www.contraloria.gov.co/control-fiscal/responsabilidad-fiscal/certificado-de-antecedentes-fiscales", "_blank");
        break;
        
    case 14://Consulta policia.
        window.open("https://antecedentes.policia.gov.co:7005/WebJudicial/index.xhtml", "_blank");
        break;
    case 15://Consulta RNMC
        window.open("https://srvcnpc.policia.gov.co/PSC/frm_cnp_consulta.aspx", "_blank");
        break;
        
    case 16://Tramites de rut.
        window.open("https://www.dian.gov.co/impuestos/RUT/Paginas/Servicios-y-Tramites.aspx", "_blank");
        break;
    case 17://Tramites de la camara de comercio.
        window.open("https://tramites.camaramedellin.com.co/", "_blank");
        break;
    case 18://Tramites de pasaporte.
        window.open("https://sedeelectronica.antioquia.gov.co/publicaciones/227/pasaportes/", "_blank");
        break;
    case 19://Tramites Aeronáutica civil:
        window.open("https://www.aerocivil.gov.co/proveedor_servicios/publicaciones/4298/tramites-en-linea/", "_blank");
        break;
    case 20://Como sacar el sisben.
        window.open("https://www.sisben.gov.co/Paginas/consulta-tu-grupo.html", "_blank");
        break;
    case 21:
        window.open("./PWEC2.png");
    case 22:
        window.open("./PWEC.png");
        break;
    case 23:
        window.open("./PWEC1.png");
        break;
    case 24:
        window.open("./PWEC2.png");
        break;
    case 25:
        window.open("./PWEC.png");
        break;
    case 26:
        window.open("./PWEC1.png");
        break;
    case 27:
        window.open("./PWEC2.png");
        break;
    case 28:
        window.open("./PWEC.png");
        break;
    case 29:
        window.open("./PWEC1.png");
        break;
    case 30:

        break;
    case 31:

        break;
    case 32:

        break;
    case 33:

        break;
    case 34:

        break;
    case 35:

        break;
    case 36:
        window.open("./PWEC.png");
        break;
    case 37:
        window.open("./PWEC.png");
        break;
    case 38:
        window.open("./PWEC.png");
        break;
    case 39:
        window.open("./PWEC.png");
        break;

    default:
    }
}
function josecano(){
    alert("Correo electrónico de contacto:\ninfoprolearn@atomicmail.io\nkioskeda823@gmail.com");
    window.open("https://www.youtube.com/@josefernandocanopelaez7242");
}

function ingarr(){
    while(confirm() === true){
        paplist.push = prompt("Los productos actuales son:.\n",'Ingrese un array adicional:').value;
    }
    
}
function aña(){
    let nomprov = document.getElementById("nombpro").value;
    //añadir al array
    nomprov.push(nomprov);

    // Limpiar el input
        document.getElementById("entradaTexto").value = "";


}

//Lista de elementos en una dulceria:





