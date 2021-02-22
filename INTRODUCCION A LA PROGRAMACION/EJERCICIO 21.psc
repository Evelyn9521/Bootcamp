Algoritmo EJERCICIO_21
	// Algoritmo que lea numeros enteros hasta teclear 0,
	// y nos muestre el maximo, el minimo y la media de todos
	// ellos. Piensa como debemos inicializar las variables.
	
	Definir N, CONTADOR, SUMA, MÁXIMO, MÍNIMO Como Entero;
	Definir MEDIA Como Real;
	LEER N;

	CONTADOR = 0;
	SUMA = 0;
		
	Mientras N <> 0 Hacer
		
		
		// Cálculo de máximo
		Si contador == 0 O N > MÁXIMO  Entonces
			ESCRIBIR " EL NUEVO NÚM MÁXIMO ES ", N;
			MÁXIMO = N;
		Fin Si
		
		Si CONTADOR == 0 O N < MÍNIMO Entonces
			MÍNIMO = N;
		Fin Si
		
		// Cálculo de media
		CONTADOR = CONTADOR + 1;
		SUMA = SUMA + N;
		
		// Nuevo número
		ESCRIBIR " INTRODUZCA NÚMERO";
		LEER N;
		
	Fin Mientras
			
	Si contador == 0 Entonces
		Escribir "No has introducido ningún número.";
	SiNo
		MEDIA = SUMA / CONTADOR;
		ESCRIBIR " LA MEDIA ES ", MEDIA;
		
		Escribir "El máximo es ", MÁXIMO, " y el mínimo ", MÍNIMO;
	
	Fin Si
	
FinAlgoritmo
