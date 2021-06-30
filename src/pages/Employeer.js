import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import EmployeerService from "../services/employeerService"
import updateToProfile from '../store/actions/employeerActions';
export default function Employeer() {

    let { id } = useParams();
    const [employeer, setEmployeer] = useState([])
    let employeerService = new EmployeerService();
    
    useEffect(() => {
        employeerService
        .getById(id)
        .then((result) =>setEmployeer(result.data.data));
    }, []);
  
    
    const dispatch = useDispatch()
    const handleSystem = (employeer)=>{
      dispatch(updateToProfile(employeer))
    }

    return (
        <div>
            <Button as={NavLink} to={`/employeer/${id}/settings`} onClick={()=>handleSystem(employeer)} >Bilgileri Güncelle</Button>
        </div>
    )
}
