import React from 'react';


class Car extends React.Component {
    render() {
console.log(this.props)
        return <section>
            <img src={this.props.img} />
            <h1> Lamburgini 2021</h1>
            <h2>2,000,000</h2>
        </section>
    }
}

export default Car;