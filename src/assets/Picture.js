import React, { Component } from "react";


class App extends Component {
    render() {

        const item = [
            {
                id: 2,
                img: `https://data:image/png;base64,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`,
                class: `img-fluid` ,
                alt:  ``,
                title: ``,
                target: `_blank`,
                link: `https://www.discord.com`,


            }
        ];
        return (
            item.map(item => {
                return <a key={item.id} href={item.link} target={item.target}>
                    <img className={item.class} src={item.img} alt={item.alt} title={item.title} />
                </a>
 


    })
)  
 
    }
};
export default App;