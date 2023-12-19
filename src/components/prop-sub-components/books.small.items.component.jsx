import React from "react";

/**react-design-patterns-app - version 2.16 - BooksSmallListItems
 * - Features: 
 * 
 *     --> Building 'BooksSmallListItems' to display a small book 
 *         list
 * 
 * Note: This component is made in order to display small list of 
 * authors
 * 
 * this is also called 'source component' as the 'AuthorSmallListItems'
 * and 'AuthorLargeListItems' are treated in the same way
 */

const BooksSmallListItems = ({ book }) => {
    
    const { name, title } = book ;

    return(
        <>
            <p><span></span> <span className="author-name"><span>{name}</span></span></p>
            <p><span>Written by:</span> { title }</p>
        </>
    )
}

export default BooksSmallListItems;