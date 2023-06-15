import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/userContext';

function Profile(){
    const {login} = useContext(UserContext);
       

    return (
        <div>
            {login? 'dados do login' : 'faça seu login'}
        </div>


    )

}


export default Profile;