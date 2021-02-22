Algoritmo EJERCICIO_22
	
	Definir  N, CONTADOR_MULT_2, CONTADOR_MULT_3 Como Entero;
	
	N = 0
	CONTADOR_MULT_2 = 0
	CONTADOR_MULT_3 = 0
	
	Repetir
		N = N + 1;
		Si N MOD 2 == 0 Entonces
			Escribir " MULTIPLO DE 2 ", N;
			CONTADOR_MULT_2 = CONTADOR_MULT_2 + 1;
	
		Fin Si
		Si N MOD 3 == 0 Entonces
			ESCRIBIR " MULTIPLO DE 3 ", N;
		CONTADOR_MULT_3 = CONTADOR_MULT_3 + 1
	Fin Si
	
Hasta Que N == 100

Escribir  " TOTAL MULTIPLOS DE 2 : " CONTADOR_MULT_2;
ESCRIBIR " TOTAL MULTIPLOS DE 3 : " CONTADOR_MULT_3;

FinAlgoritmo

