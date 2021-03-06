import React, { useEffect, useState } from 'react';

const ManageServiceInfo = ({services}) => {
    const [service, setService] = useState([]);
   const handleDeleteService = id =>{
       fetch(`http://localhost:5000/services/${id}`,{
           method:'DELETE'
       })
       .then(res => res.json())
       .then(result =>{
           if(result){
               setService(service.filter((ser) => ser._id !== id))
           }
           alert('deletion successfully');
       })
   }
    return (
        <div>
            <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Sr.no</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Price</th>
                <th className="text-secondary" scope="col">Area</th>
                <th className="text-secondary" scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                  services.map((service, index) => 
                    <tr>
                        <td>{index +1}</td>
                        <td>{service.name}</td>
                        <td>{service.price}</td>
                        <td>{service.area}</td>
                        <td><button onClick= { () => {handleDeleteService(service._id)}} className="btn btn-danger">Delete</button> <button className="btn btn-primary">Update</button></td>
                    </tr>
                    )
                }
            </tbody>
        </table>
        </div>
    );
};

export default ManageServiceInfo;