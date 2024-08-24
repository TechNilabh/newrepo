import React, { Component, createRef } from 'react';
import './style.css';
import sound from './pop.mp3'; // Adjust path if the file is in the src directory

class Opening extends Component {
    constructor(props) {
        super(props);
        this.audioRef = createRef();
    }

    componentDidMount() {
        // Ensure the audio element is loaded and play it
        if (this.audioRef.current) {
            this.audioRef.current.play().catch(error => {
                console.error('Audio play failed:', error);
            });
        }

        // Wait for 1 second, then start opening the curtains
        setTimeout(() => {
            document.getElementById('curtain-left').style.transform = 'translateX(-100%)';
            document.getElementById('curtain-right').style.transform = 'translateX(100%)';
        }, 1000); // Added delay to match the opening effect
    }

    render() {
        return (
            <div>
                <audio ref={this.audioRef} src={sound} />
                <div id="curtain-left" className="curtain">
                    <img src="left_wind.png" alt="Left Curtain" />
                </div>
                <div id="curtain-right" className="curtain">
                    <img src="right_wind.png" alt="Right Curtain" />
                </div>
            </div>
        );
    }
}

export default Opening;
