import axios from 'axios';
// const API_ENDPOINT = 'https://api.gothub.io/types/type/';
const API_ENDPOINT = 'http://localhost:8080/types/type/';

/**
 * Data access service for got type declarations.
 */
export class GotTypeService {

    /**
     * Provide an instance of this service
     */
    public static getInstance(): GotTypeService {
        if (!GotTypeService.instance) {
            GotTypeService.instance = new GotTypeService();
        }
        // return new GotTypeService(); // multiple instances (lazy loading enabled)
        return GotTypeService.instance; // singleton (lazy loading disabled)
    }

    /**
     * Instance of the singleton.
     */
    private static instance: GotTypeService;

    /**
     * Cached types which allow faster loading when lazy loading is disabled.
     */
    public types = {};

    /**
     * Gets a type declaration from the API by type name
     * @param {String} typeName 
     */
    public get(typeName: string): Promise<any> {
        const self = this;

        return new Promise((resolve, reject) => {

            if (self.types[typeName]) {
                resolve(self.types[typeName]);
            }
            else {
                axios.get(API_ENDPOINT + typeName)
                    .then((response: any) => {
                        self.types = response.data;
                        resolve(self.types[typeName]);
                    })
                    .catch((error: Error) => {
                        console.log(error);
                        reject(error);
                    });
            }
        });
    }
}
