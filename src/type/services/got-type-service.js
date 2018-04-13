import * as axios from 'axios';
const API_ENDPOINT = 'https://api.gothub.io/types/type/';
// const API_ENDPOINT = 'http://localhost:8080/types/type/';

/**
 * Data access service for got type declarations.
 */
export class GotTypeService {

    /**
     * Instance of the singleton.
     */
    static instance;

    /**
     * Provide an instance of this service
     */
    static getInstance() {
        if (!GotTypeService.instance) {
            GotTypeService.instance = new GotTypeService();
        }
        // return new GotTypeService(); // multiple instances (lazy loading enabled)
        return GotTypeService.instance; // singleton (lazy loading disabled)
    }

    /**
     * Cached types which allow faster loading when lazy loading is disabled.
     */
    types = {};

    /**
     * Gets a type declaration from the API by type name
     * @param {String} typeName 
     */
    get(typeName) {
        const self = this;

        return new Promise((resolve, reject) => {

            if (self.types[typeName]) {
                resolve(self.types[typeName]);
            }
            else {
                return axios.get(API_ENDPOINT + typeName)
                    .then(function (response) {
                        self.types = response.data;
                        resolve(self.types[typeName]);
                    })
                    .catch(function (error) {
                        console.log(error);
                        reject(error);
                    });
            }
        });
    }
}
