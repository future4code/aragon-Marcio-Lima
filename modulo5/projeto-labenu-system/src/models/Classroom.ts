export enum MODULE {
    NOT_STARTED = "0",
    MODULE_1 = "1",
    MODULE_2 = "2",
    MODULE_3 = "3",
    MODULE_4 = "4",
    MODULE_5 = "5",
    MODULE_6 = "6",
}

export interface IClassroom {
    id: string
    name: string
    module: MODULE
}

export class Classroom {
    constructor(
        private id: string,
        private name: string,
        private students: string[],
        private module: MODULE
    ) {}
}
