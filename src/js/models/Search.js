import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults(query) {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = '0044d01ef5ee0e2fa98ddfd0fa04cbf0';
    
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
        } catch (err) {
            alert('Error!' + err);
        }
    
    }
}