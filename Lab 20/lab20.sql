/*
Autores: Jose Ricardo Rosales Castaneda y Miguel Angel Tena Garcia
*/
-- ===================================================================
-- Consulta de una tabla completa, renglones: 45
select * from materiales;
/*
Resultado:
clave  descripcion  precio impuesto
1000   Varilla 3/16  100     10
1010   Varilla 4/32  115    11.5
1020   Varilla 3/17  130     13
*/
-- ===================================================================

-- ===================================================================
-- Seleccion, renglones: 1
select * from materiales
where clave=1000;
/*
Resultado:
clave  descripcion  precio impuesto
1000   Varilla 3/16  100     10
*/
-- ===================================================================

-- ===================================================================
-- Proyeccion, renglones: 87
select clave,rfc,fecha from entregan;
/*
Resultado:
clave  rfc        fecha
1000   AAAA800101 2001-12-13
1000   AAAA800101 1999-07-13
1010   BBBB800101 1998-07-28
*/
-- ===================================================================

-- ===================================================================
-- Reunion natural, renglones: 45
select * from materiales,entregan
where materiales.clave = entregan.clave;
/*
Resultado:
clave  descripcion   precio impuesto  clave  rfc            numero  fecha       cantidad
1000   Varilla 3/16   100     10      1000   AAAA800101     5000    2001-12-13    165
1000   Varilla 3/16   100     10      1000   AAAA800101     5019    1999-07-13    254
1010   Varilla 4/32   115    11.5     1010   BBBB800101     5001    1998-07-28    528
*/
-- ===================================================================

-- ===================================================================
-- Reunion con criterio especifico, renglones: 45
select * from entregan,proyectos
where entregan.numero <= proyectos.numero;
/*
Resultado:
clave  rfc            numero  fecha       cantidad  numero  denominacion
1000   AAAA800101     5000    2001-12-13    165      5000    Vamos Mexico
1200   EEEE800101     5000    2003-03-15    117      5000    Vamos Mexico
1400   AAAA800101     5000    1999-04-07    382      5000    Vamos Mexico
*/
-- ===================================================================

-- ===================================================================
-- Union, renglones: 2
(select * from entregan where clave=1450)
union
(select * from entregan where clave=1300);
/*
Resultado:
clave  rfc            numero  fecha       cantidad
1300   GGGG800101     5005    2004-02-28    521
1300   GGGG800101     5010    2001-02-10    119
*/
-- ¿Cuál sería una consulta que obtuviera el mismo resultado sin usar el operador Unión? Compruébalo.
-- SELECT * FROM entregan
-- WHERE clave = 1450 OR clave = 1300;
-- ===================================================================

-- ===================================================================
-- Interseccion, renglones: 1
(select clave from entregan where numero=5001)
intersect
(select clave from entregan where numero=5018);
/*
Resultado:
clave
1010
*/
-- ===================================================================

-- ===================================================================
-- Diferencia, renglones: 85, usando not in como equivalente de minus
SELECT * FROM entregan
WHERE clave NOT IN (
  SELECT clave FROM entregan WHERE clave = 1000
);
/*
Resultado:
clave  rfc            numero  fecha       cantidad
1010   BBBB800101     5001    1998-07-28    528
1010   BBBB800101     5018    1997-02-09    523
1020   CCCC800101     5002    2003-12-13    582
*/
-- ===================================================================

-- ===================================================================
-- Producto cartesiano, renglones: 87
select * from entregan,materiales;
/*
Resultado:
clave  rfc            numero  fecha       cantidad  clave  descripcion   precio impuesto
1000   AAAA800101     5000    2001-12-13    165      1000   Varilla 3/16   100     10
1000   AAAA800101     5000    2001-12-13    165      1010   Varilla 4/32   115    11.5
1000   AAAA800101     5000    2001-12-13    165      1020   Varilla 3/17   130     13
*/
-- ¿Cómo está definido el número de tuplas de este resultado en términos del número de tuplas de entregan y de materiales?
-- El número de tuplas de este resultado es igual al número de tuplas de entregan multiplicado por el número de tuplas de materiales.
-- ===================================================================

