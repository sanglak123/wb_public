import { InterFadeDataUser, InterFadeUser } from "@/sp/interfade/User.Type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

const initialState: InterFadeDataUser = {
  User: {} as InterFadeUser,
  accessToken: "",
  Store: [],
};
const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    //Auth
    LoginSuccess: (state, action: PayloadAction<any>) => {
      state.User = action.payload.User;
      state.accessToken = action.payload.accessToken;
    },
    Sign_Out_Success: (state) => {
      state.User = {} as InterFadeUser;
      state.accessToken = "";
      state.Store = [];
    },
    RefreshTokenSuccess: (state, action) => {
      state.accessToken = action.payload;
    },
    //Store
    ChooseCardSuccess: (state, actions) => {
      const index = state.Store.findIndex(
        (item) => item.id === actions.payload.id
      );
      if (index >= 0) {
        state.Store[index].count += 1;
      } else {
        state.Store = [...state.Store, actions.payload];
      }
    },
  },
});

//Export Action
export const {
  LoginSuccess,
  Sign_Out_Success,
  RefreshTokenSuccess,
  ChooseCardSuccess,
} = UserSlice.actions;
//Export Selector
export const UserSelector = {
  User: (state: RootState) => state.UserSlice.User,
  accessToken: (state: RootState) => state.UserSlice.accessToken,
  Store: (state: RootState) => state.UserSlice.Store,
};

export default UserSlice;
