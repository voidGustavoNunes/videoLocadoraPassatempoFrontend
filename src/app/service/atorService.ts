import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Ator } from "../modules/ator";
import { map, Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

//traz os dados do backend
export class AtorService {


  // private baseUrl = "http://localhost:8080/home";

  private atorUrl = "http://localhost:8080/atores";


  constructor(private httpClient: HttpClient) { }

  getAtoresList(): Observable<Ator[]> {
    return this.httpClient.get<Ator[]>(this.atorUrl).pipe(
      map(response => response) // Aqui, apenas retorne a resposta, pois já é um array
    );
  }

  getAtor(atorId: number): Observable<Ator>{
    const atorUrl = `${this.atorUrl}/${atorId}`;
    return this.httpClient.get<Ator>(atorUrl);
  }

  createAtor(ator: Ator): Observable<Ator> {
    return this.httpClient.post<Ator>(this.atorUrl, ator);
  }

  updateAtor(ator: Ator): Observable<Ator> {
    return this.httpClient.put<Ator>(`${this.atorUrl}/${ator.id}`, ator);
  }

  apagarAtor(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.atorUrl}/${id}`);
  }


}
interface GetResponseAtores {
  ator: Ator[];

}
