import React from 'react';

export default ({input, label, meta: {error, touched}}) => {
    return (
        <div>
            <label className="left">{label}</label>
            <input {...input} />
            <span className="red-text text-accent-1 helper-text right">
                {touched && error}
            </span>

        </div>
    )
}