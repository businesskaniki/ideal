import React, { useState } from "react";
import "./dashnav.css";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import AddMedia from "./AddMedia";
import MyMedia from "./MyMedia";

const Container = styled.div`
  .active {
    border-right: 4px solid var(--white);
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

const Button = styled.button`
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }
  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background-color: var(--black);
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Logo = styled.div`
  width: 2rem;
  color: var(--white);
  svg {
    width: 100%;
    height: auto;
  }
`;

const SlickBar = styled.ul`
  color: var(--white);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--black);
  padding: 2rem 0;
  position: absolute;
  top: 6rem;
  left: 0;
  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

const Item = styled.a`
  text-decoration: none;
  color: var(--white);
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  display: flex;
  padding-left: 1rem;
  &:hover {
    border-right: 4px solid var(--white);
    svg {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
  svg {
    width: 1.9rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;

const Profile = styled.div`
  width: ${(props) => (props.clicked ? "14rem" : "3rem")};
  height: 3rem;
  padding: 0.5rem 1rem;
  /* border: 2px solid var(--white); */
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.clicked ? "9rem" : "0")};
  background-color: var(--black);
  color: var(--white);
  transition: all 0.3s ease;
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      border: 2px solid var(--grey);
      padding: 2px;
    }
  }
`;

const Details = styled.div`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    display: inline-block;
  }
  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: var(--grey);
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Logout = styled.button`
  border: none;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  svg {
    width: 100%;
    height: auto;
    filter: invert(15%) sepia(70%) saturate(6573%) hue-rotate(2deg)
      brightness(100%) contrast(126%);
    transition: all 0.3s ease;
    &:hover {
      border: none;
      padding: 0;
      opacity: 0.5;
    }
  }
`;

const DashNav = () => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const [activeComponent, setActiveComponent] = useState("ad");

  const [profileClick, setprofileClick] = React.useState(false);
  const handleProfileClick = () => setprofileClick(!profileClick);
  const handleNavClick = (component) => {
    setActiveComponent(component);
  };
  return (
    <div className="big-cont">
      <Container>
        <Button clicked={click} onClick={() => handleClick()}>
          Click
        </Button>
        <SidebarContainer>
          <Logo>
            <h2>IDM</h2>
          </Logo>
          <SlickBar clicked={click}>
            <Item
              onClick={() => {
                handleNavClick("ad");
                setClick(false);
              }}
              exact
              activeClassName="active"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                viewBox="0 0 50 50"
              >
                <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M37,26H26v11h-2V26H13v-2h11V13h2v11h11V26z"></path>
              </svg>
              <Text clicked={click}>
                Add media
              </Text>
            </Item>
            <Item
              onClick={() => {
                handleNavClick("am");
                setClick(false);
              }}
              activeClassName="active"
              to="/"
            >
              <svg
                width="249px"
                height="249px"
                viewBox="0 0 1024 1024"
                class="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M924.8 331l-57.7-15.5-17.7-4.7-64.8-17.4v-67.2c0-31.7-16.5-46.8-46.8-46.8h-608c-30.2 0-46.8 15.1-46.8 46.8v483.3c0 31.7 16.5 46.8 46.8 46.8h153.5l492 131.8c29.2 7.8 49-2.5 57.3-33.1l16.1-60.2 108.9-406.6c8.4-30.6-3.7-49.4-32.8-57.2zM161.1 709.5c-25.2 0-31.2-15.2-31.2-31.2V257.4c0-25.2 15.2-31.2 31.2-31.2h545.6c16 0 31.2 6 31.2 31.2v420.9c0 16-6 31.2-31.2 31.2H161.1z m634.5 103.4c-4.1 15.4-13.9 28.5-38.2 22l25.7 6.9-319-85.5h273.8c30.2 0 46.8-15.1 46.8-46.8V341.9l97.8 26.2c15.4 4.1 28.5 13.9 22 38.2l8.1-30.1-17.7-4.8 17.7 4.8-117 436.7zM270.2 304.2c-34.4 0-62.4 27.9-62.4 62.4 0 34.4 27.9 62.4 62.4 62.4 34.4 0 62.4-27.9 62.4-62.4-0.1-34.5-28-62.4-62.4-62.4z"
                    fill="#000000"
                  ></path>
                  <path
                    d="M151.2 737.5c-5.5 0-11-1.8-15.5-5.5-10.5-8.6-12-24-3.5-34.5l147.1-179.8c8.2-10 22.7-11.9 33.2-4.4l94.2 67.3 133-192.1c4.7-6.8 12.2-10.8 20.9-10.6 8.3 0.2 15.9 4.6 20.2 11.7l179.8 294.3c7.1 11.6 3.4 26.6-8.1 33.7-11.6 7-26.7 3.4-33.7-8.1L558.6 447.2 432.9 628.8c-3.7 5.4-9.5 9.1-16 10.2-6.4 1.1-13.1-0.4-18.5-4.2l-95.7-68.4-132.5 162.1c-4.9 5.9-11.9 9-19 9z"
                    fill="#000000"
                  ></path>
                </g>
              </svg>
              <Text clicked={click}>My media</Text>
            </Item>
            <Item
              onClick={() => setClick(false)}
              activeClassName="active"
              to="/calender"
            >
              <svg
                width="256px"
                height="256px"
                viewBox="-6.24 -6.24 36.48 36.48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)"
                stroke="#000000"
                stroke-width="0.00024000000000000003"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#CCCCCC"
                  stroke-width="0.096"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.5315 11.5857L20.75 10.9605V21.25H22C22.4142 21.25 22.75 21.5858 22.75 22C22.75 22.4143 22.4142 22.75 22 22.75H2.00003C1.58581 22.75 1.25003 22.4143 1.25003 22C1.25003 21.5858 1.58581 21.25 2.00003 21.25H3.25003V10.9605L2.46855 11.5857C2.1451 11.8445 1.67313 11.792 1.41438 11.4686C1.15562 11.1451 1.20806 10.6731 1.53151 10.4144L9.65742 3.91366C11.027 2.818 12.9731 2.818 14.3426 3.91366L22.4685 10.4144C22.792 10.6731 22.8444 11.1451 22.5857 11.4686C22.3269 11.792 21.855 11.8445 21.5315 11.5857ZM12 6.75004C10.4812 6.75004 9.25003 7.98126 9.25003 9.50004C9.25003 11.0188 10.4812 12.25 12 12.25C13.5188 12.25 14.75 11.0188 14.75 9.50004C14.75 7.98126 13.5188 6.75004 12 6.75004ZM13.7459 13.3116C13.2871 13.25 12.7143 13.25 12.0494 13.25H11.9507C11.2858 13.25 10.7129 13.25 10.2542 13.3116C9.76255 13.3777 9.29128 13.5268 8.90904 13.9091C8.52679 14.2913 8.37773 14.7626 8.31163 15.2542C8.24996 15.7129 8.24999 16.2858 8.25003 16.9507L8.25003 21.25H9.75003H14.25H15.75L15.75 16.9507L15.75 16.8271C15.7498 16.2146 15.7462 15.6843 15.6884 15.2542C15.6223 14.7626 15.4733 14.2913 15.091 13.9091C14.7088 13.5268 14.2375 13.3777 13.7459 13.3116Z"
                    fill="#000000"
                  ></path>{" "}
                  <g opacity="0.5">
                    {" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.75 9.5C10.75 8.80964 11.3096 8.25 12 8.25C12.6904 8.25 13.25 8.80964 13.25 9.5C13.25 10.1904 12.6904 10.75 12 10.75C11.3096 10.75 10.75 10.1904 10.75 9.5Z"
                      fill="#000000"
                    ></path>{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.75 9.5C10.75 8.80964 11.3096 8.25 12 8.25C12.6904 8.25 13.25 8.80964 13.25 9.5C13.25 10.1904 12.6904 10.75 12 10.75C11.3096 10.75 10.75 10.1904 10.75 9.5Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>{" "}
                  <path
                    opacity="0.5"
                    d="M12.0494 13.25C12.7142 13.25 13.2871 13.2499 13.7458 13.3116C14.2375 13.3777 14.7087 13.5268 15.091 13.909C15.4732 14.2913 15.6223 14.7625 15.6884 15.2542C15.7462 15.6842 15.7498 16.2146 15.75 16.827L15.75 21.25H8.25L8.25 16.9506C8.24997 16.2858 8.24993 15.7129 8.31161 15.2542C8.37771 14.7625 8.52677 14.2913 8.90901 13.909C9.29126 13.5268 9.76252 13.3777 10.2542 13.3116C10.7129 13.2499 11.2858 13.25 11.9506 13.25H12.0494Z"
                    fill="#000000"
                  ></path>{" "}
                  <path
                    opacity="0.5"
                    d="M16 3H18.5C18.7761 3 19 3.22386 19 3.5L19 7.63955L15.5 4.83955V3.5C15.5 3.22386 15.7239 3 16 3Z"
                    fill="#000000"
                  ></path>{" "}
                </g>
              </svg>
              <Text clicked={click}>
                <NavLink to="/">Home</NavLink>
              </Text>
            </Item>
            <Item
              onClick={() => setClick(false)}
              activeClassName="active"
              to="/documents"
            >
              <svg viewBox="0 0 448 512" width="100" title="paperclip">
                <path d="M43.246 466.142c-58.43-60.289-57.341-157.511 1.386-217.581L254.392 34c44.316-45.332 116.351-45.336 160.671 0 43.89 44.894 43.943 117.329 0 162.276L232.214 383.128c-29.855 30.537-78.633 30.111-107.982-.998-28.275-29.97-27.368-77.473 1.452-106.953l143.743-146.835c6.182-6.314 16.312-6.422 22.626-.241l22.861 22.379c6.315 6.182 6.422 16.312.241 22.626L171.427 319.927c-4.932 5.045-5.236 13.428-.648 18.292 4.372 4.634 11.245 4.711 15.688.165l182.849-186.851c19.613-20.062 19.613-52.725-.011-72.798-19.189-19.627-49.957-19.637-69.154 0L90.39 293.295c-34.763 35.56-35.299 93.12-1.191 128.313 34.01 35.093 88.985 35.137 123.058.286l172.06-175.999c6.177-6.319 16.307-6.433 22.626-.256l22.877 22.364c6.319 6.177 6.434 16.307.256 22.626l-172.06 175.998c-59.576 60.938-155.943 60.216-214.77-.485z" />
              </svg>
              <Text clicked={click}>Documents</Text>
            </Item>
            <Item
              onClick={() => setClick(false)}
              activeClassName="active"
              to="/projects"
            >
              <svg viewBox="0 0 576 512" width="100" title="star">
                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
              </svg>
              <Text clicked={click}>Projects</Text>
            </Item>
          </SlickBar>

          <Profile clicked={profileClick}>
            <img
              onClick={() => handleProfileClick()}
              src="https://picsum.photos/200"
              alt="Profile"
            />
            <Details clicked={profileClick}>
              <Name>
                <h4>Jhon&nbsp;Doe</h4>
                <a href="/#">view&nbsp;profile</a>
              </Name>

              <Logout>
                <svg viewBox="0 0 512 512" width="100" title="power-off">
                  <path d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z" />
                </svg>
              </Logout>
            </Details>
          </Profile>
        </SidebarContainer>
      </Container>
      <div className="other-dash-components">
        {activeComponent === "ad" && <AddMedia />}
        {activeComponent === "am" && <MyMedia />}
      </div>
    </div>
  );
};

export default DashNav;
