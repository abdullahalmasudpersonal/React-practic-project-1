import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ color:match ? 'rgb(64, 0, 212)':'rgb(46, 0, 107)', boxShadow:match ? 'rgba(107, 61, 167, 0.555) 0px 1px 0px':''}}
                to={to}
                {...props}
            >
                {children}
            </Link>
           {/*  {match && " (active)"} */}
        </div>
    );
}

export default CustomLink;