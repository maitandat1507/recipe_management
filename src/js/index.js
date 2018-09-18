// API information
// url: https://www.food2fork.com/api/search
// 0044d01ef5ee0e2fa98ddfd0fa04cbf0

import axios from 'axios';

async function getResults(query) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = '0044d01ef5ee0e2fa98ddfd0fa04cbf0';

    try {
        const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch (err) {
        alert('Error!' + err);
    }

}
getResults('pizza');