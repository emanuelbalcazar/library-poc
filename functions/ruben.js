let ruben = (numero) => {
    let resultado =
        numero % 2 === 0
            ? `El numero ${numero} es par`
            : `El numero ${numero} es impar`;
    console.log(resultado);
};

module.exports = ruben;
