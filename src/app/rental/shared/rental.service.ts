import {Injectable} from '@angular/core';

@Injectable()
export class RentalService{
	
	private rentals: any[] = [{
  	id: 1,
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
  	id: 2,
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
  	id: 3,
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
  	id: 4,
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

  public getRentals(): any[] {
  	return this.rentals;
  }


}
