import { Documento } from "./documento";
import { Fecha } from "./fecha";
import { Usuario } from "./usuario";

export class Tramite {
    id!:number;
    titulo!:string;
    mensaje!:string;
    tipo!:string;
    fecha!:Fecha;
    usuario!:Usuario;
    documento!:Documento[];
}
