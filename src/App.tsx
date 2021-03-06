import { createContext, useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom"
import { auth, firebase } from './services/firebase'

import { AuthContextProvider } from './contexts/AuthContext'



function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="room/new" element={<NewRoom />}>
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;