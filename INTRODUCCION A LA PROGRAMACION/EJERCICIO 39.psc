Algoritmo EJERCICIO_39
	
	Definir  ARRAY_1, ARRAY_2, TAMA�O, INDICE Como Entero;
	Definir SON_IGUALES Como Logico;
	
	TAMA�O = 5;
	Dimension ARRAY_1[TAMA�O],ARRAY_2[TAMA�O];
	
	ARRAY_1[0] = 1;
	ARRAY_1[1] = 2;
	ARRAY_1[2] = 3;
	ARRAY_1[3] = 4;
	ARRAY_1[4] = 5;
	
	
	ARRAY_2[0] = 1;
	ARRAY_2[1] = 2;
	ARRAY_2[2] = 3;
	ARRAY_2[3] = 4;
	ARRAY_2[4] = 5;
	
	// APUESTO A QUE SON IGUALES
	SON_IGUALES = Verdadero;
	
	Para INDICE = 0 Hasta TAMA�O - 1 Con Paso 1 Hacer
		SI ARRAY_1[INDICE] <> ARRAY_2[INDICE] Entonces
			//SI VERDADERO, SI SON DIFERENTES
			SON_IGUALES = Falso;
	
		FinSi
	Fin Para
	SI SON_IGUALES Entonces
		Escribir " LOS ARRAYS SON IGUALES ";
	SiNo
		Escribir " SON DIFERENTES ";
	FinSi
	
	
	
FinAlgoritmo

