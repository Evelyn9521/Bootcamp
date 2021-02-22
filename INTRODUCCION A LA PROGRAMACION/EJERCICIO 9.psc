Algoritmo CALIFICACIONES_CALCULAR_NOTA_FINAL
	Definir N1, N2, N3, N4, N5 Como REAL;
	definir NOTA_FINAL Como Real;
	Leer  N1, N2, N3, N4, N5;
	NOTA_FINAL= (N1 + N2 + N3 + N4 + N5 )/ 5;
	
	Si NOTA_FINAL >= 5 Entonces
		escribir " has aprobado ",  NOTA_FINAL;
	SiNo
		escribir " has suspendido ", NOTA FINAL;
	Fin Si
FinAlgoritmo
