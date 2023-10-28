/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";

export class CustomMap {
  // cannot access outside from this class
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    const id: any = document.getElementById(divId);

    this.googleMap = new google.maps.Map(id, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addUserMarker(user: User) {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }

  addCompanyMarker(company: Company) {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng,
      },
    });
  }
}
