/// <reference types="@types/google.maps" />

// Instruction to every other class
// on how they can be an arugment to 'addMarker'
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };

  markerContent(): string;
  color: string;
}

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

  addMarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
