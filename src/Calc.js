import {useState} from 'react'

const Calculator = () =>{
const [calc,setCalc] = useState("");
const [result, setResult] = useState("");

const ops = ['/', '*', '+', '-', '.'];

    const updateCalc = value =>{
        if(ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1))){
            return;
        }

        setCalc(calc + value);

        if(!ops.includes(value)){
            setResult(eval(calc+ value).toString());
        }
    }

    const calculate = () =>{
        setCalc(eval(calc.toString()))
    }

    const del = () =>{
        const value = ""
        const boop = ""
        setCalc(value)
        setResult(boop)
    }

    const deleteLast = () =>{
        if (calc == ""){
            return;
        }

        const value = calc.slice(0,-1);

        setCalc(value);
    }

    return(
        <div id={"centras"}>
            <div id={"vaizdas"}>
                {result ? <span>({result})</span> : ''}
                {calc || "0"}
            </div>
            <div id={"batonai"}>
                <table>

                <tr>
                <button onClick={() => updateCalc('*')} className={"btn btn-primary m-1"} id={""}>*</button>
                <button onClick={() => updateCalc('/')} className={"btn btn-primary m-1"} id={""}>/</button>
                <button onClick={() => updateCalc('+')} className={"btn btn-primary m-1"} id={""}>+</button>
                <button onClick={() => updateCalc('-')} className={"btn btn-primary m-1"} id={""}>-</button>
                <button onClick={del} className={"btn btn-primary m-1"} id={""}>C</button>
                <button onClick={deleteLast} className={"btn btn-primary m-1"} id={""}>Del</button>
                </tr>

                <tr>
                <button onClick={() => updateCalc('7')} className={"btn btn-primary m-1"} id={""}>7</button>
                <button onClick={() => updateCalc('8')} className={"btn btn-primary m-1"} id={""}>8</button>
                <button onClick={() => updateCalc('9')} className={"btn btn-primary m-1"} id={""}>9</button>
                </tr>

                <tr>
                <button onClick={() => updateCalc('4')} className={"btn btn-primary m-1"} id={""}>4</button>
                <button onClick={() => updateCalc('5')} className={"btn btn-primary m-1"} id={""}>5</button>
                <button onClick={() => updateCalc('6')} className={"btn btn-primary m-1"} id={""}>6</button>
                </tr>

                <tr>
                <button onClick={() => updateCalc('1')} className={"btn btn-primary m-1"} id={""}>1</button>
                <button onClick={() => updateCalc('2')} className={"btn btn-primary m-1"} id={""}>2</button>
                <button onClick={() => updateCalc('3')} className={"btn btn-primary m-1"} id={""}>3</button>
                </tr>

                <tr>
                    <button onClick={() => updateCalc('0')} className={"btn btn-primary m-1"}>0</button>
                    <button onClick={() => updateCalc('.')} className={"btn btn-primary m-1"}>.</button>
                    <button onClick={calculate} className={"btn btn-primary m-1"}>SUM</button>
                </tr>

                </table>
            </div>
        </div>
    )
}

export default Calculator