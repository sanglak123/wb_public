import { rootAxios } from "@/data/config/axios_client";
import { AppDispatch } from "@/sp/redux/store";
import { toast } from "react-toastify";
import { NextRouter } from "next/router";

export const UserAuthApi = {
  Sign_In: async (
    username: string,
    password: string,
    dispatch: AppDispatch,
    LoginSuccess: any,
    router: NextRouter
  ) => {
    await rootAxios({
      method: "POST",
      url: "/auth/sign-in",
      data: {
        username: username,
        password: password,
      },
    })
      .then((res) => {
        console.log(res.data);
        dispatch(LoginSuccess(res.data));
        toast.success("Login success!");
        router.replace("/");
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.error);
        } else {
          toast.error(err);
        }
      });
  },
  Sign_Up: async (
    username: string,
    password: string,
    email: string,
    router: NextRouter
  ) => {
    await rootAxios({
      method: "POST",
      url: "/auth/sign-up",
      data: {
        username: username,
        password: password,
        email: email,
      },
    })
      .then((res) => {
        console.log(res.data);
        router.replace("/auth/sign-in");
      })
      .catch((err) => {
        if (err.response.error) {
          toast.error(err.response.data.error);
        } else {
          toast.error(err);
        }
      });
  },
  Sign_Out: async (dispatch: AppDispatch, Sign_Out_Success: any) => {
    await rootAxios({
      method: "GET",
      url: "/auth/sign-out",
    })
      .then((res) => {
        toast.success("Sign out success!");
        dispatch(Sign_Out_Success());
      })
      .catch((err) => {
        if (err.response.error) {
          toast.error(err.response.data.error);
        } else {
          toast.error(err);
        }
      });
  },
};
