// Obtener referencia al elemento HTML donde se mostrarán los ganadores
const listaGanadoresHTML = document.getElementById("listaGanadores");

// Lista de colaboradores con su fecha de ingreso
const colaboradores = [
    { nombre: "VELAZQUEZ OSUNA LILIA ARMIDA", ingreso: "2025-12-30" },
    { nombre: "RODRIGUEZ CAMARILLO ELISEO", ingreso: "2005-09-26" }, // Elegible
    { nombre: "RIVERA RODRIGUEZ J. GUADALUPE", ingreso: "2026-05-02" },
    { nombre: "RODRIGUEZ GUTIERREZ MONICA", ingreso: "2006-07-16" }, // Elegible
    { nombre: "HERNANDEZ MORALES FRANCISCO EDUARDO", ingreso: "2026-04-01" },
    { nombre: "VALTIERRA VILLAFAÑA SILVIA LUZ", ingreso: "2009-09-16" }, // Elegible
    { nombre: "RAMOS LOPEZ PABLA", ingreso: "2026-01-16" },
    { nombre: "REYES LOPEZ SANDRA GUADALUPE", ingreso: "2026-01-16" },
    { nombre: "AYALA MEJIA ELVIRA", ingreso: "2025-12-30" },
    { nombre: "MEDINA SERRANO VICTOR MANUEL", ingreso: "2025-12-30" },
    { nombre: "CHAVEZ MARTINEZ GERARDO", ingreso: "2026-07-28" },
    { nombre: "MOSQUEDA VAZQUEZ ALEJANDRA", ingreso: "2025-12-16" },
    { nombre: "VILLEDA VILLANUEVA LILIANA", ingreso: "2011-04-16" },
    { nombre: "RAZO GARCIA JESUS MIGUEL", ingreso: "2011-06-16" },
    { nombre: "RAMIREZ FLORES GABRIELA", ingreso: "2012-02-01" },
    { nombre: "YAÑEZ MUÑOZ LAURA", ingreso: "2012-05-16" },
    { nombre: "PEREZ ESCOBEDO LUZ ELENA", ingreso: "2012-08-01" },
    { nombre: "CABRERA FORTANEL DAVID", ingreso: "2013-03-16" },
    { nombre: "VILLA CARRANZA MARIBEL", ingreso: "2013-10-01" },
    { nombre: "SALINAS HERRERA ALFREDO", ingreso: "2025-12-30" },
    { nombre: "PEREZ CARDONA JUAN ALBERTO", ingreso: "2014-05-16" },
    { nombre: "VARGAS MONTERO HUMBERTO", ingreso: "2014-07-01" },
    { nombre: "HERNANDEZ GUZMAN HECTOR", ingreso: "2014-07-16" },
    { nombre: "ZAVALA ESCALERA JUAN LUIS", ingreso: "2025-12-30" },
    { nombre: "PACHECO CERVANTES LESLIE", ingreso: "2014-12-16" },
    { nombre: "DE LA PAZ ESPINOZA BRENDA IRENE", ingreso: "2014-12-16" },
    { nombre: "CAMPOS RODRIGUEZ ARTURO", ingreso: "2025-12-30" },
    { nombre: "ARMENTA HERNANDEZ VIRGINIA", ingreso: "2014-12-16" },
    { nombre: "PEÑA PAZ CARLOS ALBERTO", ingreso: "2015-05-01" },
    { nombre: "SANCHEZ GUTIERREZ ANTONIO", ingreso: "2025-12-30" },
    { nombre: "DIAZ SANDOVAL MARCELA", ingreso: "2015-08-17" },
    { nombre: "REYES UGALDE CENDY DENISSE", ingreso: "2025-12-30" },
    { nombre: "MEDRANO JIMENEZ LAURA CRISTINA", ingreso: "2015-10-01" },
    { nombre: "MURILLO RODRIGUEZ MARIA TERESA", ingreso: "2025-12-30" },
    { nombre: "MARTINEZ ORTIZ GERARDO DE JESUS", ingreso: "2025-12-30" },
    { nombre: "PEREZ MARTINEZ MIGUEL ANGEL", ingreso: "2025-12-30" },
    { nombre: "YEPEZ RAMIREZ JAVIER", ingreso: "2025-12-30" },
    { nombre: "GUTIERREZ ARREGUIN ERIKA ELIZABETH", ingreso: "2025-12-30" },
    { nombre: "LIEVANO SOBERANES JOSUE", ingreso: "2025-12-30" },
    { nombre: "MEDINA FLORES ANDREA DEL CARMEN", ingreso: "2025-12-30" },
    { nombre: "GUTIERREZ REA MERARDO", ingreso: "2025-12-30" },
    { nombre: "JAUREGUI ZAVALA PABLO ANDRES", ingreso: "2025-12-30" },
    { nombre: "RODRIGUEZ ORTIZ GUADALUPE ELIZABETH", ingreso: "2025-12-30" },
    { nombre: "GARCIA LEON MARIA DE LOS ANGELES", ingreso: "2025-12-30" },
    { nombre: "REYES CAMARILLO ANA CRISTINA", ingreso: "2025-12-30" },
    { nombre: "MARIN PARRA OSCAR CUTBERTO", ingreso: "2025-12-30" },
    { nombre: "AMAYA GUERRERO VIRIDIANA DELFINA", ingreso: "2025-12-30" },
    { nombre: "CRUZ RIVERA CRUZ ANGEL", ingreso: "2025-12-30" },
    { nombre: "SAMANO GUTIERREZ PATRICIA GUADALUPE", ingreso: "2025-12-30" },
    { nombre: "CASTILLO FLORES JOCELYN ESTEFANIA", ingreso: "2025-12-30" },
    { nombre: "SALAS SANCHEZ DIANA NAYELI", ingreso: "2025-12-30" },
    { nombre: "GARCIA ANGUIANO JOHAN JARED", ingreso: "2025-12-30" },
    { nombre: "QUEZADA DE LA CRUZ LUIS JAVIER", ingreso: "2025-12-30" },
    { nombre: "MEDRANO RAMIREZ CLARISSA MARCELA", ingreso: "2025-12-30" },
    { nombre: "BOLAÑOS CORONA FRIDA ESTHEFANIA", ingreso: "2025-12-30" },
    { nombre: "SORIANO MARTINEZ ERIK", ingreso: "2025-12-30" },
    { nombre: "COTAYA MOGUEL GUSTAVO EDUARDO", ingreso: "2025-12-30" },
    { nombre: "LEON VILLASEÑOR ISAAC FERNANDO", ingreso: "2025-12-30" },
    { nombre: "GUERRERO TOVAR JESSICA PATRICIA", ingreso: "2025-12-30" },
    { nombre: "ZAMARRIPA MERCADO GABRIELA EDITH", ingreso: "2025-12-30" },
    { nombre: "MACIAS OBLEA ALONDRA SAMANTHA", ingreso: "2025-12-30" },
    { nombre: "TOVAR ZAMAYOA JOSE RICARDO", ingreso: "2025-12-30" },
    { nombre: "SERVIN CRUZ DIEGO ALEJANDRO", ingreso: "2025-12-30" },
    { nombre: "ROJAS NIETO CECILIA", ingreso: "2025-12-30" },
    { nombre: "CANO VENTURA ARMANDO", ingreso: "2025-12-30" },
    { nombre: "RAMIREZ RAZO REY DAVID", ingreso: "2025-12-30" },
    { nombre: "AMEZCUA RAMOS EDUARDO SAMUEL", ingreso: "2025-12-30" },
    { nombre: "AGUILERA GOMEZ JULIO ALFONSO", ingreso: "2025-12-30" },
    { nombre: "HERNANDEZ RODRIGUEZ MARIA GUADALUPE", ingreso: "2025-12-30" },
    { nombre: "DE LA RIVA SALAS MARIA DE LOURDES", ingreso: "2025-12-30" },
    { nombre: "FUENTES SAAVEDRA FRANCISCO JAVIER", ingreso: "2025-12-30" },
    { nombre: "PEREZ ABOYTES ALEJANDRO", ingreso: "2025-12-30" },
    { nombre: "GONZALEZ MARTINEZ TERESA DE JESUS", ingreso: "2025-12-30" },
    { nombre: "ARROYO GUEVARA JUAN ADRIAN", ingreso: "2025-12-30" },
    { nombre: "GOMEZ MOZQUEDA PATRICIA", ingreso: "2025-12-30" },
    { nombre: "ACOSTA QUEZADA ARMANDO", ingreso: "2025-12-30" },
    { nombre: "RAMOS AGUIRRE MA. TERESA", ingreso: "2025-12-30" },
    { nombre: "GOMEZ CAUDILLO MA. JESUS", ingreso: "2025-12-30" },
    { nombre: "PEREZ AGUILERA JUAN GABRIEL", ingreso: "2025-12-30" },
    { nombre: "ELICEA LOPEZ ISMAEL", ingreso: "2025-12-30" },
    { nombre: "ESCOTO CAPETILLO MARCO ALONSO", ingreso: "2016-04-16" },
    { nombre: "BARROSO RIOS SABINA LIZBETH", ingreso: "2016-09-01" },
    { nombre: "CORTES ABARCA LUZ ELENA", ingreso: "2016-11-16" },
    { nombre: "RAMIREZ GAONA MARIA TERESA", ingreso: "2016-12-01" },
    { nombre: "OBRAJERO AGUILAR JOSE ALFREDO", ingreso: "2017-02-01" },
    { nombre: "ARENAS ARREDONDO PATRICIA", ingreso: "2017-06-16" },
    { nombre: "MARTINEZ VARGAS FRANCISCO JAVIER", ingreso: "2017-07-22" },
    { nombre: "SANTANA JIMENEZ ANA MADAHI", ingreso: "2025-12-30" },
    { nombre: "RODRIGUEZ CASTILLO PATRICIA", ingreso: "2017-08-24" },
    { nombre: "LOPEZ BOLAÑOS VALENTE", ingreso: "2017-12-01" },
    { nombre: "GONZALEZ LOYOLA MARIA LORENA", ingreso: "2018-01-08" },
    { nombre: "CAMPOS LUNA MA. TERESA", ingreso: "2018-01-11" },
    { nombre: "MORA GARCIA ANA LILIA", ingreso: "2018-02-28" },
    { nombre: "NUÑEZ CASTILLO MARCO ANTONIO", ingreso: "2025-12-30" },
    { nombre: "CASTRO MORALES JULIO CESAR", ingreso: "2025-12-30" },
    { nombre: "GOMEZ MEDELLIN HILDA MIRIDIA", ingreso: "2018-04-16" },
    { nombre: "CASTAÑEDA PIÑON GIBRAN", ingreso: "2018-05-14" },
    { nombre: "CASTILLO CALVILLO MARTHA RAQUEL", ingreso: "2018-11-01" },
    { nombre: "TORRES PRADO MANUEL", ingreso: "2019-06-16" },
    { nombre: "GONZALEZ GONZALEZ RAUL", ingreso: "2019-07-29" },
    { nombre: "ALCALA DUARTE SERGIO", ingreso: "2025-12-30" },
    { nombre: "RODRIGUEZ HERNANDEZ GUADALUPE", ingreso: "2019-10-01" },
    { nombre: "PATLAN LOPEZ FRANCISCO JAVIER", ingreso: "2019-10-01" },
    { nombre: "GOMEZ GARCIA MAXIMINO", ingreso: "2019-10-18" },
    { nombre: "VIVEROS MARTINEZ ISRAEL", ingreso: "2019-11-16" },
    { nombre: "PRADO BARRON MARTIN", ingreso: "2019-12-03" },
    { nombre: "GARCIA LOPEZ FRANCISCO JAVIER", ingreso: "2020-02-04" },
    { nombre: "RAMIREZ SOLANO ILSE ELENA", ingreso: "2020-02-11" },
    { nombre: "QUIROZ HERNANDEZ DANIELA", ingreso: "2020-03-02" },
    { nombre: "CANO PADILLA MARIA TERESA", ingreso: "2020-03-12" },
    { nombre: "RODRIGUEZ RODRIGUEZ DIANA MARLENE", ingreso: "2025-12-30" },
    { nombre: "MORALES GOMEZ CHRISTIAN ADRIAN", ingreso: "2025-12-30" },
    { nombre: "GARCIA MUÑIZ NANCY ALEJANDRA", ingreso: "2020-08-07" },
    { nombre: "BAÑUELOS SIERRA ALMA JOSEFINA", ingreso: "2025-12-30" },
    { nombre: "DONJUAN SANCHEZ MARISOL", ingreso: "2020-10-06" },
    { nombre: "IBARRA FLORIDO CLAUDIA ALEJANDRA", ingreso: "2021-01-11" },
    { nombre: "HERNANDEZ GALINDO MARIA DE JESUS", ingreso: "2021-01-25" },
    { nombre: "AGUILAR ARREOLA HECTOR MOISES", ingreso: "2021-02-02" },
    { nombre: "CENTENO NAVA MARIA LETICIA", ingreso: "2021-07-12" },
    { nombre: "GONZALEZ CARDIEL MA. DE LOS ANGELES", ingreso: "2021-07-19" },
    { nombre: "REGALADO JURADO VICTOR HUGO", ingreso: "2021-08-02" },
    { nombre: "AYALA ACOSTA ARACELI", ingreso: "2021-08-24" },
    { nombre: "VIDALES SANDOVAL VICTOR MANUEL", ingreso: "2021-09-09" },
    { nombre: "PONCE DURON GABRIELA", ingreso: "2021-11-05" },
    { nombre: "VILLEGAS GARCIA CESAR EMMANUEL", ingreso: "2025-12-30" },
    { nombre: "HERNANDEZ PADILLA KARLA MONICA", ingreso: "2021-12-13" },
    { nombre: "GARCIA MIRELES CARLOS FERNANDO", ingreso: "2022-01-19" },
    { nombre: "GALLARDO SOSA JUAN ALFONSO", ingreso: "2022-01-21" },
    { nombre: "ORIGEL DIAZ NANCY LIZBETH", ingreso: "2022-02-01" },
    { nombre: "RODRIGUEZ MORENO VERONICA", ingreso: "2022-02-04" },
    { nombre: "QUINTANA GAONA MIRIAM PAMELA", ingreso: "2022-03-07" },
    { nombre: "RICO ROCHA JUAN RAMON", ingreso: "2022-04-28" },
    { nombre: "RAMIREZ MARTINEZ JOSE IVAN", ingreso: "2022-05-23" },
    { nombre: "ARELLANO TORRES KARLA ADRIANA", ingreso: "2022-06-04" },
    { nombre: "PEREZ GONZALEZ JACQUELINE SARAI", ingreso: "2022-06-04" },
    { nombre: "GUTIERREZ PEREZ ROBERTO EVAIR", ingreso: "2022-07-05" },
    { nombre: "SANCHEZ RAMOS JENNIFER BERENICE", ingreso: "2022-08-20" },
    { nombre: "BRAVO ZUÑIGA RAMIRO", ingreso: "2022-09-17" },
    { nombre: "LOPEZ ARANA BLANCA ESTELA", ingreso: "2022-10-26" },
    { nombre: "HERNANDEZ MENDOZA FRANCISCO JAVIER", ingreso: "2022-11-01" },
    { nombre: "BERMUDEZ RAMIREZ JESSICA", ingreso: "2022-11-28" },
    { nombre: "FRAUSTO PEREZ SALVADOR", ingreso: "2025-12-30" },
    { nombre: "GONZALEZ SARABIA PEDRO FABIAN", ingreso: "2023-01-05" },
    { nombre: "NEGRETE SANDOVAL CLAUDIA LORENA", ingreso: "2023-02-01" },
    { nombre: "RODRIGUEZ HUERTA DANIA NICOLLE", ingreso: "2023-03-14" },
    { nombre: "LOPEZ VALLEJO DORA SANJUANA", ingreso: "2023-03-27" },
    { nombre: "FRIAS VILLANUEVA JOSE AMADO", ingreso: "2025-12-30" },
    { nombre: "GUERRERO GASCA MIGUEL ANGEL", ingreso: "2025-12-30" },
    { nombre: "GOMEZ BECERRA GRACIELA", ingreso: "2024-10-01" },
    { nombre: "MEDINA GUTIERREZ MARIA DEL CARMEN", ingreso: "2024-10-01" },
    { nombre: "TEJEDA ONTIVEROS PABLO FRANCISCO", ingreso: "2024-10-01" },
    { nombre: "MEJIA OTERO ERIKA YADHIRA", ingreso: "2024-10-07" },
    { nombre: "PARRA SEGOVIANO ALEJANDRA RUBI", ingreso: "2024-10-11" },
    { nombre: "BARRIOS OLMOS PEDRO DANIEL", ingreso: "2024-10-21" },
    { nombre: "PEREZ GARCIA J GUADALUPE", ingreso: "2025-12-30" },
    { nombre: "GOMEZ CARRILLO MIGUEL ANGEL", ingreso: "1993-11-08" },
    { nombre: "MORALES LOPEZ FRANCISCO JAVIER", ingreso: "1996-02-08" },
    { nombre: "LOPEZ CAMARILLO SANTIAGO", ingreso: "1996-06-01" },
    { nombre: "GRANADOS RENTERIA MIGUEL ANGEL", ingreso: "1999-11-01" },
    { nombre: "ALFARO LEDESMA MA. DEL CARMEN", ingreso: "2000-07-17" },
    { nombre: "PALMA ZEPEDA J. GUADALUPE", ingreso: "2005-04-16" },
    { nombre: "TRUJILLO ZAVALA HUGO ENRIQUE", ingreso: "2024-10-21" },
    { nombre: "LEON VALERIO JOHANA NICOLE", ingreso: "2024-11-04" },
    { nombre: "ESCAMILLA CABRERA JOSUE JOSAFAT", ingreso: "2024-11-25" },
    { nombre: "ZAVALA SANCHEZ ANGEL EMMANUEL", ingreso: "2024-11-28" },
    { nombre: "MONTAÑEZ ARANDA JOSE ANTONIO", ingreso: "2024-12-16" },
    { nombre: "MANZANO VEGA MARTHA PATRICIA", ingreso: "2025-01-13" },
    { nombre: "CASTAÑON VILLANUEVA JOSE MANUEL ANDRES", ingreso: "2025-01-16" },
    { nombre: "LEON MANDUJANO CAMILA LISETH", ingreso: "2025-01-20" },
    { nombre: "ZAPATA MARTINEZ LUIS ARMANDO", ingreso: "2025-01-30" },
    { nombre: "ROJAS MEJIA BRANDON ALEJANDRO", ingreso: "2025-02-04" },
    { nombre: "ESCOBAR PEREZ AZUL DARIANA", ingreso: "2025-02-08" },
    { nombre: "LOPEZ CARDENAS CINTHIA VIRIDIANA", ingreso: "2025-12-30" },
    { nombre: "RODRIGUEZ PEÑA J. INES", ingreso: "2025-02-24" },
    { nombre: "MARTINEZ RUVALCABA BENJAMIN", ingreso: "2025-03-03" },
    { nombre: "ALFARO GONZALEZ FERNANDO JESUS", ingreso: "2025-03-07" },
    { nombre: "BAUTISTA HERNANDEZ JESUS ADRIAN", ingreso: "2025-03-07" },
    { nombre: "CASTRO GOMEZ PALOMA CITLALI", ingreso: "2025-03-24" },
    { nombre: "LOPEZ BANDA ALFREDO DE JESUS", ingreso: "2023-04-10" },
    { nombre: "CRUZ MARTINEZ ARMANDO", ingreso: "2023-04-15" },
    { nombre: "TENORIO PEREZ JOSE RICARDO", ingreso: "2023-05-02" },
    { nombre: "BARBOSA HERNANDEZ JOSE MANUEL", ingreso: "2025-12-30" },
    { nombre: "MIRELES VAZQUEZ SISSI", ingreso: "2025-12-30" },
    { nombre: "LOPEZ ZAMORA ANGEL JOSUE", ingreso: "2023-06-19" },
    { nombre: "JUAREZ MANCERA BERNARDO", ingreso: "2023-06-26" },
    { nombre: "MENDEZ MARCELO OSCAR", ingreso: "2025-12-25" },
    { nombre: "VAZQUEZ MARES MARIA FERNANDA", ingreso: "2025-12-30" },
    { nombre: "ARAUJO AVIÑA JORGE ANDRES", ingreso: "2025-12-30" },
    { nombre: "VELAZQUEZ TORRES NORMA JUDITH", ingreso: "2023-09-16" },
    { nombre: "PEÑA ORTIZ FRANCISCO JAVIER", ingreso: "2023-09-20" },
    { nombre: "BRAVO VILLA MAURICIO", ingreso: "2023-09-22" },
    { nombre: "DIAZ ROBLEDO FELIX GERARDO", ingreso: "2023-09-25" },
    { nombre: "SERRANO GONZALEZ FRANCISCO JAVIER", ingreso: "2023-10-17" },
    { nombre: "ARAUJO AVIÑA LUIS ALFREDO", ingreso: "2025-12-30" },
    { nombre: "MARTINEZ FRANCO CANDIDO ADALBERTO", ingreso: "2023-11-14" },
    { nombre: "PRADO CAMACHO CLAUDIA EDITH", ingreso: "2025-12-30" },
    { nombre: "MANCERA PERALES DANIELA YAZMIN", ingreso: "2023-12-22" },
    { nombre: "MEDINA LOPEZ GABRIELA", ingreso: "2024-01-01" },
    { nombre: "FLORES RAMOS ROBERTO ANGEL", ingreso: "2024-01-15" },
    { nombre: "LARA MORALES PAOLA ALEJANDRA", ingreso: "2024-01-16" },
    { nombre: "VELA BRAVO MIGUEL ANGEL", ingreso: "2024-01-26" },
    { nombre: "FLORES BECERRIL GUSTAVO", ingreso: "2024-02-01" },
    { nombre: "TORRES ARROYO MARIA VIRIDIANA", ingreso: "2024-02-07" },
    { nombre: "MORENO JUAREZ JUAN", ingreso: "2025-12-30" },
    { nombre: "VARGAS MARTINEZ EMMANUEL", ingreso: "2024-04-19" },
    { nombre: "FLORES FLORES MARIA FERNANDA", ingreso: "2024-04-23" },
    { nombre: "CAMPOS  ALEJANDRO", ingreso: "2024-04-23" },
    { nombre: "ALVARADO RODRIGUEZ BERENICE", ingreso: "2024-05-16" },
    { nombre: "PEREZ MARTINEZ DANIEL", ingreso: "2024-05-21" },
    { nombre: "URIBE AMBRIZ MA LUISA", ingreso: "2024-05-21" },
    { nombre: "GASPAR OLMOS MARIO ALBERTO", ingreso: "2024-05-22" },
    { nombre: "HERNANDEZ TERAN JUAN LUIS", ingreso: "2024-06-03" },
    { nombre: "JASSO GAVIA EDGAR DE JESUS", ingreso: "2024-06-10" },
    { nombre: "MARTINEZ ALCALA SALVADOR", ingreso: "2024-07-08" },
    { nombre: "COVARRUBIAS MEDELLIN OSCAR DE JESUS", ingreso: "2024-07-15" },
    { nombre: "VENTURA GONZALEZ JOSE DE JESUS", ingreso: "2024-07-22" },
    { nombre: "SANCHEZ MARES AMAURI ALEJANDRO", ingreso: "2024-08-01" },
    { nombre: "ORTEGA HERNANDEZ MERCEDES", ingreso: "2024-08-02" },
    { nombre: "GONZALEZ MONJARAZ CESAR MARTIN", ingreso: "2024-08-13" },
    { nombre: "HERNANDEZ AGUILAR CESAR JAVIER", ingreso: "2024-08-13" },
    { nombre: "NORIEGA ZAVALA ANA PAOLA", ingreso: "2024-08-28" },
    { nombre: "MARTINEZ HERNANDEZ BERENICE ALEJANDRA", ingreso: "2024-08-30" },
    { nombre: "MURILLO ALVAREZ ROCIO ALEJANDRA", ingreso: "2024-09-06" },
    { nombre: "ROCHA FALCON ROGELIO", ingreso: "2024-09-23" },
    { nombre: "AGUILERA LEON YAHAIRA YAQUELINE", ingreso: "2024-09-30" },
    { nombre: "ARRIAGA GONZALEZ RODOLFO", ingreso: "2024-10-01" },
    { nombre: "LIMON RANGEL LIZETTE GUADALUPE", ingreso: "2024-10-01" },
    { nombre: "GODINEZ SANCHEZ GLORIA", ingreso: "2025-04-07" },
    { nombre: "JUAREZ ARELLANO BRIAN JOSUE", ingreso: "2025-04-22" },
    { nombre: "GUTIERREZ SANCHEZ JACIEL ALEJANDRO", ingreso: "2025-04-29" },
    { nombre: "DE LARA MUÑOZ FLAVIO HUMBERTO", ingreso: "2025-05-14" },
    { nombre: "ALMARAZ DAVILA MITZI MARIA MONSERRAT", ingreso: "2025-05-16" },
    { nombre: "MANCERA COVARRUBIAS ORIANA VIANEY", ingreso: "2025-12-30" },
    { nombre: "DELGADO MENDEZ ANA CECILIA", ingreso: "2025-06-01" },
    { nombre: "BARRON BRIBIEZCA ISAAC GUILLERMO", ingreso: "2025-06-01" },
    { nombre: "PALOMINO SANCHEZ MARTIN", ingreso: "2025-06-01" },
    { nombre: "RINCON RIVERA RUBEN", ingreso: "2025-06-01" },
    { nombre: "CUARENTA CAMPOS JUAN JESUS", ingreso: "2025-06-01" },
    { nombre: "FLORES URIBE LUIS ALEJANDRO", ingreso: "2025-06-01" },
    { nombre: "GOMEZ CAUDILLO MIGUEL ANGEL", ingreso: "2025-12-30" },
    { nombre: "RAMIREZ ALEJANDRE CARLOS DANIEL", ingreso: "2025-12-30" },
    { nombre: "MONDRAGON BELMAN VICTOR MANUEL", ingreso: "2025-12-30" },
    { nombre: "ARREDONDO GODINEZ PATRICIO", ingreso: "2025-12-30" },
    { nombre: "CRUZ FLORES CHRISTIAN ENRIQUE", ingreso: "2025-12-30" },
    { nombre: "HERNANDEZ CORTES LUIS ADOLFO", ingreso: "2025-12-30" },
    { nombre: "VARGAS VALLEJO JAVIER ALEJANDRO", ingreso: "2025-12-30" },
    { nombre: "MARTINEZ BONAMI FATIMA NOHEMI", ingreso: "2025-12-30" },
    { nombre: "CARDOSO CORREA YAIME", ingreso: "2025-12-30" },
    { nombre: "GUEVARA CRUZ JOSE JAIME", ingreso: "2025-12-30" },
    { nombre: "NORIA GODOY MARIA CONCEPCION", ingreso: "2025-12-30" },
    { nombre: "GALLEGOS MARTINEZ PAUL", ingreso: "2026-01-05" },
    { nombre: "RODRIGUEZ ESPINOZA M. GUADALUPE", ingreso: "1981-06-07" },
    { nombre: "GODINEZ RODRIGUEZ NICOLAS", ingreso: "1993-07-05" },
    { nombre: "MORALES RIVERA BERTHA", ingreso: "1993-07-19" },
    { nombre: "ZAVALA MELGOZA CRISTINA RAQUEL", ingreso: "2016-04-16" },
    { nombre: "HERNANDEZ CORTES SUHEILY DEYANIRA", ingreso: "2025-06-01" },
    { nombre: "ZAVALA ESTRADA GLORIA", ingreso: "2025-06-01" },
    { nombre: "PEREZ URDIALES BRENDA CITLALY", ingreso: "2025-06-01" },
    { nombre: "HERNANDEZ CHAGOYA LUPITA", ingreso: "2025-06-01" },
    { nombre: "HERNANDO HERNANDEZ ANGEL GABRIEL", ingreso: "2025-06-16" },
    { nombre: "GRANADOS AGUIRRE JESUS MISAEL", ingreso: "2025-06-17" },
    { nombre: "HERNANDEZ GONZALEZ LUIS ALBERTO", ingreso: "2025-06-26" },
    { nombre: "HERNANDEZ NERI OMAR LEONARDO", ingreso: "2025-12-30" },
    { nombre: "ALVARADO CANCINO ROXANNA ALEJANDRA", ingreso: "2025-12-30" },
    { nombre: "MENDOZA SILVA ANDREA ESPERANZA", ingreso: "2025-12-30" },
    { nombre: "VALDIVIA MEJIA TRISTAN ISRAEL", ingreso: "2025-12-30" },
    { nombre: "GONZALEZ ROJAS JOSE LEONARDO", ingreso: "2025-12-30" },
    { nombre: "CRESPO RODRIGUEZ JOSE FELIPE DE JESUS", ingreso: "2025-12-30" },
    { nombre: "ALCANTAR CONTRERAS DANIELA", ingreso: "2025-12-30" },
    { nombre: "COLLAZO VEGA ANGEL ALEXIS GUADALUPE", ingreso: "2025-12-30" },
    { nombre: "CONTRERAS CONTRERAS ALEJANDRA", ingreso: "2024-08-26" },
    { nombre: "CHAVEZ LOZANO SONIA", ingreso: "2024-10-01" },
    { nombre: "GARCIA SOTO JULIANA DEL CARMEN", ingreso: "2022-06-04" },
    { nombre: "PEREZ MORENO JOSEFINA", ingreso: "2005-06-16" }
];

