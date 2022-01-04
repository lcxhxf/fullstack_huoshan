import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'



const App = () => {
    useEffect(() => {
        fetch('/api')
            .then(data => data.json())
            .then(data => {
                console.log(data)
            })
    }, [])

    return (
        <div>
        </div>
    )
}

ReactDOM.render(<App/>
    , document.getElementById('root'))