Algoritmo EJERCICIO_59
	
	DEFINIR  N_CENTROS, N_CURSOS, N_ALUMNOS, CENTRO, CURSO, ALUMNO, SUMA, MAX_CENTRO Como Entero;
	Definir  NOTAS, MEDIA,  MAXIMO Como Real;
	
	N_CENTROS = 5;
	N_CURSOS = 4;
	N_ALUMNOS = 10;
	
	Dimension NOTAS[N_CENTROS, N_CURSOS, N_ALUMNOS];
	
	Para CENTRO = 0 HASTA N_CENTROS - 1 Hacer
		Escribir "CENTRO ", CENTRO;
		Para CURSO = 0 HASTA N_CURSOS - 1 Hacer
			Escribir "CURSO ", CURSO, " : " Sin Saltar;
			
			SUMA = 0;
			
			Para ALUMNO = 0 HASTA N_ALUMNOS - 1 Hacer         // PARA PONER DECIMALES;
			NOTAS[CENTRO, CURSO, ALUMNO] = Aleatorio(1, 10); //- (Aleatorio(0, 100) /100);
			Escribir  NOTAS[CENTRO, CURSO, ALUMNO], " " Sin Saltar;
			
			SUMA = SUMA + NOTAS[CENTRO, CURSO, ALUMNO];
		FinPara
		
		MEDIA = SUMA/N_ALUMNOS;
		Escribir "- MEDIA DEL CURSO: ", MEDIA Sin Saltar;
		
		SI (CENTRO == 0 Y CURSO == 0) O MEDIA > MAXIMO Entonces
			MAXIMO = MEDIA;
			MAX_CENTRO = CENTRO;
			
		FinSi
		
		Escribir "";
		
		FinPara
		Escribir "";
	FinPara
	Escribir " LA MEDIA MÁS ALTA ES ", MAXIMO, " EN EL CENTRO ", MAX_CENTRO;
FinAlgoritmo
