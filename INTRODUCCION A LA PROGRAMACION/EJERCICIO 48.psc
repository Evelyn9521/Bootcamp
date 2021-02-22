Algoritmo EJERCICIO_48
	Definir I, J, CONTADOR, TAMANO Como Entero;
	Definir NOMBRE, NOMBRES, AUX Como Caracter;
	
	TAMANO = 1000;
	Dimension NOMBRES[TAMANO];
	//RELLENO MI ARRAY DE NOMBRES
	CONTADOR = 0;
	
	Repetir
		Escribir "INTRODUCE UN NOMBRE. DEJALO VACIO PARA ACABAR";
		Leer NOMBRE;
		SI NOMBRE <> " " Entonces
			NOMBRES[CONTADOR] = NOMBRE;
			CONTADOR = CONTADOR + 1;
		FinSi
		
	Mientras Que NOMBRE <> " ";
	
	//ORDENO EL ARRAY CON EL MÉTODO BURBUJA
	Para I = 0 Hasta CONTADOR - 2  Hacer
		//REPITE EL ORDENAMIENTO PARA TODOS LOS Nº
		Para  J = 0 HASTA CONTADOR - 2 Hacer
			// ORDENA UN UNICO NOMBRE
			SI NOMBRES[J] > NOMBRES[J + 1] Entonces
				AUX = NOMBRES[J];
				NOMBRES[J] = NOMBRES[J + 1];
				NOMBRES[J + 1] = AUX;
			FinSi
		FinPara
	Fin Para
	PARA I = 0 HASTA CONTADOR - 1 Hacer
		Escribir NOMBRES[I], " " Sin Saltar;
	FinPara
	Escribir " ";
	
FinAlgoritmo
