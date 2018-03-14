var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewChild, ElementRef, Renderer } from '@angular/core';
/**
 * Generated class for the AcordeonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AcordeonComponent = /** @class */ (function () {
    function AcordeonComponent(renderer) {
        this.renderer = renderer;
    }
    AcordeonComponent.prototype.ngAfterViewInit = function () {
        this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', this.expandHeight);
    };
    __decorate([
        ViewChild('expandWrapper', { read: ElementRef }),
        __metadata("design:type", Object)
    ], AcordeonComponent.prototype, "expandWrapper", void 0);
    __decorate([
        Input('expanded'),
        __metadata("design:type", Object)
    ], AcordeonComponent.prototype, "expanded", void 0);
    __decorate([
        Input('expandHeight'),
        __metadata("design:type", Object)
    ], AcordeonComponent.prototype, "expandHeight", void 0);
    AcordeonComponent = __decorate([
        Component({
            selector: 'acordeon',
            templateUrl: 'acordeon.html'
        }),
        __metadata("design:paramtypes", [Renderer])
    ], AcordeonComponent);
    return AcordeonComponent;
}());
export { AcordeonComponent };
//# sourceMappingURL=acordeon.js.map