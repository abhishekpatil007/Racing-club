import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'Admin' && password === '123456') {
   
      navigate('/admin-events');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="w-full relative bg-linen-100 overflow-hidden flex flex-row items-start justify-center pt-[255px] pb-64 pl-5 pr-5 box-border leading-[normal] tracking-[normal] text-left text-13xl text-gray-600 font-roboto">
      <div className="flex-1 max-w-[600px] shadow-[0px_4px_24px_rgba(0,_0,_0,_0.25)] bg-white overflow-hidden flex flex-col items-center justify-start pt-9 px-[43px] pb-[52px] box-border gap-[52.5px] mq675:gap-[26px] mq675:pt-[23px] mq675:px-[21px] mq675:pb-[34px] mq675:box-border">
        <div className="flex flex-row items-start justify-start py-0 px-0 box-border max-w-full">
          <b className="relative text-black text-7xl">Log In</b>
        </div>
        <div className="w-full flex flex-col items-center justify-start gap-[13px] max-w-[400px] text-base">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-3 box-border gap-2 max-w-full">
            <div className="relative inline-block min-w-[100px]">
              Enter Email Id
            </div>
            <div className="self-stretch rounded-31xl flex flex-row items-start justify-start max-w-full text-gray-300">
              <div className="h-[50px] flex-1 rounded-lg border-gray-700 border-[1px] border-solid box-border flex flex-row items-start justify-between py-[13px] pl-3.5 pr-5 max-w-full gap-5">
                <input
                  className="m-0 h-full w-full relative overflow-hidden shrink-0 focus:outline-none focus:border-none"
                  type="text"
                  placeholder="Email id"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>    
          <div className="self-stretch flex flex-col items-start justify-start gap-2 max-w-full">
            <div className="relative">Password</div>
            <div className="self-stretch rounded-31xl flex flex-row items-start justify-start max-w-full text-gray-300">
              <div className="h-[50px] flex-1 rounded-lg border-gray-700 border-[1px] border-solid box-border flex flex-row items-start justify-between py-[13px] pl-3.5 pr-5 max-w-full gap-5">
                <input
                  className="m-0 h-full w-full relative overflow-hidden shrink-0 focus:outline-none focus:border-none"
                  type="password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between gap-5 text-mini text-darkslategray-300">
            <div className="relative flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2"
                // ... add any necessary state handling here
              />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
          </div>
        </div>
        <button 
          className="cursor-pointer [border:none] py-[15px] px-[194px] bg-goldenrod rounded-lg flex flex-row items-center justify-center box-border max-w-full hover:bg-darkgoldenrod"
          onClick={handleLogin}
        >
          <div className="relative text-lg font-semibold font-roboto text-white text-left">
            Login
          </div>
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
