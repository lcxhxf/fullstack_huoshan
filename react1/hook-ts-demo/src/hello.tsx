import React from "react"

//接口 父组件App 子组件Hello
interface Props {
    userName: string
}

export const HelloComponent:React.FC<Props> = ({ userName }) => {
    return (
        <>
            <div>{userName}</div>
        </>
    )
}
