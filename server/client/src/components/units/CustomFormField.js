import React from 'react';

export default ({input, label, meta: {error, touched}}) => {
    return (
        <div>
            <label className="left">{label}</label>
            <p className="red-text text-accent-1 right">
                {touched && error}
            </p>
            <input {...input} />

        </div>
    )
}