import React, { useState } from 'react';
import { HelloComponent } from './hello';
import { NameEditComponent } from './nameEdit';



export const APP = () => {
  const [name, setName] = useState('defaultUserName');
  const setUsernameState = (newName:string) => {
    setName(newName) 
  }
  return (
    <>
      <HelloComponent userName={name} />
      <NameEditComponent initialUserName={name}
      onNameUpdated={setUsernameState}/>
    </>
  )
}
export default APP;