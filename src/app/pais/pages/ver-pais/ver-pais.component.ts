import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor( 
    private activateRoute: ActivatedRoute,  
    private PaisService: PaisService

    ) { }

  ngOnInit(): void {

    this.activateRoute.params
      .pipe(
        switchMap( ({ id }) => this.PaisService.getPaisPorAlpha( id) )
      )
      .subscribe( resp => {
        console.log(resp)
      })

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
