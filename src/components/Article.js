import React from 'react';

const Article = (props) => {
    const styles={
        marginTop: 30
    }
    return ( 
        <article style={styles}>
            <h3>{props.title}</h3>
            <span>{props.author}</span>
            <p>{props.text}</p>
        </article>
     );
}
 
export default Article;