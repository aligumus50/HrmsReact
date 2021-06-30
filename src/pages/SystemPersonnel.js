import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import SystemPersonnelService from '../services/systemPersonnelService';
import updateToProfile from '../store/actions/systemPersonnelActions';

export default function SystemPersonnel() {

    let { id } = useParams();

    const [systemPersonnel, setSystemPersonnel] = useState([])
    let systemPersonnelService = new SystemPersonnelService();
    useEffect(() => {
    systemPersonnelService
        .getById(id)
        .then((result) =>setSystemPersonnel(result.data.data));
    }, []);
  
    
    const dispatch = useDispatch()
    //const handleSystem = (systemPersonnel)=>{
      dispatch(updateToProfile(systemPersonnel))
    //}

    return (
        <div>
            <Button as={NavLink} to={`/systempersonnel/${id}/settings`} >Bilgileri Güncelle</Button>
        </div>
    )
}
