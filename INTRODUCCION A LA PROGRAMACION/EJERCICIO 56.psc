Algoritmo EJERCICIO_56
	
	Definir NOTAS, CURSO, ALUMNO, N_CURSO, N_ALUMNOS Como Entero;
	N_CURSO = 3;
	N_ALUMNOS = 5;
	Dimension NOTAS[N_CURSO, N_ALUMNOS];
	
	PARA CURSO = 0 HASTA N_CURSO - 1 Hacer
		PARA ALUMNO = 0 HASTA N_ALUMNOS - 1 Hacer
			Escribir " INTRODUCE LA NOTA DEL ALUMNO ", ALUMNO, " DEL CURSO ", CURSO;
			Leer NOTAS[CURSO, ALUMNO];
		FinPara
	FinPara
	
	Para  CURSO = 0 Hasta N_CURSO - 1
		Escribir "CURSO ", CURSO, ": " Sin Saltar;
		
		PARA ALUMNO = 0 Hasta  N_ALUMNOS - 1 Hacer
			Escribir NOTAS[CURSO, ALUMNO], " " Sin Saltar;
		FinPara
		Escribir "";
	FinPara
	
	
FinAlgoritmo
