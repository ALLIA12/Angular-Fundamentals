import { Component } from '@angular/core';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  providers: [DataService],
})
export class PersonComponent {
  people: any[] = [];
  constructor(private service: DataService) {}
  ngOnInit(): void {
    this.service.getPersonsData().subscribe((data: any[]) => {
      this.people = data.slice(0, 10);
    });
  }
}
