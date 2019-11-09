import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let ApiService = class ApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getImages() {
        return this.httpClient.get(`/api`);
    }
};
ApiService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ApiService);
export { ApiService };
//# sourceMappingURL=api.service.js.map