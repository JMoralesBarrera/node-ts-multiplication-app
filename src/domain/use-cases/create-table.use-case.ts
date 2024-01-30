
export interface CreateTableUsecase{
execute:(option:CreateTableOptions)=>string;
}

export interface CreateTableOptions{
    base:number;
    limit?: number;
}

export class  CreateTable{

    constructor(

        /**
        /* Di- Dependecy Injection
        */

    ){ }

    execute({base, limit=10}: CreateTableOptions){
        let outputMessage='';

        for (let i = 1; i <= limit; i++) {
            outputMessage += `${base} X ${i} = ${base *i}\n`;
        }

        return outputMessage;

    }
}