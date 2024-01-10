const invertirCadenaSinEspeciales = (cadena) => {
  /*
    Utilizamos la función match con la expresión regular [a-zA-Z] para obtener un array de caracteres
    alfabéticos de la cadena. Esto se almacena en la variable caracteresAlfabeticos.
  */
  const caracteresAlfabeticos = cadena.match(/[a-zA-Z]/g)
  /*
    Verificamos si existen caracteres alfabéticos en la cadena.
    Si es así, utilizamos la función replace con la misma expresión regular
    para reemplazar cada carácter alfabético con el resultado de la función de reemplazo.
    La función de reemplazo utiliza pop() para obtener y quitar el último carácter alfabético de la lista.
    Si no hay caracteres alfabéticos, devolvemos la cadena original sin cambios.
  */
  return caracteresAlfabeticos
    ? cadena.replace(/[a-zA-Z]/g, () => caracteresAlfabeticos.pop())
    : cadena
}

const resultado1 = invertirCadenaSinEspeciales('a,b$c')
console.log(resultado1)

const resultado2 = invertirCadenaSinEspeciales('Ab,c,de!$')
console.log(resultado2)
