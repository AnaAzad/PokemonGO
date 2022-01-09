import { Component } from '@angular/core';
import { PokemonService } from './pokemon.service';

// interface Student {  
//   id: Number;  
//   name: String;  
//   num: String;  
   
// }  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pokemon-json';
  getRawData: any;
  
  constructor(private pokemonService: PokemonService){}
  // columns = ["User Id","First Name","Number"];
  // index = ["id", "name", "num"];
  students: any[] = [];
  
  ngOnInit(){
    this.getJsonData();
  }

  getJsonData(){
    this.pokemonService.getJSONDataFromGithub().subscribe(data => {
      this.students = data.pokemon;
      console.log(data);
    })
  }

  

}
