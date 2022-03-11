function HomePage() {
    return (
        <div id="wrap">
            {/* Background */}
            <div
                id="background"
                className="w-full h-screen bg-cover bg-center fixed bg-[url('https://seen-1302639736.file.myqcloud.com/site-data/homepage/bg-03.webp')] -z-10"></div>

            {/* Content */}
            <div id="content" className="flex w-screen justify-center items-center flex-col h-full">
                {/* Container */}
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
                            <h2
                                id="title"
                                className="text-8xl text-gray-100 select-none sm:text-9xl subpixel-antialiased">
                                Seen
                            </h2>
                            <p className="text-white text-opacity-30 font-semibold text-lg select-none subpixel-antialiased">
                                本站建设中...差不多了
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center pb-8">
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

                <div
                    id="pagetwo"
                    className="bg-zinc-800 bg-opacity-40 backdrop-blur-lg rounded-xl flex w-5/6 justify-center items-center">
                    <div id="pt-container" className="pt-8 pl-8 pr-8 pb-10">
                        <div>
                            <h2 className="text-slate-50 text-3xl font-bold subpixel-antialiased">关于</h2>
                        </div>
                        <div id="profile" className="flex justify-between items-center">
                            <div className="pt-5 w-2/3">
                                <p className="text-slate-200 text-lg font-medium subpixel-antialiased">
                                    川崎雫，来自中国的高一学生，无所事事的一般人。
                                    <br />
                                    Forever / FORNEVER 。<br />
                                    追逐流逝的烟火，我的世界空无一物。
                                </p>
                                <br />
                                <p className="text-slate-300 text-lg font-regular subpixel-antialiased">
                                    业余开发者，业余摄影爱好者，业余写手，业余视频制作，反正总而言之就是业余的就对了，技能点很泛，没什么专精的但什么都会，学习速度很快。被心情支配的工具人罢了，偶尔还是有点正常的情感和奇思妙想，或许。
                                </p>
                            </div>
                            <div className="w-56 h-56 mr-4">
                                <img
                                    className="rounded-full"
                                    src="https://seen-1302639736.file.myqcloud.com/site-data/homepage/avatar01.webp"
                                />
                            </div>
                        </div>
                        <div className="flex mt-8">
                            <div>
                                <h3 className="text-slate-50 text-2xl font-bold subpixel-antialiased">技能点</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
