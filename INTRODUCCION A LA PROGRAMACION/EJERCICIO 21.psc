Algoritmo EJERCICIO_21
	// Algoritmo que lea numeros enteros hasta teclear 0,
	// y nos muestre el maximo, el minimo y la media de todos
	// ellos. Piensa como debemos inicializar las variables.
	
	Definir N, CONTADOR, SUMA, M�XIMO, M�NIMO Como Entero;
	Definir MEDIA Como Real;
	LEER N;

	CONTADOR = 0;
	SUMA = 0;
		
	Mientras N <> 0 Hacer
		
		
		// C�lculo de m�ximo
		Si contador == 0 O N > M�XIMO  Entonces
			ESCRIBIR " EL NUEVO N�M M�XIMO ES ", N;
			M�XIMO = N;
		Fin Si
		
		Si CONTADOR == 0 O N < M�NIMO Entonces
			M�NIMO = N;
		Fin Si
		
		// C�lculo de media
		CONTADOR = CONTADOR + 1;
		SUMA = SUMA + N;
		
		// Nuevo n�mero
		ESCRIBIR " INTRODUZCA N�MERO";
		LEER N;
		
	Fin Mientras
			
	Si contador == 0 Entonces
		Escribir "No has introducido ning�n n�mero.";
	SiNo
		MEDIA = SUMA / CONTADOR;
		ESCRIBIR " LA MEDIA ES ", MEDIA;
		
		Escribir "El m�ximo es ", M�XIMO, " y el m�nimo ", M�NIMO;
	
	Fin Si
	
FinAlgoritmo
