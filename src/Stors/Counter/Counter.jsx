import { makeAutoObservable } from "mobx";

class Counter {
    count = 1;
    timer = 68;

    constructor() {
        makeAutoObservable(this)
    }
    ingriment() {
      this.count = this.count + 1;
      console.log('ingriment', this.count)
    }

    decriment() {
      this.count = this.count - 1;
      console.log('dicriment', this.count)
    }

    get total(){
      return (
        'count + timer =' + Number(this.timer) + Number(this.count)
      )
    }
}

export default new Counter();