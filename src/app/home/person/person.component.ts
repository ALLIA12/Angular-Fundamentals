import { Component } from '@angular/core';
import { DataServiceTempService } from 'src/app/core/data-service-temp.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  providers: [DataServiceTempService]
})
export class PersonComponent {
  people: any[] = [];
  constructor(private service: DataServiceTempService) {
  }
  ngOnInit(): void {
    this.service.getPersonsData().subscribe(data => {
      this.people = data;
    });
  }
}
