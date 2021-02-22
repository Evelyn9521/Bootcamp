Algoritmo EJERCICIO_57
	
	Definir MATRIZ, FILA, COLUMNA, TAMANO Como Entero;
	Definir ES_SIMETRICA Como Logico;
	TAMANO = 3;
	Dimension MATRIZ[TAMANO,TAMANO];
	matriz[0,0] = 1;
	matriz[0,1] = 2;
	matriz[0,2] = 3;
	
	matriz[1,0] = 2;
	matriz[1,1] = 1;
	matriz[1,2] = 2;
	
	matriz[2,0] = 3;
	matriz[2,1] = 2;
	matriz[2,2] = 1;
	
	//IMPRIMIR LA matriz
	Para FILA = 0 HASTA TAMANO - 1 Hacer
		PARA COLUMNA = 0 HASTA TAMANO - 1 Hacer
			Escribir matriz[FILA, COLUMNA]," " Sin Saltar;
		FinPara
		Escribir "";
	FinPara
	
	ES_SIMETRICA = Verdadero;
	
	
	Para FILA = 0 HASTA TAMANO - 1  Hacer
		PARA COLUMNA = 0 HASTA TAMANO - 1 Hacer
			
		
		SI matriz[FILA, COLUMNA] <> matriz[COLUMNA, FILA]Entonces
			ES_SIMETRICA = Falso;
		FinSi
		FinPara
	FinPara
	
		SI ES_SIMETRICA Entonces
			ESCRIBIR " ES SIMETRICA";
		SiNo
			Escribir " NO ES SIMETRICA";
		FinSi
	
FinAlgoritmo
