import React from 'react'
import Feature from './Feature'


const FeatureList = () => {
    return(
    <div className="FeatureList">
        <Feature img="/images/icon1.png" title="Declarative" description="React makes it painless to create interactive UIs" />
        <Feature img="/images/icon2.png" title="Components" description="Build encapsulated components that manage their state" />
        <Feature img="/images/icon3.png" title="Single-Way" description="A set of immutable values are passed to the component's" />
        <Feature img="/images/icon4.png" title="JSX" description="Statucally-typed, designed to run on modern browsers" />
    </div>
    )
}

export default FeatureList