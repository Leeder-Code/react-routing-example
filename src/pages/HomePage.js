import React from 'react';
import Article from '../components/Article'
const articles = [
    {id: 1,
    title: "Tytuł1",
author: "Jan Nowak",
text: "lorem"},
{id: 3,
    title: "Tytuł2",
author: "Jan Nowak",
text: "lorem"},
{id: 2,
    title: "Tytuł3",
author: "Jan Nowak",
text: "lorem"},

]

const HomePage = () => {
    const artList = articles.map(i =>(
        <Article key={i.id} text={i.text} title={i.title} author={i.author} />
    ))
    return ( 
        <div className="home">
        {artList}
        </div>
     );
}
 
export default HomePage;