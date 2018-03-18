import axios from 'axios';
import data from './person.json';

const DATA_URL = './person.json';

// Service to fetch all Entities, fetch Data and Save Data 
class DataService {
    // Gets the speciific Entity
    getEntity = (type) => {
        return new Promise((resolve,reject) => {
            resolve(data);
        })
    }

    getEntityData = (type) => {
        return [];
    }

    // Saves Data as Batch
    saveData = (data) => {
        return new Promise((resolve,reject) => {
            resolve(true);
        })
    }

    getAllEntites = () => {
        return new Promise((resolve,reject) => {
            resolve([]);
        })
    }
};

export default new DataService();