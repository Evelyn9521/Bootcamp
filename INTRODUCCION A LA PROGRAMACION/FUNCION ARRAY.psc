Funcion IMPRIMIR_ARRAY( ARRAY, TAMANO )
	Definir INDICE COMO ENTERO;
	
	Para INDICE = 0 HASTA TAMANO - 1 Hacer
		Escribir ARRAY[INDICE], " " Sin Saltar;
	FinPara
	
	Escribir "";
Fin Funcion

Algoritmo EJEMPLO_ARRAY
	Definir ARRAY, TAMANO, INDICE Como Entero;
	TAMANO = 10;
	Dimension ARRAY[TAMANO];
	
	PARA INDICE = 0 HASTA TAMANO - 1 Hacer
		ARRAY[INDICE] = Aleatorio(1, 1000);
	FinPara

	
	IMPRIMIR_ARRAY(ARRAY, TAMANO);
	
FinAlgoritmo
