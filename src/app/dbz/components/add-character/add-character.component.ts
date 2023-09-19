import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: "",
    power: 0
  }

  emitCharacter():void{

    if ( this.character.name.length === 0 ) return;

    //this.onNewCharacter.emit(this.character);   //Esta línea hace fallar el código (two data binding). Cuando limpie o modifique las cajas de texto, también se va actualizar la(s) fila(s) agregada(s) al array)
    this.onNewCharacter.emit({...this.character});    //Esto crea un nuevo objeto y soluciona la línea anterior

    //debugger;   //agrega un break point para hacer debug
    //console.log(this.character);
    this.character.name="";
    this.character.power=0;
  }
}
