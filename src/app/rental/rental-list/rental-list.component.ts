import { Component, OnInit } from '@angular/core';
import { RentalService} from '../shared/rental.service';

@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  rentals: any[] = [];

  constructor(private rentalService: RentalService) { }

  ngOnInit() {
    const rentalObervable = this.rentalService.getRentals();
    rentalObervable.subscribe(
    (rentals) => {
     this.rentals = rentals;
    },
    (err) => {
       
    },
    () => {

    });
  }

}
