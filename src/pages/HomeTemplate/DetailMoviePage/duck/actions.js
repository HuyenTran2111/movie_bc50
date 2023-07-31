
import { DETAIL_MOVIE_REQUEST, DETAIL_MOVIE_SUCCESS, DETAIL_MOVIE_FAIL } from "./constants.js";
import api from "utils/apiUtil.js";


export const actFetchDetailMovie = (id) => {
    return (dispatch) => {
        //pending
        dispatch(actDetailMovieRequest())

        api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
        .then((res) => {
            if(res.data.statusCode === 200) {
                dispatch(actDetailMovieSuccess(res.data.content));
            }
        })
        .catch((error) => {
            dispatch(actDetailMovieFail(error));
        });
    };
};
const actDetailMovieRequest = () => {
    return {
        type: DETAIL_MOVIE_REQUEST
    };
};

const actDetailMovieSuccess = (data) => {
    return {
        type: DETAIL_MOVIE_SUCCESS,
        payload: data,
    };
};

const actDetailMovieFail = (error) => {
    return {
        type: DETAIL_MOVIE_FAIL,
        payload: error,
    };
};

