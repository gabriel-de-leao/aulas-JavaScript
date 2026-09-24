const calcularGasto=(salarios =[1500]) => {
  let gastoTotal = 0

  for (const salario of salarios) {
    gastoTotal += salario < 2000 ? salario * 1.1 : salario
  }

  return gastoTotal
}
console.log(`Gasto total: ${calcularGasto().toFixed(2)}`);
