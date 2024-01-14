// 8. Verifique se algum numero na lista é maior que um valor N qualquer.
function todosSaoMaiores(lista, n){

    console.log(lista.every(elem => elem > n))
      

}
todosSaoMaiores([1,2,3,4,5,6], 2)

