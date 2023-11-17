import { useState, useEffect } from 'react'
import classes from './styles.module.css';
import { Button } from '../ui/Button/index.jsx';
import { Dropdown } from '../ui/Dropdown/index.jsx';

function loadNewJokes () {
    const jokesUrl = "https://official-joke-api.appspot.com/random_ten";
    return fetch(jokesUrl)
    .then((response) => response.json())
    .then((jokeData) => {
        let jokeList = []
        jokeData.forEach(element => {
            let item = {}
            item["id"] = element.id;
            item["text"] = element.setup.concat('. ', element.punchline);
            jokeList.push(item)
        })
        return jokeList    
    });

}

export function JokesForm() {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        loadNewJokes()
        .then((jokes) => {
            setJokes(jokes);
        })
    }, []);
      
        
    function onLoadNewJokesClick(event) {
        event.preventDefault();
        loadNewJokes()
        .then((jokes) => {
            setJokes(jokes);
        })
    }

    return (
        <div className={classes.form}>
            <div className={classes.title}>Select your favorive joke</div>
            <div className={classes.content}>
                <Dropdown label="Your selected joke is" items={jokes}></Dropdown>
            </div>
            <div className={classes.buttons}>
                <Button onClick={onLoadNewJokesClick}>Load new jokes</Button>
            </div>
        </div>
    )
}