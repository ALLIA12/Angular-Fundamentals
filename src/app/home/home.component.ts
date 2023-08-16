import { Component } from '@angular/core';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  persons: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPersonsData().subscribe((data: any[]) => {
      this.persons = data;
    });
  }
}
