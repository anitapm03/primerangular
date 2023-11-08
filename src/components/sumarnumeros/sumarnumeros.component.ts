import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector: "app-sumar-numeros",
    templateUrl: "./sumarnumeros.component.html"
})

export class SumarNumeros {
    //declaramos variables que hacen referencia al id de 
    //angular de los controles html
    @ViewChild("cajanumero1") cajaNumero1Ref!: ElementRef;
    @ViewChild("cajanumero2") cajaNumero2Ref!: ElementRef;
    public suma!: number;

    //en angular todas las propiedades deben ser instanciadas
    //con un valor. los objetos de referencia deben indicar que son
    //un nuevo objeto y un valor por defecto para dicho objeto
    
    constructor(){
        // this.suma = 0;
        // this.cajaNumero1Ref = new ElementRef(0);
        // this.cajaNumero2Ref = new ElementRef(0);
    }

    sumarNumeros(): void{
        var num1 = parseInt(this.cajaNumero1Ref.nativeElement.value);
        var num2 = parseInt(this.cajaNumero2Ref.nativeElement.value);

        this.suma = num1 + num2;
    }
}