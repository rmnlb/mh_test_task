import React, {Component} from 'react'
import UserList from '../../containers/UserList'
import {loadData, showPage} from "../../store/actions/userlist";
import Spinner from '../../components/Spiner'
import {connect} from 'react-redux';
import fetchUsers from '../../api/fetchUsers'

class Users extends Component {
    componentDidMount() {
        fetchUsers('api/users.json')
            .then(res => {
                this.props.saveUsersInfo(res);
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="App">
                {
                    this.props.users && this.props.users.length
                    ? <UserList
                        showPage = {this.props.showPage}
                        users = {this.props.inView}
                        usersAmount = {this.props.users.length}
                    />
                    : <Spinner/>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.userlist.users,
        inView: state.userlist.inView
    }
}

function mapActionToProps(dispatch) {
    return {
        saveUsersInfo: (data) => dispatch(loadData(data)),
        showPage: (page) => dispatch(showPage(page))
    }
}

export default connect(
    mapStateToProps,
    mapActionToProps
)(Users);