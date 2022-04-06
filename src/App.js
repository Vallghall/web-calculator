import React, {useState} from "react";
import MyButton from "./components/MyButton/MyButton";
import DoubleButton from "./components/DoubleButton/DoubleButton";
import Display from "./components/Display/Display";
import OperationButton from "./components/OperationButton/OperationButton";

const mainSymbols = [
  'C', '←', '%', '/',
  7, 8, 9, 'x',
  4, 5, 6, '-',
  1, 2, 3, '+',
]

export default function App() {
    let lastKey = mainSymbols.length

    const [display, setDisplay] = useState(0)
    const [equation, setEquation] = useState({fst: 0, snd: 0, op: undefined})

    const updateEquation = (val) => {
        const parsed = parseInt(val)
        if (parsed) {
            if (equation.op) {
                const newEquation = {...equation, snd: equation.snd * 10 + parsed}
                setEquation(newEquation)
                setDisplay(newEquation.snd)
            }
            else {
                const newEquation = {...equation, fst: equation.fst * 10 + parsed}
                setEquation(newEquation)
                setDisplay(newEquation.fst)
            }
        }
        else switch (val) {
            case 'C':
                setEquation({fst: 0, snd: 0, op: undefined})
                setDisplay(0)
                break
            case '←':
                /*
                if (equation.op) {
                    const newEquation = {...equation, snd: Math.floor(equation.snd/10)}
                    setEquation(newEquation)
                    setDisplay(newEquation.snd)
                }
                else {
                    const newEquation = {...equation, fst: Math.floor(equation.fst/10)}
                    setEquation(newEquation)
                    setDisplay(newEquation.fst)
                }
                 */
                alert("NOT YET IMPLEMENTED")
                break
            case '%':
                alert("NOT YET IMPLEMENTED")
                break
            case '=':
                const op = equation.op
                if (!op)
                    break

                const newEquation = (op === '-')
                    ? { fst: equation.fst - equation.snd, snd: 0, op}
                    : ((op === '+')
                        ? { fst: equation.fst + equation.snd, snd: 0, op}
                        : ((op === 'x')
                            ? { fst: equation.fst * equation.snd, snd: 0, op}
                            : { fst: equation.fst / equation.snd, snd: 0, op}))
                setEquation(newEquation)
                setDisplay(newEquation.fst)
                break
            case ",":
                alert("NOT YET IMPLEMENTED")
                break
            default:
                setEquation({...equation, op: val})
        }
    }


    return (
        <div className="container" key={99}>
            <Display value={display}/>
            {mainSymbols.map((sym, i) => (
                (['+', '-', '/', 'x'].includes(sym))
                    ?   <OperationButton handle={updateEquation} sym={sym} key={i}/>
                    :   <MyButton handle={updateEquation} sym={sym} key={i}/>
            ))}
            <DoubleButton sym={0} handle={updateEquation} key={lastKey++}/>
            <MyButton handle={updateEquation} sym={','} key={lastKey++}/>
            <MyButton handle={updateEquation} sym={'='} key={lastKey++}/>
        </div>
      )
}