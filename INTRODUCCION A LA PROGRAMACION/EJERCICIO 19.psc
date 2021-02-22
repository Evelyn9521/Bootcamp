Algoritmo sin_titulo
	Definir SUMA, N, MEDIA, CONTADOR Como Entero;
	LEER N;
	
	SUMA = 0;
	CONTADOR = 0;
	
	Mientras N <> -1 Hacer
		SUMA = SUMA + N;
		Escribir "INTRODUCE UN NÚMERO";
		LEER N;
		CONTADOR = CONTADOR +1;
	Fin Mientras
	
	ESCRIBIR " LA MEDIA ES ", SUMA / CONTADOR;

FinAlgoritmo
