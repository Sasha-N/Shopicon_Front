import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ImagesComponent = class ImagesComponent {
    constructor(apiService) {
        this.apiService = apiService;
    }
    ngOnInit() {
        this.apiService.getImages().subscribe((data) => {
            this.images = data;
        });
    }
};
ImagesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-images',
        templateUrl: './images.component.html',
        styleUrls: ['./images.component.css']
    })
], ImagesComponent);
export { ImagesComponent };
//# sourceMappingURL=images.component.js.map