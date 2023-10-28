import { User } from "./components/User";
import { Company } from "./components/Company";
import { CustomMap } from "./components/CustomMap";

// const user = new User();

// console.log(user);

// const company = new Company();

// console.log(company);
const user = new User();

const company = new Company();

const customMap = new CustomMap("map");

customMap.addUserMarker(user);

customMap.addCompanyMarker(company);
