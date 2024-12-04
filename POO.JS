class persona{
    trabajo(){
        return 'ocupacion de ese momento';
    }
    constructor(nombre, edad, salario){
        this.nombre = nombre;
        this.edad = edad;
        this.salario = salario;
    }

    saludar(){
        return `Hola, mi nombre es ${this.nombre} tengo ${this.edad} años y gano: Q${this.salario}`;
    }
}

const Persona1 = new persona('carlos', 25, 40000);
console.log(Persona1.saludar());

class empleado extends persona{
    constructor(nombre, edad, salario, puesto){
        super(nombre, edad, salario);
        this.puesto = puesto;
    }

    mostrarinfo(){
        return`${this.nombre}, ${this.edad}, ${this.salario}, ${this.puesto}`
    }
}

class animal{
    sonido(){
        return `sonido de un animal`;
    }
}

class perro extends animal{
    sonido(){
        return 'guau guau';
    }
}

class gato extends animal{
    sonido(){
        return 'miau miau';
    }
}
function hacersonido(animal){
    console.log(animal.sonido());
}

const perro1 = new perro();
const gato1 = new gato();
const Empleado1 = new empleado('carlos', 25, 40000, 'programador');
const Empleado2 = new empleado('andera', 20, 4000, 'recepcionista');
console.log(Empleado1.mostrarinfo())
console.log(Empleado2.mostrarinfo())
hacersonido(perro1);
hacersonido(gato1)