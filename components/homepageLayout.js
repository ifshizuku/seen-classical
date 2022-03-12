function HomepageLayout() {
    return (
        <div id="main" className="flex flex-col justify-between overflow-scroll h-screen">
            {/* Top Bar */}
            <div id="topbar" className="flex justify-between items-center pt-6">
                {/* Top Bar - Left Part */}
                <div id="sentence" className="animate__animated animate__fadeIn">
                    <h2
                        id="sign"
                        className="transition duration-200 text-white text-opacity-40 subpixel-antialiased font-bold text-xl hover:text-opacity-95 select-none">
                        下雨的伞
                    </h2>
                </div>

                <div
                    id="intro"
                    className="w-56 h-12 bg-opacity-10 bg-white rounded-lg hidden sm:flex sm:justify-evenly animate__animated animate__fadeIn backdrop-filter backdrop-blur-xl">
                    <div id="expend-button" className="w-14 h-full flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="menu-1"
                            className="transition duration-200 h-6 w-6 stroke-current text-white text-opacity-60 hover:text-opacity-95">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                            />
                        </svg>
                    </div>

                    <div
                        id="website-log"
                        className="transition duration-200 w-20 h-full flex justify-center items-center rounded-lg ease-in-out">
                        <h2
                            id="menu-2"
                            className="text-white text-opacity-60 subpixel-antialiased font-semibold text-md select-none">
                            实验室
                        </h2>
                    </div>

                    <div
                        id="about"
                        className="transition duration-200 w-16 h-full flex justify-center items-center rounded-lg ease-in-out">
                        <h2
                            id="menu-3"
                            className="text-white text-opacity-60 subpixel-antialiased font-semibold text-md select-none hover:text-opacity-95">
                            记录
                        </h2>
                    </div>
                </div>
            </div>

            <div
                id="main-title"
                className="flex justify-center animate__animated animate__zoomIn transition duration-200">
                <div className="flex flex-col justify-center items-center">
                    <h2 id="title" className="text-8xl text-gray-100 select-none sm:text-9xl subpixel-antialiased">
                        Seen
                    </h2>
                    <p className="text-white text-opacity-30 font-semibold text-lg select-none subpixel-antialiased">
                        本站建设中...差不多了
                    </p>
                </div>
            </div>

            <div className="flex justify-center items-center opacity-0">
                <div className="w-12 flex justify-center bg-white bg-opacity-20 rounded-md">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="28"
                        height="28"
                        className="stroke-white fill-white">
                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default HomepageLayout;
