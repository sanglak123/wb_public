import { UserAuthApi } from "@/data/api/users/auth";
import { useAppDispatch, useAppSelector } from "@/sp/hooks";
import { Sign_Out_Success, UserSelector } from "@/sp/redux/slice/users";
import { useRouter } from "next/router";
import React from "react";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const Hearder = () => {
  const User = useAppSelector(UserSelector.User);
  const accessToken = useAppSelector(UserSelector.accessToken);

  const dispatch = useAppDispatch();
  const handleSign_Out = async () => {
    await UserAuthApi.Sign_Out(dispatch, Sign_Out_Success);
  };

  const router = useRouter();
  return (
    <div id="hearder">
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg_blue_300"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                className={
                  router.asPath === "/doi-the" ? "li_active" : "hearder_link"
                }
                href="/doi-the"
              >
                Đổi thẻ
              </Nav.Link>
              <Nav.Link
                className={
                  router.asPath === "/mua-the" ? "li_active" : "hearder_link"
                }
                href="/mua-the"
              >
                Mua thẻ
              </Nav.Link>
              <NavDropdown
                className={
                  router.asPath === "/nap-tien" ||
                  (router.asPath === "/rut-tien" ? "li_active" : "hearder_link")
                }
                title="Nạp / Rút"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="/nap-tien">Nạp tiền</NavDropdown.Item>
                <NavDropdown.Item href="rut-tien">Rút tiền</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  className={
                    router.asPath === "/quy-so-du"
                      ? "li_active"
                      : "hearder_link"
                  }
                  href="/quy-so-du"
                >
                  Quỹ - Số dư
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                className={
                  router.asPath === "/connect-api"
                    ? "li_active"
                    : "hearder_link"
                }
                href="/connect-api"
              >
                Api
              </Nav.Link>
              <Nav.Link
                className={
                  router.asPath === "/lien-he" ? "li_active" : "hearder_link"
                }
                href="/lien-he"
              >
                Liên hệ
              </Nav.Link>
            </Nav>
            <Nav>
              {accessToken && User ? (
                <>
                  <Button onClick={() => handleSign_Out()}>Sign Out</Button>
                </>
              ) : (
                <>
                  <Nav.Link className="ms-5 btn_success" href="/auth/sign-in">
                    Sign In
                  </Nav.Link>
                  <Nav.Link className="btn_success_active" href="/auth/sign-up">
                    Sign Up
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Hearder;
