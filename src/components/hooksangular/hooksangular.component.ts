import { Component, OnInit, DoCheck } from "@angular/core";

@Component ({
    selector: "hooks-angular",
    templateUrl: "./hooksangular.component.html"
})

export class HooksAngular implements OnInit{
    public mensaje: string;
    constructor(){
        console.log("soy el constructor");
        this.mensaje = "Soy Hooks de Angular"
    }

    ngOnInit(): void {
        console.log("Ejecutando on init")
    }

    ngDoCheck(): void {
        console.log("ejecutando do check()")
    }

    //creamos un método personalizado
    cambiarMensaje() : void {
        this.mensaje = "Cambiando el mensaje en CLICK";
    }
}