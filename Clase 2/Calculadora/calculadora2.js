class Calculator{
    constructor(){
        this.screen = document.getElementById(Screen);
    }
    updateScreen(value){
        this.screen.value += value;
    }

    clearScreen(){
        this.screen.value = "";
    }

    solve(){
        const expression = this.evaluate.value;
        try{
            const result = mathjs.evaluate(expression);
            this.screen.value = result.toString();
        }catch (error){
            console.error("Estoy cansado jefe: " , error);
        }
    }
}

const calculator = new Calculator();

document.getElementById("zero").addEventListener("click", ()=>{
    calculator.updateScreen("0");
});

document.getElementById("decimal").addEventListener("click", ()=>{
    calculator.updateScreen(".");
});

document.getElementById("clear").addEventListener("click", ()=>{
    calculator.clearScreen("");
});

document.getElementById("solve").addEventListener("click", ()=>{
    calculator.solve();
});