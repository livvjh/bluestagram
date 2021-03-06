import React from "react";
import {Avatar, Button} from "antd";

export default function Suggestion({ suggestion_user, onFollowUser }) {
    const {username, author_name, avatar_url, is_follow} = suggestion_user;
    return (
        <div className="suggetion">
            <div className="avatar">
                <Avatar
                    size="small"
                    icon={
                        <img src={avatar_url} alt={author_name}/>
                    }/>
                {/*<UserOutlined/>*/}
            </div>
            <div className="username">
                {username}
            </div>
            <div className="follow-btn">
                {is_follow ? "팔로잉 중" : <Button size="small" onClick={() => onFollowUser(username)}>Follow</Button>}
            </div>
        </div>
    )
}