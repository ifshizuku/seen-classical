import HomepageLayout from "../components/homepageLayout";
import SubpageProfile from "../components/subpageProfile";
import React from "react";
import GlobalContext from "../components/globalContext";
import Sidebar from "../components/sideBar";

class HomePage extends React.Component {
    static contextType = GlobalContext;
    constructor(props) {
        super(props);

        this.toggleZen = () => {
            this.setState((state) => ({
                zenmode: state.zenmode === true ? false : true,
            }));
            // console.log(this.state.zenmode);
        };

        this.toggleSidebar = () => {
            this.setState((state) => ({
                sidebar: state.sidebar === true ? false : true,
            }));
            // console.log(this.state.sidebar);
        };

        this.state = {
            zenmode: false,
            toggleZen: this.toggleZen,
            sidebar: false,
            toggleSidebar: this.toggleSidebar,
        };

        
    }
    render() {
        return (
            <GlobalContext.Provider value={this.state}>
                <div id="wrap">
                    {/* Background */}
                    <div
                        id="background"
                        className="transition w-full h-full bg-cover bg-center bg-fixed bg-[url('https://seen-1302639736.file.myqcloud.com/site-data/homepage/bg-05.webp')] -z-10">
                        {/* Content */}
                        <div id="content" className="flex w-screen justify-center items-center flex-col h-full">
                            <HomepageLayout />

                            <SubpageProfile />
                        </div>
                        <Sidebar />
                    </div>
                </div>
            </GlobalContext.Provider>
        );
    }
}

export default HomePage;