// ==========================
// VALIDACIÓN DE ANTIGÜEDAD
// ==========================
function tieneUnAnio(fechaIngreso) {
    const hoy = new Date();
    const ingreso = new Date(fechaIngreso);

    let anios = hoy.getFullYear() - ingreso.getFullYear();
    const m = hoy.getMonth() - ingreso.getMonth();

    // Si el mes actual es menor que el mes de ingreso, o si es el mismo mes pero el día actual es menor, entonces no ha cumplido un año completo
    if (m < 0 || (m === 0 && hoy.getDate() < ingreso.getDate())) {
        anios--;
    }

    return anios >= 1;
}

// ==========================
// ESTADOS
// ==========================
const elegibles = colaboradores.filter(c => tieneUnAnio(c.ingreso));
let ganadores = [];

const lista = document.getElementById("listaColaboradores");

// ==========================
// RENDER (TODOS)
// ==========================
function renderLista() {

    lista.innerHTML = "";

    // Quitar de la ruleta visual a los que ya ganaron
    const visibles = colaboradores.filter(
        c => !ganadores.some(g => g.nombre === c.nombre)
    );

    // repetir para efecto scroll
    const listaExtendida = [...visibles, ...visibles, ...visibles];

    listaExtendida.forEach(p => {

        const div = document.createElement("div");
        div.classList.add("participante");

        div.textContent = p.nombre;

        lista.appendChild(div);
    });

    lista.style.transition = "none";
    const alturaItem = 225;

    // posición aleatoria al iniciar para dar sensación de giro real desde el principio
    const inicioRandom = Math.floor(Math.random() * visibles.length);

    lista.style.transform =
        `translateY(-${inicioRandom * alturaItem}px)`;
}
// inicial
renderLista();


