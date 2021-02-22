Algoritmo EJERCICIO_36
	
	// Crear dos arrays de numeros enteros de longitud 10 rellenos con
	// numeros aleatorios del 1 al 20. Imprimir indice y el resultado
	// de la multiplicacion de ambos elementos de los arrays del indice
	// de cada iteracion. Cuidado con los elementos del array sin inicializar.
	
	Definir ARRAY_1,ARRAY_2, INDICE, MULTIPLICACIÓN, TAMAÑO Como Entero;
	TAMAÑO = 10;
	Dimension ARRAY_1[TAMAÑO], ARRAY_2[TAMAÑO];
	
	Para INDICE = 0 Hasta TAMAÑO -1 Con Paso 1 Hacer
		// Primero generamos aleatorios y los asignamos
		// a cada elemento, uno a uno.
		ARRAY_1[INDICE] = Aleatorio(1, 20);
		ARRAY_2[INDICE] = Aleatorio(1, 20);
		
		// Una vez generados, los multiplico y guardo en mi variable
		MULTIPLICACIÓN = ARRAY_1[INDICE] * ARRAY_2[INDICE];
		
		// Cuando tengo toda la información, la imprimo.
		Escribir " INDICE ", INDICE, ": ",  ARRAY_1[INDICE], " * ", ARRAY_2[INDICE], " = ", MULTIPLICACIÓN;
	Fin Para
FinAlgoritmo
