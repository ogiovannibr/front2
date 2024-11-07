// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
  <div class="bg-cor-2 overflow-hidden z-10">
    <div className="text-cor-4 w-64 min-h-screen p-5 hidden sm:hidden md:hidden lg:inline-block xl:inline-block">
      <div class="flex">
        <svg className="h-auto w-14 text-cor-4" fill="currentColor" version="1.1" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
          <path transform="translate(775,409)" d="m0 0h36l21 2 26 5 21 6 24 10 25 13 22 15 13 11 10 8 19 19 1 5 7-5h6l7 6 2 5-15 30-12 19-10 14-10 13-12 14-12 13-12 11-15 11-17 10-17 6-12 2-14-1-15-7-15-10-14-14-9-14-8-17-5-17-3-15-2-24 2-19 4-14 7-17 12-20 3-4-11 3-13 7-11 9-9 10-9 16-5 14-4 17-2 15-3 2-15-8-20-7-31-8-63-14-25-7-24-10-10-7v-3l26-15 18-10 26-13 30-13 31-11 28-8 31-6zm40 48m95 27-10 2-8 5-5 5-5 10-1 8 2 11 6 10 9 6 5 2 8 1 9-2 8-5 7-8 3-7 1-9-2-10-6-10-9-6-5-2z"/>
          <path transform="translate(315,91)" d="m0 0 32 2 38 5 38 8 28 8 31 11 30 13 20 10 21 12 19 12 17 12 12 9 16 13 11 9 15 14 8 7 21 21 7 8 12 14 8 9 11 14 14 18 13 19 8 11 14 22 5 8v4l-13 2h-8l-14-19-11-14-9-11-18-20-11-12-9-9-8-7-12-11-11-9-15-12-14-10-27-18-22-13-28-15-28-13-30-12-22-8-36-11-44-11-9-3-7-10-6-8-11-12-7-7-17-13-3-3z"/>
          <path transform="translate(361,387)" d="m0 0h40l24 4 22 6 25 10 17 8 19 11 21 14 19 14v4l-27 14-28 19-14 12-10 8-18 18-3-1-7-19-9-21-10-17-9-12-9-10-12-12-17-12-12-7-24-10-20-6-1-4 2-2 23-6z"/>
          <path transform="translate(49,438)" d="m0 0 10 2 18 6 31 13 35 16 29 14 74 36 20 10 19 10 40 20 19 10 15 8 1 4-1 1-10-1-69-14-53-12-45-12-35-11-25-10-16-8-12-8-15-13-9-10-10-15-8-17-5-14 1-4z"/>
          <path transform="translate(59,628)" d="m0 0 9 2 15 3 19 2 14 1h72l64-3 78-5h10l-1 5-19 10-25 12-37 16-27 10-31 10-25 6-18 3h-22l-17-4-16-8-9-7-8-7-11-14-8-13-8-15z"/>
          <path transform="translate(383,170)" d="m0 0 10 2 34 9 29 9 25 9 29 12 25 12 23 12 23 14 16 11 19 14 11 9 15 13 16 15 8 8 7 8 10 11 11 14 13 17 12 18-1 4-13 2h-10l-13-19-11-14-12-13-7-8-16-15-14-11-13-10-15-10-18-11-16-9-15-8-24-11-27-11-37-13-34-10-12-3-8-16-7-11-11-13-3-3z"/>
          <path transform="translate(518,516)" d="m0 0 5 1 14 8 19 8 20 6 25 5 49 7 34 5 13 4 3 1-1 3-24 6-35 11-53 18-22 8-5-1-10-7-17-7-24-6-24-4-31-4-1-4 14-15 7-8 12-12 14-11 5-4z"/>
          <path transform="translate(729,578)" d="m0 0 5 1-1 3-11 7-16 11-21 14-24 15-17 10-25 14-19 10-24 12-30 13-38 14-38 11-28 6h-5v-4l9-12 8-9 8-7 13-11 15-10 15-9 16-9 28-13 32-13 43-15 54-16z"/>
          <path transform="translate(61,529)" d="m0 0 6 2 25 10 30 10 50 14 49 12 46 10 72 15 5 2-1 4-54 5-23 2-53 3h-52l-17-2-21-7-16-8-11-8-12-11-8-10-8-14-5-12-3-11v-5z"/>
          <path transform="translate(336,654)" d="m0 0h5v4l-8 7-37 37-8 7-11 10-11 9-16 13-17 12-16 10-16 8-18 5-13 1-15-2-13-5-12-7-13-11-9-9-1-3 2-3 69-20 42-14 35-13 34-14 33-15z"/>
          <path transform="translate(771,616)" d="m0 0 4 1-4 17-9 27-13 28-12 20-14 20-12 14-7 8-11 12-9 9-8 7-12 10-16 8-15 5-12 2h-19l-12-2-15-5-5-3v-3l22-13 11-7 28-19 21-16 22-18 10-9 8-7 15-14 21-21 7-8 10-11 9-11 14-17z"/>
          <path transform="translate(751,595)" d="m0 0h3l-1 4-13 22-14 19-7 9-9 10-7 8-15 15-8 7-18 14-14 9-18 11-28 13-21 8-13 1h-15l-18-2-21-5-6-2v-3l50-25 23-11 22-12 26-14 25-14 27-16 24-15 36-24z"/>
          <path transform="translate(344,681)" d="m0 0 4 2-7 14-10 18-13 22-13 21-17 25-14 19-8 10-11 13-9 11-25 25-8 7-15 12-8 6-4-1-1-4v-13l-3-26-3-15 5-5 12-11 11-9 10-9 11-9 11-10 11-9 11-10 11-9 7-7 8-7 12-11 30-27 12-11z"/>
          <path transform="translate(430,240)" d="m0 0 16 4 35 11 30 12 29 14 20 11 14 9 17 12 13 10 14 12 16 15 7 8 11 12 13 17 7 10v4l-12 5-26-26-8-7-14-12-16-12-14-10-18-11-18-10-16-8-20-9-27-10-32-9-4-9-8-15-8-10-2-3z"/>
          <path transform="translate(421,608)" d="m0 0 16 2 49 8 16 4 2 3-10 7-39 26-12 9-13 10-13 11-8 7-10 9-17 17-7 8h-3v-19l3-16 5-16 7-17 10-19 14-21 9-12z"/>
          <path transform="translate(462,303)" d="m0 0 8 1 27 9 22 9 23 11 22 13 20 14 13 11 8 7 17 17 9 10 5 7-1 3-15 6-5-1-12-11-14-11-17-13-15-10-19-11-19-9-21-7-16-3-2-1-12-27-7-10z"/>
          <path transform="translate(788,649)" d="m0 0h3l1 3-5 33-6 25-7 21-9 20-12 20-13 16-14 14-15 11-15 9-21 9-12 4-4-1 1-4 23-23h2l2-4 12-12 7-8 9-10 9-11 14-18 11-16 11-17 11-20 9-21 7-19z"/>
          <path transform="translate(491,365)" d="m0 0 7 1 22 8 25 13 15 10 14 11 12 11 10 10-1 4-10 4-8 6-5-1-13-11-20-13-23-12-14-6-5-2-3-20-4-8z"/>
          <path transform="translate(348,724)" d="m0 0h4l3 14 4 9-1 4-14 20-12 14-9 11-10 10-7 8-11 11-8 7-6 5-2-1 1-5 12-16 12-17 17-26 14-24 10-20z"/>
          <path transform="translate(812,668)" d="m0 0 4 2 6 11 3 10 1 15-2 12-5 12-7 11-12 14-9 8-2 3h-3l1-6 7-15 7-22 6-28 4-26z"/>
        </svg>
        <h2 className="text-2xl font-bold mb-5 pt-4 px-3">Volans</h2>
      </div>
      <ul className="space-y-2">
        <li class="text-cor-4 flex p-2 rounded hover:bg-cor-3 transition ease-in-out duration-300">
          <svg class="h-auto w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M160 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352zM0 272c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 272zM368 96l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48z"/>
          </svg>
          <Link to="/dashboard" className="px-3">Dashboard</Link>
        </li>
        <li class="text-cor-4 flex p-2 rounded hover:bg-cor-3 transition ease-in-out duration-300">
          <svg class="h-auto w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
          </svg>
          <Link to="/baralhos" className="px-3">Baralhos</Link>
        </li>
        <li class="text-cor-4 flex p-2 rounded hover:bg-cor-3 transition ease-in-out duration-300">
          <svg class="h-auto w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/>
          </svg>
          <button className="px-3">Sair</button>
        </li>
      </ul>
    </div>
      <nav className="text-white w-full fixed lg:hidden xl:hidden top-0 left-0 z-10 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="text-xl font-semibold hover:bg-gray-700 px-4 py-2 rounded">Dashboard</Link>
            <Link to="/baralhos" className="text-xl font-semibold hover:bg-gray-700 px-4 py-2 rounded">Baralhos</Link>
          </div>
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold hover:bg-gray-700 px-4 py-2 rounded">Sair</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

const apiUrl = process.env.REACT_APP_API_URL + "/api/endpoint";

// Agora, quando você for fazer uma requisição para esse endpoint:
fetch(apiUrl)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


export default Sidebar;