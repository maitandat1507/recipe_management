import axios from 'axios';
import {key, proxy} from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults(query) {
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            console.log('aaa');
            console.log(res);
            this.result = res.data.recipes;
        } catch (err) {
            console.log(err);
            alert('Error!' + err);
        }
    
    }
}