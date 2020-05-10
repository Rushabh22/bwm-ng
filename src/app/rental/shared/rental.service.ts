import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Rental } from './rental.model';

@Injectable()
export class RentalService{
	
	private rentals: Rental[] = [{
  	id: "1",
  	title: "Central Apartment 1",
  	city: "New York",
  	street : "Times Square",
  	category: "Apartment",
  	image: "http://via.placeholder.com/350x250",
  	bedrooms: 3,
  	description: "Very Nice Aparment",
  	dailyRate: 24,
  	shared: false,
  	createdAt: '24/12/2017'

  },
  {
  	id: "2",
  	title: "Central Apartment 2",
  	city: "San fransico",
  	street : "Mains street Square",
  	category: "Condo",
  	image: "http://via.placeholder.com/350x250",
  	bedrooms: 2,
  	description: "Very Nice Aparment",
  	dailyRate: 34,
  	shared: true,
  	createdAt: '24/12/2017'

  },
  {
  	id: "3",
  	title: "Central Apartment 3",
  	city: "Berlin",
  	street : "Residal trait",
  	category: "Apartment",
  	image: "http://via.placeholder.com/350x250",
  	bedrooms: 5,
  	description: "Very Nice Aparment",
  	dailyRate: 12,
  	shared: true,
  	createdAt: '24/12/2017'

  },
  {
  	id: "4",
  	title: "Central Apartment 4",
  	city: "Bratislva",
  	street : "Wakeruni Brait",
  	category: "Apartment",
  	image: "http://via.placeholder.com/350x250",
  	bedrooms: 4,
  	description: "Very Nice Aparment",
  	dailyRate: 43,
  	shared: false,
  	createdAt: '24/12/2017'

  }];





  public getRentals(): Observable<Rental[]> {
  	const rentalObservable = new Observable<Rental[]>((observer) => {
  		setTimeout(()=>{
  			observer.next(this.rentals);

  		}, 1000);

  		setTimeout(()=>{
  			observer.error("I am error");

  		}, 2000);

  		setTimeout(()=>{
  			observer.complete();

  		}, 3000);
  	});
  	return rentalObservable;
  }

    public getRentalById(rentalId: string): Observable<Rental> {
  	 return new Observable<Rental>((observer) => {	
  	 	setTimeout(()=>{
  	 		const foundRental = this.rentals.find((rental) => {
  				return rental.id == rentalId;
  			});
  			observer.next(foundRental);

  			}, 500);
  	});
  }


}
