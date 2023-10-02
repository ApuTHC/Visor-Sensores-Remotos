function ElementoFormato(nombre, clase, tag, stringArray) {
    this.nombre = nombre;
    this.clase = clase;
    this.tag = tag;
    this.stringArray = stringArray;
}
var ElementoSueloResidualUGSR = new ElementoFormato( "Horizonte",  "secuenciaestratisuelosres",  "secuenciaestratisuelor", ['VI','V','IV']);
var ElementoSueloResidualUGSS = new ElementoFormato( "Horizonte",  "secuenciaestrati",  "secuenciaestratisuelor", ['VI (Suelo Residual Menor a 10% F.R.*)','V (Saprolito Fino 10%-35% F.R.*)','IV (Saprolito Grueso 35%-70% F.R.*)']);

var listaElementosUGSR = [
  new ElementoFormato( "Número Formato",  "edittext",  "noformato", 0),
  new ElementoFormato( "Municipio",  "spinner",  "municipios", ['GIRARDOTA']),
  new ElementoFormato( "Vereda",  "edittext",  "vereda", 0),
  new ElementoFormato( "Número de la Estación",  "edittext",  "noestacion", 0),
  new ElementoFormato( "Clase Afloramiento",  "spinner",  "claseaflor", ['Natural','Corte superficial','Excavación subterránea','Trinchera, Apique']),
  new ElementoFormato( "Secuencia Estrati",  "secuenciaestrati",  "secuenciaestratiopt", ['Depósito de Gravedad','Suelo Transportado','Suelo Residual','Roca']),
  new ElementoFormato( "CARACTERIZACIÓN DE LA UGS / UGI",  "titulo",  "", 0),
  new ElementoFormato( "Perfil de meteorización (Dearman 1974)",  "edittext",  "perfilmeteorizacion", 0),
  new ElementoFormato( "N° litologías asociadas a la UGS /UGI",  "litologias",  "litologiasasociadasopt", 0),
  new ElementoFormato( "Nombre de la UGS / UGI",  "edittext",  "nombreugs", 0),
  new ElementoFormato( "GSI",  "spinner",  "gsi", ['0-20','20-40','40-60','60-80','80-100','No Aplica']),
  new ElementoFormato( "CARACTERÍSTICAS DE LA UGS / UGI",  "titulo",  "", 0),
  new ElementoFormato( "Fábrica",  "radiobtn",  "fabrica", ['Cristalina Masiva','Cristalina Foliada','Clástica Cementada','Clástica Consolidada','Roca de falla/ brecha de falla','No Aplica']),
  new ElementoFormato( "Humedad Natural",  "radiobtn",  "humedad", ['Seco','Húmedo','Con flujo','No Aplica']),
  new ElementoFormato( "Tamaño del Grano",  "radiobtn",  "tamanograno", ['Muy Grueso','Grueso ','Medio','Fino','Muy Fino','No Aplica']),
  new ElementoFormato( "Grado de Meteorización",  "radiobtn",  "gradometeo", ['Ninguna','Débil ','Moderada','Alta','Muy Alta','No Aplica']),
  new ElementoFormato( "Resistencia a la Compresión Simple (Mpa)",  "radiobtn",  "resistenciacomp", ['Extremadamente Dura >250','Muy Dura 100-250','Dura 50-100','Moderada 25-50','Blanda 5-25','Muy blanda 1-5','Extremadamente blanda 0,25-1','No Aplica']),
  new ElementoFormato( "Color Litología 1",  "edittext",  "color1", 0),
  new ElementoFormato( "Color Litología 2",  "edittext",  "color2", 0),
  new ElementoFormato( "Composición Mineralógica (Macro) Litología 1",  "edittext",  "composicionmineral1", 0),
  new ElementoFormato( "Composición Mineralógica (Macro) Litología 2",  "edittext",  "composicionmineral2", 0)
];

var listaElementosUGSRDiscont = [
  new ElementoFormato( "Tipo",  "spinner",  "TipoDiscont", ['0. Zona de falla','1. Plano de Falla ','2. Diaclasa','3. Clivaje','4. Esquistosidad','5. Cizalla','6. Fisura','7. Grieta de tensión','8. Foliación','9. Estratificación','10. Estria/Espejo de falla','No Aplica']),
  new ElementoFormato( "Dir. Buzamiento (Az. Bz.)",  "edittext",  "DirBuzamiento", 0),
  new ElementoFormato( "Buzamiento (Bz.)",  "edittext",  "Buzamiento", 0),
  new ElementoFormato( "Persistencia",  "spinner",  "PersistenciaDiscont", ['1. Muy baja (Menor a 1 m)','2. Baja (1 a 3 m)','3. Media (3 a 10 m)','4. Alta (10 a 20 m)','5. Muy alta (Mayor a 20 m)','No Aplica']),
  new ElementoFormato( "Ancho de Abertura",  "spinner",  "AnchoAberDiscont", ['1. Muy estrecha (Menor a 0,1 mm)','2. Estrecha (0,1 a 0,25 mm)','3. Parcialm abierta (0,25 a 0,5 mm)','4. Abierta (0,5 a 2,5 mm)','5. Moderadam abierta (2,5 a 10,0 mm)','6. Amplia (Mayor a 10 mm)','7. Muy Amplia (1 a 10 cm)','No Aplica']),
  new ElementoFormato( "Tipo de Relleno",  "spinner",  "TipoRellenoDiscont", ['1. Limpia','2. Superficie teñida','3. No cohesivo','4. Matriz arcillosa inactiva','5. Matriz arcillosa expansiva','6. Cementada','7. Clorita, talco o yeso','8. Otra','No Aplica']),
  new ElementoFormato( "Rugosidad de la Superficie",  "spinner",  "RugosidadSuperDiscont", ['1. Rugosa','2. Suave','3. Pulida','4. Estrías de falla','No Aplica']),
  new ElementoFormato( "Forma de la Superficie",  "spinner",  "FormaSuperDiscont", ['1. Escalonada','2. Ondulada','3. Planar','No Aplica']),
  new ElementoFormato( "Humedad en Diaclasas",  "spinner",  "HumedadDiscont", ['0. No hay posibilidad de flujo de agua','1. Discontinuidad seca sin evidencia de flujo de agua','2. Discontinuidad seca con manchas de óxido','3. Discontinuidad húmeda sin flujo de agua presente','4. Discontinuidad que muestra goteo, sin flujo de agua','5. Discontinuidad con flujo continuo de agua','No Aplica']),
  new ElementoFormato( "Espaciamiento",  "spinner",  "EspaciamientoDiscont", ['1. Extremadamente cerrado (Menor a 0,20 mm)','2. Muy cerrado (20 a 60 mm)','3. Cerrado (60 a 200 mm)','4. Moderado (200 a 600 mm)','5. Amplio (600 a 2000 mm)','6. Muy amplio (2000 a 6000 mm)','7. Extremadamente espaciado (Mayor a 6000mm)','No Aplica']),
  new ElementoFormato( "Meteorizacion",  "spinner",  "MeteorizacionDiscont", ['1. Fresca','2. Descolorida','3. Descompuesta','4. Desintegrada','No Aplica']),
  new ElementoFormato( "Rake/Pitch",  "edittext",  "RakePitch", 0),
  new ElementoFormato( "Dir. del Rake/Pitch",  "edittext",  "DirRakePitch", 0),
  new ElementoFormato( "Orientación talud/ladera",  "titulo",  "", 0),
  new ElementoFormato( "Az Bz/Bz",  "edittext",  "AzBzBz1", 0),
  new ElementoFormato( "Az Bz/Bz",  "edittext",  "AzBzBz2", 0),
  new ElementoFormato( "Altura",  "edittext",  "AlturaDiscont", 0),
  new ElementoFormato( "Observaciones",  "edittext",  "ObservacionesDiscont", 0)
];

// var listaElementosUGSFotosAnexas = [
//   new ElementoFormato( "Nombre de la Foto",  "edittext",  "NombreFotosAnexas", 0),
//   new ElementoFormato( "Descripción de la Foto",  "edittext",  "DescriFotosAnexas", 0)
// ]

var listaElementosUGSS = [
  new ElementoFormato( "Número Formato",  "edittext",  "noformato", 0),
  new ElementoFormato( "Municipio",  "spinner",  "municipios", ['GIRARDOTA']),
  new ElementoFormato( "Vereda",  "edittext",  "vereda", 0),
  new ElementoFormato( "Número de la Estación",  "edittext",  "noestacion", 0),
  new ElementoFormato( "Clase Afloramiento",  "spinner",  "claseaflor", ['Natural','Corte superficial','Excavación subterránea','Trinchera, Apique']),
  new ElementoFormato( "Secuencia Estratigráfica",  "secuenciaestrati",  "secuenciaestratiopt", ['Suelo Antrópico','Suelo Residual','Suelo Transportado']),
  new ElementoFormato( "CARACTERIZACIÓN DE LA UGS / UGI",  "titulo",  "", 0),
  new ElementoFormato( "Nombre-Código de la UGS / UGI",  "edittext",  "nombreugs", 0),
  new ElementoFormato( "N° litologías asociadas a la UGS /UGI",  "litologias",  "litologiasasociadasopt", 0),
  new ElementoFormato( "CARACTERÍSTICAS DE LA UGS / UGI",  "titulo",  "", 0),
  new ElementoFormato( "Estructura Soporte",  "radiobtn",  "estructurasoporte", ['Clasto-soportado','Intermedia','Matriz soportado','No Aplica']),
  new ElementoFormato( "Porcentaje de Matriz 1",  "edittext",  "porcentajematriz1", 0),
  new ElementoFormato( "Porcentaje de Matriz 2",  "edittext",  "porcentajematriz2", 0),
  new ElementoFormato( "Porcentaje de Clastos 1",  "edittext",  "porcentajeclastos1", 0),
  new ElementoFormato( "Porcentaje de Clastos 2",  "edittext",  "porcentajeclastos2", 0),
  new ElementoFormato( "Condicion de Humedad",  "radiobtn",  "condicionhumedad", ['Seco','Húmedo','Mojado','Muy Mojado','No Aplica']),
  new ElementoFormato( "Estructuras Relictas",  "radiobtn",  "estructurasrelictas", ['Estructuras heredadas','Fisuras','Grietas','No Aplica']),
  new ElementoFormato( "Color Litología 1",  "edittext",  "color1", 0),
  new ElementoFormato( "Color Litología 2",  "edittext",  "color2", 0),
  new ElementoFormato( "CARACTERÍSTICAS DE LOS CLASTOS",  "titulo",  "", 0),
  new ElementoFormato( "Granulometria de los Clastos",  "multitext",  "granulometria", ['Arena Media (0,425 - 2,0 mm)','Arena gruesa (2,0 - 4,75 mm)','Gravas Finas (4,75 - 19 mm)','Gravas Gruesas (19-75 mm)','Cantos (75 - 300 mm)','Bloques (> 300 mm)']),
  new ElementoFormato( "Forma de los Clastos",  "radiocheck",  "forma", ['Esférica','Equidimensional','Tabular','Plana-Alargada','Irregular']),
  new ElementoFormato( "Redondez de los Clastos",  "radiocheck",  "redondez", ['Bien Redondeada','Redondeada','Subredondeada','Subangular','Angular','Muy Angular']),
  new ElementoFormato( "Orientacion de los Clastos",  "radiobtn",  "orientacion", ['Isotropía','Anisotropía','Imbricado','No Aplica']),
  new ElementoFormato( "Dirección Imbricación 1",  "edittext",  "dirimbricacion1", 0),
  new ElementoFormato( "Dirección Imbricación 2",  "edittext",  "dirimbricacion2", 0),
  new ElementoFormato( "Meteorizacion de los Clastos",  "radiobtn",  "meteorizacionclastos", ['Ninguna','Débil','Moderada','Alta','Muy alta','No Aplica']),
  new ElementoFormato( "CARACTERÍSTICAS DE LA MATRIZ",  "titulo",  "", 0),
  new ElementoFormato( "Granulometría de la Matriz",  "multitext",  "granulometriamatriz", ['Finos (Limos-Arcillas Menores de 0,075 mm)','Arena Fina (0,075 - 0,425 mm)','Arena Media (0,425 - 2,0 mm)','Arena gruesa (2,0 - 4,75 mm)','Gravas Finas (4,75 - 19 mm)','Gravas Gruesas (19-75 mm)','Cantos (75 - 300 mm)','Bloques (> 300 mm)']),
  new ElementoFormato( "Gradacion de la Matriz",  "radiobtn",  "gradacion", ['Normal','Inversa','Normal, solo a la base','Normal,solo al techo','Sin gradación','Compuesto, simétrico','No Aplica']),
  new ElementoFormato( "Seleccion de la Matriz",  "radiobtn",  "seleccion", ['Muy Pobremente Seleccionado','Pobremente Seleccionado','Moderadamente Seleccionado','Bien Seleccionado','Muy Bien Seleccionado','No Aplica']),
  new ElementoFormato( "Plasticidad de la Matriz",  "radiobtn",  "plasticidad", ['No plástico','Ligeramente Plástico','Plástico','Muy Plástico','No Aplica']),
  new ElementoFormato( "SUELOS FINOS",  "titulo",  "", 0),
  new ElementoFormato( "RESISTENCIA AL CORTE NO DRENADO kN/m2 (CONSISTENCIA)",  "radiobtn",  "resiscorte", ['Muy Blanda Menor a 20','Blanda 20-40','Media 40-75','Alta 75-150','Muy Alta 150-300','Dura > 300','No Aplica']),
  new ElementoFormato( "SUELOS GRUESOS",  "titulo",  "", 0),
  // new ElementoFormato( "Forma de la Matriz",  "radiobtn",  "formasuelosgruesos", ['Esférica','Equidimensional','Tabular','Plana-Alargada','Irregular']),
  // new ElementoFormato( "Redondez de la Matriz",  "radiobtn",  "redondezsuelosgruesos", ['Bien Redondeada','Redondeada','Subredondeada','Subangular','Angular','Muy Angular']),
  // new ElementoFormato( "Orientación de la Matriz",  "radiobtn",  "orientacionsuelosgruesos", ['Isotropía','Anisotropía','Imbricado']),
  // new ElementoFormato( "Dirección Imbricación Matriz 1",  "edittext",  "dirimbricacionmatriz1", ['Isotropía','Anisotropía','Imbricado']),
  // new ElementoFormato( "Dirección Imbricación Matriz 2",  "edittext",  "dirimbricacionmatriz2", ['Isotropía','Anisotropía','Imbricado']),
  new ElementoFormato( "Compacidad de la Matriz",  "radiobtn",  "compacidadsuelosgruesos", ['Débil (suelta)','Moderada (Media)','Fuerte (Densa)','No Aplica']),
  new ElementoFormato( "Observaciones",  "edittext",  "observacionessuelos", 0),
  new ElementoFormato( "Descripción Composición Partículas del Suelo",  "edittext",  "descripcionsuelos", 0)
]

var listaElementosSGMF =[
  new ElementoFormato( "Número Formato",  "edittext",  "noformato", 0),
  new ElementoFormato( "Municipio",  "spinner",  "municipios", ['GIRARDOTA']),
  new ElementoFormato( "Vereda",  "edittext",  "vereda", 0),
  new ElementoFormato( "Número de la Estación",  "edittext",  "noestacion", 0),
  new ElementoFormato( "Tipo de Ambiente (Marque varios si es necesario)","radiocheck","ambiente",["Morfoestructural","Volcánico","Denudacional","Fluvial-Lagunar","Marino-Costero","Glacial-Periglacial","Eólico","Kárstico","Antropogénico"]),
  new ElementoFormato( "UBICACIÓN GEOMORFOLÓGICA","multitext","ubicacion",["Geomorfoestructura","Provincia","Region","Unidad","Subunidad","Elemento"]),
  new ElementoFormato( "CARACTERIZACIÓN DE LA (S) GEOFORMA (S)",  "titulo",  "", 0),
  new ElementoFormato( "Nombre SGMF / EGMF","edittext","nombreSGMF",0),
  new ElementoFormato( "ID - Código SGMF / EGMF","edittext","codigoSGMF",0),
  new ElementoFormato( "Observaciones","edittext","observacionesSGMF",0)

]

var listaElementosNewSGMF = [
  new ElementoFormato( "MORFOLITOLOGÍA - MORFOLOGÍA - MORFOMETRÍA - COBERTURA",  "titulo",  "", 0),
  new ElementoFormato( "ID-Código SGMF-EGMF","edittext","codigonuevaSGMF",0),
  new ElementoFormato( "TIPO DE ROCA, TRO","spinner","tiporoca",["1. Ígnea ácida","2. Ígnea intermedia","3. Ígnea básica","4. Ígnea ultrabásica","5. Volcánica Pirosclástica","6. Sediment. cementada","7. Sediment. consolidada","8. Sedimentaria química","9. Metamórfica masiva","10. Metamórf. bandeada","11. Metamórf. bien foliada",'No Aplica']),
  new ElementoFormato( "GRADO DE METEORIZACIÓN, GM","spinner","gradometeor",["1. Fresca","2. Débil","3. Moderada","4. Alta",'No Aplica']),
  new ElementoFormato( "GRADO DE FRACTURAMIENTO, GF","spinner","gradofractura",["1. Roca Sana","2. Roca Fracturada","3. Roca Muy fracturada",'No Aplica']),
  new ElementoFormato( "TIPO DE SUELO, TSU","spinner","tiposuelo",["1. Antrópico","2. Residual","3. Transportado","3.1 Aluviales (Terrazas, Abanicos)","3.2 Lacustres","3.3 Coluviones","3.4 Talus","3.5 Flujos","3.6 Volcánicos","3.7 Eólicos","3.8 Glacial",'No Aplica']),
  new ElementoFormato( "TAMAÑO DE GRANO, TG","spinner","tamanograno",["1. Grueso","2. Fino",'No Aplica']),
  new ElementoFormato( "TIPO DE RELIEVE, TR","spinner","tiporelieve",["1. Montañoso (>500 m)","2. Colina (20 a 500 m)","3. Loma (50 a 200 m)","4. Montículo (Menor a 50 m)",'No Aplica']),
  new ElementoFormato( "INDICE DE RELIEVE, IR","spinner","indicerelieve",["1. Muy bajo (Menor a 50 m)","2. Bajo (50-250 m)","3. Moderado (250-500 m)","4. Alto (500-1000 m)","5. Muy Alto (1000 a 2500 m)",'No Aplica']),
  new ElementoFormato( "INCLINACIÓN LADERA, IL","spinner","inclinacionladera",["1. Plana a suave (Menores a 5°)","2.Inclinada (5° a 10°)","3. Muy inclinada (10° - 15°)","4. Abrupta (15° - 20°)","5. Muy abrupta (20° - 30º)","6. Escarpada (30º - 45º)","7. Muy escarpada (>45º)",'No Aplica']),
  new ElementoFormato( "LONGITUD LADERA, LL","spinner","longiladera",["1. Muy corta (Menor a 50 m)","2. Corta (50-250 m)","3. Moderada (250-500 m)","4. Larga (500-1000 m)","5. Muy larga (1000-2500 m)","6. Extremada/ larga (>2500 m)",'No Aplica']),
  new ElementoFormato( "FORMA LADERA, FL","spinner","formaladera",[ "1. Rectilínea","2. Cóncava","3. Convexa","4. Irregular","5. Compleja",'No Aplica']),
  new ElementoFormato( "FORMA DE LA CRESTA, FC","spinner","formacresta",[ "1. Aguda","2. Redondeada","3. Convexa amplia","4. Convexa plana","5. Plana","6. Plana Disectada",'No Aplica']),
  new ElementoFormato( "FORMAS DEL VALLE, FV","spinner","formavalle",[ "1. Artesa","2. Forma de V","3. Forma de U",'No Aplica']),
  new ElementoFormato( "COBERTURA, C","spinner","cobertura",[ "1. Pastos","2. Bosques","3. Cultivos","4. Cantera","5. Urbana","6. Otro",'No Aplica']),
  new ElementoFormato( "COBERTURA OTRO:","edittext","coberturaotro",0),
  new ElementoFormato( "USO DEL TERRENO, U","spinner","uso",[ "1. Ganadería","2. Explot.Forestal","3. Agricultura","4. Explot.Minera","5. Viviendas, vías","6. Otro",'No Aplica']),
  new ElementoFormato( "USO OTRO:","edittext","usootro",0),
  new ElementoFormato( "CARACTERÍSTICAS DE DRENAJE",  "titulo",  "", 0),
  new ElementoFormato( "DENSIDAD, D","spinner","densidad",[ "1. Baja (Menor a 0,5 Km/Km2)","2. Moderada (0,5 a 1 Km/Km2)","3. Alta (> 1 Km/Km2)",'No Aplica']),
  new ElementoFormato( "FRECUENCIA, FR","spinner","frecuencia",[ "1. Muy Alta (>40 #Frec/Km2)","2. Alta (21 a 40 #Frec/Km2)","3. Media (11 a 20 #Frec/Km2)","4. Baja (5 a 10 #Frec/Km2)","5. Muy baja (Menor a 5 #Frec/Km2)",'No Aplica']),
  new ElementoFormato( "TEXTURA, TEX","spinner","textura",[ "1. Gruesa","2. Mediana","3. Fina","4. Muy Fina"]),
  new ElementoFormato( "PATRÓN, PT","spinner","patron",[ "1. Dendrítico","2. Subdendrítico","3. Paralelo","4. Subparalelo","5. Pinado","6. Rectangular","7. Radial","8. Anular","9. Multicuenca","10. Condicionado","11. Otro",'No Aplica']),
  new ElementoFormato( "PATRÓN OTRO:","edittext","patronotro",0),
  new ElementoFormato( "MORFODINÁMICA",  "titulo",  "", 0),
  new ElementoFormato( "TIPO DE EROSIÓN, TE","spinner","tipoerosion",[ "1. Laminar","2. Surcos","3. Barrancos","4. Cárcavas","5. Socavación","6. Tierras malas","7. Terracetas","8. Eólica","9. Glacial","10. Kárstica","11. Marina",'No Aplica']),
  new ElementoFormato( "ESPACIAMIENTO ENTRE CANALES, EC","spinner","espaciamiento",[ "1. (Menor a 5 m)","2. (5 m a 15 m)","3. (15 m a 50 m)","4. (50 m a 150 m)","5. (150 m a 500 m)","6. (> 500 m)",'No Aplica']),
  new ElementoFormato( "INTENSIDAD DE LA EROSIÓN, IER","spinner","intensidaderosion",[ "1. Suave","2. Moderada","3. Severa",'No Aplica']),
  new ElementoFormato( "TIPOS DE MM, TMM","radiocheck","tipodemm",[ "1. Caídas","2. Volcamientos","3. Deslizamiento rotacional","4. Deslizamiento traslacional","5. Reptación","6. Propagación lateral","7. Flujos","8. Compuestos","9. Complejos"]),
  new ElementoFormato( "TIPO DE MATERIAL ASOCIADO, TMA","radiocheck","tipomaterial",[ "1. Finos","2. Arena (0.075 a 4.75 mm)","3. Grava (4,75 - 75,0 mm)","4. Guijos (75 - 300 mm)","5. Bloques (>300 mm)"]),
  new ElementoFormato( "ACTIVIDAD, ACT","spinner","actividad",[ "1. Inactiva: No presenta movimientos en masa","2. Poco activa: Presenta pocos MM","3. Activa: Presenta varios MM",'No Aplica'])
]

// var listaElementosCAT = [
//   new ElementoFormato("ID PARTE del MM","edittextMM","ID_PARTE", 0),
//   new ElementoFormato("IMPORTANCIA","spinnerMM","IMPORTANC",["Alta","Media","Baja"]),
//   new ElementoFormato("ENCUESTADOR","edittextMM","ENCUESTAD",0),
//   new ElementoFormato("FECHA EVENTO","edittextMM","FECHA_MOV",0),
//   new ElementoFormato("FUENTE FECHA EVENTO","spinner","FECHA_FUENTE",["Incierta al Momento","Sensores remotos","Reportada por terceros","Consultada en pagina web"]),
//   new ElementoFormato("CONFIABILIDAD FECHA EVENTO","spinnerMM","ConfiFechaMM",["Exacta","Certeza mes y año","Certeza Año","Confiabilidad baja","Incierta"]),
//   new ElementoFormato("FECHA REPORTE","edittextMM","FECHA_REP",0),
//   new ElementoFormato("SIMMA","edittextMM","COD_SIMMA",0),
//   new ElementoFormato("Municipio",  "spinnerMM",  "NOM_MUN", ['AGUADAS','ARANZAZU','FILADELFIA','MARQUETALIA','RIOSUCIO','SUPIA']),
//   new ElementoFormato("Vereda",  "edittextMM",  "VEREDA", 0),
//   new ElementoFormato("SITIO","edittext","SITIO",0),
//   new ElementoFormato("Latitud","edittext","latitudMM",0),
//   new ElementoFormato("Longitud","edittext","longitudMM",0),
//   new ElementoFormato("Altura","edittext","alturaMM",0),
//   new ElementoFormato("REFERENCIA GEOGRÁFICA","edittextMM","REF_GEOGRF",0),
//   new ElementoFormato("CLASIFICACIÓN DEL MOVIMIENTO",  "titulo",  "", 0),
//   new ElementoFormato("TIPO MOVIMIENTO",  "radiobtnMM",  "TIPO_MOV", ["No Aplica","Deslizamiento","Reptación","Caída","Flujo","Volcamiento","Propagación Lateral","Deform. Gravit. Profundas"]),
//   new ElementoFormato("SUBTIPO PRIMER MOVIMIENTO",  "spinnerMM",  "SUBTIPO_1", ["Caída de Roca","Caída de Suelo","Caída de detritos","Volcamiento flexural de roca","Volcamiento de roca","Volcamiento macizo rocoso","Deslizamiento rotacional","Deslizamiento traslacional","Deslizamiento en cuña","Deslizamiento traslacional en cuña","Deslizamiento traslacional planar","Deslizamiento licuación de arena","Deslizamiento licuación de limo","Deslizamiento licuación detritos","Deslizamiento licuación roca fracturada","Deslizamiento por flujo","Flujo de Detritos","Flujo de Lodo","Flujo de Tierra","Flujo de turba","Avalancha de rocas","Avalancha de detritos","Crecida de detritos","Propagación lateral lenta","Propagación lateral licuación","Reptación de Suelos","Solifluxión","Gelifluxión (en permafrost)"]),
//   new ElementoFormato("SUBTIPO SEGUNDO MOVIMIENTO",  "spinnerMM",  "SUBTIPO_2", ["No Aplica","Caída de Roca","Caída de Suelo","Caída de detritos","Volcamiento flexural de roca","Volcamiento de roca","Volcamiento macizo rocoso","Deslizamiento rotacional","Deslizamiento traslacional","Deslizamiento en cuña","Deslizamiento traslacional en cuña","Deslizamiento traslacional planar","Deslizamiento licuación de arena","Deslizamiento licuación de limo","Deslizamiento licuación detritos","Deslizamiento licuación roca fracturada","Deslizamiento por flujo","Flujo de Detritos","Flujo de Lodo","Flujo de Tierra","Flujo de turba","Avalancha de rocas","Avalancha de detritos","Crecida de detritos","Propagación lateral lenta","Propagación lateral licuación","Reptación de Suelos","Solifluxión","Gelifluxión (en permafrost)"]),
//   new ElementoFormato("POBLACION AFECTADA",  "titulo",  "", 0),
//   new ElementoFormato("Heridos","edittext","HERIDOS",0),
//   new ElementoFormato("Vidas","edittext","VIDAS",0),
//   new ElementoFormato("Desaparecidos","edittext","DESAPARECIDOS",0),
//   new ElementoFormato("Personas","edittext","PERSONAS",0),
//   new ElementoFormato("Familias","edittext","FAMILIAS",0),
//   new ElementoFormato("IMÁGENES SATELITALES","edittext","sensoresremotos",0),
//   new ElementoFormato("FOTOGRAFÍAS AÉREAS","edittextMM","FTE_INFSEC",0),
//   new ElementoFormato("NOTAS (Ej: Causas y observaciones generales):","edittext","notas",0),
//   new ElementoFormato("DAÑOS A INFRASTRUCTURA, ACTIVIDADES ECONÓMICAS, DAÑOS AMBIENTALES:","titulo","",0),
//   new ElementoFormato("TIPO DE DAÑO:","textview","","Infraestructura: edificios, carreteras, inst. educativa, puentes, servicios publicos, vía ferrea, torre conducción eléctrica, obras lineales, planta eléctrica, torre de energía, capa asfaltica, galpones, tanque almacenamiento, espolones, distrito riego, puentes peatonales, puentes veredales, acueducto. Económicos: agricultura, ganadería, cultivos, semovientes, transporte pasajeros y carga. Ambientales: parques, bosques, planta tratamiento de agua.")

// ];

// var listaElementosDANOS = [
//   new ElementoFormato("CLASE DE DAÑO", "spinner", "clasedano", ["I: Infraestructura","E: Económicos","A: Ambientales"]),
//   new ElementoFormato("TIPO", "edittext", "tipodano", 0),
//   new ElementoFormato("CANTIDAD", "edittext", "cantidaddano", 0),
//   new ElementoFormato("UNIDAD", "edittext", "unidaddano", 0),
//   new ElementoFormato("TIPO DAÑO", "spinner", "tiposdano", ["DL: Daño leve","DM: Daño moderado","DS: Daño severo","DT: Daño total","NC: No cuantificable"]),
//   new ElementoFormato("VALOR (US$)", "edittext", "valordano", 0)
// ]

var listaElementosINV = [

  new ElementoFormato("ID DEL MM","edittextMM","ID_MM", 0),
  new ElementoFormato("ENCUESTADOR","edittextMM","ENCUESTAD",0),
  new ElementoFormato("FECHA REPORTE (aaaa-mm-dd)","edittextMM","FECHA_REP",0),
  new ElementoFormato("FECHA MM (aaaa-mm-dd)","edittextMM","FECHA_MOV",0),
  new ElementoFormato("CONFIABILIDAD FECHA MM","spinnerMM","ConfiFecha",["Exacta","Certeza mes y año","Certeza Año","Confiabilidad baja","Incierta"]),
  new ElementoFormato("FUENTE INFO. SECUNDARIA","edittextMM","FTE_INFSEC",0),
  new ElementoFormato("DEPARTAMENTO",  "spinnerMM",  "NOM_DEP", ["ANTIOQUIA"]),
  new ElementoFormato("VEREDA",  "spinnerMM",  "VEREDA", []),
  new ElementoFormato("TIPO MOVIMIENTO",  "radiobtnMM",  "TIPO_MOV", ["No Aplica","Deslizamiento","Reptación","Caída","Flujo","Volcamiento","Propagación Lateral","Deform. Gravit. Profundas"]),
  new ElementoFormato("SUBTIPO PRIMER MOVIMIENTO",  "spinnerMM",  "SUBTIPO_1", ["Caída de Roca","Caída de Suelo","Caída de detritos","Volcamiento flexural de roca","Volcamiento de roca","Volcamiento macizo rocoso","Deslizamiento rotacional","Deslizamiento traslacional","Deslizamiento en cuña","Deslizamiento traslacional en cuña","Deslizamiento traslacional planar","Deslizamiento licuación de arena","Deslizamiento licuación de limo","Deslizamiento licuación detritos","Deslizamiento licuación roca fracturada","Deslizamiento por flujo","Flujo de Detritos","Flujo de Lodo","Flujo de Tierra","Flujo de turba","Avalancha de rocas","Avalancha de detritos","Crecida de detritos","Propagación lateral lenta","Propagación lateral licuación","Reptación de Suelos","Solifluxión","Gelifluxión (en permafrost)"]),
  new ElementoFormato("SUBTIPO SEGUNDO MOVIMIENTO",  "spinnerMM",  "SUBTIPO_2", ["No Aplica","Caída de Roca","Caída de Suelo","Caída de detritos","Volcamiento flexural de roca","Volcamiento de roca","Volcamiento macizo rocoso","Deslizamiento rotacional","Deslizamiento traslacional","Deslizamiento en cuña","Deslizamiento traslacional en cuña","Deslizamiento traslacional planar","Deslizamiento licuación de arena","Deslizamiento licuación de limo","Deslizamiento licuación detritos","Deslizamiento licuación roca fracturada","Deslizamiento por flujo","Flujo de Detritos","Flujo de Lodo","Flujo de Tierra","Flujo de turba","Avalancha de rocas","Avalancha de detritos","Crecida de detritos","Propagación lateral lenta","Propagación lateral licuación","Reptación de Suelos","Solifluxión","Gelifluxión (en permafrost)"]),
  new ElementoFormato("ESTADO","spinnerMM","ESTADO_ACT",["Activo","Reactivado","Suspendido","Latente","Abandonado","Estabilizado","Relicto"]),
  new ElementoFormato("ESTILO","spinnerMM","ESTILO",["Complejo","Compuesto","Múltiple","Sucesivo","Único"]),
  new ElementoFormato("DISTRIBUCIÓN","spinnerMM","DISTRIBUC",["Retrogresivo","Avanzado","Ensanchado","Confinado","Creciente","Decreciente","Movil"]),
  new ElementoFormato("PARTE del MM","edittextMM","PARTE", 0),
  new ElementoFormato("ID PARTE del MM","edittextMM","ID_PARTE", 0),
  new ElementoFormato("ÁREA (m)","edittextMM","AREA", 0),
  new ElementoFormato("VERIFICADO EN CAMPO","spinnerMM","VERIFICADO",["NO","SI"]),
  new ElementoFormato("OBSERVACIONES","edittext","OBSERVACION",0),
  new ElementoFormato("ID DEL FORMATO","edittextMM","ID_FORM", 0),

]

// var listaElementosInvFotosAnexas = [
//   new ElementoFormato( "Fecha",  "edittext",  "fechaFotosAnexas", 0),
//   new ElementoFormato( "Nombre de la Foto",  "edittext",  "nombreFotosAnexasINV", 0),
//   new ElementoFormato( "Autor/Derechos",  "edittext",  "autorFotosAnexas", 0),
//   new ElementoFormato( "Observaciones",  "edittext",  "obsFotosAnexas", 0)
// ]

// var listaElementosUSOS = [
//   new ElementoFormato("PLANILLA DE VERIFICACIÓN DE COBERTURAS Y USO DEL SUELO EN CAMPO","titulo","", 0),
//   new ElementoFormato("Número de Planilla","edittext","NOPLANILLA", 0),
//   new ElementoFormato("Nombre del Intérprete","edittext","PROPIETARIO", 0),
//   new ElementoFormato("Periodo de Interpretación (Mes/Año)","edittext","PERIODO", 0),
//   new ElementoFormato("Municipio",  "spinner",  "MUNICIPIO", ['AGUADAS','ARANZAZU','FILADELFIA','MARQUETALIA','RIOSUCIO','SUPIA']),
//   new ElementoFormato("Fecha","edittext","FECHA", 0),
//   new ElementoFormato("Sensor Utilizado","edittext","SENSOR", 0),
// ];

// var listaElementosPuntosUSOS = [
//   new ElementoFormato("PUNTO","edittext","PUNTO", 0),
//   new ElementoFormato("ESTE","edittext","ESTE", 0),
//   new ElementoFormato("NORTE","edittext","NORTE", 0),
//   new ElementoFormato("FOTOS","edittext","FotosPunto", 0),
//   new ElementoFormato("COBERTURA","edittext","COBERTURA", 0),
//   new ElementoFormato("Observaciones del comportamiento de la cobertura con el inventario de procesos","edittext","OBSUSOS", 0),
//   new ElementoFormato("USO SUELO-T1",  "spinner",  "USOSUELO", ['1. USO AGRICOLA','2. USO PECUARIO','3. USO ACUICOLA','4. USO PESCA','5. USO FORESTAL','6. USO AGROFORESTAL','7. OTROS USOS AGROPECUARIOS','8. USO NO AGROPECUARIO','9. SIN INFORMACION']),
//   new ElementoFormato("DENSIDAD DE SIEMBRA",  "spinner",  "DENSIDADSIEMBRA", ['DENSO','ABIERTO','NO APLICA']),
//   new ElementoFormato("INTENSIDAD DE USO",  "spinner",  "INTENSIDADUSO", ['INTENSIVO','SEMI INTENSIVO','EXTENSIVO','NO APLICA']),
//   new ElementoFormato("TECNICAS DE PRODUCCIÓN",  "spinner",  "TECNICASPROD", ['MANUAL','MECANICO','NO APLICA']),
//   new ElementoFormato("ARREGLO ESPACIAL",  "spinner",  "ARREGLOESP", ['MONO CULTIVO','COMBINADO','AGROFORESTAL','NO APLICA']),
//   new ElementoFormato("RIEGO",  "spinner",  "RIEGO", ['CON RIEGO','SIN RIEGO','NO APLICA']),
//   new ElementoFormato("TIPO DE ESTABLECIMIENTO",  "spinner",  "TIPOESTAB", ['CIELO ABIERTO','POLISOMBRA','INVERNADERO','NO APLICA']),
//   new ElementoFormato("DIRECCIÓN DE SIEMBRA",  "spinner",  "DIRSIEMBRA", ['CURVAS DE NIVEL','CONTRA LAS CURVAS DE NIVEL','NO APLICA']),
//   new ElementoFormato("PRÁCTICA DE QUEMA",  "spinner",  "QUEMA", ['NATURAL','ANTRÓPICO AGRICOLA','ANTRÓPICO FORESTAL','NO APLICA']),
//   new ElementoFormato("ACTIVIDAD PECUARIA",  "spinner",  "ACTPECUARIA", ['VACUNO','BUFALINO','PORSICOLA','OVINO','SIN ACTIVIDAD PECUARIA','NO APLICA']),
//   new ElementoFormato("RESTRICCIÓN DE USO",  "spinner",  "RESTUSO", ['ÁREA PROTEGIDA','NO APLICA']),
//   new ElementoFormato("AFECTACIÓN POR USO DEL SUELO AL TERRENO",  "spinner",  "AFECTACION", ['CON AFECTACIÓN','SIN AFECTACIÓN']),
//   new ElementoFormato("COBERTURA INTERPRETADA","edittext","COBERTURAINT", 0)
// ];


var estaciones;
var idActualEst;
var btnEstacionSelect;
var primerForm = true;
var primerForm1 = true;
var primerFormAdd = true;
var primerForm1Add = true;
var crearEst = true;

var idsFormatos = {};

var contAddUGSR = 0;
var contAddUGSS = 0;
var contAddSGMF = 0;
var contAddCATALOGO = 0;
var contAddINVENTARIO = 0;
var contAddUSOS = 0;

var contAddDiscont = [];
var contAddFoto = [];
var statAddDiscont = [];
var statAddFoto = [];

var contAddFotoSuelos = [];
var statAddFotoSuelos = [];

var contAddFotoSGMF = [];
var contAddNewSGMF = [];
var statAddFotoSGMF = [];
var statAddNewSGMF = [];

var contAddCatDanos = [];
var statAddCatDanos = [];

var contAddInvDanos = [];
var contAddFotoInv = [];
var statAddInvDanos = [];
var statAddFotoInv = [];

var contAddPuntoUSOS = [];
var statAddPuntoUSOS = [];

var FotosAnexasFiles = {};

function CargarMM(id){
    console.log(id)
    var nomForm = id.split("-")[1];
    var countCat = id.split("-")[2];
    var procesoSearch = $("#"+nomForm+'_ID_PARTE'+countCat).val();
    if(procesoSearch.split(" ").join("") !== ""){
      database.ref().child("features/procesos")
       .orderByChild("layergeojson/properties/ID_PARTE")
       .equalTo(procesoSearch)
       .get()
       .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            var feature = snapshot.val();
            var properties;
            for (const attr in feature) {
              properties = feature[attr]["layergeojson"]["properties"];
              console.log(properties);
            }
      
            var auxProp = ["IMPORTANC", "ENCUESTAD", "FECHA_MOV", "ConfiFechaMM", "FECHA_REP", "COD_SIMMA", "NOM_MUN", "VEREDA", "REF_GEOGRF", "TIPO_MOV1", "TIPO_MOV2", "SUBTIPO_1", "SUBTIPO_2", "FTE_INFSEC"]
      
            auxProp.forEach(function(prop, index) {
              console.log(`${index} : ${prop}`);
              if((prop == "SUBTIPO_2" || prop == "SUBTIPO_1") && properties[prop]==undefined){
                $("#"+nomForm+'_'+prop+countCat).val("No Aplica");
              }
              else if((prop == "TIPO_MOV1" || prop == "TIPO_MOV2") && properties[prop]==undefined){
                $('input[name="'+nomForm+'_'+prop+countCat+'"][value="No Aplica"]').prop("checked",true);
              }
              else if(prop == "TIPO_MOV1" || prop == "TIPO_MOV2"){
                $('input[name="'+nomForm+'_'+prop+countCat+'"][value="'+tipoMM1EquivalenciasEstacion[properties[prop]]+'"]').prop("checked",true);
              }
              else if(prop == "ConfiFechaMM"){
                $("#"+nomForm+'_'+prop+countCat).val(confEquivalenciasEstacion[properties[prop]]);
              }
              else{
                $("#"+nomForm+'_'+prop+countCat).val(properties[prop]);
              }
            });
      
          }else{
            alert("El ID_PARTE ingresado no fue hallado, asegurese de escribirlo correctamente");
          }
    
        }).catch((error) => {
          $("#cargando-tabla-procesos .spinner-msj").html("Hubo un problema en el servidor al tratar de recuperar el proceso indicado, por favor recargue la pagina y vuelva a intentarlo")
          console.error(error);
        });
    }else{
      alert("Por favor, ingrese el ID_PARTE");
    }
  
      
    
}
  
function CargarINVMM(id){
  console.log(id)
  var nomForm = id.split("-")[1];
  var countCat = id.split("-")[2];
  var procesoSearch = $("#"+nomForm+'_ID_PARTE'+countCat).val();
  if(procesoSearch.split(" ").join("") !== ""){
    database.ref().child("features/procesos")
      .orderByChild("layergeojson/properties/ID_PARTE")
      .equalTo(procesoSearch)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          var feature = snapshot.val();
          var properties;
          for (const attr in feature) {
            properties = feature[attr]["layergeojson"]["properties"];
            console.log(properties);
          }
    
          var auxProp = ["IMPORTANC", "ENCUESTAD", "FECHA_MOV", "ConfiFechaMM", "FECHA_REP", "COD_SIMMA", "NOM_MUN", "VEREDA", "REF_GEOGRF", "TIPO_MOV1", "TIPO_MOV2", "SUBTIPO_1", "SUBTIPO_2", "FTE_INFSEC", "ESTADO_ACT", "ESTILO", "DISTRIBUC","LITOLOGIA","AN_GMF"]
    
          auxProp.forEach(function(prop, index) {
            console.log(`${index} : ${prop}`);
            if((prop == "SUBTIPO_2" || prop == "SUBTIPO_1") && (properties[prop]==undefined || properties[prop]=="" || properties[prop]=="No Aplica")){
              $("#"+nomForm+'_'+prop+countCat).val("No Aplica");
            }
            else if((prop == "TIPO_MOV1" || prop == "TIPO_MOV2") && properties[prop]==undefined){
              $('input[name="'+nomForm+'_'+prop+countCat+'"][value="No Aplica"]').prop("checked",true);
            }
            else if(prop == "TIPO_MOV1" || prop == "TIPO_MOV2"){
              $('input[name="'+nomForm+'_'+prop+countCat+'"][value="'+tipoMM1EquivalenciasEstacion[properties[prop]]+'"]').prop("checked",true);
            }
            else if(prop == "ConfiFechaMM"){
              $("#"+nomForm+'_'+prop+countCat).val(confEquivalenciasEstacion[properties[prop]]);
            }
            else if(prop == "ESTADO_ACT"){
              $("#"+nomForm+'_'+prop+countCat).val(estadoActEquivalenciasEstacion[properties[prop]]);
            }
            else if(prop == "ESTILO"){
              $("#"+nomForm+'_'+prop+countCat).val(estiloEquivalenciasEstacion[properties[prop]]);
            }
            else if(prop == "DISTRIBUC"){
              $("#"+nomForm+'_'+prop+countCat).val(distribEquivalenciasEstacion[properties[prop]]);
            }
            else{
              $("#"+nomForm+'_'+prop+countCat).val(properties[prop]);
            }
          });
    
        }else{
          alert("El ID_PARTE ingresado no fue hallado, asegurese de escribirlo correctamente");
        }
  
      }).catch((error) => {
        $("#cargando-tabla-procesos .spinner-msj").html("Hubo un problema en el servidor al tratar de recuperar el proceso indicado, por favor recargue la pagina y vuelva a intentarlo")
        console.error(error);
      });
  }else{
    alert("Por favor, ingrese el ID_PARTE");
  }

    
  
}

function GraficarEstacion(isEdit, id, addInEdit){ 

  idActualEst = id;
  var auxfotosgenerales = 0;
  var auxfotosLibgenerales = 0;
  
  if (isEdit) {
    if (estaciones["estacion_"+id]["FotosGenerales"] !== undefined) {
      auxfotosgenerales = estaciones["estacion_"+id]["FotosGenerales"]["FotosURL"]["count"];
      $("#est-fotosLib-1").text(estaciones["estacion_"+id]["FotosLib"]);
      for (let i = 0; i < auxfotosgenerales; i++) {
        if (estaciones["estacion_"+id]["FotosGenerales"]["FotosURL"]["FotoActivo_"+i]) {
          $("#contenedorFotos").append(   
              '<div class="col-sm-6 col-md-4 col-lg-3" id="FotoGeneral_'+id+'_'+i+'">'+
                '<img class="fotosEstaciones  img-fluid" src="'+ estaciones["estacion_"+id]["FotosGenerales"]["FotosURL"]["Foto_"+i] +'">'+
                '<div class="borrarFotoIcon" id="iconoBorrarFoto_FotoGeneral_'+id+'_'+i+'" data-toggle="modal" data-target="#eliminar-modal-fotosestaciones" data-whatever="FotoGeneral_'+id+'_'+i+'">'+
                  '<i class="fas fa-trash-alt"></i>'+
                '</div>'+
              '</div>'
            );
        }
      }
    }
    if (estaciones["estacion_"+id]["FotosLibreta"] !== undefined) {
      auxfotosLibgenerales = estaciones["estacion_"+id]["FotosLibreta"]["FotosURL"]["count"];
      for (let i = 0; i < auxfotosLibgenerales; i++) {
        if (estaciones["estacion_"+id]["FotosLibreta"]["FotosURL"]["FotoActivo_"+i]) {
          $("#contenedorFotosLib").append(   
            '<div class="col-sm-6 col-md-4 col-lg-3" id="FotoLibreta_'+id+'_'+i+'">'+
              '<img class="fotosEstaciones  img-fluid" src="'+ estaciones["estacion_"+id]["FotosLibreta"]["FotosURL"]["Foto_"+i] +'">'+
              '<div class="borrarFotoIcon" id="iconoBorrarFoto_FotoLibreta_'+id+'_'+i+'" data-toggle="modal" data-target="#eliminar-modal-fotosestaciones" data-whatever="FotoLibreta_'+id+'_'+i+'">'+
                  '<i class="fas fa-trash-alt"></i>'+
                '</div>'+
            '</div>'
          );
        }
      }
    }
  }


  var addFormato = "Ninguno";

  if (isEdit) {
    if(estaciones["estacion_"+id]["Formularios"].count_UGS_Rocas>0){
      for (let j = 0; j < estaciones["estacion_"+id]["Formularios"].count_UGS_Rocas; j++) {
        var formato = estaciones["estacion_"+id]["Formularios"]["Form_UGS_Rocas"]["Form_UGS_Rocas_"+j]; 
        if (formato.activo) {
          GraficarUGSR(isEdit, j, id, false);          
        }             
      }
    }
    if(estaciones["estacion_"+id]["Formularios"].count_UGS_Suelos>0){
      for (let j = 0; j < estaciones["estacion_"+id]["Formularios"].count_UGS_Suelos; j++) {
        var formato = estaciones["estacion_"+id]["Formularios"]["Form_UGS_Suelos"]["Form_UGS_Suelos_"+j]; 
        if (formato.activo) {
          GraficarUGSS(isEdit, j, id, false);
        }
      }
    }
    if(estaciones["estacion_"+id]["Formularios"].count_SGMF>0){
      for (let j = 0; j < estaciones["estacion_"+id]["Formularios"].count_SGMF; j++) {
        var formato = estaciones["estacion_"+id]["Formularios"]["Form_SGMF"]["Form_SGMF_"+j]; 
        if (formato.activo) {
          GraficarSGMF(isEdit, j, id, false);
        }
      }
    }
    if(estaciones["estacion_"+id]["Formularios"].count_CATALOGO>0){
      for (let j = 0; j < estaciones["estacion_"+id]["Formularios"].count_CATALOGO; j++) {
        var formato = estaciones["estacion_"+id]["Formularios"]["Form_CATALOGO"]["Form_CATALOGO_"+j]; 
        if (formato.activo) {
          GraficarCATALOGO(isEdit, j, id, false);
        }
      }
    }
    if(estaciones["estacion_"+id]["Formularios"].count_INVENTARIO>0){
      for (let j = 0; j < estaciones["estacion_"+id]["Formularios"].count_INVENTARIO; j++) {
        var formato = estaciones["estacion_"+id]["Formularios"]["Form_INVENTARIO"]["Form_INVENTARIO_"+j]; 
        if (formato.activo) {
          GraficarINVENTARIO(isEdit, j, id, false);
        }
      }
    }
    if (estaciones["estacion_"+id]["Formularios"].count_USOS !== undefined) {
      if(estaciones["estacion_"+id]["Formularios"].count_USOS>0){
        for (let j = 0; j < estaciones["estacion_"+id]["Formularios"].count_USOS; j++) {
          var formato = estaciones["estacion_"+id]["Formularios"]["Form_USOS"]["Form_USOS_"+j]; 
          if (formato.activo) {
            GraficarUSOS(isEdit, j, id, false);
          }
        }
      }
    }
  }
  else{
    addFormato = addInEdit ? $('#add-est-formatos-select-edit').val() : $('#add-est-formatos-select').val();
    if (addFormato == 'UGSR') {
      if (addInEdit) {
        var auxContRocas = estaciones["estacion_"+id]["Formularios"].count_UGS_Rocas;
        if (estaciones["estacion_"+id]["Formularios"]["Form_UGS_Rocas"] === undefined) {
          estaciones["estacion_"+id]["Formularios"]["Form_UGS_Rocas"] = {};
        }
        estaciones["estacion_"+id]["Formularios"]["Form_UGS_Rocas"]["Form_UGS_Rocas_"+auxContRocas] ={activo:true, "Discontinuidades":{count:0}, "FotosAnexas":{count:0}};
        GraficarUGSR(isEdit, auxContRocas, id, true);
        estaciones["estacion_"+id]["Formularios"].count_UGS_Rocas = auxContRocas+1;
        contAddUGSR++;
      }
      else{
        contAddDiscont.push(0);
        contAddFoto.push(0);
        statAddDiscont.push([]);
        statAddFoto.push([]);
        GraficarUGSR(isEdit, contAddUGSR, 0, false);
        contAddUGSR++;
      }
    }
    if (addFormato == 'UGSS') {
      if (addInEdit) {
        var auxContSuelos = estaciones["estacion_"+id]["Formularios"].count_UGS_Suelos;
        if (estaciones["estacion_"+id]["Formularios"]["Form_UGS_Suelos"] === undefined) {
          estaciones["estacion_"+id]["Formularios"]["Form_UGS_Suelos"] = {};
        }
        estaciones["estacion_"+id]["Formularios"]["Form_UGS_Suelos"]["Form_UGS_Suelos_"+auxContSuelos] ={activo:true, "FotosAnexas":{count:0}};
        GraficarUGSS(isEdit, auxContSuelos, id, true);
        estaciones["estacion_"+id]["Formularios"].count_UGS_Suelos = auxContSuelos+1;
        contAddUGSS++;
      }
      else{
        contAddFotoSuelos.push(0);
        statAddFotoSuelos.push([]);
        GraficarUGSS(isEdit, contAddUGSS, 0, false);
        contAddUGSS++;
      }
    }
    if (addFormato == 'SGMF'){
      if (addInEdit) {
        var auxContSGMF = estaciones["estacion_"+id]["Formularios"].count_SGMF;
        if (estaciones["estacion_"+id]["Formularios"]["Form_SGMF"] === undefined) {
          estaciones["estacion_"+id]["Formularios"]["Form_SGMF"] = {};
        }
        estaciones["estacion_"+id]["Formularios"]["Form_SGMF"]["Form_SGMF_"+auxContSGMF] ={activo:true, "SGMF":{count:0}, "FotosAnexas":{count:0}};
        GraficarSGMF(isEdit, auxContSGMF, id, true);
        estaciones["estacion_"+id]["Formularios"].count_SGMF = auxContSGMF+1;
        contAddSGMF++;
      }
      else{
        contAddNewSGMF.push(0);
        statAddNewSGMF.push([]);
        contAddFotoSGMF.push(0);
        statAddFotoSGMF.push([]);
        GraficarSGMF(isEdit, contAddSGMF, 0, false);
        contAddSGMF++;
      }
    }
    if (addFormato == 'CATALOGO') {
      if (addInEdit) {
        var auxContCATALOGO = estaciones["estacion_"+id]["Formularios"].count_CATALOGO;
        if (estaciones["estacion_"+id]["Formularios"]["Form_CATALOGO"] === undefined) {
          estaciones["estacion_"+id]["Formularios"]["Form_CATALOGO"] = {};
        }
        estaciones["estacion_"+id]["Formularios"]["Form_CATALOGO"]["Form_CATALOGO_"+auxContCATALOGO] ={activo:true, "DANOS":{count:0}};
        GraficarCATALOGO(isEdit, auxContCATALOGO, id, true);
        estaciones["estacion_"+id]["Formularios"].count_CATALOGO = auxContCATALOGO+1;
        contAddCATALOGO++;
      }
      else{
        contAddCatDanos.push(0);
        statAddCatDanos.push([]);
        GraficarCATALOGO(isEdit, contAddCATALOGO, 0, false);
        contAddCATALOGO++;
      }
    }
    if (addFormato == 'INVENTARIO') {
      if (addInEdit) {
        var auxContINVENTARIO = estaciones["estacion_"+id]["Formularios"].count_INVENTARIO;
        if (estaciones["estacion_"+id]["Formularios"]["Form_INVENTARIO"] === undefined) {
          estaciones["estacion_"+id]["Formularios"]["Form_INVENTARIO"] = {};
        }
        estaciones["estacion_"+id]["Formularios"]["Form_INVENTARIO"]["Form_INVENTARIO_"+auxContINVENTARIO] ={activo:true, "DANOS":{count:0},'FotosAnexas':{'count':0}};
        GraficarINVENTARIO(isEdit, auxContINVENTARIO, id, true);
        estaciones["estacion_"+id]["Formularios"].count_INVENTARIO = auxContINVENTARIO+1;
        contAddINVENTARIO++;
      }
      else{
        contAddInvDanos.push(0);
        statAddInvDanos.push([]);
        contAddFotoInv.push(0);
        statAddFotoInv.push([]);
        GraficarINVENTARIO(isEdit, contAddINVENTARIO, 0, false);
        contAddINVENTARIO++;
      }
    }
    if (addFormato == 'USOS'){
      if (addInEdit) {
        if (estaciones["estacion_"+id]["Formularios"].count_USOS === undefined) {
          estaciones["estacion_"+id]["Formularios"].count_USOS = 0;
        }
        var auxContUSOS = estaciones["estacion_"+id]["Formularios"].count_USOS;
        if (estaciones["estacion_"+id]["Formularios"]["Form_USOS"] === undefined) {
          estaciones["estacion_"+id]["Formularios"]["Form_USOS"] = {};
        }
        estaciones["estacion_"+id]["Formularios"]["Form_USOS"]["Form_USOS_"+auxContUSOS] ={activo:true, "PUNTOS":{"count":0}};
        GraficarUSOS(isEdit, auxContUSOS, id, true);
        estaciones["estacion_"+id]["Formularios"].count_USOS = auxContUSOS+1;
        contAddUSOS++;
      }
      else{
        contAddPuntoUSOS.push(0);
        statAddPuntoUSOS.push([]);
        GraficarUSOS(isEdit, contAddUSOS, 0, false);
        contAddUSOS++;
      }
    }
    if (addFormato != 'Ninguno') {}
  }

  function GraficarUGSR(isEdit, j, id, addInEdit) {
    var auxTipoFormat = 'UGSR';
    var formato; 
    var noformato; 
    var estacion; 
    if (isEdit || addInEdit) {
      if (isEdit) {
        formato = estaciones["estacion_"+id]["Formularios"]["Form_UGS_Rocas"]["Form_UGS_Rocas_"+j]; 
        noformato = auxTipoFormat + formato.noformato; 
        estacion = estaciones["estacion_"+id]["Estacion"]; 
      }
      else{
        noformato = auxTipoFormat + j; 
        estacion = estaciones["estacion_"+id]["Estacion"]; 
      }
      var myTabs ='<li class="nav-item">';
      if(primerForm){
        myTabs += '<a class="nav-link active" id="'+auxTipoFormat+'tab-'+j+'" data-toggle="tab" href="#'+auxTipoFormat+'tabcontent-'+j+'" role="tab" aria-controls="'+noformato+'_'+estacion+'" aria-selected="true">';
        primerForm = false;
      }
      else{
        myTabs +='<a class="nav-link" id="'+auxTipoFormat+'tab-'+j+'" data-toggle="tab" href="#'+auxTipoFormat+'tabcontent-'+j+'" role="tab" aria-controls="'+noformato+'_'+estacion+'" aria-selected="true">';
      }
      myTabs +='<h4>'+noformato+'</h4></a></li>';
      $("#myTabs").append(myTabs);      
      
    }
    else{
      noformato = auxTipoFormat + j; 
      estacion = "nuevaEstacion"; 
      myTabs ='<li class="nav-item">';
      if(primerFormAdd){
        myTabs += '<a class="nav-link active" id="'+auxTipoFormat+'tab-'+j+'" data-toggle="tab" href="#'+auxTipoFormat+'tabcontent-'+j+'" role="tab" aria-controls="'+noformato+'_'+estacion+'" aria-selected="true">';
        primerFormAdd = false;
      }
      else{
        myTabs +='<a class="nav-link" id="'+auxTipoFormat+'tab-'+j+'" data-toggle="tab" href="#'+auxTipoFormat+'tabcontent-'+j+'" role="tab" aria-controls="'+noformato+'_'+estacion+'" aria-selected="true">';
      }
      myTabs +='<h4>'+noformato+'</h4></a></li>';
      $("#myTabsAdd").append(myTabs);
    }

    var formularioForm = '<div class="row">'

      for (let i = 0; i < listaElementosUGSR.length; i++) {
        var eleTag = listaElementosUGSR[i].tag;
        var eleName = listaElementosUGSR[i].nombre;
        var eleClase = listaElementosUGSR[i].clase;
        var eleStringArray = listaElementosUGSR[i].stringArray;
        if (eleClase == "titulo") {
          formularioForm += 
          '<div class="form-group col-12">'+
            '<label class="bold">'+eleName+'</label>'+
          '</div>';
        }
        if (eleClase == "edittext") {
          if (eleTag == "composicionmineral1" || eleTag == "composicionmineral2") {
            formularioForm += 
            '<div class="form-group col-6">'+
              '<label for="'+noformato+'_'+eleTag+j+'" class="bold">'+eleName+'</label>'+
              '<textarea class="form-control" rows="2" id="'+noformato+'_'+eleTag+j+'">'+(isEdit? formato[eleTag] : "")+'</textarea/>'+
            '</div>';
          }else{
            formularioForm += 
            '<div class="form-group col-sm-6 col-md-3">'+
              '<label for="'+noformato+'_'+eleTag+j+'" class="bold">'+eleName+'</label>'+
              '<input type="text" class="form-control" id="'+noformato+'_'+eleTag+j+'" value="'+(isEdit? formato[eleTag] : "")+'"></input>'+
            '</div>';
          }
          idsFormatos[auxTipoFormat+'_'+eleTag+'_'+j] = noformato+'_'+eleTag+j;
        }
        if (eleClase == "spinner") {
          formularioForm += 
          '<div class="form-group col-sm-6 col-md-3">'+
            '<label for="'+noformato+'_'+eleTag+j+'" class="bold">'+eleName+'</label>'+
            '<select class="form-control" id="'+noformato+'_'+eleTag+j+'">';
              for (let k = 0; k < eleStringArray.length; k++) {
                if (isEdit) {
                  if(eleStringArray[k] == formato[eleTag]){
                    formularioForm += '<option selected="selected" value="'+eleStringArray[k]+'">'+eleStringArray[k]+'</option>';
                  }
                  else{
                    formularioForm += '<option value="'+eleStringArray[k]+'">'+eleStringArray[k]+'</option>';
                  }
                }
                else{
                  formularioForm += '<option value="'+eleStringArray[k]+'">'+eleStringArray[k]+'</option>';
                } 
              }
          formularioForm += '</select></div>';
          idsFormatos[auxTipoFormat+'_'+eleTag+'_'+j] = noformato+'_'+eleTag+j;
        }
        if (eleClase == "secuenciaestrati") {
          formularioForm += 
          '<div class="form-group col-sm-6 col-lg-4">'+
            '<div class="row">'+
              '<div class="col-6 bold">'+eleName+'</div>'+
              '<div class="col-3">Orden</div>'+
              '<div class="col-3">Espesor</div>';

              for (let k = 0; k < eleStringArray.length; k++) {
                var aux = k + 1;
                formularioForm += 
                '<div class="col-6">'+eleStringArray[k]+'</div>'+
                '<div class="col-3 espesor">'+'<input type="text" class="form-control" id="'+noformato+'_'+eleTag+aux+'orden'+j+'" value="'+(isEdit? formato[eleTag+aux+'orden'] : "")+'"></input></div>'+
                '<div class="col-3 espesor">'+'<input type="text" class="form-control" id="'+noformato+'_'+eleTag+aux+'espesor'+j+'" value="'+(isEdit? formato[eleTag+aux+'espesor'] : "")+'"></input></div>';
                idsFormatos[auxTipoFormat+'_'+eleTag+aux+'espesor'+'_'+j] = noformato+'_'+eleTag+aux+'espesor'+j;
                idsFormatos[auxTipoFormat+'_'+eleTag+aux+'orden'+'_'+j] = noformato+'_'+eleTag+aux+'orden'+j;
              }
          formularioForm += '</div></div>';
                  
          formularioForm += 
          '<div class="form-group col-sm-6 col-lg-4 col-xl-3">'+
            '<div class="row">'+
              '<div class="col-6 bold">'+ElementoSueloResidualUGSR.nombre+'</div>'+
              '<div class="col-3">Orden</div>'+
              '<div class="col-3">Espesor</div>';
                
              for (let k = 0; k < ElementoSueloResidualUGSR.stringArray.length; k++) {
                var aux = k + 1;
                formularioForm += 
                '<div class="col-6">'+ElementoSueloResidualUGSR.stringArray[k]+'</div>'+
                '<div class="col-3 espesor">'+'<input type="text" class="form-control" id="'+noformato+'_'+ElementoSueloResidualUGSR.tag+aux+'orden'+j+'" value="'+(isEdit? formato[ElementoSueloResidualUGSR.tag+aux+'orden'] : "")+'"></input></div>'+
                '<div class="col-3 espesor">'+'<input type="text" class="form-control" id="'+noformato+'_'+ElementoSueloResidualUGSR.tag+aux+'espesor'+j+'" value="'+(isEdit? formato[ElementoSueloResidualUGSR.tag+aux+'espesor'] : "")+'"></input></div>';
                idsFormatos[auxTipoFormat+'_'+ElementoSueloResidualUGSR.tag+aux+'espesor'+'_'+j] = noformato+'_'+ElementoSueloResidualUGSR.tag+aux+'espesor'+j;
                idsFormatos[auxTipoFormat+'_'+ElementoSueloResidualUGSR.tag+aux+'orden'+'_'+j] = noformato+'_'+ElementoSueloResidualUGSR.tag+aux+'orden'+j;
              }
              
          formularioForm += '</div></div>';
                  
        }
        if (eleClase == "litologias") {
          formularioForm += 
          '<div class="form-group col-sm-6 col-lg-4 col-xl-3">'+
            '<div class="row">'+
              '<div class="col-12 bold">'+eleName+'</div>'+
              '<div class="col-2"></div>'+
              '<div class="col-4">Espesor</div>'+
              '<div class="col-2"></div>'+
              '<div class="col-4">Espesor</div>'+
              '<div class="col-1">'+1+'</div>';
              if (isEdit) {
                formularioForm += '<div class="col-1">'+'<input class="form-check-input" '+(formato[eleTag+1+'exist']=="true" ? "checked " : "")+' type="checkbox" id="'+noformato+'_'+eleTag+1+'exist'+j+'"></input></div>';
              }
              else{
                formularioForm += '<div class="col-1">'+'<input class="form-check-input" checked type="checkbox" id="'+noformato+'_'+eleTag+1+'exist'+j+'"></input></div>';
              }
              formularioForm += 
              '<div class="col-3 espesor">'+'<input type="text" class="form-control" id="'+noformato+'_'+eleTag+1+'espesor'+j+'" value="'+(isEdit? formato[eleTag+1+'espesor'] : "")+'"></input></div>'+ 
              '<div class="col-1">'+2+'</div>';
              if (isEdit) {
                formularioForm += '<div class="col-1">'+'<input class="form-check-input" '+(formato[eleTag+2+'exist']=="true" ? "checked " : "")+' type="checkbox" id="'+noformato+'_'+eleTag+2+'exist'+j+'"></input></div>'; 
              }
              else{
                formularioForm += '<div class="col-1">'+'<input class="form-check-input" type="checkbox" id="'+noformato+'_'+eleTag+2+'exist'+j+'"></input></div>';
              }
          formularioForm += 
              '<div class="col-3 espesor">'+'<input type="text" class="form-control" id="'+noformato+'_'+eleTag+2+'espesor'+j+'" value="'+(isEdit? formato[eleTag+2+'espesor'] : "")+'"></input></div>'+ 
            '</div>'+
          '</div>';

          idsFormatos[auxTipoFormat+'_'+eleTag+1+'espesor'+'_'+j] = noformato+'_'+eleTag+1+'espesor'+j;
          idsFormatos[auxTipoFormat+'_'+eleTag+2+'espesor'+'_'+j] = noformato+'_'+eleTag+2+'espesor'+j;
          idsFormatos[auxTipoFormat+'_'+eleTag+1+'exist'+'_'+'checkbtn_'+j] = noformato+'_'+eleTag+1+'exist'+j;
          idsFormatos[auxTipoFormat+'_'+eleTag+2+'exist'+'_'+'checkbtn_'+j] = noformato+'_'+eleTag+2+'exist'+j;
        }
        if (eleClase == "radiobtn") {
          formularioForm += 
          '<div class="form-group col-sm-6 col-lg-4">'+
            '<div class="row">'+
              '<div class="col-7 bold">'+eleName+'</div>'+
              '<div class="col-2 litologias">1</div>'+
              '<div class="col-3 litologias">2</div>';
              for (let k = 0; k < eleStringArray.length; k++) {
                formularioForm += '<div class="col-8">'+eleStringArray[k]+'</div>';

                if (isEdit) {
                  formularioForm += 
                  '<div class="col-2">'+'<input class="form-check-input"'+(formato[eleTag+'1'] == eleStringArray[k] ? "checked " : "")+'type="radio" name="'+noformato+'_'+eleTag+'1'+j+'" id="'+noformato+'_'+eleTag+'1'+j+'" value="'+eleStringArray[k]+'"></input></div>'+          
                  '<div class="col-2">'+'<input class="form-check-input"'+ (formato[eleTag+'2'] == eleStringArray[k] ? "checked " : "") +'type="radio" name="'+noformato+'_'+eleTag+'2'+j+'" id="'+noformato+'_'+eleTag+'2'+j+'" value="'+eleStringArray[k]+'"></input></div>';
                }
                else{
                  formularioForm +=
                  '<div class="col-2">'+'<input class="form-check-input" '+ (k == 0 ? "checked " : "") +' type="radio" name="'+noformato+'_'+eleTag+'1'+j+'" id="'+noformato+'_'+eleTag+'1'+j+'" value="'+eleStringArray[k]+'"></input></div>'+
                  '<div class="col-2">'+'<input class="form-check-input" '+ (k == 0 ? "checked " : "") +' type="radio" name="'+noformato+'_'+eleTag+'2'+j+'" id="'+noformato+'_'+eleTag+'2'+j+'" value="'+eleStringArray[k]+'"></input></div>';
                }
              }
          idsFormatos[auxTipoFormat+'_'+eleTag+'1'+'_radiobtn_'+j] = noformato+'_'+eleTag+'1'+j;
          idsFormatos[auxTipoFormat+'_'+eleTag+'2'+'_radiobtn_'+j] = noformato+'_'+eleTag+'2'+j;
          formularioForm += '</div></div>';                          
        }
      }

        formularioForm += 
        '<div class="col-3">'+
          '<button id="UGSR-btn-borrar-'+ id +'-'+j+'" class="btn estilo-modales">Borrar Formato</button>'+
        '</div>'+
        '<div class="col-12 mt-4 mb-4">'+
          '<button id="add-disc-UGSR-'+id +'-'+j+'-'+(isEdit?"1":"0")+'-'+(addInEdit?"1":"0")+'" class="btn estilo-modales mr-4">Agregar Discontinuidad</button>'+
          // '<button id="add-foto-UGSR-'+id +'-'+j+'-'+(isEdit?"1":"0")+'-'+(addInEdit?"1":"0")+'" class="btn estilo-modales">Agregar Foto Anexa</button>'+
        '</div>'+
        '<div class="col-12">'+
          '<div id="accordianId_'+j+'_Disconts" class="accordion"></div>'+
        '</div>';    
        // '<div class="col-12">'+
        //   '<div id="accordianId_'+j+'_FotosUGSR" class="accordion"></div>'+
        // '</div>';      
        
        formularioForm += '</div>';

        if (isEdit || addInEdit) {
          var auxAppend = "";
          if(primerForm1){
            auxAppend = '<div class="tab-pane fade show active" id="'+auxTipoFormat+'tabcontent-'+j+'" role="tabpanel" aria-labelledby="'+noformato+'_'+estacion+'-tab">'+formularioForm+'</div>'
            $("#myTabsContent").append(auxAppend);
            primerForm1 = false
          }else{
            auxAppend = '<div class="tab-pane fade" id="'+auxTipoFormat+'tabcontent-'+j+'" role="tabpanel" aria-labelledby="'+noformato+'_'+estacion+'-tab">'+formularioForm+'</div>'
            $("#myTabsContent").append(auxAppend);
          }
          if (isEdit) {
            if (formato["Discontinuidades"]["count"]>0) {
              for (let d = 0; d < formato["Discontinuidades"]["count"]; d++) {
                var auxDiscont = d + 1;
                var Discont = estaciones["estacion_"+id]["Formularios"]["Form_UGS_Rocas"]["Form_UGS_Rocas_"+j]["Discontinuidades"]["Discont_"+auxDiscont];
                if (Discont.activo) {
                  GraficarDisc(auxDiscont, id, j, true, false);
                }
              } 
            }

            // if (formato["FotosAnexas"]["count"]>0) {
            //   for (let d = 0; d < formato["FotosAnexas"]["count"]; d++) {
            //     var auxDiscont = d + 1;
            //     var Discont = estaciones["estacion_"+id]["Formularios"]["Form_UGS_Rocas"]["Form_UGS_Rocas_"+j]["FotosAnexas"]["FotoAnexa_"+auxDiscont];
            //     if (Discont.activo) {
            //       GraficarFotoUGSR(auxDiscont, id, j, true, false);
            //     }
            //   } 
            // }
          }
          
        }
        else{
          var auxAppend = "";
          if(primerForm1Add){
            auxAppend = '<div class="tab-pane fade show active" id="'+auxTipoFormat+'tabcontent-'+j+'" role="tabpanel" aria-labelledby="'+noformato+'_'+estacion+'-tab">'+formularioForm+'</div>'
            primerForm1Add = false
          }else{
            auxAppend = '<div class="tab-pane fade" id="'+auxTipoFormat+'tabcontent-'+j+'" role="tabpanel" aria-labelledby="'+noformato+'_'+estacion+'-tab">'+formularioForm+'</div>'
          }
          $("#myTabsContentAdd").append(auxAppend);
        }

        $('#UGSR-btn-borrar-'+id+'-'+j).click(function (e) { 
          e.preventDefault();
          var idfo = parseInt($(this).attr('id').split('-')[3]);
          var f = parseInt($(this).attr('id').split('-')[4]);
          estaciones["estacion_"+idfo]["Formularios"]["Form_UGS_Rocas"]["Form_UGS_Rocas_"+f]['activo'] = false; 
          $("#UGSRtab-"+f).addClass('d-none');
          $("#UGSRtabcontent-"+f).addClass('d-none');
          
          notice(`Se ha Borrado exitosamente el Formato UGSR ${f} en la Estación ${estacion}, Proceda a guardar los cambios en la estación.`, {
            type: 'success', 
            position: 'topcenter', 
            appendType: 'append',
            closeBtn: false,
            autoClose: 4000,
            className: '',
          })
        
        });

        $("#add-disc-UGSR-"+id+'-'+j+'-'+(isEdit?"1":"0")+'-'+(addInEdit?"1":"0")).click(function (e) { 
          e.preventDefault();
          var id = parseInt($(this).attr('id').split('-')[3]);
          var jDisc = parseInt($(this).attr('id').split('-')[4]);
          var isEdit = parseInt($(this).attr('id').split('-')[5]);
          var auxaddInEdit = parseInt($(this).attr('id').split('-')[6]);
          var auxDiscont;
          var addInEdit = false;
          if (isEdit == "1" || auxaddInEdit == "1") {
            addInEdit = true;
            auxDiscont = parseInt(estaciones["estacion_"+id]["Formularios"]["Form_UGS_Rocas"]["Form_UGS_Rocas_"+jDisc]["Discontinuidades"]["count"]) + 1;
            estaciones["estacion_"+id]["Formularios"]["Form_UGS_Rocas"]["Form_UGS_Rocas_"+jDisc]["Discontinuidades"]["count"] = auxDiscont;
          }
          else{
            contAddDiscont[jDisc]++;
            auxDiscont = contAddDiscont[jDisc];
            statAddDiscont[jDisc].push(true);
          }
          GraficarDisc(auxDiscont, id, jDisc, false, addInEdit);
        });

        // $("#add-foto-UGSR-"+id+'-'+j+'-'+(isEdit?"1":"0")+'-'+(addInEdit?"1":"0")).click(function (e) { 
        //   e.preventDefault();
        //   var id = parseInt($(this).attr('id').split('-')[3]);
        //   var jDisc = parseInt($(this).attr('id').split('-')[4]);
        //   var isEdit = parseInt($(this).attr('id').split('-')[5]);
        //   var auxaddInEdit = parseInt($(this).attr('id').split('-')[6]);
        //   var auxDiscont;
        //   var addInEdit = false;
        //   if (isEdit == "1" || auxaddInEdit == "1") {
        //     addInEdit = true;
        //     auxDiscont = parseInt(estaciones["estacion_"+id]["Formularios"]["Form_UGS_Rocas"]["Form_UGS_Rocas_"+jDisc]["FotosAnexas"]["count"]) + 1;
        //     estaciones["estacion_"+id]["Formularios"]["Form_UGS_Rocas"]["Form_UGS_Rocas_"+jDisc]["FotosAnexas"]["count"] = auxDiscont;
        //     if (estaciones["estacion_"+id]["Formularios"]["Form_UGS_Rocas"]["Form_UGS_Rocas_"+jDisc]["FotosAnexas"]["FotosURL"] === undefined) {
        //       estaciones["estacion_"+id]["Formularios"]["Form_UGS_Rocas"]["Form_UGS_Rocas_"+jDisc]["FotosAnexas"]["FotosURL"] = {"count":auxDiscont}
        //     }
        //   }
        //   else{
        //     contAddFoto[jDisc]++;
        //     auxDiscont = contAddFoto[jDisc];
        //     statAddFoto[jDisc].push(true);
        //   }
        //   GraficarFotoUGSR(auxDiscont, id, jDisc, false, addInEdit);
        // });


        function GraficarDisc(auxDiscont, id, jDisc, isEdit, addInEdit) {
          var Discont;
          if (isEdit||addInEdit) {
            Discont = estaciones["estacion_"+id]["Formularios"]["Form_UGS_Rocas"]["Form_UGS_Rocas_"+jDisc]["Discontinuidades"]["Discont_"+auxDiscont];
          }
          if (addInEdit) {
            estaciones["estacion_"+id]["Formularios"]["Form_UGS_Rocas"]["Form_UGS_Rocas_"+jDisc]["Discontinuidades"]["Discont_"+auxDiscont]= {activo:true};
          }

          var formularioFormDisc = '';
          formularioFormDisc += 
          '<div class="card">'+
            '<div class="card-header" role="tab" id="sectionHeaderId_'+jDisc+'Discont_'+ auxDiscont +'">'+
              '<h5 class="mb-0">'+
                '<a class="text-decoration-none" data-toggle="collapse" data-parent="#accordianId_'+jDisc+'_Disconts" href="#sectionContentId_'+jDisc+'Discont_'+ auxDiscont +'" aria-expanded="true" aria-controls="'+jDisc+'Discont_'+ auxDiscont +'">'+
                  'Discontinuidad '+auxDiscont +
                '</a>'+
              '</h5>'+
            '</div>'+
            '<div id="sectionContentId_'+jDisc+'Discont_'+ auxDiscont +'" class="collapse in" role="tabpanel" aria-labelledby="'+jDisc+'Discont_'+ auxDiscont +'">'+
              '<div class="card-body">'+
                '<div class="row">';

                for (let i = 0; i < listaElementosUGSRDiscont.length; i++) {
      
                  var eleTag = listaElementosUGSRDiscont[i].tag;
                  var eleName = listaElementosUGSRDiscont[i].nombre;
                  var eleClase = listaElementosUGSRDiscont[i].clase;
                  var eleStringArray = listaElementosUGSRDiscont[i].stringArray;
  
                  if (eleClase == "titulo") {
                    formularioFormDisc += 
                    '<div class="form-group col-12">'+
                        '<label class="bold">'+eleName+'</label>'+
                    '</div>';
                  }
                  if (eleClase == "edittext") {
                    if (eleTag == "ObservacionesDiscont") {
                      formularioFormDisc += 
                      '<div class="form-group col-6">'+
                        '<label for="'+eleTag+'_Disc_'+auxDiscont+'_'+jDisc+'">'+eleName+'</label>'+
                        '<textarea class="form-control" rows="2" id="'+eleTag+'_Disc_'+auxDiscont+'_'+jDisc+'">'+(isEdit? Discont[eleTag] : "")+'</textarea/>'+
                      '</div>';
                    }else{
                      formularioFormDisc += 
                      '<div class="form-group col-sm-6 col-md-4 col-lg-3">'+
                        '<label for="'+eleTag+'_Disc_'+auxDiscont+'_'+jDisc+'" class="bold">'+eleName+'</label>'+
                        '<input type="text" class="form-control" id="'+eleTag+'_Disc_'+auxDiscont+'_'+jDisc+'" value="'+(isEdit? Discont[eleTag] : "")+'"></input>'+
                      '</div>';
                    }
                    idsFormatos[auxTipoFormat+'_'+eleTag+'_Disc_'+auxDiscont+'_'+j] = eleTag+'_Disc_'+auxDiscont+'_'+j;
                  }
                  if (eleClase == "spinner") {
                    formularioFormDisc += 
                    '<div class="form-group col-sm-6 col-md-4 col-lg-3">'+
                        '<label for="'+eleTag+'_Disc_'+auxDiscont+'_'+jDisc+'" class="bold">'+eleName+'</label>'+
                        '<select class="form-control" id="'+eleTag+'_Disc_'+auxDiscont+'_'+jDisc+'">';
                            for (let k = 0; k < eleStringArray.length; k++) {
                              if (isEdit) {
                                if(eleStringArray[k] == Discont[eleTag]){
                                  formularioFormDisc += '<option selected="selected" value="'+eleStringArray[k]+'">'+eleStringArray[k]+'</option>';
                                }
                                else{
                                  formularioFormDisc += '<option value="'+eleStringArray[k]+'">'+eleStringArray[k]+'</option>';
                                }
                              }
                              else{
                                formularioFormDisc += '<option value="'+eleStringArray[k]+'">'+eleStringArray[k]+'</option>';
                              } 
                            }
                            idsFormatos[auxTipoFormat+'_'+eleTag+'_Disc_'+auxDiscont+'_'+jDisc] = eleTag+'_Disc_'+auxDiscont+'_'+jDisc;   
                    formularioFormDisc += '</select></div>';
                  }
                }

                formularioFormDisc +=
                '<div class="col-3">'+
                  '<button id="estBorrarDiscont-'+id+'-'+jDisc+'-'+auxDiscont+'-'+(addInEdit||isEdit?"1":"0")+'" class="btn estilo-modales">Borrar Discontinuidad</button>'+
                '</div>';

          formularioFormDisc += '</div></div></div></div>';

          $("#accordianId_"+jDisc+'_Disconts').append(formularioFormDisc);

          $('#estBorrarDiscont-'+id+'-'+jDisc+'-'+auxDiscont+'-'+(addInEdit||isEdit?"1":"0")).click(function (e) { 
            e.preventDefault();
            var idfo = parseInt($(this).attr('id').split('-')[1]);
            var f = parseInt($(this).attr('id').split('-')[2]);
            var fdisconta = $(this).attr('id').split('-')[3];
            var fisEdit = $(this).attr('id').split('-')[4];
            if (fisEdit == "1") {
              estaciones["estacion_"+idfo]["Formularios"]["Form_UGS_Rocas"]["Form_UGS_Rocas_"+f]["Discontinuidades"]["Discont_"+fdisconta]['activo'] = false; 
            }
            else{
              statAddDiscont[jDisc][fdisconta-1] = false;
            }

            $("#sectionHeaderId_"+f+'Discont_'+fdisconta).addClass('d-none');
            $("#sectionContentId_"+f+'Discont_'+fdisconta).addClass('d-none');
            
            notice(`Se ha Borrada exitosamente la Discontinuidad ${fdisconta} del Formato UGSR ${f}, Proceda a guardar los cambios en la estación.`, {
              type: 'success', 
              position: 'topcenter', 
              appendType: 'append',
              closeBtn: false,
              autoClose: 3000,
              className: '',
            })
          
          });
        }

        function GraficarFotoUGSR(auxDiscont, id, jDisc, isEdit, addInEdit) {
          var Discont;
          if (addInEdit) {
            estaciones["estacion_"+id]["Formularios"]["Form_UGS_Rocas"]["Form_UGS_Rocas_"+jDisc]["FotosAnexas"]["FotoAnexa_"+auxDiscont]= {activo:true};
          }
          if (isEdit||addInEdit) {
            Discont = estaciones["estacion_"+id]["Formularios"]["Form_UGS_Rocas"]["Form_UGS_Rocas_"+jDisc]["FotosAnexas"]["FotoAnexa_"+auxDiscont];
          }

          var formularioFormDisc = '';
          formularioFormDisc += 
          '<div class="card">'+
            '<div class="card-header" role="tab" id="sectionHeaderId_'+jDisc+'UGSRFotos_'+ auxDiscont +'">'+
              '<h5 class="mb-0">'+
                '<a class="text-decoration-none" data-toggle="collapse" data-parent="#accordianId_'+jDisc+'_FotosUGSR" href="#sectionContentId_'+jDisc+'UGSRFotos_'+ auxDiscont +'" aria-expanded="true" aria-controls="'+jDisc+'Fotos_'+ auxDiscont +'">'+
                  'Foto Anexa '+auxDiscont +
                '</a>'+
              '</h5>'+
            '</div>'+
            '<div id="sectionContentId_'+jDisc+'UGSRFotos_'+ auxDiscont +'" class="collapse in" role="tabpanel" aria-labelledby="'+jDisc+'Fotos_'+ auxDiscont +'">'+
              '<div class="card-body">'+
                '<div class="row">';

                for (let i = 0; i < listaElementosUGSFotosAnexas.length; i++) {
      
                  var eleTag = listaElementosUGSFotosAnexas[i].tag;
                  var eleName = listaElementosUGSFotosAnexas[i].nombre;
                  var eleClase = listaElementosUGSFotosAnexas[i].clase;
                  var eleStringArray = listaElementosUGSFotosAnexas[i].stringArray;
  
                  if (eleClase == "edittext") {
                    if (eleTag == "DescriFotosAnexas") {
                      formularioFormDisc += 
                      '<div class="form-group col-6">'+
                        '<label for="'+eleTag+'_UGSR_Foto_'+auxDiscont+'_'+jDisc+'">'+eleName+'</label>'+
                        '<textarea class="form-control" rows="2" id="'+eleTag+'_UGSR_Foto_'+auxDiscont+'_'+jDisc+'">'+(isEdit? Discont[eleTag] : "")+'</textarea/>'+
                      '</div>'+
                      '<div class="form-group col-12 row" id="contenedorFotosAnexas_UGSR_'+auxDiscont+'_'+jDisc+'"></div>'
                    }else{
                      formularioFormDisc += 
                      '<div class="form-group col-sm-6 col-md-4 col-lg-3">'+
                        '<label for="'+eleTag+'_UGSR_Foto_'+auxDiscont+'_'+jDisc+'" class="bold">'+eleName+'</label>'+
                        '<input type="text" class="form-control" id="'+eleTag+'_UGSR_Foto_'+auxDiscont+'_'+jDisc+'" value="'+(isEdit? Discont[eleTag] : "")+'"></input>'+
                      '</div>';
                    }
                    idsFormatos[auxTipoFormat+'_'+eleTag+'_UGSR_Foto_'+auxDiscont+'_'+j] = eleTag+'_UGSR_Foto_'+auxDiscont+'_'+j;
                  }
                }
                if (isEdit) {
                  var auxCountFotoAnexa = auxDiscont - 1;
                  var auxFotoanexa = estaciones["estacion_"+id]["Formularios"]["Form_UGS_Rocas"]["Form_UGS_Rocas_"+jDisc]["FotosAnexas"]["FotosURL"];
                  if (auxFotoanexa !== undefined) {
                    if (auxFotoanexa["FotoActivo_"+auxCountFotoAnexa]) {
                      formularioFormDisc += '<div class="col-12"><img class="fotosEstaciones  img-fluid" src="'+ auxFotoanexa["Foto_"+auxCountFotoAnexa] +'"></div>'
                    }
                  }
                }
                else{
                  formularioFormDisc += '<input type="file" class="form-control col-sm-6 col-md-4 col-lg-3" id="fotoAnexa_UGSR_'+auxDiscont+'_'+jDisc+'" onchange="handleFilesAflor(this.files, id)">'
                }

                formularioFormDisc +=
                '<div class="col-3">'+
                  '<button id="estBorrarFotoUGSR-'+id+'-'+jDisc+'-'+auxDiscont+'-'+(addInEdit||isEdit?"1":"0")+'" class="btn estilo-modales">Borrar Foto Anexa</button>'+
                '</div>';

          formularioFormDisc += '</div></div></div></div>';

          $("#accordianId_"+jDisc+'_FotosUGSR').append(formularioFormDisc);


          $('#estBorrarFotoUGSR-'+id+'-'+jDisc+'-'+auxDiscont+'-'+(addInEdit||isEdit?"1":"0")).click(function (e) { 
            e.preventDefault();
            var idfo = parseInt($(this).attr('id').split('-')[1]);
            var f = parseInt($(this).attr('id').split('-')[2]);
            var fdisconta = $(this).attr('id').split('-')[3];
            var fisEdit = $(this).attr('id').split('-')[4];
            if (fisEdit == "1") {
              estaciones["estacion_"+idfo]["Formularios"]["Form_UGS_Rocas"]["Form_UGS_Rocas_"+f]["FotosAnexas"]["FotoAnexa_"+fdisconta]['activo'] = false; 
            }
            else{
              statAddFoto[jDisc][fdisconta-1] = false;
            }

            $("#sectionHeaderId_"+f+'UGSRFotos_'+fdisconta).addClass('d-none');
            $("#sectionContentId_"+f+'UGSRFotos_'+fdisconta).addClass('d-none');
            
            notice(`Se ha Borrada exitosamente la Foto Anexa ${fdisconta} del Formato UGSR ${f}, Proceda a guardar los cambios en la estación.`, {
              type: 'success', 
              position: 'topcenter', 
              appendType: 'append',
              closeBtn: false,
              autoClose: 3000,
              className: '',
            })
          
          });
        }
  }

  function GraficarUGSS(isEdit, j, id, addInEdit) {
    var auxTipoFormat = 'UGSS';
    var formato; 
    var noformato; 
    var estacion; 
    if (isEdit || addInEdit) {
      if (isEdit) {
        formato = estaciones["estacion_"+id]["Formularios"]["Form_UGS_Suelos"]["Form_UGS_Suelos_"+j]; 
        noformato = auxTipoFormat + formato.noformato; 
        estacion = estaciones["estacion_"+id]["Estacion"]; 
      }
      else{
        noformato = auxTipoFormat + j; 
        estacion = estaciones["estacion_"+id]["Estacion"]; 
      }
      var myTabs ='<li class="nav-item">';
      if(primerForm){
        myTabs += '<a class="nav-link active" id="'+auxTipoFormat+'tab-'+j+'" data-toggle="tab" href="#'+auxTipoFormat+'tabcontent-'+j+'" role="tab" aria-controls="'+noformato+'_'+estacion+'" aria-selected="true">';
        primerForm = false;
      }
      else{
        myTabs +='<a class="nav-link" id="'+auxTipoFormat+'tab-'+j+'" data-toggle="tab" href="#'+auxTipoFormat+'tabcontent-'+j+'" role="tab" aria-controls="'+noformato+'_'+estacion+'" aria-selected="true">';
      }
      myTabs +='<h4>'+noformato+'</h4></a></li>';
      $("#myTabs").append(myTabs);      
      
    }
    else{
      noformato = auxTipoFormat + j; 
      estacion = "nuevaEstacion"; 
      myTabs ='<li class="nav-item">';
      if(primerFormAdd){
        myTabs += '<a class="nav-link active" id="'+auxTipoFormat+'tab-'+j+'" data-toggle="tab" href="#'+auxTipoFormat+'tabcontent-'+j+'" role="tab" aria-controls="'+noformato+'_'+estacion+'" aria-selected="true">';
        primerFormAdd = false;
      }
      else{
        myTabs +='<a class="nav-link" id="'+auxTipoFormat+'tab-'+j+'" data-toggle="tab" href="#'+auxTipoFormat+'tabcontent-'+j+'" role="tab" aria-controls="'+noformato+'_'+estacion+'" aria-selected="true">';
      }
      myTabs +='<h4>'+noformato+'</h4></a></li>';
      $("#myTabsAdd").append(myTabs);
    }

    var formularioForm = '<div class="row">';
    
    for (let i = 0; i < listaElementosUGSS.length; i++) {
      var eleTag = listaElementosUGSS[i].tag;
      var eleName = listaElementosUGSS[i].nombre;
      var eleClase = listaElementosUGSS[i].clase;
      var eleStringArray = listaElementosUGSS[i].stringArray;
      if (eleClase == "titulo") {
        formularioForm += 
        '<div class="form-group col-12">'+
            '<label class="bold">'+eleName+'</label>'+
        '</div>';
      }
      if (eleClase == "edittext") {
        if (eleTag == "observacionessuelos" || eleTag == "descripcionsuelos") {
          formularioForm += 
          '<div class="form-group col-6">'+
            '<label for="'+noformato+'_'+eleTag+j+'"  class="bold">'+eleName+'</label>'+
            '<textarea class="form-control" rows="2" id="'+noformato+'_'+eleTag+j+'">'+(isEdit? formato[eleTag] : "")+'</textarea/>'+
          '</div>';
        }else{
          formularioForm += 
          '<div class="form-group col-sm-6 col-md-3">'+
            '<label for="'+noformato+'_'+eleTag+j+'"  class="bold">'+eleName+'</label>'+
            '<input type="text" class="form-control" id="'+noformato+'_'+eleTag+j+'" value="'+(isEdit? formato[eleTag] : "")+'"></input>'+
          '</div>';
        }
        idsFormatos[auxTipoFormat+'_'+eleTag+'_'+j] = noformato+'_'+eleTag+j;
      }
      if (eleClase == "spinner") {
        formularioForm += 
        '<div class="form-group col-sm-6 col-md-4 col-lg-3">'+
          '<label for="'+noformato+'_'+eleTag+j+'"  class="bold">'+eleName+'</label>'+
          '<select class="form-control" id="'+noformato+'_'+eleTag+j+'">';
            for (let k = 0; k < eleStringArray.length; k++) {
              if (isEdit) {
                if(eleStringArray[k] == formato[eleTag]){
                  formularioForm += '<option selected="selected" value="'+eleStringArray[k]+'">'+eleStringArray[k]+'</option>';
                }
                else{
                  formularioForm += '<option value="'+eleStringArray[k]+'">'+eleStringArray[k]+'</option>';
                }
              }
              else{
                formularioForm += '<option value="'+eleStringArray[k]+'">'+eleStringArray[k]+'</option>';
              } 
            }
            idsFormatos[auxTipoFormat+'_'+eleTag+'_'+j] = noformato+'_'+eleTag+j;
        formularioForm +=
            '</select>'+
        '</div>'
      }
      if (eleClase == "secuenciaestrati") {
        formularioForm += 
        '<div class="form-group col-sm-6 col-lg-4 col-xl-3">'+
          '<div class="row">'+
            '<div class="col-6 bold">'+eleName+'</div>'+
            '<div class="col-3">Orden</div>'+
            '<div class="col-3">Espesor</div>';

            for (let k = 0; k < eleStringArray.length; k++) {
              var aux = k + 1;
              formularioForm += 
              '<div class="col-6">'+eleStringArray[k]+'</div>'+
              '<div class="col-3 espesor">'+'<input type="text" class="form-control" id="'+noformato+'_'+eleTag+aux+'orden'+j+'" value="'+(isEdit? formato[eleTag+aux+'orden'] : "")+'"></input></div>'+
              '<div class="col-3 espesor">'+'<input type="text" class="form-control" id="'+noformato+'_'+eleTag+aux+'espesor'+j+'" value="'+(isEdit? formato[eleTag+aux+'espesor'] : "")+'"></input></div>';
              idsFormatos[auxTipoFormat+'_'+eleTag+aux+'espesor'+'_'+j] = noformato+'_'+eleTag+aux+'espesor'+j;
              idsFormatos[auxTipoFormat+'_'+eleTag+aux+'orden'+'_'+j] = noformato+'_'+eleTag+aux+'orden'+j;
            }
            formularioForm += '</div></div>';
              
            formularioForm += 
            '<div class="form-group col-sm-6 col-lg-4 col-xl-3">'+
              '<div class="row">'+
                '<div class="col-6 bold">'+ElementoSueloResidualUGSS.nombre+'</div>'+
                '<div class="col-3">Orden</div>'+
                '<div class="col-3">Espesor</div>';
            
            for (let k = 0; k < ElementoSueloResidualUGSS.stringArray.length; k++) {
              var aux = k + 1;
              formularioForm += 
              '<div class="col-6">'+ElementoSueloResidualUGSS.stringArray[k]+'</div>'+
              '<div class="col-3 espesor">'+'<input type="text" class="form-control" id="'+noformato+'_'+ElementoSueloResidualUGSS.tag+aux+'orden'+j+'" value="'+(isEdit? formato[ElementoSueloResidualUGSR.tag+aux+'orden'] : "")+'"></input></div>'+
              '<div class="col-3 espesor">'+'<input type="text" class="form-control" id="'+noformato+'_'+ElementoSueloResidualUGSS.tag+aux+'espesor'+j+'" value="'+(isEdit? formato[ElementoSueloResidualUGSR.tag+aux+'espesor'] : "")+'"></input></div>';
              idsFormatos[auxTipoFormat+'_'+ElementoSueloResidualUGSS.tag+aux+'espesor'+'_'+j] = noformato+'_'+ElementoSueloResidualUGSS.tag+aux+'espesor'+j;
              idsFormatos[auxTipoFormat+'_'+ElementoSueloResidualUGSS.tag+aux+'orden'+'_'+j] = noformato+'_'+ElementoSueloResidualUGSS.tag+aux+'orden'+j;
            }
            
            formularioForm += '</div></div>';
                
      }
      if (eleClase == "litologias") {
        formularioForm += 
        '<div class="form-group col-sm-6 col-lg-4">'+
          '<div class="row">'+
            '<div class="col-12 bold">'+eleName+'</div>'+
            '<div class="col-2"></div>'+
            '<div class="col-4">Espesor</div>'+
            '<div class="col-2"></div>'+
            '<div class="col-4">Espesor</div>'+
            '<div class="col-1">'+1+'</div>';
            if (isEdit) {
              formularioForm += '<div class="col-1">'+'<input class="form-check-input" '+(formato[eleTag+1+'exist']=="true" ? "checked " : "")+' type="checkbox" id="'+noformato+'_'+eleTag+1+'exist'+j+'"></input></div>';
            }
            else{
              formularioForm += '<div class="col-1">'+'<input class="form-check-input" checked type="checkbox" id="'+noformato+'_'+eleTag+1+'exist'+j+'"></input></div>';
            }
            formularioForm += 
            '<div class="col-3 espesor">'+'<input type="text" class="form-control" id="'+noformato+'_'+eleTag+1+'espesor'+j+'" value="'+(isEdit? formato[eleTag+1+'espesor'] : "")+'"></input></div>'+ 
            '<div class="col-1">'+2+'</div>';
            if (isEdit) {
              formularioForm += '<div class="col-1">'+'<input class="form-check-input" '+(formato[eleTag+2+'exist']=="true" ? "checked " : "")+' type="checkbox" id="'+noformato+'_'+eleTag+2+'exist'+j+'"></input></div>'; 
            }
            else{
              formularioForm += '<div class="col-1">'+'<input class="form-check-input" type="checkbox" id="'+noformato+'_'+eleTag+2+'exist'+j+'"></input></div>';
            }
        formularioForm += 
            '<div class="col-3 espesor">'+'<input type="text" class="form-control" id="'+noformato+'_'+eleTag+2+'espesor'+j+'" value="'+(isEdit? formato[eleTag+2+'espesor'] : "")+'"></input></div>'+ 
          '</div>'+
        '</div>';

        idsFormatos[auxTipoFormat+'_'+eleTag+1+'espesor'+'_'+j] = noformato+'_'+eleTag+1+'espesor'+j;
        idsFormatos[auxTipoFormat+'_'+eleTag+2+'espesor'+'_'+j] = noformato+'_'+eleTag+2+'espesor'+j;
        idsFormatos[auxTipoFormat+'_'+eleTag+1+'exist'+'_'+'lito_'+j] = noformato+'_'+eleTag+1+'exist'+j;
        idsFormatos[auxTipoFormat+'_'+eleTag+2+'exist'+'_'+'lito_'+j] = noformato+'_'+eleTag+2+'exist'+j;
      }
      if (eleClase == "radiobtn") {
        formularioForm += 
        '<div class="form-group col-sm-6 col-lg-4">'+
          '<div class="row">'+
            '<div class="col-7 bold">'+eleName+'</div>'+
            '<div class="col-2 litologias">1</div>'+
            '<div class="col-3 litologias">2</div>';
            for (let k = 0; k < eleStringArray.length; k++) {
              formularioForm += '<div class="col-8">'+eleStringArray[k]+'</div>';

              if (isEdit) {
                formularioForm += 
                '<div class="col-2">'+'<input class="form-check-input"'+(formato[eleTag+'1'] == eleStringArray[k] ? "checked " : "")+'type="radio" name="'+noformato+'_'+eleTag+'1'+j+'" id="'+noformato+'_'+eleTag+'1'+j+'" value="'+eleStringArray[k]+'"></input></div>'+          
                '<div class="col-2">'+'<input class="form-check-input"'+ (formato[eleTag+'2'] == eleStringArray[k] ? "checked " : "") +'type="radio" name="'+noformato+'_'+eleTag+'2'+j+'" id="'+noformato+'_'+eleTag+'2'+j+'" value="'+eleStringArray[k]+'"></input></div>';
              }
              else{
                formularioForm +=
                '<div class="col-2">'+'<input class="form-check-input" '+ (k == 0 ? "checked " : "") +' type="radio" name="'+noformato+'_'+eleTag+'1'+j+'" id="'+noformato+'_'+eleTag+'1'+j+'" value="'+eleStringArray[k]+'"></input></div>'+
                '<div class="col-2">'+'<input class="form-check-input" '+ (k == 0 ? "checked " : "") +' type="radio" name="'+noformato+'_'+eleTag+'2'+j+'" id="'+noformato+'_'+eleTag+'2'+j+'" value="'+eleStringArray[k]+'"></input></div>';
              }
            }
        idsFormatos[auxTipoFormat+'_'+eleTag+'1'+'_radiobtn_'+j] = noformato+'_'+eleTag+'1'+j;
        idsFormatos[auxTipoFormat+'_'+eleTag+'2'+'_radiobtn_'+j] = noformato+'_'+eleTag+'2'+j;
        formularioForm += '</div></div>';                          
      }
      if (eleClase == "radiocheck") {
        formularioForm += 
        '<div class="form-group col-sm-6 col-lg-4">'+
          '<div class="row">'+
            '<div class="col-7 bold">'+eleName+'</div>'+
            '<div class="col-2 litologias">1</div>'+
            '<div class="col-3 litologias">2</div>';

            for (let k = 0; k < eleStringArray.length; k++) {
              formularioForm += '<div class="col-8">'+eleStringArray[k]+'</div>';

              if (isEdit) {
                formularioForm += 
                '<div class="col-2">'+'<input class="form-check-input"'+(formato[eleTag+k+'check_1'] == "true" ? "checked " : "")+'type="checkbox" name="'+noformato+'_'+eleTag+'1'+j+'" id="'+noformato+'_'+eleTag+'1_'+k+'_'+j+'"></input></div>'+          
                '<div class="col-2">'+'<input class="form-check-input"'+ (formato[eleTag+k+'check_2'] == "true" ? "checked " : "") +'type="checkbox" name="'+noformato+'_'+eleTag+'2'+j+'" id="'+noformato+'_'+eleTag+'2_'+k+'_'+j+'"></input></div>';
              }
              else{
                formularioForm +=
                '<div class="col-2">'+'<input class="form-check-input" type="checkbox" name="'+noformato+'_'+eleTag+'1'+j+'" id="'+noformato+'_'+eleTag+'1_'+k+'_'+j+'"></input></div>'+
                '<div class="col-2">'+'<input class="form-check-input" type="checkbox" name="'+noformato+'_'+eleTag+'2'+j+'" id="'+noformato+'_'+eleTag+'2_'+k+'_'+j+'"></input></div>';
              }
              idsFormatos[auxTipoFormat+'_'+eleTag+k+'check'+'_checkbtn_'+j+'_1'] = noformato+'_'+eleTag+'1_'+k+'_'+j;
              idsFormatos[auxTipoFormat+'_'+eleTag+k+'check'+'_checkbtn_'+j+'_2'] = noformato+'_'+eleTag+'2_'+k+'_'+j;
            }
            formularioForm += '</div></div>';                          
      }
      if (eleClase == "multitext") {
        formularioForm += 
        '<div class="form-group col-sm-6 col-lg-4">'+
          '<div class="row">'+
            '<div class="col-6 bold">'+eleName+'</div>'+
            '<div class="col-3">1</div>'+
            '<div class="col-3">2</div>';

            for (let k = 0; k < eleStringArray.length; k++) {
              formularioForm += '<div class="col-6">'+eleStringArray[k]+'</div>';    
              if (isEdit) {
                formularioForm += 
                '<div class="col-3 espesor">'+'<input class="form-control" type="text" id="'+noformato+'_'+eleTag+k+'1'+j+'" value="'+formato[eleTag+k+'_1']+'"></input></div>'+          
                '<div class="col-3 espesor">'+'<input class="form-control" type="text" id="'+noformato+'_'+eleTag+k+'2'+j+'" value="'+formato[eleTag+k+'_2']+'"></input></div>';
              }
              else{
                formularioForm +=
                '<div class="col-3 espesor">'+'<input class="form-control" type="text" id="'+noformato+'_'+eleTag+k+'1'+j+'"></input></div>'+
                '<div class="col-3 espesor">'+'<input class="form-control" type="text" id="'+noformato+'_'+eleTag+k+'2'+j+'"></input></div>';
              }
              idsFormatos[auxTipoFormat+'_'+eleTag+k+'_multitext'+'_'+j+'_'+'1'] = noformato+'_'+eleTag+k+'1'+j;
              idsFormatos[auxTipoFormat+'_'+eleTag+k+'_multitext'+'_'+j+'_'+'2'] = noformato+'_'+eleTag+k+'2'+j;
            }
            formularioForm += '</div></div>';                               
      }
    }

    formularioForm +=
    '<div class="col-3">'+
      '<button id="UGSS-btn-borrar-'+ id +'-'+j+'" class="btn estilo-modales">Borrar Formato</button>'+
    '</div>';
    // '<div class="col-12 mt-4 mb-4">'+
    //   '<button id="add-foto-UGSS-'+id +'-'+j+'-'+(isEdit?"1":"0")+'-'+(addInEdit?"1":"0")+'" class="btn estilo-modales">Agregar Foto Anexa</button>'+
    // '</div>'+
    // '<div class="col-12">'+
    //   '<div id="accordianId_'+j+'_FotosUGSS" class="accordion"></div>';
    // '</div>';

    formularioForm += '</div>'

    if (isEdit || addInEdit) {
      var auxAppend = "";
      if(primerForm1){
        auxAppend = '<div class="tab-pane fade show active" id="'+auxTipoFormat+'tabcontent-'+j+'" role="tabpanel" aria-labelledby="'+noformato+'_'+estacion+'-tab">'+formularioForm+'</div>'
        $("#myTabsContent").append(auxAppend);
        primerForm1 = false
      }else{
        auxAppend = '<div class="tab-pane fade" id="'+auxTipoFormat+'tabcontent-'+j+'" role="tabpanel" aria-labelledby="'+noformato+'_'+estacion+'-tab">'+formularioForm+'</div>'
        $("#myTabsContent").append(auxAppend);
      }
      // if (isEdit) {
      //   if (formato["FotosAnexas"]["count"]>0) {
      //     for (let d = 0; d < formato["FotosAnexas"]["count"]; d++) {
      //       var auxDiscont = d + 1;
      //       var Discont = estaciones["estacion_"+id]["Formularios"]["Form_UGS_Suelos"]["Form_UGS_Suelos_"+j]["FotosAnexas"]["FotoAnexa_"+auxDiscont];
      //       if (Discont.activo) {
      //         GraficarFotoUGSS(auxDiscont, id, j, true, false);
      //       }
      //     } 
      //   }
      // }
      
    }
    else{
      var auxAppend = "";
      if(primerForm1Add){
        auxAppend = '<div class="tab-pane fade show active" id="'+auxTipoFormat+'tabcontent-'+j+'" role="tabpanel" aria-labelledby="'+noformato+'_'+estacion+'-tab">'+formularioForm+'</div>'
        primerForm1Add = false
      }else{
        auxAppend = '<div class="tab-pane fade" id="'+auxTipoFormat+'tabcontent-'+j+'" role="tabpanel" aria-labelledby="'+noformato+'_'+estacion+'-tab">'+formularioForm+'</div>'
      }
      $("#myTabsContentAdd").append(auxAppend);
    }

    $('#UGSS-btn-borrar-'+id+'-'+j).click(function (e) { 
      e.preventDefault();
      var idfo = parseInt($(this).attr('id').split('-')[3]);
      var f = parseInt($(this).attr('id').split('-')[4]);
      estaciones["estacion_"+idfo]["Formularios"]["Form_UGS_Suelos"]["Form_UGS_Suelos_"+f]['activo'] = false; 
      $("#UGSStab-"+f).addClass('d-none');
      $("#UGSStabcontent-"+f).addClass('d-none');
      
      notice(`Se ha Borrado exitosamente el Formato UGSS ${f} en la Estación ${estacion}, Proceda a guardar los cambios en la estación.`, {
        type: 'success', 
        position: 'topcenter', 
        appendType: 'append',
        closeBtn: false,
        autoClose: 3000,
        className: '',
      })
    
    });

    // $("#add-foto-UGSS-"+id+'-'+j+'-'+(isEdit?"1":"0")+'-'+(addInEdit?"1":"0")).click(function (e) { 
    //   e.preventDefault();
    //   var id = parseInt($(this).attr('id').split('-')[3]);
    //   var jDisc = parseInt($(this).attr('id').split('-')[4]);
    //   var isEdit = parseInt($(this).attr('id').split('-')[5]);
    //   var auxaddInEdit = parseInt($(this).attr('id').split('-')[6]);
    //   var auxDiscont;
    //   var addInEdit = false;
    //   if (isEdit == "1" || auxaddInEdit == "1") {
    //     addInEdit = true;
    //     auxDiscont = parseInt(estaciones["estacion_"+id]["Formularios"]["Form_UGS_Suelos"]["Form_UGS_Suelos_"+jDisc]["FotosAnexas"]["count"]) + 1;
    //     estaciones["estacion_"+id]["Formularios"]["Form_UGS_Suelos"]["Form_UGS_Suelos_"+jDisc]["FotosAnexas"]["count"] = auxDiscont;
    //     if (estaciones["estacion_"+id]["Formularios"]["Form_UGS_Suelos"]["Form_UGS_Suelos_"+jDisc]["FotosAnexas"]["FotosURL"] === undefined) {
    //       estaciones["estacion_"+id]["Formularios"]["Form_UGS_Suelos"]["Form_UGS_Suelos_"+jDisc]["FotosAnexas"]["FotosURL"] = {"count":auxDiscont}
    //     }
    //   }
    //   else{
    //     contAddFotoSuelos[jDisc]++;
    //     auxDiscont = contAddFotoSuelos[jDisc];
    //     statAddFotoSuelos[jDisc].push(true);
    //   }
    //   GraficarFotoUGSS(auxDiscont, id, jDisc, false, addInEdit);
    // });

    // function GraficarFotoUGSS(auxDiscont, id, jDisc, isEdit, addInEdit) {
    //   var Discont;
    //   if (addInEdit) {
    //     estaciones["estacion_"+id]["Formularios"]["Form_UGS_Suelos"]["Form_UGS_Suelos_"+jDisc]["FotosAnexas"]["FotoAnexa_"+auxDiscont]= {activo:true};
    //   }
    //   if (isEdit||addInEdit) {
    //     Discont = estaciones["estacion_"+id]["Formularios"]["Form_UGS_Suelos"]["Form_UGS_Suelos_"+jDisc]["FotosAnexas"]["FotoAnexa_"+auxDiscont];
    //   }

    //   var formularioFormDisc = '';
    //   formularioFormDisc += 
    //   '<div class="card">'+
    //     '<div class="card-header" role="tab" id="sectionHeaderId_'+jDisc+'UGSSFotos_'+ auxDiscont +'">'+
    //       '<h5 class="mb-0">'+
    //         '<a class="text-decoration-none" data-toggle="collapse" data-parent="#accordianId_'+jDisc+'_FotosUGSS" href="#sectionContentId_'+jDisc+'UGSSFotos_'+ auxDiscont +'" aria-expanded="true" aria-controls="'+jDisc+'Fotos_'+ auxDiscont +'">'+
    //           'Foto Anexa '+auxDiscont +
    //         '</a>'+
    //       '</h5>'+
    //     '</div>'+
    //     '<div id="sectionContentId_'+jDisc+'UGSSFotos_'+ auxDiscont +'" class="collapse in" role="tabpanel" aria-labelledby="'+jDisc+'Fotos_'+ auxDiscont +'">'+
    //       '<div class="card-body">'+
    //         '<div class="row">';

    //         for (let i = 0; i < listaElementosUGSFotosAnexas.length; i++) {
  
    //           var eleTag = listaElementosUGSFotosAnexas[i].tag;
    //           var eleName = listaElementosUGSFotosAnexas[i].nombre;
    //           var eleClase = listaElementosUGSFotosAnexas[i].clase;
    //           var eleStringArray = listaElementosUGSFotosAnexas[i].stringArray;

    //           if (eleClase == "edittext") {
    //             if (eleTag == "DescriFotosAnexas") {
    //               formularioFormDisc += 
    //               '<div class="form-group col-6">'+
    //                 '<label for="'+eleTag+'_UGSS_Foto_'+auxDiscont+'_'+jDisc+'">'+eleName+'</label>'+
    //                 '<textarea class="form-control" rows="2" id="'+eleTag+'_UGSS_Foto_'+auxDiscont+'_'+jDisc+'">'+(isEdit? Discont[eleTag] : "")+'</textarea/>'+
    //               '</div>'+
    //               '<div class="form-group col-12 row" id="contenedorFotosAnexas_UGSS_'+auxDiscont+'_'+jDisc+'"></div>'
    //             }else{
    //               formularioFormDisc += 
    //               '<div class="form-group col-sm-6 col-md-4 col-lg-3">'+
    //                 '<label for="'+eleTag+'_UGSS_Foto_'+auxDiscont+'_'+jDisc+'" class="bold">'+eleName+'</label>'+
    //                 '<input type="text" class="form-control" id="'+eleTag+'_UGSS_Foto_'+auxDiscont+'_'+jDisc+'" value="'+(isEdit? Discont[eleTag] : "")+'"></input>'+
    //               '</div>';
    //             }
    //             idsFormatos[auxTipoFormat+'_'+eleTag+'_UGSS_Foto_'+auxDiscont+'_'+j] = eleTag+'_UGSS_Foto_'+auxDiscont+'_'+j;
    //           }
    //         }
    //         if (isEdit) {
    //           var auxCountFotoAnexa = auxDiscont - 1;
    //           var auxFotoanexa = estaciones["estacion_"+id]["Formularios"]["Form_UGS_Suelos"]["Form_UGS_Suelos_"+jDisc]["FotosAnexas"]["FotosURL"];
    //           if (auxFotoanexa !== undefined) {
    //             if (auxFotoanexa["FotoActivo_"+auxCountFotoAnexa]) {
    //               formularioFormDisc += '<div class="col-12"><img class="fotosEstaciones  img-fluid" src="'+ auxFotoanexa["Foto_"+auxCountFotoAnexa] +'"></div>'
    //             }
    //           }
    //         }
    //         else{
    //           formularioFormDisc += '<input type="file" class="form-control col-sm-6 col-md-4 col-lg-3" id="fotoAnexa_UGSS_'+auxDiscont+'_'+jDisc+'" onchange="handleFilesAflor(this.files, id)">'
    //         }

    //         formularioFormDisc +=
    //         '<div class="col-3">'+
    //           '<button id="estBorrarFotoUGSS-'+id+'-'+jDisc+'-'+auxDiscont+'-'+(addInEdit||isEdit?"1":"0")+'" class="btn estilo-modales">Borrar Foto Anexa</button>'+
    //         '</div>';

    //   formularioFormDisc += '</div></div></div></div>';

    //   $("#accordianId_"+jDisc+'_FotosUGSS').append(formularioFormDisc);


    //   $('#estBorrarFotoUGSS-'+id+'-'+jDisc+'-'+auxDiscont+'-'+(addInEdit||isEdit?"1":"0")).click(function (e) { 
    //     e.preventDefault();
    //     var idfo = parseInt($(this).attr('id').split('-')[1]);
    //     var f = parseInt($(this).attr('id').split('-')[2]);
    //     var fdisconta = $(this).attr('id').split('-')[3];
    //     var fisEdit = $(this).attr('id').split('-')[4];
    //     if (fisEdit == "1") {
    //       estaciones["estacion_"+idfo]["Formularios"]["Form_UGS_Suelos"]["Form_UGS_Suelos_"+f]["FotosAnexas"]["FotoAnexa_"+fdisconta]['activo'] = false; 
    //     }
    //     else{
    //       statAddFotoSuelos[jDisc][fdisconta-1] = false;
    //     }

    //     $("#sectionHeaderId_"+f+'UGSSFotos_'+fdisconta).addClass('d-none');
    //     $("#sectionContentId_"+f+'UGSSFotos_'+fdisconta).addClass('d-none');
        
    //     notice(`Se ha Borrada exitosamente la Foto Anexa ${fdisconta} del Formato UGSS ${f}, Proceda a guardar los cambios en la estación.`, {
    //       type: 'success', 
    //       position: 'topcenter', 
    //       appendType: 'append',
    //       closeBtn: false,
    //       autoClose: 3000,
    //       className: '',
    //     })
      
    //   });
    // }
    
  }

  function GraficarSGMF(isEdit, j, id, addInEdit) {
    var auxTipoFormat = 'SGMF';
    var formato; 
    var noformato; 
    var estacion; 
    if (isEdit || addInEdit) {
      if (isEdit) {
        formato = estaciones["estacion_"+id]["Formularios"]["Form_SGMF"]["Form_SGMF_"+j]; 
        noformato = auxTipoFormat + formato.noformato; 
        estacion = estaciones["estacion_"+id]["Estacion"]; 
      }
      else{
        noformato = auxTipoFormat + j; 
        estacion = estaciones["estacion_"+id]["Estacion"]; 
      }
      var myTabs ='<li class="nav-item">';
      if(primerForm){
        myTabs += '<a class="nav-link active" id="'+auxTipoFormat+'tab-'+j+'" data-toggle="tab" href="#'+auxTipoFormat+'tabcontent-'+j+'" role="tab" aria-controls="'+noformato+'_'+estacion+'" aria-selected="true">';
        primerForm = false;
      }
      else{
        myTabs +='<a class="nav-link" id="'+auxTipoFormat+'tab-'+j+'" data-toggle="tab" href="#'+auxTipoFormat+'tabcontent-'+j+'" role="tab" aria-controls="'+noformato+'_'+estacion+'" aria-selected="true">';
      }
      myTabs +='<h4>'+noformato+'</h4></a></li>';
      $("#myTabs").append(myTabs);      
    }
    else{
      noformato = auxTipoFormat + j; 
      estacion = "nuevaEstacion"; 
      myTabs ='<li class="nav-item">';
      if(primerFormAdd){
        myTabs += '<a class="nav-link active" id="'+auxTipoFormat+'tab-'+j+'" data-toggle="tab" href="#'+auxTipoFormat+'tabcontent-'+j+'" role="tab" aria-controls="'+noformato+'_'+estacion+'" aria-selected="true">';
        primerFormAdd = false;
      }
      else{
        myTabs +='<a class="nav-link" id="'+auxTipoFormat+'tab-'+j+'" data-toggle="tab" href="#'+auxTipoFormat+'tabcontent-'+j+'" role="tab" aria-controls="'+noformato+'_'+estacion+'" aria-selected="true">';
      }
      myTabs +='<h4>'+noformato+'</h4></a></li>';
      $("#myTabsAdd").append(myTabs);
    }

    var formularioForm = '<div class="row">';
    
    for (let i = 0; i < listaElementosSGMF.length; i++) {
      var eleTag = listaElementosSGMF[i].tag;
      var eleName = listaElementosSGMF[i].nombre;
      var eleClase = listaElementosSGMF[i].clase;
      var eleStringArray = listaElementosSGMF[i].stringArray;
      if (eleClase == "titulo") {
        formularioForm += 
        '<div class="form-group col-12">'+
          '<label class="bold">'+eleName+'</label>'+
        '</div>';
      }
      if (eleClase == "edittext") {
        if (eleTag == "observacionesSGMF" || eleTag == "nombreSGMF") {
          formularioForm += 
          '<div class="form-group col-6">'+
              '<label for="'+noformato+'_'+eleTag+j+'"  class="bold">'+eleName+'</label>'+
              '<textarea class="form-control" rows="2" id="'+noformato+'_'+eleTag+j+'">'+(isEdit? formato[eleTag] : "")+'</textarea/>'+
          '</div>';
        }else{
          formularioForm += 
          '<div class="form-group col-sm-6 col-md-3">'+
              '<label for="'+noformato+'_'+eleTag+j+'"  class="bold">'+eleName+'</label>'+
              '<input type="text" class="form-control" id="'+noformato+'_'+eleTag+j+'" value="'+(isEdit? formato[eleTag] : "")+'"></input>'+
          '</div>';
        }
        idsFormatos[auxTipoFormat+'_'+eleTag+'_'+j] = noformato+'_'+eleTag+j;
      }
      if (eleClase == "spinner") {
        formularioForm += 
        '<div class="form-group col-sm-6 col-md-4 col-lg-3">'+
          '<label for="'+noformato+'_'+eleTag+j+'"  class="bold">'+eleName+'</label>'+
          '<select class="form-control" id="'+noformato+'_'+eleTag+j+'">';
            for (let k = 0; k < eleStringArray.length; k++) {
              if (isEdit) {
                if(eleStringArray[k] == formato[eleTag]){
                  formularioForm += '<option selected="selected" value="'+eleStringArray[k]+'">'+eleStringArray[k]+'</option>';
                }
                else{
                  formularioForm += '<option value="'+eleStringArray[k]+'">'+eleStringArray[k]+'</option>';
                }
              }
              else{
                formularioForm += '<option value="'+eleStringArray[k]+'">'+eleStringArray[k]+'</option>';
              } 
            }
            idsFormatos[auxTipoFormat+'_'+eleTag+'_'+j] = noformato+'_'+eleTag+j;
        formularioForm +=
            '</select>'+
        '</div>'
      }
      if (eleClase == "radiocheck") {
        formularioForm += 
          '<div class="form-group col-sm-6 col-lg-3">'+
            '<div class="row">'+
              '<div class="col-12 bold">'+eleName+'</div>'

              for (let k = 0; k < eleStringArray.length; k++) {
                formularioForm += '<div class="col-10">'+eleStringArray[k]+'</div>';
                if (isEdit) {
                  formularioForm += 
                  '<div class="col-2">'+'<input class="form-check-input"'+(formato[eleTag+k+'check'] == "true" ? "checked " : "")+'type="checkbox" name="'+noformato+'_'+eleTag+'1'+j+'" id="'+noformato+'_'+eleTag+''+k+'_'+j+'"></input></div>';          
                }
                else{
                  formularioForm +=
                  '<div class="col-2">'+'<input class="form-check-input" type="checkbox" name="'+noformato+'_'+eleTag+'1'+j+'" id="'+noformato+'_'+eleTag+''+k+'_'+j+'"></input></div>';
                }
                idsFormatos[auxTipoFormat+'_'+eleTag+k+'check'+'_checkbtn_'+j] = noformato+'_'+eleTag+''+k+'_'+j;
              }
              formularioForm +=  
                  '</div>'+
                '</div>';                          
      }
      if (eleClase == "multitext") {
        formularioForm += 
        '<div class="form-group col-sm-6">'+
          '<div class="row">'+
            '<div class="col-12 bold">'+eleName+'</div>';
            for (let k = 0; k < eleStringArray.length; k++) {
              
              formularioForm += '<div class="col-4">'+eleStringArray[k]+'</div>';    
              if (isEdit) {
                formularioForm += 
                '<div class="col-8 espesor">'+'<input class="form-control" type="text" id="'+noformato+'_'+eleTag+k+'_'+j+'" value="'+formato[eleTag+eleStringArray[k]]+'"></input></div>';          
              }
              else{
                formularioForm +=
                '<div class="col-8 espesor">'+'<input class="form-control" type="text" id="'+noformato+'_'+eleTag+k+'_'+j+'"></input></div>';
              }
              idsFormatos[auxTipoFormat+'_'+eleTag+'_multitext'+'_'+j+'_'+eleStringArray[k]] = noformato+'_'+eleTag+k+'_'+j;
            }
            formularioForm += '</div></div>';                              
      }
    }

    formularioForm +=
    '<div class="col-3">'+
      '<button id="SGMF-btn-borrar-'+ id+'-'+j+'" class="btn estilo-modales">Borrar Formato</button>'+
    '</div>'+ 
    '<div class="col-12 mt-4 mb-4">'+
      '<button id="add-new-SGMF-'+id +'-'+j+'-'+(isEdit?"1":"0")+'-'+(addInEdit?"1":"0")+'" class="btn estilo-modales mr-4">Agregar SGMF</button>'+
      // '<button id="add-foto-SGMF-'+id +'-'+j+'-'+(isEdit?"1":"0")+'-'+(addInEdit?"1":"0")+'" class="btn estilo-modales">Agregar Foto Anexa</button>'+
    '</div>'+
    '<div class="col-12">'+
      '<div id="accordianId_'+j+'_SGMF" class="accordion"></div>'+
    '</div>';
    // '<div class="col-12">'+
    //   '<div id="accordianId_'+j+'_FotosSGMF" class="accordion"></div>'+
    // '</div>';

    formularioForm += '</div>'
    
    if (isEdit || addInEdit) {
      var auxAppend = "";
      if(primerForm1){
        auxAppend = '<div class="tab-pane fade show active" id="'+auxTipoFormat+'tabcontent-'+j+'" role="tabpanel" aria-labelledby="'+noformato+'_'+estacion+'-tab">'+formularioForm+'</div>'
        $("#myTabsContent").append(auxAppend);
        primerForm1 = false
      }else{
        auxAppend = '<div class="tab-pane fade" id="'+auxTipoFormat+'tabcontent-'+j+'" role="tabpanel" aria-labelledby="'+noformato+'_'+estacion+'-tab">'+formularioForm+'</div>'
        $("#myTabsContent").append(auxAppend);
      }
      if (isEdit) {
        if (formato["SGMF"]["count"]>0) {
          for (let d = 0; d < formato["SGMF"]["count"]; d++) {
            var auxDiscont = d + 1;
            var Discont = estaciones["estacion_"+id]["Formularios"]["Form_SGMF"]["Form_SGMF_"+j]["SGMF"]["SGMF_"+auxDiscont];
            if (Discont.activo || Discont.activo == 'true'){
              GraficarNewSGMF(auxDiscont, id, j, true, false);
            }
          } 
        }
        // if (formato["FotosAnexas"]["count"]>0) {
        //   for (let d = 0; d < formato["FotosAnexas"]["count"]; d++) {
        //     var auxDiscont = d + 1;
        //     var Discont = estaciones["estacion_"+id]["Formularios"]["Form_SGMF"]["Form_SGMF_"+j]["FotosAnexas"]["FotoAnexa_"+auxDiscont];
        //     if (Discont.activo) {
        //       GraficarFotoSGMF(auxDiscont, id, j, true, false);
        //     }
        //   } 
        // }
      }
      
    }
    else{
      var auxAppend = "";
      if(primerForm1Add){
        auxAppend = '<div class="tab-pane fade show active" id="'+auxTipoFormat+'tabcontent-'+j+'" role="tabpanel" aria-labelledby="'+noformato+'_'+estacion+'-tab">'+formularioForm+'</div>'
        primerForm1Add = false
      }else{
        auxAppend = '<div class="tab-pane fade" id="'+auxTipoFormat+'tabcontent-'+j+'" role="tabpanel" aria-labelledby="'+noformato+'_'+estacion+'-tab">'+formularioForm+'</div>'
      }
      $("#myTabsContentAdd").append(auxAppend);
    }

    $('#SGMF-btn-borrar-'+ id+'-'+j).click(function (e) { 
      e.preventDefault();
      var idfo = parseInt($(this).attr('id').split('-')[3]);
      var f = parseInt($(this).attr('id').split('-')[4]);
      var festacio = $(this).attr('id').split('-')[5];
      var fnoforma = $(this).attr('id').split('-')[6];
      estaciones["estacion_"+idfo]["Formularios"]["Form_SGMF"]["Form_SGMF_"+f]['activo'] = false; 
      $("#SGMFtab-"+f).addClass('d-none');
      $("#SGMFtabcontent-"+f).addClass('d-none');
      
      notice(`Se ha Borrado exitosamente el Formato SGMF ${f} en la Estación ${estacion}, Proceda a guardar los cambios en la estación.`, {
        type: 'success', 
        position: 'topcenter', 
        appendType: 'append',
        closeBtn: false,
        autoClose: 3000,
        className: '',
      })
    
    });

    $("#add-new-SGMF-"+id+'-'+j+'-'+(isEdit?"1":"0")+'-'+(addInEdit?"1":"0")).click(function (e) { 
      e.preventDefault();
      var id = parseInt($(this).attr('id').split('-')[3]);
      var jDisc = parseInt($(this).attr('id').split('-')[4]);
      var isEdit = parseInt($(this).attr('id').split('-')[5]);
      var auxaddInEdit = parseInt($(this).attr('id').split('-')[6]);
      var auxDiscont;
      var addInEdit = false;
      if (isEdit == "1" || auxaddInEdit == "1") {
        addInEdit = true;
        auxDiscont = parseInt(estaciones["estacion_"+id]["Formularios"]["Form_SGMF"]["Form_SGMF_"+jDisc]["SGMF"]["count"]) + 1;
        estaciones["estacion_"+id]["Formularios"]["Form_SGMF"]["Form_SGMF_"+jDisc]["SGMF"]["count"] = auxDiscont;
      }
      else{
        contAddNewSGMF[jDisc]++;
        auxDiscont = contAddNewSGMF[jDisc];
        statAddNewSGMF[jDisc].push(true);
      }
      GraficarNewSGMF(auxDiscont, id, jDisc, false, addInEdit);
    });

    // $("#add-foto-SGMF-"+id+'-'+j+'-'+(isEdit?"1":"0")+'-'+(addInEdit?"1":"0")).click(function (e) { 
    //   e.preventDefault();
    //   var id = parseInt($(this).attr('id').split('-')[3]);
    //   var jDisc = parseInt($(this).attr('id').split('-')[4]);
    //   var isEdit = parseInt($(this).attr('id').split('-')[5]);
    //   var auxaddInEdit = parseInt($(this).attr('id').split('-')[6]);
    //   var auxDiscont;
    //   var addInEdit = false;
    //   if (isEdit == "1" || auxaddInEdit == "1") {
    //     addInEdit = true;
    //     auxDiscont = parseInt(estaciones["estacion_"+id]["Formularios"]["Form_SGMF"]["Form_SGMF_"+jDisc]["FotosAnexas"]["count"]) + 1;
    //     estaciones["estacion_"+id]["Formularios"]["Form_SGMF"]["Form_SGMF_"+jDisc]["FotosAnexas"]["count"] = auxDiscont;
    //     if (estaciones["estacion_"+id]["Formularios"]["Form_SGMF"]["Form_SGMF_"+jDisc]["FotosAnexas"]["FotosURL"] === undefined) {
    //       estaciones["estacion_"+id]["Formularios"]["Form_SGMF"]["Form_SGMF_"+jDisc]["FotosAnexas"]["FotosURL"] = {"count":auxDiscont}
    //     }
    //   }
    //   else{
    //     contAddFotoSGMF[jDisc]++;
    //     auxDiscont = contAddFotoSGMF[jDisc];
    //     statAddFotoSGMF[jDisc].push(true);
    //   }
    //   GraficarFotoSGMF(auxDiscont, id, jDisc, false, addInEdit);
    // });

    function GraficarNewSGMF(auxDiscont, id, jDisc, isEdit, addInEdit) {
      var Discont;
      if (isEdit||addInEdit) {
        Discont = estaciones["estacion_"+id]["Formularios"]["Form_SGMF"]["Form_SGMF_"+jDisc]["SGMF"]["SGMF_"+auxDiscont];
      }
      if (addInEdit) {
        estaciones["estacion_"+id]["Formularios"]["Form_SGMF"]["Form_SGMF_"+jDisc]["SGMF"]["SGMF_"+auxDiscont]= {activo:true};
      }

      var formularioFormDisc = '';
      formularioFormDisc += 
      '<div class="card">'+
        '<div class="card-header" role="tab" id="sectionHeaderId_'+jDisc+'SGMF_'+ auxDiscont +'">'+
          '<h5 class="mb-0">'+
            '<a class="text-decoration-none" data-toggle="collapse" data-parent="#accordianId_'+jDisc+'_SGMF" href="#sectionContentId_'+jDisc+'SGMF_'+ auxDiscont +'" aria-expanded="true" aria-controls="'+jDisc+'SGMF_'+ auxDiscont +'">'+
              'SGMF '+auxDiscont +
            '</a>'+
          '</h5>'+
        '</div>'+
        '<div id="sectionContentId_'+jDisc+'SGMF_'+ auxDiscont +'" class="collapse in" role="tabpanel" aria-labelledby="'+jDisc+'SGMF_'+ auxDiscont +'">'+
          '<div class="card-body">'+
            '<div class="row">';
          for (let i = 0; i < listaElementosNewSGMF.length; i++) {

            var eleTag = listaElementosNewSGMF[i].tag;
            var eleName = listaElementosNewSGMF[i].nombre;
            var eleClase = listaElementosNewSGMF[i].clase;
            var eleStringArray = listaElementosNewSGMF[i].stringArray;
            
            if (eleClase == "titulo") {
              formularioForm += 
              '<div class="form-group col-12">'+
                  '<label class="bold">'+eleName+'</label>'+
              '</div>';
            }
            if (eleClase == "edittext") {
              if (eleTag == "ObservacionesDiscont") {
                formularioFormDisc += 
                '<div class="form-group col-6">'+
                    '<label for="'+eleTag+'_NewSGMF_'+auxDiscont+'_'+jDisc+'">'+eleName+'</label>'+
                    '<textarea class="form-control" rows="2" id="'+eleTag+'_NewSGMF_'+auxDiscont+'_'+jDisc+'">'+(isEdit? Discont[eleTag] : "")+'</textarea/>'+
                '</div>';
                
              }else{
                formularioFormDisc += 
                '<div class="form-group col-sm-6 col-md-4 col-lg-3">'+
                    '<label for="'+eleTag+'_NewSGMF_'+auxDiscont+'_'+jDisc+'" class="bold">'+eleName+'</label>'+
                    '<input type="text" class="form-control" id="'+eleTag+'_NewSGMF_'+auxDiscont+'_'+jDisc+'" value="'+(isEdit? Discont[eleTag] : "")+'"></input>'+
                '</div>';
              }
              idsFormatos[auxTipoFormat+'_'+eleTag+'_NewSGMF_'+auxDiscont+'_'+jDisc] = eleTag+'_NewSGMF_'+auxDiscont+'_'+jDisc;
            }
            if (eleClase == "spinner") {
              formularioFormDisc += 
              '<div class="form-group col-sm-6 col-md-4 col-lg-3">'+
                  '<label for="'+eleTag+'_NewSGMF_'+auxDiscont+'_'+jDisc+'" class="bold">'+eleName+'</label>'+
                  '<select class="form-control" id="'+eleTag+'_NewSGMF_'+auxDiscont+'_'+jDisc+'">';
                      for (let k = 0; k < eleStringArray.length; k++) {
                        if (isEdit) {
                          if(eleStringArray[k] == Discont[eleTag]){
                            formularioFormDisc += '<option selected="selected" value="'+eleStringArray[k]+'">'+eleStringArray[k]+'</option>';
                          }
                          else{
                            formularioFormDisc += '<option value="'+eleStringArray[k]+'">'+eleStringArray[k]+'</option>';
                          }
                        }
                        else{
                          formularioFormDisc += '<option value="'+eleStringArray[k]+'">'+eleStringArray[k]+'</option>';
                        } 
                      }
                      idsFormatos[auxTipoFormat+'_'+eleTag+'_NewSGMF_'+auxDiscont+'_'+jDisc] = eleTag+'_NewSGMF_'+auxDiscont+'_'+jDisc;   
              formularioFormDisc +=
                  '</select>'+
              '</div>'
            }
            if (eleClase == "radiocheck") {
              formularioFormDisc += 
                '<div class="form-group col-sm-6 col-lg-3">'+
                  '<div class="row">'+
                    '<div class="col-12 bold">'+eleName+'</div>'

                    for (let k = 0; k < eleStringArray.length; k++) {
                      formularioFormDisc += '<div class="col-10">'+eleStringArray[k]+'</div>';

                      if (isEdit) {
                        formularioFormDisc += 
                        '<div class="col-2">'+'<input class="form-check-input"'+(Discont[eleTag+k+'check'] == "true" ? "checked " : "")+'type="checkbox" name="NewSGMF_'+eleTag+'1'+jDisc+'" id="NewSGMF_'+eleTag+k+'_'+jDisc+'"></input></div>';          
                      }
                      else{
                        formularioFormDisc +=
                        '<div class="col-2">'+'<input class="form-check-input" '+ (k == 0 ? "checked " : "") +' type="checkbox" name="NewSGMF_'+eleTag+'1'+jDisc+'" id="NewSGMF_'+eleTag+k+'_'+jDisc+'"></input></div>';
                      }

                      idsFormatos[auxTipoFormat+'_'+eleTag+k+'check'+'_NewSGMF_'+auxDiscont+'_'+jDisc+'_'+'checkbtn'] = 'NewSGMF_'+eleTag+k+'_'+jDisc;
                    }
                    formularioFormDisc +=  
                        '</div>'+
                      '</div>';                          
            }
          }

        formularioFormDisc +=
        '<div class="col-3">'+
          '<button id="estBorrarSGMF-'+id+'-'+jDisc+'-'+auxDiscont+'-'+(addInEdit||isEdit?"1":"0")+'" class="btn estilo-modales">Borrar SGMF</button>'+
        '</div>';

      formularioFormDisc += '</div></div></div></div>';

      $("#accordianId_"+jDisc+'_SGMF').append(formularioFormDisc);

      $('#estBorrarSGMF-'+id+'-'+jDisc+'-'+auxDiscont+'-'+(addInEdit||isEdit?"1":"0")).click(function (e) { 
        e.preventDefault();
        var idfo = parseInt($(this).attr('id').split('-')[1]);
        var f = parseInt($(this).attr('id').split('-')[2]);
        var fdisconta = $(this).attr('id').split('-')[3];
        var fisEdit = $(this).attr('id').split('-')[4];
        if (fisEdit == "1") {
          estaciones["estacion_"+idfo]["Formularios"]["Form_SGMF"]["Form_SGMF_"+f]["SGMF"]["SGMF_"+fdisconta]['activo'] = false; 
        }
        else{
          statAddNewSGMF[jDisc][fdisconta-1] = false;
        }

        $("#sectionHeaderId_"+f+'SGMF_'+fdisconta).addClass('d-none');
        $("#sectionContentId_"+f+'SGMF_'+fdisconta).addClass('d-none');
        
        notice(`Se ha Borrada exitosamente la SGMF ${fdisconta} del Formato UGSR ${f}, Proceda a guardar los cambios en la estación.`, {
          type: 'success', 
          position: 'topcenter', 
          appendType: 'append',
          closeBtn: false,
          autoClose: 3000,
          className: '',
        })
      
      });
    }
  
    // function GraficarFotoSGMF(auxDiscont, id, jDisc, isEdit, addInEdit) {
    //   var Discont;
    //   if (addInEdit) {
    //     estaciones["estacion_"+id]["Formularios"]["Form_SGMF"]["Form_SGMF_"+jDisc]["FotosAnexas"]["FotoAnexa_"+auxDiscont]= {activo:true};
    //   }
    //   if (isEdit||addInEdit) {
    //     Discont = estaciones["estacion_"+id]["Formularios"]["Form_SGMF"]["Form_SGMF_"+jDisc]["FotosAnexas"]["FotoAnexa_"+auxDiscont];
    //   }

    //   var formularioFormDisc = '';
    //   formularioFormDisc += 
    //   '<div class="card">'+
    //     '<div class="card-header" role="tab" id="sectionHeaderId_'+jDisc+'SGMFFotos_'+ auxDiscont +'">'+
    //       '<h5 class="mb-0">'+
    //         '<a class="text-decoration-none" data-toggle="collapse" data-parent="#accordianId_'+jDisc+'_FotosSGMF" href="#sectionContentId_'+jDisc+'SGMFFotos_'+ auxDiscont +'" aria-expanded="true" aria-controls="'+jDisc+'Fotos_'+ auxDiscont +'">'+
    //           'Foto Anexa '+auxDiscont +
    //         '</a>'+
    //       '</h5>'+
    //     '</div>'+
    //     '<div id="sectionContentId_'+jDisc+'SGMFFotos_'+ auxDiscont +'" class="collapse in" role="tabpanel" aria-labelledby="'+jDisc+'Fotos_'+ auxDiscont +'">'+
    //       '<div class="card-body">'+
    //         '<div class="row">';

    //         for (let i = 0; i < listaElementosUGSFotosAnexas.length; i++) {
  
    //           var eleTag = listaElementosUGSFotosAnexas[i].tag;
    //           var eleName = listaElementosUGSFotosAnexas[i].nombre;
    //           var eleClase = listaElementosUGSFotosAnexas[i].clase;
    //           var eleStringArray = listaElementosUGSFotosAnexas[i].stringArray;

    //           if (eleClase == "edittext") {
    //             if (eleTag == "DescriFotosAnexas") {
    //               formularioFormDisc += 
    //               '<div class="form-group col-6">'+
    //                 '<label for="'+eleTag+'_SGMF_Foto_'+auxDiscont+'_'+jDisc+'">'+eleName+'</label>'+
    //                 '<textarea class="form-control" rows="2" id="'+eleTag+'_SGMF_Foto_'+auxDiscont+'_'+jDisc+'">'+(isEdit? Discont[eleTag] : "")+'</textarea/>'+
    //               '</div>'+
    //               '<div class="form-group col-12 row" id="contenedorFotosAnexas_SGMF_'+auxDiscont+'_'+jDisc+'"></div>'
    //             }else{
    //               formularioFormDisc += 
    //               '<div class="form-group col-sm-6 col-md-4 col-lg-3">'+
    //                 '<label for="'+eleTag+'_SGMF_Foto_'+auxDiscont+'_'+jDisc+'" class="bold">'+eleName+'</label>'+
    //                 '<input type="text" class="form-control" id="'+eleTag+'_SGMF_Foto_'+auxDiscont+'_'+jDisc+'" value="'+(isEdit? Discont[eleTag] : "")+'"></input>'+
    //               '</div>';
    //             }
    //             idsFormatos[auxTipoFormat+'_'+eleTag+'_SGMF_Foto_'+auxDiscont+'_'+j] = eleTag+'_SGMF_Foto_'+auxDiscont+'_'+j;
    //           }
    //         }
    //         if (isEdit) {
    //           var auxCountFotoAnexa = auxDiscont - 1;
    //           var auxFotoanexa = estaciones["estacion_"+id]["Formularios"]["Form_SGMF"]["Form_SGMF_"+jDisc]["FotosAnexas"]["FotosURL"];
    //           if (auxFotoanexa !== undefined) {
    //             if (auxFotoanexa["FotoActivo_"+auxCountFotoAnexa]) {
    //               formularioFormDisc += '<div class="col-12"><img class="fotosEstaciones  img-fluid" src="'+ auxFotoanexa["Foto_"+auxCountFotoAnexa] +'"></div>'
    //             }
    //           }
    //         }
    //         else{
    //           formularioFormDisc += '<input type="file" class="form-control col-sm-6 col-md-4 col-lg-3" id="fotoAnexa_SGMF_'+auxDiscont+'_'+jDisc+'" onchange="handleFilesAflor(this.files, id)">'
    //         }

    //         formularioFormDisc +=
    //         '<div class="col-3">'+
    //           '<button id="estBorrarFotoSGMF-'+id+'-'+jDisc+'-'+auxDiscont+'-'+(addInEdit||isEdit?"1":"0")+'" class="btn estilo-modales">Borrar Foto Anexa</button>'+
    //         '</div>';

    //   formularioFormDisc += '</div></div></div></div>';

    //   $("#accordianId_"+jDisc+'_FotosSGMF').append(formularioFormDisc);


    //   $('#estBorrarFotoSGMF-'+id+'-'+jDisc+'-'+auxDiscont+'-'+(addInEdit||isEdit?"1":"0")).click(function (e) { 
    //     e.preventDefault();
    //     var idfo = parseInt($(this).attr('id').split('-')[1]);
    //     var f = parseInt($(this).attr('id').split('-')[2]);
    //     var fdisconta = $(this).attr('id').split('-')[3];
    //     var fisEdit = $(this).attr('id').split('-')[4];
    //     if (fisEdit == "1") {
    //       estaciones["estacion_"+idfo]["Formularios"]["Form_SGMF"]["Form_SGMF_"+f]["FotosAnexas"]["FotoAnexa_"+fdisconta]['activo'] = false; 
    //     }
    //     else{
    //       statAddFotoSGMF[jDisc][fdisconta-1] = false;
    //     }

    //     $("#sectionHeaderId_"+f+'SGMFFotos_'+fdisconta).addClass('d-none');
    //     $("#sectionContentId_"+f+'SGMFFotos_'+fdisconta).addClass('d-none');
        
    //     notice(`Se ha Borrada exitosamente la Foto Anexa ${fdisconta} del Formato SGMF ${f}, Proceda a guardar los cambios en la estación.`, {
    //       type: 'success', 
    //       position: 'topcenter', 
    //       appendType: 'append',
    //       closeBtn: false,
    //       autoClose: 3000,
    //       className: '',
    //     })
      
    //   });
    // }

  }
  
  function GraficarINVENTARIO(isEdit, j, id, addInEdit) {
    var auxTipoFormat = 'INVENTARIO';
    var formato; 
    var noformato; 
    var estacion;
    if (isEdit || addInEdit) {
      if (isEdit) {
        formato = estaciones["estacion_"+id]["Formularios"]["Form_INVENTARIO"]["Form_INVENTARIO_"+j]; 
        noformato = auxTipoFormat + "_"+ formato.ID_PARTE; 
        estacion = estaciones["estacion_"+id]["Estacion"]; 
      }
      else{
        noformato = auxTipoFormat + j; 
        estacion = estaciones["estacion_"+id]["Estacion"]; 
      }
      var myTabs ='<li class="nav-item">';
      if(primerForm){
        myTabs += '<a class="nav-link active" id="'+auxTipoFormat+'tab-'+j+'" data-toggle="tab" href="#'+auxTipoFormat+'tabcontent-'+j+'" role="tab" aria-controls="'+noformato+'_'+estacion+'" aria-selected="true">';
        primerForm = false;
      }
      else{
        myTabs +='<a class="nav-link" id="'+auxTipoFormat+'tab-'+j+'" data-toggle="tab" href="#'+auxTipoFormat+'tabcontent-'+j+'" role="tab" aria-controls="'+noformato+'_'+estacion+'" aria-selected="true">';
      }
      myTabs +='<h4>'+noformato+'</h4></a></li>';
      $("#myTabs").append(myTabs);      
      
    }
    else{
      noformato = auxTipoFormat + j; 
      estacion = "nuevaEstacion"; 
      myTabs ='<li class="nav-item">';
      if(primerFormAdd){
        myTabs += '<a class="nav-link active" id="'+auxTipoFormat+'tab-'+j+'" data-toggle="tab" href="#'+auxTipoFormat+'tabcontent-'+j+'" role="tab" aria-controls="'+noformato+'_'+estacion+'" aria-selected="true">';
        primerFormAdd = false;
      }
      else{
        myTabs +='<a class="nav-link" id="'+auxTipoFormat+'tab-'+j+'" data-toggle="tab" href="#'+auxTipoFormat+'tabcontent-'+j+'" role="tab" aria-controls="'+noformato+'_'+estacion+'" aria-selected="true">';
      }
      myTabs +='<h4>'+noformato+'</h4></a></li>';
      $("#myTabsAdd").append(myTabs);
    }

    var formularioForm = '<div class="row">';
    
    for (let i = 0; i < listaElementosINV.length; i++) {
      var eleTag = listaElementosINV[i].tag;
      var eleName = listaElementosINV[i].nombre;
      var eleClase = listaElementosINV[i].clase;
      var eleStringArray = listaElementosINV[i].stringArray;
      if (eleClase == "titulo") {
        formularioForm += 
        '<div class="form-group col-12">'+
            '<label class="bold">'+eleName+'</label>'+
        '</div>';
      }
      if (eleClase == "edittext" || eleClase == "edittextMM") {
        if (eleTag == "OBSERVACION" || eleTag == "REF_GEOGRF" || eleTag == "FTE_INFSEC" || eleTag == "LITOLOGIA" || eleTag == "apreciacionriesgo") {
          formularioForm += 
          '<div class="form-group col-6">'+
              '<label for="'+noformato+'_'+eleTag+j+'"  class="bold">'+eleName+'</label>'+
              '<textarea class="form-control" rows="3" id="'+noformato+'_'+eleTag+j+'">'+(isEdit? formato[eleTag] : "")+'</textarea/>'+
          '</div>';
        }
        // else if(eleTag == "ID_PARTE"){
        //   formularioForm += 
        //   '<div class="form-group col-sm-6 col-md-4 col-lg-3">'+
        //     '<label for="'+noformato+'_'+eleTag+j+'" class="bold" style="display: block";>'+eleName+'</label>'+
        //     '<input type="text" class="form-control" id="'+noformato+'_'+eleTag+j+'" value="'+(isEdit? formato[eleTag] : "")+'" style="display: inline-block;width: 40%;"></input>'+
        //     '<button id="searchmmbtn-'+noformato+'-'+j+'" type="button" onclick="CargarINVMM(id)"  class="btn estilo-modales" style="margin-bottom: 4px;margin-left: 10px;"><i class="fas fa-search"></i> Buscar</button>'+
        //   '</div>';
        // }
        else{
          formularioForm += 
          '<div class="form-group col-sm-6 col-md-3">'+
              '<label for="'+noformato+'_'+eleTag+j+'"  class="bold">'+eleName+'</label>'+
              '<input type="text" class="form-control" id="'+noformato+'_'+eleTag+j+'" value="'+(isEdit? formato[eleTag] : "")+'"></input>'+
          '</div>';
        }
        idsFormatos[auxTipoFormat+'_'+eleTag+'_'+j] = noformato+'_'+eleTag+j;
      }
      if (eleClase == "textview") {
        formularioForm += 
        '<div class="form-group col-12">'+
            '<p class="">'+eleStringArray+'</p>'+
        '</div>';
      }
      if (eleClase == "spinner" || eleClase == "spinnerMM") {
        formularioForm += 
        '<div class="form-group col-sm-6 col-md-4 col-lg-3">'+
          '<label for="'+noformato+'_'+eleTag+j+'"  class="bold">'+eleName+'</label>'+
          '<select class="form-control" id="'+noformato+'_'+eleTag+j+'">';
              for (let k = 0; k < eleStringArray.length; k++) {
                if (isEdit) {
                  if(eleStringArray[k] == formato[eleTag]){
                    formularioForm += '<option selected="selected" value="'+eleStringArray[k]+'">'+eleStringArray[k]+'</option>';
                  }
                  else{
                    formularioForm += '<option value="'+eleStringArray[k]+'">'+eleStringArray[k]+'</option>';
                  }
                }
                else{
                  formularioForm += '<option value="'+eleStringArray[k]+'">'+eleStringArray[k]+'</option>';
                }
              }
              idsFormatos[auxTipoFormat+'_'+eleTag+'_'+j] = noformato+'_'+eleTag+j;
        formularioForm +=
            '</select>'+
        '</div>'
      }
      if (eleClase == "radiobtnMM" || eleClase == "radiobtn") {
        formularioForm += 
          '<div class="form-group col-sm-6 col-lg-4">'+
            '<div class="row">'+
              '<div class="col-7 bold">'+eleName+'</div>'+
              '<div class="col-2 litologias">1</div>'+
              '<div class="col-3 litologias">2</div>';

              for (let k = 0; k < eleStringArray.length; k++) {
                formularioForm += '<div class="col-8">'+eleStringArray[k]+'</div>';

                if (isEdit) {
                  formularioForm += 
                  '<div class="col-2">'+'<input class="form-check-input"'+(formato[eleTag+'1'] == eleStringArray[k] ? "checked " : "")+'type="radio" name="'+noformato+'_'+eleTag+'1'+j+'" id="'+noformato+'_'+eleTag+'1'+j+'" value="'+eleStringArray[k]+'"></input></div>'+          
                  '<div class="col-2">'+'<input class="form-check-input"'+ (formato[eleTag+'2'] == eleStringArray[k] ? "checked " : "") +'type="radio" name="'+noformato+'_'+eleTag+'2'+j+'" id="'+noformato+'_'+eleTag+'2'+j+'" value="'+eleStringArray[k]+'"></input></div>';
                }
                else{
                  formularioForm +=
                  '<div class="col-2">'+'<input class="form-check-input" '+ (k == 0 ? "checked " : "") +' type="radio" name="'+noformato+'_'+eleTag+'1'+j+'" id="'+noformato+'_'+eleTag+'1'+j+'" value="'+eleStringArray[k]+'"></input></div>'+
                  '<div class="col-2">'+'<input class="form-check-input" '+ (k == 0 ? "checked " : "") +' type="radio" name="'+noformato+'_'+eleTag+'2'+j+'" id="'+noformato+'_'+eleTag+'2'+j+'" value="'+eleStringArray[k]+'"></input></div>';
                }

                idsFormatos[auxTipoFormat+'_'+eleTag+'1'+'_radiobtnMM_'+j] = noformato+'_'+eleTag+'1'+j;
                idsFormatos[auxTipoFormat+'_'+eleTag+'2'+'_radiobtnMM_'+j] = noformato+'_'+eleTag+'2'+j;
              }
              formularioForm += '</div></div>';                          
      }
      if (eleClase == "estructuras") {
        formularioForm += 
        '<div class="form-group col-12">'+
          '<div class="row">'+
            '<div class="col-4 bold">Planos de</div>'+
            '<div class="col-1 bold"></div>'+
            '<div class="col-2 bold">DirBuz</div>'+
            '<div class="col-2 bold">Buz</div>'+
            '<div class="col-3 bold">Espaciamiento(m)</div>';

            var espaciamientoArray = ['>2', '2-0.6', '0.6-0.2', '0.2-0.06', 'Menor a 0.06']

            for (let k = 0; k < eleStringArray.length; k++) {
              formularioForm += 
                '<div class="col-4">'+eleStringArray[k]+'</div>'+
                '<div class="col-1">'+'<input class="form-check-input" '+(isEdit ? ( formato[eleTag+k+'check']=="true" ? "checked " : "" ) : "")+' type="checkbox" id="'+noformato+'_'+eleTag+k+'check'+j+'"></input></div>'+ 
                '<div class="col-2 espesor">'+'<input type="text" class="form-control" id="'+noformato+'_'+eleTag+k+'dirbuz'+j+'" value="'+(isEdit? formato[eleTag+k+'dirbuz'] : "")+'"></input></div>'+
                '<div class="col-2 espesor">'+'<input type="text" class="form-control" id="'+noformato+'_'+eleTag+k+'buz'+j+'" value="'+(isEdit? formato[eleTag+k+'buz'] : "")+'"></input></div>'+
                '<div class="col-3 espesor">'+'<select class="form-control" id="'+noformato+'_'+eleTag+k+'espaciamiento'+j+'">';
                for (let k = 0; k < espaciamientoArray.length; k++) {
                  if (isEdit) {
                    if(espaciamientoArray[k] == formato[eleTag+k+'espaciamiento']){
                      formularioForm += '<option selected="selected" value="'+espaciamientoArray[k]+'">'+espaciamientoArray[k]+'</option>';
                    }
                    else{
                      formularioForm += '<option value="'+espaciamientoArray[k]+'">'+espaciamientoArray[k]+'</option>';
                    }
                  }
                  else{
                    formularioForm += '<option value="'+espaciamientoArray[k]+'">'+espaciamientoArray[k]+'</option>';
                  }
                }
                formularioForm += '</select></div>';
                
                idsFormatos[auxTipoFormat+'_'+eleTag+k+'check'+'_'+'checkbtn_'+j] = noformato+'_'+eleTag+k+'check'+j;
                idsFormatos[auxTipoFormat+'_'+eleTag+k+'dirbuz'+'_'+j] = noformato+'_'+eleTag+k+'dirbuz'+j;
                idsFormatos[auxTipoFormat+'_'+eleTag+k+'buz'+'_'+j] = noformato+'_'+eleTag+k+'buz'+j;
                idsFormatos[auxTipoFormat+'_'+eleTag+k+'espaciamiento'+'_'+j] = noformato+'_'+eleTag+k+'espaciamiento'+j;
            }
            formularioForm += '</div></div>';
            
      }
      if (eleClase == "radiocheckMM") {
        if (eleTag == 'causascontrideto') {
          formularioForm +=  '<div class="form-group col-sm-6">';
        }
        else{
          formularioForm += '<div class="form-group col-sm-6 col-lg-4">';
        }
        formularioForm += '<div class="row">';
            if (eleTag == 'causascontrideto') {
              formularioForm +=
              '<div class="col-7 bold">'+eleName+'</div>'+
              '<div class="col-2 litologias">C</div>'+
              '<div class="col-3 litologias">D</div>';
            }
            else{
              formularioForm +=
              '<div class="col-7 bold">'+eleName+'</div>'+
              '<div class="col-2 litologias">1</div>'+
              '<div class="col-3 litologias">2</div>';
            }

              for (let k = 0; k < eleStringArray.length; k++) {
                formularioForm += '<div class="col-8">'+eleStringArray[k]+'</div>';

                if (isEdit) {
                  formularioForm += 
                  '<div class="col-2">'+'<input class="form-check-input"'+(formato[eleTag+k+'check_1'] == "true" ? "checked " : "")+'type="checkbox" name="'+noformato+'_'+eleTag+'1'+j+'" id="'+noformato+'_'+eleTag+'1_'+k+'_'+j+'"></input></div>'+          
                  '<div class="col-2">'+'<input class="form-check-input"'+ (formato[eleTag+k+'check_2'] == "true" ? "checked " : "") +'type="checkbox" name="'+noformato+'_'+eleTag+'2'+j+'" id="'+noformato+'_'+eleTag+'2_'+k+'_'+j+'"></input></div>';
                }
                else{
                  formularioForm +=
                  '<div class="col-2">'+'<input class="form-check-input" type="checkbox" name="'+noformato+'_'+eleTag+'1'+j+'" id="'+noformato+'_'+eleTag+'1_'+k+'_'+j+'"></input></div>'+
                  '<div class="col-2">'+'<input class="form-check-input" type="checkbox" name="'+noformato+'_'+eleTag+'2'+j+'" id="'+noformato+'_'+eleTag+'2_'+k+'_'+j+'"></input></div>';
                }

                idsFormatos[auxTipoFormat+'_'+eleTag+k+'check'+'_checkbtnMM_'+j+'_1'] = noformato+'_'+eleTag+'1_'+k+'_'+j;
                idsFormatos[auxTipoFormat+'_'+eleTag+k+'check'+'_checkbtnMM_'+j+'_2'] = noformato+'_'+eleTag+'2_'+k+'_'+j;
              }
              formularioForm +=  
                  '</div>'+
                '</div>';                          
      }
      if (eleClase == "radiocheck") {
        formularioForm += 
          '<div class="form-group col-sm-6 col-md-4">'+
            '<div class="row">'+
              '<div class="col-12 bold">'+eleName+'</div>';

              for (let k = 0; k < eleStringArray.length; k++) {
                formularioForm += 
                  '<div class="col-8">'+eleStringArray[k]+'</div>';
                  
                if (isEdit) {
                  formularioForm += 
                  '<div class="col-2">'+'<input class="form-check-input"'+(formato[eleTag+k+'check'] == "true" ? "checked " : "")+'type="checkbox" name="'+noformato+'_'+eleTag+'1'+j+'" id="'+noformato+'_'+eleTag+k+'check_'+j+'"></input></div>';          
                }
                else{
                  formularioForm +=
                  '<div class="col-2">'+'<input class="form-check-input" type="checkbox" name="'+noformato+'_'+eleTag+'1'+j+'" id="'+noformato+'_'+eleTag+k+'check_'+j+'"></input></div>';
                }

                idsFormatos[auxTipoFormat+'_'+eleTag+k+'check'+'_checkbtn_'+j] = noformato+'_'+eleTag+k+'check_'+j;
              }
            formularioForm += '</div></div>';                          
      }
      if (eleClase == "multitext") {
        formularioForm += 
          '<div class="form-group col-sm-6">'+
            '<div class="row">'+
              '<div class="col-12 bold">'+eleName+'</div>';

              for (let k = 0; k < eleStringArray.length; k++) {
                
                formularioForm += 
                '<div class="col-6">'+eleStringArray[k]+'</div>'+
                '<div class="col-6 espesor">'+'<input type="text" class="form-control" id="'+noformato+'_'+eleTag+k+'_'+j+'" value="'+(isEdit? formato[eleTag+k] : "")+'"></input></div>';
                idsFormatos[auxTipoFormat+'_'+eleTag+k+'_multitext'+'_'+j] = noformato+'_'+eleTag+k+'_'+j;
              }
              formularioForm += '</div></div>';                             
      }
    }

    formularioForm +=
    '<div class="col-3">'+
      '<button id="INVENTARIO-btn-borrar-'+id+'-'+j+'" class="btn estilo-modales">Borrar Formato</button>'+
    '</div>';
    // '<div class="col-12 mt-4 mb-4">'+
    //   '<button id="add-dano-INVENTARIO-'+id +'-'+j+'-'+(isEdit?"1":"0")+'-'+(addInEdit?"1":"0")+'" class="btn estilo-modales mr-4">Agregar Daño</button>'+
    //   '<button id="add-foto-INVENTARIO-'+id +'-'+j+'-'+(isEdit?"1":"0")+'-'+(addInEdit?"1":"0")+'" class="btn estilo-modales">Agregar Foto Anexa</button>'+
    // '</div>'+
    // '<div class="col-12">'+
    //   '<div id="accordianId_'+j+'_DanosINVENTARIO" class="accordion"></div>'+
    // '</div>'+
    // '<div class="col-12">'+
    //   '<div id="accordianId_'+j+'_FotosINVENTARIO" class="accordion"></div>'+
    // '</div>';
    
    formularioForm += '</div>';

    if (isEdit || addInEdit) {
      var auxAppend = "";
      if(primerForm1){
        auxAppend = '<div class="tab-pane fade show active" id="'+auxTipoFormat+'tabcontent-'+j+'" role="tabpanel" aria-labelledby="'+noformato+'_'+estacion+'-tab">'+formularioForm+'</div>'
        $("#myTabsContent").append(auxAppend);
        primerForm1 = false
      }else{
        auxAppend = '<div class="tab-pane fade" id="'+auxTipoFormat+'tabcontent-'+j+'" role="tabpanel" aria-labelledby="'+noformato+'_'+estacion+'-tab">'+formularioForm+'</div>'
        $("#myTabsContent").append(auxAppend);
      }
      // if (isEdit) {
      //   if (formato["DANOS"]["count"]>0) {
      //     for (let d = 0; d < formato["DANOS"]["count"]; d++) {
      //       var auxDiscont = d + 1;
      //       var Discont = estaciones["estacion_"+id]["Formularios"]["Form_INVENTARIO"]["Form_INVENTARIO_"+j]["DANOS"]["DANOS_"+auxDiscont];
      //       if (Discont.activo) {
      //         GraficarDanoInv(auxDiscont, id, j, true, false);
      //       }
      //     }   
      //   }
      //   if (formato["FotosAnexas"]["count"]>0) {
      //     for (let d = 0; d < formato["FotosAnexas"]["count"]; d++) {
      //       var auxDiscont = d + 1;
      //       var Discont = estaciones["estacion_"+id]["Formularios"]["Form_INVENTARIO"]["Form_INVENTARIO_"+j]["FotosAnexas"]["FotoAnexa_"+auxDiscont];
      //       if (Discont.activo) {
      //         GraficarFotoINVENTARIO(auxDiscont, id, j, true, false);
      //       }
      //     } 
      //   }
      // }
      
    }
    else{
      var auxAppend = "";
      if(primerForm1Add){
        auxAppend = '<div class="tab-pane fade show active" id="'+auxTipoFormat+'tabcontent-'+j+'" role="tabpanel" aria-labelledby="'+noformato+'_'+estacion+'-tab">'+formularioForm+'</div>'
        primerForm1Add = false
      }else{
        auxAppend = '<div class="tab-pane fade" id="'+auxTipoFormat+'tabcontent-'+j+'" role="tabpanel" aria-labelledby="'+noformato+'_'+estacion+'-tab">'+formularioForm+'</div>'
      }
      $("#myTabsContentAdd").append(auxAppend);
    }

    $('#INVENTARIO-btn-borrar-'+id+'-'+j).click(function (e) { 
      e.preventDefault();
      var idfo = parseInt($(this).attr('id').split('-')[3]);
      var f = parseInt($(this).attr('id').split('-')[4]);
      estaciones["estacion_"+idfo]["Formularios"]["Form_INVENTARIO"]["Form_INVENTARIO_"+f]['activo'] = false; 
      $("#INVENTARIOtab-"+f).addClass('d-none');
      $("#INVENTARIOtabcontent-"+f).addClass('d-none');
      
      notice(`Se ha Borrado exitosamente el Formato INVENTARIO ${f} en la Estación ${estacion}, Proceda a guardar los cambios en la estación.`, {
        type: 'success', 
        position: 'topcenter', 
        appendType: 'append',
        closeBtn: false,
        autoClose: 3000,
        className: '',
      })
    
    });
  
    // $("#add-dano-INVENTARIO-"+id+'-'+j+'-'+(isEdit?"1":"0")+'-'+(addInEdit?"1":"0")).click(function (e) { 
    //   e.preventDefault();
    //   var id = parseInt($(this).attr('id').split('-')[3]);
    //   var jDisc = parseInt($(this).attr('id').split('-')[4]);
    //   var isEdit = parseInt($(this).attr('id').split('-')[5]);
    //   var auxaddInEdit = parseInt($(this).attr('id').split('-')[6]);
    //   var auxDiscont;
    //   var addInEdit = false;
    //   if (isEdit == "1" || auxaddInEdit == "1") {
    //     addInEdit = true;
    //     auxDiscont = parseInt(estaciones["estacion_"+id]["Formularios"]["Form_INVENTARIO"]["Form_INVENTARIO_"+jDisc]["DANOS"]["count"]) + 1;
    //     estaciones["estacion_"+id]["Formularios"]["Form_INVENTARIO"]["Form_INVENTARIO_"+jDisc]["DANOS"]["count"] = auxDiscont;
    //   }
    //   else{
    //     contAddInvDanos[jDisc]++;
    //     auxDiscont = contAddInvDanos[jDisc];
    //     statAddInvDanos[jDisc].push(true);
    //   }
    //   GraficarDanoInv(auxDiscont, id, jDisc, false, addInEdit);
    // });

    // $("#add-foto-INVENTARIO-"+id+'-'+j+'-'+(isEdit?"1":"0")+'-'+(addInEdit?"1":"0")).click(function (e) { 
    //   e.preventDefault();
    //   var id = parseInt($(this).attr('id').split('-')[3]);
    //   var jDisc = parseInt($(this).attr('id').split('-')[4]);
    //   var isEdit = parseInt($(this).attr('id').split('-')[5]);
    //   var auxaddInEdit = parseInt($(this).attr('id').split('-')[6]);
    //   var auxDiscont;
    //   var addInEdit = false;
    //   if (isEdit == "1" || auxaddInEdit == "1") {
    //     addInEdit = true;
    //     auxDiscont = parseInt(estaciones["estacion_"+id]["Formularios"]["Form_INVENTARIO"]["Form_INVENTARIO_"+jDisc]["FotosAnexas"]["count"]) + 1;
    //     estaciones["estacion_"+id]["Formularios"]["Form_INVENTARIO"]["Form_INVENTARIO_"+jDisc]["FotosAnexas"]["count"] = auxDiscont;
    //     if (estaciones["estacion_"+id]["Formularios"]["Form_INVENTARIO"]["Form_INVENTARIO_"+jDisc]["FotosAnexas"]["FotosURL"] === undefined) {
    //       estaciones["estacion_"+id]["Formularios"]["Form_INVENTARIO"]["Form_INVENTARIO_"+jDisc]["FotosAnexas"]["FotosURL"] = {"count":auxDiscont}
    //     }
    //   }
    //   else{
    //     contAddFotoInv[jDisc]++;
    //     auxDiscont = contAddFotoInv[jDisc];
    //     statAddFotoInv[jDisc].push(true);
    //   }
    //   GraficarFotoINVENTARIO(auxDiscont, id, jDisc, false, addInEdit);
    // });

    // function GraficarDanoInv(auxDiscont, id, jDisc, isEdit, addInEdit) {
    //   var Discont;
    //   if (isEdit||addInEdit) {
    //     Discont = estaciones["estacion_"+id]["Formularios"]["Form_INVENTARIO"]["Form_INVENTARIO_"+jDisc]["DANOS"]["DANOS_"+auxDiscont];
    //   }
    //   if (addInEdit) {
    //     estaciones["estacion_"+id]["Formularios"]["Form_INVENTARIO"]["Form_INVENTARIO_"+jDisc]["DANOS"]["DANOS_"+auxDiscont]= {activo:true};
    //   }
    //   var formularioFormDisc = '';
    //   formularioFormDisc += 
    //   '<div class="card">'+
    //     '<div class="card-header" role="tab" id="sectionHeaderId_'+jDisc+'DanoInv_'+ auxDiscont +'">'+
    //       '<h5 class="mb-0">'+
    //         '<a class="text-decoration-none" data-toggle="collapse" data-parent="#accordianId_'+jDisc+'_DanosINVENTARIO" href="#sectionContentId_'+jDisc+'DanoInv_'+ auxDiscont +'" aria-expanded="true" aria-controls="'+jDisc+'DanoInv_'+ auxDiscont +'">'+
    //           'Daño '+auxDiscont +
    //         '</a>'+
    //       '</h5>'+
    //     '</div>'+
    //     '<div id="sectionContentId_'+jDisc+'DanoInv_'+ auxDiscont +'" class="collapse in" role="tabpanel" aria-labelledby="'+jDisc+'DanoInv_'+ auxDiscont +'">'+
    //       '<div class="card-body">'+
    //         '<div class="row">';

    //         for (let i = 0; i < listaElementosDANOS.length; i++) {
  
    //           var eleTag = listaElementosDANOS[i].tag;
    //           var eleName = listaElementosDANOS[i].nombre;
    //           var eleClase = listaElementosDANOS[i].clase;
    //           var eleStringArray = listaElementosDANOS[i].stringArray;

    //           if (eleClase == "edittext") {
    //             if (eleTag == "ObservacionesDiscont") {
    //               formularioFormDisc += 
    //               '<div class="form-group col-6">'+
    //                 '<label for="'+eleTag+'_DanoInv_'+auxDiscont+'_'+jDisc+'">'+eleName+'</label>'+
    //                 '<textarea class="form-control" rows="2" id="'+eleTag+'_DanoInv_'+auxDiscont+'_'+jDisc+'">'+(isEdit? Discont[eleTag] : "")+'</textarea/>'+
    //               '</div>';
    //             }else{
    //               formularioFormDisc += 
    //               '<div class="form-group col-sm-6 col-md-4 col-lg-3">'+
    //                 '<label for="'+eleTag+'_DanoInv_'+auxDiscont+'_'+jDisc+'" class="bold">'+eleName+'</label>'+
    //                 '<input type="text" class="form-control" id="'+eleTag+'_DanoInv_'+auxDiscont+'_'+jDisc+'" value="'+(isEdit? Discont[eleTag] : "")+'"></input>'+
    //               '</div>';
    //             }
    //             idsFormatos[auxTipoFormat+'_'+eleTag+'_DanoInv_'+auxDiscont+'_'+j] = eleTag+'_DanoInv_'+auxDiscont+'_'+j;
    //           }
    //           if (eleClase == "spinner") {
    //             formularioFormDisc += 
    //             '<div class="form-group col-sm-6 col-md-4 col-lg-3">'+
    //                 '<label for="'+eleTag+'_DanoInv_'+auxDiscont+'_'+jDisc+'" class="bold">'+eleName+'</label>'+
    //                 '<select class="form-control" id="'+eleTag+'_DanoInv_'+auxDiscont+'_'+jDisc+'">';
    //                     for (let k = 0; k < eleStringArray.length; k++) {
    //                       if (isEdit) {
    //                         if(eleStringArray[k] == Discont[eleTag]){
    //                           formularioFormDisc += '<option selected="selected" value="'+eleStringArray[k]+'">'+eleStringArray[k]+'</option>';
    //                         }
    //                         else{
    //                           formularioFormDisc += '<option value="'+eleStringArray[k]+'">'+eleStringArray[k]+'</option>';
    //                         }
    //                       }
    //                       else{
    //                         formularioFormDisc += '<option value="'+eleStringArray[k]+'">'+eleStringArray[k]+'</option>';
    //                       } 
    //                     }
    //                     idsFormatos[auxTipoFormat+'_'+eleTag+'_DanoInv_'+auxDiscont+'_'+jDisc] = eleTag+'_DanoInv_'+auxDiscont+'_'+jDisc;   
    //             formularioFormDisc += '</select></div>';
    //           }
    //         }

    //         formularioFormDisc +=
    //         '<div class="col-3">'+
    //           '<button id="estBorrarDanoInv-'+id+'-'+jDisc+'-'+auxDiscont+'-'+(addInEdit||isEdit?"1":"0")+'" class="btn estilo-modales">Borrar Daño</button>'+
    //         '</div>';

    //   formularioFormDisc += '</div></div></div></div>';

    //   $("#accordianId_"+jDisc+'_DanosINVENTARIO').append(formularioFormDisc);

    //   $('#estBorrarDanoInv-'+id+'-'+jDisc+'-'+auxDiscont+'-'+(addInEdit||isEdit?"1":"0")).click(function (e) { 
    //     e.preventDefault();
    //     var idfo = parseInt($(this).attr('id').split('-')[1]);
    //     var f = parseInt($(this).attr('id').split('-')[2]);
    //     var fdisconta = $(this).attr('id').split('-')[3];
    //     var fisEdit = $(this).attr('id').split('-')[4];
    //     if (fisEdit == "1") {
    //       estaciones["estacion_"+idfo]["Formularios"]["Form_INVENTARIO"]["Form_INVENTARIO_"+f]["DANOS"]["DANOS_"+fdisconta]['activo'] = false; 
    //     }
    //     else{
    //       statAddInvDanos[jDisc][fdisconta-1] = false;
    //     }

    //     $("#sectionHeaderId_"+f+'DanoInv_'+fdisconta).addClass('d-none');
    //     $("#sectionContentId_"+f+'DanoInv_'+fdisconta).addClass('d-none');
        
    //     notice(`Se ha Borrada exitosamente el Daño ${fdisconta} del Formato INVENTARIO ${f}, Proceda a guardar los cambios en la estación.`, {
    //       type: 'success', 
    //       position: 'topcenter', 
    //       appendType: 'append',
    //       closeBtn: false,
    //       autoClose: 3000,
    //       className: '',
    //     })
      
    //   });
    // }

    // function GraficarFotoINVENTARIO(auxDiscont, id, jDisc, isEdit, addInEdit) {
    //   var Discont;
    //   if (addInEdit) {
    //     estaciones["estacion_"+id]["Formularios"]["Form_INVENTARIO"]["Form_INVENTARIO_"+jDisc]["FotosAnexas"]["FotoAnexa_"+auxDiscont]= {activo:true};
    //   }
    //   if (isEdit||addInEdit) {
    //     Discont = estaciones["estacion_"+id]["Formularios"]["Form_INVENTARIO"]["Form_INVENTARIO_"+jDisc]["FotosAnexas"]["FotoAnexa_"+auxDiscont];
    //   }

    //   var formularioFormDisc = '';
    //   formularioFormDisc += 
    //   '<div class="card">'+
    //     '<div class="card-header" role="tab" id="sectionHeaderId_'+jDisc+'INVENTARIOFotos_'+ auxDiscont +'">'+
    //       '<h5 class="mb-0">'+
    //         '<a class="text-decoration-none" data-toggle="collapse" data-parent="#accordianId_'+jDisc+'_FotosINVENTARIO" href="#sectionContentId_'+jDisc+'INVENTARIOFotos_'+ auxDiscont +'" aria-expanded="true" aria-controls="'+jDisc+'Fotos_'+ auxDiscont +'">'+
    //           'Foto Anexa '+auxDiscont +
    //         '</a>'+
    //       '</h5>'+
    //     '</div>'+
    //     '<div id="sectionContentId_'+jDisc+'INVENTARIOFotos_'+ auxDiscont +'" class="collapse in" role="tabpanel" aria-labelledby="'+jDisc+'Fotos_'+ auxDiscont +'">'+
    //       '<div class="card-body">'+
    //         '<div class="row">';

    //         for (let i = 0; i < listaElementosInvFotosAnexas.length; i++) {
  
    //           var eleTag = listaElementosInvFotosAnexas[i].tag;
    //           var eleName = listaElementosInvFotosAnexas[i].nombre;
    //           var eleClase = listaElementosInvFotosAnexas[i].clase;
    //           var eleStringArray = listaElementosInvFotosAnexas[i].stringArray;

    //           if (eleClase == "edittext") {
    //             if (eleTag == "obsFotosAnexas") {
    //               formularioFormDisc += 
    //               '<div class="form-group col-6">'+
    //                 '<label for="'+eleTag+'_INVENTARIO_Foto_'+auxDiscont+'_'+jDisc+'">'+eleName+'</label>'+
    //                 '<textarea class="form-control" rows="2" id="'+eleTag+'_INVENTARIO_Foto_'+auxDiscont+'_'+jDisc+'">'+(isEdit? Discont[eleTag] : "")+'</textarea/>'+
    //               '</div>'+
    //               '<div class="form-group col-12 row" id="contenedorFotosAnexas_INVENTARIO_'+auxDiscont+'_'+jDisc+'"></div>'
    //             }else{
    //               formularioFormDisc += 
    //               '<div class="form-group col-sm-6 col-md-4 col-lg-3">'+
    //                 '<label for="'+eleTag+'_INVENTARIO_Foto_'+auxDiscont+'_'+jDisc+'" class="bold">'+eleName+'</label>'+
    //                 '<input type="text" class="form-control" id="'+eleTag+'_INVENTARIO_Foto_'+auxDiscont+'_'+jDisc+'" value="'+(isEdit? Discont[eleTag] : "")+'"></input>'+
    //               '</div>';
    //             }
    //             idsFormatos[auxTipoFormat+'_'+eleTag+'_INVENTARIO_Foto_'+auxDiscont+'_'+j] = eleTag+'_INVENTARIO_Foto_'+auxDiscont+'_'+j;
    //           }
    //         }
    //         if (isEdit) {
    //           var auxCountFotoAnexa = auxDiscont - 1;
    //           var auxFotoanexa = estaciones["estacion_"+id]["Formularios"]["Form_INVENTARIO"]["Form_INVENTARIO_"+jDisc]["FotosAnexas"]["FotosURL"];
    //           if (auxFotoanexa !== undefined) {
    //             if (auxFotoanexa["FotoActivo_"+auxCountFotoAnexa]) {
    //               formularioFormDisc += '<div class="col-12"><img class="fotosEstaciones  img-fluid" src="'+ auxFotoanexa["Foto_"+auxCountFotoAnexa] +'"></div>'
    //             }
    //           }
    //         }
    //         else{
    //           formularioFormDisc += '<input type="file" class="form-control col-sm-6 col-md-4 col-lg-3" id="fotoAnexa_INVENTARIO_'+auxDiscont+'_'+jDisc+'" onchange="handleFilesAflor(this.files, id)">'
    //         }

    //         formularioFormDisc +=
    //         '<div class="col-3">'+
    //           '<button id="estBorrarFotoINVENTARIO-'+id+'-'+jDisc+'-'+auxDiscont+'-'+(addInEdit||isEdit?"1":"0")+'" class="btn estilo-modales">Borrar Foto Anexa</button>'+
    //         '</div>';

    //   formularioFormDisc += '</div></div></div></div>';

    //   $("#accordianId_"+jDisc+'_FotosINVENTARIO').append(formularioFormDisc);


    //   $('#estBorrarFotoINVENTARIO-'+id+'-'+jDisc+'-'+auxDiscont+'-'+(addInEdit||isEdit?"1":"0")).click(function (e) { 
    //     e.preventDefault();
    //     var idfo = parseInt($(this).attr('id').split('-')[1]);
    //     var f = parseInt($(this).attr('id').split('-')[2]);
    //     var fdisconta = $(this).attr('id').split('-')[3];
    //     var fisEdit = $(this).attr('id').split('-')[4];
    //     if (fisEdit == "1") {
    //       estaciones["estacion_"+idfo]["Formularios"]["Form_INVENTARIO"]["Form_INVENTARIO_"+f]["FotosAnexas"]["FotoAnexa_"+fdisconta]['activo'] = false; 
    //     }
    //     else{
    //       statAddFotoInv[jDisc][fdisconta-1] = false;
    //     }

    //     $("#sectionHeaderId_"+f+'INVENTARIOFotos_'+fdisconta).addClass('d-none');
    //     $("#sectionContentId_"+f+'INVENTARIOFotos_'+fdisconta).addClass('d-none');
        
    //     notice(`Se ha Borrada exitosamente la Foto Anexa ${fdisconta} del Formato INVENTARIO ${f}, Proceda a guardar los cambios en la estación.`, {
    //       type: 'success', 
    //       position: 'topcenter', 
    //       appendType: 'append',
    //       closeBtn: false,
    //       autoClose: 3000,
    //       className: '',
    //     })
      
    //   });
    // }
  
  }
}

function handleFilesAflor(files, id, tipo){
  var auxTipoForm = id.split("_")[1];
  var auxIDFoto = id.split("_")[2];
  var auxIDForm = id.split("_")[3];
  var fileFoto;

  if (auxTipoForm == 'USOS' && auxTipoForm == 'Generales' && auxTipoForm == 'GeneralesAdd' && auxTipoForm == 'Libreta' && auxTipoForm == 'LibretaAdd') {
    fileFoto = files;
  }
  else{
    fileFoto = files[0];
  }
  var objectURL = URL.createObjectURL(fileFoto);
  if (fileFoto.name.slice(-3) === 'jpg' || fileFoto.name.slice(-3) === 'JPG' || fileFoto.name.slice(-3) === 'peg' || fileFoto.name.slice(-3) === 'JPEG' || fileFoto.name.slice(-3) === 'png' || fileFoto.name.slice(-3) === 'PNG') {
    if(auxTipoForm == 'USOS'){
      var auxNameFotos=$("#FotosPunto_NewPunto_"+auxIDFoto+'_'+auxIDForm).val();
      for (let i = 0; i < files.length; i++) {
        const element = files[i];
        auxNameFotos += element.name + ', ';
        var objectURLi = URL.createObjectURL(element);
        $('#contenedorFotosAnexas_USOS_'+auxIDFoto+'_'+auxIDForm).append('<div class="col-sm-6 col-md-4 col-lg-3"><img class="fotosEstaciones img-fluid" src="'+ objectURLi +'"></div>');
        FotosAnexasFiles['USOS_'+i+'_'+auxIDFoto+'_'+auxIDForm] = element;
      }
      $("#FotosPunto_NewPunto_"+auxIDFoto+'_'+auxIDForm).val(auxNameFotos);
    }
    else if(auxTipoForm == 'Generales'){
      var auxNameFotos=$("#est-fotos-1").val();
      for (let i = 0; i < files.length; i++) {
        const element = files[i];
        auxNameFotos += element.name + ', ';
        var objectURLi = URL.createObjectURL(element);
        $("#contenedorFotos").append('<div class="col-sm-6 col-md-4 col-lg-3"><img class="fotosEstaciones  img-fluid" src="'+ objectURLi +'"></div>');
        FotosAnexasFiles['Generales_'+i] = element;
      }
      $("#est-fotos-1").val(auxNameFotos);
    }
    else if (auxTipoForm == 'GeneralesAdd') {
      var auxNameFotos='';
      $("#add-contenedorFotos").empty();
      for (let i = 0; i < files.length; i++) {
        const element = files[i];
        auxNameFotos += element.name + ', ';
        var objectURLi = URL.createObjectURL(element);
        $("#add-contenedorFotos").append('<div class="col-sm-6 col-md-4 col-lg-3"><img class="fotosEstaciones  img-fluid" src="'+ objectURLi +'"></div>');
        FotosAnexasFiles['Generales_'+i] = element;
      }
      $("#add-est-fotos-1").val(auxNameFotos);
    }
    else if(auxTipoForm == 'Libreta'){
      var auxNameFotos=$("#est-fotosLib-1").val();
      for (let i = 0; i < files.length; i++) {
        const element = files[i];
        auxNameFotos += element.name + ', ';
        var objectURLi = URL.createObjectURL(element);
        $("#contenedorFotosLib").append('<div class="col-sm-6 col-md-4 col-lg-3"><img class="fotosEstaciones  img-fluid" src="'+ objectURLi +'"></div>');
        FotosAnexasFiles['Libreta_'+i] = element;
      }
      $("#est-fotosLib-1").val(auxNameFotos);
    }
    else if(auxTipoForm == 'LibretaAdd'){
      var auxNameFotos='';
      $("#add-contenedorFotosLib").empty();
      for (let i = 0; i < files.length; i++) {
        const element = files[i];
        auxNameFotos += element.name + ', ';
        var objectURLi = URL.createObjectURL(element);
        $("#add-contenedorFotosLib").append('<div class="col-sm-6 col-md-4 col-lg-3"><img class="fotosEstaciones  img-fluid" src="'+ objectURLi +'"></div>');
        FotosAnexasFiles['Libreta_'+i] = element;
      }
      $("#add-est-fotosLib-1").val(auxNameFotos);
    }
    else if(auxTipoForm == 'INVENTARIO'){
      $("#contenedorFotosAnexas_"+auxTipoForm+'_'+auxIDFoto+'_'+auxIDForm).empty();
      $("#nombreFotosAnexasINV_"+auxTipoForm+'_Foto_'+auxIDFoto+'_'+auxIDForm).val(fileFoto.name);
      $("#contenedorFotosAnexas_"+auxTipoForm+'_'+auxIDFoto+'_'+auxIDForm).append('<div class="col-12"><img class="fotosEstaciones  img-fluid" src="'+ objectURL +'"></div>');
      FotosAnexasFiles[auxTipoForm+'_'+auxIDFoto+'_'+auxIDForm] = fileFoto;
    }
    else{
      $("#contenedorFotosAnexas_"+auxTipoForm+'_'+auxIDFoto+'_'+auxIDForm).empty();
      $("#NombreFotosAnexas"+'_'+auxTipoForm+'_Foto_'+auxIDFoto+'_'+auxIDForm).val(fileFoto.name);
      $("#contenedorFotosAnexas_"+auxTipoForm+'_'+auxIDFoto+'_'+auxIDForm).append('<div class="col-12"><img class="fotosEstaciones  img-fluid" src="'+ objectURL +'"></div>');
      FotosAnexasFiles[auxTipoForm+'_'+auxIDFoto+'_'+auxIDForm] = fileFoto;
    }
  }
  else{
    alert("Formato incorrecto, ingrese una imagen en formato 'jpg' o 'png'")
  }
}

function GuardarEstacion(isEdit, id) {
  
  formatosUGSR = [];
  formatosUGSS = [];
  formatosSGMF = [];
  // formatosCATALOGO = [];
  formatosINVENTARIO = [];
  // formatosUSOS = [];
  
  var formFormatos={};

  formFormatos['Form_UGS_Rocas'] = {};
  formFormatos['Form_UGS_Suelos'] = {};
  formFormatos['Form_SGMF'] = {};
  // formFormatos['Form_CATALOGO'] = {};
  formFormatos['Form_INVENTARIO'] = {};
  // formFormatos['Form_USOS'] = {};
  
  if (isEdit) {
    
    formUGSRcount = estaciones['estacion_'+id]['Formularios']['count_UGS_Rocas'];
    formUGSScount = estaciones['estacion_'+id]['Formularios']['count_UGS_Suelos'];
    formSGMFcount = estaciones['estacion_'+id]['Formularios']['count_SGMF'];
    // formCATALOGOcount = estaciones['estacion_'+id]['Formularios']['count_CATALOGO'];
    formINVENTARIOcount = estaciones['estacion_'+id]['Formularios']['count_INVENTARIO'];
    // formUSOScount = 0;
    // if (estaciones['estacion_'+id]['Formularios']['count_USOS'] === undefined) {
    //   estaciones['estacion_'+id]['Formularios']['count_USOS'] = 0
    // }
    // else{
    //   formUSOScount = estaciones['estacion_'+id]['Formularios']['count_USOS'];
    // }
  }
  else{
    formUGSRcount = contAddUGSR;
    formUGSScount = contAddUGSS;
    formSGMFcount = contAddSGMF;
    // formCATALOGOcount = contAddCATALOGO;
    formINVENTARIOcount = contAddINVENTARIO;
    // formUSOScount = contAddUSOS;
  }
  
  formFormatos['count_UGS_Rocas'] = formUGSRcount;
  formFormatos['count_UGS_Suelos'] = formUGSScount;
  formFormatos['count_SGMF'] = formSGMFcount;
  // formFormatos['count_CATALOGO'] = formCATALOGOcount;
  formFormatos['count_INVENTARIO'] = formINVENTARIOcount;
  // formFormatos['count_USOS'] = formUSOScount;
  
  var UGSRActivos;
  var UGSSActivos;
  var SGMFActivos;
  // var CATALOGOActivos;
  var INVENTARIOActivos;
  // var USOSActivos;

  
  
  if (isEdit) {
    for (let i = 0; i < formUGSRcount; i++) {
      
      UGSRActivos = estaciones['estacion_'+id]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+i]['activo'];
      var auxDiscount = estaciones['estacion_'+id]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+i]['Discontinuidades']['count'];
      // var auxFotocount = estaciones['estacion_'+id]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+i]['FotosAnexas']['count'];
      formatosUGSR.push({'activo': UGSRActivos,'Discontinuidades':{'count' : auxDiscount}});
      // formatosUGSR.push({'activo': UGSRActivos,'Discontinuidades':{'count' : auxDiscount}, 'FotosAnexas':{'count' : auxFotocount}});
      for (let j = 1; j < auxDiscount+1; j++) {
        formatosUGSR[i]['Discontinuidades']['Discont_'+j] = {};
        if (estaciones['estacion_'+id]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+i]['activo']) {
          if (estaciones['estacion_'+id]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+i]['Discontinuidades']['Discont_'+j]['activo'] || estaciones['estacion_'+id]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+i]['Discontinuidades']['Discont_'+j]['activo'] == "true") {
            formatosUGSR[i]['Discontinuidades']['Discont_'+j]['activo'] = estaciones['estacion_'+id]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+i]['Discontinuidades']['Discont_'+j]['activo'];
          }
          else{
            formatosUGSR[i]['Discontinuidades']['Discont_'+j] = {
              'AlturaDiscont': '',
              'AnchoAberDiscont': '',
              'AzBzBz1': '',
              'AzBzBz2': '',
              'Buzamiento': '',
              'DirBuzamiento': '',
              'DirRakePitch': '',
              'EspaciamientoDiscont': '',
              'FormaSuperDiscont': '',
              'HumedadDiscont': '',
              'MeteorizacionDiscont': '',
              'ObservacionesDiscont': '',
              'PersistenciaDiscont': '',
              'RakePitch': '',
              'RugosidadSuperDiscont': '',
              'TipoDiscont': '',
              'TipoRellenoDiscont': '',
              'activo': false
            }
          }
        }
        else{
          formatosUGSR[i]['Discontinuidades']['Discont_'+j] = {
            'AlturaDiscont': '',
            'AnchoAberDiscont': '',
            'AzBzBz1': '',
            'AzBzBz2': '',
            'Buzamiento': '',
            'DirBuzamiento': '',
            'DirRakePitch': '',
            'EspaciamientoDiscont': '',
            'FormaSuperDiscont': '',
            'HumedadDiscont': '',
            'MeteorizacionDiscont': '',
            'ObservacionesDiscont': '',
            'PersistenciaDiscont': '',
            'RakePitch': '',
            'RugosidadSuperDiscont': '',
            'TipoDiscont': '',
            'TipoRellenoDiscont': '',
            'activo': false
          }

        }
        
      }
      // for (let j = 1; j < auxFotocount+1; j++) {
      //   formatosUGSR[i]['FotosAnexas']['FotoAnexa_'+j] = {};
      //   if (estaciones['estacion_'+id]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+i]['activo']) {
      //     if (estaciones['estacion_'+id]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+i]['FotosAnexas']['FotoAnexa_'+j]['activo'] || estaciones['estacion_'+id]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+i]['FotosAnexas']['FotoAnexa_'+j]['activo'] == "true") {
      //       formatosUGSR[i]['FotosAnexas']['FotoAnexa_'+j]['activo'] = estaciones['estacion_'+id]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+i]['FotosAnexas']['FotoAnexa_'+j]['activo'];
      //       formatosUGSR[i]['FotosAnexas']['FotosURL'] = estaciones['estacion_'+id]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+i]['FotosAnexas']['FotosURL'];
      //     }
      //     else{
      //       formatosUGSR[i]['FotosAnexas']['FotoAnexa_'+j] = {
      //         'DescriFotosAnexas': '',
      //         'NombreFotosAnexas': '',
      //         'activo': false
      //       }
      //     }
      //   }
      //   else{
      //     formatosUGSR[i]['FotosAnexas']['FotoAnexa_'+j] = {
      //       'DescriFotosAnexas': '',
      //       'NombreFotosAnexas': '',
      //       'activo': false
      //     }
      //   }

      //   //console.log(formatosUGSR[i]['FotosAnexas']['FotoAnexa_'+j]);
      // }
    }
    for (let i = 0; i < formUGSScount; i++) {
      UGSSActivos = estaciones['estacion_'+id]['Formularios']['Form_UGS_Suelos']['Form_UGS_Suelos_'+i]['activo'];
      // var auxFotocount = estaciones['estacion_'+id]['Formularios']['Form_UGS_Suelos']['Form_UGS_Suelos_'+i]['FotosAnexas']['count'];
      // formatosUGSS.push({'activo': UGSSActivos, 'FotosAnexas':{'count' : auxFotocount}});
      formatosUGSS.push({'activo': UGSSActivos});
    
      // for (let j = 1; j < auxFotocount+1; j++) {
      //   formatosUGSS[i]['FotosAnexas']['FotoAnexa_'+j] = {};
      //   if (estaciones['estacion_'+id]['Formularios']['Form_UGS_Suelos']['Form_UGS_Suelos_'+i]['activo']) {
      //     if (estaciones['estacion_'+id]['Formularios']['Form_UGS_Suelos']['Form_UGS_Suelos_'+i]['FotosAnexas']['FotoAnexa_'+j]['activo'] || estaciones['estacion_'+id]['Formularios']['Form_UGS_Suelos']['Form_UGS_Suelos_'+i]['FotosAnexas']['FotoAnexa_'+j]['activo'] == "true") {
      //       formatosUGSS[i]['FotosAnexas']['FotoAnexa_'+j]['activo'] = estaciones['estacion_'+id]['Formularios']['Form_UGS_Suelos']['Form_UGS_Suelos_'+i]['FotosAnexas']['FotoAnexa_'+j]['activo'];
      //       formatosUGSS[i]['FotosAnexas']['FotosURL'] = estaciones['estacion_'+id]['Formularios']['Form_UGS_Suelos']['Form_UGS_Suelos_'+i]['FotosAnexas']['FotosURL'];
      //     }
      //     else{
      //       formatosUGSS[i]['FotosAnexas']['FotoAnexa_'+j] = {
      //         'DescriFotosAnexas': '',
      //         'NombreFotosAnexas': '',
      //         'activo': false
      //       }
      //     }
      //   }
      //   else{
      //     formatosUGSS[i]['FotosAnexas']['FotoAnexa_'+j] = {
      //       'DescriFotosAnexas': '',
      //       'NombreFotosAnexas': '',
      //       'activo': false
      //     }
      //   }
      // }
      // console.log(formatosUGSS[i]);
    }
    for (let i = 0; i < formSGMFcount; i++) {
      SGMFActivos = estaciones['estacion_'+id]['Formularios']['Form_SGMF']['Form_SGMF_'+i]['activo'];
      var auxDiscount = estaciones['estacion_'+id]['Formularios']['Form_SGMF']['Form_SGMF_'+i]['SGMF']['count'];
      // var auxFotocount = estaciones['estacion_'+id]['Formularios']['Form_SGMF']['Form_SGMF_'+i]['FotosAnexas']['count'];
      // formatosSGMF.push({'activo': SGMFActivos,'SGMF':{'count' : auxDiscount}, 'FotosAnexas':{'count' : auxFotocount}});
      formatosSGMF.push({'activo': SGMFActivos,'SGMF':{'count' : auxDiscount}});
    
      for (let j = 1; j < auxDiscount+1; j++) {
        formatosSGMF[i]['SGMF']['SGMF_'+j] = {};
        if (estaciones['estacion_'+id]['Formularios']['Form_SGMF']['Form_SGMF_'+i]['activo']) {
          if (estaciones['estacion_'+id]['Formularios']['Form_SGMF']['Form_SGMF_'+i]['SGMF']['SGMF_'+j]['activo'] ) {
            formatosSGMF[i]['SGMF']['SGMF_'+j]['activo'] = estaciones['estacion_'+id]['Formularios']['Form_SGMF']['Form_SGMF_'+i]['SGMF']['SGMF_'+j]['activo'];
          }
          else{
            formatosSGMF[i]['SGMF']['SGMF_'+j] = {
              "codigonuevaSGMF": "",
              "coberturaotro": "",
              "usootro": "",
              "patronotro": "",
              "tiporoca": "1. Ígnea ácida",
              "gradometeor": "1. Fresca",
              "gradofractura": "1. Roca Sana",
              "tiposuelo": "1. Antrópico",
              "tamanograno": "1. Grueso",
              "tiporelieve": "1. Montañoso (>500 m)",
              "indicerelieve": "1. Muy bajo (Menor a 50 m)",
              "inclinacionladera": "1. Plana a suave (Menores a 5°)",
              "longiladera": "1. Muy corta (Menor a 50 m)",
              "formaladera": "1. Rectilínea",
              "formacresta": "1. Aguda",
              "formavalle": "1. Artesa",
              "cobertura": "1. Pastos",
              "uso": "1. Ganadería",
              "densidad": "1. Baja (Menor a 0,5 Km\/Km2)",
              "frecuencia": "1. Muy Alta (>40 #Frec\/Km2)",
              "textura": "1. Gruesa",
              "patron": "1. Dendrítico",
              "tipoerosion": "1. Laminar",
              "espaciamiento": "1. (Menor a 5 m)",
              "intensidaderosion": "1. Suave",
              "actividad": "1. Inactiva: No presenta movimientos en masa",
              'activo': false
            }
          }
        }
        else{
          formatosSGMF[i]['SGMF']['SGMF_'+j] = {
            "codigonuevaSGMF": "",
            "coberturaotro": "",
            "usootro": "",
            "patronotro": "",
            "tiporoca": "1. Ígnea ácida",
            "gradometeor": "1. Fresca",
            "gradofractura": "1. Roca Sana",
            "tiposuelo": "1. Antrópico",
            "tamanograno": "1. Grueso",
            "tiporelieve": "1. Montañoso (>500 m)",
            "indicerelieve": "1. Muy bajo (Menor a 50 m)",
            "inclinacionladera": "1. Plana a suave (Menores a 5°)",
            "longiladera": "1. Muy corta (Menor a 50 m)",
            "formaladera": "1. Rectilínea",
            "formacresta": "1. Aguda",
            "formavalle": "1. Artesa",
            "cobertura": "1. Pastos",
            "uso": "1. Ganadería",
            "densidad": "1. Baja (Menor a 0,5 Km\/Km2)",
            "frecuencia": "1. Muy Alta (>40 #Frec\/Km2)",
            "textura": "1. Gruesa",
            "patron": "1. Dendrítico",
            "tipoerosion": "1. Laminar",
            "espaciamiento": "1. (Menor a 5 m)",
            "intensidaderosion": "1. Suave",
            "actividad": "1. Inactiva: No presenta movimientos en masa",
            'activo': false
          }

        }
        
      }
      // for (let j = 1; j < auxFotocount+1; j++) {
      //   formatosSGMF[i]['FotosAnexas']['FotoAnexa_'+j] = {};
      //   if (estaciones['estacion_'+id]['Formularios']['Form_SGMF']['Form_SGMF_'+i]['activo']) {
      //     if (estaciones['estacion_'+id]['Formularios']['Form_SGMF']['Form_SGMF_'+i]['FotosAnexas']['FotoAnexa_'+j]['activo']) {
      //       formatosSGMF[i]['FotosAnexas']['FotoAnexa_'+j]['activo'] = estaciones['estacion_'+id]['Formularios']['Form_SGMF']['Form_SGMF_'+i]['FotosAnexas']['FotoAnexa_'+j]['activo'];
      //       formatosSGMF[i]['FotosAnexas']['FotosURL'] = estaciones['estacion_'+id]['Formularios']['Form_SGMF']['Form_SGMF_'+i]['FotosAnexas']['FotosURL'];
      //     }
      //     else{
      //       formatosSGMF[i]['FotosAnexas']['FotoAnexa_'+j] = {
      //         'DescriFotosAnexas': '',
      //         'NombreFotosAnexas': '',
      //         'activo': false
      //       }
      //     }
      //   }
      //   else{
      //     formatosSGMF[i]['FotosAnexas']['FotoAnexa_'+j] = {
      //       'DescriFotosAnexas': '',
      //       'NombreFotosAnexas': '',
      //       'activo': false
      //     }
      //   }
      // }
      // console.log(formatosSGMF[i]);
    }
    // for (let i = 0; i < formCATALOGOcount; i++) {
    //   CATALOGOActivos = estaciones['estacion_'+id]['Formularios']['Form_CATALOGO']['Form_CATALOGO_'+i]['activo'];
    //   var auxDiscount = estaciones['estacion_'+id]['Formularios']['Form_CATALOGO']['Form_CATALOGO_'+i]['DANOS']['count'];
    //   formatosCATALOGO.push({'activo': CATALOGOActivos,'DANOS':{'count' : auxDiscount}});
    
    //   for (let j = 1; j < auxDiscount+1; j++) {
    //     formatosCATALOGO[i]['DANOS']['DANOS_'+j] = {};
    //     if (estaciones['estacion_'+id]['Formularios']['Form_CATALOGO']['Form_CATALOGO_'+i]['activo']) {
    //       if (estaciones['estacion_'+id]['Formularios']['Form_CATALOGO']['Form_CATALOGO_'+i]['DANOS']['DANOS_'+j]['activo']) {
    //         formatosCATALOGO[i]['DANOS']['DANOS_'+j]['activo'] = estaciones['estacion_'+id]['Formularios']['Form_CATALOGO']['Form_CATALOGO_'+i]['DANOS']['DANOS_'+j]['activo'];
    //       }
    //       else{
    //         formatosCATALOGO[i]['DANOS']['DANOS_'+j] = {
    //           "clasedano": "I: Infraestructura",
    //           "tiposdano": "DL: Daño leve",
    //           "tipodano": "",
    //           "cantidaddano": "",
    //           "unidaddano": "",
    //           "valordano": "",
    //           'activo': false
    //         }
    //       }
    //     }
    //     else{
    //       formatosCATALOGO[i]['DANOS']['DANOS_'+j] = {
    //         "clasedano": "I: Infraestructura",
    //         "tiposdano": "DL: Daño leve",
    //         "tipodano": "",
    //         "cantidaddano": "",
    //         "unidaddano": "",
    //         "valordano": "",
    //         'activo': false
    //       }

    //     }
        
    //   }

    //   console.log(formatosCATALOGO[i]);
    // }
    for (let i = 0; i < formINVENTARIOcount; i++) {
      INVENTARIOActivos = estaciones['estacion_'+id]['Formularios']['Form_INVENTARIO']['Form_INVENTARIO_'+i]['activo'];
      // var auxDiscount = estaciones['estacion_'+id]['Formularios']['Form_INVENTARIO']['Form_INVENTARIO_'+i]['DANOS']['count'];
      // var auxFotocount = estaciones['estacion_'+id]['Formularios']['Form_INVENTARIO']['Form_INVENTARIO_'+i]['FotosAnexas']['count'];
      // formatosINVENTARIO.push({'activo': INVENTARIOActivos,'DANOS':{'count' : auxDiscount},'FotosAnexas':{'count' : auxFotocount}});
      formatosINVENTARIO.push({'activo': INVENTARIOActivos});
    
      // for (let j = 1; j < auxDiscount+1; j++) {
      //   formatosINVENTARIO[i]['DANOS']['DANOS_'+j] = {};
      //   if (estaciones['estacion_'+id]['Formularios']['Form_INVENTARIO']['Form_INVENTARIO_'+i]['activo']) {
      //     if (estaciones['estacion_'+id]['Formularios']['Form_INVENTARIO']['Form_INVENTARIO_'+i]['DANOS']['DANOS_'+j]['activo']) {
      //       formatosINVENTARIO[i]['DANOS']['DANOS_'+j]['activo'] = estaciones['estacion_'+id]['Formularios']['Form_INVENTARIO']['Form_INVENTARIO_'+i]['DANOS']['DANOS_'+j]['activo'];
      //     }
      //     else{
      //       formatosINVENTARIO[i]['DANOS']['DANOS_'+j] = {
      //         "clasedano": "I: Infraestructura",
      //         "tiposdano": "DL: Daño leve",
      //         "tipodano": "",
      //         "cantidaddano": "",
      //         "unidaddano": "",
      //         "valordano": "",
      //         'activo': false
      //       }
      //     }
      //   }
      //   else{
      //     formatosINVENTARIO[i]['DANOS']['DANOS_'+j] = {
      //       "clasedano": "I: Infraestructura",
      //       "tiposdano": "DL: Daño leve",
      //       "tipodano": "",
      //       "cantidaddano": "",
      //       "unidaddano": "",
      //       "valordano": "",
      //       'activo': false
      //     }

      //   }
        
      // }
      // for (let j = 1; j < auxFotocount+1; j++) {
      //   formatosINVENTARIO[i]['FotosAnexas']['FotoAnexa_'+j] = {};
      //   if (estaciones['estacion_'+id]['Formularios']['Form_INVENTARIO']['Form_INVENTARIO_'+i]['activo']) {
      //     if (estaciones['estacion_'+id]['Formularios']['Form_INVENTARIO']['Form_INVENTARIO_'+i]['FotosAnexas']['FotoAnexa_'+j]['activo']) {
      //       formatosINVENTARIO[i]['FotosAnexas']['FotoAnexa_'+j]['activo'] = estaciones['estacion_'+id]['Formularios']['Form_INVENTARIO']['Form_INVENTARIO_'+i]['FotosAnexas']['FotoAnexa_'+j]['activo'];
      //       formatosINVENTARIO[i]['FotosAnexas']['FotosURL'] = estaciones['estacion_'+id]['Formularios']['Form_INVENTARIO']['Form_INVENTARIO_'+i]['FotosAnexas']['FotosURL'];
      //     }
      //     else{
      //       formatosINVENTARIO[i]['FotosAnexas']['FotoAnexa_'+j] = {
      //         "autorFotosAnexas": "",
      //         "fechaFotosAnexas": "",
      //         'nombreFotosAnexasINV': '',
      //         'obsFotosAnexas': '',
      //         'activo': false
      //       }
      //     }
      //   }
      //   else{
      //     formatosINVENTARIO[i]['FotosAnexas']['FotoAnexa_'+j] = {
      //       "autorFotosAnexas": "",
      //       "fechaFotosAnexas": "",
      //       'nombreFotosAnexasINV': '',
      //       'obsFotosAnexas': '',
      //       'activo': false
      //     }
      //   }
      // }
    }
    // for (let i = 0; i < formUSOScount; i++) {
    //   USOSActivos = estaciones['estacion_'+id]['Formularios']['Form_USOS']['Form_USOS_'+i]['activo'];
    //   if (estaciones['estacion_'+id]['Formularios']['Form_USOS']['Form_USOS_'+i]['PUNTOS'] === undefined) {
    //     estaciones['estacion_'+id]['Formularios']['Form_USOS']['Form_USOS_'+i]['PUNTOS'] = {"count":0};
    //   }
    //   var auxDiscount = estaciones['estacion_'+id]['Formularios']['Form_USOS']['Form_USOS_'+i]['PUNTOS']['count'];
    //   formatosUSOS.push({'activo': USOSActivos,'PUNTOS':{'count' : auxDiscount}});
    
    //   for (let j = 1; j < auxDiscount+1; j++) {
    //     formatosUSOS[i]['PUNTOS']['PUNTO_'+j] = {};
    //     if (estaciones['estacion_'+id]['Formularios']['Form_USOS']['Form_USOS_'+i]['activo']) {
    //       if (estaciones['estacion_'+id]['Formularios']['Form_USOS']['Form_USOS_'+i]['PUNTOS']['PUNTO_'+j]['activo'] ) {
    //         formatosUSOS[i]['PUNTOS']['PUNTO_'+j]['activo'] = estaciones['estacion_'+id]['Formularios']['Form_USOS']['Form_USOS_'+i]['PUNTOS']['PUNTO_'+j]['activo'];
    //         if (estaciones['estacion_'+id]['Formularios']['Form_USOS']['Form_USOS_'+i]['PUNTOS']['PUNTO_'+j]['FotosURL'] === undefined) {
    //           estaciones['estacion_'+id]['Formularios']['Form_USOS']['Form_USOS_'+i]['PUNTOS']['PUNTO_'+j]['FotosURL'] = {"count":0}
    //         }
    //         formatosUSOS[i]['PUNTOS']['PUNTO_'+j]['FotosURL'] = estaciones['estacion_'+id]['Formularios']['Form_USOS']['Form_USOS_'+i]['PUNTOS']['PUNTO_'+j]['FotosURL'];
    //       }
    //       else{
    //         formatosUSOS[i]['PUNTOS']['PUNTO_'+j] = {
    //           "PUNTO": "",
    //           "ESTE": "",
    //           "NORTE": "",
    //           "FotosPunto": "",
    //           "COBERTURA": "",
    //           "OBS_USOS": "",
    //           "USO_SUELO": "",
    //           "DENSIDAD_SIEMBRA": "",
    //           "INTENSIDAD_USO": "",
    //           "TECNICAS_PROD": "",
    //           "ARREGLO_ESP": "",
    //           "RIEGO": "",
    //           "TIPO_ESTAB": "",
    //           "DIR_SIEMBRA": "",
    //           "QUEMA": "",
    //           "ACT_PECUARIA": "",
    //           "REST_USO": "",
    //           "AFECTACION": "",
    //           "COBERTURA_INT": "",
    //           "FotosURL" : {"count": 0},
    //           'activo': false
    //         }
    //       }
    //     }
    //     else{
    //       formatosUSOS[i]['PUNTOS']['PUNTO_'+j] = {
    //         "PUNTO": "",
    //         "ESTE": "",
    //         "NORTE": "",
    //         "FotosPunto": "",
    //         "COBERTURA": "",
    //         "OBS_USOS": "",
    //         "USO_SUELO": "",
    //         "DENSIDAD_SIEMBRA": "",
    //         "INTENSIDAD_USO": "",
    //         "TECNICAS_PROD": "",
    //         "ARREGLO_ESP": "",
    //         "RIEGO": "",
    //         "TIPO_ESTAB": "",
    //         "DIR_SIEMBRA": "",
    //         "QUEMA": "",
    //         "ACT_PECUARIA": "",
    //         "REST_USO": "",
    //         "AFECTACION": "",
    //         "COBERTURA_INT": "",
    //         "FotosURL" : {"count": 0},
    //         'activo': false
    //       }

    //     }
        
    //   }
    //   console.log(formatosUSOS[i]);
    // }
  }
  else{
    for (let i = 0; i < formUGSRcount; i++) {
      var auxDiscount = contAddDiscont[i];
      // var auxFotocount = contAddFoto[i];
      formatosUGSR.push({'Discontinuidades':{'count' : auxDiscount},'activo':true});
      // formatosUGSR.push({'Discontinuidades':{'count' : auxDiscount}, 'FotosAnexas':{'count' : auxFotocount},'activo':true});
      for (let j = 1; j < auxDiscount+1; j++) {
        var auxj = j-1;
        formatosUGSR[i]['Discontinuidades']['Discont_'+j] = {'activo' : statAddDiscont[i][auxj]};
      }
      // for (let j = 1; j < auxFotocount+1; j++) {
      //   var auxj = j-1;
      //   formatosUGSR[i]['FotosAnexas']['FotoAnexa_'+j] = {'activo': statAddFoto[i][auxj]};
      // }
    }
    for (let i = 0; i < formUGSScount; i++) {
      // var auxFotocount = contAddFotoSuelos[i];
      formatosUGSS.push({'activo':true});
      // formatosUGSS.push({'FotosAnexas':{'count' : auxFotocount},'activo':true});
      // for (let j = 1; j < auxFotocount+1; j++) {
      //   var auxj = j-1;
      //   formatosUGSS[i]['FotosAnexas']['FotoAnexa_'+j] = {'activo': statAddFotoSuelos[i][auxj]};
      // }
    }
    for (let i = 0; i < formSGMFcount; i++) {
      // var auxFotocount = contAddFotoSGMF[i];
      var auxDiscount = contAddNewSGMF[i];
      // formatosSGMF.push({'SGMF':{'count' : auxDiscount},'FotosAnexas':{'count' : auxFotocount},'activo':true});
      formatosSGMF.push({'SGMF':{'count' : auxDiscount},'activo':true});
      for (let j = 1; j < auxDiscount+1; j++) {
        var auxj = j-1;
        formatosSGMF[i]['SGMF']['SGMF_'+j] = {'activo': statAddNewSGMF[i][auxj]};
      }
      // for (let j = 1; j < auxFotocount+1; j++) {
      //   var auxj = j-1;
      //   formatosSGMF[i]['FotosAnexas']['FotoAnexa_'+j] = {'activo': statAddFotoSGMF[i][auxj]};
      // }
    }
    // for (let i = 0; i < formCATALOGOcount; i++) {
    //   var auxDiscount = contAddCatDanos[i];
    //   formatosCATALOGO.push({'DANOS':{'count' : auxDiscount},'activo':true});
    //   for (let j = 1; j < auxDiscount+1; j++) {
    //     var auxj = j-1;
    //     formatosCATALOGO[i]['DANOS']['DANOS_'+j] = {'activo': statAddCatDanos[i][auxj]};
    //   }
    // }
    for (let i = 0; i < formINVENTARIOcount; i++) {
      // var auxDiscount = contAddInvDanos[i];
      // var auxFotocount = contAddFotoInv[i];
      formatosINVENTARIO.push({'activo':true});
      // formatosINVENTARIO.push({'DANOS':{'count' : auxDiscount},'FotosAnexas':{'count' : auxFotocount},'activo':true});
      // for (let j = 1; j < auxDiscount+1; j++) {
      //   var auxj = j-1;
      //   formatosINVENTARIO[i]['DANOS']['DANOS_'+j] = {'activo': statAddInvDanos[i][auxj]};
      // }
      // for (let j = 1; j < auxFotocount+1; j++) {
      //   var auxj = j-1;
      //   formatosINVENTARIO[i]['FotosAnexas']['FotoAnexa_'+j] = {'activo': statAddFotoInv[i][auxj]};
      // }
    }
    // for (let i = 0; i < formUSOScount; i++) {
    //   var auxDiscount = contAddPuntoUSOS[i];
    //   formatosUSOS.push({'PUNTOS':{'count' : auxDiscount},'activo':true});
    //   for (let j = 1; j < auxDiscount+1; j++) {
    //     var auxj = j-1;
    //     formatosUSOS[i]['PUNTOS']['PUNTO_'+j] = {'activo': statAddPuntoUSOS[i][auxj]};
    //   }
    // }
  }

  for (const attr in idsFormatos) {
    var auxAttr = attr.split("_");
    // console.log(auxAttr);
    if(auxAttr[0]=='UGSR'){
      if (auxAttr[2] !== 'Disc' && auxAttr[3] !== 'Foto') {
        if (auxAttr[2] == 'radiobtn') {
          formatosUGSR[auxAttr[3]][auxAttr[1]] = $('input:radio[name='+idsFormatos[attr]+']:checked').val();
        }
        else if (auxAttr[2] == 'checkbtn') {
          formatosUGSR[auxAttr[3]][auxAttr[1]] = $('#'+idsFormatos[attr]).prop('checked')+'';
        }
        else{
          formatosUGSR[auxAttr[2]][auxAttr[1]] = $('#'+idsFormatos[attr]).val();
        }
      }
      if (auxAttr[2] == 'Disc') {
        formatosUGSR[auxAttr[4]]['Discontinuidades']['Discont_'+auxAttr[3]][auxAttr[1]] = $('#'+idsFormatos[attr]).val();
      }
      // if (auxAttr[3] == 'Foto') {
      //   formatosUGSR[auxAttr[5]]['FotosAnexas']['FotoAnexa_'+auxAttr[4]][auxAttr[1]] = $('#'+idsFormatos[attr]).val();
      // }
    }
    if(auxAttr[0]=='UGSS'){
      if (auxAttr[3] !== 'Foto') {
        if (auxAttr[2] == 'radiobtn') {
          formatosUGSS[auxAttr[3]][auxAttr[1]] = $('input:radio[name='+idsFormatos[attr]+']:checked').val()
        }
        else if (auxAttr[2] == 'checkbtn') {
          formatosUGSS[auxAttr[3]][auxAttr[1]+'_'+auxAttr[4]] = $('#'+idsFormatos[attr]).prop('checked')+'';
        }
        else if (auxAttr[2] == 'multitext') {
          formatosUGSS[auxAttr[3]][auxAttr[1]+'_'+auxAttr[4]] = $('#'+idsFormatos[attr]).val();
        }
        else if (auxAttr[2] == 'lito') {
          formatosUGSS[auxAttr[3]][auxAttr[1]] = $('#'+idsFormatos[attr]).prop('checked')+'';
        }
        else{
          formatosUGSS[auxAttr[2]][auxAttr[1]] = $('#'+idsFormatos[attr]).val();
        }
      }
      // if (auxAttr[3] == 'Foto') {
      //   formatosUGSS[auxAttr[5]]['FotosAnexas']['FotoAnexa_'+auxAttr[4]][auxAttr[1]] = $('#'+idsFormatos[attr]).val();
      // }
    }
    if(auxAttr[0]=='SGMF' ){
      if (auxAttr[3] !== 'Foto' && auxAttr[2] !== 'NewSGMF') {
        if (auxAttr[2] == 'radiobtn') {
          formatosSGMF[auxAttr[3]][auxAttr[1]] = $('input:radio[name='+idsFormatos[attr]+']:checked').val()
        }
        else if (auxAttr[2] == 'checkbtn') {
          formatosSGMF[auxAttr[3]][auxAttr[1]] = $('#'+idsFormatos[attr]).prop('checked')+'';
        }
        else if (auxAttr[2] == 'multitext') {
          formatosSGMF[auxAttr[3]][auxAttr[1]+auxAttr[4]] = $('#'+idsFormatos[attr]).val();
        }
        else{
          formatosSGMF[auxAttr[2]][auxAttr[1]] = $('#'+idsFormatos[attr]).val();
        }
      }
      if (auxAttr[2] == 'NewSGMF') {
        if (auxAttr[5]=='checkbtn') {
          formatosSGMF[auxAttr[4]]['SGMF']['SGMF_'+auxAttr[3]][auxAttr[1]] = $('#'+idsFormatos[attr]).prop('checked')+'';
        }else{
          formatosSGMF[auxAttr[4]]['SGMF']['SGMF_'+auxAttr[3]][auxAttr[1]] = $('#'+idsFormatos[attr]).val();
        }                 
      }
      // if (auxAttr[3] == 'Foto') {
      //   formatosSGMF[auxAttr[5]]['FotosAnexas']['FotoAnexa_'+auxAttr[4]][auxAttr[1]] = $('#'+idsFormatos[attr]).val();
      // }
    }
    // if(auxAttr[0]=='CATALOGO'){
    //   if (auxAttr[2] !== 'DanoCat') {
    //     if (auxAttr[3] == 'radiobtnMM') {
    //       formatosCATALOGO[auxAttr[4]][auxAttr[1]+'_'+auxAttr[2]] = $('input:radio[name='+idsFormatos[attr]+']:checked').val()
    //     }
    //     else if(auxAttr[2] == 'PARTE' || auxAttr[2] == 'MOV' || auxAttr[2] == 'FUENTE' || auxAttr[2] == 'REP' || auxAttr[2] == 'SIMMA' || auxAttr[2] == 'MUN' || auxAttr[2] == 'GEOGRF' || auxAttr[1] === 'SUBTIPO' || auxAttr[2] == 'INFSEC'){
    //       formatosCATALOGO[auxAttr[3]][auxAttr[1]+'_'+auxAttr[2]] = $('#'+idsFormatos[attr]).val();
    //     }
    //     else{
    //       formatosCATALOGO[auxAttr[2]][auxAttr[1]] = $('#'+idsFormatos[attr]).val();
    //     }
    //   }
    //   if (auxAttr[2] == 'DanoCat') {
    //     formatosCATALOGO[auxAttr[4]]['DANOS']['DANOS_'+auxAttr[3]][auxAttr[1]] = $('#'+idsFormatos[attr]).val();
    //   }
    // }
    if(auxAttr[0]=='INVENTARIO'){
      if (auxAttr[2] !== 'DanoInv' && auxAttr[3] !== 'Foto') {
        if (auxAttr[3] == 'radiobtnMM') {
          formatosINVENTARIO[auxAttr[4]][auxAttr[1]+'_'+auxAttr[2]] = $('input:radio[name='+idsFormatos[attr]+']:checked').val()
        }
        else if (auxAttr[2] == 'radiobtnMM') {
          formatosINVENTARIO[auxAttr[3]][auxAttr[1]] = $('input:radio[name='+idsFormatos[attr]+']:checked').val();
        }
        else if(auxAttr[1] == 'ID' || auxAttr[2] == 'DEP' || auxAttr[2] == 'PARTE' || auxAttr[2] == 'MOV' || auxAttr[2] == 'FUENTE' || auxAttr[2] == 'REP' || auxAttr[2] == 'SIMMA' || auxAttr[2] == 'MUN' || auxAttr[2] == 'GEOGRF' || auxAttr[1] === 'SUBTIPO' || auxAttr[2] == 'INFSEC' || auxAttr[2] == 'ACT' || auxAttr[2] == 'GMF'){
          formatosINVENTARIO[auxAttr[3]][auxAttr[1]+'_'+auxAttr[2]] = $('#'+idsFormatos[attr]).val();
        }
        else if (auxAttr[2] == 'checkbtnMM') {
          formatosINVENTARIO[auxAttr[3]][auxAttr[1]+'_'+auxAttr[4]] = $('#'+idsFormatos[attr]).prop('checked')+'';
        }
        else if (auxAttr[2] == 'checkbtn') {
          formatosINVENTARIO[auxAttr[3]][auxAttr[1]] = $('#'+idsFormatos[attr]).prop('checked')+'';
        }
        else if (auxAttr[2] == 'multitext') {
          formatosINVENTARIO[auxAttr[3]][auxAttr[1]] = $('#'+idsFormatos[attr]).val();
        }
        else{
          formatosINVENTARIO[auxAttr[2]][auxAttr[1]] = $('#'+idsFormatos[attr]).val();
        }
      }
      // if (auxAttr[2] == 'DanoInv') {
      //   formatosINVENTARIO[auxAttr[4]]['DANOS']['DANOS_'+auxAttr[3]][auxAttr[1]] = $('#'+idsFormatos[attr]).val();
      // }
      // if (auxAttr[3] == 'Foto') {
      //   formatosINVENTARIO[auxAttr[5]]['FotosAnexas']['FotoAnexa_'+auxAttr[4]][auxAttr[1]] = $('#'+idsFormatos[attr]).val();
      // }
    }
    // if(auxAttr[0]=='USOS' ){
    //   if (auxAttr[2] !== 'NewPunto') {
    //       formatosUSOS[auxAttr[2]][auxAttr[1]] = $('#'+idsFormatos[attr]).val();
    //   }
    //   if (auxAttr[2] == 'NewPunto') {
    //     formatosUSOS[auxAttr[4]]['PUNTOS']['PUNTO_'+auxAttr[3]][auxAttr[1]] = $('#'+idsFormatos[attr]).val();              
    //   }
    // }  
  }

  if (isEdit) {
    for (let i = 0; i < formUGSRcount; i++) {
      if (estaciones['estacion_'+id]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+i]['activo']) {
        formFormatos['Form_UGS_Rocas']['Form_UGS_Rocas_'+i]=formatosUGSR[i];
      }else{
        formFormatos['Form_UGS_Rocas']['Form_UGS_Rocas_'+i]={
          'Discontinuidades' : {'count': 0},
          // 'FotosAnexas' : {'count': 0},  
          'activo': false,
          'claseaflor': "Natural",
          'color1': "",
          'color2': "",
          'composicionmineral1': "",
          'composicionmineral2': "",
          'fabrica1': "Cristalina Masiva",
          'fabrica2': "Cristalina Masiva",
          'gradometeo1': "Ninguna",
          'gradometeo2': "Ninguna",
          'gsi': "0-20",
          'humedad1': "Seco",
          'humedad2': "Seco",
          'litologiasasociadasopt1espesor': "",
          'litologiasasociadasopt1exist': "true",
          'litologiasasociadasopt2espesor': "",
          'litologiasasociadasopt2exist': "false",
          'municipios': "MARQUETALIA",
          'noestacion': "DFC01",
          'noformato': "DFC01",
          'nombreugs': "",
          'perfilmeteorizacion': "",
          'resistenciacomp1': "Extremadamente Dura >250",
          'resistenciacomp2': "Extremadamente Dura >250",
          'secuenciaestratiopt1espesor': "",
          'secuenciaestratiopt1orden': "",
          'secuenciaestratiopt2espesor': "",
          'secuenciaestratiopt2orden': "",
          'secuenciaestratiopt3espesor': "",
          'secuenciaestratiopt3orden': "v",
          'secuenciaestratiopt4espesor': "",
          'secuenciaestratiopt4orden': "",
          'secuenciaestratisuelor1espesor': "",
          'secuenciaestratisuelor1orden': "t",
          'secuenciaestratisuelor2espesor': "",
          'secuenciaestratisuelor2orden': "r",
          'secuenciaestratisuelor3espesor': "",
          'secuenciaestratisuelor3orden': "g",
          'tamanograno1': "Muy Grueso",
          'tamanograno2': "Muy Grueso",
          'vereda': "",
        }
      }
      
      UGSRActivos = estaciones['estacion_'+id]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+i]['activo'];
      var auxDiscount = estaciones['estacion_'+id]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+i]['Discontinuidades']['count'];
      // var auxFotocount = estaciones['estacion_'+id]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+i]['FotosAnexas']['count'];

      for (let j = 1; j < auxDiscount+1; j++) {
        
        if (estaciones['estacion_'+id]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+i]['activo']) {
          if (estaciones['estacion_'+id]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+i]['Discontinuidades']['Discont_'+j]['activo']) {
          }
          else{
            formatosUGSR[i]['Discontinuidades']['Discont_'+j] = {
              'AlturaDiscont': '',
              'AnchoAberDiscont': '',
              'AzBzBz1': '',
              'AzBzBz2': '',
              'Buzamiento': '',
              'DirBuzamiento': '',
              'DirRakePitch': '',
              'EspaciamientoDiscont': '',
              'FormaSuperDiscont': '',
              'HumedadDiscont': '',
              'MeteorizacionDiscont': '',
              'ObservacionesDiscont': '',
              'PersistenciaDiscont': '',
              'RakePitch': '',
              'RugosidadSuperDiscont': '',
              'TipoDiscont': '',
              'TipoRellenoDiscont': '',
              'activo': false
            }
          }
        }
        else{
          formatosUGSR[i]['Discontinuidades']['Discont_'+j] = {
            'AlturaDiscont': '',
            'AnchoAberDiscont': '',
            'AzBzBz1': '',
            'AzBzBz2': '',
            'Buzamiento': '',
            'DirBuzamiento': '',
            'DirRakePitch': '',
            'EspaciamientoDiscont': '',
            'FormaSuperDiscont': '',
            'HumedadDiscont': '',
            'MeteorizacionDiscont': '',
            'ObservacionesDiscont': '',
            'PersistenciaDiscont': '',
            'RakePitch': '',
            'RugosidadSuperDiscont': '',
            'TipoDiscont': '',
            'TipoRellenoDiscont': '',
            'activo': false
          }

        }
      
      }
      // for (let j = 1; j < auxFotocount+1; j++) {
        
      //   if (estaciones['estacion_'+id]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+i]['activo']) {
      //     if (estaciones['estacion_'+id]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+i]['FotosAnexas']['FotoAnexa_'+j]['activo']) {
            
      //     }
      //     else{
      //       formatosUGSR[i]['FotosAnexas']['FotoAnexa_'+j] = {
      //         'DescriFotosAnexas': '',
      //         'NombreFotosAnexas': '',
      //         'activo': false
      //       }
      //     }
      //   }
      //   else{
      //     formatosUGSR[i]['FotosAnexas']['FotoAnexa_'+j] = {
      //       'DescriFotosAnexas': '',
      //       'NombreFotosAnexas': '',
      //       'activo': false
      //     }
      //   }

      //   //console.log(formatosUGSR[i]['FotosAnexas']['FotoAnexa_'+j]);
      // }
    }

    for (let i = 0; i < formUGSScount; i++) {
      if (estaciones['estacion_'+id]['Formularios']['Form_UGS_Suelos']['Form_UGS_Suelos_'+i]['activo']) {
        formFormatos['Form_UGS_Suelos']['Form_UGS_Suelos_'+i]=formatosUGSS[i];
        
      }else{
        formFormatos['Form_UGS_Suelos']['Form_UGS_Suelos_'+i] =
        {
          // 'FotosAnexas':{'count': 0},
          'activo': false,
          'claseaflor': "Natural",
          'color1': "",
          'color2': "",
          'compacidadsuelosgruesos1': "Débil (suelta)",
          'compacidadsuelosgruesos2': "Débil (suelta)",
          'condicionhumedad1': "Seco",
          'condicionhumedad2': "Seco",
          'descripcionsuelos': "",
          'dirimbricacion1': "",
          'dirimbricacion2': "",
          'dirimbricacionmatriz1': "",
          'dirimbricacionmatriz2': "",
          'estructurasoporte1': "Clasto-soportado",
          'estructurasoporte2': "Clasto-soportado",
          'estructurasrelictas1': "Estructuras heredadas",
          'estructurasrelictas2': "Estructuras heredadas",
          "forma0check_2": true,
          "forma0check_1": true,
          "forma1check_2": false,
          "forma1check_1": false,
          "forma2check_2": false,
          "forma2check_1": false,
          "forma3check_2": false,
          "forma3check_1": false,
          "forma4check_2": false,
          "forma4check_1": false,
          'gradacion1': "Normal",
          'gradacion2': "Normal",
          'granulometria1': "Arena Media (0,425 - 2,0 mm)",
          'granulometria2': "Arena Media (0,425 - 2,0 mm)",
          'granulometriamatriz1': "Finos (Limos-Arcillas Menores de 0,075 mm)",
          'granulometriamatriz2': "Finos (Limos-Arcillas Menores de 0,075 mm)",
          'litologiasasociadasopt1espesor': "",
          'litologiasasociadasopt1exist': "true",
          'litologiasasociadasopt2espesor': "",
          'litologiasasociadasopt2exist': "false",
          'meteorizacionclastos1': "Ninguna",
          'meteorizacionclastos2': "Ninguna",
          'municipios': "AGUADAS",
          'noestacion': "",
          'noformato': "DFC02",
          'nombreugs': "",
          'observacionessuelos': "",
          'orientacion1': "Isotropía",
          'orientacion2': "Isotropía",
          'plasticidad1': "No plástico",
          'plasticidad2': "No plástico",
          'porcentajeclastos1': "",
          'porcentajeclastos2': "",
          'porcentajematriz1': "",
          'porcentajematriz2': "",
          "redondez0check_2": true,
          "redondez0check_1": true,
          "redondez1check_2": false,
          "redondez1check_1": false,
          "redondez2check_2": false,
          "redondez2check_1": false,
          "redondez3check_2": false,
          "redondez3check_1": false,
          "redondez4check_2": false,
          "redondez4check_1": false,
          "redondez5check_2": false,
          "redondez5check_1": false,
          'resiscorte1': "Muy Blanda Menor a 20",
          'resiscorte2': "Muy Blanda Menor a 20",
          'secuenciaestratiopt1espesor': "",
          'secuenciaestratiopt1orden': "",
          'secuenciaestratiopt2espesor': "",
          'secuenciaestratiopt2orden': "",
          'secuenciaestratiopt3espesor': "",
          'secuenciaestratiopt3orden': "",
          'secuenciaestratisuelor1espesor': "",
          'secuenciaestratisuelor1orden': "",
          'secuenciaestratisuelor2espesor': "",
          'secuenciaestratisuelor2orden': "",
          'secuenciaestratisuelor3espesor': "",
          'secuenciaestratisuelor3orden': "",
          'seleccion1': "Muy Pobremente Seleccionado",
          'seleccion2': "Muy Pobremente Seleccionado",
          'vereda': "",
        }
      }
      // var auxFotocount = estaciones['estacion_'+id]['Formularios']['Form_UGS_Suelos']['Form_UGS_Suelos_'+i]['FotosAnexas']['count'];
      // for (let j = 1; j < auxFotocount+1; j++) {
        
      //   if (estaciones['estacion_'+id]['Formularios']['Form_UGS_Suelos']['Form_UGS_Suelos_'+i]['activo']) {
      //     if (estaciones['estacion_'+id]['Formularios']['Form_UGS_Suelos']['Form_UGS_Suelos_'+i]['FotosAnexas']['FotoAnexa_'+j]['activo']) {
            
      //     }
      //     else{
      //       formatosUGSS[i]['FotosAnexas']['FotoAnexa_'+j] = {
      //         'DescriFotosAnexas': '',
      //         'NombreFotosAnexas': '',
      //         'activo': false
      //       }
      //     }
      //   }
      //   else{
      //     formatosUGSS[i]['FotosAnexas']['FotoAnexa_'+j] = {
      //       'DescriFotosAnexas': '',
      //       'NombreFotosAnexas': '',
      //       'activo': false
      //     }
      //   }

      //   //console.log(formatosUGSR[i]['FotosAnexas']['FotoAnexa_'+j]);
      // }


    }

    for (let i = 0; i < formSGMFcount; i++) {
      if (estaciones['estacion_'+id]['Formularios']['Form_SGMF']['Form_SGMF_'+i]['activo']) {
        formFormatos['Form_SGMF']['Form_SGMF_'+i]=formatosSGMF[i];
      }else{
        formFormatos['Form_SGMF']['Form_SGMF_'+i] = {
          // 'FotosAnexas':{'count': 0},
          'SGMF':{'count': 0},
          "ambiente0check": true,
          "ambiente1check": false,
          "ambiente2check": false,
          "ambiente3check": false,
          "ambiente4check": false,
          "ambiente5check": false,
          "ambiente6check": false,
          "ambiente7check": false,
          "ambiente8check": false,
          "noformato": "",
          "vereda": "",
          "noestacion": "",
          "ubicacionGeomorfoestructura": "",
          "ubicacionProvincia": "",
          "ubicacionRegion": "",
          "ubicacionUnidad": "",
          "ubicacionSubunidad": "",
          "ubicacionElemento": "",
          "nombreSGMF": "",
          "codigoSGMF": "",
          "observacionesSGMF": "",
          "municipios": "AGUADAS",
          "activo":false,
        }
      }
      var auxDiscount = estaciones['estacion_'+id]['Formularios']['Form_SGMF']['Form_SGMF_'+i]['SGMF']['count'];
      // var auxFotocount = estaciones['estacion_'+id]['Formularios']['Form_SGMF']['Form_SGMF_'+i]['FotosAnexas']['count'];
      // for (let j = 1; j < auxFotocount+1; j++) {
        
      //   if (estaciones['estacion_'+id]['Formularios']['Form_SGMF']['Form_SGMF_'+i]['activo']) {
      //     if (estaciones['estacion_'+id]['Formularios']['Form_SGMF']['Form_SGMF_'+i]['FotosAnexas']['FotoAnexa_'+j]['activo']) {
            
      //     }
      //     else{
      //       formatosSGMF[i]['FotosAnexas']['FotoAnexa_'+j] = {
      //         'DescriFotosAnexas': '',
      //         'NombreFotosAnexas': '',
      //         'activo': false
      //       }
      //     }
      //   }
      //   else{
      //     formatosSGMF[i]['FotosAnexas']['FotoAnexa_'+j] = {
      //       'DescriFotosAnexas': '',
      //       'NombreFotosAnexas': '',
      //       'activo': false
      //     }
      //   }

      //   //console.log(formatosUGSR[i]['FotosAnexas']['FotoAnexa_'+j]);
      // }
      for (let j = 1; j < auxDiscount+1; j++) {
        
        if (estaciones['estacion_'+id]['Formularios']['Form_SGMF']['Form_SGMF_'+i]['activo']) {
          if (estaciones['estacion_'+id]['Formularios']['Form_SGMF']['Form_SGMF_'+i]['SGMF']['SGMF_'+j]['activo']) {
          }
          else{
            formatosSGMF[i]['SGMF']['SGMF_'+j] = {
              "codigonuevaSGMF": "",
              "coberturaotro": "",
              "usootro": "",
              "patronotro": "",
              "tiporoca": "1. Ígnea ácida",
              "gradometeor": "1. Fresca",
              "gradofractura": "1. Roca Sana",
              "tiposuelo": "1. Antrópico",
              "tamanograno": "1. Grueso",
              "tiporelieve": "1. Montañoso (>500 m)",
              "indicerelieve": "1. Muy bajo (Menor a 50 m)",
              "inclinacionladera": "1. Plana a suave (Menores a 5°)",
              "longiladera": "1. Muy corta (Menor a 50 m)",
              "formaladera": "1. Rectilínea",
              "formacresta": "1. Aguda",
              "formavalle": "1. Artesa",
              "cobertura": "1. Pastos",
              "uso": "1. Ganadería",
              "densidad": "1. Baja (Menor a 0,5 Km\/Km2)",
              "frecuencia": "1. Muy Alta (>40 #Frec\/Km2)",
              "textura": "1. Gruesa",
              "patron": "1. Dendrítico",
              "tipoerosion": "1. Laminar",
              "espaciamiento": "1. (Menor a 5 m)",
              "intensidaderosion": "1. Suave",
              "actividad": "1. Inactiva: No presenta movimientos en masa",
              'activo': false
            }
          }
        }
        else{
          formatosSGMF[i]['SGMF']['SGMF_'+j] = {
            "codigonuevaSGMF": "",
            "coberturaotro": "",
            "usootro": "",
            "patronotro": "",
            "tiporoca": "1. Ígnea ácida",
            "gradometeor": "1. Fresca",
            "gradofractura": "1. Roca Sana",
            "tiposuelo": "1. Antrópico",
            "tamanograno": "1. Grueso",
            "tiporelieve": "1. Montañoso (>500 m)",
            "indicerelieve": "1. Muy bajo (Menor a 50 m)",
            "inclinacionladera": "1. Plana a suave (Menores a 5°)",
            "longiladera": "1. Muy corta (Menor a 50 m)",
            "formaladera": "1. Rectilínea",
            "formacresta": "1. Aguda",
            "formavalle": "1. Artesa",
            "cobertura": "1. Pastos",
            "uso": "1. Ganadería",
            "densidad": "1. Baja (Menor a 0,5 Km\/Km2)",
            "frecuencia": "1. Muy Alta (>40 #Frec\/Km2)",
            "textura": "1. Gruesa",
            "patron": "1. Dendrítico",
            "tipoerosion": "1. Laminar",
            "espaciamiento": "1. (Menor a 5 m)",
            "intensidaderosion": "1. Suave",
            "actividad": "1. Inactiva: No presenta movimientos en masa",
            'activo': false
          }

        }
      
      }

    }

    // for (let i = 0; i < formCATALOGOcount; i++) {
    //   if (estaciones['estacion_'+id]['Formularios']['Form_CATALOGO']['Form_CATALOGO_'+i]['activo']) {
    //     formFormatos['Form_CATALOGO']['Form_CATALOGO_'+i]=formatosCATALOGO[i];
    //   }else{
    //     formFormatos['Form_CATALOGO']['Form_CATALOGO_'+i] = {
    //       "IMPORTANC": "",
    //       'activo': false,
    //       "DANOS": {'count': 0},
    //       "FECHA_FUENTE": "",
    //       "ConfiFechaMM": "",
    //       "NOM_MUN": "",
    //       "SUBTIPO_1": "No Aplica",
    //       "SUBTIPO_2": "No Aplica",
    //       "ID_PARTE": "",
    //       "ENCUESTAD": "",
    //       "FECHA_MOV": "",
    //       "FECHA_REP": "",
    //       "COD_SIMMA": "",
    //       "VEREDA": "",
    //       "SITIO": "",
    //       "REF_GEOGRF": "",
    //       "HERIDOS": "",
    //       "VIDAS": "",
    //       "DESAPARECIDOS": "",
    //       "PERSONAS": "",
    //       "FAMILIAS": "",
    //       "sensoresremotos": "",
    //       "FTE_INFSEC": "",
    //       "notas": "",
    //       "TIPO_MOV2": "No Aplica",
    //       "TIPO_MOV1": "No Aplica"
    //     }
    //   }
    //   var auxDiscount = estaciones['estacion_'+id]['Formularios']['Form_CATALOGO']['Form_CATALOGO_'+i]['DANOS']['count'];

    //   for (let j = 1; j < auxDiscount+1; j++) {
        
    //     if (estaciones['estacion_'+id]['Formularios']['Form_CATALOGO']['Form_CATALOGO_'+i]['activo']) {
    //       if (estaciones['estacion_'+id]['Formularios']['Form_CATALOGO']['Form_CATALOGO_'+i]['DANOS']['DANOS_'+j]['activo']) {
    //       }
    //       else{
    //         formatosCATALOGO[i]['DANOS']['DANOS_'+j] = {
    //           "clasedano": "I: Infraestructura",
    //           "tiposdano": "DL: Daño leve",
    //           "tipodano": "",
    //           "cantidaddano": "",
    //           "unidaddano": "",
    //           "valordano": "",
    //           'activo': false
    //         }
    //       }
    //     }
    //     else{
    //       formatosCATALOGO[i]['DANOS']['DANOS_'+j] = {
    //         "clasedano": "I: Infraestructura",
    //         "tiposdano": "DL: Daño leve",
    //         "tipodano": "",
    //         "cantidaddano": "",
    //         "unidaddano": "",
    //         "valordano": "",
    //         'activo': false
    //       }

    //     }
      
    //   }

    // }

    for (let i = 0; i < formINVENTARIOcount; i++) {
      if (estaciones['estacion_'+id]['Formularios']['Form_INVENTARIO']['Form_INVENTARIO_'+i]['activo']) {
        formFormatos['Form_INVENTARIO']['Form_INVENTARIO_'+i]=formatosINVENTARIO[i];
      }else{
        formFormatos['Form_INVENTARIO']['Form_INVENTARIO_'+i] = {
          "AREA": "",
          "ConfiFecha": "Certeza mes y año",
          "DISTRIBUC": "Decreciente",
          "ENCUESTAD": "",
          "ESTADO_ACT": "Abandonado",
          "ESTILO": "Compuesto",
          "FECHA_MOV": "",
          "FECHA_REP": "",
          "FTE_INFSEC": "",
          "ID_FORM": "",
          "ID_MM": "",
          "ID_PARTE": "",
          "NOM_DEP": "ANTIOQUIA",
          "OBSERVACION": "",
          "PARTE": "",
          "SUBTIPO_1": "Deslizamiento rotacional",
          "SUBTIPO_2": "Deslizamiento rotacional",
          "TIPO_MOV1": "No Aplica",
          "TIPO_MOV2": "No Aplica",
          "VEREDA": "PLAYA RICA",
          "VERIFICADO": "NO",
          "activo": false
        }
      }
      // var auxDiscount = estaciones['estacion_'+id]['Formularios']['Form_INVENTARIO']['Form_INVENTARIO_'+i]['DANOS']['count'];
      // var auxFotocount = estaciones['estacion_'+id]['Formularios']['Form_INVENTARIO']['Form_INVENTARIO_'+i]['FotosAnexas']['count'];
      // for (let j = 1; j < auxDiscount+1; j++) {
        
      //   if (estaciones['estacion_'+id]['Formularios']['Form_INVENTARIO']['Form_INVENTARIO_'+i]['activo']) {
      //     if (estaciones['estacion_'+id]['Formularios']['Form_INVENTARIO']['Form_INVENTARIO_'+i]['DANOS']['DANOS_'+j]['activo']) {
      //     }
      //     else{
      //       formatosINVENTARIO[i]['DANOS']['DANOS_'+j] = {
      //         "clasedano": "I: Infraestructura",
      //         "tiposdano": "DL: Daño leve",
      //         "tipodano": "",
      //         "cantidaddano": "",
      //         "unidaddano": "",
      //         "valordano": "",
      //         'activo': false
      //       }
      //     }
      //   }
      //   else{
      //     formatosINVENTARIO[i]['DANOS']['DANOS_'+j] = {
      //       "clasedano": "I: Infraestructura",
      //       "tiposdano": "DL: Daño leve",
      //       "tipodano": "",
      //       "cantidaddano": "",
      //       "unidaddano": "",
      //       "valordano": "",
      //       'activo': false
      //     }

      //   }
      
      // }
      // for (let j = 1; j < auxFotocount+1; j++) {
        
      //   if (estaciones['estacion_'+id]['Formularios']['Form_INVENTARIO']['Form_INVENTARIO_'+i]['activo']) {
      //     if (estaciones['estacion_'+id]['Formularios']['Form_INVENTARIO']['Form_INVENTARIO_'+i]['FotosAnexas']['FotoAnexa_'+j]['activo']) {
            
      //     }
      //     else{
      //       formatosINVENTARIO[i]['FotosAnexas']['FotoAnexa_'+j] = {
      //         "autorFotosAnexas": "",
      //         "fechaFotosAnexas": "",
      //         'nombreFotosAnexasINV': '',
      //         'obsFotosAnexas': '',
      //         'activo': false
      //       }
      //     }
      //   }
      //   else{
      //     formatosINVENTARIO[i]['FotosAnexas']['FotoAnexa_'+j] = {
      //       "autorFotosAnexas": "",
      //       "fechaFotosAnexas": "",
      //       'nombreFotosAnexasINV': '',
      //       'obsFotosAnexas': '',
      //       'activo': false
      //     }
      //   }

      //   //console.log(formatosUGSR[i]['FotosAnexas']['FotoAnexa_'+j]);
      // }

    }

    // for (let i = 0; i < formUSOScount; i++) {
    //   if (estaciones['estacion_'+id]['Formularios']['Form_USOS']['Form_USOS_'+i]['activo']) {
    //     formFormatos['Form_USOS']['Form_USOS_'+i] = formatosUSOS[i];
    //   }else{
    //     formFormatos['Form_USOS']['Form_USOS_'+i] = {
    //       "PUNTO": "",
    //         "ESTE": "",
    //         "NORTE": "",
    //         "FotosPunto": "",
    //         "COBERTURA": "",
    //         "OBS_USOS": "",
    //         "USO_SUELO": "",
    //         "DENSIDAD_SIEMBRA": "",
    //         "INTENSIDAD_USO": "",
    //         "TECNICAS_PROD": "",
    //         "ARREGLO_ESP": "",
    //         "RIEGO": "",
    //         "TIPO_ESTAB": "",
    //         "DIR_SIEMBRA": "",
    //         "QUEMA": "",
    //         "ACT_PECUARIA": "",
    //         "REST_USO": "",
    //         "AFECTACION": "",
    //         "COBERTURA_INT": "",
    //         "FotosURL" : {"count": 0},
    //         'activo': false
    //     }
    //   }
    //   var auxDiscount = estaciones['estacion_'+id]['Formularios']['Form_USOS']['Form_USOS_'+i]['PUNTOS']['count'];
      
    //   for (let j = 1; j < auxDiscount+1; j++) {
        
    //     if (estaciones['estacion_'+id]['Formularios']['Form_USOS']['Form_USOS_'+i]['activo']) {
    //       if (estaciones['estacion_'+id]['Formularios']['Form_USOS']['Form_USOS_'+i]['PUNTOS']['PUNTO_'+j]['activo']) {
    //       }
    //       else{
    //         formatosUSOS[i]['PUNTOS']['PUNTO_'+j] = {
    //           "PUNTO": "",
    //           "ESTE": "",
    //           "NORTE": "",
    //           "FotosPunto": "",
    //           "COBERTURA": "",
    //           "OBS_USOS": "",
    //           "USO_SUELO": "",
    //           "DENSIDAD_SIEMBRA": "",
    //           "INTENSIDAD_USO": "",
    //           "TECNICAS_PROD": "",
    //           "ARREGLO_ESP": "",
    //           "RIEGO": "",
    //           "TIPO_ESTAB": "",
    //           "DIR_SIEMBRA": "",
    //           "QUEMA": "",
    //           "ACT_PECUARIA": "",
    //           "REST_USO": "",
    //           "AFECTACION": "",
    //           "COBERTURA_INT": "",
    //           "FotosURL" : {"count": 0},
    //           'activo': false
    //         }
    //       }
    //     }
    //     else{
    //       formatosUSOS[i]['PUNTOS']['PUNTO_'+j] = {
    //         "PUNTO": "",
    //         "ESTE": "",
    //         "NORTE": "",
    //         "FotosPunto": "",
    //         "COBERTURA": "",
    //         "OBS_USOS": "",
    //         "USO_SUELO": "",
    //         "DENSIDAD_SIEMBRA": "",
    //         "INTENSIDAD_USO": "",
    //         "TECNICAS_PROD": "",
    //         "ARREGLO_ESP": "",
    //         "RIEGO": "",
    //         "TIPO_ESTAB": "",
    //         "DIR_SIEMBRA": "",
    //         "QUEMA": "",
    //         "ACT_PECUARIA": "",
    //         "REST_USO": "",
    //         "AFECTACION": "",
    //         "COBERTURA_INT": "",
    //         "FotosURL" : {"count": 0},
    //         'activo': false
    //       }

    //     }
      
    //   }

    // }
  }
  else {
    for (let i = 0; i < formUGSRcount; i++) {
      formFormatos['Form_UGS_Rocas']['Form_UGS_Rocas_'+i]=formatosUGSR[i];
    }
    for (let i = 0; i < formUGSScount; i++) {
      formFormatos['Form_UGS_Suelos']['Form_UGS_Suelos_'+i]=formatosUGSS[i];
    }
    for (let i = 0; i < formSGMFcount; i++) {
      formFormatos['Form_SGMF']['Form_SGMF_'+i]=formatosSGMF[i];
    }
    // for (let i = 0; i < formCATALOGOcount; i++) {
    //   formFormatos['Form_CATALOGO']['Form_CATALOGO_'+i]=formatosCATALOGO[i];
    // }
    for (let i = 0; i < formINVENTARIOcount; i++) {
      formFormatos['Form_INVENTARIO']['Form_INVENTARIO_'+i]=formatosINVENTARIO[i];
    }
    // for (let i = 0; i < formUSOScount; i++) {
    //   formFormatos['Form_USOS']['Form_USOS_'+i] = formatosUSOS[i];
    // }
  }
  
  return formFormatos;
  
}

function SubirFotosAnexas(idEstacion, isEdit) {
  
  var auxCountGenerales = 0;
  var auxCountGeneralesEdit = 0;
  var auxCountLibreta = 0;
  var auxCountLibretaEdit = 0;
  // var auxCountUGSR = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  // var auxCountUGSREdit = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  // var auxCountUGSS = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  // var auxCountUGSSEdit = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  // var auxCountSGMF = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  // var auxCountSGMFEdit = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  // var auxCountINV = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  // var auxCountINVEdit = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  // var auxCountUSOS = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
  // var auxCountUSOSEdit = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

  var auxVaciaGenerales = false;
  var auxVaciaLibreta = false;
  // var auxVaciaUGSR = false;
  // var auxVaciaUGSS = false;
  // var auxVaciaSGMF = false;
  // var auxVaciaINV = false;
  // var auxVaciaUSOS = false;

  if (isEdit) {
    
    for (const attr in FotosAnexasFiles) {
      var auxAttrFotos = attr.split("_");
      if (auxAttrFotos[0] == 'Generales') {
        
        if (estaciones["estacion_"+idEstacion]['FotosGenerales'] === undefined) {
          auxVaciaGenerales = true;
          estaciones["estacion_"+idEstacion]['FotosGenerales'] = {'FotosURL':{}};
        }
        if (auxVaciaGenerales) {
          auxCountGenerales++;
        }
        else{
          auxCountGenerales = estaciones["estacion_"+idEstacion]['FotosGenerales']['FotosURL']['count'];
          auxCountGeneralesEdit++;
        }

      }
      if (auxAttrFotos[0] == 'Libreta') {
        if (estaciones["estacion_"+idEstacion]['FotosLibreta'] == undefined) {
          auxVaciaLibreta = true;
          estaciones["estacion_"+idEstacion]['FotosLibreta'] = {'FotosURL':{}};
        }
        if (auxVaciaLibreta) {
          auxCountLibreta++;
        }
        else{
          auxCountLibreta = estaciones["estacion_"+idEstacion]['FotosLibreta']['FotosURL']['count'];
          auxCountLibretaEdit++;
        }
      }
      // if (auxAttrFotos[0] == 'UGSR') {

      //   if (estaciones["estacion_"+idEstacion]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+auxAttrFotos[2]]['FotosAnexas']['FotosURL'] == undefined) {
      //     auxVaciaUGSR = true;
      //     estaciones["estacion_"+idEstacion]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+auxAttrFotos[2]]['FotosAnexas']['FotosURL'] = {};
      //   }
      //   if (auxVaciaUGSR) {
      //     auxCountUGSR[auxAttrFotos[2]]++;
      //   }
      //   else{
      //     auxCountUGSR[auxAttrFotos[2]] = estaciones["estacion_"+idEstacion]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+auxAttrFotos[2]]['FotosAnexas']['FotosURL']['count'];
      //     auxCountUGSREdit[auxAttrFotos[2]]++;
      //   }
        
      // }
      // if (auxAttrFotos[0] == 'UGSS') {

      //   if (estaciones["estacion_"+idEstacion]['Formularios']['Form_UGS_Suelos']['Form_UGS_Suelos_'+auxAttrFotos[2]]['FotosAnexas']['FotosURL'] == undefined) {
      //     auxVaciaUGSS = true;
      //     estaciones["estacion_"+idEstacion]['Formularios']['Form_UGS_Suelos']['Form_UGS_Suelos_'+auxAttrFotos[2]]['FotosAnexas']['FotosURL'] = {};
      //   }
      //   if (auxVaciaUGSS) {
      //     auxCountUGSS[auxAttrFotos[2]]++;
      //   }
      //   else{
      //     auxCountUGSS[auxAttrFotos[2]] = estaciones["estacion_"+idEstacion]['Formularios']['Form_UGS_Suelos']['Form_UGS_Suelos_'+auxAttrFotos[2]]['FotosAnexas']['FotosURL']['count'];
      //     auxCountUGSSEdit[auxAttrFotos[2]]++;
      //   }
        
      // }
      // if (auxAttrFotos[0] == 'SGMF') {

      //   if (estaciones["estacion_"+idEstacion]['Formularios']['Form_SGMF']['Form_SGMF_'+auxAttrFotos[2]]['FotosAnexas']['FotosURL'] == undefined) {
      //     auxVaciaSGMF = true;
      //     estaciones["estacion_"+idEstacion]['Formularios']['Form_SGMF']['Form_SGMF_'+auxAttrFotos[2]]['FotosAnexas']['FotosURL'] = {};
      //   }
      //   if (auxVaciaSGMF) {
      //     auxCountSGMF[auxAttrFotos[2]]++;
      //   }
      //   else{
      //     auxCountSGMF[auxAttrFotos[2]] = estaciones["estacion_"+idEstacion]['Formularios']['Form_SGMF']['Form_SGMF_'+auxAttrFotos[2]]['FotosAnexas']['FotosURL']['count'];
      //     auxCountSGMFEdit[auxAttrFotos[2]]++;
      //   }
        
      // }
      // if (auxAttrFotos[0] == 'INV') {

      //   if (estaciones["estacion_"+idEstacion]['Formularios']['Form_INVENTARIO']['Form_INVENTARIO_'+auxAttrFotos[2]]['FotosAnexas']['FotosURL'] == undefined) {
      //     auxVaciaINV = true;
      //     estaciones["estacion_"+idEstacion]['Formularios']['Form_INVENTARIO']['Form_INVENTARIO_'+auxAttrFotos[2]]['FotosAnexas']['FotosURL'] = {};
      //   }
      //   if (auxVaciaINV) {
      //     auxCountINV[auxAttrFotos[2]]++;
      //   }
      //   else{
      //     auxCountINV[auxAttrFotos[2]] = estaciones["estacion_"+idEstacion]['Formularios']['Form_INVENTARIO']['Form_INVENTARIO_'+auxAttrFotos[2]]['FotosAnexas']['FotosURL']['count'];
      //     auxCountINVEdit[auxAttrFotos[2]]++;
      //   }
        
      // }
      // if (auxAttrFotos[0] == 'USOS') {

      //   if (estaciones["estacion_"+idEstacion]['Formularios']['Form_USOS']['Form_USOS_'+auxAttrFotos[3]]['PUNTOS']['PUNTO_'+auxAttrFotos[2]]['FotosURL'] == undefined) {
      //     auxVaciaUSOS = true;
      //     estaciones["estacion_"+idEstacion]['Formularios']['Form_USOS']['Form_USOS_'+auxAttrFotos[3]]['PUNTOS']['PUNTO_'+auxAttrFotos[2]]['FotosURL'] = {"count":0};
      //   }
      //   if (auxVaciaUSOS) {
      //     auxCountUSOS[auxAttrFotos[3]][auxAttrFotos[2]]++;
      //   }
      //   else{
      //     auxCountUSOS[auxAttrFotos[3]][auxAttrFotos[2]] = estaciones["estacion_"+idEstacion]['Formularios']['Form_USOS']['Form_USOS_'+auxAttrFotos[3]]['PUNTOS']['PUNTO_'+auxAttrFotos[2]]['FotosURL']['count'];
      //     auxCountUSOSEdit[auxAttrFotos[3]][auxAttrFotos[2]]++;
      //   }
        
      // }

    } 
    
  }
  else{

    auxVaciaGenerales = true;
    auxVaciaLibreta = true;
    // auxVaciaUGSR = true;
    // auxVaciaUGSS = true;
    // auxVaciaSGMF = true;
    // auxVaciaINV = true;

    for (const attr in FotosAnexasFiles) {
      var auxAttrFotos = attr.split("_");
      if (auxAttrFotos[0] == 'Generales') {
        auxCountGenerales++;
        estaciones["estacion_"+idEstacion]['FotosGenerales'] = {'FotosURL':{}};
      }
      if (auxAttrFotos[0] == 'Libreta') {
        auxCountLibreta++;
        estaciones["estacion_"+idEstacion]['FotosLibreta'] = {'FotosURL':{}};
      }
      // if (auxAttrFotos[0] == 'UGSR') {
      //   auxCountUGSR[auxAttrFotos[2]]++;
      //   estaciones["estacion_"+idEstacion]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+auxAttrFotos[2]]['FotosAnexas']['FotosURL'] = {};
      // }
      // if (auxAttrFotos[0] == 'UGSS') {
      //   auxCountUGSS[auxAttrFotos[2]]++;
      //   estaciones["estacion_"+idEstacion]['Formularios']['Form_UGS_Suelos']['Form_UGS_Suelos_'+auxAttrFotos[2]]['FotosAnexas']['FotosURL'] = {};
      // }
      // if (auxAttrFotos[0] == 'SGMF') {
      //   auxCountSGMF[auxAttrFotos[2]]++;
      //   estaciones["estacion_"+idEstacion]['Formularios']['Form_SGMF']['Form_SGMF_'+auxAttrFotos[2]]['FotosAnexas']['FotosURL'] = {};
      // }
      // if (auxAttrFotos[0] == 'INVENTARIO') {
      //   auxCountINV[auxAttrFotos[2]]++;
      //   estaciones["estacion_"+idEstacion]['Formularios']['Form_INVENTARIO']['Form_INVENTARIO_'+auxAttrFotos[2]]['FotosAnexas']['FotosURL'] = {};
      // }
    }

  }

  for (const attr in FotosAnexasFiles) {
    var auxAttrFotos = attr.split("_");
    var auxFotoAnexaSubir = FotosAnexasFiles[attr];
    if (auxAttrFotos[0] == 'Generales') {

      const auxcountFoto = auxAttrFotos[1];
      const auxcountFotoCorregido = parseInt(auxAttrFotos[1]) + auxCountGenerales;

      // Upload file and metadata to the object 'images/mountains.jpg'
      const uploadTask = storageRef.child('EstacionesCampo/estacion_'+idEstacion+'/FotosGenerales/'+auxFotoAnexaSubir.name).put(auxFotoAnexaSubir);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          notice('foto '+auxcountFotoCorregido+' cargando: '+ progress + '% done', {
            type: 'info', 
            position: 'topcenter', 
            appendType: 'append',
            closeBtn: false,
            autoClose: 1000,
            className: '',
          })
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          notice('Error al cargar la foto', {
            type: 'alert', 
            position: 'topcenter', 
            appendType: 'append',
            closeBtn: false,
            autoClose: 1000,
            className: '',
          })
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break;
            case 'storage/canceled':
              // User canceled the upload
              break;

            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('File available at', downloadURL);
            if (auxVaciaGenerales) {
              estaciones["estacion_"+idEstacion]['FotosGenerales']['FotosURL']['Foto_'+auxcountFoto] = downloadURL;
              estaciones["estacion_"+idEstacion]['FotosGenerales']['FotosURL']['FotoActivo_'+auxcountFoto] = true;
              estaciones["estacion_"+idEstacion]['FotosGenerales']['FotosURL']['count'] = auxCountGenerales;
            
              database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/FotosGenerales/FotosURL/Foto_'+auxcountFoto).set(downloadURL);
              database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/FotosGenerales/FotosURL/FotoActivo_'+auxcountFoto).set(true);
              database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/FotosGenerales/FotosURL/count').set(auxCountGenerales);

              notice(`Cargada la foto ${auxcountFoto} de la estación ${idEstacion}`, {
                type: 'success', 
                position: 'topright', 
                appendType: 'append',
                closeBtn: false,
                autoClose: 5000,
                className: '',
              })
            }
            else{
              const auxCountDefinitivo = auxCountGenerales + auxCountGeneralesEdit;
              
              estaciones["estacion_"+idEstacion]['FotosGenerales']['FotosURL']['Foto_'+auxcountFotoCorregido] = downloadURL;
              estaciones["estacion_"+idEstacion]['FotosGenerales']['FotosURL']['FotoActivo_'+auxcountFotoCorregido] = true;
              estaciones["estacion_"+idEstacion]['FotosGenerales']['FotosURL']['count'] = auxCountDefinitivo;
              
              database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/FotosGenerales/FotosURL/Foto_'+auxcountFotoCorregido).set(downloadURL);
              database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/FotosGenerales/FotosURL/FotoActivo_'+auxcountFotoCorregido).set(true);
              database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/FotosGenerales/FotosURL/count').set(auxCountDefinitivo);
            
              notice(`Cargada la foto ${auxcountFotoCorregido} de la estación ${idEstacion}`, {
                type: 'success', 
                position: 'topright', 
                appendType: 'append',
                closeBtn: false,
                autoClose: 5000,
                className: '',
              })
            }
          });
        }
      );



    }
    if (auxAttrFotos[0] == 'Libreta') {

      const auxcountFoto = auxAttrFotos[1];
      const auxcountFotoCorregido = parseInt(auxAttrFotos[1]) + auxCountLibreta;

      // Upload file and metadata to the object 'images/mountains.jpg'
      const uploadTask = storageRef.child('EstacionesCampo/estacion_'+idEstacion+'/FotosLibreta/'+auxFotoAnexaSubir.name).put(auxFotoAnexaSubir);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          notice('foto '+auxcountFotoCorregido+' cargando: '+ progress + '% done', {
            type: 'info', 
            position: 'topcenter', 
            appendType: 'append',
            closeBtn: false,
            autoClose: 1000,
            className: '',
          })
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          notice('Error al cargar la foto', {
            type: 'alert', 
            position: 'topcenter', 
            appendType: 'append',
            closeBtn: false,
            autoClose: 1000,
            className: '',
          })
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          notification.alert('Fotos', 'Error al cargar');
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break;
            case 'storage/canceled':
              // User canceled the upload
              break;

            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('File available at', downloadURL);
            if (auxVaciaLibreta) {
              estaciones["estacion_"+idEstacion]['FotosLibreta']['FotosURL']['Foto_'+auxcountFoto] = downloadURL;
              estaciones["estacion_"+idEstacion]['FotosLibreta']['FotosURL']['FotoActivo_'+auxcountFoto] = true;
              estaciones["estacion_"+idEstacion]['FotosLibreta']['FotosURL']['count'] = auxCountLibreta;
            
              database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/FotosLibreta/FotosURL/Foto_'+auxcountFoto).set(downloadURL);
              database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/FotosLibreta/FotosURL/FotoActivo_'+auxcountFoto).set(true);
              database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/FotosLibreta/FotosURL/count').set(auxCountLibreta);

              notice(`Cargada la foto ${auxcountFoto} de la Libreta de la estación ${idEstacion}`, {
                type: 'success', 
                position: 'topright', 
                appendType: 'append',
                closeBtn: false,
                autoClose: 5000,
                className: '',
              })

            }
            else{
              const auxCountDefinitivo = auxCountLibreta + auxCountLibretaEdit;
              
              estaciones["estacion_"+idEstacion]['FotosLibreta']['FotosURL']['Foto_'+auxcountFotoCorregido] = downloadURL;
              estaciones["estacion_"+idEstacion]['FotosLibreta']['FotosURL']['FotoActivo_'+auxcountFotoCorregido] = true;
              estaciones["estacion_"+idEstacion]['FotosLibreta']['FotosURL']['count'] = auxCountDefinitivo;
              
              database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/FotosLibreta/FotosURL/Foto_'+auxcountFotoCorregido).set(downloadURL);
              database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/FotosLibreta/FotosURL/FotoActivo_'+auxcountFotoCorregido).set(true);
              database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/FotosLibreta/FotosURL/count').set(auxCountDefinitivo);
            
              notice(`Cargada la foto ${auxcountFotoCorregido} de la Libreta de la estación ${idEstacion}`, {
                type: 'success', 
                position: 'topright', 
                appendType: 'append',
                closeBtn: false,
                autoClose: 5000,
                className: '',
              })
            }
          });
        }
      );
    }

    // if (auxAttrFotos[0] == 'UGSR') {
    //   const auxcountFoto = parseInt(auxAttrFotos[1])-1;
    //   const auxcountFotoCorregido = auxcountFoto;
    //   const auxcountForm = auxAttrFotos[2];

    //   // Upload file and metadata to the object 'images/mountains.jpg'
    //   const uploadTask = storageRef.child('EstacionesCampo/estacion_'+idEstacion+'/Form_UGS_Rocas_'+auxcountForm+'/'+auxFotoAnexaSubir.name).put(auxFotoAnexaSubir);

    //   // Listen for state changes, errors, and completion of the upload.
    //   uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    //     (snapshot) => {
    //       // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //       var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //       console.log('Upload is ' + progress + '% done');
    //       switch (snapshot.state) {
    //         case firebase.storage.TaskState.PAUSED: // or 'paused'
    //           console.log('Upload is paused');
    //           break;
    //         case firebase.storage.TaskState.RUNNING: // or 'running'
    //           console.log('Upload is running');
    //           break;
    //       }
    //     },
    //     (error) => {
    //       // A full list of error codes is available at
    //       // https://firebase.google.com/docs/storage/web/handle-errors
    //       switch (error.code) {
    //         case 'storage/unauthorized':
    //           // User doesn't have permission to access the object
    //           break;
    //         case 'storage/canceled':
    //           // User canceled the upload
    //           break;

    //         case 'storage/unknown':
    //           // Unknown error occurred, inspect error.serverResponse
    //           break;
    //       }
    //     },
    //     () => {
    //       // Upload completed successfully, now we can get the download URL
    //       uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
    //         console.log('File available at', downloadURL);
    //         if (auxVaciaUGSR) {
    //           estaciones["estacion_"+idEstacion]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+auxcountForm]['FotosAnexas']['FotosURL']['Foto_'+auxcountFoto] = downloadURL;
    //           estaciones["estacion_"+idEstacion]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+auxcountForm]['FotosAnexas']['FotosURL']['FotoActivo_'+auxcountFoto] = true;
    //           estaciones["estacion_"+idEstacion]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+auxcountForm]['FotosAnexas']['FotosURL']['count'] = auxCountUGSR[auxcountForm];
  
    //           database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/Formularios/Form_UGS_Rocas/Form_UGS_Rocas_'+auxcountForm+'/FotosAnexas/FotosURL/Foto_'+auxcountFoto).set(downloadURL);
    //           database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/Formularios/Form_UGS_Rocas/Form_UGS_Rocas_'+auxcountForm+'/FotosAnexas/FotosURL/FotoActivo_'+auxcountFoto).set(true);
    //           database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/Formularios/Form_UGS_Rocas/Form_UGS_Rocas_'+auxcountForm+'/FotosAnexas/FotosURL/count').set(auxCountUGSR[auxcountForm]);
             
    //           notice(`Cargada la foto ${auxcountFoto} del formato UGSR ${auxcountForm} de la estación ${idEstacion}`, {
    //             type: 'success', 
    //             position: 'topright', 
    //             appendType: 'append',
    //             closeBtn: false,
    //             autoClose: 5000,
    //             className: '',
    //           })

    //         }
    //         else{
    //           const auxCountDefinitivo = auxCountUGSR[auxcountForm] + auxCountUGSREdit[auxcountForm];

    //           estaciones["estacion_"+idEstacion]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+auxcountForm]['FotosAnexas']['FotosURL']['Foto_'+auxcountFotoCorregido] = downloadURL;
    //           estaciones["estacion_"+idEstacion]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+auxcountForm]['FotosAnexas']['FotosURL']['FotoActivo_'+auxcountFotoCorregido] = true;
    //           estaciones["estacion_"+idEstacion]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+auxcountForm]['FotosAnexas']['FotosURL']['count'] = auxCountDefinitivo;

    //           database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/Formularios/Form_UGS_Rocas/Form_UGS_Rocas_'+auxcountForm+'/FotosAnexas/FotosURL/Foto_'+auxcountFotoCorregido).set(downloadURL);
    //           database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/Formularios/Form_UGS_Rocas/Form_UGS_Rocas_'+auxcountForm+'/FotosAnexas/FotosURL/FotoActivo_'+auxcountFotoCorregido).set(true);
    //           database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/Formularios/Form_UGS_Rocas/Form_UGS_Rocas_'+auxcountForm+'/FotosAnexas/FotosURL/count').set(auxCountDefinitivo);
            
    //           notice(`Cargada la foto ${auxcountFotoCorregido} del formato UGSR ${auxcountForm} de la estación ${idEstacion}`, {
    //             type: 'success', 
    //             position: 'topright', 
    //             appendType: 'append',
    //             closeBtn: false,
    //             autoClose: 5000,
    //             className: '',
    //           })
            
    //         }

    //       });
    //     }
    //   );



    // }
    // if (auxAttrFotos[0] == 'UGSS') {
    //   const auxcountFoto = parseInt(auxAttrFotos[1])-1;
    //   const auxcountFotoCorregido = auxcountFoto;
    //   const auxcountForm = auxAttrFotos[2];

    //   // Upload file and metadata to the object 'images/mountains.jpg'
    //   const uploadTask = storageRef.child('EstacionesCampo/estacion_'+idEstacion+'/Form_UGS_Suelos_'+auxcountForm+'/'+auxFotoAnexaSubir.name).put(auxFotoAnexaSubir);

    //   // Listen for state changes, errors, and completion of the upload.
    //   uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    //     (snapshot) => {
    //       // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //       var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //       console.log('Upload is ' + progress + '% done');
    //       switch (snapshot.state) {
    //         case firebase.storage.TaskState.PAUSED: // or 'paused'
    //           console.log('Upload is paused');
    //           break;
    //         case firebase.storage.TaskState.RUNNING: // or 'running'
    //           console.log('Upload is running');
    //           break;
    //       }
    //     },
    //     (error) => {
    //       // A full list of error codes is available at
    //       // https://firebase.google.com/docs/storage/web/handle-errors
    //       switch (error.code) {
    //         case 'storage/unauthorized':
    //           // User doesn't have permission to access the object
    //           break;
    //         case 'storage/canceled':
    //           // User canceled the upload
    //           break;

    //         case 'storage/unknown':
    //           // Unknown error occurred, inspect error.serverResponse
    //           break;
    //       }
    //     },
    //     () => {
    //       // Upload completed successfully, now we can get the download URL
    //       uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
    //         console.log('File available at', downloadURL);
    //         if (auxVaciaUGSS) {
    //           estaciones["estacion_"+idEstacion]['Formularios']['Form_UGS_Suelos']['Form_UGS_Suelos_'+auxcountForm]['FotosAnexas']['FotosURL']['Foto_'+auxcountFoto] = downloadURL;
    //           estaciones["estacion_"+idEstacion]['Formularios']['Form_UGS_Suelos']['Form_UGS_Suelos_'+auxcountForm]['FotosAnexas']['FotosURL']['FotoActivo_'+auxcountFoto] = true;
    //           estaciones["estacion_"+idEstacion]['Formularios']['Form_UGS_Suelos']['Form_UGS_Suelos_'+auxcountForm]['FotosAnexas']['FotosURL']['count'] = auxCountUGSS[auxcountForm];
  
    //           database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/Formularios/Form_UGS_Suelos/Form_UGS_Suelos_'+auxcountForm+'/FotosAnexas/FotosURL/Foto_'+auxcountFoto).set(downloadURL);
    //           database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/Formularios/Form_UGS_Suelos/Form_UGS_Suelos_'+auxcountForm+'/FotosAnexas/FotosURL/FotoActivo_'+auxcountFoto).set(true);
    //           database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/Formularios/Form_UGS_Suelos/Form_UGS_Suelos_'+auxcountForm+'/FotosAnexas/FotosURL/count').set(auxCountUGSS[auxcountForm]);
              
    //           notice(`Cargada la foto ${auxcountFoto} del formato UGSS ${auxcountForm} de la estación ${idEstacion}`, {
    //             type: 'success', 
    //             position: 'topright', 
    //             appendType: 'append',
    //             closeBtn: false,
    //             autoClose: 5000,
    //             className: '',
    //           })

    //         }
    //         else{
    //           const auxCountDefinitivo = auxCountUGSS[auxcountForm] + auxCountUGSSEdit[auxcountForm];

    //           estaciones["estacion_"+idEstacion]['Formularios']['Form_UGS_Suelos']['Form_UGS_Suelos_'+auxcountForm]['FotosAnexas']['FotosURL']['Foto_'+auxcountFotoCorregido] = downloadURL;
    //           estaciones["estacion_"+idEstacion]['Formularios']['Form_UGS_Suelos']['Form_UGS_Suelos_'+auxcountForm]['FotosAnexas']['FotosURL']['FotoActivo_'+auxcountFotoCorregido] = true;
    //           estaciones["estacion_"+idEstacion]['Formularios']['Form_UGS_Suelos']['Form_UGS_Suelos_'+auxcountForm]['FotosAnexas']['FotosURL']['count'] = auxCountDefinitivo;

    //           database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/Formularios/Form_UGS_Suelos/Form_UGS_Suelos_'+auxcountForm+'/FotosAnexas/FotosURL/Foto_'+auxcountFotoCorregido).set(downloadURL);
    //           database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/Formularios/Form_UGS_Suelos/Form_UGS_Suelos_'+auxcountForm+'/FotosAnexas/FotosURL/FotoActivo_'+auxcountFotoCorregido).set(true);
    //           database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/Formularios/Form_UGS_Suelos/Form_UGS_Suelos_'+auxcountForm+'/FotosAnexas/FotosURL/count').set(auxCountDefinitivo);
           
    //           notice(`Cargada la foto ${auxcountFotoCorregido} del formato UGSS ${auxcountForm} de la estación ${idEstacion}`, {
    //             type: 'success', 
    //             position: 'topright', 
    //             appendType: 'append',
    //             closeBtn: false,
    //             autoClose: 5000,
    //             className: '',
    //           })
    //         }

    //       });
    //     }
    //   );



    // }
    // if (auxAttrFotos[0] == 'SGMF') {
    //   const auxcountFoto = parseInt(auxAttrFotos[1])-1;
    //   const auxcountFotoCorregido = auxcountFoto;
    //   const auxcountForm = auxAttrFotos[2];

    //   // Upload file and metadata to the object 'images/mountains.jpg'
    //   const uploadTask = storageRef.child('EstacionesCampo/estacion_'+idEstacion+'/Form_SGMF_'+auxcountForm+'/'+auxFotoAnexaSubir.name).put(auxFotoAnexaSubir);

    //   // Listen for state changes, errors, and completion of the upload.
    //   uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    //     (snapshot) => {
    //       // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //       var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //       console.log('Upload is ' + progress + '% done');
    //       switch (snapshot.state) {
    //         case firebase.storage.TaskState.PAUSED: // or 'paused'
    //           console.log('Upload is paused');
    //           break;
    //         case firebase.storage.TaskState.RUNNING: // or 'running'
    //           console.log('Upload is running');
    //           break;
    //       }
    //     },
    //     (error) => {
    //       // A full list of error codes is available at
    //       // https://firebase.google.com/docs/storage/web/handle-errors
    //       switch (error.code) {
    //         case 'storage/unauthorized':
    //           // User doesn't have permission to access the object
    //           break;
    //         case 'storage/canceled':
    //           // User canceled the upload
    //           break;

    //         case 'storage/unknown':
    //           // Unknown error occurred, inspect error.serverResponse
    //           break;
    //       }
    //     },
    //     () => {
    //       // Upload completed successfully, now we can get the download URL
    //       uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
    //         console.log('File available at', downloadURL);
    //         if (auxVaciaSGMF) {
    //           estaciones["estacion_"+idEstacion]['Formularios']['Form_SGMF']['Form_SGMF_'+auxcountForm]['FotosAnexas']['FotosURL']['Foto_'+auxcountFoto] = downloadURL;
    //           estaciones["estacion_"+idEstacion]['Formularios']['Form_SGMF']['Form_SGMF_'+auxcountForm]['FotosAnexas']['FotosURL']['FotoActivo_'+auxcountFoto] = true;
    //           estaciones["estacion_"+idEstacion]['Formularios']['Form_SGMF']['Form_SGMF_'+auxcountForm]['FotosAnexas']['FotosURL']['count'] = auxCountSGMF[auxcountForm];
  
    //           database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/Formularios/Form_SGMF/Form_SGMF_'+auxcountForm+'/FotosAnexas/FotosURL/Foto_'+auxcountFoto).set(downloadURL);
    //           database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/Formularios/Form_SGMF/Form_SGMF_'+auxcountForm+'/FotosAnexas/FotosURL/FotoActivo_'+auxcountFoto).set(true);
    //           database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/Formularios/Form_SGMF/Form_SGMF_'+auxcountForm+'/FotosAnexas/FotosURL/count').set(auxCountSGMF[auxcountForm]);
              
    //           notice(`Cargada la foto ${auxcountFoto} del formato SGMF ${auxcountForm} de la estación ${idEstacion}`, {
    //             type: 'success', 
    //             position: 'topright', 
    //             appendType: 'append',
    //             closeBtn: false,
    //             autoClose: 5000,
    //             className: '',
    //           })
    //         }
    //         else{
    //           const auxCountDefinitivo = auxCountSGMF[auxcountForm] + auxCountSGMFEdit[auxcountForm];

    //           estaciones["estacion_"+idEstacion]['Formularios']['Form_SGMF']['Form_SGMF_'+auxcountForm]['FotosAnexas']['FotosURL']['Foto_'+auxcountFotoCorregido] = downloadURL;
    //           estaciones["estacion_"+idEstacion]['Formularios']['Form_SGMF']['Form_SGMF_'+auxcountForm]['FotosAnexas']['FotosURL']['FotoActivo_'+auxcountFotoCorregido] = true;
    //           estaciones["estacion_"+idEstacion]['Formularios']['Form_SGMF']['Form_SGMF_'+auxcountForm]['FotosAnexas']['FotosURL']['count'] = auxCountDefinitivo;

    //           database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/Formularios/Form_SGMF/Form_SGMF_'+auxcountForm+'/FotosAnexas/FotosURL/Foto_'+auxcountFotoCorregido).set(downloadURL);
    //           database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/Formularios/Form_SGMF/Form_SGMF_'+auxcountForm+'/FotosAnexas/FotosURL/FotoActivo_'+auxcountFotoCorregido).set(true);
    //           database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/Formularios/Form_SGMF/Form_SGMF_'+auxcountForm+'/FotosAnexas/FotosURL/count').set(auxCountDefinitivo);
            
    //           notice(`Cargada la foto ${auxcountFotoCorregido} del formato SGMF ${auxcountForm} de la estación ${idEstacion}`, {
    //             type: 'success', 
    //             position: 'topright', 
    //             appendType: 'append',
    //             closeBtn: false,
    //             autoClose: 5000,
    //             className: '',
    //           })
            
    //         }

    //       });
    //     }
    //   );



    // }
    // if (auxAttrFotos[0] == 'INVENTARIO') {
    //   const auxcountFoto = parseInt(auxAttrFotos[1])-1;
    //   const auxcountFotoCorregido = auxcountFoto;
    //   const auxcountForm = auxAttrFotos[2];

    //   // Upload file and metadata to the object 'images/mountains.jpg'
    //   const uploadTask = storageRef.child('EstacionesCampo/estacion_'+idEstacion+'/Form_INVENTARIO_'+auxcountForm+'/'+auxFotoAnexaSubir.name).put(auxFotoAnexaSubir);

    //   // Listen for state changes, errors, and completion of the upload.
    //   uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    //     (snapshot) => {
    //       // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //       var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //       console.log('Upload is ' + progress + '% done');
    //       switch (snapshot.state) {
    //         case firebase.storage.TaskState.PAUSED: // or 'paused'
    //           console.log('Upload is paused');
    //           break;
    //         case firebase.storage.TaskState.RUNNING: // or 'running'
    //           console.log('Upload is running');
    //           break;
    //       }
    //     },
    //     (error) => {
    //       // A full list of error codes is available at
    //       // https://firebase.google.com/docs/storage/web/handle-errors
    //       switch (error.code) {
    //         case 'storage/unauthorized':
    //           // User doesn't have permission to access the object
    //           break;
    //         case 'storage/canceled':
    //           // User canceled the upload
    //           break;

    //         case 'storage/unknown':
    //           // Unknown error occurred, inspect error.serverResponse
    //           break;
    //       }
    //     },
    //     () => {
    //       // Upload completed successfully, now we can get the download URL
    //       uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
    //         console.log('File available at', downloadURL);
    //         if (auxVaciaINV) {
    //           estaciones["estacion_"+idEstacion]['Formularios']['Form_INVENTARIO']['Form_INVENTARIO_'+auxcountForm]['FotosAnexas']['FotosURL']['Foto_'+auxcountFoto] = downloadURL;
    //           estaciones["estacion_"+idEstacion]['Formularios']['Form_INVENTARIO']['Form_INVENTARIO_'+auxcountForm]['FotosAnexas']['FotosURL']['FotoActivo_'+auxcountFoto] = true;
    //           estaciones["estacion_"+idEstacion]['Formularios']['Form_INVENTARIO']['Form_INVENTARIO_'+auxcountForm]['FotosAnexas']['FotosURL']['count'] = auxCountINV[auxcountForm];
  
    //           database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/Formularios/Form_INVENTARIO/Form_INVENTARIO_'+auxcountForm+'/FotosAnexas/FotosURL/Foto_'+auxcountFoto).set(downloadURL);
    //           database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/Formularios/Form_INVENTARIO/Form_INVENTARIO_'+auxcountForm+'/FotosAnexas/FotosURL/FotoActivo_'+auxcountFoto).set(true);
    //           database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/Formularios/Form_INVENTARIO/Form_INVENTARIO_'+auxcountForm+'/FotosAnexas/FotosURL/count').set(auxCountINV[auxcountForm]);
              
    //           notice(`Cargada la foto ${auxcountFoto} del formato INVENTARIO ${auxcountForm} de la estación ${idEstacion}`, {
    //             type: 'success', 
    //             position: 'topright', 
    //             appendType: 'append',
    //             closeBtn: false,
    //             autoClose: 5000,
    //             className: '',
    //           })


    //         }
    //         else{
    //           const auxCountDefinitivo = auxCountINV[auxcountForm] + auxCountINVEdit[auxcountForm];

    //           estaciones["estacion_"+idEstacion]['Formularios']['Form_INVENTARIO']['Form_INVENTARIO_'+auxcountForm]['FotosAnexas']['FotosURL']['Foto_'+auxcountFotoCorregido] = downloadURL;
    //           estaciones["estacion_"+idEstacion]['Formularios']['Form_INVENTARIO']['Form_INVENTARIO_'+auxcountForm]['FotosAnexas']['FotosURL']['FotoActivo_'+auxcountFotoCorregido] = true;
    //           estaciones["estacion_"+idEstacion]['Formularios']['Form_INVENTARIO']['Form_INVENTARIO_'+auxcountForm]['FotosAnexas']['FotosURL']['count'] = auxCountDefinitivo;

    //           database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/Formularios/Form_INVENTARIO/Form_INVENTARIO_'+auxcountForm+'/FotosAnexas/FotosURL/Foto_'+auxcountFotoCorregido).set(downloadURL);
    //           database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/Formularios/Form_INVENTARIO/Form_INVENTARIO_'+auxcountForm+'/FotosAnexas/FotosURL/FotoActivo_'+auxcountFotoCorregido).set(true);
    //           database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/Formularios/Form_INVENTARIO/Form_INVENTARIO_'+auxcountForm+'/FotosAnexas/FotosURL/count').set(auxCountDefinitivo);
            
    //           notice(`Cargada la foto ${auxcountFotoCorregido} del formato INVENTARIO ${auxcountForm} de la estación ${idEstacion}`, {
    //             type: 'success', 
    //             position: 'topright', 
    //             appendType: 'append',
    //             closeBtn: false,
    //             autoClose: 5000,
    //             className: '',
    //           })
    //         }

    //       });
    //     }
    //   );



    // }
    // if (auxAttrFotos[0] == 'USOS') {
    //   const auxcountFoto = parseInt(auxAttrFotos[1]);
    //   const auxcountPunto = parseInt(auxAttrFotos[2]);
    //   const auxcountForm = parseInt(auxAttrFotos[3]);
    //   const auxcountFotoCorregido = auxcountFoto + auxCountUSOS[auxcountForm][auxcountPunto];

    //   if (estaciones["estacion_"+idEstacion]['Formularios']['Form_USOS']['Form_USOS_'+auxcountForm]['PUNTOS']['PUNTO_'+auxcountPunto]['FotosURL'] === undefined) {
    //     estaciones["estacion_"+idEstacion]['Formularios']['Form_USOS']['Form_USOS_'+auxcountForm]['PUNTOS']['PUNTO_'+auxcountPunto]['FotosURL'] = {};
    //   }


    //   // Upload file and metadata to the object 'images/mountains.jpg'
    //   const uploadTask = storageRef.child('EstacionesCampo/estacion_'+idEstacion+'/Form_USOS_'+auxcountForm+'/'+auxFotoAnexaSubir.name).put(auxFotoAnexaSubir);

    //   // Listen for state changes, errors, and completion of the upload.
    //   uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    //     (snapshot) => {
    //       // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //       var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //       console.log('Upload is ' + progress + '% done');
    //       switch (snapshot.state) {
    //         case firebase.storage.TaskState.PAUSED: // or 'paused'
    //           console.log('Upload is paused');
    //           break;
    //         case firebase.storage.TaskState.RUNNING: // or 'running'
    //           console.log('Upload is running');
    //           break;
    //       }
    //     },
    //     (error) => {
    //       // A full list of error codes is available at
    //       // https://firebase.google.com/docs/storage/web/handle-errors
    //       switch (error.code) {
    //         case 'storage/unauthorized':
    //           // User doesn't have permission to access the object
    //           break;
    //         case 'storage/canceled':
    //           // User canceled the upload
    //           break;

    //         case 'storage/unknown':
    //           // Unknown error occurred, inspect error.serverResponse
    //           break;
    //       }
    //     },
    //     () => {
    //       // Upload completed successfully, now we can get the download URL
    //       uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
    //         console.log('File available at', downloadURL);
    //         if (auxVaciaUSOS) {
    //           estaciones["estacion_"+idEstacion]['Formularios']['Form_USOS']['Form_USOS_'+auxcountForm]['PUNTOS']['PUNTO_'+auxcountPunto]['FotosURL']['Foto_'+auxcountFoto] = downloadURL;
    //           estaciones["estacion_"+idEstacion]['Formularios']['Form_USOS']['Form_USOS_'+auxcountForm]['PUNTOS']['PUNTO_'+auxcountPunto]['FotosURL']['FotoActivo_'+auxcountFoto] = true;
    //           estaciones["estacion_"+idEstacion]['Formularios']['Form_USOS']['Form_USOS_'+auxcountForm]['PUNTOS']['PUNTO_'+auxcountPunto]['FotosURL']['count'] = auxCountUSOS[auxcountForm][auxcountPunto];
  
    //           database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/Formularios/Form_USOS/Form_USOS_'+auxcountForm+'/PUNTOS/PUNTO_'+auxcountPunto+'/FotosURL/Foto_'+auxcountFoto).set(downloadURL);
    //           database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/Formularios/Form_USOS/Form_USOS_'+auxcountForm+'/PUNTOS/PUNTO_'+auxcountPunto+'/FotosURL/FotoActivo_'+auxcountFoto).set(true);
    //           database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/Formularios/Form_USOS/Form_USOS_'+auxcountForm+'/PUNTOS/PUNTO_'+auxcountPunto+'/FotosURL/count').set(auxCountUSOS[auxcountForm][auxcountPunto]);
              
    //           notice(`Cargada la foto ${auxcountFoto} del punto ${auxcountPunto} de la Planilla ${auxcountForm} de la estación ${idEstacion}`, {
    //             type: 'success', 
    //             position: 'topright', 
    //             appendType: 'append',
    //             closeBtn: false,
    //             autoClose: 5000,
    //             className: '',
    //           })

    //         }
    //         else{
    //           const auxCountDefinitivo = auxCountUSOS[auxcountForm][auxcountPunto] + auxCountUSOSEdit[auxcountForm][auxcountPunto];

    //           estaciones["estacion_"+idEstacion]['Formularios']['Form_USOS']['Form_USOS_'+auxcountForm]['PUNTOS']['PUNTO_'+auxcountPunto]['FotosURL']['Foto_'+auxcountFotoCorregido] = downloadURL;
    //           estaciones["estacion_"+idEstacion]['Formularios']['Form_USOS']['Form_USOS_'+auxcountForm]['PUNTOS']['PUNTO_'+auxcountPunto]['FotosURL']['FotoActivo_'+auxcountFotoCorregido] = true;
    //           estaciones["estacion_"+idEstacion]['Formularios']['Form_USOS']['Form_USOS_'+auxcountForm]['PUNTOS']['PUNTO_'+auxcountPunto]['FotosURL']['count'] = auxCountDefinitivo;

    //           database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/Formularios/Form_USOS/Form_USOS_'+auxcountForm+'/PUNTOS/PUNTO_'+auxcountPunto+'/FotosURL/Foto_'+auxcountFotoCorregido).set(downloadURL);
    //           database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/Formularios/Form_USOS/Form_USOS_'+auxcountForm+'/PUNTOS/PUNTO_'+auxcountPunto+'/FotosURL/FotoActivo_'+auxcountFotoCorregido).set(true);
    //           database.ref().child('EstacionesCampo/estacion_'+idEstacion+'/Formularios/Form_USOS/Form_USOS_'+auxcountForm+'/PUNTOS/PUNTO_'+auxcountPunto+'/FotosURL/count').set(auxCountDefinitivo);

    //           notice(`Cargada la foto ${auxcountFotoCorregido} del punto ${auxcountPunto} de la Planilla ${auxcountForm} de la estación ${idEstacion}`, {
    //             type: 'success', 
    //             position: 'topright', 
    //             appendType: 'append',
    //             closeBtn: false,
    //             autoClose: 5000,
    //             className: '',
    //           })
    //         }

    //       });
    //     }
    //   );



    // }

  }
  

}

$('#eliminar-modal-fotosestaciones').on('shown.bs.modal', function (e) {
  $("#confir-eliminar-Fotosestaciones").text('¿Está seguro que quiere eliminar la Foto seleccionada?');
  var button = $(e.relatedTarget) // Button that triggered the modal
  const data = button.data('whatever');

  $("#btnBorrarFotoEstacion").val(data);
});
$('#eliminar-modal-fotosestaciones').on('hide.bs.modal', function (e) {
  $('body').css('overflow', 'hidden'); 
  $('#modal-estaciones').css('overflow-y', 'auto');   
});
$('#modal-estaciones').on('hide.bs.modal', function (e) {
  $('body').css('overflow', 'auto'); 
});
$("#btnBorrarFotoEstacion").click(function (e) { 
  e.preventDefault();
  var idbtnBorrar = $("#btnBorrarFotoEstacion").val();
  var idEstacionBorrarFoto = idbtnBorrar.split("_")[1];
  var idBorrarFoto = idbtnBorrar.split("_")[2];
  var tipoBorrarFoto = idbtnBorrar.split("_")[0];
  
  if (tipoBorrarFoto == "FotoGeneral") {
    estaciones["estacion_"+idEstacionBorrarFoto]["FotosGenerales"]["FotosURL"]["FotoActivo_"+idBorrarFoto] = false;
  }
  if (tipoBorrarFoto == "FotoLibreta") {
    estaciones["estacion_"+idEstacionBorrarFoto]["FotosLibreta"]["FotosURL"]["FotoActivo_"+idBorrarFoto] = false;
  }
  // if (tipoBorrarFoto == "PuntoUsos") {
  //   var idpunto = idbtnBorrar.split("_")[3];
  //   var idform = idbtnBorrar.split("_")[4];
  //   estaciones["estacion_"+idEstacionBorrarFoto]["Formularios"]["Form_USOS"]["Form_USOS_"+idform]["PUNTOS"]["PUNTO_"+idpunto]["FotosURL"]["FotoActivo_"+idBorrarFoto] = false;
  // }
  $("#"+idbtnBorrar).remove();

  $('#eliminar-modal-fotosestaciones').modal('hide');
});

var formulaMostrar = "";
var formulaJS = [];
var color =["#0c81ff","#e3bc00","#e400ff"];
var colorop = "#2cad3c";
var colorAct = 0;
var listaUGSRNueva = [];
listaUGSRNueva = listaUGSRNueva.concat(listaElementosUGSR);
listaUGSRNueva[6] = new ElementoFormato( "Horizonte",  "secuenciaestrati",  "secuenciaestratisuelor", ['VI','V','IV']);
listaUGSRNueva.push(new ElementoFormato( "Discontinuidades",  "titulito",  "", 0));
listaUGSRNueva = listaUGSRNueva.concat(listaElementosUGSRDiscont);
var listaUGSSNueva = [];
listaUGSSNueva = listaUGSSNueva.concat(listaElementosUGSS);
listaUGSSNueva[6] = new ElementoFormato( "Horizonte",  "secuenciaestrati",  "secuenciaestratisuelor", ['VI (Suelo Residual Menor a 10% F.R.*)','V (Saprolito Fino 10%-35% F.R.*)','IV (Saprolito Grueso 35%-70% F.R.*)']);
var listaSGMFNueva = [];
listaSGMFNueva = listaSGMFNueva.concat(listaElementosSGMF);
listaSGMFNueva.push(new ElementoFormato( "SGMF",  "titulito",  "", 0));
listaSGMFNueva = listaSGMFNueva.concat(listaElementosNewSGMF);

function QueryTipoForm(id) {
  // $("#tipo-form-query button").attr("disabled", "true");
  $("#operador-form-query button").removeAttr("disabled");
  $("#campos-form-query button").removeAttr("disabled");
  $("#valores-form-query button").removeAttr("disabled");
  var camposQuery = null;
  if (formulaJS.length == 0) {
    switch (id) {
      case "ugsr":
        camposQuery = listaUGSRNueva;
        formulaMostrar = ' <b style = "color: '+color[0]+'" >UGSR</b> ';
        formulaJS.push("UGSR");
        QueryOperadores("(");
        break;
      case "ugss":
        camposQuery = listaUGSSNueva;
        formulaMostrar = ' <b style = "color: '+color[0]+'" >UGSS</b> ';
        formulaJS.push("UGSS");
        QueryOperadores("(");
        break;
      case "sgmf":
        camposQuery = listaSGMFNueva;
        formulaMostrar = ' <b style = "color: '+color[0]+'" >SGMF</b> ';
        formulaJS.push("SGMF");
        QueryOperadores("(");
        break;
      case "cat":
        camposQuery = listaElementosCAT;
        formulaMostrar = ' <b style = "color: '+color[0]+'" >CATALOGO</b> ';
        formulaJS.push("CATALOGO");
        QueryOperadores("(");
        break;
      case "inv":
        camposQuery = listaElementosINV;
        formulaMostrar = ' <b style = "color: '+color[0]+'" >INVENTARIO</b> ';
        formulaJS.push("INVENTARIO");
        QueryOperadores("(");
        break;
      default:
        camposQuery = null
        break;
    }
  }
  else {
    switch (id) {
      case "ugsr":
        camposQuery = listaUGSRNueva;
        formulaMostrar += ' <b style = "color: '+colorop+'" >||</b> ';
        formulaMostrar += ' <b style = "color: '+color[0]+'" >UGSR</b> ';
        formulaJS.push("UGSR");
        QueryOperadores("(");
        break;
      case "ugss":
        camposQuery = listaUGSSNueva;
        formulaMostrar += ' <b style = "color: '+colorop+'" >||</b> ';
        formulaMostrar += ' <b style = "color: '+color[0]+'" >UGSS</b> ';
        formulaJS.push("UGSS");
        QueryOperadores("(");
        break;
      case "sgmf":
        camposQuery = listaSGMFNueva;
        formulaMostrar += ' <b style = "color: '+colorop+'" >||</b> ';
        formulaMostrar += ' <b style = "color: '+color[0]+'" >SGMF</b> ';
        formulaJS.push("SGMF");
        QueryOperadores("(");
        break;
      case "cat":
        camposQuery = listaElementosCAT;
        formulaMostrar += ' <b style = "color: '+colorop+'" >||</b> ';
        formulaMostrar += ' <b style = "color: '+color[0]+'" >CATALOGO</b> ';
        formulaJS.push("CATALOGO");
        QueryOperadores("(");
        break;
      case "inv":
        camposQuery = listaElementosINV;
        formulaMostrar += ' <b style = "color: '+colorop+'" >||</b> ';
        formulaMostrar += ' <b style = "color: '+color[0]+'" >INVENTARIO</b> ';
        formulaJS.push("INVENTARIO");
        QueryOperadores("(");
        break;
      default:
        camposQuery = null
        break;
    }
  }


  if (camposQuery != null) {
    var contentCampos = "";

    for (let i = 0; i < camposQuery.length; i++) {
      if (camposQuery[i].clase == "edittext" || camposQuery[i].clase == "edittextMM" || camposQuery[i].clase == "spinner" || camposQuery[i].clase == "spinnerMM") {
        contentCampos += '<button class="btn btn-propia m-1" id="'+id+'--'+ camposQuery[i].tag + '--'+camposQuery[i].clase+'--'+0+'" onclick="QueryCampos(id)">'+ camposQuery[i].nombre +'</button>'
      }
      else if (camposQuery[i].clase == "radiobtn" || camposQuery[i].clase == "radiobtnMM") {
          contentCampos += '<button class="btn btn-propia m-1" id="'+id+'--'+ camposQuery[i].tag +'--'+camposQuery[i].clase+'--'+1+'" onclick="QueryCampos(id)">'+ camposQuery[i].nombre +' 1</button>'
          contentCampos += '<button class="btn btn-propia m-1" id="'+id+'--'+ camposQuery[i].tag +'--'+camposQuery[i].clase+'--'+2+'" onclick="QueryCampos(id)">'+ camposQuery[i].nombre +' 2</button>'
      }
      else if (camposQuery[i].clase == "titulito") {
        contentCampos += '<h4 class="m-1 font-weight-bold">'+ camposQuery[i].nombre +'</h4>'
      }
      else if (camposQuery[i].clase == "secuenciaestrati") {
        for (let j = 0; j < camposQuery[i].stringArray.length; j++) {
          var auxindex = j + 1;
          contentCampos += '<button class="btn btn-propia m-1" id="'+id+'--'+ camposQuery[i].tag +'--'+camposQuery[i].clase+'--' + auxindex+'_orden' +'" onclick="QueryCampos(id)">'+ camposQuery[i].stringArray[j] +' Orden</button>'
          contentCampos += '<button class="btn btn-propia m-1" id="'+id+'--'+ camposQuery[i].tag +'--'+camposQuery[i].clase+'--' + auxindex+'_espesor' +'" onclick="QueryCampos(id)">'+ camposQuery[i].stringArray[j] +' Espesor</button>'
        }
      }
      else if (camposQuery[i].clase == "radiocheck" || camposQuery[i].clase == "radiocheckMM") {
        if (id === "ugss") {
          for (let j = 0; j < camposQuery[i].stringArray.length; j++) {
            contentCampos += '<button class="btn btn-propia m-1" id="'+id+'--'+ camposQuery[i].tag +'--'+camposQuery[i].clase+'--' + j+'-check_1' +'" onclick="QueryCampos(id)">'+ camposQuery[i].nombre+ ': ' + camposQuery[i].stringArray[j] +', Litología 1</button>'
            contentCampos += '<button class="btn btn-propia m-1" id="'+id+'--'+ camposQuery[i].tag +'--'+camposQuery[i].clase+'--' + j+'-check_2' +'" onclick="QueryCampos(id)">'+ camposQuery[i].nombre+ ': ' + camposQuery[i].stringArray[j] +', Litología 2</button>'
          }
        }
        if (id === "sgmf") {
          for (let j = 0; j < camposQuery[i].stringArray.length; j++) {
            contentCampos += '<button class="btn btn-propia m-1" id="'+id+'--'+ camposQuery[i].tag +'--'+camposQuery[i].clase+'--' + j+'-check' +'" onclick="QueryCampos(id)">'+ camposQuery[i].nombre.split(" (")[0]+ ': ' + camposQuery[i].stringArray[j] +'</button>'
          }
        }
        if (id === "inv") {
          if (camposQuery[i].clase == "radiocheck"){
            for (let j = 0; j < camposQuery[i].stringArray.length; j++) {
              contentCampos += '<button class="btn btn-propia m-1" id="'+id+'--'+ camposQuery[i].tag +'--'+camposQuery[i].clase+'--' + j+'-check' +'" onclick="QueryCampos(id)">'+ camposQuery[i].nombre.split(" (")[0] + ': ' + camposQuery[i].stringArray[j] +'</button>'
            }
          }
          else if (camposQuery[i].clase == "radiocheckMM"){
            if (camposQuery[i].tag == "tipomaterial") {
              for (let j = 0; j < camposQuery[i].stringArray.length; j++) {
                contentCampos += '<button class="btn btn-propia m-1" id="'+id+'--'+ camposQuery[i].tag +'--'+camposQuery[i].clase+'--' + j+'-check_1' +'" onclick="QueryCampos(id)">'+ camposQuery[i].nombre+ ': ' + camposQuery[i].stringArray[j] +', MM 1</button>'
                contentCampos += '<button class="btn btn-propia m-1" id="'+id+'--'+ camposQuery[i].tag +'--'+camposQuery[i].clase+'--' + j+'-check_2' +'" onclick="QueryCampos(id)">'+ camposQuery[i].nombre+ ': ' + camposQuery[i].stringArray[j] +', MM 2</button>'
              }
            }
            else if (camposQuery[i].tag == "causascontrideto") {
              for (let j = 0; j < camposQuery[i].stringArray.length; j++) {
                contentCampos += '<button class="btn btn-propia m-1" id="'+id+'--'+ camposQuery[i].tag +'--'+camposQuery[i].clase+'--' + j+'-check_1' +'" onclick="QueryCampos(id)">'+ camposQuery[i].nombre.split(" - ")[0]+ ': ' + camposQuery[i].stringArray[j] +'</button>'
                contentCampos += '<button class="btn btn-propia m-1" id="'+id+'--'+ camposQuery[i].tag +'--'+camposQuery[i].clase+'--' + j+'-check_2' +'" onclick="QueryCampos(id)">'+ camposQuery[i].nombre.split(" - ")[1]+ ': ' + camposQuery[i].stringArray[j] +'</button>'
              }
            }
          }
        }
      }
      else if (camposQuery[i].clase == "litologias") {
        contentCampos += '<button class="btn btn-propia m-1" id="'+id+'--'+ camposQuery[i].tag +'--'+camposQuery[i].clase+'--'+1+'_exist'+'" onclick="QueryCampos(id)">Litología 1</button>'
        contentCampos += '<button class="btn btn-propia m-1" id="'+id+'--'+ camposQuery[i].tag +'--'+camposQuery[i].clase+'--'+1+'_espesor'+'" onclick="QueryCampos(id)">Litología 1 Espesor</button>'
        contentCampos += '<button class="btn btn-propia m-1" id="'+id+'--'+ camposQuery[i].tag +'--'+camposQuery[i].clase+'--'+2+'_exist'+'" onclick="QueryCampos(id)">Litología 2</button>'
        contentCampos += '<button class="btn btn-propia m-1" id="'+id+'--'+ camposQuery[i].tag +'--'+camposQuery[i].clase+'--'+2+'_espesor'+'" onclick="QueryCampos(id)">Litología 2 Espesor</button>'
      }
      else if (camposQuery[i].clase == "multitext") {
        if (id === "ugss") {
          for (let j = 0; j < camposQuery[i].stringArray.length; j++) {
            contentCampos += '<button class="btn btn-propia m-1" id="'+id+'--'+ camposQuery[i].tag +'--'+camposQuery[i].clase+'--' + j+'_1' +'" onclick="QueryCampos(id)">'+ camposQuery[i].nombre+ ': ' + camposQuery[i].stringArray[j] +' Litología 1</button>'
            contentCampos += '<button class="btn btn-propia m-1" id="'+id+'--'+ camposQuery[i].tag +'--'+camposQuery[i].clase+'--' + j+'_2' +'" onclick="QueryCampos(id)">'+ camposQuery[i].nombre+ ': ' + camposQuery[i].stringArray[j] +' Litología 2</button>'
          }
        }
        if (id === "sgmf" || id === "inv") {
          for (let j = 0; j < camposQuery[i].stringArray.length; j++) {
            contentCampos += '<button class="btn btn-propia m-1" id="'+id+'--'+ camposQuery[i].tag +'--'+camposQuery[i].clase+'--' + j+ '_'+camposQuery[i].stringArray[j] +'" onclick="QueryCampos(id)">'+ camposQuery[i].nombre+ ': ' + camposQuery[i].stringArray[j] +'</button>'
          }
        }
      }
    }
    
    $("#campos-form-query").empty()
    $("#campos-form-query").append(contentCampos);
    $("#formula-form-query").empty()
    $("#formula-form-query").append('<p>'+ formulaMostrar +'</p>');
  }

  console.log(formulaJS);
}

function QueryOperadores(id) {
  // $("#operador-form-query button").attr("disabled", "true");
  // $("#operador-form-query button").removeAttr("disabled");
  switch (id) {
    case "(":
      switch (colorAct) {
        case 0:
          formulaMostrar += ' <b style = "color: '+color[colorAct]+'" >(</b> ';
          colorAct++;
          break;
        case 1:
          formulaMostrar += ' <b style = "color: '+color[colorAct]+'" >(</b> ';
          colorAct++;
          break;
        case 2:
          formulaMostrar += ' <b style = "color: '+color[colorAct]+'" >(</b> ';
          colorAct++;
          break;
      
        default:
          formulaMostrar += " ( ";
          colorAct++;
          break;
      }
      formulaJS.push("(")
      break;
    case ")":
      switch (colorAct) {
        case 0:
          colorAct--;
          formulaMostrar += ' <b style = "color: '+color[colorAct]+'" >)</b> ';
          break;
        case 1:
          colorAct--;
          formulaMostrar += ' <b style = "color: '+color[colorAct]+'" >)</b> ';
          break;
        case 2:
          colorAct--;
          formulaMostrar += ' <b style = "color: '+color[colorAct]+'" >)</b> ';
          break;
        default:
          colorAct--;
          formulaMostrar += " ) ";
          break;
      }
      formulaJS.push(")")
      break;
    case "&&":
      formulaMostrar += ' <b style = "color: '+colorop+'" >&&</b> ';
      formulaJS.push("&&")
      break;
    case "||":
      formulaMostrar += ' <b style = "color: '+colorop+'" >||</b> ';
      formulaJS.push("||")
      break;
    case "==":
      formulaMostrar += ' <b style = "color: '+colorop+'" >==</b> ';
      formulaJS.push("==")
      break;
    case "!=":
      formulaMostrar +=' <b style = "color: '+colorop+'" >!=</b> ';
      formulaJS.push("!=")
      break;
    case ">":
      formulaMostrar += " > ";
      formulaJS.push(">")
      break;
    case "<":
      formulaMostrar += " < ";
      formulaJS.push("<")
      break;
    case ">=":
      formulaMostrar += " >= ";
      formulaJS.push(">=")
      break;
    case "<=":
      formulaMostrar += " <= ";
      formulaJS.push("<=")
      break;
    case "includes":
      formulaMostrar += ' <b style = "color: '+colorop+'" >INCLUDES</b> ';
      formulaJS.push("includes")
      break;
    default:
      break;
  }
  if (colorAct == 0) {
    $("#operador-form-query button").attr("disabled", "true");
    $("#campos-form-query button").attr("disabled", "true");
    $("#valores-form-query button").attr("disabled", "true");
  }
  console.log(colorAct);
  $("#formula-form-query").empty()
  $("#formula-form-query").append('<p>'+ formulaMostrar +'</p>');
}

function QueryCampos(id) {
  // $("#campos-form-query button").attr("disabled", "true");
  $("#operador-form-query button").removeAttr("disabled");
  var tipoForm = id.split("--")[0];
  var tagCampo = id.split("--")[1];
  var claseCampo = id.split("--")[2];
  var numeroAuxCampo = id.split("--")[3];
  console.log(tagCampo);

  var camposQuery = [];
  var contentValor = "";
  var elementoCampo = null;
  
  switch (tipoForm) {
    case "ugsr":
      camposQuery = listaUGSRNueva;
      break;
    case "ugss":
      camposQuery = listaUGSSNueva;
      break;
    case "sgmf":
      camposQuery = listaSGMFNueva;
      break;
    case "cat":
      camposQuery = listaElementosCAT;
      break;
    case "inv":
      camposQuery = listaElementosINV;
      break;
    default:
      camposQuery = []
      break;
  }

  elementoCampo = camposQuery.find((elemento) => elemento.tag == tagCampo);
  console.log(elementoCampo);
  console.log(elementoCampo.clase);
  if (elementoCampo != null) {
    if (elementoCampo.clase === "edittext" || elementoCampo.clase === "edittextMM") {
      contentValor = '<input id="valor-form_edit" type="text" class="form-control w-75 d-inline"><button class="btn btn-propia w-25 d-inline" id="edittext_edit" onclick="QueryValor(id)">OK</button>'
      formulaMostrar += elementoCampo.nombre;
      formulaJS.push(elementoCampo.tag);
    }
    if (elementoCampo.clase === "secuenciaestrati") {
      contentValor = '<input id="valor-form_edit" type="text" class="form-control w-75 d-inline"><button class="btn btn-propia w-25 d-inline" id="edittext_edit" onclick="QueryValor(id)">OK</button>'
      var auxsecuencia = parseInt(numeroAuxCampo.split("_")[0])-1;
      formulaMostrar += elementoCampo.stringArray[auxsecuencia] +' '+numeroAuxCampo.split("_")[1] ;
      formulaJS.push(elementoCampo.tag + numeroAuxCampo.replace("_",""));
    }
    if (elementoCampo.clase === "litologias") {
      if (numeroAuxCampo.split("_")[1] == "espesor") {
        contentValor = '<input id="valor-form_edit" type="text" class="form-control w-75 d-inline"><button class="btn btn-propia w-25 d-inline" id="edittext_edit" onclick="QueryValor(id)">OK</button>'
        if (numeroAuxCampo.split("_")[0] == "1") {
          formulaMostrar += 'Litología 1 Espesor' ;
        }
        else {
          formulaMostrar += 'Litología 2 Espesor' ;
        }
      }
      if (numeroAuxCampo.split("_")[1] == "exist") {
        contentValor += '<button class="btn btn-propia m-1" id="litologias_true" value="true" onclick="QueryValor(id)">Seleccionado</button>'
        contentValor += '<button class="btn btn-propia m-1" id="litologias_false" value="false" onclick="QueryValor(id)">No Seleccionado</button>'
        if (numeroAuxCampo.split("_")[0] == "1") {
          formulaMostrar += 'Litología 1' ;
        }
        else {
          formulaMostrar += 'Litología 2' ;
        }
      }
      formulaJS.push(elementoCampo.tag + numeroAuxCampo.replace("_",""));
    }
    if (elementoCampo.clase === "spinner" || elementoCampo.clase === "spinnerMM") {
      for (let sp = 0; sp < elementoCampo.stringArray.length; sp++) {
        contentValor += '<button class="btn btn-propia m-1" id="spinner_'+ sp +'" value="'+elementoCampo.stringArray[sp]+'" onclick="QueryValor(id)">'+ elementoCampo.stringArray[sp] +'</button>'
      }
      formulaMostrar += elementoCampo.nombre;
      formulaJS.push(elementoCampo.tag);
    }
    if (elementoCampo.clase === "radiobtn" || elementoCampo.clase === "radiobtnMM") {
      for (let sp = 0; sp < elementoCampo.stringArray.length; sp++) {
        contentValor += '<button class="btn btn-propia m-1" id="radiobtn_'+ sp +'" value="'+elementoCampo.stringArray[sp]+'" onclick="QueryValor(id)">'+ elementoCampo.stringArray[sp] +'</button>'
      }
      formulaMostrar += elementoCampo.nombre + " " + numeroAuxCampo;
      formulaJS.push(elementoCampo.tag + numeroAuxCampo);
    }
    if (elementoCampo.clase === "radiocheck" || elementoCampo.clase === "radiocheckMM") {
      contentValor += '<button class="btn btn-propia m-1" id="radiocheck_true" value="true" onclick="QueryValor(id)">Seleccionado</button>'
      contentValor += '<button class="btn btn-propia m-1" id="radiocheck_false" value="false" onclick="QueryValor(id)">No Seleccionado</button>'
      var auxsecuencia = parseInt(numeroAuxCampo.split("-")[0]);
      if (tipoForm === "ugss") {
        formulaMostrar += elementoCampo.nombre + ': '+ elementoCampo.stringArray[auxsecuencia] +', Litología '+numeroAuxCampo.split("_")[1] ;
      }
      else if (tipoForm === "sgmf") {
        formulaMostrar += elementoCampo.nombre.split(" (")[0] + ': '+ elementoCampo.stringArray[auxsecuencia];
      }
      else if (tipoForm === "inv") {
        if (elementoCampo.clase === "radiocheck"){
          formulaMostrar += elementoCampo.nombre.split(" (")[0] + ': '+ elementoCampo.stringArray[auxsecuencia];
        }
        else if (elementoCampo.clase === "radiocheckMM") {
          var nomCheckInv = elementoCampo.nombre.split(" - ");
          formulaMostrar += (numeroAuxCampo.split("_")[1] === "1" ? nomCheckInv[0] : nomCheckInv[1]) + ': '+ elementoCampo.stringArray[auxsecuencia];
        }
      }
      formulaJS.push(elementoCampo.tag + numeroAuxCampo.replace("-",""));
    }
    if (elementoCampo.clase === "multitext") {
      contentValor = '<input id="valor-form_edit" type="text" class="form-control w-75 d-inline"><button class="btn btn-propia w-25 d-inline" id="edittext_edit" onclick="QueryValor(id)">OK</button>'
      var auxsecuencia = parseInt(numeroAuxCampo.split("_")[0]);
      if (tipoForm === "ugss") {
        formulaMostrar += elementoCampo.nombre + ': '+elementoCampo.stringArray[auxsecuencia] +' Litología'+numeroAuxCampo.split("_")[1] ;
        formulaJS.push(elementoCampo.tag + numeroAuxCampo);
      }
      else if (tipoForm === "sgmf") {
        formulaMostrar += elementoCampo.nombre + ': '+elementoCampo.stringArray[auxsecuencia];
        formulaJS.push(elementoCampo.tag + numeroAuxCampo.split("_")[1] );
      }
      else if (tipoForm === "inv") {
        formulaMostrar += elementoCampo.nombre + ': '+elementoCampo.stringArray[auxsecuencia];
        formulaJS.push(elementoCampo.tag + auxsecuencia);
      }
    }
  }


  // for (let i = 0; i < elementoCampo.length; i++) {
  //   const element = array[i];
    
  // }

  $("#valores-form-query").empty();
  $("#valores-form-query").append(contentValor);
  $("#formula-form-query").empty()
  $("#formula-form-query").append('<p>'+ formulaMostrar +'</p>');

}

function QueryValor(id) {
  $("#operador-form-query button").removeAttr("disabled");
  var valorBuscar = "";
  if (id.split("_")[0] == "edittext") {
    var tagvalor = id.split("_")[1];
    valorBuscar = $("#valor-form_"+tagvalor).val();
  }
  else if (id.split("_")[0] == "spinner" || id.split("_")[0] == "radiobtn" || id.split("_")[0] == "litologias" || id.split("_")[0] == "radiocheck") {
    valorBuscar = $("#"+id).val() + "";
  }

  if (id.split("_")[0] == "litologias" || id.split("_")[0] == "radiocheck") {
    formulaMostrar += valorBuscar == "true" ? "Seleccionado" : "No Seleccionado";
  }
  else{
    formulaMostrar += valorBuscar;
  }
  formulaJS.push(valorBuscar);
  console.log(formulaJS);
  $("#formula-form-query").empty()
  $("#formula-form-query").append('<p>'+ formulaMostrar +'</p>');
}

function QueryEjecutar(todasEstaciones, todoId, apuntadorTabla) {
  var operadores = ["(", ")", "&&", "||", "==", "!=", "includes"];
  var tags = [];
  var tagsSec = [];
  tags.push("secuenciaestratisuelor");
  tags.push("secuenciaestratisuelor1orden");
  tags.push("secuenciaestratisuelor1espesor");
  tags.push("secuenciaestratisuelor2orden");
  tags.push("secuenciaestratisuelor2espesor");
  tags.push("secuenciaestratisuelor3orden");
  tags.push("secuenciaestratisuelor3orden");
  tags.push("litologiasasociadasopt1espesor");
  tags.push("litologiasasociadasopt1exist");
  tags.push("litologiasasociadasopt2espesor");
  tags.push("litologiasasociadasopt2exist");
  for (let i = 0; i < listaElementosUGSR.length; i++) {
    if (listaElementosUGSR[i].clase == "radiobtn" || listaElementosUGSR[i].clase == "radiobtnMM") {
      tags.push(listaElementosUGSR[i].tag + "1");
      tags.push(listaElementosUGSR[i].tag + "2");
    }
    else if (listaElementosUGSR[i].tag == "secuenciaestratiopt") {
      tags.push(listaElementosUGSR[i].tag + "1orden");
      tags.push(listaElementosUGSR[i].tag + "1espesor");
      tags.push(listaElementosUGSR[i].tag + "2orden");
      tags.push(listaElementosUGSR[i].tag + "2espesor");
      tags.push(listaElementosUGSR[i].tag + "3orden");
      tags.push(listaElementosUGSR[i].tag + "3orden");
      tags.push(listaElementosUGSR[i].tag + "4espesor");
      tags.push(listaElementosUGSR[i].tag + "4espesor");
    }
    else {
      tags.push(listaElementosUGSR[i].tag);
    }
  }
  for (let i = 0; i < listaElementosUGSRDiscont.length; i++) {
    if (listaElementosUGSRDiscont[i].clase == "radiobtn" || listaElementosUGSRDiscont[i].clase == "radiobtnMM") {
      tagsSec.push(listaElementosUGSRDiscont[i].tag + "1");
      tagsSec.push(listaElementosUGSRDiscont[i].tag + "2");
    }
    else {
      tagsSec.push(listaElementosUGSRDiscont[i].tag);
    }
  }
  for (let i = 0; i < listaElementosUGSS.length; i++) {
    if (listaElementosUGSS[i].clase == "radiobtn" || listaElementosUGSS[i].clase == "radiobtnMM") {
      tags.push(listaElementosUGSS[i].tag + "1");
      tags.push(listaElementosUGSS[i].tag + "2");
    }
    else if (listaElementosUGSS[i].tag == "secuenciaestratiopt") {
      tags.push(listaElementosUGSS[i].tag + "1orden");
      tags.push(listaElementosUGSS[i].tag + "1espesor");
      tags.push(listaElementosUGSS[i].tag + "2orden");
      tags.push(listaElementosUGSS[i].tag + "2espesor");
      tags.push(listaElementosUGSS[i].tag + "3orden");
      tags.push(listaElementosUGSS[i].tag + "3orden");
    }
    else if (listaElementosUGSS[i].clase == "radiocheck") {
      for (let icheck = 0; icheck < listaElementosUGSS[i].stringArray.length; icheck++) {
        tags.push(listaElementosUGSS[i].tag +icheck+ "check_1");
        tags.push(listaElementosUGSS[i].tag +icheck+ "check_2");
      }
    }
    else if (listaElementosUGSS[i].clase == "multitext") {
      for (let icheck = 0; icheck < listaElementosUGSS[i].stringArray.length; icheck++) {
        tags.push(listaElementosUGSS[i].tag +icheck+ "_1");
        tags.push(listaElementosUGSS[i].tag +icheck+ "_2");
      }
    }
    else{
      tags.push(listaElementosUGSS[i].tag);
    }
  }
  for (let i = 0; i < listaElementosSGMF.length; i++) {
    if (listaElementosSGMF[i].clase == "radiobtn" || listaElementosSGMF[i].clase == "radiobtnMM") {
      tags.push(listaElementosSGMF[i].tag + "1");
      tags.push(listaElementosSGMF[i].tag + "2");
    }
    else if (listaElementosSGMF[i].clase == "radiocheck") {
      for (let icheck = 0; icheck < listaElementosSGMF[i].stringArray.length; icheck++) {
        tags.push(listaElementosSGMF[i].tag +icheck+ "check");
      }
    }
    else if (listaElementosSGMF[i].clase == "multitext") {
      for (let icheck = 0; icheck < listaElementosSGMF[i].stringArray.length; icheck++) {
        tags.push(listaElementosSGMF[i].tag + listaElementosSGMF[i].stringArray[icheck]);
      }
    }
    else{
      tags.push(listaElementosSGMF[i].tag);
    }
  }
  for (let i = 0; i < listaElementosNewSGMF.length; i++) {
    if (listaElementosNewSGMF[i].clase == "radiobtn" || listaElementosNewSGMF[i].clase == "radiobtnMM") {
      tagsSec.push(listaElementosNewSGMF[i].tag + "1");
      tagsSec.push(listaElementosNewSGMF[i].tag + "2");
    }
    else if (listaElementosNewSGMF[i].clase == "radiocheck") {
      for (let icheck = 0; icheck < listaElementosNewSGMF[i].stringArray.length; icheck++) {
        tagsSec.push(listaElementosNewSGMF[i].tag +icheck+ "check");
      }
    }
    else{
      tagsSec.push(listaElementosNewSGMF[i].tag);
    }
  }
  for (let i = 0; i < listaElementosCAT.length; i++) {
    if (listaElementosCAT[i].clase == "radiobtn" || listaElementosCAT[i].clase == "radiobtnMM") {
      tags.push(listaElementosCAT[i].tag + "1");
      tags.push(listaElementosCAT[i].tag + "2");
    }
    else{
      tags.push(listaElementosCAT[i].tag);
    }
  }
  for (let i = 0; i < listaElementosINV.length; i++) {
    if (listaElementosINV[i].clase == "radiobtn" || listaElementosINV[i].clase == "radiobtnMM") {
      tags.push(listaElementosINV[i].tag + "1");
      tags.push(listaElementosINV[i].tag + "2");
    }
    else if (listaElementosINV[i].clase == "radiocheck") {
      for (let icheck = 0; icheck < listaElementosINV[i].stringArray.length; icheck++) {
        tags.push(listaElementosINV[i].tag +icheck+ "check");
      }
    }
    else if (listaElementosINV[i].clase == "radiocheckMM") {
      for (let icheck = 0; icheck < listaElementosINV[i].stringArray.length; icheck++) {
        tags.push(listaElementosINV[i].tag +icheck+ "check_1");
        tags.push(listaElementosINV[i].tag +icheck+ "check_2");
      }
    }
    else if (listaElementosINV[i].clase == "multitext") {
      for (let icheck = 0; icheck < listaElementosINV[i].stringArray.length; icheck++) {
        tags.push(listaElementosINV[i].tag + icheck);
      }
    }
    else{
      tags.push(listaElementosINV[i].tag);
    }
  }
  var estQuery = [];
  var tipoForm = "";
  var tipoFormInt1 = "";
  var tipoFormInt2 = "";
  var formulaEval = "if(";
  var alcanceTipo = false;
  var busquedaTipo = false;

  for (let no = 0; no < formulaJS.length; no++) {
    if(formulaJS[no] == "UGSR" || formulaJS[no] == "UGSS" || formulaJS[no] == "SGMF" || formulaJS[no] == "CATALOGO" || formulaJS[no] == "INVENTARIO"){
      console.log("no: "+no);
      for (let n = no; n < formulaJS.length; n++) {
        if(formulaJS[n] == "UGSR" || formulaJS[n] == "UGSS" || formulaJS[n] == "SGMF" || formulaJS[n] == "CATALOGO" || formulaJS[n] == "INVENTARIO"){
          if (alcanceTipo) {
            break;
          }
          alcanceTipo = true;
          switch (formulaJS[n]) {
            case "UGSR":
              tipoForm = "UGS_Rocas";
              tipoFormInt1 = "Discontinuidades";
              tipoFormInt2 = "Discont";
              break;
            case "UGSS":
              tipoForm = "UGS_Suelos";
              break;
            case "SGMF":
              tipoForm = "SGMF";
              tipoFormInt1 = "SGMF";
              tipoFormInt2 = "SGMF";
              break;
            case "CATALOGO":
              tipoForm = "CATALOGO";
              break;
            case "INVENTARIO":
              tipoForm = "INVENTARIO";
              break;
            default:
              break;
          }
        }
        else {
          if (operadores.includes(formulaJS[n])) {
            if(formulaJS[n] == "includes"){
              formulaEval += ".includes("
            }
            else {
              formulaEval += " "+formulaJS[n]+" ";
            }
          } 
          else if (tags.includes(formulaJS[n])){
            formulaEval += ' formato["'+formulaJS[n]+'"] ';
          }
          else if (tagsSec.includes(formulaJS[n])){
            formulaEval += ' subformato["'+formulaJS[n]+'"] ';
            busquedaTipo = true;
          }
          else{
            formulaEval += ' "'+formulaJS[n]+'" ';
            if (formulaJS[n-1] == "includes") {
              formulaEval += ") ";
            }
          }
        }
      }
      formulaEval +='){$(apuntadorTabla.row(index).node()).addClass("selected");estQuery.push(feature); encuentra = true;}'
      console.log(tipoForm);
      var errorSyntax = false ;
      todasEstaciones.forEach((data, index) =>{
        var encuentra = false ; 
        var feature = estaciones["estacion_" + todoId[index]];
        if (feature.activo) {
          if(feature["Formularios"]["count_"+tipoForm]>0){
            for (let j = 0; j < feature["Formularios"]["count_"+tipoForm]; j++) {
              if (feature["Formularios"]["Form_"+tipoForm]["Form_"+tipoForm+"_"+j].activo) {
                var formato = feature["Formularios"]["Form_"+tipoForm]["Form_"+tipoForm+"_"+j];
                if (!busquedaTipo) {
                  try {
                    eval(formulaEval)
                  } 
                  catch (error) {
                    var errorsito = error+"";
                    console.log(errorsito);
                    if(errorsito.includes("SyntaxError")){
                      errorSyntax = true;
                    }
                  }
                }
                else{
                  if (formato[tipoFormInt1]["count"] !== undefined) {
                    if (formato[tipoFormInt1]["count"] > 0) {
                      for (let h = 1; h <= formato[tipoFormInt1]["count"]; h++) {
                        var subformato = formato[tipoFormInt1][tipoFormInt2+"_"+h]
                        try {
                          eval(formulaEval)
                        } 
                        catch (error) {
                          var errorsito = error+"";
                          console.log(errorsito);
                          if(errorsito.includes("SyntaxError")){
                            errorSyntax = true;
                          }
                        }
                        if (encuentra) {
                          break;
                        }
                      }
                    }
                  }
                }
              }
            }
          }     
        }
      })

      // for (let i = 0; i < base_clase.cont.cont; i++) {
      //   var encuentra = false ; 
      //   var feature = base_clase["estacion_" + i];
      //   if (feature.activo) {
      //     if(feature["Formularios"]["count_"+tipoForm]>0){
      //       for (let j = 0; j < feature["Formularios"]["count_"+tipoForm]; j++) {
      //         if (feature["Formularios"]["Form_"+tipoForm]["Form_"+tipoForm+"_"+j].activo) {
      //           // console.log(1);
      //           var formato = feature["Formularios"]["Form_"+tipoForm]["Form_"+tipoForm+"_"+j]; 
      //           if (!busquedaTipo) {
      //             try {
      //               eval(formulaEval)
      //             } 
      //             catch (error) {
      //               var errorsito = error+"";
      //               console.log(errorsito);
      //               if(errorsito.includes("SyntaxError")){
      //                 errorSyntax = true;
      //               }
      //             }
      //           }
      //           else{
      //             if (formato[tipoFormInt1]["count"] !== undefined) {
      //               if (formato[tipoFormInt1]["count"] > 0) {
      //                 for (let h = 1; h <= formato[tipoFormInt1]["count"]; h++) {
      //                   var subformato = formato[tipoFormInt1][tipoFormInt2+"_"+h]
      //                   try {
      //                     eval(formulaEval)
      //                   } 
      //                   catch (error) {
      //                     var errorsito = error+"";
      //                     console.log(errorsito);
      //                     if(errorsito.includes("SyntaxError")){
      //                       errorSyntax = true;
      //                     }
      //                   }
      //                   if (encuentra) {
      //                     break;
      //                   }
      //                 }
      //               }
      //             }
      //           }
      //         }
      //       }
      //     }
      //   }
      // }

      console.log(formulaEval);
      tipoForm = "";
      tipoFormInt1 = "";
      tipoFormInt2 = "";
      formulaEval = "if(";
      alcanceTipo = false;
      encuentra = false ; 
      busquedaTipo = false;
    }
  }

  if (errorSyntax) {
    alert("Existe un error en la sintaxis del Query, Por favor verifique")
  }

  console.log(estQuery);
}

function QueryEjecutarVisor(base_clase1) {
  var operadores = ["(", ")", "&&", "||", "==", "!=", "includes"];
  var tags = [];
  var tagsSec = [];
  tags.push("secuenciaestratisuelor");
  tags.push("secuenciaestratisuelor1orden");
  tags.push("secuenciaestratisuelor1espesor");
  tags.push("secuenciaestratisuelor2orden");
  tags.push("secuenciaestratisuelor2espesor");
  tags.push("secuenciaestratisuelor3orden");
  tags.push("secuenciaestratisuelor3orden");
  tags.push("litologiasasociadasopt1espesor");
  tags.push("litologiasasociadasopt1exist");
  tags.push("litologiasasociadasopt2espesor");
  tags.push("litologiasasociadasopt2exist");
  for (let i = 0; i < listaElementosUGSR.length; i++) {
    if (listaElementosUGSR[i].clase == "radiobtn" || listaElementosUGSR[i].clase == "radiobtnMM") {
      tags.push(listaElementosUGSR[i].tag + "1");
      tags.push(listaElementosUGSR[i].tag + "2");
    }
    else if (listaElementosUGSR[i].tag == "secuenciaestratiopt") {
      tags.push(listaElementosUGSR[i].tag + "1orden");
      tags.push(listaElementosUGSR[i].tag + "1espesor");
      tags.push(listaElementosUGSR[i].tag + "2orden");
      tags.push(listaElementosUGSR[i].tag + "2espesor");
      tags.push(listaElementosUGSR[i].tag + "3orden");
      tags.push(listaElementosUGSR[i].tag + "3orden");
      tags.push(listaElementosUGSR[i].tag + "4espesor");
      tags.push(listaElementosUGSR[i].tag + "4espesor");
    }
    else {
      tags.push(listaElementosUGSR[i].tag);
    }
  }
  for (let i = 0; i < listaElementosUGSRDiscont.length; i++) {
    if (listaElementosUGSRDiscont[i].clase == "radiobtn" || listaElementosUGSRDiscont[i].clase == "radiobtnMM") {
      tagsSec.push(listaElementosUGSRDiscont[i].tag + "1");
      tagsSec.push(listaElementosUGSRDiscont[i].tag + "2");
    }
    else {
      tagsSec.push(listaElementosUGSRDiscont[i].tag);
    }
  }
  for (let i = 0; i < listaElementosUGSS.length; i++) {
    if (listaElementosUGSS[i].clase == "radiobtn" || listaElementosUGSS[i].clase == "radiobtnMM") {
      tags.push(listaElementosUGSS[i].tag + "1");
      tags.push(listaElementosUGSS[i].tag + "2");
    }
    else if (listaElementosUGSS[i].tag == "secuenciaestratiopt") {
      tags.push(listaElementosUGSS[i].tag + "1orden");
      tags.push(listaElementosUGSS[i].tag + "1espesor");
      tags.push(listaElementosUGSS[i].tag + "2orden");
      tags.push(listaElementosUGSS[i].tag + "2espesor");
      tags.push(listaElementosUGSS[i].tag + "3orden");
      tags.push(listaElementosUGSS[i].tag + "3orden");
    }
    else if (listaElementosUGSS[i].clase == "radiocheck") {
      for (let icheck = 0; icheck < listaElementosUGSS[i].stringArray.length; icheck++) {
        tags.push(listaElementosUGSS[i].tag +icheck+ "check_1");
        tags.push(listaElementosUGSS[i].tag +icheck+ "check_2");
      }
    }
    else if (listaElementosUGSS[i].clase == "multitext") {
      for (let icheck = 0; icheck < listaElementosUGSS[i].stringArray.length; icheck++) {
        tags.push(listaElementosUGSS[i].tag +icheck+ "_1");
        tags.push(listaElementosUGSS[i].tag +icheck+ "_2");
      }
    }
    else{
      tags.push(listaElementosUGSS[i].tag);
    }
  }
  for (let i = 0; i < listaElementosSGMF.length; i++) {
    if (listaElementosSGMF[i].clase == "radiobtn" || listaElementosSGMF[i].clase == "radiobtnMM") {
      tags.push(listaElementosSGMF[i].tag + "1");
      tags.push(listaElementosSGMF[i].tag + "2");
    }
    else if (listaElementosSGMF[i].clase == "radiocheck") {
      for (let icheck = 0; icheck < listaElementosSGMF[i].stringArray.length; icheck++) {
        tags.push(listaElementosSGMF[i].tag +icheck+ "check");
      }
    }
    else if (listaElementosSGMF[i].clase == "multitext") {
      for (let icheck = 0; icheck < listaElementosSGMF[i].stringArray.length; icheck++) {
        tags.push(listaElementosSGMF[i].tag + listaElementosSGMF[i].stringArray[icheck]);
      }
    }
    else{
      tags.push(listaElementosSGMF[i].tag);
    }
  }
  for (let i = 0; i < listaElementosNewSGMF.length; i++) {
    if (listaElementosNewSGMF[i].clase == "radiobtn" || listaElementosNewSGMF[i].clase == "radiobtnMM") {
      tagsSec.push(listaElementosNewSGMF[i].tag + "1");
      tagsSec.push(listaElementosNewSGMF[i].tag + "2");
    }
    else if (listaElementosNewSGMF[i].clase == "radiocheck") {
      for (let icheck = 0; icheck < listaElementosNewSGMF[i].stringArray.length; icheck++) {
        tagsSec.push(listaElementosNewSGMF[i].tag +icheck+ "check");
      }
    }
    else{
      tagsSec.push(listaElementosNewSGMF[i].tag);
    }
  }
  // for (let i = 0; i < listaElementosCAT.length; i++) {
  //   if (listaElementosCAT[i].clase == "radiobtn" || listaElementosCAT[i].clase == "radiobtnMM") {
  //     tags.push(listaElementosCAT[i].tag + "1");
  //     tags.push(listaElementosCAT[i].tag + "2");
  //   }
  //   else{
  //     tags.push(listaElementosCAT[i].tag);
  //   }
  // }
  for (let i = 0; i < listaElementosINV.length; i++) {
    if (listaElementosINV[i].clase == "radiobtn" || listaElementosINV[i].clase == "radiobtnMM") {
      tags.push(listaElementosINV[i].tag + "1");
      tags.push(listaElementosINV[i].tag + "2");
    }
    else if (listaElementosINV[i].clase == "radiocheck") {
      for (let icheck = 0; icheck < listaElementosINV[i].stringArray.length; icheck++) {
        tags.push(listaElementosINV[i].tag +icheck+ "check");
      }
    }
    else if (listaElementosINV[i].clase == "radiocheckMM") {
      for (let icheck = 0; icheck < listaElementosINV[i].stringArray.length; icheck++) {
        tags.push(listaElementosINV[i].tag +icheck+ "check_1");
        tags.push(listaElementosINV[i].tag +icheck+ "check_2");
      }
    }
    else if (listaElementosINV[i].clase == "multitext") {
      for (let icheck = 0; icheck < listaElementosINV[i].stringArray.length; icheck++) {
        tags.push(listaElementosINV[i].tag + icheck);
      }
    }
    else{
      tags.push(listaElementosINV[i].tag);
    }
  }
  var estQuery = [];
  var tipoForm = "";
  var tipoFormInt1 = "";
  var tipoFormInt2 = "";
  var formulaEval = "if(";
  var alcanceTipo = false;
  var busquedaTipo = false;

  for (let no = 0; no < formulaJS.length; no++) {
    if(formulaJS[no] == "UGSR" || formulaJS[no] == "UGSS" || formulaJS[no] == "SGMF" || formulaJS[no] == "CATALOGO" || formulaJS[no] == "INVENTARIO"){
      console.log("no: "+no);
      for (let n = no; n < formulaJS.length; n++) {
        if(formulaJS[n] == "UGSR" || formulaJS[n] == "UGSS" || formulaJS[n] == "SGMF" || formulaJS[n] == "CATALOGO" || formulaJS[n] == "INVENTARIO"){
          if (alcanceTipo) {
            break;
          }
          alcanceTipo = true;
          switch (formulaJS[n]) {
            case "UGSR":
              tipoForm = "UGS_Rocas";
              tipoFormInt1 = "Discontinuidades";
              tipoFormInt2 = "Discont";
              break;
            case "UGSS":
              tipoForm = "UGS_Suelos";
              break;
            case "SGMF":
              tipoForm = "SGMF";
              tipoFormInt1 = "SGMF";
              tipoFormInt2 = "SGMF";
              break;
            case "CATALOGO":
              tipoForm = "CATALOGO";
              break;
            case "INVENTARIO":
              tipoForm = "INVENTARIO";
              break;
            default:
              break;
          }
        }
        else {
          if (operadores.includes(formulaJS[n])) {
            if(formulaJS[n] == "includes"){
              formulaEval += ".includes("
            }
            else {
              formulaEval += " "+formulaJS[n]+" ";
            }
          } 
          else if (tags.includes(formulaJS[n])){
            formulaEval += ' formato["'+formulaJS[n]+'"] ';
          }
          else if (tagsSec.includes(formulaJS[n])){
            formulaEval += ' subformato["'+formulaJS[n]+'"] ';
            busquedaTipo = true;
          }
          else{
            formulaEval += ' "'+formulaJS[n]+'" ';
            if (formulaJS[n-1] == "includes") {
              formulaEval += ") ";
            }
          }
        }
      }
      formulaEval +='){if(!estQuery.includes(i)){estQuery.push(i)}; encuentra = true;}'
      console.log(tipoForm);
      var errorSyntax = false;

      for (let i = 0; i < base_clase1.cont.cont; i++) {
        var encuentra = false ; 
        var feature = base_clase1["estacion_" + i];
        if (feature.activo) {
          if(feature["Formularios"]["count_"+tipoForm]>0){
            for (let j = 0; j < feature["Formularios"]["count_"+tipoForm]; j++) {
              if (feature["Formularios"]["Form_"+tipoForm]["Form_"+tipoForm+"_"+j].activo) {
                // console.log(1);
                var formato = feature["Formularios"]["Form_"+tipoForm]["Form_"+tipoForm+"_"+j]; 
                if (!busquedaTipo) {
                  try {
                    eval(formulaEval)
                  } 
                  catch (error) {
                    var errorsito = error+"";
                    console.log(errorsito);
                    if(errorsito.includes("SyntaxError")){
                      errorSyntax = true;
                    }
                  }
                }
                else{
                  if (formato[tipoFormInt1]["count"] !== undefined) {
                    if (formato[tipoFormInt1]["count"] > 0) {
                      for (let h = 1; h <= formato[tipoFormInt1]["count"]; h++) {
                        var subformato = formato[tipoFormInt1][tipoFormInt2+"_"+h]
                        try {
                          eval(formulaEval)
                        } 
                        catch (error) {
                          var errorsito = error+"";
                          console.log(errorsito);
                          if(errorsito.includes("SyntaxError")){
                            errorSyntax = true;
                          }
                        }
                        if (encuentra) {
                          break;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      console.log(formulaEval);
      tipoForm = "";
      tipoFormInt1 = "";
      tipoFormInt2 = "";
      formulaEval = "if(";
      alcanceTipo = false;
      encuentra = false ; 
      busquedaTipo = false;
    }
  }

  if (errorSyntax) {
    alert("Existe un error en la sintaxis del Query, Por favor verifique")
  }

  console.log(estQuery);
  return estQuery;
}

function QueryBorrar() {
  formulaMostrar = "";
  formulaJS = [];
  colorAct = 0;
  $("#formula-form-query").empty();
  $("#formula-form-query").append('<p>'+ formulaMostrar +'</p>');
  $("#valores-form-query").empty();
  $("#campos-form-query").empty();
}

function ElementoGenerar(col,nombre, clase, tag, idCampo, stringArray) {
  this.col = col;
  this.nombre = nombre;
  this.clase = clase;
  this.tag = tag;
  this.idCampo = idCampo;
  this.stringArray = stringArray;
}


var ListaGenerarGeneral = [
  new ElementoGenerar("4","Vereda", "input", "Vereda", "veredaTL", []),
  new ElementoGenerar("4","Municipio", "select", "Municipio", "muniTL", ["","AGUADAS","ARANZAZU","FILADELFIA","MARQUETALIA","RIOSUCIO","SUPIA"]),
  new ElementoGenerar("6","Coordenada", "input", "Coordenada", "coorTL", []),
  new ElementoGenerar("4","Altura", "input", "Altura", "alturaTL", [])
];
var ListaGenerarPunto = [
  new ElementoGenerar("6","Coordenada", "input", "Coordenada", "coorTL", []),
  new ElementoGenerar("4","Altura", "input", "Altura", "alturaTL", []),
  new ElementoGenerar("12","Observaciones", "textarea", "Observaciones", "obsPuntoTL", [])
];
var ListaGenerarUGS = [
  new ElementoGenerar("12","UGS", "input", "UGS", "ugsTL", []),
  new ElementoGenerar("6","Tipo de Afloramiento", "select", "Tipo Afloramiento", "tipoAflorTL", ["","Natural","Corte superficial","Excavación subterránea","Trinchera, Apique"]),
  new ElementoGenerar("4","Ancho Afloramiento", "input", "Ancho", "anchoTL", []),
  new ElementoGenerar("4","Largo Afloramiento", "input", "Largo", "largoTL", []),
];
var ListaGenerarUGSDisc = [
  new ElementoGenerar("12","Buzamientos de las Discontinuidades", "input", "Direcciones Discontinuidades", "dirBuzTL", []),
  new ElementoGenerar("12","Tipos de las Discontinuidades", "input", "Tipos Discontinuidades", "tipoDiscTL", []),
];
var ListaGenerarUGSRocas = [
  new ElementoGenerar("12","Litología 1", "h4", "Litología 1", "id", []),
  new ElementoGenerar("6","Grado de Meteorización", "select", "Grado Meteorización", "gradoMeteoTL", ["Ninguna","Débil ","Moderada","Alta","Muy Alta","No Aplica"]),
  new ElementoGenerar("6","Roca Correspondiente", "select", "Roca Correspondiente", "rocaCorresTL", ["","suelo residual","roca completamente meteorizada","roca altamente meteorizada","roca moderadamente meteorizada","roca débilmente meteorizada","roca fresca","No Aplica"]),
  new ElementoGenerar("4","Color", "input", "Color", "colorTL", []),
  new ElementoGenerar("4","Tamaño Grano", "select", "Tamaño Grano", "tamanoGranoTL", ["","Muy Grueso","Grueso ","Medio","Fino","Muy Fino","No Aplica"]),
  new ElementoGenerar("12","Composición Mineralógica", "input", "Composición Mineralógica", "compMineTL", []),
  new ElementoGenerar("4","Espesor", "input", "Espesor Lito", "espesorLitoTL", []),
  new ElementoGenerar("6","Grado de Fracturamiento", "select", "Grado de Fracturamiento", "gradoFracturaTL", ["","inexistente","bajo","medio","alto","No Aplica"]),
  new ElementoGenerar("12","Espaciamiento de las Diaclasas (Si es que Existen)", "input", "Espaciamiento Diaclasas", "espaciamientoTL", []),
  new ElementoGenerar("12","Relleno de las Diaclasas (Si es que Existen)", "input", "Relleno Diaclasas", "rellenoTL", ["","Ígnea","Sedimentaria","Metamórfica"]),
];
var ListaGenerarUGSRocas2 = [
  new ElementoGenerar("12","Litología 2", "h4", "Litología 2", "id", []),
  new ElementoGenerar("6","Grado de Meteorización", "select", "Grado Meteorización", "gradoMeteoTL2", ["Ninguna","Débil ","Moderada","Alta","Muy Alta","No Aplica"]),
  new ElementoGenerar("6","Roca Correspondiente", "select", "Roca Correspondiente", "rocaCorresTL2", ["","Suelo residual","Roca completamente meteorizada","Roca altamente meteorizada","Roca moderadamente meteorizada","Roca débilmente meteorizada","Roca Fresca","No Aplica"]),
  new ElementoGenerar("4","Color", "input", "Color", "colorTL2", []),
  new ElementoGenerar("4","Tamaño Grano", "select", "Tamaño Grano", "tamanoGranoTL2", ["","Muy Grueso","Grueso ","Medio","Fino","Muy Fino","No Aplica"]),
  new ElementoGenerar("12","Composición Mineralógica", "input", "Composición Mineralógica", "compMineTL2", []),
  new ElementoGenerar("4","Espesor", "input", "Espesor Lito", "espesorLitoTL2", []),
  new ElementoGenerar("6","Grado de Fracturamiento", "select", "Grado de Fracturamiento", "gradoFracturaTL2", ["","inexistente","bajo","medio","alto","No Aplica"]),
  new ElementoGenerar("12","Espaciamiento de las Diaclasas (Si es que Existen)", "input", "Espaciamiento Diaclasas", "espaciamientoTL2", []),
  new ElementoGenerar("12","Relleno de las Diaclasas (Si es que Existen)", "input", "Relleno Diaclasas", "rellenoTL2", ["","Ígnea","Sedimentaria","Metamórfica"]),
];
var ListaGenerarUGSsuelos = [
  new ElementoGenerar("12","Litología Suelo 1", "h4", "Litología Suelo 1", "id", []),
  new ElementoGenerar("6","Composición Mineralógica", "input", "Composición Mineralógica Suelo", "compMineSueloTL", []),
  new ElementoGenerar("4","Porcentaje de Clastos", "input", "Porcentaje de Clastos", "porcentajeClastosTL", []),
  new ElementoGenerar("4","Porcentaje de Matriz", "input", "Porcentaje de Matriz", "porcentajeMatrizTL", []),
  new ElementoGenerar("6","Estructuras del Suelo", "select", "Estructuras del Suelos", "estructurasSueloTL", ["","con presencia de estructuras","sin presencia de estructuras"]),
  new ElementoGenerar("6","Tipo de Suelo", "select", "Tipo de Suelo", "tipoSueloTL", ["antrópico","residual", "transportado"]),
  new ElementoGenerar("4","Horizonte", "input", "Horizonte", "horizontesSueloTL", []),
  new ElementoGenerar("4","Espesor Suelo", "input", "Espesor Suelo", "espesorSueloTL", []),
  new ElementoGenerar("4","Redondez de los Clastos", "select", "Redondez de los Clastos", "redondezSueloTL", ["","muy angular","angular","subangular","subredondeada","redondeada","bien redondeada"]),
  new ElementoGenerar("4","Forma de los Clastos", "select", "Forma de los Clastos", "formaSueloTL", ["","esférica","equidimensional","tabular","plana-alargada","irregular"]),
  new ElementoGenerar("4","Soporte Suelo", "select", "Soporte Suelo", "soporteSueloTL", ["","clasto-soportado","intermedia","matriz soportado"]),
  new ElementoGenerar("4","Orientación de los Clastos", "select", "Orientación de los Clastos", "orientacionSueloTL", ["","isotropía","anisotropía","imbricado"]),
  new ElementoGenerar("4","Gradación de la Matriz", "select", "Gradación de la Matriz", "gradacionSueloTL", ["","normal","inversa","normal, solo a la base","normal,solo al techo","sin gradación","compuesto, simétrico"]),
  new ElementoGenerar("4","Selección de la Matriz", "select", "Selección de la Matriz", "seleccionSueloTL", ["","muy pobremente seleccionado","pobremente seleccionado","moderadamente seleccionado","bien seleccionado","muy bien seleccionado"]),
  new ElementoGenerar("4","Plasticidad de la Matriz", "select", "Plasticidad de la Matriz", "plasticidadSueloTL", ["","no plástico","ligeramente plástico","plástico","muy plástico"]),
  new ElementoGenerar("4","Resistencia al Corte", "select", "Resistencia al Corte", "resistenciaSueloTL", ["","muy blanda menor a 20","blanda 20-40","media 40-75","alta 75-150","dura > 300"]),
  new ElementoGenerar("4","Compacidad de la Matriz", "select", "Compacidad de la Matriz", "compacidadSueloTL", ["","débil (suelta)","moderada (media)","fuerte (densa)"]),
];
var ListaGenerarUGSsuelos2 = [
  new ElementoGenerar("12","Litología Suelo 2", "h4", "Litología Suelo 2", "id", []),
  new ElementoGenerar("6","Composición Mineralógica", "clase", "Composición Mineralógica Suelo", "compMineSueloTL2", []),
  new ElementoGenerar("4","Porcentaje de Clastos", "input", "Porcentaje de Clastos", "porcentajeClastosTL2", []),
  new ElementoGenerar("4","Porcentaje de Matriz", "input", "Porcentaje de Matriz", "porcentajeMatrizTL2", []),
  new ElementoGenerar("6","Estructuras del Suelo", "select", "Estructuras del Suelos", "estructurasSueloTL2", ["","con presencia de estructuras","sin presencia de estructuras"]),
  new ElementoGenerar("6","Tipo de Suelo", "select", "Tipo de Suelo", "tipoSueloTL2", ["antrópico","residual", "transportado"]),
  new ElementoGenerar("4","Horizonte", "input", "Horizonte", "horizontesSueloTL2", []),
  new ElementoGenerar("4","Espesor Suelo", "input", "Espesor Suelo", "espesorSueloTL2", []),
  new ElementoGenerar("4","Redondez de los Clastos", "select", "Redondez de los Clastos", "redondezSueloTL2", ["","muy angular","angular","subangular","subredondeada","redondeada","bien redondeada"]),
  new ElementoGenerar("4","Forma de los Clastos", "select", "Forma de los Clastos", "formaSueloTL2", ["","esférica","equidimensional","tabular","plana-alargada","irregular"]),
  new ElementoGenerar("4","Soporte Suelo", "select", "Soporte Suelo", "soporteSueloTL2", ["","clasto-soportado","intermedia","matriz soportado"]),
  new ElementoGenerar("4","Orientación de los Clastos", "select", "Orientación de los Clastos", "orientacionSueloTL2", ["","isotropía","anisotropía","imbricado"]),
  new ElementoGenerar("4","Gradación de la Matriz", "select", "Gradación de la Matriz", "gradacionSueloTL2", ["","normal","inversa","normal, solo a la base","normal,solo al techo","sin gradación","compuesto, simétrico"]),
  new ElementoGenerar("4","Selección de la Matriz", "select", "Selección de la Matriz", "seleccionSueloTL2", ["","muy pobremente seleccionado","pobremente seleccionado","moderadamente seleccionado","bien seleccionado","muy bien seleccionado"]),
  new ElementoGenerar("4","Plasticidad de la Matriz", "select", "Plasticidad de la Matriz", "plasticidadSueloTL2", ["","no plástico","ligeramente plástico","plástico","muy plástico"]),
  new ElementoGenerar("4","Resistencia al Corte", "select", "Resistencia al Corte", "resistenciaSueloTL2", ["","muy blanda menor a 20","blanda 20-40","media 40-75","alta 75-150","dura > 300"]),
  new ElementoGenerar("4","Compacidad de la Matriz", "select", "Compacidad de la Matriz", "compacidadSueloTL2", ["","débil (suelta)","moderada (media)","fuerte (densa)"]),
];
var ListaGenerarSGMF = [
  new ElementoGenerar("12","Tipo de Ambiente", "input", "Tipo de Ambiente SGMF", "ambienteSGMFTL", []),
  new ElementoGenerar("12","Ubicación Geomorfológica", "textarea", "Ubicación Geomorfológica", "ubicacionGeomorfoTL", []),
  new ElementoGenerar("12","Caracterización Geoformas", "textarea", "Caracterización Geoformas", "caracterizacionSGMFTL", []),
];
// var ListaGenerarCMM = [
//   new ElementoGenerar("12","Referencia Geográfica", "textarea", "Referencia Geográfica", "refGeoTL", []),
//   new ElementoGenerar("4","Vereda", "input", "Vereda CMM", "veredaTL", []),
//   new ElementoGenerar("4","Municipio", "select", "Municipio", "muniTL", ["","AGUADAS","ARANZAZU","FILADELFIA","MARQUETALIA","RIOSUCIO","SUPIA"]),
//   new ElementoGenerar("6","Coordenada", "input", "Coordenada", "coorTL", []),
//   new ElementoGenerar("4","Altura", "input", "Altura", "alturaTL", []),
//   new ElementoGenerar("4","Fecha Evento", "input", "Fecha Evento", "fechaEventoTL", []),
//   new ElementoGenerar("4","Confiabilidad Fecha", "input", "Confiabilidad Fecha", "confiFechaTL", []),
// ];
// var ListaGenerarCMM1 = [
//   new ElementoGenerar("6","Tipo Movimiento", "input", "Tipo Movimiento", "tipoMMTL", []),
//   new ElementoGenerar("6","Subtipo Movimiento", "input", "Subtipo Movimiento", "subTipoMMTL", []),
// ];
// var ListaGenerarCMM2 = [
//   new ElementoGenerar("6","Tipo Movimiento", "input", "Tipo Movimiento 2", "tipoMMTL2", []),
//   new ElementoGenerar("6","Subtipo Movimiento", "input", "Subtipo Movimiento 2", "subTipoMMTL2", []),
// ];
// var ListaGenerarCMMNotas = [
//   new ElementoGenerar("12","Notas", "textarea", "Notas", "notasMMTL", []),
// ];
var ListaGenerarIMM = [
  new ElementoGenerar("4","Ancho MM", "input", "Ancho MM", "anchoMMTL", []),
  new ElementoGenerar("4","Largo MM", "input", "Largo MM", "largoMMTL", []),
  new ElementoGenerar("4","Estado MM", "input", "Estado MM", "estadoMMTL", []),
  new ElementoGenerar("6","Litología MM", "textarea", "Litología MM", "litoMMTL", []),
];
var ListaGenerarIMM1 = [
  new ElementoGenerar("12","Movimiento 1", "h4", "Movimiento 1", "", []),
  new ElementoGenerar("6","Tipo Movimiento", "input", "Tipo Movimiento", "tipoMMTL", []),
  new ElementoGenerar("6","Subtipo Movimiento", "input", "Subtipo Movimiento", "subTipoMMTL", []),
  new ElementoGenerar("4","Tipo de Material", "input", "Tipo de Material MM", "tipoMaterialMMTL", []),
  new ElementoGenerar("4","Humedad del Material", "input", "Humedad del Material MM", "humedadMMTL", []),
  new ElementoGenerar("4","Plasticidad del Material", "input", "Plasticidad del Material MM", "plasticidadMMTL", []),
];
var ListaGenerarIMM2 = [
  new ElementoGenerar("12","Movimiento 2", "h4", "Movimiento 2", "", []),
  new ElementoGenerar("6","Tipo Movimiento", "input", "Tipo Movimiento", "tipoMMTL2", []),
  new ElementoGenerar("6","Subtipo Movimiento", "input", "Subtipo Movimiento", "subTipoMMTL2", []),
  new ElementoGenerar("4","Tipo de Material", "input", "Tipo de Material MM", "tipoMaterialMMTL2", []),
  new ElementoGenerar("4","Humedad del Material", "input", "Humedad del Material MM", "humedadMMTL2", []),
  new ElementoGenerar("4","Plasticidad del Material", "input", "Plasticidad del Material MM", "plasticidadMMTL2", []),
];
var ListaGenerarIMMNotas = [
  new ElementoGenerar("12","Notas", "textarea", "Notas", "notasMMTL", []),
  new ElementoGenerar("12","Apreciación del Riesgo", "textarea", "Apreciación del Riesgo", "apreciacionMMTL", []),
];
// ElementoGenerar("name", "clase", "tag", "id", []),

$('#modal-generarTextoLib').on('hide.bs.modal', function (e) {
  $('body').css('overflow', 'hidden'); 
  $('#modal-estaciones').css('overflow-y', 'auto');   
});

function GenerarCamposTextoLib(arrayElement) {
  for (let ind1 = 0; ind1 < arrayElement.length; ind1++) {
    const element = arrayElement[ind1];
    if (element.clase == "textarea") {
      modalContentTL += '<div class="form-group col-'+ element.col +'">'+
                          '<label for="'+ element.idCampo +'" class="bold">'+ element.nombre +'</label>'+
                          '<textarea class="form-control" rows="2" id="'+ element.idCampo +'"></textarea/>'+
                        '</div>';
    }
    else if (element.clase == "input") {
      modalContentTL += '<div class="form-group col-'+ element.col +'">'+
                          '<label for="'+ element.idCampo +'" class="bold">'+ element.nombre +'</label>'+
                          '<input type="text" class="form-control" id="'+ element.idCampo +'">'+
                        '</div>';
    }
    else if (element.clase == "select") {
      modalContentTL += '<div class="form-group col-'+ element.col +'">'+
                          '<label for="'+ element.idCampo +'" class="bold">'+ element.nombre +'</label>'+
                          '<select class="form-control" id="'+ element.idCampo +'" maxlength="10">';
                            for (let ind2 = 0; ind2 < element.stringArray.length; ind2++) {
                              const element2 = element.stringArray[ind2];
                              modalContentTL += '<option value="'+ element2 +'">'+ element2 +'</option>';
                            }
        modalContentTL += '</select>'+
                        '</div>';
    }
    else if (element.clase == "h4") {
      modalContentTL += '<div class="form-group col-'+ element.col +'"><h4>'+ element.nombre +'</h4></div>';
    }
    idsFormModalTL.push(element.idCampo);
    titleFormModalTL.push(element.tag);
  }
}

var titleFormModalTL =[];
var idsFormModalTL =[];
var textoTL = "";
var modalContentTL = "";
$("#generarTextoLibreta").click(function (e) { 
  e.preventDefault();
  $('#modal-generarTextoLib').modal('show');
  var estacionTL = estaciones["estacion_"+idActualEst];
  var tipoEstTL = estacionTL["TipoEstacion"].toUpperCase();
  modalContentTL = "";
  titleFormModalTL =[];
  idsFormModalTL =[];
  textoTL = "";
  textoTL += "Fecha: "+estacionTL["Fecha"]+"\n";
  textoTL += "Código de la estación: "+estacionTL["Estacion"]+"\n";
  
  if (tipoEstTL.includes("UGS")) {
    if(tipoEstTL.includes("CARACT")){
      GenerarCamposTextoLib(ListaGenerarGeneral);
      GenerarCamposTextoLib(ListaGenerarUGS);  
      if(estacionTL["Formularios"].count_UGS_Rocas>0){
        for (let j = 0; j < estacionTL["Formularios"].count_UGS_Rocas; j++) {
          var formato = estacionTL["Formularios"]["Form_UGS_Rocas"]["Form_UGS_Rocas_"+j]; 
          if (formato.activo) {
            GenerarCamposTextoLib(ListaGenerarUGSDisc); 
            if (formato["litologiasasociadasopt1exist"] == "true") {
              GenerarCamposTextoLib(ListaGenerarUGSRocas); 
            }
            if (formato["litologiasasociadasopt2exist"] == "true") {
              GenerarCamposTextoLib(ListaGenerarUGSRocas2);  
            }
            $("#generarTextoLib-content").empty();
            $("#generarTextoLib-content").append(modalContentTL);
            $("#muniTL").val(formato["municipios"]);
            $("#veredaTL").val(formato["vereda"]);
            $("#coorTL").val(estacionTL["Este"]+", "+estacionTL["Norte"]);
            $("#alturaTL").val(estacionTL["Altitud"]);
            $("#ugsTL").val(formato["nombreugs"]);
            $("#tipoAflorTL").val(formato["claseaflor"]);
            var auxespesorugs1 = parseInt(formato["litologiasasociadasopt1espesor"]);
            if (formato["litologiasasociadasopt2espesor"] !== "") {
              auxespesorugs1 += parseInt(formato["litologiasasociadasopt2espesor"]);
            }
            $("#anchoTL").val(auxespesorugs1);
            auxespesorugs1 = auxespesorugs1 * 2;
            $("#largoTL").val(auxespesorugs1);
            var auxBuzas = "";
            var auxTipos = "";
            var auxEspa = "";
            var auxrelleno = "";
            if (formato["Discontinuidades"].count>0) {
              for (let ind = 1; ind <= formato["Discontinuidades"].count; ind++) {
                const discontTL = formato["Discontinuidades"]["Discont_"+ind];
                if (discontTL.activo) {
                  auxBuzas += discontTL.DirBuzamiento;
                  auxTipos += discontTL.TipoDiscont.split(". ")[1];

                  if (discontTL.TipoDiscont.split(". ")[1] == "Diaclasa") {
                    auxEspa = discontTL.EspaciamientoDiscont.split(". ")[1] + ", ";
                    auxrelleno = discontTL.TipoRellenoDiscont.split(". ")[1] + ", ";
                  }


                  if (ind < formato["Discontinuidades"].count) {
                    const auxNumDisc = formato["Discontinuidades"].count-1;
                    if (ind == auxNumDisc) {
                      auxBuzas += " y ";
                      auxTipos += " y ";
                    }
                    else{
                      auxBuzas += ", ";
                      auxTipos += ", ";
                    }
                  }
                }
              }   
            }
            $("#dirBuzTL").val(auxBuzas);
            $("#tipoDiscTL").val(auxTipos);
            var auxRocaCorres = {
              "Ninguna" : "roca Fresca",
              "Débil " : "roca débilmente meteorizada",
              "Moderada" : "roca moderadamente meteorizada",
              "Alta" : "roca altamente meteorizada",
              "Muy Alta" : "roca completamente meteorizada"
            }
            $("#gradoMeteoTL").val(formato["gradometeo1"]);
            $("#rocaCorresTL").val(auxRocaCorres[formato["gradometeo1"]]);
            $("#colorTL").val(formato["color1"]);
            $("#tamanoGranoTL").val(formato["tamanograno1"]);
            $("#compMineTL").val(formato["composicionmineral1"]);
            $("#espesorLitoTL").val(formato["litologiasasociadasopt1espesor"]);
            var auxGradoFrac ={
              '0-20' : "muy bajo",
              '20-40' : "bajo",
              '40-60' : "medio",
              '60-80' : "alto",
              '80-100' : "muy alto",
              'No Aplica' : "No Aplica" 
            }
            $("#gradoFracturaTL").val(auxGradoFrac[formato["gsi"]]);
            $("#espaciamientoTL").val(auxEspa);
            $("#rellenoTL").val(auxrelleno);
            if (formato["litologiasasociadasopt2exist"] == "true") {
              $("#gradoMeteoTL2").val(formato["gradometeo2"]);
              $("#rocaCorresTL2").val(auxRocaCorres[formato["gradometeo2"]]);
              $("#colorTL2").val(formato["color2"]);
              $("#tamanoGranoTL2").val(formato["tamanograno2"]);
              $("#compMineTL2").val(formato["composicionmineral2"]);
              $("#espesorLitoTL2").val(formato["litologiasasociadasopt2espesor"]);
              $("#gradoFracturaTL2").val(auxGradoFrac[formato["gsi"]]);
              $("#espaciamientoTL2").val(auxEspa);
              $("#rellenoTL2").val(auxrelleno);
            }

          }             
        }
      }
      if(estacionTL["Formularios"].count_UGS_Suelos>0){
        for (let j = 0; j < estacionTL["Formularios"].count_UGS_Suelos; j++) {
          var formato = estacionTL["Formularios"]["Form_UGS_Suelos"]["Form_UGS_Suelos_"+j]; 
          if (formato.activo) {
            if (formato["litologiasasociadasopt1exist"] == "true") {
              GenerarCamposTextoLib(ListaGenerarUGSsuelos); 
            }
            if (formato["litologiasasociadasopt2exist"] == "true") {
              GenerarCamposTextoLib(ListaGenerarUGSsuelos2); 
            }
            $("#generarTextoLib-content").empty();
            $("#generarTextoLib-content").append(modalContentTL);
            $("#muniTL").val(formato["municipios"]);
            $("#veredaTL").val(formato["vereda"]);
            $("#coorTL").val(estacionTL["Este"]+", "+estacionTL["Norte"]);
            $("#alturaTL").val(estacionTL["Altitud"]);
            $("#ugsTL").val(formato["nombreugs"]);
            $("#tipoAflorTL").val(formato["claseaflor"]);
            var auxespesorugs1 = parseInt(formato["litologiasasociadasopt1espesor"]);
            if (formato["litologiasasociadasopt2espesor"] !== "") {
              auxespesorugs1 += parseInt(formato["litologiasasociadasopt2espesor"]);
            }            
            $("#anchoTL").val(auxespesorugs1);
            auxespesorugs1 = auxespesorugs1 * 2;
            $("#largoTL").val(auxespesorugs1);
            if (formato["estructurasrelictas1"] != "No Aplica") {
              $("#estructurasSueloTL").val("con presencia de estructuras");
            }
            else{
              $("#estructurasSueloTL").val("sin presencia de estructuras");
            }
            $("#compMineSueloTL").val(formato["descripcionsuelos"]);
            $("#porcentajeClastosTL").val(formato["porcentajeclastos1"]);
            $("#porcentajeMatrizTL").val(formato["porcentajematriz1"]);
            if (formato["secuenciaestratiopt1orden"] == "1") {
              $("#tipoSueloTL").val("antrópico");
              $("#espesorSueloTL").val(formato["secuenciaestratiopt1espesor"]);
            }
            else if(formato["secuenciaestratiopt2orden"] == "1") {
              $("#tipoSueloTL").val("residual");
              $("#espesorSueloTL").val(formato["secuenciaestratiopt2espesor"]);
            }
            else if(formato["secuenciaestratiopt3orden"] == "1") {
              $("#tipoSueloTL").val("transportado");
              $("#espesorSueloTL").val(formato["secuenciaestratiopt3espesor"]);
            }
            if (formato["secuenciaestratisuelor1orden"] == "1") {
              $("#horizontesSueloTL").val("VI");
            }
            else if(formato["secuenciaestratisuelor2orden"] == "1") {
              $("#horizontesSueloTL").val("V");
            }
            else if(formato["secuenciaestratisuelor3orden"] == "1") {
              $("#horizontesSueloTL").val("IV");
            }
            var auxredoncezArray = ['bien redondeada','redondeada','subredondeada','subangular','angular','muy angular'];
            for (let ind = 0; ind < 6; ind++) {
              if (formato["redondez"+ind+"check_1"] == "true") {
                $("#redondezSueloTL").val(auxredoncezArray[ind]);
              }
            }
            var auxformaArray = ['esférica','equidimensional','tabular','plana-alargada','irregular'];
            for (let ind = 0; ind < 5; ind++) {
              if (formato["forma"+ind+"check_1"] == "true") {
                $("#formaSueloTL").val(auxformaArray[ind]);
              }
            }
            $("#orientacionSueloTL").val(formato["orientacion1"].toLowerCase());
            $("#soporteSueloTL").val(formato["estructurasoporte1"].toLowerCase());
            $("#gradacionSueloTL").val(formato["gradacion1"].toLowerCase());
            $("#seleccionSueloTL").val(formato["seleccion1"].toLowerCase());
            $("#plasticidadSueloTL").val(formato["plasticidad1"].toLowerCase());
            $("#resistenciaSueloTL").val(formato["resiscorte1"].toLowerCase());
            $("#compacidadSueloTL").val(formato["compacidadsuelosgruesos1"].toLowerCase());

            if (formato["litologiasasociadasopt2exist"] == "true") {
              $("#compMineSueloTL2").val(formato["descripcionsuelos"]);
              $("#porcentajeClastosTL2").val(formato["porcentajeclastos2"]);
              $("#porcentajeMatrizTL2").val(formato["porcentajematriz2"]);
              if (formato["estructurasrelictas2"] != "No Aplica") {
                $("#estructurasSueloTL2").val("con presencia de estructuras");
              }
              else{
                $("#estructurasSueloTL2").val("sin presencia de estructuras");
              }
              if (formato["secuenciaestratiopt1orden"] == "1") {
                $("#tipoSueloTL2").val("antrópico");
                $("#espesorSueloTL2").val(formato["secuenciaestratiopt1espesor"]);
              }
              else if(formato["secuenciaestratiopt2orden"] == "1") {
                $("#tipoSueloTL2").val("residual");
                $("#espesorSueloTL2").val(formato["secuenciaestratiopt2espesor"]);
              }
              else if(formato["secuenciaestratiopt3orden"] == "1") {
                $("#tipoSueloTL2").val("transportado");
                $("#espesorSueloTL2").val(formato["secuenciaestratiopt3espesor"]);
              }
              if (formato["secuenciaestratisuelor1orden"] == "1") {
                $("#horizontesSueloTL2").val("VI");
              }
              else if(formato["secuenciaestratisuelor2orden"] == "1") {
                $("#horizontesSueloTL2").val("V");
              }
              else if(formato["secuenciaestratisuelor3orden"] == "1") {
                $("#horizontesSueloTL2").val("IV");
              }
              var auxredoncezArray = ['bien redondeada','redondeada','subredondeada','subangular','angular','muy angular'];
              for (let ind = 0; ind < 6; ind++) {
                if (formato["redondez"+ind+"check_2"] == "true") {
                  $("#redondezSueloTL2").val(auxredoncezArray[ind]);
                }
              }
              var auxformaArray = ['esférica','equidimensional','tabular','plana-alargada','irregular'];
              for (let ind = 0; ind < 5; ind++) {
                if (formato["forma"+ind+"check_2"] == "true") {
                  $("#formaSueloTL2").val(auxformaArray[ind]);
                }
              }
              $("#orientacionSueloTL2").val(formato["orientacion2"].toLowerCase());
              $("#soporteSueloTL2").val(formato["estructurasoporte2"].toLowerCase());
              $("#gradacionSueloTL2").val(formato["gradacion2"].toLowerCase());
              $("#seleccionSueloTL2").val(formato["seleccion2"].toLowerCase());
              $("#plasticidadSueloTL2").val(formato["plasticidad2"].toLowerCase());
              $("#resistenciaSueloTL2").val(formato["resiscorte2"].toLowerCase());
              $("#compacidadSueloTL2").val(formato["compacidadsuelosgruesos2"].toLowerCase());
            }
          }
        }
      }      
    }
    if (tipoEstTL.includes("PUNTO")) {
      GenerarCamposTextoLib(ListaGenerarPunto); 

      $("#generarTextoLib-content").empty();
      $("#generarTextoLib-content").append(modalContentTL);
      $("#coorTL").val(estacionTL["Este"]+", "+estacionTL["Norte"]);
      $("#alturaTL").val(estacionTL["Altitud"]);
      $("#obsPuntoTL").val(estacionTL["Observaciones"]);
    }
  }
  if (tipoEstTL.includes("SGMF")) {
    if(tipoEstTL.includes("CARACT")){
      GenerarCamposTextoLib(ListaGenerarGeneral);
      if(estacionTL["Formularios"].count_SGMF>0){
        for (let j = 0; j < estacionTL["Formularios"].count_SGMF; j++) {
          var formato = estacionTL["Formularios"]["Form_SGMF"]["Form_SGMF_"+j]; 
          if (formato.activo) {
            GenerarCamposTextoLib(ListaGenerarSGMF);
            
            $("#generarTextoLib-content").empty();
            $("#generarTextoLib-content").append(modalContentTL);
            $("#muniTL").val(formato["municipios"]);
            $("#veredaTL").val(formato["vereda"]);
            $("#coorTL").val(estacionTL["Este"]+", "+estacionTL["Norte"]);
            $("#alturaTL").val(estacionTL["Altitud"]);
            var auxambienteArray = ["Morfoestructural","Volcánico","Denudacional","Fluvial-Lagunar","Marino-Costero","Glacial-Periglacial","Eólico","Kárstico","Antropogénico"];
            var auxAmbienteSGMFTL = "";
            for (let ind = 0; ind < 5; ind++) {
              if (formato["ambiente"+ind+"check"] == "true") {
                auxAmbienteSGMFTL += auxambienteArray[ind] + ", ";
              }
            }
            $("#ambienteSGMFTL").val(auxAmbienteSGMFTL);
            var auxUbicacionSGMFTL = "";
            auxUbicacionSGMFTL += "Geomorfoestructura: " + formato["ubicacionGeomorfoestructura"] + ". \n";
            auxUbicacionSGMFTL += "Provincia: " + formato["ubicacionProvincia"] + ". \n";
            auxUbicacionSGMFTL += "Region: " + formato["ubicacionRegion"] + ". \n";
            auxUbicacionSGMFTL += "Unidad: " + formato["ubicacionUnidad"] + ". \n";
            auxUbicacionSGMFTL += "Subunidad: " + formato["ubicacionSubunidad"] + ". \n";
            auxUbicacionSGMFTL += "Elemento: " + formato["ubicacionElemento"] + ".";
            $("#ubicacionGeomorfoTL").val(auxUbicacionSGMFTL);
          }
        }
      }
    }
    if(tipoEstTL.includes("PUNTO")){
      GenerarCamposTextoLib(ListaGenerarPunto);

      $("#generarTextoLib-content").empty();
      $("#generarTextoLib-content").append(modalContentTL);
      $("#coorTL").val(estacionTL["Este"]+", "+estacionTL["Norte"]);
      $("#alturaTL").val(estacionTL["Altitud"]);
      $("#obsPuntoTL").val(estacionTL["Observaciones"]);
    }
  }
  if (tipoEstTL.includes("CMM")) {
    if(tipoEstTL.includes("CARACT")){
      GenerarCamposTextoLib(ListaGenerarCMM);
      if(estacionTL["Formularios"].count_CATALOGO>0){
        for (let j = 0; j < estacionTL["Formularios"].count_CATALOGO; j++) {
          var formato = estacionTL["Formularios"]["Form_CATALOGO"]["Form_CATALOGO_"+j]; 
          if (formato.activo) {
            GenerarCamposTextoLib(ListaGenerarCMM1);
            if (formato["TIPO_MOV2"] != "No Aplica") {
              GenerarCamposTextoLib(ListaGenerarCMM2);
            }
            GenerarCamposTextoLib(ListaGenerarCMMNotas);
            $("#generarTextoLib-content").empty();
            $("#generarTextoLib-content").append(modalContentTL);
            $("#refGeoTL").val(formato["REF_GEOGRF"]);
            $("#veredaTL").val(formato["VEREDA"]);
            $("#muniTL").val(formato["NOM_MUN"]);
            $("#coorTL").val(estacionTL["Este"]+", "+estacionTL["Norte"]);
            $("#alturaTL").val(estacionTL["Altitud"]);
            $("#fechaEventoTL").val(formato["FECHA_MOV"]);
            $("#confiFechaTL").val(formato["ConfiFechaMM"]);
            $("#tipoMMTL").val(formato["TIPO_MOV1"]);
            $("#subTipoMMTL").val(formato["SUBTIPO_1"]);
            if (formato["TIPO_MOV2"] != "No Aplica") {
              $("#tipoMMTL2").val(formato["TIPO_MOV2"]);
              $("#subTipoMMTL2").val(formato["SUBTIPO_2"]);
            }
            $("#notasMMTL").val(formato["notas"]);
          }
        }
      }  
    }
    if (tipoEstTL.includes("PUNTO")) {
      GenerarCamposTextoLib(ListaGenerarPunto); 
      $("#generarTextoLib-content").empty();
      $("#generarTextoLib-content").append(modalContentTL);
      $("#coorTL").val(estacionTL["Este"]+", "+estacionTL["Norte"]);
      $("#alturaTL").val(estacionTL["Altitud"]);
      $("#obsPuntoTL").val(estacionTL["Observaciones"]);
    }
  }
  if (tipoEstTL.includes("IMM")) {
    if(tipoEstTL.includes("CARACT")){
      GenerarCamposTextoLib(ListaGenerarCMM);
      GenerarCamposTextoLib(ListaGenerarIMM);
      if(estacionTL["Formularios"].count_INVENTARIO>0){
        for (let j = 0; j < estacionTL["Formularios"].count_INVENTARIO; j++) {
          var formato = estacionTL["Formularios"]["Form_INVENTARIO"]["Form_INVENTARIO_"+j]; 
          if (formato.activo) {
            GenerarCamposTextoLib(ListaGenerarIMM1);
            if (formato["TIPO_MOV2"] != "No Aplica") {
              GenerarCamposTextoLib(ListaGenerarIMM2);
            }
            GenerarCamposTextoLib(ListaGenerarIMMNotas);
            $("#generarTextoLib-content").empty();
            $("#generarTextoLib-content").append(modalContentTL);
            $("#refGeoTL").val(formato["REF_GEOGRF"]);
            $("#veredaTL").val(formato["VEREDA"]);
            $("#muniTL").val(formato["NOM_MUN"]);
            $("#coorTL").val(estacionTL["Este"]+", "+estacionTL["Norte"]);
            $("#alturaTL").val(estacionTL["Altitud"]);
            $("#fechaEventoTL").val(formato["FECHA_MOV"]);
            $("#confiFechaTL").val(formato["ConfiFechaMM"]);
            var anchoWd = parseInt(formato["morfodimensiones0"]);
            var anchoWr = parseInt(formato["morfodimensiones1"]);
            var largoLd = parseInt(formato["morfodimensiones2"]);
            var largoLr = parseInt(formato["morfodimensiones3"]);
            if(anchoWd>anchoWr) {
              $("#anchoMMTL").val(anchoWd);
            }
            else {
              $("#anchoMMTL").val(anchoWr);
            }
            if(largoLd>largoLr) {
              $("#largoMMTL").val(largoLd);
            }
            else {
              $("#largoMMTL").val(largoLr);
            }
            $("#estadoMMTL").val(formato["ESTADO_ACT"]);
            $("#litoMMTL").val(formato["LITOLOGIA"]);
            $("#tipoMMTL").val(formato["TIPO_MOV1"]);
            $("#subTipoMMTL").val(formato["SUBTIPO_1"]);
            var auxmaterialArray = ['roca','detritos','tierra','lodos','turba'];
            for (let ind = 0; ind < 5; ind++) {
              if (formato["tipomaterial"+ind+"check_1"] == "true") {
                $("#tipoMaterialMMTL").val(auxmaterialArray[ind]);
              }
            }
            $("#humedadMMTL").val(formato["humedad1"]);
            $("#plasticidadMMTL").val(formato["plasticidad1"]);
            if (formato["TIPO_MOV2"] != "No Aplica") {
              $("#tipoMMTL2").val(formato["TIPO_MOV2"]);
              $("#subTipoMMTL2").val(formato["SUBTIPO_2"]);
              for (let ind = 0; ind < 5; ind++) {
                if (formato["tipomaterial"+ind+"check_2"] == "true") {
                  $("#tipoMaterialMMTL2").val(auxmaterialArray[ind]);
                }
              }
              $("#humedadMMTL2").val(formato["humedad2"]);
              $("#plasticidadMMTL2").val(formato["plasticidad2"]);
            }
            $("#notasMMTL").val(formato["notas"]);
            $("#apreciacionMMTL").val(formato["apreciacionriesgo"]);
          }
        }
      }  
    }
    if (tipoEstTL.includes("PUNTO")) {
      GenerarCamposTextoLib(ListaGenerarPunto); 
      $("#generarTextoLib-content").empty();
      $("#generarTextoLib-content").append(modalContentTL);
      $("#coorTL").val(estacionTL["Este"]+", "+estacionTL["Norte"]);
      $("#alturaTL").val(estacionTL["Altitud"]);
      $("#obsPuntoTL").val(estacionTL["Observaciones"]);
    }
  }
});

$("#btnModalGenerarTextoLib").click(function (e) { 
  e.preventDefault();
  for (let ind = 0; ind < titleFormModalTL.length; ind++) {
    const auxTitle = titleFormModalTL[ind];
    const auxId = idsFormModalTL[ind];
    if (auxTitle == "Vereda") {
      textoTL += "Localización: Vereda " + $("#"+auxId).val();
    }
    if (auxTitle == "Municipio") {
      textoTL += ", municipio " + capitalize($("#"+auxId).val()) + " del departamento de Caldas. \n";
    }
    if (auxTitle == "Coordenada") {
      textoTL += "Coordenadas: " + $("#"+auxId).val() + ". \n";
    }
    if (auxTitle == "Altura") {
      textoTL += "Altura: " + $("#"+auxId).val() + " m.s.n.m. \n";
    }
    if (auxTitle == "UGS") {
      textoTL += "Descripción de las observaciones: Nos encontramos sobre la UGS " + $("#"+auxId).val() + ".\n";
    }
    if (auxTitle == "Tipo Afloramiento") {
      textoTL += "Tamaño del afloramiento: El afloramiento de tipo " + $("#"+auxId).val().toLowerCase() ;
    }
    if (auxTitle == "Ancho") {
      textoTL += " tiene de ancho " + $("#"+auxId).val() +"m" ;
    }
    if (auxTitle == "Largo") {
      textoTL += " y de largo " + $("#"+auxId).val()+"m.\n" ;
    }
    if (auxTitle == "Direcciones Discontinuidades") {
      textoTL += "Generalidades: Se tomaron los siguientes datos estructurales medidos en campo: " + $("#"+auxId).val() ;
    }
    if (auxTitle == "Tipos Discontinuidades") {
      textoTL += "; los cuales corresponden respectivamente a las siguientes discontinuidades: " + $("#"+auxId).val() +".\n";
    }
    if (auxTitle == "Litología 1") {
      textoTL += "Calidad de la Roca 1\n";
    }
    if (auxTitle == "Litología 2") {
      textoTL += "Calidad de la Roca 2\n";
    }
    if (auxTitle == "Grado Meteorización") {
      textoTL += "Se evidencia que el grado de meteorización de la roca es " + $("#"+auxId).val().toLowerCase();
    }
    if (auxTitle == "Roca Correspondiente") {
      textoTL += " que corresponde a " + $("#"+auxId).val();
    }
    if (auxTitle == "Color") {
      textoTL += ", de color " + $("#"+auxId).val();
    }
    if (auxTitle == "Tamaño Grano") {
      textoTL += " y tamaño de grano " + $("#"+auxId).val().toLowerCase();
    }
    if (auxTitle == "Composición Mineralógica") {
      textoTL += ", compuesta mineralógicamente por " + $("#"+auxId).val()+".";
    }
    if (auxTitle == "Espesor Lito") {
      textoTL += " Esta capa de roca tiene un espesor de " + $("#"+auxId).val()+"m";
    }
    if (auxTitle == "Grado de Fracturamiento") {
      textoTL += " con un grado de fracturamiento " + $("#"+auxId).val()+".";
    }
    if (auxTitle == "Espaciamiento Diaclasas") {
      if ($("#"+auxId).val() != "") {
        textoTL += " Las diaclasas tienen un espaciamiento " + $("#"+auxId).val().toLowerCase();
      }
    }
    if (auxTitle == "Relleno Diaclasas") {
      if ($("#"+auxId).val() != "") {
        textoTL += " con rellenos de " + $("#"+auxId).val().toLowerCase()+".\n";
      }
      else{
        textoTL += "\n";
      }
    }
    if (auxTitle == "Litología Suelo 1") {
      textoTL += "Litología Suelo 1\n";
    }
    if (auxTitle == "Litología Suelo 2") {
      textoTL += "Litología Suelo 2\n";
    }
    if (auxTitle == "Composición Mineralógica Suelo") {
      textoTL += "Se identifica un suelo compuesto por " + $("#"+auxId).val();
    }
    if (auxTitle == "Porcentaje de Clastos") {
      textoTL += ", el porcentaje de clastos es " + $("#"+auxId).val()+"%";
    }
    if (auxTitle == "Porcentaje de Matriz") {
      textoTL += " y el porcentaje de matriz es " + $("#"+auxId).val()+"% ";
    }
    if (auxTitle == "Estructuras del Suelos") {
      textoTL += $("#"+auxId).val();
    }
    if (auxTitle == "Tipo de Suelo") {
      textoTL += ". Es suelo " + $("#"+auxId).val();
    }
    if (auxTitle == "Horizonte") {
      textoTL += " que pertenece al horizonte " + $("#"+auxId).val();
    }
    if (auxTitle == "Espesor Suelo") {
      textoTL += " de espesor " + $("#"+auxId).val()+"m";
    }
    if (auxTitle == "Redondez de los Clastos") {
      textoTL += ", la redondez de los clastos es " + $("#"+auxId).val();
    }
    if (auxTitle == "Forma de los Clastos") {
      textoTL += " y forma " + $("#"+auxId).val();
    }
    if (auxTitle == "Soporte Suelo") {
      if ($("#"+auxId).val() != null) {
        textoTL += ", " + $("#"+auxId).val();
      }
      else{
        textoTL += ", sin estructura soporte";
      }
    }
    if (auxTitle == "Orientación de los Clastos") {
      textoTL += ", con " + $("#"+auxId).val()+ " en sus clastos.";
    }
    if (auxTitle == "Gradación de la Matriz") {
      if ($("#"+auxId).val() == "sin gradación") {
        textoTL += " La matriz está " + $("#"+auxId).val();
      }
      else{
        textoTL += " La matriz está con gradación " + $("#"+auxId).val();
      }
    }
    if (auxTitle == "Selección de la Matriz") {
      textoTL += ", tiene una selección " + $("#"+auxId).val();
    }
    if (auxTitle == "Plasticidad de la Matriz") {
      textoTL += ", " + $("#"+auxId).val();
    }
    if (auxTitle == "Resistencia al Corte") {
      if ($("#"+auxId).val() != null) {
        textoTL += ", con la resistencia al corte " + $("#"+auxId).val();
      }
      else{
        textoTL += ", sin resistencia al corte";
      }
    }
    if (auxTitle == "Compacidad de la Matriz") {
      if ($("#"+auxId).val() != null) {
        textoTL += " y de compacidad " + $("#"+auxId).val()+".\n";
      }
      else{
        textoTL += ", sin compacidad.\n";
      }
    }
    if (auxTitle == "Tipo de Ambiente SGMF") {
      textoTL += "Se observa el tipo de ambiente " + $("#"+auxId).val() + ".\n";
    }
    if (auxTitle == "Ubicación Geomorfológica") {
      textoTL += "Ubicación Geomorfológica\n" + $("#"+auxId).val() + "\n";
    }
    if (auxTitle == "Caracterización Geoformas") {
      textoTL += "Caracterización Geoformas\n" + $("#"+auxId).val() + "\n";
    }
    if (auxTitle == "Observaciones") {
      textoTL += "Observaciones: " + $("#"+auxId).val() + "\n";
    }
    if (auxTitle == "Referencia Geográfica") {
      textoTL += "Localización: " + $("#"+auxId).val();
    }
    if (auxTitle == "Vereda CMM") {
      textoTL += ", vereda " + $("#"+auxId).val();
    }
    if (auxTitle == "Fecha Evento") {
      textoTL += "Se identifica un Movimiento en Masa ocurrido en la fecha " + $("#"+auxId).val();
    }
    if (auxTitle == "Confiabilidad Fecha") {
      if ($("#"+auxId).val() == "Incierta" || $("#"+auxId).val() == "Exacta") {
        textoTL += " con una confiabilidad " + $("#"+auxId).val().toLowerCase();
      }
      else {
        textoTL += " con una " + $("#"+auxId).val().toLowerCase();
      }
    }
    if (auxTitle == "Ancho MM") {
      textoTL += ", tiene de ancho de " + $("#"+auxId).val()+"m";
    }
    if (auxTitle == "Largo MM") {
      textoTL += " y de largo de " + $("#"+auxId).val()+"m";
    }
    if (auxTitle == "Estado MM") {
      textoTL += ", su estado es " + $("#"+auxId).val().toLowerCase();
    }
    if (auxTitle == "Litología MM") {
      textoTL += " y se desarrolla sobre " + $("#"+auxId).val().toLowerCase()+".\n";
    }
    if (auxTitle == "Movimiento 1") {
      textoTL += "Movimiento 1\n";
    }
    if (auxTitle == "Movimiento 2") {
      textoTL += "Movimiento 2\n";
    }
    if (auxTitle == "Tipo Movimiento") {
      textoTL += "El evento descrito es de tipo " + $("#"+auxId).val();
    }
    if (auxTitle == "Subtipo Movimiento") {
      textoTL += " y subtipo " + $("#"+auxId).val();
    }
    if (auxTitle == "Tipo de Material MM") {
      textoTL += ", el material que lo conforma es " + $("#"+auxId).val().toLowerCase();
    }
    if (auxTitle == "Humedad del Material MM") {
      textoTL += " que está " + $("#"+auxId).val().toLowerCase();
    }
    if (auxTitle == "Plasticidad del Material MM") {
      if ($("#"+auxId).val().toLowerCase() == "no plástico") {
        textoTL += " y no tiene plasticidad.\n";
      }
      else if ($("#"+auxId).val().toLowerCase() == "no aplica") {
        textoTL += ".";
      }
      else{
        textoTL += " y tiene una plasticidad " + $("#"+auxId).val().toLowerCase()+".\n";
      }
    }
    if (auxTitle == "Notas") {
      textoTL += "Observaciones: " + $("#"+auxId).val()+".\n";
    }
    if (auxTitle == "Apreciación del Riesgo") {
      textoTL += "Apreciación del Riesgo: " + $("#"+auxId).val()+".";
    }
    
  }
  $("#est-textollib-1").empty();
  $("#est-textollib-1").val(textoTL);
  $('#modal-generarTextoLib').modal('hide');
});

function capitalize(str) {
  var capitalized = str.toLowerCase();
  capitalized = capitalized.charAt(0).toUpperCase() + capitalized.slice(1);
  return capitalized;
}

// var estacio = ["YD111", "YD112", "110", "YD122"]

//CargarEstacionesDesdeBackUp(2024, estacio);
function CargarEstacionesDesdeBackUp(idEstaciones, estaciones) {
  var estacionesSubir = [];
  for (let i = 0; i < base_clase.length; i++) {
    const estacion = base_clase[i];
    if (estaciones.includes(estacion.Estacion)) {
      var auxEstacion = {'activo':true,'FotosGenerales': {'FotosURL':{'count':0}},'FotosLibreta': {'FotosURL':{'count':0}}, 'Formularios':{}};
  
      auxEstacion.Estacion = estacion.Estacion;
      auxEstacion.TipoEstacion = estacion.TipoEstacion;
      auxEstacion.Este = estacion.Este;
      auxEstacion.Norte = estacion.Norte;
      auxEstacion.Altitud = estacion.Altitud;
      auxEstacion.Fotos = estacion.Fotos;
      auxEstacion.FotosLib = estacion.FotosLib;
      auxEstacion.Observaciones = estacion.Observaciones;
      auxEstacion.Fecha = estacion.Fecha;
      auxEstacion.Propietario = estacion.Propietario;
  
      if (estacion.FotosCount == 0) {
        // auxEstacion.FotosGenerales.FotosURL.count = 0;
      }
      if (estacion.FotosLibCount == 0) {
        // auxEstacion.FotosLibreta.FotosURL.count = 0;
      }
      
      auxEstacion.Formularios.count_UGS_Rocas = estacion.Formularios.counts.UGS_Rocas;
      auxEstacion.Formularios.count_UGS_Suelos = estacion.Formularios.counts.UGS_Suelos;
      auxEstacion.Formularios.count_SGMF = estacion.Formularios.counts.SGMF;
      auxEstacion.Formularios.count_CATALOGO = estacion.Formularios.counts.CATALOGO;
      auxEstacion.Formularios.count_INVENTARIO = estacion.Formularios.counts.INVENTARIO;
  
      if (auxEstacion.Formularios.count_UGS_Rocas>0) {
        auxEstacion.Formularios.Form_UGS_Rocas = {};
      }
      if (auxEstacion.Formularios.count_UGS_Suelos>0) {
        auxEstacion.Formularios.Form_UGS_Suelos = {};
      }
      if (auxEstacion.Formularios.count_SGMF>0) {
        auxEstacion.Formularios.Form_SGMF = {};
      }
      if (auxEstacion.Formularios.count_CATALOGO>0) {
        auxEstacion.Formularios.Form_CATALOGO = {};
      }
      if (auxEstacion.Formularios.count_INVENTARIO>0) {
        auxEstacion.Formularios.Form_INVENTARIO = {};
      }
  
      for (let j = 0; j < auxEstacion.Formularios.count_UGS_Rocas; j++) {
        const CurrentForm = estacion.Formularios["Form_UGS_Rocas_"+j];
        var auxCurrentForm = {'activo':true, 'Discontinuidades':{}, 'FotosAnexas':{}};
  
        auxCurrentForm.Discontinuidades.count = CurrentForm.Discontinuidades;
        auxCurrentForm.FotosAnexas.count = CurrentForm.FotosAnexas;
        
        auxCurrentForm.claseaflor = CurrentForm.Spinners.claseaflor;
        auxCurrentForm.municipios = CurrentForm.Spinners.municipios;
        auxCurrentForm.gsi = CurrentForm.Spinners.gsi;
  
        auxCurrentForm.noformato = CurrentForm.EditText.noformato;
        auxCurrentForm.vereda = CurrentForm.EditText.vereda;
        auxCurrentForm.noestacion = CurrentForm.EditText.noestacion;
        auxCurrentForm.secuenciaestratiopt1orden = CurrentForm.EditText.secuenciaestratiopt1orden;
        auxCurrentForm.secuenciaestratiopt1espesor = CurrentForm.EditText.secuenciaestratiopt1espesor;
        auxCurrentForm.secuenciaestratiopt2orden = CurrentForm.EditText.secuenciaestratiopt2orden;
        auxCurrentForm.secuenciaestratiopt2espesor = CurrentForm.EditText.secuenciaestratiopt2espesor;
        auxCurrentForm.secuenciaestratiopt3orden = CurrentForm.EditText.secuenciaestratiopt3orden;
        auxCurrentForm.secuenciaestratiopt3espesor = CurrentForm.EditText.secuenciaestratiopt3espesor;
        auxCurrentForm.secuenciaestratiopt4orden = CurrentForm.EditText.secuenciaestratiopt4orden;
        auxCurrentForm.secuenciaestratiopt4espesor = CurrentForm.EditText.secuenciaestratiopt4espesor;
        
        var auxHorizontes = auxCurrentForm.secuenciaestratiopt3orden.split(" ").join("");
  
        if (auxHorizontes == "") {
          auxCurrentForm.secuenciaestratisuelor1orden = "";
          auxCurrentForm.secuenciaestratisuelor1espesor = "";
          auxCurrentForm.secuenciaestratisuelor2orden = "";
          auxCurrentForm.secuenciaestratisuelor2espesor = "";
          auxCurrentForm.secuenciaestratisuelor3orden = "";
          auxCurrentForm.secuenciaestratisuelor3espesor = "";
        }
        else{
          auxCurrentForm.secuenciaestratisuelor1orden = CurrentForm.EditText.secuenciaestratisuelor1orden;
          auxCurrentForm.secuenciaestratisuelor1espesor = CurrentForm.EditText.secuenciaestratisuelor1espesor;
          auxCurrentForm.secuenciaestratisuelor2orden = CurrentForm.EditText.secuenciaestratisuelor2orden;
          auxCurrentForm.secuenciaestratisuelor2espesor = CurrentForm.EditText.secuenciaestratisuelor2espesor;
          auxCurrentForm.secuenciaestratisuelor3orden = CurrentForm.EditText.secuenciaestratisuelor3orden;
          auxCurrentForm.secuenciaestratisuelor3espesor = CurrentForm.EditText.secuenciaestratisuelor3espesor;
        }
  
        auxCurrentForm.perfilmeteorizacion = CurrentForm.EditText.perfilmeteorizacion;
        auxCurrentForm.litologiasasociadasopt1espesor = CurrentForm.EditText.litologiasasociadasopt1espesor;
        auxCurrentForm.litologiasasociadasopt2espesor = CurrentForm.EditText.litologiasasociadasopt2espesor;
        auxCurrentForm.nombreugs = CurrentForm.EditText.nombreugs;
        auxCurrentForm.color1 = CurrentForm.EditText.color1;
        auxCurrentForm.color2 = CurrentForm.EditText.color2;
        auxCurrentForm.composicionmineral1 = CurrentForm.EditText.composicionmineral1;
        auxCurrentForm.composicionmineral2 = CurrentForm.EditText.composicionmineral2;
        
        auxCurrentForm.litologiasasociadasopt1exist = CurrentForm.CheckBox.litologiasasociadasopt1exist+"";
        auxCurrentForm.litologiasasociadasopt2exist = CurrentForm.CheckBox.litologiasasociadasopt2exist+"";
        
        auxCurrentForm.fabrica2 = CurrentForm.RadioGrp.fabrica2;
        auxCurrentForm.fabrica1 = CurrentForm.RadioGrp.fabrica1;
        auxCurrentForm.humedad2 = CurrentForm.RadioGrp.humedad2;
        auxCurrentForm.humedad1 = CurrentForm.RadioGrp.humedad1;
        auxCurrentForm.tamañograno2 = CurrentForm.RadioGrp.tamañograno2;
        auxCurrentForm.tamañograno1 = CurrentForm.RadioGrp.tamañograno1;
        auxCurrentForm.gradometeo2 = CurrentForm.RadioGrp.gradometeo2;
        auxCurrentForm.gradometeo1 = CurrentForm.RadioGrp.gradometeo1;
        auxCurrentForm.resistenciacomp2 = CurrentForm.RadioGrp.resistenciacomp2;
        auxCurrentForm.resistenciacomp1 = CurrentForm.RadioGrp.resistenciacomp1;
  
        for (let k = 1; k <= CurrentForm.Discontinuidades; k++) {
          var auxCurrentFormDiscont = {'activo' : true};
  
          auxCurrentFormDiscont.TipoDiscont = CurrentForm.Spinners["TipoDiscont"+k];
          auxCurrentFormDiscont.PersistenciaDiscont = CurrentForm.Spinners["PersistenciaDiscont"+k];
          auxCurrentFormDiscont.AnchoAberDiscont = CurrentForm.Spinners["AnchoAberDiscont"+k];
          auxCurrentFormDiscont.TipoRellenoDiscont = CurrentForm.Spinners["TipoRellenoDiscont"+k];
          auxCurrentFormDiscont.RugosidadSuperDiscont = CurrentForm.Spinners["RugosidadSuperDiscont"+k];
          auxCurrentFormDiscont.FormaSuperDiscont = CurrentForm.Spinners["FormaSuperDiscont"+k];
          auxCurrentFormDiscont.HumedadDiscont = CurrentForm.Spinners["HumedadDiscont"+k];
          auxCurrentFormDiscont.EspaciamientoDiscont = CurrentForm.Spinners["EspaciamientoDiscont"+k];
          auxCurrentFormDiscont.MeteorizacionDiscont = CurrentForm.Spinners["MeteorizacionDiscont"+k];
          auxCurrentFormDiscont.DirBuzamiento = CurrentForm.EditText["DirBuzamiento"+k];
          auxCurrentFormDiscont.Buzamiento = CurrentForm.EditText["Buzamiento"+k];
          auxCurrentFormDiscont.RakePitch = CurrentForm.EditText["RakePitch"+k];
          auxCurrentFormDiscont.DirRakePitch = CurrentForm.EditText["DirRakePitch"+k];
          auxCurrentFormDiscont.AzBzBz1 = CurrentForm.EditText["AzBzBz1"+k];
          auxCurrentFormDiscont.AzBzBz2 = CurrentForm.EditText["AzBzBz2"+k];
          auxCurrentFormDiscont.AlturaDiscont = CurrentForm.EditText["AlturaDiscont"+k];
          auxCurrentFormDiscont.ObservacionesDiscont = CurrentForm.EditText["ObservacionesDiscont"+k];    
      
          auxCurrentForm.Discontinuidades['Discont_'+k] = auxCurrentFormDiscont;
        
        }
  
        for (let k = 1; k <= CurrentForm.FotosAnexas; k++) {
          var auxCurrentFormFotoAnexa = {'activo' : true};
  
          auxCurrentFormFotoAnexa.NombreFotosAnexas = CurrentForm.EditText["NombreFotosAnexas"+k];
          auxCurrentFormFotoAnexa.DescriFotosAnexas = CurrentForm.EditText["DescriFotosAnexas"+k];    
          
          auxCurrentForm.FotosAnexas['FotoAnexa_'+k] = auxCurrentFormFotoAnexa;
        }
  
        auxEstacion.Formularios.Form_UGS_Rocas['Form_UGS_Rocas_'+j] = auxCurrentForm;
      
      }
  
      for (let j = 0; j < auxEstacion.Formularios.count_UGS_Suelos; j++) {
        const CurrentForm = estacion.Formularios["Form_UGS_Suelos_"+j];
        var auxCurrentForm = {'activo':true, 'FotosAnexas':{}};
  
        auxCurrentForm.FotosAnexas.count = CurrentForm.FotosAnexas;
        
        auxCurrentForm.claseaflor = CurrentForm.Spinners.claseaflor;
        auxCurrentForm.municipios = CurrentForm.Spinners.municipios;
  
        auxCurrentForm.noformato = CurrentForm.EditText.noformato;
        auxCurrentForm.vereda = CurrentForm.EditText.vereda;
        auxCurrentForm.noestacion = CurrentForm.EditText.noestacion;
        auxCurrentForm.secuenciaestratiopt1orden = CurrentForm.EditText.secuenciaestratiopt1orden;
        auxCurrentForm.secuenciaestratiopt1espesor = CurrentForm.EditText.secuenciaestratiopt1espesor;
        auxCurrentForm.secuenciaestratiopt2orden = CurrentForm.EditText.secuenciaestratiopt2orden;
        auxCurrentForm.secuenciaestratiopt2espesor = CurrentForm.EditText.secuenciaestratiopt2espesor;
        auxCurrentForm.secuenciaestratiopt3orden = CurrentForm.EditText.secuenciaestratiopt3orden;
        auxCurrentForm.secuenciaestratiopt3espesor = CurrentForm.EditText.secuenciaestratiopt3espesor;
              
        var auxHorizontes = auxCurrentForm.secuenciaestratiopt2orden.split(" ").join("");
  
        if (auxHorizontes == "") {
          auxCurrentForm.secuenciaestratisuelor1orden = "";
          auxCurrentForm.secuenciaestratisuelor1espesor = "";
          auxCurrentForm.secuenciaestratisuelor2orden = "";
          auxCurrentForm.secuenciaestratisuelor2espesor = "";
          auxCurrentForm.secuenciaestratisuelor3orden = "";
          auxCurrentForm.secuenciaestratisuelor3espesor = "";
        }
        else{
          auxCurrentForm.secuenciaestratisuelor1orden = CurrentForm.EditText.secuenciaestratisuelor1orden;
          auxCurrentForm.secuenciaestratisuelor1espesor = CurrentForm.EditText.secuenciaestratisuelor1espesor;
          auxCurrentForm.secuenciaestratisuelor2orden = CurrentForm.EditText.secuenciaestratisuelor2orden;
          auxCurrentForm.secuenciaestratisuelor2espesor = CurrentForm.EditText.secuenciaestratisuelor2espesor;
          auxCurrentForm.secuenciaestratisuelor3orden = CurrentForm.EditText.secuenciaestratisuelor3orden;
          auxCurrentForm.secuenciaestratisuelor3espesor = CurrentForm.EditText.secuenciaestratisuelor3espesor;
        }
  
        auxCurrentForm.litologiasasociadasopt1espesor = CurrentForm.EditText.litologiasasociadasopt1espesor;
        auxCurrentForm.litologiasasociadasopt2espesor = CurrentForm.EditText.litologiasasociadasopt2espesor;
        auxCurrentForm.nombreugs = CurrentForm.EditText.nombreugs;
        auxCurrentForm.color1 = CurrentForm.EditText.color1;
        auxCurrentForm.color2 = CurrentForm.EditText.color2;
        auxCurrentForm.porcentajematriz2 = CurrentForm.EditText.porcentajematriz2;
        auxCurrentForm.porcentajematriz1 = CurrentForm.EditText.porcentajematriz1;
        auxCurrentForm.porcentajeclastos2 = CurrentForm.EditText.porcentajeclastos2;
        auxCurrentForm.porcentajeclastos1 = CurrentForm.EditText.porcentajeclastos1;
        
        auxCurrentForm.granulometria0_2 = CurrentForm.EditText.granulometria0_2;
        auxCurrentForm.granulometria0_1 = CurrentForm.EditText.granulometria0_1;
        auxCurrentForm.granulometria1_2 = CurrentForm.EditText.granulometria1_2;
        auxCurrentForm.granulometria1_1 = CurrentForm.EditText.granulometria1_1;
        auxCurrentForm.granulometria2_2 = CurrentForm.EditText.granulometria2_2;
        auxCurrentForm.granulometria2_1 = CurrentForm.EditText.granulometria2_1;
        auxCurrentForm.granulometria3_2 = CurrentForm.EditText.granulometria3_2;
        auxCurrentForm.granulometria3_1 = CurrentForm.EditText.granulometria3_1;
        auxCurrentForm.granulometria4_2 = CurrentForm.EditText.granulometria4_2;
        auxCurrentForm.granulometria4_1 = CurrentForm.EditText.granulometria4_1;
        auxCurrentForm.granulometria5_2 = CurrentForm.EditText.granulometria5_2;
        auxCurrentForm.granulometria5_1 = CurrentForm.EditText.granulometria5_1;
  
        auxCurrentForm.granulometriamatriz0_2 = CurrentForm.EditText.granulometriamatriz0_2;
        auxCurrentForm.granulometriamatriz0_1 = CurrentForm.EditText.granulometriamatriz0_1;
        auxCurrentForm.granulometriamatriz1_2 = CurrentForm.EditText.granulometriamatriz1_2;
        auxCurrentForm.granulometriamatriz1_1 = CurrentForm.EditText.granulometriamatriz1_1;
        auxCurrentForm.granulometriamatriz2_2 = CurrentForm.EditText.granulometriamatriz2_2;
        auxCurrentForm.granulometriamatriz2_1 = CurrentForm.EditText.granulometriamatriz2_1;
        auxCurrentForm.granulometriamatriz3_2 = CurrentForm.EditText.granulometriamatriz3_2;
        auxCurrentForm.granulometriamatriz3_1 = CurrentForm.EditText.granulometriamatriz3_1;
        auxCurrentForm.granulometriamatriz4_2 = CurrentForm.EditText.granulometriamatriz4_2;
        auxCurrentForm.granulometriamatriz4_1 = CurrentForm.EditText.granulometriamatriz4_1;
        auxCurrentForm.granulometriamatriz5_2 = CurrentForm.EditText.granulometriamatriz5_2;
        auxCurrentForm.granulometriamatriz5_1 = CurrentForm.EditText.granulometriamatriz5_1;
        auxCurrentForm.granulometriamatriz6_2 = CurrentForm.EditText.granulometriamatriz6_2;
        auxCurrentForm.granulometriamatriz6_1 = CurrentForm.EditText.granulometriamatriz6_1;
        auxCurrentForm.granulometriamatriz7_2 = CurrentForm.EditText.granulometriamatriz7_2;
        auxCurrentForm.granulometriamatriz7_1 = CurrentForm.EditText.granulometriamatriz7_1;
        
        auxCurrentForm.observacionessuelos = CurrentForm.EditText.observacionessuelos;
        auxCurrentForm.descripcionsuelos = CurrentForm.EditText.descripcionsuelos;
  
        auxCurrentForm.litologiasasociadasopt1exist = CurrentForm.CheckBox.litologiasasociadasopt1exist+"";
        auxCurrentForm.litologiasasociadasopt2exist = CurrentForm.CheckBox.litologiasasociadasopt2exist+"";
        
        auxCurrentForm.forma0check_2 = CurrentForm.CheckBox.forma0check_2+"";
        auxCurrentForm.forma0check_1 = CurrentForm.CheckBox.forma0check_1+"";
        auxCurrentForm.forma1check_2 = CurrentForm.CheckBox.forma1check_2+"";
        auxCurrentForm.forma1check_1 = CurrentForm.CheckBox.forma1check_1+"";
        auxCurrentForm.forma2check_2 = CurrentForm.CheckBox.forma2check_2+"";
        auxCurrentForm.forma2check_1 = CurrentForm.CheckBox.forma2check_1+"";
        auxCurrentForm.forma3check_2 = CurrentForm.CheckBox.forma3check_2+"";
        auxCurrentForm.forma3check_1 = CurrentForm.CheckBox.forma3check_1+"";
        auxCurrentForm.forma4check_2 = CurrentForm.CheckBox.forma4check_2+"";
        auxCurrentForm.forma4check_1 = CurrentForm.CheckBox.forma4check_1+"";
  
        auxCurrentForm.redondez0check_2 = CurrentForm.CheckBox.redondez0check_2+"";
        auxCurrentForm.redondez0check_1 = CurrentForm.CheckBox.redondez0check_1+"";
        auxCurrentForm.redondez1check_2 = CurrentForm.CheckBox.redondez1check_2+"";
        auxCurrentForm.redondez1check_1 = CurrentForm.CheckBox.redondez1check_1+"";
        auxCurrentForm.redondez2check_2 = CurrentForm.CheckBox.redondez2check_2+"";
        auxCurrentForm.redondez2check_1 = CurrentForm.CheckBox.redondez2check_1+"";
        auxCurrentForm.redondez3check_2 = CurrentForm.CheckBox.redondez3check_2+"";
        auxCurrentForm.redondez3check_1 = CurrentForm.CheckBox.redondez3check_1+"";
        auxCurrentForm.redondez4check_2 = CurrentForm.CheckBox.redondez4check_2+"";
        auxCurrentForm.redondez4check_1 = CurrentForm.CheckBox.redondez4check_1+"";
        auxCurrentForm.redondez5check_2 = CurrentForm.CheckBox.redondez5check_2+"";
        auxCurrentForm.redondez5check_1 = CurrentForm.CheckBox.redondez5check_1+"";
              
        auxCurrentForm.estructurasoporte2 = CurrentForm.RadioGrp.estructurasoporte2;
        auxCurrentForm.estructurasoporte1 = CurrentForm.RadioGrp.estructurasoporte1;
        auxCurrentForm.condicionhumedad2 = CurrentForm.RadioGrp.condicionhumedad2;
        auxCurrentForm.condicionhumedad1 = CurrentForm.RadioGrp.condicionhumedad1;
        auxCurrentForm.estructurasrelictas2 = CurrentForm.RadioGrp.estructurasrelictas2;
        auxCurrentForm.estructurasrelictas1 = CurrentForm.RadioGrp.estructurasrelictas1;
        auxCurrentForm.orientacion2 = CurrentForm.RadioGrp.orientacion2;
        auxCurrentForm.orientacion1 = CurrentForm.RadioGrp.orientacion1;
        auxCurrentForm.meteorizacionclastos2 = CurrentForm.RadioGrp.meteorizacionclastos2;
        auxCurrentForm.meteorizacionclastos1 = CurrentForm.RadioGrp.meteorizacionclastos1;
        auxCurrentForm.gradacion2 = CurrentForm.RadioGrp.gradacion2;
        auxCurrentForm.gradacion1 = CurrentForm.RadioGrp.gradacion1;
        auxCurrentForm.seleccion2 = CurrentForm.RadioGrp.seleccion2;
        auxCurrentForm.seleccion1 = CurrentForm.RadioGrp.seleccion1;
        auxCurrentForm.plasticidad2 = CurrentForm.RadioGrp.plasticidad2;
        auxCurrentForm.plasticidad1 = CurrentForm.RadioGrp.plasticidad1;
        auxCurrentForm.resiscorte2 = CurrentForm.RadioGrp.resiscorte2;
        auxCurrentForm.resiscorte1 = CurrentForm.RadioGrp.resiscorte1;
        auxCurrentForm.compacidadsuelosgruesos2 = CurrentForm.RadioGrp.compacidadsuelosgruesos2;
        auxCurrentForm.compacidadsuelosgruesos1 = CurrentForm.RadioGrp.compacidadsuelosgruesos1;
  
        if (auxCurrentForm.orientacion2 == 'Imbricado') {
          auxCurrentForm.dirimbricacion2 = CurrentForm.EditText.dirimbricacion2;
        }
        if (auxCurrentForm.orientacion1 == 'Imbricado') {
          auxCurrentForm.dirimbricacion1 = CurrentForm.EditText.dirimbricacion1;
        }
  
        for (let k = 1; k <= CurrentForm.FotosAnexas; k++) {
          var auxCurrentFormFotoAnexa = {'activo' : true};
          
          auxCurrentFormFotoAnexa.NombreFotosAnexas = CurrentForm.EditText["NombreFotosAnexas"+k];
          auxCurrentFormFotoAnexa.DescriFotosAnexas = CurrentForm.EditText["DescriFotosAnexas"+k];    
          
          auxCurrentForm.FotosAnexas['FotoAnexa_'+k] = auxCurrentFormFotoAnexa;
        }
  
        auxEstacion.Formularios.Form_UGS_Suelos['Form_UGS_Suelos_'+j] = auxCurrentForm;
      
      }

      for (let j = 0; j < auxEstacion.Formularios.count_SGMF; j++) {
        const CurrentForm = estacion.Formularios["Form_SGMF_"+j];
        var auxCurrentForm = {'activo':true, 'SGMF':{}, 'FotosAnexas':{}};
  
        auxCurrentForm.SGMF.count = CurrentForm.SGMF;
        auxCurrentForm.FotosAnexas.count = CurrentForm.FotosAnexas;
        
        auxCurrentForm.municipios = CurrentForm.Spinners.municipios;
  
        auxCurrentForm.noformato = CurrentForm.EditText.noformato;
        auxCurrentForm.vereda = CurrentForm.EditText.vereda;
        auxCurrentForm.noestacion = CurrentForm.EditText.noestacion;
        auxCurrentForm.ubicacionGeomorfoestructura = CurrentForm.EditText.ubicacionGeomorfoestructura;
        auxCurrentForm.ubicacionProvincia = CurrentForm.EditText.ubicacionProvincia;
        auxCurrentForm.ubicacionRegion = CurrentForm.EditText.ubicacionRegion;
        auxCurrentForm.ubicacionUnidad = CurrentForm.EditText.ubicacionUnidad;
        auxCurrentForm.ubicacionSubunidad = CurrentForm.EditText.ubicacionSubunidad;
        auxCurrentForm.ubicacionElemento = CurrentForm.EditText.ubicacionElemento;
        auxCurrentForm.nombreSGMF = CurrentForm.EditText.nombreSGMF;
        auxCurrentForm.codigoSGMF = CurrentForm.EditText.codigoSGMF;
        auxCurrentForm.observacionesSGMF = CurrentForm.EditText.observacionesSGMF;
        
        auxCurrentForm.ambiente0check = CurrentForm.CheckBox.ambiente0check;
        auxCurrentForm.ambiente1check = CurrentForm.CheckBox.ambiente1check;
        auxCurrentForm.ambiente2check = CurrentForm.CheckBox.ambiente2check;
        auxCurrentForm.ambiente3check = CurrentForm.CheckBox.ambiente3check;
        auxCurrentForm.ambiente4check = CurrentForm.CheckBox.ambiente4check;
        auxCurrentForm.ambiente5check = CurrentForm.CheckBox.ambiente5check;
        auxCurrentForm.ambiente6check = CurrentForm.CheckBox.ambiente6check;
        auxCurrentForm.ambiente7check = CurrentForm.CheckBox.ambiente7check;
        auxCurrentForm.ambiente8check = CurrentForm.CheckBox.ambiente8check;

  
        for (let k = 1; k <= CurrentForm.SGMF; k++) {
          var auxCurrentFormDiscont = {'activo' : true};
  
          auxCurrentFormDiscont.tiporoca = CurrentForm.Spinners["tiporoca"+k];
          auxCurrentFormDiscont.gradometeor = CurrentForm.Spinners["gradometeor"+k];
          auxCurrentFormDiscont.gradofractura = CurrentForm.Spinners["gradofractura"+k];
          auxCurrentFormDiscont.tiposuelo = CurrentForm.Spinners["tiposuelo"+k];
          auxCurrentFormDiscont.tamanograno = CurrentForm.Spinners["tamanograno"+k];
          auxCurrentFormDiscont.tiporelieve = CurrentForm.Spinners["tiporelieve"+k];
          auxCurrentFormDiscont.indicerelieve = CurrentForm.Spinners["indicerelieve"+k];
          auxCurrentFormDiscont.inclinacionladera = CurrentForm.Spinners["inclinacionladera"+k];
          auxCurrentFormDiscont.formaladera = CurrentForm.Spinners["formaladera"+k];
          auxCurrentFormDiscont.formacresta = CurrentForm.Spinners["formacresta"+k];
          auxCurrentFormDiscont.formavalle = CurrentForm.Spinners["formavalle"+k];
          auxCurrentFormDiscont.cobertura = CurrentForm.Spinners["cobertura"+k];
          auxCurrentFormDiscont.uso = CurrentForm.Spinners["uso"+k];
          auxCurrentFormDiscont.densidad = CurrentForm.Spinners["densidad"+k];
          auxCurrentFormDiscont.frecuencia = CurrentForm.Spinners["frecuencia"+k];
          auxCurrentFormDiscont.textura = CurrentForm.Spinners["textura"+k];
          auxCurrentFormDiscont.patron = CurrentForm.Spinners["patron"+k];
          auxCurrentFormDiscont.tipoerosion = CurrentForm.Spinners["tipoerosion"+k];
          auxCurrentFormDiscont.espaciamiento = CurrentForm.Spinners["espaciamiento"+k];
          auxCurrentFormDiscont.intensidaderosion = CurrentForm.Spinners["intensidaderosion"+k];
          auxCurrentFormDiscont.actividad = CurrentForm.Spinners["actividad"+k];
          auxCurrentFormDiscont.codigonuevaSGMF = CurrentForm.EditText["codigonuevaSGMF"+k];
          
          auxCurrentFormDiscont.tipodemm0check = CurrentForm.CheckBox["tipodemm0check"+k];
          auxCurrentFormDiscont.tipodemm1check = CurrentForm.CheckBox["tipodemm1check"+k];
          auxCurrentFormDiscont.tipodemm2check = CurrentForm.CheckBox["tipodemm2check"+k];
          auxCurrentFormDiscont.tipodemm3check = CurrentForm.CheckBox["tipodemm3check"+k];
          auxCurrentFormDiscont.tipodemm4check = CurrentForm.CheckBox["tipodemm4check"+k];
          auxCurrentFormDiscont.tipodemm5check = CurrentForm.CheckBox["tipodemm5check"+k];
          auxCurrentFormDiscont.tipodemm6check = CurrentForm.CheckBox["tipodemm6check"+k];
          auxCurrentFormDiscont.tipodemm7check = CurrentForm.CheckBox["tipodemm7check"+k];
          auxCurrentFormDiscont.tipodemm8check = CurrentForm.CheckBox["tipodemm8check"+k];
          
          auxCurrentFormDiscont.tipomaterial0check = CurrentForm.CheckBox["tipomaterial0check"+k];
          auxCurrentFormDiscont.tipomaterial1check = CurrentForm.CheckBox["tipomaterial1check"+k];
          auxCurrentFormDiscont.tipomaterial2check = CurrentForm.CheckBox["tipomaterial2check"+k];
          auxCurrentFormDiscont.tipomaterial3check = CurrentForm.CheckBox["tipomaterial3check"+k];
          auxCurrentFormDiscont.tipomaterial4check = CurrentForm.CheckBox["tipomaterial4check"+k];
          
          auxCurrentForm.SGMF['SGMF_'+k] = auxCurrentFormDiscont;
        }
  
        for (let k = 1; k <= CurrentForm.FotosAnexas; k++) {
          var auxCurrentFormFotoAnexa = {'activo' : true};
  
          auxCurrentFormFotoAnexa.NombreFotosAnexas = CurrentForm.EditText["NombreFotosAnexas"+k];
          auxCurrentFormFotoAnexa.DescriFotosAnexas = CurrentForm.EditText["DescriFotosAnexas"+k];    
          
          auxCurrentForm.FotosAnexas['FotoAnexa_'+k] = auxCurrentFormFotoAnexa;
        }
  
        auxEstacion.Formularios.Form_SGMF['Form_SGMF_'+j] = auxCurrentForm;
      
      }
  
      for (let j = 0; j < auxEstacion.Formularios.count_INVENTARIO; j++) {
        const CurrentForm = estacion.Formularios["Form_INVENTARIO_"+j];
        var auxCurrentForm = {'activo':true, 'DANOS':{}, 'FotosAnexas':{}};
  
        auxCurrentForm.DANOS.count = CurrentForm.DANOS;
        auxCurrentForm.FotosAnexas.count = CurrentForm.FotosAnexas;
        
        auxCurrentForm.IMPORTANC = CurrentForm.Spinners.IMPORTANC;
        auxCurrentForm.FECHA_FUENTE = CurrentForm.Spinners.FECHA_FUENTE;
        auxCurrentForm.ConfiFechaMM = CurrentForm.Spinners.ConfiFechaMM;
        auxCurrentForm.NOM_MUN = CurrentForm.Spinners.NOM_MUN;
        auxCurrentForm.edadmm = CurrentForm.Spinners.edadmm;
        auxCurrentForm.ESTADO_ACT = CurrentForm.Spinners.ESTADO_ACT;
        auxCurrentForm.ESTILO = CurrentForm.Spinners.ESTILO;
        auxCurrentForm.DISTRIBUC = CurrentForm.Spinners.DISTRIBUC;
        auxCurrentForm.estructura0espaciamiento = CurrentForm.Spinners.estructura0espaciamiento;
        auxCurrentForm.estructura1espaciamiento = CurrentForm.Spinners.estructura1espaciamiento;
        auxCurrentForm.estructura2espaciamiento = CurrentForm.Spinners.estructura2espaciamiento;
        auxCurrentForm.estructura3espaciamiento = CurrentForm.Spinners.estructura3espaciamiento;
        auxCurrentForm.estructura4espaciamiento = CurrentForm.Spinners.estructura4espaciamiento;
        auxCurrentForm.estructura5espaciamiento = CurrentForm.Spinners.estructura5espaciamiento;
        auxCurrentForm.SUBTIPO_1 = CurrentForm.Spinners.SUBTIPO_1;
        auxCurrentForm.SUBTIPO_2 = CurrentForm.Spinners.SUBTIPO_2;
        auxCurrentForm.velocidad = CurrentForm.Spinners.velocidad;
        auxCurrentForm.sisclasificacion = CurrentForm.Spinners.sisclasificacion;
        auxCurrentForm.morfomodo = CurrentForm.Spinners.morfomodo;
        auxCurrentForm.morfoseveridad = CurrentForm.Spinners.morfoseveridad;
        auxCurrentForm.erosionedad = CurrentForm.Spinners.erosionedad;
        auxCurrentForm.erosionestado = CurrentForm.Spinners.erosionestado;
        auxCurrentForm.erosionfluvial = CurrentForm.Spinners.erosionfluvial;
        auxCurrentForm.erosioneolica = CurrentForm.Spinners.erosioneolica;
        auxCurrentForm.represamientotipo = CurrentForm.Spinners.represamientotipo;
  
        auxCurrentForm.ID_PARTE = CurrentForm.EditText.ID_PARTE;
        auxCurrentForm.ENCUESTAD = CurrentForm.EditText.ENCUESTAD;
        auxCurrentForm.FECHA_MOV = CurrentForm.EditText.FECHA_MOV;
        auxCurrentForm.FECHA_REP = CurrentForm.EditText.FECHA_REP;
        auxCurrentForm.COD_SIMMA = CurrentForm.EditText.COD_SIMMA;
        auxCurrentForm.VEREDA = CurrentForm.EditText.VEREDA;
        auxCurrentForm.SITIO = CurrentForm.EditText.SITIO;
        auxCurrentForm.REF_GEOGRF = CurrentForm.EditText.REF_GEOGRF;
        auxCurrentForm.planchas = CurrentForm.EditText.planchas;
        auxCurrentForm.sensoresremotos = CurrentForm.EditText.sensoresremotos;
        auxCurrentForm.FTE_INFSEC = CurrentForm.EditText.FTE_INFSEC;
        auxCurrentForm.LITOLOGIA = CurrentForm.EditText.LITOLOGIA;
  
        auxCurrentForm.estructura0dirbuz = CurrentForm.EditText.estructura0dirbuz;
        auxCurrentForm.estructura0buz = CurrentForm.EditText.estructura0buz;
        auxCurrentForm.estructura1dirbuz = CurrentForm.EditText.estructura1dirbuz;
        auxCurrentForm.estructura1buz = CurrentForm.EditText.estructura1buz;
        auxCurrentForm.estructura2dirbuz = CurrentForm.EditText.estructura2dirbuz;
        auxCurrentForm.estructura2buz = CurrentForm.EditText.estructura2buz;
        auxCurrentForm.estructura3dirbuz = CurrentForm.EditText.estructura3dirbuz;
        auxCurrentForm.estructura3buz = CurrentForm.EditText.estructura3buz;
        auxCurrentForm.estructura4dirbuz = CurrentForm.EditText.estructura4dirbuz;
        auxCurrentForm.estructura4buz = CurrentForm.EditText.estructura4buz;
        auxCurrentForm.estructura5dirbuz = CurrentForm.EditText.estructura5dirbuz;
        auxCurrentForm.estructura5buz = CurrentForm.EditText.estructura5buz;
        auxCurrentForm.velocidadmax = CurrentForm.EditText.velocidadmax;
        auxCurrentForm.velocidadmin = CurrentForm.EditText.velocidadmin;
        auxCurrentForm.morfogeneral0 = CurrentForm.EditText.morfogeneral0;
        auxCurrentForm.morfogeneral1 = CurrentForm.EditText.morfogeneral1;
        auxCurrentForm.morfogeneral2 = CurrentForm.EditText.morfogeneral2;
        auxCurrentForm.morfogeneral3 = CurrentForm.EditText.morfogeneral3;
        auxCurrentForm.morfogeneral4 = CurrentForm.EditText.morfogeneral4;
        auxCurrentForm.morfogeneral5 = CurrentForm.EditText.morfogeneral5;
        auxCurrentForm.morfogeneral6 = CurrentForm.EditText.morfogeneral6;
        auxCurrentForm.morfodimensiones0 = CurrentForm.EditText.morfodimensiones0;
        auxCurrentForm.morfodimensiones1 = CurrentForm.EditText.morfodimensiones1;
        auxCurrentForm.morfodimensiones2 = CurrentForm.EditText.morfodimensiones2;
        auxCurrentForm.morfodimensiones3 = CurrentForm.EditText.morfodimensiones3;
        auxCurrentForm.morfodimensiones4 = CurrentForm.EditText.morfodimensiones4;
        auxCurrentForm.morfodimensiones5 = CurrentForm.EditText.morfodimensiones5;
        auxCurrentForm.morfodimensiones6 = CurrentForm.EditText.morfodimensiones6;
        auxCurrentForm.morfodimensiones7 = CurrentForm.EditText.morfodimensiones7;
        auxCurrentForm.morfodimensiones8 = CurrentForm.EditText.morfodimensiones8;
        auxCurrentForm.morfodimensiones9 = CurrentForm.EditText.morfodimensiones9;
        auxCurrentForm.morfodimensiones10 = CurrentForm.EditText.morfodimensiones10;
        auxCurrentForm.morfodimensiones11 = CurrentForm.EditText.morfodimensiones11;
        auxCurrentForm.morfodimensiones12 = CurrentForm.EditText.morfodimensiones12;
        auxCurrentForm.AN_GMF = CurrentForm.EditText.AN_GMF;
        auxCurrentForm.cobertura0 = CurrentForm.EditText.cobertura0;
        auxCurrentForm.cobertura1 = CurrentForm.EditText.cobertura1;
        auxCurrentForm.cobertura2 = CurrentForm.EditText.cobertura2;
        auxCurrentForm.cobertura3 = CurrentForm.EditText.cobertura3;
        auxCurrentForm.cobertura4 = CurrentForm.EditText.cobertura4;
        auxCurrentForm.cobertura5 = CurrentForm.EditText.cobertura5;
        auxCurrentForm.cobertura6 = CurrentForm.EditText.cobertura6;
        auxCurrentForm.cobertura7 = CurrentForm.EditText.cobertura7;
        auxCurrentForm.usosuelo0 = CurrentForm.EditText.usosuelo0;
        auxCurrentForm.usosuelo1 = CurrentForm.EditText.usosuelo1;
        auxCurrentForm.usosuelo2 = CurrentForm.EditText.usosuelo2;
        auxCurrentForm.usosuelo3 = CurrentForm.EditText.usosuelo3;
        auxCurrentForm.usosuelo4 = CurrentForm.EditText.usosuelo4;
        auxCurrentForm.usosuelo5 = CurrentForm.EditText.usosuelo5;
        auxCurrentForm.usosuelo6 = CurrentForm.EditText.usosuelo6;
        auxCurrentForm.usosuelo7 = CurrentForm.EditText.usosuelo7;
        auxCurrentForm.usosuelo8 = CurrentForm.EditText.usosuelo8;
        auxCurrentForm.usosuelo9 = CurrentForm.EditText.usosuelo9;
        auxCurrentForm.referenciasautor = CurrentForm.EditText.referenciasautor;
        auxCurrentForm.referenciasaño = CurrentForm.EditText.referenciasaño;
        auxCurrentForm.referenciastitulo = CurrentForm.EditText.referenciastitulo;
        auxCurrentForm.referenciaseditor = CurrentForm.EditText.referenciaseditor;
        auxCurrentForm.referenciasciudad = CurrentForm.EditText.referenciasciudad;
        auxCurrentForm.referenciaspaginas = CurrentForm.EditText.referenciaspaginas;
        auxCurrentForm.represamientomorfoembalse0 = CurrentForm.EditText.represamientomorfoembalse0;
        auxCurrentForm.represamientomorfoembalse1 = CurrentForm.EditText.represamientomorfoembalse1;
        auxCurrentForm.represamientomorfoembalse2 = CurrentForm.EditText.represamientomorfoembalse2;
        auxCurrentForm.represamientomorfoembalse3 = CurrentForm.EditText.represamientomorfoembalse3;
        auxCurrentForm.represamientomorfoembalse4 = CurrentForm.EditText.represamientomorfoembalse4;
        auxCurrentForm.represamientomorfoembalse5 = CurrentForm.EditText.represamientomorfoembalse5;
        auxCurrentForm.represamientomorfoembalse6 = CurrentForm.EditText.represamientomorfoembalse6;
        auxCurrentForm.represamientomorfoembalse7 = CurrentForm.EditText.represamientomorfoembalse7;
        auxCurrentForm.represamientomorfometria0 = CurrentForm.EditText.represamientomorfometria0;
        auxCurrentForm.represamientomorfometria1 = CurrentForm.EditText.represamientomorfometria1;
        auxCurrentForm.represamientomorfometria2 = CurrentForm.EditText.represamientomorfometria2;
        auxCurrentForm.represamientomorfometria3 = CurrentForm.EditText.represamientomorfometria3;
        auxCurrentForm.represamientomorfometria4 = CurrentForm.EditText.represamientomorfometria4;
        auxCurrentForm.represamientomorfometria5 = CurrentForm.EditText.represamientomorfometria5;
        auxCurrentForm.heridos = CurrentForm.EditText.heridos;
        auxCurrentForm.vidas = CurrentForm.EditText.vidas;
        auxCurrentForm.desaparecidos = CurrentForm.EditText.desaparecidos;
        auxCurrentForm.personas = CurrentForm.EditText.personas;
        auxCurrentForm.familias = CurrentForm.EditText.familias;
        auxCurrentForm.notas = CurrentForm.EditText.notas;
        auxCurrentForm.apreciacionriesgo = CurrentForm.EditText.apreciacionriesgo;
  
        auxCurrentForm.TIPO_MOV2 = CurrentForm.RadioGrp.TIPO_MOV2;
        auxCurrentForm.TIPO_MOV1 = CurrentForm.RadioGrp.TIPO_MOV1;
        auxCurrentForm.humedad2 = CurrentForm.RadioGrp.humedad2;
        auxCurrentForm.humedad1 = CurrentForm.RadioGrp.humedad1;
        auxCurrentForm.plasticidad2 = CurrentForm.RadioGrp.plasticidad2;
        auxCurrentForm.plasticidad1 = CurrentForm.RadioGrp.plasticidad1;
  
        auxCurrentForm.estructura0check = CurrentForm.CheckBox.estructura0check+"";
        auxCurrentForm.estructura1check = CurrentForm.CheckBox.estructura1check+"";
        auxCurrentForm.estructura2check = CurrentForm.CheckBox.estructura2check+"";
        auxCurrentForm.estructura3check = CurrentForm.CheckBox.estructura3check+"";
        auxCurrentForm.estructura4check = CurrentForm.CheckBox.estructura4check+"";
        auxCurrentForm.estructura5check = CurrentForm.CheckBox.estructura5check+"";
        auxCurrentForm.tipomaterial0check_2 = CurrentForm.CheckBox.tipomaterial0check_2+"";
        auxCurrentForm.tipomaterial0check_1 = CurrentForm.CheckBox.tipomaterial0check_1+"";
        auxCurrentForm.tipomaterial1check_2 = CurrentForm.CheckBox.tipomaterial1check_2+"";
        auxCurrentForm.tipomaterial1check_1 = CurrentForm.CheckBox.tipomaterial1check_1+"";
        auxCurrentForm.tipomaterial2check_2 = CurrentForm.CheckBox.tipomaterial2check_2+"";
        auxCurrentForm.tipomaterial2check_1 = CurrentForm.CheckBox.tipomaterial2check_1+"";
        auxCurrentForm.tipomaterial3check_2 = CurrentForm.CheckBox.tipomaterial3check_2+"";
        auxCurrentForm.tipomaterial3check_1 = CurrentForm.CheckBox.tipomaterial3check_1+"";
        auxCurrentForm.tipomaterial4check_2 = CurrentForm.CheckBox.tipomaterial4check_2+"";
        auxCurrentForm.tipomaterial4check_1 = CurrentForm.CheckBox.tipomaterial4check_1+"";
        auxCurrentForm.origensuelo0check = CurrentForm.CheckBox.origensuelo0check+"";
        auxCurrentForm.origensuelo1check = CurrentForm.CheckBox.origensuelo1check+"";
        auxCurrentForm.origensuelo2check = CurrentForm.CheckBox.origensuelo2check+"";
        auxCurrentForm.origensuelo3check = CurrentForm.CheckBox.origensuelo3check+"";
        auxCurrentForm.causasinherentes0check = CurrentForm.CheckBox.causasinherentes0check+"";
        auxCurrentForm.causasinherentes1check = CurrentForm.CheckBox.causasinherentes1check+"";
        auxCurrentForm.causasinherentes2check = CurrentForm.CheckBox.causasinherentes2check+"";
        auxCurrentForm.causasinherentes3check = CurrentForm.CheckBox.causasinherentes3check+"";
        auxCurrentForm.causasinherentes4check = CurrentForm.CheckBox.causasinherentes4check+"";
        auxCurrentForm.causasinherentes5check = CurrentForm.CheckBox.causasinherentes5check+"";
        auxCurrentForm.causasinherentes6check = CurrentForm.CheckBox.causasinherentes6check+"";
        auxCurrentForm.causasinherentes7check = CurrentForm.CheckBox.causasinherentes7check+"";
        auxCurrentForm.causasinherentes8check = CurrentForm.CheckBox.causasinherentes8check+"";
        auxCurrentForm.causasinherentes9check = CurrentForm.CheckBox.causasinherentes9check+"";
        auxCurrentForm.causasinherentes10check = CurrentForm.CheckBox.causasinherentes10check+"";
        auxCurrentForm.causasinherentes11check = CurrentForm.CheckBox.causasinherentes11check+"";
        auxCurrentForm.causascontrideto0check_2 = CurrentForm.CheckBox.causascontrideto0check_2+"";
        auxCurrentForm.causascontrideto0check_1 = CurrentForm.CheckBox.causascontrideto0check_1+"";
        auxCurrentForm.causascontrideto1check_2 = CurrentForm.CheckBox.causascontrideto1check_2+"";
        auxCurrentForm.causascontrideto1check_1 = CurrentForm.CheckBox.causascontrideto1check_1+"";
        auxCurrentForm.causascontrideto2check_2 = CurrentForm.CheckBox.causascontrideto2check_2+"";
        auxCurrentForm.causascontrideto2check_1 = CurrentForm.CheckBox.causascontrideto2check_1+"";
        auxCurrentForm.causascontrideto3check_2 = CurrentForm.CheckBox.causascontrideto3check_2+"";
        auxCurrentForm.causascontrideto3check_1 = CurrentForm.CheckBox.causascontrideto3check_1+"";
        auxCurrentForm.causascontrideto4check_2 = CurrentForm.CheckBox.causascontrideto4check_2+"";
        auxCurrentForm.causascontrideto4check_1 = CurrentForm.CheckBox.causascontrideto4check_1+"";
        auxCurrentForm.causascontrideto5check_2 = CurrentForm.CheckBox.causascontrideto5check_2+"";
        auxCurrentForm.causascontrideto5check_1 = CurrentForm.CheckBox.causascontrideto5check_1+"";
        auxCurrentForm.causascontrideto6check_2 = CurrentForm.CheckBox.causascontrideto6check_2+"";
        auxCurrentForm.causascontrideto6check_1 = CurrentForm.CheckBox.causascontrideto6check_1+"";
        auxCurrentForm.causascontrideto7check_2 = CurrentForm.CheckBox.causascontrideto7check_2+"";
        auxCurrentForm.causascontrideto7check_1 = CurrentForm.CheckBox.causascontrideto7check_1+"";
        auxCurrentForm.causascontrideto8check_2 = CurrentForm.CheckBox.causascontrideto8check_2+"";
        auxCurrentForm.causascontrideto8check_1 = CurrentForm.CheckBox.causascontrideto8check_1+"";
        auxCurrentForm.causascontrideto9check_2 = CurrentForm.CheckBox.causascontrideto9check_2+"";
        auxCurrentForm.causascontrideto9check_1 = CurrentForm.CheckBox.causascontrideto9check_1+"";
        auxCurrentForm.causascontrideto10check_2 = CurrentForm.CheckBox.causascontrideto10check_2+"";
        auxCurrentForm.causascontrideto10check_1 = CurrentForm.CheckBox.causascontrideto10check_1+"";
        auxCurrentForm.causascontrideto11check_2 = CurrentForm.CheckBox.causascontrideto11check_2+"";
        auxCurrentForm.causascontrideto11check_1 = CurrentForm.CheckBox.causascontrideto11check_1+"";
        auxCurrentForm.causascontrideto12check_2 = CurrentForm.CheckBox.causascontrideto12check_2+"";
        auxCurrentForm.causascontrideto12check_1 = CurrentForm.CheckBox.causascontrideto12check_1+"";
        auxCurrentForm.causascontrideto13check_2 = CurrentForm.CheckBox.causascontrideto13check_2+"";
        auxCurrentForm.causascontrideto13check_1 = CurrentForm.CheckBox.causascontrideto13check_1+"";
        auxCurrentForm.causascontrideto14check_2 = CurrentForm.CheckBox.causascontrideto14check_2+"";
        auxCurrentForm.causascontrideto14check_1 = CurrentForm.CheckBox.causascontrideto14check_1+"";
        auxCurrentForm.causascontrideto15check_2 = CurrentForm.CheckBox.causascontrideto15check_2+"";
        auxCurrentForm.causascontrideto15check_1 = CurrentForm.CheckBox.causascontrideto15check_1+"";
        auxCurrentForm.causascontrideto16check_2 = CurrentForm.CheckBox.causascontrideto16check_2+"";
        auxCurrentForm.causascontrideto16check_1 = CurrentForm.CheckBox.causascontrideto16check_1+"";
        auxCurrentForm.causascontrideto17check_2 = CurrentForm.CheckBox.causascontrideto17check_2+"";
        auxCurrentForm.causascontrideto17check_1 = CurrentForm.CheckBox.causascontrideto17check_1+"";
        auxCurrentForm.causascontrideto18check_2 = CurrentForm.CheckBox.causascontrideto18check_2+"";
        auxCurrentForm.causascontrideto18check_1 = CurrentForm.CheckBox.causascontrideto18check_1+"";
        auxCurrentForm.causascontrideto19check_2 = CurrentForm.CheckBox.causascontrideto19check_2+"";
        auxCurrentForm.causascontrideto19check_1 = CurrentForm.CheckBox.causascontrideto19check_1+"";
        auxCurrentForm.causascontrideto20check_2 = CurrentForm.CheckBox.causascontrideto20check_2+"";
        auxCurrentForm.causascontrideto20check_1 = CurrentForm.CheckBox.causascontrideto20check_1+"";
        auxCurrentForm.causascontrideto21check_2 = CurrentForm.CheckBox.causascontrideto21check_2+"";
        auxCurrentForm.causascontrideto21check_1 = CurrentForm.CheckBox.causascontrideto21check_1+"";
        auxCurrentForm.causascontrideto22check_2 = CurrentForm.CheckBox.causascontrideto22check_2+"";
        auxCurrentForm.causascontrideto22check_1 = CurrentForm.CheckBox.causascontrideto22check_1+"";
        auxCurrentForm.causascontrideto23check_2 = CurrentForm.CheckBox.causascontrideto23check_2+"";
        auxCurrentForm.causascontrideto23check_1 = CurrentForm.CheckBox.causascontrideto23check_1+"";
        auxCurrentForm.causascontrideto24check_2 = CurrentForm.CheckBox.causascontrideto24check_2+"";
        auxCurrentForm.causascontrideto24check_1 = CurrentForm.CheckBox.causascontrideto24check_1+"";
        auxCurrentForm.erosionsuperficial0check = CurrentForm.CheckBox.erosionsuperficial0check+"";
        auxCurrentForm.erosionsuperficial1check = CurrentForm.CheckBox.erosionsuperficial1check+"";
        auxCurrentForm.erosionsuperficial2check = CurrentForm.CheckBox.erosionsuperficial2check+"";
        auxCurrentForm.erosionsuperficial3check = CurrentForm.CheckBox.erosionsuperficial3check+"";
        auxCurrentForm.erosionsuperficial4check = CurrentForm.CheckBox.erosionsuperficial4check+"";
        auxCurrentForm.erosionsubsuperficial0check = CurrentForm.CheckBox.erosionsubsuperficial0check+"";
        auxCurrentForm.erosionsubsuperficial1check = CurrentForm.CheckBox.erosionsubsuperficial1check+"";
        auxCurrentForm.represamientocondiciones0check = CurrentForm.CheckBox.represamientocondiciones0check+"";
        auxCurrentForm.represamientocondiciones1check = CurrentForm.CheckBox.represamientocondiciones1check+"";
        auxCurrentForm.represamientocondiciones2check = CurrentForm.CheckBox.represamientocondiciones2check+"";
        auxCurrentForm.represamientocondiciones3check = CurrentForm.CheckBox.represamientocondiciones3check+"";
        auxCurrentForm.represamientocondiciones4check = CurrentForm.CheckBox.represamientocondiciones4check+"";
        auxCurrentForm.represamientocondiciones5check = CurrentForm.CheckBox.represamientocondiciones5check+"";
        auxCurrentForm.represamientocondiciones6check = CurrentForm.CheckBox.represamientocondiciones6check+"";
        auxCurrentForm.represamientocondiciones7check = CurrentForm.CheckBox.represamientocondiciones7check+"";
        auxCurrentForm.represamientoefectos0check = CurrentForm.CheckBox.represamientoefectos0check+"";
        auxCurrentForm.represamientoefectos1check = CurrentForm.CheckBox.represamientoefectos1check+"";
        auxCurrentForm.represamientoefectos2check = CurrentForm.CheckBox.represamientoefectos2check+"";
        auxCurrentForm.represamientoefectos3check = CurrentForm.CheckBox.represamientoefectos3check+"";
        auxCurrentForm.represamientoefectos4check = CurrentForm.CheckBox.represamientoefectos4check+"";
        
      if (CurrentForm.origensuelo3check){
        auxCurrentForm.tipodeposito0check = CurrentForm.CheckBox.tipodeposito0check+"";
        auxCurrentForm.tipodeposito1check = CurrentForm.CheckBox.tipodeposito1check+"";
        auxCurrentForm.tipodeposito2check = CurrentForm.CheckBox.tipodeposito2check+"";
        auxCurrentForm.tipodeposito3check = CurrentForm.CheckBox.tipodeposito3check+"";
        auxCurrentForm.tipodeposito4check = CurrentForm.CheckBox.tipodeposito4check+"";
      }
      if (CurrentForm.causascontrideto1check_2 || CurrentForm.causascontrideto1check_1){
        auxCurrentForm.sismoMM0 = CurrentForm.EditText.sismoMM0;
        auxCurrentForm.sismoMM1 = CurrentForm.EditText.sismoMM1;
        auxCurrentForm.sismoMM2 = CurrentForm.EditText.sismoMM2;
        auxCurrentForm.sismoMM3 = CurrentForm.EditText.sismoMM3;
      }
      if (CurrentForm.causascontrideto3check_2 || CurrentForm.causascontrideto3check_1){
        auxCurrentForm.lluviasMM0 = CurrentForm.EditText.lluviasMM0;
        auxCurrentForm.lluviasMM1 = CurrentForm.EditText.lluviasMM1;
        auxCurrentForm.lluviasMM2 = CurrentForm.EditText.lluviasMM2;
        auxCurrentForm.lluviasMM3 = CurrentForm.EditText.lluviasMM3;
      }
  
        for (let k = 1; k <= CurrentForm.DANOS; k++) {
          var auxCurrentFormDANOS = {'activo' : true};
  
          auxCurrentFormDANOS.clasedaño = CurrentForm.Spinners["clasedaño"+k];
          auxCurrentFormDANOS.tiposdaño = CurrentForm.Spinners["tiposdaño"+k];
          auxCurrentFormDANOS.tipodaño = CurrentForm.EditText["tipodaño"+k];
          auxCurrentFormDANOS.cantidaddaño = CurrentForm.EditText["cantidaddaño"+k];
          auxCurrentFormDANOS.unidaddaño = CurrentForm.EditText["unidaddaño"+k];
          auxCurrentFormDANOS.valordaño = CurrentForm.EditText["valordaño"+k];
              
          auxCurrentForm.DANOS['DANOS_'+k] = auxCurrentFormDANOS;
        
        }
  
        for (let k = 1; k <= CurrentForm.FotosAnexas; k++) {
          var auxCurrentFormFotoAnexa = {'activo' : true};
  
          auxCurrentFormFotoAnexa.NombreFotosAnexas = CurrentForm.EditText["NombreFotosAnexas"+k];
          auxCurrentFormFotoAnexa.DescriFotosAnexas = CurrentForm.EditText["DescriFotosAnexas"+k];    
          
          auxCurrentForm.FotosAnexas['FotoAnexa_'+k] = auxCurrentFormFotoAnexa;
        }
  
        auxEstacion.Formularios.Form_INVENTARIO['Form_INVENTARIO_'+j] = auxCurrentForm;
      
      }

      for (let j = 0; j < auxEstacion.Formularios.count_CATALOGO; j++) {
        const CurrentForm = estacion.Formularios["Form_CATALOGO_"+j];
        var auxCurrentForm = {'activo':true, 'DANOS':{}};
  
        auxCurrentForm.DANOS.count = CurrentForm.DANOS;
        
        auxCurrentForm.IMPORTANC = CurrentForm.Spinners.IMPORTANC;
        auxCurrentForm.FECHA_FUENTE = CurrentForm.Spinners.FECHA_FUENTE;
        auxCurrentForm.ConfiFechaMM = CurrentForm.Spinners.ConfiFechaMM;
        auxCurrentForm.NOM_MUN = CurrentForm.Spinners.NOM_MUN;
        auxCurrentForm.SUBTIPO_1 = CurrentForm.Spinners.SUBTIPO_1;
        auxCurrentForm.SUBTIPO_2 = CurrentForm.Spinners.SUBTIPO_2;
  
        auxCurrentForm.ID_PARTE = CurrentForm.EditText.ID_PARTE;
        auxCurrentForm.ENCUESTAD = CurrentForm.EditText.ENCUESTAD;
        auxCurrentForm.FECHA_MOV = CurrentForm.EditText.FECHA_MOV;
        auxCurrentForm.FECHA_REP = CurrentForm.EditText.FECHA_REP;
        auxCurrentForm.COD_SIMMA = CurrentForm.EditText.COD_SIMMA;
        auxCurrentForm.VEREDA = CurrentForm.EditText.VEREDA;
        auxCurrentForm.SITIO = CurrentForm.EditText.SITIO;
        auxCurrentForm.latitudMM = CurrentForm.EditText.latitudMM;
        auxCurrentForm.longitudMM = CurrentForm.EditText.longitudMM;
        auxCurrentForm.alturaMM = CurrentForm.EditText.alturaMM;
        auxCurrentForm.REF_GEOGRF = CurrentForm.EditText.REF_GEOGRF;
        auxCurrentForm.sensoresremotos = CurrentForm.EditText.sensoresremotos;
        auxCurrentForm.FTE_INFSEC = CurrentForm.EditText.FTE_INFSEC;
        auxCurrentForm.HERIDOS = CurrentForm.EditText.HERIDOS;
        auxCurrentForm.VIDAS = CurrentForm.EditText.VIDAS;
        auxCurrentForm.DESAPARECIDOS = CurrentForm.EditText.DESAPARECIDOS;
        auxCurrentForm.PERSONAS = CurrentForm.EditText.PERSONAS;
        auxCurrentForm.FAMILIAS = CurrentForm.EditText.FAMILIAS;
        auxCurrentForm.notas = CurrentForm.EditText.notas;
  
        auxCurrentForm.TIPO_MOV2 = CurrentForm.RadioGrp.TIPO_MOV2;
        auxCurrentForm.TIPO_MOV1 = CurrentForm.RadioGrp.TIPO_MOV1;

        for (let k = 1; k <= CurrentForm.DANOS; k++) {
          var auxCurrentFormDANOS = {'activo' : true};
  
          auxCurrentFormDANOS.clasedaño = CurrentForm.Spinners["clasedaño"+k];
          auxCurrentFormDANOS.tiposdaño = CurrentForm.Spinners["tiposdaño"+k];
          auxCurrentFormDANOS.tipodaño = CurrentForm.EditText["tipodaño"+k];
          auxCurrentFormDANOS.cantidaddaño = CurrentForm.EditText["cantidaddaño"+k];
          auxCurrentFormDANOS.unidaddaño = CurrentForm.EditText["unidaddaño"+k];
          auxCurrentFormDANOS.valordaño = CurrentForm.EditText["valordaño"+k];
              
          auxCurrentForm.DANOS['DANOS_'+k] = auxCurrentFormDANOS;
        
        }
  
        auxEstacion.Formularios.Form_CATALOGO['Form_CATALOGO_'+j] = auxCurrentForm;
      
      }
      
      estacionesSubir.push(auxEstacion);
    }
  }

  console.log(estacionesSubir);
  console.log(idEstaciones);

  for (let l = 0; l < estacionesSubir.length; l++) {
    const element = estacionesSubir[l];
    // database.ref().child('EstacionesCampo/estacion_'+idEstaciones).set(element); 
    idEstaciones++;
  }

  console.log(idEstaciones);
        
  // database.ref().child('EstacionesCampo/cont/cont').set(idEstaciones); 


} 

// CargarEstacionesDesdeShape(2265)
function CargarEstacionesDesdeShape(idEstaciones) {
  var estacionesSubir = [];
  for (let l = 0; l < alturas["features"].length; l++) {
    var auxDatos = alturas["features"][l];
    if (auxDatos["properties"]["BeginTime"] === null) {
      auxDatos["properties"]["BeginTime"] = " "
    }
    var auxEstacion={
        "activo" : true,
        "Fecha": auxDatos["properties"]["BeginTime"].split(" ")[0],
        "Estacion" : auxDatos["properties"]["Name"],
        "TipoEstacion" : "SGMF",
        "Norte" : auxDatos["geometry"]["coordinates"][1],
        "Este" : auxDatos["geometry"]["coordinates"][0],
        "Altitud" : auxDatos["properties"]["Altitud"],
        "Fotos"  : "",
        "FotosLib"  : "",
        "Formularios" : 
        {
          "count_CATALOGO":0,
          "count_INVENTARIO":0,
          "count_SGMF":0,
          "count_UGS_Rocas":0,
          "count_UGS_Suelos":0,
        },
        "Observaciones" : "",
        "Propietario" : "Jose David Ramírez-Abraham"
    }
    estacionesSubir.push(auxEstacion);
  }

  console.log(estacionesSubir);
  console.log(idEstaciones);

  for (let l = 0; l < estacionesSubir.length; l++) {
    const element = estacionesSubir[l];
    // database.ref().child('EstacionesCampo/estacion_'+idEstaciones).set(element); 
    idEstaciones++;
  }

  console.log(idEstaciones);
        
  // database.ref().child('EstacionesCampo/cont/cont').set(idEstaciones); 

}

// var estacionesLibretaUGS = [];
// GenerarTextosLibretaUGS();
function GenerarTextosLibretaUGS() {
  for (let i = 0; i < base_clase["cont"]["cont"]; i++) {
    var estacionTL = base_clase["estacion_" + i];
    if(base_clase["estacion_" + i]["FotosLibreta"] == undefined){
      base_clase["estacion_" + i]["FotosLibreta"] = {"FotosURL": {"count": 0}}
    }
    if(base_clase["estacion_" + i]["FotosLib"] == undefined){
      base_clase["estacion_" + i]["FotosLib"] = "";
    }
    if (estacionTL.activo) {
      var tipoEstTL = estacionTL["TipoEstacion"].toUpperCase();
      modalContentTL = "";
      titleFormModalTL =[];
      idsFormModalTL =[];
      textoTL = "";
      textoTL += "Fecha: "+estacionTL["Fecha"]+"\n";
      textoTL += "Código de la estación: "+estacionTL["Estacion"]+"\n";
      base_clase["estacion_" + i]["textoLib"] = textoTL;
      if (tipoEstTL.includes("UGS")) {
        if(tipoEstTL.includes("CARACT")){
          GenerarCamposTextoLib(ListaGenerarGeneral);
          GenerarCamposTextoLib(ListaGenerarUGS);  
          if(estacionTL["Formularios"].count_UGS_Rocas>0){
            for (let j = 0; j < estacionTL["Formularios"].count_UGS_Rocas; j++) {
              var formato = estacionTL["Formularios"]["Form_UGS_Rocas"]["Form_UGS_Rocas_"+j]; 
              if (formato.activo) {
                GenerarCamposTextoLib(ListaGenerarUGSDisc); 
                if (formato["litologiasasociadasopt1exist"] == "true") {
                  GenerarCamposTextoLib(ListaGenerarUGSRocas); 
                }
                if (formato["litologiasasociadasopt2exist"] == "true") {
                  GenerarCamposTextoLib(ListaGenerarUGSRocas2);  
                }
                $("#generarTextoLib-content").empty();
                $("#generarTextoLib-content").append(modalContentTL);
                $("#muniTL").val(formato["municipios"]);
                $("#veredaTL").val(formato["vereda"]);
                $("#coorTL").val(estacionTL["Este"]+", "+estacionTL["Norte"]);
                $("#alturaTL").val(estacionTL["Altitud"]);
                $("#ugsTL").val(formato["nombreugs"]);
                $("#tipoAflorTL").val(formato["claseaflor"]);
                var auxespesorugs1 = parseInt(formato["litologiasasociadasopt1espesor"]);
                if (formato["litologiasasociadasopt2espesor"] !== "") {
                  auxespesorugs1 += parseInt(formato["litologiasasociadasopt2espesor"]);
                }
                $("#anchoTL").val(auxespesorugs1);
                auxespesorugs1 = auxespesorugs1 * 2;
                $("#largoTL").val(auxespesorugs1);
                var auxBuzas = "";
                var auxTipos = "";
                var auxEspa = "";
                var auxrelleno = "";
                if (formato["Discontinuidades"].count>0) {
                  for (let ind = 1; ind <= formato["Discontinuidades"].count; ind++) {
                    const discontTL = formato["Discontinuidades"]["Discont_"+ind];
                    if (discontTL.activo) {
                      auxBuzas += discontTL.DirBuzamiento;
                      auxTipos += discontTL.TipoDiscont.split(". ")[1];
    
                      if (discontTL.TipoDiscont.split(". ")[1] == "Diaclasa") {
                        auxEspa = discontTL.EspaciamientoDiscont.split(". ")[1] + ", ";
                        auxrelleno = discontTL.TipoRellenoDiscont.split(". ")[1] + ", ";
                      }
    
    
                      if (ind < formato["Discontinuidades"].count) {
                        const auxNumDisc = formato["Discontinuidades"].count-1;
                        if (ind == auxNumDisc) {
                          auxBuzas += " y ";
                          auxTipos += " y ";
                        }
                        else{
                          auxBuzas += ", ";
                          auxTipos += ", ";
                        }
                      }
                    }
                  }   
                }
                $("#dirBuzTL").val(auxBuzas);
                $("#tipoDiscTL").val(auxTipos);
                var auxRocaCorres = {
                  "Ninguna" : "roca fresca",
                  "Débil " : "roca débilmente meteorizada",
                  "Moderada" : "roca moderadamente meteorizada",
                  "Alta" : "roca altamente meteorizada",
                  "Muy Alta" : "roca completamente meteorizada"
                }
                $("#gradoMeteoTL").val(formato["gradometeo1"]);
                $("#rocaCorresTL").val(auxRocaCorres[formato["gradometeo1"]]);
                $("#colorTL").val(formato["color1"]);
                $("#tamanoGranoTL").val(formato["tamanograno1"]);
                $("#compMineTL").val(formato["composicionmineral1"]);
                $("#espesorLitoTL").val(formato["litologiasasociadasopt1espesor"]);
                var auxGradoFrac ={
                  '0-20' : "muy bajo",
                  '20-40' : "bajo",
                  '40-60' : "medio",
                  '60-80' : "alto",
                  '80-100' : "muy alto",
                  'No Aplica' : "No Aplica" 
                }
                $("#gradoFracturaTL").val(auxGradoFrac[formato["gsi"]]);
                $("#espaciamientoTL").val(auxEspa);
                $("#rellenoTL").val(auxrelleno);
                if (formato["litologiasasociadasopt2exist"] == "true") {
                  $("#gradoMeteoTL2").val(formato["gradometeo2"]);
                  $("#rocaCorresTL2").val(auxRocaCorres[formato["gradometeo2"]]);
                  $("#colorTL2").val(formato["color2"]);
                  $("#tamanoGranoTL2").val(formato["tamanograno2"]);
                  $("#compMineTL2").val(formato["composicionmineral2"]);
                  $("#espesorLitoTL2").val(formato["litologiasasociadasopt2espesor"]);
                  $("#gradoFracturaTL2").val(auxGradoFrac[formato["gsi"]]);
                  $("#espaciamientoTL2").val(auxEspa);
                  $("#rellenoTL2").val(auxrelleno);
                }
                GenerarLibretaUGS(i);
              }             
            }
          }
          if(estacionTL["Formularios"].count_UGS_Suelos>0){
            for (let j = 0; j < estacionTL["Formularios"].count_UGS_Suelos; j++) {
              var formato = estacionTL["Formularios"]["Form_UGS_Suelos"]["Form_UGS_Suelos_"+j]; 
              if (formato.activo) {
                if (formato["litologiasasociadasopt1exist"] == "true") {
                  GenerarCamposTextoLib(ListaGenerarUGSsuelos); 
                }
                if (formato["litologiasasociadasopt2exist"] == "true") {
                  GenerarCamposTextoLib(ListaGenerarUGSsuelos2); 
                }
                $("#generarTextoLib-content").empty();
                $("#generarTextoLib-content").append(modalContentTL);
                $("#muniTL").val(formato["municipios"]);
                $("#veredaTL").val(formato["vereda"]);
                $("#coorTL").val(estacionTL["Este"]+", "+estacionTL["Norte"]);
                $("#alturaTL").val(estacionTL["Altitud"]);
                $("#ugsTL").val(formato["nombreugs"]);
                $("#tipoAflorTL").val(formato["claseaflor"]);
                var auxespesorugs1 = parseInt(formato["litologiasasociadasopt1espesor"]);
                if (formato["litologiasasociadasopt2espesor"] !== "") {
                  auxespesorugs1 += parseInt(formato["litologiasasociadasopt2espesor"]);
                }            
                $("#anchoTL").val(auxespesorugs1);
                auxespesorugs1 = auxespesorugs1 * 2;
                $("#largoTL").val(auxespesorugs1);
                if (formato["estructurasrelictas1"] != "No Aplica") {
                  $("#estructurasSueloTL").val("con presencia de estructuras");
                }
                else{
                  $("#estructurasSueloTL").val("sin presencia de estructuras");
                }
                $("#compMineSueloTL").val(formato["descripcionsuelos"]);
                $("#porcentajeClastosTL").val(formato["porcentajeclastos1"]);
                $("#porcentajeMatrizTL").val(formato["porcentajematriz1"]);
                if (formato["secuenciaestratiopt1orden"] == "1") {
                  $("#tipoSueloTL").val("antrópico");
                  $("#espesorSueloTL").val(formato["secuenciaestratiopt1espesor"]);
                }
                else if(formato["secuenciaestratiopt2orden"] == "1") {
                  $("#tipoSueloTL").val("residual");
                  $("#espesorSueloTL").val(formato["secuenciaestratiopt2espesor"]);
                }
                else if(formato["secuenciaestratiopt3orden"] == "1") {
                  $("#tipoSueloTL").val("transportado");
                  $("#espesorSueloTL").val(formato["secuenciaestratiopt3espesor"]);
                }
                if (formato["secuenciaestratisuelor1orden"] == "1") {
                  $("#horizontesSueloTL").val("VI");
                }
                else if(formato["secuenciaestratisuelor2orden"] == "1") {
                  $("#horizontesSueloTL").val("V");
                }
                else if(formato["secuenciaestratisuelor3orden"] == "1") {
                  $("#horizontesSueloTL").val("IV");
                }
                var auxredoncezArray = ['bien redondeada','redondeada','subredondeada','subangular','angular','muy angular'];
                for (let ind = 0; ind < 6; ind++) {
                  if (formato["redondez"+ind+"check_1"] == "true") {
                    $("#redondezSueloTL").val(auxredoncezArray[ind]);
                  }
                }
                var auxformaArray = ['esférica','equidimensional','tabular','plana-alargada','irregular'];
                for (let ind = 0; ind < 5; ind++) {
                  if (formato["forma"+ind+"check_1"] == "true") {
                    $("#formaSueloTL").val(auxformaArray[ind]);
                  }
                }
                $("#orientacionSueloTL").val(formato["orientacion1"].toLowerCase());
                $("#soporteSueloTL").val(formato["estructurasoporte1"].toLowerCase());
                $("#gradacionSueloTL").val(formato["gradacion1"].toLowerCase());
                $("#seleccionSueloTL").val(formato["seleccion1"].toLowerCase());
                $("#plasticidadSueloTL").val(formato["plasticidad1"].toLowerCase());
                $("#resistenciaSueloTL").val(formato["resiscorte1"].toLowerCase());
                $("#compacidadSueloTL").val(formato["compacidadsuelosgruesos1"].toLowerCase());
    
                if (formato["litologiasasociadasopt2exist"] == "true") {
                  $("#compMineSueloTL2").val(formato["descripcionsuelos"]);
                  $("#porcentajeClastosTL2").val(formato["porcentajeclastos2"]);
                  $("#porcentajeMatrizTL2").val(formato["porcentajematriz2"]);
                  if (formato["estructurasrelictas2"] != "No Aplica") {
                    $("#estructurasSueloTL2").val("con presencia de estructuras");
                  }
                  else{
                    $("#estructurasSueloTL2").val("sin presencia de estructuras");
                  }
                  if (formato["secuenciaestratiopt1orden"] == "1") {
                    $("#tipoSueloTL2").val("antrópico");
                    $("#espesorSueloTL2").val(formato["secuenciaestratiopt1espesor"]);
                  }
                  else if(formato["secuenciaestratiopt2orden"] == "1") {
                    $("#tipoSueloTL2").val("residual");
                    $("#espesorSueloTL2").val(formato["secuenciaestratiopt2espesor"]);
                  }
                  else if(formato["secuenciaestratiopt3orden"] == "1") {
                    $("#tipoSueloTL2").val("transportado");
                    $("#espesorSueloTL2").val(formato["secuenciaestratiopt3espesor"]);
                  }
                  if (formato["secuenciaestratisuelor1orden"] == "1") {
                    $("#horizontesSueloTL2").val("VI");
                  }
                  else if(formato["secuenciaestratisuelor2orden"] == "1") {
                    $("#horizontesSueloTL2").val("V");
                  }
                  else if(formato["secuenciaestratisuelor3orden"] == "1") {
                    $("#horizontesSueloTL2").val("IV");
                  }
                  var auxredoncezArray = ['bien redondeada','redondeada','subredondeada','subangular','angular','muy angular'];
                  for (let ind = 0; ind < 6; ind++) {
                    if (formato["redondez"+ind+"check_2"] == "true") {
                      $("#redondezSueloTL2").val(auxredoncezArray[ind]);
                    }
                  }
                  var auxformaArray = ['esférica','equidimensional','tabular','plana-alargada','irregular'];
                  for (let ind = 0; ind < 5; ind++) {
                    if (formato["forma"+ind+"check_2"] == "true") {
                      $("#formaSueloTL2").val(auxformaArray[ind]);
                    }
                  }
                  $("#orientacionSueloTL2").val(formato["orientacion2"].toLowerCase());
                  $("#soporteSueloTL2").val(formato["estructurasoporte2"].toLowerCase());
                  $("#gradacionSueloTL2").val(formato["gradacion2"].toLowerCase());
                  $("#seleccionSueloTL2").val(formato["seleccion2"].toLowerCase());
                  $("#plasticidadSueloTL2").val(formato["plasticidad2"].toLowerCase());
                  $("#resistenciaSueloTL2").val(formato["resiscorte2"].toLowerCase());
                  $("#compacidadSueloTL2").val(formato["compacidadsuelosgruesos2"].toLowerCase());
                }
                GenerarLibretaUGS(i);
              }
            }
          }      
        }
        if (tipoEstTL.includes("CONTROL")) {
          GenerarCamposTextoLib(ListaGenerarPunto); 
    
          $("#generarTextoLib-content").empty();
          $("#generarTextoLib-content").append(modalContentTL);
          $("#coorTL").val(estacionTL["Este"]+", "+estacionTL["Norte"]);
          $("#alturaTL").val(estacionTL["Altitud"]);
          $("#obsPuntoTL").val(estacionTL["Observaciones"]);
          GenerarLibretaUGS(i);
        }
      }
    }
  }

  for (let i = 0; i < base_clase["cont"]["cont"]; i++) {
    var estacionTL = base_clase["estacion_" + i];
    if (estacionTL.activo) {
      var tipoEstTL = estacionTL["TipoEstacion"].toUpperCase();     
      if (tipoEstTL.includes("UGS")) {
        estacionesLibretaUGS.push(estacionTL);
      }
    }
  }
  console.log(estacionesLibretaUGS);

  function GenerarLibretaUGS(iEst) {
    for (let ind = 0; ind < titleFormModalTL.length; ind++) {
      const auxTitle = titleFormModalTL[ind];
      const auxId = idsFormModalTL[ind];
      if (auxTitle == "Vereda") {
        textoTL += "Localización: Vereda " + $("#"+auxId).val();
      }
      if (auxTitle == "Municipio") {
        textoTL += ", municipio " + capitalize($("#"+auxId).val()) + " del departamento de Caldas. \n";
      }
      if (auxTitle == "Coordenada") {
        textoTL += "Coordenadas: " + $("#"+auxId).val() + ". \n";
      }
      if (auxTitle == "Altura") {
        textoTL += "Altura: " + $("#"+auxId).val() + " m.s.n.m. \n";
      }
      if (auxTitle == "UGS") {
        textoTL += "Descripción de las observaciones: Nos encontramos sobre la UGS " + $("#"+auxId).val() + ".\n";
      }
      if (auxTitle == "Tipo Afloramiento") {
        textoTL += "Tamaño del afloramiento: El afloramiento de tipo " + $("#"+auxId).val().toLowerCase() ;
      }
      if (auxTitle == "Ancho") {
        textoTL += " tiene de ancho " + $("#"+auxId).val() +"m" ;
      }
      if (auxTitle == "Largo") {
        textoTL += " y de largo " + $("#"+auxId).val()+"m.\n" ;
      }
      if (auxTitle == "Direcciones Discontinuidades") {
        textoTL += "Generalidades: Se tomaron los siguientes datos estructurales medidos en campo: " + $("#"+auxId).val() ;
      }
      if (auxTitle == "Tipos Discontinuidades") {
        textoTL += "; los cuales corresponden respectivamente a las siguientes discontinuidades: " + $("#"+auxId).val() +".\n";
      }
      if (auxTitle == "Litología 1") {
        textoTL += "Calidad de la Roca 1\n";
      }
      if (auxTitle == "Litología 2") {
        textoTL += "Calidad de la Roca 2\n";
      }
      if (auxTitle == "Grado Meteorización") {
        textoTL += "Se evidencia que el grado de meteorización de la roca es " + $("#"+auxId).val().toLowerCase();
      }
      if (auxTitle == "Roca Correspondiente") {
        textoTL += " que corresponde a " + $("#"+auxId).val();
      }
      if (auxTitle == "Color") {
        textoTL += ", de color " + $("#"+auxId).val();
      }
      if (auxTitle == "Tamaño Grano") {
        textoTL += " y tamaño de grano " + $("#"+auxId).val().toLowerCase();
      }
      if (auxTitle == "Composición Mineralógica") {
        textoTL += ", compuesta mineralógicamente por " + $("#"+auxId).val()+".";
      }
      if (auxTitle == "Espesor Lito") {
        textoTL += " Esta capa de roca tiene un espesor de " + $("#"+auxId).val()+"m";
      }
      if (auxTitle == "Grado de Fracturamiento") {
        textoTL += " con un grado de fracturamiento " + $("#"+auxId).val()+".";
      }
      if (auxTitle == "Espaciamiento Diaclasas") {
        if ($("#"+auxId).val() != "") {
          textoTL += " Las diaclasas tienen un espaciamiento " + $("#"+auxId).val().toLowerCase();
        }
      }
      if (auxTitle == "Relleno Diaclasas") {
        if ($("#"+auxId).val() != "") {
          textoTL += " con rellenos de " + $("#"+auxId).val().toLowerCase()+".\n";
        }
        else{
          textoTL += "\n";
        }
      }
      if (auxTitle == "Litología Suelo 1") {
        textoTL += "Litología Suelo 1\n";
      }
      if (auxTitle == "Litología Suelo 2") {
        textoTL += "Litología Suelo 2\n";
      }
      if (auxTitle == "Composición Mineralógica Suelo") {
        textoTL += "Se identifica un suelo compuesto por " + $("#"+auxId).val();
      }
      if (auxTitle == "Porcentaje de Clastos") {
        textoTL += ", el porcentaje de clastos es " + $("#"+auxId).val()+"%";
      }
      if (auxTitle == "Porcentaje de Matriz") {
        textoTL += " y el porcentaje de matriz es " + $("#"+auxId).val()+"% ";
      }
      if (auxTitle == "Estructuras del Suelos") {
        textoTL += $("#"+auxId).val();
      }
      if (auxTitle == "Tipo de Suelo") {
        textoTL += ". Es suelo " + $("#"+auxId).val();
      }
      if (auxTitle == "Horizonte") {
        textoTL += " que pertenece al horizonte " + $("#"+auxId).val();
      }
      if (auxTitle == "Espesor Suelo") {
        textoTL += " de espesor " + $("#"+auxId).val()+"m";
      }
      if (auxTitle == "Redondez de los Clastos") {
        textoTL += ", la redondez de los clastos es " + $("#"+auxId).val();
      }
      if (auxTitle == "Forma de los Clastos") {
        textoTL += " y forma " + $("#"+auxId).val();
      }
      if (auxTitle == "Soporte Suelo") {
        if ($("#"+auxId).val() != null) {
          textoTL += ", " + $("#"+auxId).val();
        }
        else{
          textoTL += ", sin estructura soporte";
        }
      }
      if (auxTitle == "Orientación de los Clastos") {
        textoTL += ", con " + $("#"+auxId).val()+ " en sus clastos.";
      }
      if (auxTitle == "Gradación de la Matriz") {
        if ($("#"+auxId).val() == "sin gradación") {
          textoTL += " La matriz está " + $("#"+auxId).val();
        }
        else{
          textoTL += " La matriz está con gradación " + $("#"+auxId).val();
        }
      }
      if (auxTitle == "Selección de la Matriz") {
        textoTL += ", tiene una selección " + $("#"+auxId).val();
      }
      if (auxTitle == "Plasticidad de la Matriz") {
        textoTL += ", " + $("#"+auxId).val();
      }
      if (auxTitle == "Resistencia al Corte") {
        if ($("#"+auxId).val() != null) {
          textoTL += ", con la resistencia al corte " + $("#"+auxId).val();
        }
        else{
          textoTL += ", sin resistencia al corte";
        }
      }
      if (auxTitle == "Compacidad de la Matriz") {
        if ($("#"+auxId).val() != null) {
          textoTL += " y de compacidad " + $("#"+auxId).val()+".\n";
        }
        else{
          textoTL += ", sin compacidad.\n";
        }
      }
      if (auxTitle == "Tipo de Ambiente SGMF") {
        textoTL += "Se observa el tipo de ambiente " + $("#"+auxId).val() + ".\n";
      }
      if (auxTitle == "Ubicación Geomorfológica") {
        textoTL += "Ubicación Geomorfológica\n" + $("#"+auxId).val() + "\n";
      }
      if (auxTitle == "Caracterización Geoformas") {
        textoTL += "Caracterización Geoformas\n" + $("#"+auxId).val() + "\n";
      }
      if (auxTitle == "Observaciones") {
        textoTL += "Observaciones: " + $("#"+auxId).val() + "\n";
      }
      if (auxTitle == "Referencia Geográfica") {
        textoTL += "Localización: " + $("#"+auxId).val();
      }
      if (auxTitle == "Vereda CMM") {
        textoTL += ", vereda " + $("#"+auxId).val();
      }
      if (auxTitle == "Fecha Evento") {
        textoTL += "Se identifica un Movimiento en Masa ocurrido en la fecha " + $("#"+auxId).val();
      }
      if (auxTitle == "Confiabilidad Fecha") {
        if ($("#"+auxId).val() == "Incierta" || $("#"+auxId).val() == "Exacta") {
          textoTL += " con una confiabilidad " + $("#"+auxId).val().toLowerCase();
        }
        else {
          textoTL += " con una " + $("#"+auxId).val().toLowerCase();
        }
      }
      if (auxTitle == "Ancho MM") {
        textoTL += ", tiene de ancho de " + $("#"+auxId).val()+"m";
      }
      if (auxTitle == "Largo MM") {
        textoTL += " y de largo de " + $("#"+auxId).val()+"m";
      }
      if (auxTitle == "Estado MM") {
        textoTL += ", su estado es " + $("#"+auxId).val().toLowerCase();
      }
      if (auxTitle == "Litología MM") {
        textoTL += " y se desarrolla sobre " + $("#"+auxId).val().toLowerCase()+".\n";
      }
      if (auxTitle == "Movimiento 1") {
        textoTL += "Movimiento 1\n";
      }
      if (auxTitle == "Movimiento 2") {
        textoTL += "Movimiento 2\n";
      }
      if (auxTitle == "Tipo Movimiento") {
        textoTL += "El evento descrito es de tipo " + $("#"+auxId).val();
      }
      if (auxTitle == "Subtipo Movimiento") {
        textoTL += " y subtipo " + $("#"+auxId).val();
      }
      if (auxTitle == "Tipo de Material MM") {
        textoTL += ", el material que lo conforma es " + $("#"+auxId).val().toLowerCase();
      }
      if (auxTitle == "Humedad del Material MM") {
        textoTL += " que está " + $("#"+auxId).val().toLowerCase();
      }
      if (auxTitle == "Plasticidad del Material MM") {
        if ($("#"+auxId).val().toLowerCase() == "no plástico") {
          textoTL += " y no tiene plasticidad.\n";
        }
        else if ($("#"+auxId).val().toLowerCase() == "no aplica") {
          textoTL += ".";
        }
        else{
          textoTL += " y tiene una plasticidad " + $("#"+auxId).val().toLowerCase()+".\n";
        }
      }
      if (auxTitle == "Notas") {
        textoTL += "Observaciones: " + $("#"+auxId).val()+".\n";
      }
      if (auxTitle == "Apreciación del Riesgo") {
        textoTL += "Apreciación del Riesgo: " + $("#"+auxId).val()+".";
      }
      
    }
    base_clase["estacion_" + iEst]["textoLib"] = textoTL;
  }
}


