import React from "react";
import * as css from "../../App.module.css";

const Profile = ({ array }) => {
  const { profile, profileFocus } = css;

  return (
    <>
      <h2>A LIttle Story</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
        cupiditate delectus inventore laboriosam laudantium officiis
        reprehenderit iure modi error, vel sapiente dicta repudiandae enim
        blanditiis commodi porro alias recusandae suscipit.
      </p>
      <ul>
        {array.map((el) => (
          <li
            key={el.id}
            className={el.type === "premium" ? profileFocus : profile}
          >
            <p className={[profile, profileFocus].join(" ")}>Title</p>
            <p>{el.value}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Profile;
