Algoritmo EJERCICIO_45
	//TENIENDO UN VECTOR CON LOS N� NATURALES QUE QUERAMOS, 
	//METER EN OTRO EN LA MISMA LONGITUD, AQUELLOS QUE SEAN PARES Y MAYORES QUE 25
	//DESPUES MOSTRAR ORIGEN COMPLETO Y EL DE DESTINO SOLO LOS N� INTRODUCIDOS
	
	Definir ARRAY_1, ARRAY_2, TAMANO, INDICE, INDICE_ARRAY_2 Como Entero;
	TAMANO = 10;
	Dimension ARRAY_1[TAMANO], ARRAY_2[TAMANO];
	
	INDICE_ARRAY_2 = 0;
	
	Para INDICE = 0 Hasta TAMANO - 1 Con Paso 1 Hacer
		//RELLENAR E IMPRIMIR EL 1� ARRAY
		ARRAY_1[INDICE] = Aleatorio(1, 50);
		Escribir ARRAY_1[INDICE], " " Sin Saltar;
		
		//RELLENAR EL 2� ARRAY
		SI ARRAY_1[INDICE]MOD 2 == 0 Y ARRAY_1[INDICE] > 25 Entonces
			ARRAY_2[INDICE_ARRAY_2] = ARRAY_1[INDICE];
			INDICE_ARRAY_2 = INDICE_ARRAY_2 + 1;
		FinSi
		
		
	Fin Para
	Escribir "";
	SI INDICE_ARRAY_2 < 1 Entonces
		Escribir " EL SEGUNDO ESTA VACIO";
	SiNo
	Para INDICE = 0 Hasta INDICE_ARRAY_2 - 1  Hacer
		Escribir ARRAY_2[INDICE], " " Sin Saltar;
	Fin Para
	Escribir "";
FinSi

	
FinAlgoritmo
