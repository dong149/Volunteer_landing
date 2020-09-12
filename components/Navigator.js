import React from 'react';


const Navigator = () => {
    return (
        <div className="nav">
            <nav className="nav-main">
                <div className="nav-main-logo">
                    <img className="nav-main-logo-img" src="/images/main_logo.png" />
                </div>
                <div className="nav-menu">
                    <span className="nav-menu-item">공지사항</span>
                    <span className="nav-menu-item">단체소개</span>
                    <span className="nav-menu-item">Contact</span>
                </div>
            </nav>

        </div>

    );
}


export default Navigator;