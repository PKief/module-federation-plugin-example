import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsSearchComponent } from './flights-search/flights-search.component';
import { RouterModule } from '@angular/router';
import { FLIGHTS_ROUTES } from './flights.routes';
import { AuthLibModule } from 'auth-lib';
import { SharedLibModule } from 'shared-lib';
import { IconService } from '../shared/icon.service';
import { MaterialModule } from '../shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AuthLibModule,
    SharedLibModule,
    HttpClientModule,
    RouterModule.forChild(FLIGHTS_ROUTES),
  ],
  declarations: [FlightsSearchComponent],
})
export class FlightsModule {
  constructor(private iconService: IconService) {
    iconService.registerMyIcons();
  }
}
