import { ID } from "@datorama/akita";
import { Ator } from "./ator";
import { Classe } from "./classe";
import { Diretor } from "./diretor";

export class Titulo {
  id: ID | undefined;
  nome: string | undefined;
  atores: Ator[];
  diretor: Diretor | undefined;
  ano: number | undefined;
  sinopse: string | undefined;
  categoria: string | undefined;
  classe: Classe | undefined;
  selecionado: boolean = false;
  quantidade: number| undefined;

  constructor(
    id: ID | undefined = undefined,
    nome?: string,
    atores: Ator[] = [],
    diretor?: Diretor,
    ano?: number,
    sinopse?: string,
    categoria?: string,
    classe?: Classe,
    quantidade?: number
  ) {
    this.id = id;
    this.nome = nome;
    this.atores = atores;
    this.diretor = diretor;
    this.ano = ano;
    this.sinopse = sinopse;
    this.categoria = categoria;
    this.classe = classe;
    this.quantidade = quantidade;
  }
}
