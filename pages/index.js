function HomePage() {
    return (
        <div id="wrap">
            {/* Background */}
            <div
                id="background"
                className="w-full h-screen bg-cover bg-center fixed bg-[url('https://seen-1302639736.file.myqcloud.com/site-data/homepage/bg-03.webp')] -z-10"></div>

            {/* Content */}
            <div id="content" className="flex w-screen h-screen justify-center items-center">
                {/* Container */}
                <div id="main" className="flex w-5/6 h-screen justify-center items-center">
                    {/* Top Bar */}
                    <div id="topbar" className="flex justify-between items-center">
                        {/* Top Bar - Left Part */}
                        <div id="sentence" class="animate__animated animate__fadeIn">
                            <h2
                                id="sign"
                                class="transition duration-200 text-white text-opacity-40 subpixel-antialiased font-bold text-xl hover:text-opacity-95 select-none">
                                下雨的伞
                            </h2>
                        </div>

                        <div
                            id="intro"
                            class="w-56 h-12 bg-opacity-10 bg-white rounded-lg hidden sm:flex sm:justify-evenly animate__animated animate__fadeIn backdrop-filter backdrop-blur-xl">
                            <div
                                id="expend-button"
                                class="w-14 h-full flex justify-center items-center"
                                onclick="zenMode()">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="menu-1"
                                    class="transition duration-200 h-6 w-6 stroke-current text-white text-opacity-60 hover:text-opacity-95">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                                    />
                                </svg>
                            </div>

                            <div
                                id="website-log"
                                class="transition duration-200 w-20 h-full flex justify-center items-center rounded-lg ease-in-out"
                                onmouseover="buttonOver(this)"
                                onmouseout="buttonOut(this)"
                                onclick="openSitelog()">
                                <h2
                                    id="menu-2"
                                    class="text-white text-opacity-60 subpixel-antialiased font-semibold text-md select-none">
                                    网站日志
                                </h2>
                            </div>

                            <div
                                id="about"
                                class="transition duration-200 w-16 h-full flex justify-center items-center rounded-lg ease-in-out"
                                onmouseover="buttonOver(this)"
                                onmouseout="buttonOut(this)"
                                onclick="changeToAbout()">
                                <h2
                                    id="menu-3"
                                    class="text-white text-opacity-60 subpixel-antialiased font-semibold text-md select-none hover:text-opacity-95">
                                    关于
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
