import Auto from "./lib/auto"

class Test {
   private lastName: string = '';

    constructor(lastName: string) {
        this.lastName = lastName;
    }

    start(name: string) {
        console.log(`Starting ${name} ${this.lastName}`)
    }
}

const auto= new Auto()

const x = new Test('Barzaghi')

x.start("pablo")
auto.run()
