import { NavLink } from "react-router-dom";
import "../styles/main.css";
import "./styles/profile.css";
import {
  EditSvg,
  SettingsSvg,
  SearchSvg,
  SaveSvg,
  CommentSvg,
  LikeSvg,
  AvatarSvg,
} from "../components/Svg.js";
const Profile = () => {
  return (
    <div className="profile">
      <section className="nav-section">
        <nav className="profile-nav">
          <ul className="nav-list list">
            <li className="profile-nav-list-item">
              <NavLink
                to="/profile"
                className="profile-nav-link link profile-link-active"
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
      <section className="profile-section">
        <div className="profile-info">
          <p className="profile-info-title">Profile</p>
          <div className="avatar-container-container">
            <div className="avatar-container">
              <AvatarSvg />
              <button className="avatar-edit-btn">
                <EditSvg />
              </button>
            </div>
          </div>
          <div className="profile-info-content">
            <ul className="profile-info-list list">
              <li className="profile-info-list-item">
                <p className="profile-info-count">7</p>
                <p className="profile-text">posts</p>
              </li>
              <li className="profile-info-list-item">
                <p className="profile-info-count">163</p>
                <p className="profile-text">followers</p>
              </li>
              <li className="profile-info-list-item">
                <p className="profile-info-count">25</p>
                <p className="profile-text">following</p>
              </li>
            </ul>
            <button className="settings-btn">
              Settings
              <SettingsSvg />
            </button>
          </div>
        </div>
        <div className="profile-content">
          <div className="my-info">
            <ul className="profile-content-list list">
              <li className="profile-content-list-item">
                <button className="profile-list-btn">Search by tag</button>
              </li>
              <li className="profile-content-list-item">
                <button className="profile-list-btn">Create a post</button>
              </li>
            </ul>
            <div className="my-post">
              <div className="my-post-main-container">
                <div className="my-post-user-info">
                  <img src="" alt="" />
                  <div className="my-post-user-info-text">
                    <p className="my-post-user-info-name">User Name</p>
                    <p className="my-post-user-info-date">
                      30 Dec 2023 at 17:52
                    </p>
                  </div>
                </div>
                <button className="my-post-detail-btn"></button>
              </div>
              <div className="my-post-main-container">
                <div className="my-post-text-container">
                  <p className="my-post-tag">#Cats</p>
                  <p className="my-post-text">cats</p>
                </div>
                <ul className="my-post-btn-list list">
                  <li className="my-post-btn-list-item">
                    <button className="my-post-btn"></button>
                  </li>
                  <li className="my-post-btn-list-item">
                    <button className="my-post-btn"></button>
                  </li>
                  <li className="my-post-btn-list-item">
                    <button className="my-post-btn"></button>
                  </li>
                </ul>
              </div>
              <div className="my-post-main-container">
                <img src="" alt="" />
                <ul className="my-post-img-list list">
                  <li className="my-post-img-list-item">
                    <img src="" alt="" />
                  </li>
                  <li className="my-post-img-list-item">
                    <img src="" alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul className="my-content-list list">
            <li className="my-content-list-item">
              <div className="my-content-container">
                <div className="my-content-info">
                  <p className="profile-content-title">My photos</p>
                  <p className="profile-content-count">21</p>
                </div>
                <button className="my-content-plus-btn"></button>
              </div>
              <ul className="my-content-posts-list list">
                <li className="my-content-post">
                  <img className="my-content-post-img" src="" alt="" />
                </li>
                <li className="my-content-post">
                  <img className="my-content-post-img" src="" alt="" />
                </li>
                <li className="my-content-post">
                  <img className="my-content-post-img" src="" alt="" />
                </li>
              </ul>
            </li>
            <li className="my-content-list-item">
              <div className="my-content-container">
                <div className="my-content-info">
                  <p className="profile-content-title">My videos</p>
                  <p className="profile-content-count">21</p>
                </div>
                <button className="my-content-plus-btn"></button>
              </div>
              <ul className="my-content-posts-list list">
                <li className="my-content-post">
                  <img className="my-content-post-img" src="" alt="" />
                </li>
                <li className="my-content-post">
                  <img className="my-content-post-img" src="" alt="" />
                </li>
                <li className="my-content-post">
                  <img className="my-content-post-img" src="" alt="" />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Profile;
