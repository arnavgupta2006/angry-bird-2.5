class chain {
    constructor(bodyA, bodyB){
var options ={
bodyA : bodyA,
bodyB: bodyB, 
length: 10,
stiffness: 0.5
}
this.body = Constraint.create(options)
World.add(world, this.body)
    }
}