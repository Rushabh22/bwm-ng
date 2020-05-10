import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bwm-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {
   currentId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(
  		(params) => {
  			console.log(params);
  			this.currentId = params['rentalId'];
  		}
  	)

  }

}
