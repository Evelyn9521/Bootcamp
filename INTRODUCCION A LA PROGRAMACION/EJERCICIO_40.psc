Algoritmo EJERCICIO_40
	
	Definir ARRAY, INDICE, TAMANO, COMPROBADOR Como Entero;
	Definir CHECK Como Logico;
	TAMANO = 20;
	Dimension ARRAY[TAMANO];
	PARA INDICE = 0 HASTA TAMANO - 1 Hacer
		ARRAY[INDICE] = Aleatorio(1, 20);
		Escribir ARRAY[INDICE]," " Sin Saltar;
		Repetir
			CHECK = Verdadero;
			PARA COMPROBADOR = 0 HASTA INDICE - 1 CON PASO 1 Hacer
				SI ARRAY[INDICE] == ARRAY[COMPROBADOR] Entonces
					CHECK = Falso;
					ARRAY[INDICE] = Aleatorio(1, 20);
					Escribir ARRAY[INDICE];
				FinSi
			FinPara
		Mientras Que CHECK = Falso
		

	FinPara
	Escribir "";
	PARA INDICE  = 0 HASTA TAMANO - 1 Hacer
		ESCRIBIR ARRAY[INDICE], " " Sin Saltar;
	FinPara
FinAlgoritmo
