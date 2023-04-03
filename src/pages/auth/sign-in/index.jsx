import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { UserAuthApi } from "../../../data/api/users/auth";
import { useRouter } from "next/router";
import { LoginSuccess } from "../../../sp/redux/slice/users";

import { useAppDispatch } from "../../../sp/hooks";
const Sign_In = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSignIn = async () => {
    await UserAuthApi.Sign_In(
      username,
      password,
      dispatch,
      LoginSuccess,
      router
    );
  };
  return (
    <div id="sign_in">
      <div className="sign_in_content">
        <div className="sign_in_title">
          <h1>LOGIN</h1>
        </div>
        <div className="sign_in_items">
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Text className="text-muted">
              Tên đăng nhập không được để trống.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button onClick={() => handleSignIn()} variant="primary">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sign_In;
