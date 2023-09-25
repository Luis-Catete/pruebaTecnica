import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PokemonDetailDialogComponent } from './dialog/pokemon-detail-dialog.component';

@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.scss']
})
export class PokemonTableComponent implements OnInit {
  data: any[] = [];
  displayedColumns: string[] = ['position', 'name', 'image'];
  dataSource: any;
  pokemones = [];

  //@ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private pokeService: PokemonService,
    public detailDialog: MatDialog
  ) { }

  ngOnInit() {
    this.getPokemonesFull();
  }

  getPokemonesFull() {
    let pokemonData
    let n:number=1;

    //consulta a endpoint para mostrar todos los pokemon
    this.pokeService.getPokemonsFull().subscribe(value => {

      //se recorre el array del data obtenido en la consulta y se agregan a un array para mostrarse en la tabla 
      for (let v of value.results){
        pokemonData={
          position: n,
          url:v.url,
          name: v.name,
          
        }
        n++;
        this.data.push(pokemonData);
      }

      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getRow(row: any) {

    //llamada al dialogo mandando los parametos de row
      const dialogo = this.detailDialog.open(PokemonDetailDialogComponent, {
        data: row
      });

  }

}
