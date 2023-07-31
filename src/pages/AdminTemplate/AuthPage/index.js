import React, { useState } from 'react';
import { actAuth } from './duck/actions';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

export default function AuthPage() {

    const error = useSelector((state) => state.authReducer.error);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [state, setState] = useState({
        taiKhoan: "",
        matKhau: ""
    });

    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(state);
        //gọi tới action call api
        dispatch(actAuth(state, navigate));
    };

    const renderError = () => {
        return (
        error && <div className='alert alert-danger'>{error?.response.data.content}</div>
        )
    };

    if(localStorage.getItem("UserAdmin")){
        return <Navigate replace to="/admin/dashboard" />;
    }

    return (
        <div className='container'>

            <div className='row'>

                <div className='col-sm-6 mx-auto'>
                    <h3>AuthPage</h3>
                    {renderError()}
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label>Tài khoản</label>
                            <input type="text" name="taiKhoan" id className="form-control" placeholder onChange={handleOnchange} />
                        </div>
                        <div className="form-group">
                            <label>Mật khẩu</label>
                            <input type="text" name="matKhau" id className="form-control" placeholder onChange={handleOnchange} />
                        </div>
                        <button className='btn btn-success'>Log in</button>

                    </form>
                </div>
            </div>
        </div>
    )
}
