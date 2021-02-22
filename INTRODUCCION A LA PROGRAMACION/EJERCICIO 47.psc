Algoritmo EJERCICIO_47
	
	Definir ARRAY, TAMANO, INDICE, AUX, INDICE_2 Como Entero;
	TAMANO = 5;
	Dimension ARRAY[TAMANO];
	
	
	// INICIALIZAMOS E IMPRIMIMOS ESTADO INICIAL
	Escribir " ESTADO INICIAL ";
	Para INDICE = 0 Hasta TAMANO - 1 Hacer
		ARRAY[INDICE] = Aleatorio(1, 100);
		Escribir ARRAY[INDICE], " " Sin Saltar;
	Fin Para
	Escribir "";
	
	//ORDENAMOS
	Para INDICE_DOS = 0 Hasta TAMANO - 2 Hacer
		
	Para  INDICE = 0 Hasta TAMANO - 2 Hacer
	
	SI ARRAY[INDICE] < ARRAY[INDICE + 1] Entonces
	AUX = ARRAY[INDICE];
	ARRAY[INDICE] = ARRAY[INDICE + 1];
	ARRAY[INDICE + 1] = AUX;
FinSi
FinPara
FinPara




	
	Escribir " ESTADO FINAL";
	Para INDICE = 0 Hasta TAMANO - 1 Hacer
		Escribir ARRAY[INDICE], " " Sin Saltar;
	FinPara
	Escribir "";
FinAlgoritmo
