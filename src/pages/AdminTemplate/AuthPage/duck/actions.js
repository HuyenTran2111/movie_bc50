import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAIL, AUTH_CLEAR_DATA } from "./constants";
import api from "utils/apiUtil";


// Giả sử BE trả time exp: 1h
// const TIME_EXP = 60 * 60 * 1000;
const TIME_EXP = 120000;

export const actAuth = (user, navigate) => {
    return (dispatch) => {
        //pending
        dispatch(actAuthRequest())

        api.post("QuanLyNguoiDung/DangNhap", user)
        .then((res) => {
            if(res.data.statusCode === 200) {
                const user = res.data.content;
                //Không phải quản trị
                if(!(user.maLoaiNguoiDung === "QuanTri")){
                    //show error
                    const error = {
                        response: {
                            data: {
                                content: "Bạn không có quyền truy cập",
                            },
                        },
                    };
                    return Promise.reject(error);
                    // dòng 23 thì sẽ tự động nhảy xuống .catch
                };
                // tính time hết hạn(hiện tại + 1h)
                const date = new Date().getTime();
                const exp = date + TIME_EXP;
                console.log("exp", exp);
                // setLocalStorage exp
                localStorage.setItem("exp", exp);
                //dispatch đến action timeoutLogout
                dispatch(acttimeoutLogout(navigate, TIME_EXP));
                // là quản trị thì lưu thông tin người dùng lại
                dispatch(actAuthSuccess(user));
                // là quản trị thì lưu trạng thái đăng nhập
                localStorage.setItem("UserAdmin", JSON.stringify(user));
               // là quản trị thì chuyển qua trang admin/dashboard  
                navigate("/admin/dashboard", {replace: true});

                // if khach hang {
                //     dispath actAuthSuccess
                //     navigate("/user/datve")
                // } else if quan tri {
                //     dispatch authSucccess 
                //     navigate ("/admin/dashboard")
                // }
            }
            console.log(res.data);
        })
        .catch((error) => {
            dispatch(actAuthFail(error));
            
        });
    };
};

//logout
export const actLogout = (navigate) => {
// remove LocalStorage removeItem()
localStorage.removeItem("UserAdmin");
localStorage.removeItem("exp");
//redirect /auth
navigate("/auth", {replace: true});
//clear auth reducer
return {
    type: AUTH_CLEAR_DATA,
};
};

const acttimeoutLogout = (navigate, exp) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(actLogout(navigate));
        }, exp)
    }
};

export const actTryLogin = (navigate) => {
    return (dispatch) => {
        const user = JSON.parse(localStorage.getItem("UserAdmin"));

        if(!user) return;

        const exp = localStorage.getItem("exp");
        const date = new Date().getTime();

        console.log(exp);
        console.log(date);

        if(date > exp) {
            //logout
            dispatch(actLogout(navigate));
            return;
        };

        // set timeout
        dispatch(acttimeoutLogout(exp - date, navigate));
        dispatch(actAuthSuccess(user));

    }
}

const actAuthRequest = () => {
return {
    type: AUTH_REQUEST,
};
};

const actAuthSuccess = (data) => {
    return {
        type: AUTH_SUCCESS,
        payload: data,
    };
};

const actAuthFail = (error) => {
    return {
        type: AUTH_FAIL,
        payload: error
    };
};
