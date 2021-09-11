import React, {useState, useEffect} from 'react';
// react 数据的单项绑定
// export const MyComponent = props => {
//     const [myName, setMyName] = useState('')
//     const setUsernameState = (event) => {
//         setMyName(event.target.value)
//       }
//     useEffect(() => {
//         setTimeout(() => {
//             setMyName('🐖')
//         }, 2000)
//     })
//     return (
//         <>
//             <h4>{myName}</h4>
//             <input value={myName} onChange={setUsernameState}/>
//         </>
//     )
// }
export const MyComponent = props => {
    const [userInfo, setUserInfo] = useState({
        name:'John',
        lastname:'Doe'
    })
    const setUsernameState = (event) => {
        // console.log(event);
        setUserInfo({...userInfo,name:event.target.value})
      }
    return (
        <>
            <h4>{userInfo.name} {userInfo.lastname}</h4>
            <input value={userInfo.name} onChange={setUsernameState}/>
            <input value={userInfo.lastname} onChange={setUsernameState}/>
        </>
    )
}
export default MyComponent

export const SecondComponent = props => {
    return (
        <h2>My Second Component!</h2>
    )
}