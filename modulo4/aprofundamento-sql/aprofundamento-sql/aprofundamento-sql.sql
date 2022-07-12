USE
  `aragon-marcio-lima`;

SET
  SQL_SAFE_UPDATES = 0;

-- Exercício 1 --
CREATE TABLE
  `Projects` (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL,
    date DATE NOT NULL
  );

SELECT
  *
FROM
  `Projects`;

DESCRIBE
  `Projects`;

-- Exercício 2 --
INSERT INTO
  `Projects` (id, name, title, date)
VALUES
  ("001", "LabeSky", "LSy", "2023/05/10"),
  ("002", "Labefy", "LFy", "2024/01/06"),
  ("003", "AstroZoom", "AZm", "2022/12/20");

-- Exercício 3 --
-- A --
ALTER TABLE
  `Projects` DROP COLUMN title;

DESCRIBE
  `Projects`;

-- B --
ALTER TABLE
  `Projects` CHANGE date dueDate DATE NOT NULL;

-- C --
ALTER TABLE
  `Funcionarios` MODIFY email VARCHAR(255) NOT NULL UNIQUE;

DESCRIBE
  `Funcionarios`;

-- Exercício 4 --
-- A --
ALTER TABLE
  `Projects`
ADD
  description VARCHAR(255) NOT NULL;

DESCRIBE
  `Projects`;

-- B --
UPDATE
  `Projects`
SET
  description = "Projeto de sistema em nuvem da Labenu."
WHERE
  id = "001";

UPDATE
  `Projects`
SET
  description = "Projeto de sistema de gerenciamento de músicas da Labenu."
WHERE
  id = "002";

UPDATE
  `Projects`
SET
  description = "Projeto de rede de comunicação da Labenu."
WHERE
  id = "003";

SELECT
  *
FROM
  `Projects`;

-- Exercício 5 --
-- A --
SELECT
  *
FROM
  `Projects`
ORDER BY
  dueDate DESC;

-- B --
SELECT
  name,
  dueDate
FROM
  `Projects`
ORDER BY
  dueDate ASC
LIMIT
  2;
  
-- CORREÇÃO DO EXERCÍCIO 2 --
-- Edição no formato da data, eu havia invertido mês e dia --
UPDATE
  `Projects`
SET	
  dueDate = "2023/10/05"
WHERE
  id = "001";