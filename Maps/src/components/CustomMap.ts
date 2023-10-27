export class CustomMap {
  // cannot access outside from this class
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    const id: any = document.getElementById(divId);

    this.googleMap = new google.maps.Map(id, {
      zoom: 3,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
}
