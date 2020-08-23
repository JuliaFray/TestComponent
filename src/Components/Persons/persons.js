import React from 'react';
import { connect } from 'react-redux';
import Person from '../Person/person';
import { deleteUser, getUsers, updateUser } from '../Redux/person-reducer';
import css from './../Person/person.module.css';

class Persons extends React.Component {

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <div>
                <div className={`${css.row} ${css.th}`}>
                    <div className={css.col}>
                        Имя
                    </div>
                    <div className={css.col}>
                        Фамилия
                    </div>
                    <div className={css.col}>
                        Удалить сотрудника
                    </div>
                    <div className={css.col}>
                        Редактировать сотрудника
                    </div>
                </div>

                {this.props.users.persons.map(p => <Person
                    person={p}
                    onDeleteUser={this.props.deleteUser}
                    onUpdateUser={this.props.updateUser} />)}


            </div>
        )
    }


}

let mapStateToProps = (state) => ({
    id: state.persons.id
})

export default connect(mapStateToProps, { getUsers, deleteUser, updateUser })(Persons);