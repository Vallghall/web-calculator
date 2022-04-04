const $ = (id) => document.getElementById(id)
const mainSymbols = [
    'C', 'inv', '%', '/',
    7, 8, 9, 'x',
    4, 5, 6, '-',
    1, 2, 3, '+',
]

ReactDOM.render(
    <Calculator/>,
    $("root")
)

function Calculator() {
    let lastKey = mainSymbols.length
    return (
        <div className="container" key={99}>
            <Display/>
            {mainSymbols.map((sym, i) => (
                <Button sym={sym} key={i}/>
            ))}
            <DoubleButton sym={0} key={lastKey++}/>
            <Button sym={','} key={lastKey++}/>
            <Button sym={'='} key={lastKey++}/>
        </div>
    )
}

function Button({sym}) {
    return (
        <div className="button">
            {sym}
        </div>
    )
}

function DoubleButton({sym}) {
    return (
        <div className="double-button">
            {sym}
        </div>
    )
}

function Display() {
    return (
        <div id="display"> 0</div>
    )
}