-- ===================================================================
-- Construccion de consultas a partir de una especificacion, renglones: 12
select descripcion from materiales, entregan
where materiales.clave = entregan.clave 
and entregan.fecha between '2000-01-01' and '2001-01-01';
/*
Resultado:
descripcion
Varilla 3/17
Varilla 4/34
Block
*/
-- ¿Por qué aparecen varias veces algunas descripciones de material?
-- Porque se entrego el mismo material en diferentes fechas.
-- ===================================================================

-- ===================================================================
-- Uso de distinct, renglones: 10
select distinct descripcion from materiales, entregan
where materiales.clave = entregan.clave 
and entregan.fecha between '2000-01-01' and '2001-01-01';
/*
Resultado:
descripcion
Varilla 3/17
Varilla 4/34
Block
*/
-- ¿Qué diferencia hay entre el resultado de esta consulta y el de la anterior?
-- En esta consulta no se repiten las descripciones de material.
-- ===================================================================

-- ===================================================================
-- Ordenamiento, renglones: 87
select proyectos.numero, proyectos.denominacion, entregan.fecha, entregan.cantidad
from proyectos
inner join entregan on proyectos.numero = entregan.numero
order by proyectos.numero, entregan.fecha desc;
/*
Resultado:
numero  denominacion  fecha       cantidad
5000    Vamos Mexico  2003-03-15    177
5000    Vamos Mexico  2001-12-13    165
5000    Vamos Mexico  1999-04-07    382
*/
-- ===================================================================

-- ===================================================================
-- Operadores en cadena, renglones: 2
SELECT * FROM materiales where Descripcion LIKE 'Si%';
/*
Resultado:
clave  descripcion  precio impuesto
1120   Sillar rosa   100     10
1130   Sillar gris   110     11
*/
-- ¿Qué resultado obtienes?
-- Obtiene las descripciones que empiezan con Si.
-- Explica que hace el símbolo '%'.
-- El símbolo '%' indica que puede haber cualquier número de caracteres después de la palabra Si.
-- ¿Qué sucede si la consulta fuera : LIKE 'Si' ?
-- Obtiene las descripciones que empiezan con Si y no tienen más caracteres después.
-- Explica a qué se debe este comportamiento.
-- El símbolo '%' indica que puede haber cualquier número de caracteres después de la palabra Si.
-- ===================================================================

-- ===================================================================
-- Comportamiento, funcion y resultado de las siguientes consultas
SELECT RFC FROM Entregan WHERE RFC LIKE '[A-D]%';
-- Obtiene los RFC que empiezan con A, B, C o D.
-- Resultado: no arroja resultado, posiblemente porque no hay RFC que empiecen con A, B, C o D mayusculas.
SELECT RFC FROM Entregan WHERE RFC LIKE '[^A]%';
-- Obtiene los RFC que no empiezan con A.
-- Resultado: no arroja resultado, posiblemente porque no hay RFC que empiecen con A mayuscula.
SELECT Numero FROM Entregan WHERE Numero LIKE '___6';
-- Obtiene los números que terminan en 6 y tienen 3 caracteres antes del 6, renglones 9.
/*
Resultado:
numero
5016
5006
5006
*/
-- ===================================================================
-- Between, renglones: 43
SELECT Clave,RFC,Numero,Fecha,Cantidad
FROM Entregan
WHERE Numero Between 5000 and 5010;
/*
Resultado:
clave  rfc            numero  fecha       cantidad
1000   AAAA800101     5000    2001-12-13    165
1200   EEEE800101     5000    2003-03-15    177
1010   BBBB800101     5001    1998-07-28    528
*/
-- ¿Cómo filtrarías rangos de fechas?
-- Poniendo los rangos de las fechas en como parametros del between.
-- ===================================================================

