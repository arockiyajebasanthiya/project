import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Grid } from '@syncfusion/ej2-angular-grids';
   @Component({
     selector: 'app-grid',
     templateUrl: './grid.component.html',
     styleUrls: ['./grid.component.css']
   })
   export class GridComponent {
     gridData: { name: string }[] = [];

     constructor() {}

     addRow() {
       this.gridData.push({ name: '' });
     }

     deleteRow(index: number) {
       this.gridData.splice(index, 1);
     }
   }