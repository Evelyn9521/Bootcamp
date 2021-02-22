Algoritmo EJERCICIO_29
	
	Definir  CONTADOR, NUM, FACTORIAL Como Entero;
	Escribir " INTRODUCE UN NÚMERO";
	Leer  NUM;
	
	FACTORIAL = 1
	
	Para CONTADOR = 1 Hasta NUM Con Paso 1 Hacer
		FACTORIAL = FACTORIAL * CONTADOR ;
	Fin Para
	
	
	Escribir " EL FACTORIAL DE ", N , "SERÁ ", FACTORIAL;
FinAlgoritmo
