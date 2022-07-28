import connection from "./connection"
import {
    TABLE_CLASSROOMS,
    TABLE_HOBBIES,
    TABLE_STUDENTS,
    TABLE_STUDENTS_HOBBIES,
} from "./tableNames"

const createTables = async () => {
    await connection
        .raw(
            `
DROP TABLE IF EXISTS ${TABLE_CLASSROOMS}, ${TABLE_STUDENTS}, ${TABLE_HOBBIES}, ${TABLE_STUDENTS_HOBBIES}};

CREATE TABLE IF NOT EXISTS ${TABLE_CLASSROOMS}(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    module ENUM
);

CREATE TABLE IF NOT EXISTS ${TABLE_STUDENTS}(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    birthDate DATE NOT NULL,
    classroom_id VARCHAR(255),
    FOREIGN KEY (classroom_id) REFERENCES ${TABLE_CLASSROOMS}{id}
);

CREATE TABLE IF NOT EXISTS ${TABLE_HOBBIES}(
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS ${TABLE_STUDENTS_HOBBIES} (
    student_id VARCHAR(255) NOT NULL,
    hobbie_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES ${TABLE_STUDENTS}(id),
    FOREIGN KEY (product_id) REFERENCES ${TABLE_HOBBIES}(id)

);
    `
        )
        .then(() => {
            console.log(`Tables created successfully!`)
            insertData()
        })
        .catch((error: any) => printError(error))
}

const insertData = async () => {
    try {
        await connection(TABLE_CLASSROOMS)
            .insert()
            .then(() => console.log(`${TABLE_CLASSROOMS} populated!`))
            .catch((error: any) => printError(error))

        await connection(TABLE_STUDENTS)
            .insert()
            .then(() => console.log(`${TABLE_STUDENTS} populated!`))
            .catch((error: any) => printError(error))

        await connection(TABLE_HOBBIES)
            .insert()
            .then(() => console.log(`${TABLE_HOBBIES} populated!`))
            .catch((error: any) => printError(error))

        await connection(TABLE_STUDENTS_HOBBIES)
            .insert()
            .then(() => console.log(`${TABLE_STUDENTS_HOBBIES} populated!`))
            .catch((error: any) => printError(error))
    } catch (error: any) {
        console.log(error.sqlMessage || error.message)
    } finally {
        console.log("Ending connection!")

        return connection.destroy()
    }
}

const printError = (error: any) => {
    console.log(error.sqlMessage || error.message)
}

createTables()
