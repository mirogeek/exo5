import React, {Component} from 'react';

class Profil extends Component{
    render(){
        let description = this.props.children ? (<p>{this.props.children}</p>) : (<p>No Description</p>)
        return(
            <div>
                <h1>{this.props.surname}</h1>
                <h2>{this.props.name}</h2>
                {description}
            </div>
        );
    };
};

export default Profil;