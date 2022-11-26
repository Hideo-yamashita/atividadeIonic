import { Component, OnInit } from '@angular/core';
import { empty, EMPTY } from 'rxjs';
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.page.html',
  styleUrls: ['./cep.page.scss'],
})
export class CepPage implements OnInit {

  constructor() { }

  ngOnInit() {}


  cep: String = "";

  estado: String = "";
  cidade: String = "";
  bairro: String = "";
  rua: String = "";

  buscarEndereco()
  {
    if (this.cep != "")
    {

    }
    else
    {
      alert("Infomer um cep");
      return;
    }
    
  }


}
