Algoritmo EJERCICIO_38
	
	Definir ARRAY_1, ARRAY_2, TAMA�O, INDICE Como Entero;
	TAMA�O = 5;
	Dimension ARRAY_1[TAMA�O], ARRAY_2[TAMA�O];
	
	PARA INDICE = 0 Hasta TAMA�O - 1 Con Paso 1 Hacer
		ARRAY_1[INDICE] = INDICE + 1;
		Escribir ARRAY_1[INDICE], " " Sin Saltar;
	FinPara
	Escribir "";
	
	Para INDICE = 0 Hasta TAMA�O -1 Con Paso 1 Hacer
		// FORMA INVERSA
		ARRAY_2[INDICE]  = ARRAY_1[TAMA�O - 1 - INDICE];
		Escribir ARRAY_2[INDICE], " " Sin Saltar;
	FinPara
	
FinAlgoritmo
