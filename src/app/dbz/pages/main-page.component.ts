import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  // Habilita toda la información (métodos, propiedades, atributos, etc.) del servicio en todo este componente del MainPage
  constructor(private DbzService: DbzService){}

  get characters(): Character[]{
    return [...this.DbzService.characters];
  }

  onDeleteCharacter(id:string):void{
    this.DbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character):void{
    this.DbzService.addCharacter(character);
  }

}
