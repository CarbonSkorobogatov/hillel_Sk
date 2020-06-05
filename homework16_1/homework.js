class C1{
    constructor(p2) {
        this.p2 = p2;
    }
}

class C2 extends C1{
    constructor(p1, p2, p3){
        super(p2);
        this.p1 = p1;
        this.p3 = p3;
    }
}

class C3 extends C2{
    constructor(p1, p2, p3, p4){
        super(p1, p2, p3)
        this.p4 = p4;
    }
}

let c3 = new C3(1,2,3,4);

console.log(c3.p1);
console.log(c3.p2);
console.log(c3.p3);
console.log(c3.p4);
