import React, { useState } from "react"

//接口 父组件App 子组件Hello
interface Props {
    initialUserName: string,
    onNameUpdated: (newName: string) => void ;
}

export const NameEditComponent: React.FC<Props> = ({ initialUserName, onNameUpdated }) => {
    const [editingName, setEditingName] = useState(initialUserName) //data 组件的自由数据
    const onChange = (event: any) => {
        setEditingName(event.target.value)
    }
    const OnNameSubmit = () => {
        onNameUpdated(editingName)
    }
    return (
        <>
            {/* <label>Update name</label> */}
            <input type="text" value={editingName} onChange={onChange} />
            <button onClick={OnNameSubmit}>Change</button>
        </>
    )
}
