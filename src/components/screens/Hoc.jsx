import React, { Component } from 'react';

const Hoc = (Component) =>{
    return(
        class extends React.Component{
            state = {
                auth : true
            }

            render(){
                return(
                    <div>
                        {this.state.auth ? <Component /> : alert("please Login")}
                    </div>
                )
            }
        }
    )
}

export default Hoc;