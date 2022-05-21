import logo from "../assets/broken-heart.png";
import styled from "styled-components";

const Logo = styled.img`
  width: 50px;
  height: 45px;
`;

export default function DislikeIcon() {
  return (
    <>
      <Logo src={logo} alt="broken-heart-logo" />
    </>
  );
}
