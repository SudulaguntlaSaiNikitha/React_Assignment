// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;



// // src/App.jsx
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
// import CartPage from './pages/CartPage';

// const App = () => (
//   <Router>
//     <nav>
//       <Link to="/">Dashboard</Link>
//       <Link to="/cart">Cart</Link>
//     </nav>
//     <Routes>
//       <Route path="/" element={<Dashboard />} />
//       <Route path="/cart" element={<CartPage />} />
//     </Routes>
//   </Router>
// );

// export default App;

// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
