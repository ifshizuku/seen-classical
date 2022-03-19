import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

function Skills() {

    // function buttonOver(ele) {
    //     const statusbar = ele.children[1].children[1];
    //     // ele.classList.add("bg-white", "transform", "scale-110");
    //     // itext.classList.replace("text-opacity-60", "text-opacity-95")
    //     statusbar.classList.replace("hidden", "flex");
    // }
    
    function he() {
        this.hovereffect.current.style.display = "flex";
    }

    this.hovereffect = React.createRef()
    
    return (
        <div id="skills-container" className="flex pt-4">
            <div id="skills-cards" className="flex">
                <div id="card-js" className="flex bg-white bg-opacity-20 rounded-md">
                    <div className="flex justify-center items-center mt-3 mb-3 ml-5">
                        <FontAwesomeIcon size="3x" icon={brands("js-square")} color="#eed94d" />
                    </div>
                    <div className="flex flex-col justify-center items-center ml-3 mr-5">
                        <span className="font-medium text-lg text-slate-50">JavaScript</span>
                        <div className="w-full h-2 rounded bg-white bg-opacity-20 mt-0.5 hidden" ref={ this.hovereffect } onMouseEnter={() => he() }>
                            <div className="w-3/4 h-full bg-white bg-opacity-80 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Skills;
