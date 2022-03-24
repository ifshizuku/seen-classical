import HomepageLayout from "../components/homepageLayout";
import SubpageProfile from "../components/subpageProfile";
import React from "react";
import Sidebar from "../components/sideBar";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zenmode: false,
        };
        this.toggleZen =this.toggleZen.bind(this);
        this.toggleSidebar =this.toggleSidebar.bind(this);
    }

    toggleZen() {
        this.setState(state => ({
            zenmode: state.zenmode === true ? false : true,
        }));
    }

    toggleSidebar() {
        this.setState(state => ({
            sidebar: state.sidebar === true ? false : true,
        }));
    }

    render() {
        return (
                <div
                    id="wrap"
                    className="transition w-full h-full bg-cover bg-center bg-fixed bg-[url('https://seen-1302639736.file.myqcloud.com/site-data/homepage/bg-05.webp')] -z-10">
                    {/* Content */}
                    <div id="content" className="flex w-screen justify-center items-center flex-col h-full">
                        <HomepageLayout zenmode={this.state.zenmode} toggleZen={this.toggleZen} toggleSidebar={this.toggleSidebar}/>

                        <SubpageProfile zenmode={this.state.zenmode} />
                    </div>

                    <Sidebar sidebar={this.state.sidebar} toggleSidebar={this.toggleSidebar}/>
                </div>
        );
    }
}

export default HomePage;
