import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import DislikeIcon from "../components/DislikeIcon";
import LikeIcon from "../components/LikeIcon";
import { student, base_URL } from "../constants/urls";

const LikeBtn = styled.button`
  font-size: 16px;
  border: 1px solid black;
  margin: 5px;
  display: inline-block;
  background-color: white;
  color: red;
  border-radius: 50%;
  width: 6em;
  height: 6em;
  &:hover {
    cursor: pointer;
  }
`;

const DislikeBtn = styled.button`
  font-size: 16px;
  border: 1px solid black;
  margin: 5px;
  display: inline-block;
  background-color: white;
  color: red;
  border-radius: 50%;
  width: 6em;
  height: 6em;
  &:hover {
    cursor: pointer;
  }
`;

const ResetBtn = styled.button`
  font-size: 15px;
  letter-spacing: 1px;
  border: 3px solid #ff8fa6;
  background-color: red;
  color: white;
  border-radius: 15px 3px 15px 3px;
  width: 9.5em;
  height: 2.5em;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: red;
    cursor: pointer;
    text-transform: uppercase;
    transition: 0.6s;
    transform: scale(1);
  }
`;

export default function Perfil() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    axios
      .get(`${base_URL}/${student}/person`)
      .then((res) => {
        setProfile(res.data.profile);
      })
      .catch((err) => {
        console.log(err.res);
      });
  };

  const chooseProfile = (profileId, choice) => {
    const body = {
      id: profileId,
      choice: choice,
    };
    axios
      .post(`${base_URL}/${student}/choose-person`, body)
      .then((res) => {
        getProfile();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const resetList = () => {
    axios
      .put(`${base_URL}/${student}/clear`)
      .then((res) => {
        alert("Lista resetada!");
        getProfile();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const profileCard = profile && (
    <figure>
      <img src={profile.photo} alt={["profile_alt"]} height="300px" />
      <p>
        {profile.name}, {profile.age}
      </p>
      <p>{profile.bio}</p>
    </figure>
  );

  return (
    <main>
      <h1>Perfis</h1>
      {profileCard}
      <LikeBtn
        onClick={() => {
          chooseProfile(profile.id, true);
        }}
      >
        <LikeIcon />
      </LikeBtn>
      <DislikeBtn
        onClick={() => {
          chooseProfile(profile.id, false);
        }}
      >
        <DislikeIcon />
      </DislikeBtn>
      <p>
        <ResetBtn onClick={() => resetList}>Resetar lista</ResetBtn>
      </p>
    </main>
  );
}
