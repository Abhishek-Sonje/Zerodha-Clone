import React from 'react'

function PageNotFound() {
    return ( 
        <div className="page-not-found text-center">
            <h1 >Page Not Found</h1>
            <h2>404</h2>
            <p>The page you are looking for does not exist.</p>
            <p>Please check the URL or return to the homepage.</p>
            <a href="/">Go to Homepage</a>
        </div>
     );
}

export default PageNotFound;