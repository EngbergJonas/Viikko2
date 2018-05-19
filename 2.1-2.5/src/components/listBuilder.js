import React from 'react'

const Title = ({kurssi}) => <h1>{kurssi.nimi}</h1>

const Osa = ({osat}) => {
    return(
        <li>{osat.nimi} {osat.tehtavia}</li>
    )
}

const Kurssi = ({kurssi}) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const kaikkiTehtavat = kurssi.osat.map(osa => osa.tehtavia)

    return(
        <div>
            <Title kurssi={kurssi} />
            <ul>
                {kurssi.osat.map(osa => <Osa key={osa.id} osat={osa}/>)}
                <li>Tehtäviä yhteensä {kaikkiTehtavat.reduce(reducer)}</li>
            </ul>
        </div>
    )
}

const ContentList = ({list}) => {
    return (
        <div>
            {list.map(list => <Kurssi key={list.id} kurssi={list}/>)}
        </div>
    )
}

export default ContentList