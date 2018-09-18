import str from './models/Search';

// normal way
// import {add, multiply, ID} from './views/searchView';

// using alias command
// import {add as a, multiply as m, ID} from './views/searchView';

// import all
import * as searchView from './views/searchView';

// console.log(`Using imported functions! ${add(ID, 2)} and ${multiply(3,5)}. ${str}`);
console.log(`Using imported functions! ${searchView.add(searchView.ID, 6)} and ${searchView.multiply(3,5)}. ${str}`);