import { UmaClasse } from "../../Desestruturação/02_UmaClasse.mjs";

let umObjetoDeClasse = new UmaClasse("um valor")
let json = JSON.stringify(umObjetoDeClasse);
console.log(json);