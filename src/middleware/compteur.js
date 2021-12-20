  const Panier = require("../model/Panier.js")


 function  myCounteur(k) {
  k=6;
  let datas = Panier.findAll();
  let count = 0;
  k=0;
  for (let i = 0; i < datas.length; i++) {
    if (datas[i]) count++;k++
    // console.log(count)
  }
 
  return k;
}

module.exports = myCompteur;