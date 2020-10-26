import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
@@ -9,8 +9,11 @@ import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CidadeComponent } from './cidade/cidade.component';
import { TabelaprecoComponent } from './tabelapreco/tabelapreco.component';

import { ConfirmDialogComponent } from './_components/confirm-dialog/confirm-dialog.component';


import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
@@ -24,14 +27,23 @@ import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { ProdutoComponent } from './produto/produto.component';


//Locale do Brasil
import localept from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ClienteComponent } from './cliente/cliente.component';
registerLocaleData(localept, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    CidadeComponent,
    ConfirmDialogComponent,
    ConfirmDialogComponent,
    FilmeLocacaoComponent,
    FilmeComponent,
    GeneroComponent,
    LivroComponent,
    LivroLocacaoComponent,
    LocacaoComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
@@ -53,7 +65,9 @@ import {MatDialogModule} from '@angular/material/dialog';
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }