import {Component} from '@angular/core';

@Component ({
    //debemos indicar el nombr del component mediante
    //selector. se usan guiones para separar cada palabra
    //del nombre del component
    selector: 'primer-component',
    //como no queremos un fichero html de template, se 
    //utiliza la palabra tmplate para indicar todo el dibujo aqui
    templateUrl: "./primer.component.html",
    styleUrls: [ "./primer.component.css"]
})

//todo component debe ser declarado como clase, dicho nombre
//de clase sera utilizado posteriormente en app.module.ts
export class PrimerComponent {
    //las propiedades de un component se pueden en 
    //su dibujo dichas propiedades son tipadas
    public titulo: string;
    public descripcion: string;
    public anyo: number;
    //el constructor de la clase es el primer metodo por el que
    //entra cualquier component. aqui podemos inicializar los 
    //valores de las propiedades
    constructor(){
        //para acceder a las prompiedades de una clase
        //se utiliza la palabra this
        this.titulo = "Miércoles de puente";
        this.descripcion = "Aprendiendo Angular a tope!";
        this.anyo = 2023;
    }
}