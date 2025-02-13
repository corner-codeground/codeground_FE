import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import React, {useState} from 'react';

import Header from './component/Header';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Sign_up from "./pages/Sign_up";
import Mypage from "./pages/Mypage";
import Writting from "./pages/Writting";

// Board 컴포넌트 (게시판 이동 동적 처리)
import BoardPages from './pages/board_pages/BoardPages';
import Board_Mypages from './pages/board_pages/Board_Mypages';

// 계정 관리 페이지 
import Set_userInfo from './pages/userInfo_follow/Set_userInfo'; // 경로 추가
import Account from './pages/userInfo_follow/Account';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //로그인 상태 관리

  return( 
  <div className="App">
    <Header isLoggedIn={isLoggedIn} />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/sign_up" element={<Sign_up />} />
      <Route path="/mypage/:boardId?" element={<Mypage />} />
      <Route path="/writting" element={<Writting />} />
      {/* 게시판 별 페이지 */}
      <Route path="/board_pages/:boardId" element={<BoardPages />} /> {/* 게시판 ID에 따라 다르게 */}
      <Route path="/mypages/:boardId" element={<Board_Mypages />} />

      {/* 계정 관리 페이지 추가 */}
      <Route path="/profile-edit" element={<Set_userInfo />} /> 
      <Route path="/account" element={<Account />} /> 
    </Routes>
    <div>
      
      <Link to={"/login"}>Login  </Link>
      <Link to={"/sign_up"}>Sign_up  </Link>
      
    </div> 
  </div>
  );
}

export default App;
