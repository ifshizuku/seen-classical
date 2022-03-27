import React from "react";

class Wrap extends React.Component {
    render() {
        return (
            <div
                id="wrap"
                className="transition w-full h-full bg-cover bg-center bg-fixed bg-[url('https://seen-1302639736.file.myqcloud.com/site-data/homepage/bg-05.webp')] -z-10">
                {this.props.children}
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div id="content" className="flex w-screen justify-center items-center flex-col h-full">
                {this.props.children}
            </div>
        );
    }
}

export { Wrap, Content };