import React from "react";
import ReactSlider from "react-slider";
import "./index.css"
const Slider = ({ onChange, currentIndex  }) => {
    return (
        <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            markClassName="example-mark"
            onChange={onChange}
            defaultValue={0}
            value={currentIndex}
            min={0}
            max={3}
            marks
            renderThumb={(props, state) => <div {...props}>{state.valueNow + 1}</div>}
            renderMark={(props) => {
                // props.className = "example-mark example-mark-completed";
                if (props.key < currentIndex) {
                    props.className = "example-mark example-mark-completed";
                } else if (props.key === currentIndex) {
                    props.className = "example-mark example-mark-active";
                }
                return <div {...props} >{props.key + 1}</div>;
            }}

        />

    );
};
export { Slider }