import {Component, OnInit} from '@angular/core';
import {Ruha, RuhaService} from '../ruha.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ruha-list',
  imports: [MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FormsModule],
  templateUrl: './ruha-list.component.html',
  standalone: true,
  styleUrl: './ruha-list.component.css'
})
export class RuhaListComponent implements OnInit {
  ruhak: any[] = [];
  displayedColumns: string[] = ['nev', 'meret', 'szin', 'tipus', 'actions'];
  dataSource = new MatTableDataSource<Ruha>(this.ruhak);

  newRuha: Ruha = { nev: '', meret: '', szin: '', tipus: '' };
  isEditing = false;

  constructor(private ruhaService: RuhaService) {}

  /*ngOnInit() {
    this.ruhaService.getAllRuha().subscribe(
      data => this.ruhak = data,
      error => console.error('Hiba történt a ruházati adatok lekérdezése során', error)
    );
  }*/
  ngOnInit() {
    this.loadRuhak();
  }

  loadRuhak() {
    this.ruhaService.getAllRuha().subscribe(data => {
      this.ruhak = data;
      this.dataSource.data = data;
    });
  }

  addOrUpdateRuha() {
    if (this.isEditing && this.newRuha.id) {
      this.ruhaService.updateRuha(this.newRuha).subscribe(() => {
        this.loadRuhak();
        this.resetForm();
      });
    } else {
      this.ruhaService.saveRuha(this.newRuha).subscribe(() => {
        this.loadRuhak();
        this.resetForm();
      });
    }
  }

  editRuha(ruha: Ruha) {
    this.newRuha = { ...ruha };
    this.isEditing = true;
  }

  deleteRuha(id: number) {
    this.ruhaService.deleteRuha(id).subscribe(() => this.loadRuhak());
  }

  resetForm() {
    this.newRuha = { nev: '', meret: '', szin: '', tipus: '' };
    this.isEditing = false;
  }
}
