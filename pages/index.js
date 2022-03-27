import { Wrap, Content } from "../components/layout";
import Head from "next/head";
import HomepageLayout from "../components/homepageLayout";
import React from "react";
import SubpageProfile from "../components/subpageProfile";
import Sidebar from "../components/sideBar";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zenmode: false,
        };
        this.toggleZen = this.toggleZen.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleZen() {
        this.setState((state) => ({
            zenmode: state.zenmode === true ? false : true,
        }));
    }

    toggleSidebar() {
        this.setState((state) => ({
            sidebar: state.sidebar === true ? false : true,
        }));
    }

    render() {
        return (
            <Wrap>
                <Head>
                    <title>Seen / 旧念</title>
                </Head>
                <Content>
                    <HomepageLayout
                        zenmode={this.state.zenmode}
                        toggleZen={this.toggleZen}
                        toggleSidebar={this.toggleSidebar}
                    />

                    <SubpageProfile zenmode={this.state.zenmode} />
                </Content>

                <Sidebar sidebar={this.state.sidebar} toggleSidebar={this.toggleSidebar} />
            </Wrap>
        );
    }
}

export default HomePage;
