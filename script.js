class Calculator{
    updateDisplay(){
        document.getElementById('display').value = this.displayValue;
    }
    constructor(){
        this.displayValue = '';
    }
    appenNumber(number){
        this.displayValue += number;
        this.updateDisplay();
    }
    appendOperator(operator){
        if(this.displayValue !== ''){
            this.displayValue += ' '+ operator+' ';
            this.updateDisplay();
        }
    }
    clearDisplay(){
        this.displayValue = '';
        this.updateDisplay();

    }
    backspace(){
        this.displayValue =  this.displayValue.slice(0, -1);
        this.updateDisplay();

    }

    calculareResult(){
        try {
            const result = eval(this.displayValue );
            this.displayValue = result;
              this.updateDisplay();

        } catch (error) {
            this.displayValue = "error";
              this.updateDisplay();
        }
    }
}

const calculator = new Calculator();