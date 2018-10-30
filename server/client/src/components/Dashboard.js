import React from 'react';
import {Link} from 'react-router-dom';
import uri from '../assets/uri/URI';

const Dashboard = () => {
    return (
        <div>
            <h3>The Dashboard</h3>
            <div className="fixed-action-button right">
                <Link to={uri.unitsNew} className="btn-floating btn-large red" title="Add mashine">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    );

};

export default Dashboard;