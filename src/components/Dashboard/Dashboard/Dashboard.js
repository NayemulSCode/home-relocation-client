import React from 'react';
import Services from '../Services/Order';
import Sidebar from '../Sidebar/Sidebar';


const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"100%"
}
const Dashboard = () => {
    return (
        <section>
        <div style={containerStyle} className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <Services />
            </div>
        </div>
    </section>
    );
};

export default Dashboard;