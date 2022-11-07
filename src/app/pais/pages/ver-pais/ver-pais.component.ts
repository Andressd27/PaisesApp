import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap  } from 'rxjs/operators';
import { Country } from '../../interfaces/pais-interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( 
    private activateRoute: ActivatedRoute,  
    private PaisService: PaisService

    ) { }

  ngOnInit(): void {

    this.activateRoute.params
      .pipe(
        switchMap( ({ id }) => this.PaisService.getPaisPorAlpha( id) ),
        tap( console.log )
      )
      .subscribe( data => {
        this.pais = data.shift() ;  
        console.log(this.pais.name.common);
      });

    // this.activateRoute.params
    //   .subscribe( ({ id }) => {
    //     console.log( id );
      
    //     this.PaisService.getPaisPorAlpha( id )
    //       .subscribe( pais => {
    //         console.log(pais);
    //       })
      
    //   });

  }

}