// ==========================
// GIRAR
// ==========================
function girar() {
    //Validar input de premio vacío
    const premioInput = document.getElementById("premioInput");
    const premio = premioInput.value.trim();

    if (premio === "") {
        alert("Escribe el premio antes de girar.");
        premioInput.focus();
        return;
    }

    // animar ícono
    const icono = document.getElementById("icono-ruleta");
    icono.classList.add("girando-icono");
    
    // elegibles que no han ganado
    const disponibles = elegibles.filter(p => !ganadores.includes(p.nombre));

    if (disponibles.length === 0) {
        alert("Todos los elegibles ya ganaron.");
        return;
    }

    // ganador lógico
    const ganadorIndex = Math.floor(Math.random() * disponibles.length);
    const ganador = disponibles[ganadorIndex];

    const visibles = colaboradores.filter(
        c => !ganadores.some(g => g.nombre === c.nombre)
    );

    const indexEnLista = visibles.findIndex(
        c => c.nombre === ganador.nombre
    );

    const alturaItem = 225; //coincidir con altura de visor CSS
    const vueltas = visibles.length * 2;

    const posicionFinal = (vueltas + indexEnLista) * alturaItem;

    //Anteriormente se usaba esta curva de animación, pero se cambió a una más "aleatoria" para dar sensación de giro real
    /*lista.style.transition = "transform 4s cubic-bezier(0.2, 0.8, 0.2, 1)";*/

    // nueva curva para dar sensación de giro real
    lista.style.transition = "transform 4s cubic-bezier(0.08, 0.9, 0.25, 1)";
    lista.style.transform = `translateY(-${posicionFinal}px)`;

    // sonido
    new Audio("assets/audio/spin.mp3").play().catch(() => { });

    setTimeout(() => {

        // detener animación de ícono
        icono.classList.remove("girando-icono");

        const ganadorHTML = document.getElementById("ganador");

        // mostrar etiqueta al primer ganador
        ganadorHTML.style.visibility = "visible";
        ganadorHTML.style.opacity = "1";

        ganadorHTML.innerText =
            `🎉 Ganador: ${ganador.nombre} 🎉`;

        // animación REAL
        ganadorHTML.animate(
            [
                {
                    transform: "scale(1)",
                    color: "#fff",
                    textShadow: "0 0 5px #afabab"
                },
                {
                    transform: "scale(1.15)",
                    color: "#fff",
                    textShadow: "0 0 30px #afabab"
                },
                {
                    transform: "scale(1)",
                    color: "#fff",
                    textShadow: "0 0 5px #afabab"
                }
            ],
            {
                duration: 800,
                iterations: 2
            }
        );

        // highlight visual
        const items = document.querySelectorAll(".participante");
        items.forEach(el => el.classList.remove("ganador"));

        const ganadorVisualIndex = vueltas + indexEnLista;

        if (items[ganadorVisualIndex]) {

            // limpiar anteriores
            items.forEach(el => el.classList.remove("ganador"));

            // aplicar dorado
            items[ganadorVisualIndex].classList.add("ganador");
        }

        // sonido final
        new Audio("assets/audio/win.mp3").play().catch(() => { });

        // esperar unos segundos mostrando gold
        setTimeout(() => {

            ganadores.push({
                nombre: ganador.nombre,
                premio: premio || "Sin premio definido"
            });

            /*
            //Limpiar automáticamente el input para la siguiente ronda
            premioInput.value = "";
           */

            renderLista();
            renderHistorial();

        }, 1800);
    }, 4000);
}

