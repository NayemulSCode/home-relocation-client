import React from 'react';

const OrderListDetails = ({orderList}) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Service Name</th>
                <th className="text-secondary" scope="col">Service Rate</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Address</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                  orderList.map((orderList, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{orderList.service}</td>
                        <td>{orderList.price}</td>
                        <td>{orderList.shipment.phone}</td>
                        <td>{orderList.shipment.address}</td>
                        <td>{orderList.email}</td>
                        <td>
                            <div class="dropdown">
                                <a class="btn btn-success dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </a>

                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default OrderListDetails;