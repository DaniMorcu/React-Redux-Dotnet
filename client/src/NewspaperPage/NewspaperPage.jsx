import React from 'react';
import { connect } from 'react-redux';
import './../_assets/_styles/newspaper.css';

class NewspaperPage extends React.Component {
    render() {
        return(
        <div>
            <div className="paper">
                <div className="head">
                    <div className="headerobjectswrapper">
                        <div className="weatherforcastbox">
                            <div className="main-title">
                                Newspaper
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-columns">
                   
                <div className="card border-article">
                    <div className="card-body">
                        <div className="card-title">
                            <div className="head"><span className="headline hl3">When darkness overspreads my eyes</span>
                                <p><span className="headline hl4">by JOHANN WOLFGANG VON GOETHE</span></p>
                            </div>
                        </div>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare erat
                            eget magna molestie tincidunt. Nullam eget ipsum justo. Nullam venenatis sagittis enim sit
                            amet

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare erat
                            eget magna molestie tincidunt. Nullam eget ipsum justo. Nullam venenatis sagittis enim sit
                            amet
                        </p>
                        <figure className="figure">
                            <img src="http://i.giphy.com/PW7MoTD2d9pJK.gif" className="rounded float img-card-center" alt="Not fount it" />
                            <figcaption className="figcaption">Hermine hoping for courage.</figcaption>

                        </figure>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare erat
                            eget magna molestie tincidunt. Nullam eget ipsum justo. Nullam venenatis sagittis enim sit
                            amet

                        </p>
                    </div>
                </div>


                <div className="card border-article">
                    <div className="card-body">
                        <div className="card-title">
                            <div className="head"><span className="headline hl5">Give people courage</span>
                                <p><span className="headline hl6">The crowd seemed to grow</span></p>
                            </div>
                        </div>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare erat
                            eget magna molestie tincidunt. Nullam eget ipsum justo. Nullam venenatis sagittis enim sit
                            amet

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare erat
                            eget magna molestie tincidunt. Nullam eget ipsum justo. Nullam venenatis sagittis enim sit
                            amet
                        </p>
                        <figure className="figure">
                            <img src="http://i.giphy.com/4fDWVPMoSyhgc.gif" className="rounded float img-card-center"
                                alt="Not fount it"/>
                            <figcaption className="figcaption">Hermine hoping for courage.</figcaption>
                        </figure>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare erat
                            eget magna molestie tincidunt. Nullam eget ipsum justo. Nullam venenatis sagittis enim sit
                            amet
                        </p>
                    </div>
                </div>


                <div className="card border-article">
                    <div className="card-body">
                        <div className="card-title">
                            <div className="head"><span className="headline hl1">May the Force be with you</span>
                                <p><span className="headline hl2">Let go your conscious self and act on instinct</span></p>
                            </div>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare erat
                                eget magna molestie tincidunt. Nullam eget ipsum justo. Nullam venenatis sagittis enim
                                sit
                                amet

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare erat
                                eget magna molestie tincidunt. Nullam eget ipsum justo. Nullam venenatis sagittis enim
                                sit
                                amet

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare erat
                                eget magna molestie tincidunt. Nullam eget ipsum justo. Nullam venenatis sagittis enim
                                sit
                                amet

                            </p>
                        </div>
                    </div>

                </div>

                <div className="card border-article">
                    <div className="card-body">
                        <div className="card-title">
                            <div className="head"><span className="headline hl3">The buzz of the little world </span>
                                <p><span className="headline hl4">A thousand unknown plants</span></p>
                            </div>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare erat
                                eget magna molestie tincidunt. Nullam eget ipsum justo. Nullam venenatis sagittis enim
                                sit
                                amet

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare erat
                                eget magna molestie tincidunt. Nullam eget ipsum justo. Nullam venenatis sagittis enim
                                sit
                                amet

                                <span className="citation">"Don't under&shy;estimate the Force."</span>

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare erat
                                eget magna molestie tincidunt. Nullam eget ipsum justo. Nullam venenatis sagittis enim
                                sit
                                amet

                            </p>
                        </div>
                    </div>
                </div>


                <div className="card border-article">
                    <div className="card-body">
                        <div className="card-title">

                            <div className="head"><span className="headline hl1">It wasn't a dream </span>
                                <p><span className="headline hl4">by FRANZ KAFKA</span></p>
                            </div>

                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare erat
                                eget magna molestie tincidunt. Nullam eget ipsum justo. Nullam venenatis sagittis enim
                                sit
                                amet

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare erat
                                eget magna molestie tincidunt. Nullam eget ipsum justo. Nullam venenatis sagittis enim
                                sit
                                amet

                                <span className="citation">"It's ok"</span>

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare erat
                                eget magna molestie tincidunt. Nullam eget ipsum justo. Nullam venenatis sagittis enim
                                sit
                                amet

                            </p>
                        </div>
                    </div>
                </div>


                <div className="card card-flip border-article">
                    <div className="card-body">
                        <div className="front">
                            <div className="card-title">

                                <div className="head"><span className="headline hl1">It magic! </span>
                                    <p><span className="headline hl4">by RITA</span></p>
                                </div>

                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare erat
                                    eget magna molestie tincidunt. Nullam eget ipsum justo. Nullam venenatis sagittis
                                    enim
                                    sit
                                    amet

                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare erat
                                    eget magna molestie tincidunt. Nullam eget ipsum justo. Nullam venenatis sagittis
                                    enim
                                    sit
                                    amet

                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                </div>

            </div>
        </div>
        )
    }
}

function mapStateToProps(state) { return state };
const connectedNewspaperPage = connect(mapStateToProps)(NewspaperPage);

export { connectedNewspaperPage as NewspaperPage };
