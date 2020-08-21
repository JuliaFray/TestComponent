import React from 'react';
import { connect } from 'react-redux';
import UpdatePersonComponent from '../Person/UpdatePersonContainer';
import { getUser } from './../Redux/person-reducer';
import css from './Common.module.css';
import { useState } from 'react';

const UpdatePerson = (props) => {

    let [editMode, setEditMode] = useState(false);

    const deactivate = () => {
        setEditMode(false)
    }

    const activate = () => {
        setEditMode(true)
        let answer = props.getUser(props.person.id);
        console.log(answer)
    }

    return (
        <div>
            {editMode ? <div><UpdatePersonComponent id={props.person.id} firstName={props.person.firstName} lastName={props.person.lastName} onBlur={deactivate} /></div> : <button className={`${css.btn} ${css.update}`} onClick={activate}  >U</button>}


            {/* <UpdatePersonComponent id={this.props.person.id} firstName={this.props.person.firstName} lastName={this.props.person.lastName} onBlur={deactivate} /> */}
        </div>
    )
};

let mapStateToProps = (state) => { }


export default connect(mapStateToProps, { getUser })(UpdatePerson);
