import {Component} from '@angular/core';

@Component ({
    selector: "app-deportes",
    templateUrl: "./deportes.component.html",
    styleUrls: ["./deportes.component.css"]
})

export class DeportesComponent {
    public sports: Array<string>;
    public numeros: Array<number>;

    constructor(){
        this.numeros = [4, 7, 8, 90, 33, 45, 61, 24, 56];
        this.sports = ["Tenis", "Fútbol", "Baloncesto", "Lol", "Curling", "Waterpolo"]
    }
}