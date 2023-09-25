import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
    selector: 'app-pokemon-detail-dialog',
    templateUrl: './pokemon-detail-dialog.component.html',
    styleUrls: ['./pokemon-detail-dialog.component.scss']
})
export class PokemonDetailDialogComponent implements OnInit {

    pokemonData: any;
    pokemonType:any=[];
    cargado:boolean=false;

    constructor(
        public dialogo: MatDialogRef<PokemonDetailDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private pokeService: PokemonService,) {
    }

    consultaPokemon() {

        //consulta mediante id para ver toda la información de un solo pokemon
        this.pokeService.getPokemons(this.data.position).subscribe(value => {
            this.pokemonData = value;
            for (let t of value.types){
               this.pokemonType.push(t.type.name);
            }
            this.cargado=true;
        });
    }

    ngOnInit() {
        this.consultaPokemon();
    }

    cerrarDialogo(): void {
        this.dialogo.close();
    }

}