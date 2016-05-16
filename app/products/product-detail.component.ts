import {Component} from "angular2/core";
import {Router,RouteParams, ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    templateUrl:'app/products/product-detail.component.html',
    directives: [ROUTER_DIRECTIVES],
})

export class ProductDetailComponent{
    constructor(private _router: Router, private _routeParams:RouteParams){
        let id= +this._routeParams.get('id');//+ converts string to number
        this.pageTitle+= `: ${id}`;
    }
    pageTitle: string='Product Detail';
    onBack():void{
        this._router.navigate(['Products']);
    }
}