//Función para renderizar el historial de ganadores y premios
function renderHistorial() {

    listaGanadoresHTML.innerHTML = "";

    ganadores.forEach((g, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span class="ganador-nombre">
                ${index + 1}. ${g.nombre}
            </span>

            <span class="ganador-premio">
                🎁 ${g.premio}
            </span>
        `;

        listaGanadoresHTML.appendChild(li);
    });
}

//Función para pantalla completa
function pantallaCompleta() {

    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

//Función para exportar ganadores a Excel usando SheetJS (XLSX)
function ExportarGanadores() {

    if (ganadores.length === 0) {
        alert("No hay ganadores para exportar.");
        return;
    }

    // convertir datos
    const datos = ganadores.map((g, index) => ({
        "Ronda": index + 1,
        "Ganador": g.nombre,
        "Premio": g.premio
    }));

    // crear hoja
    const ws = XLSX.utils.json_to_sheet(datos);

    // crear libro
    const wb = XLSX.utils.book_new();

    // agregar hoja al libro con título
    XLSX.utils.book_append_sheet(wb, ws, "Ganadores");

    // formatear fecha para nombre de archivo
    const fecha = new Date().toISOString().split("T")[0];

    // descargar archivo con nombre y fecha
    XLSX.writeFile(wb, `Historial_Ganadores_${fecha}.xlsx`);
}