-- ===================================================================
-- Exists, renglones: 12
SELECT RFC,Cantidad, Fecha,Numero
FROM Entregan
WHERE Numero Between 5000 and 5010 AND
Exists ( SELECT RFC
FROM Proveedores
WHERE RazonSocial LIKE 'La%' and Entregan.RFC = Proveedores.RFC );
/*
Resultado:
rfc            cantidad  fecha       numero
AAAA800101     165      2001-12-13    5000
AAAA800101     86       2005-04-03    5008
AAAA800101     152      0000-00-00    5004
*/
-- ¿Qué hace la consulta?
-- Obtiene los RFC de los proveedores que tienen una razon social que empieza con La y que el numero esta entre 5000 y 5010.
-- ¿Qué función tiene el paréntesis ( ) después de EXISTS?
-- Se usa para indicar que la consulta que se encuentra dentro de los parentesis es una subconsulta.
-- ===================================================================

-- ===================================================================
-- In, renglones: 12
SELECT RFC,Cantidad, Fecha,Numero
FROM Entregan
WHERE Numero Between 5000 and 5010 AND
RFC IN ( SELECT RFC
FROM Proveedores
WHERE RazonSocial LIKE 'La%' );
/*
Resultado:
rfc            cantidad  fecha       numero
AAAA800101     165      2001-12-13    5000
AAAA800101     86       2005-04-03    5008
AAAA800101     152      0000-00-00    5004
*/
-- ===================================================================

-- ===================================================================
-- Not in, renglones: 12
SELECT RFC,Cantidad, Fecha,Numero
FROM Entregan
WHERE Numero Between 5000 and 5010 AND
RFC NOT IN ( SELECT RFC
FROM Proveedores
WHERE RazonSocial NOT LIKE 'La%' );
/*
Resultado:
rfc            cantidad  fecha       numero
AAAA800101     165      2001-12-13    5000
AAAA800101     86       2005-04-03    5008
AAAA800101     152      0000-00-00    5004
*/
-- ===================================================================

-- ===================================================================
-- Top 2, renglones: 2
SELECT TOP 2 * FROM Proyectos;
-- Regrersa los dos primeros renglones de la tabla Proyectos.

SELECT TOP Numero FROM Proyectos
-- No se puede usar la columna Numero para indicar el numero de renglones a regresar.
-- ===================================================================

-- ===================================================================
-- Modificando la estructura de una tabla
-- Agregando una columna
ALTER TABLE materiales ADD PorcentajeImpuesto NUMERIC(6,2);
-- agregndo porcentajeimpuesto
UPDATE materiales SET PorcentajeImpuesto = 2*clave/1000;
-- Se agrego la columna porcentajeimpuesto y se le asigno el valor de 2*clave/1000 a la tabla materiales.
-- ¿Qué consulta usarías para obtener el importe de las entregas es decir, el total en dinero de lo entregado,
-- basado en la cantidad de la entrega y el precio del material y el impuesto asignado?
SELECT e.Numero, m.Descripcion, e.Cantidad, m.Precio, m.PorcentajeImpuesto, 
e.Cantidad * m.Precio * (1 + m.PorcentajeImpuesto / 100) AS Importe
FROM entregan e, materiales m
WHERE e.clave = m.clave;
/*
Resultado:
numero  descripcion  cantidad  precio  porcentajeimpuesto  importe
5000    Varilla 3/16    165     100            2.00         16830
5019    Varilla 3/16    254     100            2.00         25908
5001    Varilla 4/32    528     115            2.02       61946.544
*/
-- ===================================================================

-- ===================================================================
-- Creacion de 5 vistas
CREATE VIEW VentaMateriales AS 
SELECT e.Numero, m.Descripcion, e.Cantidad, m.Precio, m.PorcentajeImpuesto,
e.Cantidad * m.Precio * (1 + m.PorcentajeImpuesto / 100) AS Importe
FROM entregan e, materiales m
WHERE e.clave = m.clave;

CREATE VIEW materialesAnio2000 AS
select descripcion from materiales, entregan
where materiales.clave = entregan.clave 
and entregan.fecha between '2000-01-01' and '2001-01-01';

