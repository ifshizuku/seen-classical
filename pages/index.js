import HomepageLayout from "../components/homepageLayout";
import SubpageProfile from "../components/subpageProfile";
import React from "react";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zenmode: false,
        };
    }

    toggleZen() {
        this.setState({
            zenmode: this.state.zenmode === true ? false : true,
        });
    }

    render() {
        return (
            <div id="wrap">
                {/* Background */}
                <div
                    id="background"
                    className="transition w-full h-full bg-cover bg-center bg-fixed bg-[url('https://seen-1302639736.file.myqcloud.com/site-data/homepage/bg-05.webp')] -z-10">
                    {/* Content */}
                    <div id="content" className="flex w-screen justify-center items-center flex-col h-full">
                        <HomepageLayout zenmode={this.state.zenmode} toggleZen={() => this.toggleZen()} />

                        <SubpageProfile zenmode={this.state.zenmode} />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
