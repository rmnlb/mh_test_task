import React, {Component} from 'react';
import UserCard from '../../components/UserCard'
import Spinner from '../../components/Spiner'
import NavBar from "../../components/NavBar";
import './style.scss'

class UserList extends Component{
    state = {
        page: +localStorage.getItem('currPage') || 1,
    };

    componentDidMount () {
        this.props.showPage(this.state.page);
    }

    showPage = (page) => {
        this.props.showPage(page);
        this.setState({
            page: page
        });
        localStorage.setItem('currPage', page);
    };

    render() {
        return(
            <div className='user-list'>
                {this.props.users && this.props.users.length
                ? this.props.users.map((user, i) => (
                    <UserCard
                        key={i}
                        name={user.name}
                        surname={user.surname}
                        desc={user.desc}
                        user={user}
                    />
                    ))
                : <Spinner/>
                }
                <NavBar
                    currentPage = {this.state.page}
                    usersAmount = {this.props.usersAmount}
                    showPage = {this.showPage}
                />
            </div>
        )
    }
}


export default UserList;