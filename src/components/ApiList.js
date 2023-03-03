import React from "react"


function ApiList({ dictionary }) {
    return (
        <React.Fragment>
            <div>
                <div>
                    <br/>
                    <hr></hr>
                    <h1 style={{paddingTop:'30px'}}>Search Word === {dictionary.word}</h1>
                    <h1>Phonetic === {dictionary.phonetic }</h1>
                    <h1>Origin  ===     {dictionary.origin} </h1>
                    <div>Meanings
                        <br/>
                        <h3>pathOfSpeech  ===   {dictionary.meanings[0].pathOfSpeech}</h3>
                        <br/>
                        <h5>Definition   <p>{dictionary.meanings[0].definitions[0].definition}</p></h5>
                        
                        <h5>Example { dictionary.meanings[0].definitions[0].example }</h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ApiList