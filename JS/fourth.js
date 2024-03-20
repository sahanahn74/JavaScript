console.log("conntected external js file");
/* oops*/
class Box
{
   
    display(){
        console.log(this);
    }

}
let obj = new Box();
obj.display();

let father = {
    name:'jhon'
};
let son = Object.create(father);
console.log(father.isPrototypeOf(son));
/* inheritance*/

class Fruits
{
    constructor()
    {
        
        console.log("parent cons");

    }
}
class Apple extends Fruits
{
    constructor()
    {
        super();
        console.log("child cons")
    }
}

let object = new Apple();

/* polymorphism*/

class Fruit
{
    constructor(color)
    {
        this.color=color;

    }
    print()
    {
        console.log(this);

    }
    print(size)
    {
        console.log(size);

    }
}
let obj1 = new Fruit("red");
obj1.print(10);

/* exception handling*/

function a(age)
{
    if(age<16)
    {
        try{
            throw new Error("you are under age");

        }
        catch(error)
        {
            console.log(error);

        }
        finally{
            console.log("program ended");

        }
    }
    else{
        console.log("you can vote");

    }
}
a(13);


