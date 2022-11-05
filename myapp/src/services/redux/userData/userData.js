import { createSlice } from "@reduxjs/toolkit"

const UserData = createSlice({
    name: 'crud',
    initialState: {
        data: [],
        error_msg: '',
        isLogin: false
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.data = action.payload
            state.isLogin = true
        },

        loginFailed: (state, action) => {
            state.isLogin = false
            state.data = []
        },

        editDetails: (state, action) => {
            let TempData = [...state.data]
            TempData[action.payload.index].name = action.payload.value.name
            TempData[action.payload.index].nickname = action.payload.value.nickname
            TempData[action.payload.index].email = action.payload.value.email
            TempData[action.payload.index].mobile = action.payload.value.mobile
        }
    }
})

export const { addDetails, deleteDetails, editDetails } = UserData.actions;
export default UserData.reducer