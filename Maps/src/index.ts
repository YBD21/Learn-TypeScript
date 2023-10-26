/// <reference types="@types/google.maps" />
// import { User } from "./components/User";
// import { Company } from "./components/Company";

// const user = new User();

// console.log(user);

// const company = new Company();

// console.log(company);

const id: any = document.getElementById("map");
new google.maps.Map(id, {
  zoom: 3,
  center: {
    lat: 0,
    lng: 0,
  },
});