CREATE VIEW materiales1000 AS
select descripcion from materiales, entregan
where materiales.clave = entregan.clave
and entregan.cantidad > 100;

CREATE VIEW numero5000and5010 AS 
SELECT Clave,RFC,Numero,Fecha,Cantidad
FROM Entregan
WHERE Numero Between 5000 and 5010;

CREATE VIEW razonLikeLa AS
SELECT RFC,Cantidad, Fecha,Numero
FROM Entregan
WHERE Numero Between 5000 and 5010 AND
RFC IN ( SELECT RFC
FROM Proveedores
WHERE RazonSocial LIKE 'La%' );
-- ===================================================================

-- ===================================================================
-- Los materiales (clave y descripción) entregados al proyecto "México sin ti no estamos completos".
-- Renglones: 3
SELECT m.clave, m.descripcion
FROM materiales m, entregan e, proyectos p
WHERE m.clave = e.clave
AND e.numero = p.numero
AND p.denominacion = 'Mexico sin ti no estamos completos';
/*
Resultado:
clave  descripcion
1030   Varilla 4/33
1230   Cemento
1430   Pintura B1022
*/
-- ===================================================================

-- ===================================================================
-- Los materiales (clave y descripción) que han sido proporcionados por el proveedor "Acme tools".
-- Renglones: 0
SELECT m.clave, m.descripcion
FROM materiales m, entregan e, proveedores p
WHERE m.clave = e.clave
AND e.rfc = p.rfc
AND p.razonsocial = 'Acme tools';
/*
Resultado:
clave  descripcion
*/
-- ===================================================================

-- ===================================================================
-- El RFC de los proveedores que durante el 2000 entregaron en promedio cuando menos 300 materiales.
-- Renglones: 4
SELECT p.rfc
FROM proveedores p, entregan e
WHERE p.rfc = e.rfc
AND e.fecha BETWEEN '2000-01-01' AND '2001-01-01'
GROUP BY p.rfc
HAVING SUM(e.cantidad) >= 300;
/*
Resultado:
rfc
BBBB800101
CCCC800101
FFFF800101
GGGG800101
*/
-- ===================================================================

-- ===================================================================
-- El Total entregado por cada material en el año 2000.
-- Renglones: 11
SELECT m.clave, m.descripcion, SUM(e.cantidad) AS TotalEntregado
FROM materiales m, entregan e
WHERE m.clave = e.clave
AND e.fecha BETWEEN '2000-01-01' AND '2001-01-01'
GROUP BY m.clave, m.descripcion;
/*
Resultado:
clave  descripcion  totalentregado
1020   Varilla 3/17      8
1050   Varilla 4/34     623
1100   Block            466
*/
-- ===================================================================

-- ===================================================================
--  La Clave del material más vendido durante el 2001. (se recomienda usar una vista intermedia para su solución)
-- Renglones: 1
CREATE VIEW materialesMasVendidos AS
SELECT m.clave, m.descripcion, SUM(e.cantidad) AS TotalEntregado
FROM materiales m, entregan e
WHERE m.clave = e.clave
AND e.fecha BETWEEN '2001-01-01' AND '2002-01-01'
GROUP BY m.clave, m.descripcion;

SELECT clave FROM materialesMasVendidos LIMIT 1;
/*
Resultado:
clave
1000
*/
-- ===================================================================

-- ===================================================================
-- Productos que contienen el patrón 'ub' en su nombre
SELECT * 
FROM materiales 
WHERE descripcion LIKE ('%ub%');
/*
Resultado:
clave  descripcion         precio  Impuesto porcentajeimpuesto
1180  Recubrimiento P1001   200       20           2.36
1190  Recubrimiento P1010   220       22           2.38
1200  Recubrimiento P1020   240       24           2.40
*/
-- ===================================================================

