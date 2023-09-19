
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {

    public characters: Character[] = [
      {id: uuid(), name: 'Krillin', power: 1000},
      {id: uuid(), name: 'Goku', power: 9500},
      {id: uuid(), name: 'Vegeta', power: 7500}
    ];

    addCharacter(character: Character):void{
      const newCharacter: Character = {
        id: uuid(), ...character    // Toma todas las propiedades del objeto character y las esparce en el nuevo objeto newCharacter
        //name: character.name,
        //power: character.power
      };

      this.characters.push(newCharacter);     // Agrega un elemento al final del arreglo
      //debugger;
      //this.characters.unshift(character);  // Agrega un elemento al inicio del arreglo
    }
    //onDeleteCharacter(index:number){
    //    this.characters.splice(index, 1);
    //}

    deleteCharacterById( id:string ){
      this.characters = this.characters.filter(character => character.id !== id);
    }

}
