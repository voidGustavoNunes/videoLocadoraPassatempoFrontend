import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuCategoriesComponent } from './components/menu-categories/menu-categories.component';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { AtorComponent } from './components/listagem/ator/ator.component';
import { ClasseComponent } from './components/listagem/classe/classe.component';
import { DiretorComponent } from './components/listagem/diretor/diretor.component';
import { CadastroAtorComponent } from './components/cadastro/cadastro-ator/cadastro-ator.component';
import { CadastroDiretorComponent } from './components/cadastro/cadastro-diretor/cadastro-diretor.component';
import { CadastroClasseComponent } from './components/cadastro/cadastro-classe/cadastro-classe.component';
import { FormsModule } from '@angular/forms';
import { BaseComponent } from './components/base/base.component';


const routes : Routes = [
  {path: 'cadastro-ator', component: CadastroAtorComponent },
  {path: 'atores/:id', component: AtorComponent},
  {path: 'search/:keyword', component: SearchComponent},
  {path: 'classes/:id', component: ClasseComponent},
  {path: 'diretores/:id', component: DiretorComponent},
  {path: 'diretores', component: DiretorComponent},
  {path: 'atores', component: AtorComponent},
  {path: 'classes', component: ClasseComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'},

];


@NgModule({
  declarations: [
    AppComponent,
    MenuCategoriesComponent,
    AtorComponent,
    ClasseComponent,
    DiretorComponent,
    SearchComponent,
    CadastroAtorComponent,
    CadastroDiretorComponent,
    CadastroClasseComponent,
    BaseComponent,

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule {


}
