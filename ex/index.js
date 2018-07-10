import './estilo.css'

import Pessoa from './pessoa';

import 'react'

export default prop => (
    <h1>Olá</h1>
)

console.log('====================================');
console.log('Funcionou');
console.log('====================================');


const pessoa = new Pessoa('Andrews')
console.log('====================================');
console.log(pessoa.toString());
console.log('====================================');