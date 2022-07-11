/*A*/
SELECT * FROM
  `Funcionarios`;

/*B*/
SELECT
  id AS "identifier",
  name FROM
  `Funcionarios`;

/*C*/
SELECT * FROM
  `Funcionarios`
WHERE
  id = "001";

/*D*/
SELECT * FROM
  `Funcionarios`
WHERE
  name LIKE "%a";

/*E*/
SELECT * FROM
  `Funcionarios`
WHERE
  name NOT LIKE "%r%"
  AND email LIKE "%u%";
