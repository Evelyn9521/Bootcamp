Funcion RESULTADO = SUMAR(SUMANDO1, SUMANDO2)
	Definir RESULTADO Como Entero;
	RESULTADO = SUMANDO1 + SUMANDO2
FinFuncion

Funcion RESULTADO = RESTAR(RESTA1, RESTA2)
	Definir RESULTADO Como Entero;
	RESULTADO = RESTA1 - RESTA2;
FinFuncion


Algoritmo EJEMPLO_FUNCIONES
	Definir RESULTADO_SUMA, RESULTADO_RESTA Como Entero;
	
//	Escribir SUMAR(10, 20);
//	Escribir RESTAR(1, 1);
	
//	RESULTADO_SUMA = SUMAR(15, 16);
//	RESULTADO_RESTA = RESTAR (RESULTADO_SUMA, 1);
//	Escribir RESULTADO_RESTA;
//	
	Escribir RESTAR(SUMAR(15, 16), 1);
	
	
FinAlgoritmo
