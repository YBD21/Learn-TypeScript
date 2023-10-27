export class CustomMap {
  // cannot access outside from this class
  private googleMap: google.maps.Map;

  constructor() {
    const id: any = document.getElementById("map");

    this.googleMap = new google.maps.Map(id, {
      zoom: 3,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
}
