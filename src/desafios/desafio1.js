// Desafio 1:
// Como podemos rodar isso em um arquivo .ts sem causar erros? 
const employee = {
    code: 10,
    name: 'João'
};

// OR:

const employee2: {code: number, name: string} = {
    code: 20,
    name: 'José'
}
console.log(employee.code, employee.name);
console.log(employee2.code, employee2.name);