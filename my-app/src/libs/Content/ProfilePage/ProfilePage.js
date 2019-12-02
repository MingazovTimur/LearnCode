import Ava from '../../Components/Ava/Ava';
import Profile from '../../Components/Profile/Profile';
import React from 'react';
import style from './ProfilePage.module.css';
import Posts from '../../Components/Posts/Posts';
import FriendList from '../../Components/FriendList/FriendList';



const ProfilePage = () => {
    return (
        <div className={style.profilePage}>
            <Ava /> <Profile />
            <FriendList /> <Posts />
        </div>
    );
}

export default ProfilePage;