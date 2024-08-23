import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import React from "react";
import axios from "axios";
import styled from "styled-components";
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import BottomNavi from './components/BottomNavi';


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
//  height: 300vh;
`;

function App() {

// 스프링부트와 연결된 부분인데, 프론트 할 때 Proxy error가 뜸
//    const [data, setData] = React.useState([]);
//
//    useState(function () {
//        axios
//          .get(
//            "http://localhost:3000/test"  //비동기로 api로 받아 오는 중
//          )
//          .then(function (result) {
//            const data = result.data;
//            setData(data);
//            console.log(data);
//          })
//          .catch(function (error) {
//            console.error(error);
//          });
//      }, []);

  return (
    <div className="App">
      <AppContainer>
            <Header>
            </Header>
            <MainContent />
            <Footer />
            <BottomNavi />
        </AppContainer>
    </div>
  );
}

export default App;