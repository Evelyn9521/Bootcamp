Algoritmo EJERCICIO_50
	
	Definir INDICE, CONTADOR Como Entero;
	Definir LETRA, FRASE Como Caracter;
	
	CONTADOR = 0;
	
	Escribir "INTRODUCE UNA FRASE";
	LEER FRASE;
	
	Escribir " INTRODUCE UNA LETRA";
	LEER LETRA;
	
	
	Para INDICE = 0 Hasta Longitud(FRASE) - 1 Con Paso 1 Hacer
		SI Mayusculas(Subcadena(FRASE, INDICE, INDICE)) == Mayusculas(LETRA) Entonces
			CONTADOR = CONTADOR + 1;
		FinSi
	Fin Para
	
	Escribir " LA LETRA ", LETRA, " APARECE ", CONTADOR, " VECES";
	
FinAlgoritmo
