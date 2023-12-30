import React from 'react';
import { Navigate } from 'react-router-dom';
const CatopiaRedirect = () => {
    return <Navigate to="/catopia/auth/me" />;
}
 
export default CatopiaRedirect;