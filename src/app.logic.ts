import fs from 'fs';
import { argv } from 'process';
import {yarg} from './config/plugins/yargs.plugin';



const {b:base,s:show,l:limit}=yarg
const headerMessage = `
======================
    Tabla del  5  
======================
`;

function tabla(base: number) {
    let resultados = '';

    for (let i = 1; i <= limit; i++) {
        resultados += `${base} X ${i} = ${i * base}\n`;
    
    }

    resultados = headerMessage + resultados;
    const outputPath = 'outputs';  // Cambié las comillas invertidas a comillas simples
    fs.mkdirSync(outputPath, { recursive: true });

    // Cambié la siguiente línea para concatenar correctamente la variable outputPath
    fs.writeFileSync(`${outputPath}/tabla.txt`, resultados);
}

tabla(base)
console.log("Resultados guardados en 'outputs/tabla.txt'");
