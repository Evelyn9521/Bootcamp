Algoritmo EJERCICIO_49
	//Se tienen los costes de producción de tres departamentos (dulces, bebidas y conservas)
	// correspondientes a los 12 meses del año anterior. Construir algoritmo que proporcione:
	//	En qué mes se registró el mayor coste de producción de dulces
	//	Promedio anual de los costes de producción de bebidas
	//	En qué mes se registró el mayor coste de producción en bebidas, y en qué mes el menor coste
	//	Cuál fue el que tuvo menor coste de producción en diciembre

	Definir ARRAY_DULCE, ARRAY_BEBIDA, ARRAY_CONSERVAS, TAMANO, INDICE, MAXIMO_DULCES, MES_MAXIMO, SUMA, MAX_BEBIDAS, MIN_BEBIDAS, MES_MIN Como Entero;
	TAMANO = 12;
	Dimension ARRAY_DULCE[TAMANO], ARRAY_BEBIDA[TAMANO], ARRAY_CONSERVAS[TAMANO];
	
	Escribir "DEPS  DULCE  BEBIDA  CONSERVAS";
	
	Para INDICE = 0 Hasta TAMANO - 1 Con Paso 1 Hacer
		ARRAY_DULCE[INDICE] = Aleatorio(50, 300);
		ARRAY_BEBIDA[INDICE] = Aleatorio(50, 300);
		ARRAY_CONSERVAS[INDICE] = Aleatorio(50, 300);
		Escribir "MES ", INDICE + 1, "    " ARRAY_DULCE[INDICE], "   " ARRAY_BEBIDA[INDICE], "   " ARRAY_CONSERVAS[INDICE]; 
	Fin Para
	
	// MES MAXIMO DE DULCES
	Para INDICE = 0 Hasta TAMANO - 1 Con Paso 1 Hacer
		Si  INDICE == 0 O ARRAY_DULCE[INDICE] > MAXIMO_DULCES   Entonces
			MAXIMO_DULCES = ARRAY_DULCE[INDICE];
			MES_MAXIMO = INDICE;
		Fin Si
	Fin ParA
	
	Escribir " EL MES QUE SE REGISTRÓ EL MAYOR COSTE DE PRODUCCION DE DULCES ES: ", MES_MAXIMO + 1;
	
	
	// PROMEDIO ANUAL DE LAS BEBIDAS 
	SUMA = 0;
	Para INDICE = 0 Hasta TAMANO - 1 Con Paso 1 Hacer
		SUMA = SUMA + ARRAY_BEBIDA[INDICE];
	Fin Para
	
	Escribir " EL PROMEDIO DE LAS BEBIDAS ES: " SUMA / TAMANO;
	
	
	// MES DE MAYOR COSTE DE PRODUCCION DE BEBIDAS Y MES DE MENOR COSTE
	Para INDICE = 0 Hasta TAMANO - 1 Con Paso 1 Hacer
		Si  INDICE == 0 O ARRAY_BEBIDA[INDICE] > MAX_BEBIDAS   Entonces
			MAX_BEBIDAS = ARRAY_BEBIDA[INDICE];
			MES_MAXIMO = INDICE;
		Fin Si
		Si  INDICE == 0 O ARRAY_BEBIDA[INDICE] < MIN_BEBIDAS   Entonces
			MIN_BEBIDAS = ARRAY_BEBIDA[INDICE];
			MES_MIN = INDICE;
		FinSi
		
	Fin Para
	
	Escribir  " EL MES CON MAS COSTE DE BEBIDA ES DE :"  MAX_BEBIDAS, " ES EL MES " MES_MAXIMO + 1;
	Escribir " EL MES CON MENOR COSTE DE BEBIDAS ES DE: "  MIN_BEBIDAS, " ES EL MES " MES_MIN + 1;
	
	
	// MES QUE TUVO MENOR COSTE DE PRODUCCION EN DICIEMBRE
	SI ARRAY_DULCE[11] < ARRAY_BEBIDA[11] Y ARRAY_DULCE[11] < ARRAY_CONSERVAS[11] Entonces
		Escribir " EN DICIEMBRE, EL DEPARTAMENTO DE DULCES HA TENIDO MENOR COSTE";
	SiNo
		SI ARRAY_BEBIDA[11] < ARRAY_CONSERVAS[11] Entonces
			Escribir " EN DICIEMBRE EL DEPARTAMENTO DE EBEBIDA HA TENIDO EL MENOR COSTE";
		SiNo
			Escribir " EN DICIEMBRE, EL DEPARTAMENTO DE CONSERVAS HA TENIDO EL MENOS COSTE";
		FinSi
	FinSi
	
	
	
FinAlgoritmo
