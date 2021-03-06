import axios from 'axios';
import * as path from 'path-browser';
import { isNew } from '../helpers/objectHelpers';
import { ObjectData } from '../interfaces/objectData.interface';
// const API_ENDPOINT = 'https://api.gothub.io/types/object/';
const API_ENDPOINT = 'http://localhost:8080/types/object/';

/**
 * Data access service for got type declarations.
 */
export class GotObjectService {

    /**
     * Gets a type declaration from the API by type name
     * @param {String} objectId 
     */
    public get(objectId: string): Promise<any> {
        return new Promise((resolve, reject) => {

            axios.get(path.join(API_ENDPOINT, objectId))
                .then((response: any) => {
                    resolve(response.data);
                })
                .catch((error: Error) => {
                    console.log(error);
                    reject(error);
                });
        });
    }

    /**
     * Gets a type declaration from the API by type name
     * @param {String} objectId 
     */
    public save(object: ObjectData): Promise<any> {
        return new Promise((resolve, reject) => {
            if (object.type) {
                let saveObjectUrl: string = '';
                if (isNew(object)) {
                    saveObjectUrl = path.join(API_ENDPOINT, object.type);
                } else {
                    saveObjectUrl = path.join(API_ENDPOINT, object.type, object.id);
                }
                const data = { ...object };
                delete data.type;
                delete data.id;
                axios.post(saveObjectUrl, data)
                    .then((response: any) => {
                        resolve(response.data.id);
                    })
                    .catch((error: Error) => {
                        console.log(error);
                        reject(error);
                    });
            } else {
                reject(new Error('Object type reference is undefined.'));
            }
        });
    }
}
