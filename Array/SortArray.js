/* Ordenando array de strings */
const names = ["Cesar", "William", "Hilário", "da", "Silva", "cesar", "césar"];

function compare(a, b) {
  return a.toLowerCase() < b.toLowerCase() ? - 1 : 1
}

console.log(names.sort(compare))

/* OU */

console.log(names.sort((a, b) => a.localeCompare(b)))