-- ===================================================================
-- Denominación y suma del total a pagar para todos los proyectos.
-- Renglones: 20
SELECT p.denominacion, SUM(e.cantidad * m.precio * (1 + m.porcentajeimpuesto / 100)) AS Total
FROM proyectos p, entregan e, materiales m
WHERE p.numero = e.numero
AND e.clave = m.clave
GROUP BY p.denominacion;
/*
Resultado:
denominacion                                    total
Ampliuaciion de la carretera a la huasteca      578970.509
Aztecon                                         150200.218
CIT Campeche                                    161603.082
*/
-- ===================================================================

-- ===================================================================
-- Denominación, RFC y RazonSocial de los proveedores que se suministran materiales al proyecto Televisa en acción que 
-- no se encuentran apoyando al proyecto Educando en Coahuila (Solo usando vistas).
-- Renglones: 2
CREATE VIEW proveedoresTelevisa AS
SELECT p.rfc, p.razonsocial
FROM proveedores p, entregan e, proyectos pr
WHERE p.rfc = e.rfc
AND e.numero = pr.numero
AND pr.denominacion = 'Televisa en accion';

CREATE VIEW proveedoresEducando AS
SELECT p.rfc, p.razonsocial
FROM proveedores p, entregan e, proyectos pr
WHERE p.rfc = e.rfc
AND e.numero = pr.numero
AND pr.denominacion = 'Educando en Coahuila';

SELECT * FROM proveedoresTelevisa
EXCEPT
SELECT * FROM proveedoresEducando;
/*
Resultado:
rfc         razonsocial
CCCC800101  La Ferre
DDDD800101  Cecoferre
*/

-- ===================================================================
-- Denominación, RFC y RazonSocial de los proveedores que se suministran materiales al proyecto Televisa en acción que 
-- no se encuentran apoyando al proyecto Educando en Coahuila (Sin usar vistas, utiliza not in, in o exists).
-- Renglones: 2
SELECT DISTINCT p.rfc, p.razonsocial
FROM proveedores p, entregan e, proyectos pr
WHERE p.rfc = e.rfc
AND e.numero = pr.numero
AND pr.denominacion = 'Televisa en accion'
AND p.rfc NOT IN (
    SELECT p.rfc
    FROM proveedores p, entregan e, proyectos pr
    WHERE p.rfc = e.rfc
    AND e.numero = pr.numero
    AND pr.denominacion = 'Educando en Coahuila'
);
/*
Resultado:
rfc         razonsocial
CCCC800101  La Ferre
DDDD800101  Cecoferre
*/
-- ===================================================================

-- ===================================================================
--  Costo de los materiales y los Materiales que son entregados al proyecto Televisa 
-- en acción cuyos proveedores también suministran materiales al proyecto Educando en Coahuila.
-- Renglones: 2
SELECT m.descripcion, SUM(e.cantidad * m.precio * (1 + m.porcentajeimpuesto / 100)) AS Costo
FROM materiales m, entregan e, proyectos pr
WHERE m.clave = e.clave
AND e.numero = pr.numero
AND pr.denominacion = 'Televisa en accion'
AND e.rfc IN (
    SELECT e.rfc
    FROM entregan e, proyectos pr
    WHERE e.numero = pr.numero
    AND pr.denominacion = 'Educando en Coahuila'
)
GROUP BY m.descripcion;
/*
Resultado:
descripcion         costo
Ladrillos Rojos     4392.88
Tepetate            3731.13
*/
-- ===================================================================

-- ===================================================================
-- Nombre del material, cantidad de veces entregados y total del costo de dichas entregas por material de todos los proyectos.
-- Renglones: 42
SELECT m.descripcion, COUNT(e.cantidad) AS VecesEntregado, 
SUM(e.cantidad * m.precio * (1 + m.porcentajeimpuesto / 100)) AS Costo
FROM materiales m, entregan e
WHERE m.clave = e.clave
GROUP BY m.descripcion;
/*
Resultado:
descripcion         vecesentregado    costo
Arena                     2         106169.28
Block                     2          35718.9
*/
-- ===================================================================


