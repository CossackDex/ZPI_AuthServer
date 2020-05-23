import React from "react";
import { Route, Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { aGetUsers, aBanUser, aDeleteUser, aSanction, aForcePass, aUnbanUser } from "../actions"

class UsersList extends React.Component {

    onBan = (user) => {
        const a = {auth: { username: this.props.username, password: this.props.password }};
        if (!this.props.is_banned) this.props.aBanUser(a, user);
        else {this.props.aUnbanUser(a, user)}
      };

      onDelete = (user) => {
        const a = {auth: { username: this.props.username, password: this.props.password }};
        this.props.aDeleteUser(a, user);
      };

      onEdit = (user) => {
        const a = {auth: { username: this.props.username, password: this.props.password }};
        //history.push(/dashboard/admin/user/edit)
      };

      onSanction = (user) => {
        const a = {auth: { username: this.props.username, password: this.props.password }};
        this.props.aSanction(a, user);
      }

      onForce = (user) => {
        const a = {auth: { username: this.props.username, password: this.props.password }};
        this.props.aForcePass(a, user)
      }


    componentDidMount() {
        const a = {auth: { username: this.props.username, password: this.props.password }};
        if (a) {
        this.props.aGetUsers(a);
        }
    }

    renderBan() {
        if (this.props.is_banned) {return "Unban"}
        else {return "Ban"}
    }

    renderSanction(user) {
        if (!user.role && this.props.superuser) {return <button className="ui button secondary" onClick={()=>{this.onSanction(user.username)}}>Sanction</button>}
        else {return null}
    }

    renderList() {
    while (!this.props.users) {
        return <div>LOADING</div>
    }
        const u = Object.values(this.props.users);
        return u.map(user => {
            return(
                <div className="item" key={user.id}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={()=>{this.onEdit(user.username)}}>Edit</button>
                        <button className="ui button secondary" onClick={()=>{this.onForce(user.username)}}>Force new pass</button>
                        <button className="ui button secondary" onClick={()=>{this.onBan(user.username)}}>{this.renderBan()}</button>
                        {this.renderSanction(user)}
                        <button className="ui button negative" onClick={()=>{this.onDelete(user.username)}}>Delete</button>
                    </div>
                    <div className="left floated content">
                    <i className="large middle aligned icon user"/>
                    <i className="content">{user.id}</i>
                    <i className="content">{user.username}</i>
                    <i className="content">{user.email}</i>
                    <i className="content">{user.created_date}</i>
                    </div>
                </div>
            )
        })
        
    }

    componentDidUpdate() {
        console.log("Update")
        return(
            <div className="left floated content">
                <h2>Users</h2>
                <div>
                    <i className="content">ID</i>
                    <i className="content">Username</i>
                    <i className="content">Email</i>
                    <i className="content">Create Date</i>
                    <i className="content">Is Banned</i>
                </div>
                <div className="ui celled list">{this.renderList()}</div>
            </div>
          );
    }


    render() {
        console.log("Update")
        return(
            <div className="left floated content">
                <h2>Users</h2>
                <div>
                    <i className="content">ID</i>
                    <i className="content">Username</i>
                    <i className="content">Email</i>
                    <i className="content">Create Date</i>
                    <i className="content">Is Banned</i>
                </div>
                <div className="ui celled list">{this.renderList()}</div>
            </div>
          );
    }
}

const mapStateToProps = state => {
    return {
        users: state.admin.users_list,
        username: state.sign.username,
        password: state.sign.password,
        superuser: state.sign.superuser
      };
}

export default connect(mapStateToProps, {aGetUsers, aBanUser, aDeleteUser, aSanction, aForcePass, aUnbanUser})(UsersList);
