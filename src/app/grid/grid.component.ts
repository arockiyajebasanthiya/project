import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rows: string[][] = [];

  addRow() {
    this.rows.push(['', '', '', '', '']);
  }

  deleteRow() {
    if (this.rows.length > 0) {
      this.rows.pop();
    }
  }

  updateCell(rowIndex: number, colIndex: number, value: string) {
    this.rows[rowIndex][colIndex] = value;
  }
}
