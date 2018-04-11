import * as axios from 'axios';
// const API_ENDPOINT = 'https://api.gothub.io/types/type/';
const API_ENDPOINT = 'http://localhost:8080/types/type/';

export class GotTypeService {

    types = {};

    get(typeName) {
        const self = this;
        if (self.types[typeName]) {
            return Promise.resolve(self.types[typeName]);
        }
        else {
            return axios.get(API_ENDPOINT + typeName)
                .then(function (response) {
                    self.types = response.data;
                    return self.types[typeName];
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}
