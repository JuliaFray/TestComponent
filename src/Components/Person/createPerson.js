import React from 'react';
import { connect } from 'react-redux';
import { addNewUser } from '../Redux/person-reducer';
import CreatePersonForm from './createPersonForm';

class CreatePersonComponent extends React.Component {

    render() {
        const onSubmit = (formData) => {
            console.log(formData);
            this.props.addNewUser(formData)
        }

        return (
            <div>
                <CreatePersonForm onSubmit={onSubmit} />
            </div>
        )
    }
};

let mapStateToProps = (state) => ({
    firstName: state.persons.firstName,
    lastName: state.persons.lastName
});

export default connect(mapStateToProps, { addNewUser })(CreatePersonComponent);