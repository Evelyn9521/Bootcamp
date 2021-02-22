Algoritmo EJERCICIO_36
	
	// Crear dos arrays de numeros enteros de longitud 10 rellenos con
	// numeros aleatorios del 1 al 20. Imprimir indice y el resultado
	// de la multiplicacion de ambos elementos de los arrays del indice
	// de cada iteracion. Cuidado con los elementos del array sin inicializar.
	
	Definir ARRAY_1,ARRAY_2, INDICE, MULTIPLICACI�N, TAMA�O Como Entero;
	TAMA�O = 10;
	Dimension ARRAY_1[TAMA�O], ARRAY_2[TAMA�O];
	
	Para INDICE = 0 Hasta TAMA�O -1 Con Paso 1 Hacer
		// Primero generamos aleatorios y los asignamos
		// a cada elemento, uno a uno.
		ARRAY_1[INDICE] = Aleatorio(1, 20);
		ARRAY_2[INDICE] = Aleatorio(1, 20);
		
		// Una vez generados, los multiplico y guardo en mi variable
		MULTIPLICACI�N = ARRAY_1[INDICE] * ARRAY_2[INDICE];
		
		// Cuando tengo toda la informaci�n, la imprimo.
		Escribir " INDICE ", INDICE, ": ",  ARRAY_1[INDICE], " * ", ARRAY_2[INDICE], " = ", MULTIPLICACI�N;
	Fin Para
FinAlgoritmo
