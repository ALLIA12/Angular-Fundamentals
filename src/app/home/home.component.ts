import { Component } from '@angular/core';
import { DataServiceTempService } from '../core/data-service-temp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  persons: any[] = [];

  constructor(private dataService: DataServiceTempService) { }

  ngOnInit(): void {
    this.dataService.getPersonsData().subscribe((data: any[]) => {
      this.persons = data;
    });
  }
}
