import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  persons: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPersonsData().subscribe(data => {
      this.persons = data;
    });
  }
}
