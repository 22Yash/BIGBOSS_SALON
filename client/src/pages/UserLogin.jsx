import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserLogin() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmpassword: ''
  });

  const navigate = useNavigate(); 
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (data.error) {
        console.error(data.error); // Display the error on console or show an alert
        alert(data.error);
      } else {
        console.log('Login successful', data.user);
        navigate('/user'); // Redirect to user dashboard on successful login
      }
    } catch (error) {
      console.error('An error occurred during login', error);
    }
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    const { fullname, email, password, confirmpassword } = formData;

    if (password !== confirmpassword) {
      return alert('Passwords do not match');
    }

    try {
      const res = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullname, email, password }),
      });

      const data = await res.json();
      if (data.error) {
        console.error(data.error); // Display the error on console or show an alert
        alert(data.error);
      } else {
        console.log('Registration successful', data.user);
        alert('Registration successful');
      }
    } catch (error) {
      console.error('An error occurred during registration', error);
    }
  };

  return (
    <div className="w-full pt-16 pb-24 flex justify-center">
      <div className="w-96 bg-white p-8 rounded-lg shadow-lg relative">
        <div className="flex justify-center mb-12">
          <button
            className={`text-2xl mr-6 ${isLogin ? 'border-b-2 border-blue-600' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`text-2xl ${!isLogin ? 'border-b-2 border-blue-600' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        <div className="space-y-6">
          {isLogin ? (
            <form id="loginForm" onSubmit={handleSubmitLogin} className="transition-opacity duration-500">
              <div className="mb-4">
                <label htmlFor="email" className="block uppercase text-sm mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg bg-gray-200"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block uppercase text-sm mb-2">Password</label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg bg-gray-200"
                  required
                />
              </div>
              <input
                type="submit"
                value="Submit"
                className="w-full bg-blue-600 text-white py-2 uppercase font-bold rounded-lg cursor-pointer hover:bg-blue-700"
              />
            </form>
          ) : (
            <form id="registerForm" onSubmit={handleSubmitRegister} className="transition-opacity duration-500">
              <div className="mb-4">
                <label htmlFor="fullname" className="block uppercase text-sm mb-2">Full Name</label>
                <input
                  type="text"
                  id="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg bg-gray-200"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block uppercase text-sm mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg bg-gray-200"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block uppercase text-sm mb-2">Password</label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg bg-gray-200"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="confirmpassword" className="block uppercase text-sm mb-2">Confirm Password</label>
                <input
                  type="password"
                  id="confirmpassword"
                  value={formData.confirmpassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg bg-gray-200"
                  required
                />
              </div>
              <input
                type="submit"
                value="Submit"
                className="w-full bg-blue-600 text-white py-2 uppercase font-bold rounded-lg cursor-pointer hover:bg-blue-700"
              />
            </form>
          )}
        </div>

        {isLogin && (
          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">Forgot Password?</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserLogin;
