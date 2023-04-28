class Food{
    name = ''
    getName() {
        return `super..${this.name}`
    }
}

class Apple extends Food{
    constructor(params) {
        super()
    }
    getName() {
        console.log('son..',super.getName())
        
    }
}
const app = new Apple()
app.getName()