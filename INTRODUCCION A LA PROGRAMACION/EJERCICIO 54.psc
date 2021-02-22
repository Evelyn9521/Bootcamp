Funcion RESULTADO = ES_PRIMO(NUM)
	Definir INDICE Como Entero;
	DEFINIR RESULTADO Como Logico;
	
	RESULTADO = Verdadero;
	
	PARA INDICE = 2 HASTA NUM - 1 CON PASO 1 Hacer
		SI NUM MOD INDICE = 0 Entonces
			RESULTADO = Falso;
		FinSi
	FinPara
FinFuncion

Algoritmo EJERCICIO_54
	
	Definir NUM, INDICE, CONTADOR_PRIMO Como Entero;
	Escribir " INTRODUCE UN Nº";
	Leer NUM;
	CONTADOR_PRIMO = 0;
	PARA INDICE = 2 HASTA NUM CON PASO 1 Hacer
		SI ES_PRIMO(INDICE) Entonces
			Escribir INDICE " ES PRIMO";
			CONTADOR_PRIMO = CONTADOR_PRIMO + 1;
		FinSi
	FinPara
		Escribir " ANTES DE ", NUM, " HAY ", CONTADOR_PRIMO " PRIMOS";
FinAlgoritmo
