import { ID } from "@datorama/akita";

export class Diretor {
  id: ID | undefined;
  nome: string;

  constructor(id: | undefined = undefined, nome: string = '') {
    this.id = id;
    this.nome = nome;
  }
}
