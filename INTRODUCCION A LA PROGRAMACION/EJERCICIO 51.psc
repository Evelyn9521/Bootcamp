Algoritmo EJERCICIO_51
	
	Definir NUM_1, INDICE Como Entero;
	Definir ES_PRIMO Como Logico;
	
	Escribir " INTRODUCE UN N� ENTERO POSITIVO ";
	Leer NUM_1;
	
	ES_PRIMO = Verdadero;
	Para INDICE = 2 Hasta NUM_1 - 1 Con Paso 1 Hacer
		SI NUM_1 MOD INDICE == 0 Entonces
			ES_PRIMO = Falso;
		FinSi
	Fin Para
	
	SI ES_PRIMO Entonces
		Escribir " EL N� ", NUM_1 " ES PRIMO";
	SiNo
		Escribir " EL N� ", NUM_1 " NO ES PRIMO";
	FinSi
FinAlgoritmo
