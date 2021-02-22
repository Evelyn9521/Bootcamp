Algoritmo EJERCICIO_35
	Definir INDICE, TAMANO, MY_ARRAY, RANDOM, SUMA Como Entero;
	Escribir " INTRODUCE TAMAÑO DEL ARRAY ";
	Leer TAMANO;
	
	Dimension  MY_ARRAY[TAMANO];
	
	
	
	Para INDICE = 0 Hasta TAMANO -1 Con Paso 1 Hacer
		MY_ARRAY[INDICE] = Aleatorio(0,9);
		
	Fin Para
	
	SUMA = 0;
	Para INDICE = 0 HASTA TAMANO - 1 Hacer
		Escribir INDICE " : ", MY_ARRAY[INDICE];
		SUMA = SUMA + MY_ARRAY[INDICE];
		
	FinPara
	Escribir "LA SUMA DE LOS ELEMENTOS ES " SUMA;
FinAlgoritmo
