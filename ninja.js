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

class Sensei extends Ninja{
    constructor(nombre,salud=200,velocidad=10,fuerza=10,sabiduria=10){
        super(nombre,salud,velocidad,fuerza);
        this.sabiduria=sabiduria;
    }

    speakWisdom(){
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
        )
    }

    showStats(){
        super.drinkSake();
        console.log("Nombre: "+ this.nombre+" Salud: " + this.salud+" velocidad: "+this.velocidad +
                    " fuerza: "+this.fuerza+ " sabiduria: "+this.sabiduria )
    }

}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();

