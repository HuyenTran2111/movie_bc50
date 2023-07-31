import React, { Component } from 'react';
import axios from 'axios';
import MovieItem from './MovieItem';
// import {
//   actListMovieRequest,
//   actListMovieSuccess,
//   actListMovieFail,
//   actFetchListMovie
// } from "./duck/actions.js";
import { actFetchListMovie } from './duck/actions.js';
import { connect } from 'react-redux';

class ListMoviePage extends Component {
  
  componentDidMount() {
    // call api
    // pending
    // this.setState({
    //   loading: false,
    //   data: null,
    //   error: null,
    // });
    // this.props.listMovieRequest();

    // axios({
    //   url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03",
    //   method: "GET",
    //   headers: {
    //     TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MCIsIkhldEhhblN0cmluZyI6IjE0LzAxLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNTE5MDQwMDAwMCIsIm5iZiI6MTY3NzQzMDgwMCwiZXhwIjoxNzA1MzM4MDAwfQ.k7Kzay9-bYUjN7pTcMrYpgTq5Xe5U6jdvM1OUQ5L_2A"
    //   },
    // })
    //   .then((res) => {
    //     // console.log(res);
    //     if (res.data.statusCode === 200) {
    //       // console.log(res.data.content);
    //       // this.setState({
    //       //   loading: true,
    //       //   data: res.data.content,
    //       //   error: null,
    //       // });
    //       this.props.listMovieSuccess(res.data.content);
    //     }
    //   })
    //   .catch((error) => {
    //     // console.log(error);
    //     // this.setState({
    //     //   loading: false,
    //     //   data: null,
    //     //   error,
    //     // });
    //     this.props.listMovieFail(error);
    //   })

    this.props.fetchListMovie();
  };

  renderListMovie = () => {
    const { data, loading } = this.props;
    if(loading) return <div>Loading...</div>;
    return data?.map((movie) => <MovieItem key={movie.maPhim}
      movie={movie} />)
  }
  render() {
    return (
      <div className='container'>
        <h3>ListMoviePage</h3>
        <div className='row'>
          {this.renderListMovie()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
 return {
  loading: state.listMovieReducer.loading,
  data: state.listMovieReducer.data,
  
 }

}

const mapDispatchToProps = (dispatch) => {
  return {
    // listMovieRequest: () => {
    //   dispatch(actListMovieRequest())
    // },
    // listMovieSuccess: (data) => {
    //   dispatch(actListMovieSuccess(data))
    // },
    // listMovieFail: (error) => {
    //   dispatch(actListMovieFail(error))
    // },
fetchListMovie: () => {
  dispatch(actFetchListMovie())
},
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);
