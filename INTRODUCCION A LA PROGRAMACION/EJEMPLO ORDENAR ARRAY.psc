
Algoritmo ORDENAR_ARRAY
	Definir ARRAY, TAMANO, AUX, INDICE, J Como Entero;
	TAMANO = 5;
	Dimension ARRAY[TAMANO];
	
	ARRAY[0]= 3;
	ARRAY[1]= 9;
	ARRAY[2]= 8;
	ARRAY[3]= 1;
	ARRAY[4]= 4;
	
	// PARA VERLO POR CONSOLA
	Para INDICE = 0 Hasta TAMANO - 1  Hacer
		Escribir ARRAY[INDICE], " " Sin Saltar;
	Fin Para
	Escribir "";
	
	Para INDICE = 0 HASTA TAMANO - 2 Hacer
		// ENVIA EL Nº MAYOR AL FINAL
		Para J = 0 Hasta TAMANO - 2  Hacer
			
		SI ARRAY[J] > ARRAY[J +1] Entonces
		AUX = ARRAY[J];
		ARRAY[J]= ARRAY[J + 1];
		ARRAY[J+1]= AUX;
	FinSi
FinPara
FinPara

Para INDICE = 0 Hasta TAMANO - 1 Hacer
	Escribir ARRAY[INDICE], " " Sin Saltar;
FinPara
Escribir "";
FinAlgoritmo




