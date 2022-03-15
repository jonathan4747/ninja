class Ninja {
    constructor(nombre,salud=0,velocidad=3,fuerza=3){
        this.nombre=nombre;
        this.salud=salud;
        this.velocidad=velocidad;
        this.fuerza=fuerza;
    }

    sayName(){
        console.log(this.nombre);
    }

    showStats(){
        console.log(this.nombre,this.fuerza,this.velocidad,this.salud);
    }
    drinkSake() {
        this.salud+=10;
        return this.salud;
    }

}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.showStats();
