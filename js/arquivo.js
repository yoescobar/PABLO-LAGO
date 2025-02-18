
import colecaoDados from 'readline-sync';

console.log('APLICACAO DE JUROS:')

var valor = colecaoDados.question('INFORME O VALOR DEVIDO:');
var dias = colecaoDados.question('INFORME QUANTOS DIAS SE PASSARAM DESDE O VENCIMENTO DO BOLETO: ');

var valorTotal;
var juros;

if (dias <= 15) {
   juros = valor * 5 / 100;
   valorTotal = Number(valor) + Number(juros);
   console.log(`VALOR ORIGINAL DA DIVIDA: ${valor}`);
   console.log(`DIAS ATRASADOS: ${dias}`);
   console.log(`TAXA DE  JUROS: 5%`);
   console.log(`VALOR  TOTAL COM JUROS: ${valorTotal}`);
} else { 
   juros = valor * 10 / 100;
   valorTotal = Number(valor) + Number(juros);
   console.log(`VALOR ORIGINAL DA DIVIDA: ${valor}`);
   console.log(`DIAS ATRASADOS: ${dias}`);
   console.log(`TAXA DE  JUROS: 10%`);
   console.log(`VALOR  TOTAL COM JUROS: ${valorTotal}`);
}
