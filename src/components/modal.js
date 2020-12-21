
import "../styles/modal.css";
import Search from '../utils/search';
import React, { Component } from 'react';
import icon from "../assets/icons/watch.svg";
import date from "../assets/icons/date.svg";
import InfoBar from '../utils/infobar';
import commIcon from '../assets/icons/communication.svg';
import crossIcon from "../assets/icons/cross.svg"

const Modal = ({ handleClose, show, children, imgSrc, description, title }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <div className="modal-main">
                <div
                    className="heart-div"
                    onClick={handleClose}
                >
                    <img
                        className="heart-icon"
                        src={crossIcon}
                        alt="hi">

                    </img>
                </div>
                <div className="left">
                    <div className="title">
                        <h1>{title}</h1>
                    </div>
                    <div className="image-and-text">
                        <img className="image" src={imgSrc} alt="hi"></img>
                        <h3>{description}</h3>
                    </div>
                    <div className="statistics-title">
                        <h2>
                            From similar companies, we predict
              </h2>
                    </div>
                    <div className="statistics" >
                        <div>
                            <InfoBar
                                name={"Communication"}
                                percentIncreased={41}
                                imgsrc={commIcon}
                            />
                        </div>

                        <div>
                            <InfoBar
                                name={"Communication"}
                                percentIncreased={41}
                                imgsrc={commIcon}
                            />
                        </div>
                    </div>

                </div>



                <div className="right">
                    <div className="who">
                        <h2 className="top-item">
                            Who
                </h2>
                        <Search />
                    </div>

                    <div className="when">
                        <h2>
                            When
                </h2>
                        <Search
                            placeholder="Date/Time..."
                            imgsrc={date}
                        />
                    </div>

                    <div className="total-cost">
                        <div className="cost-title">
                            <h2>
                                Total cost
                    </h2>
                        </div>

                        <div className="cost-itself">
                            <h2>
                                $45
                    </h2>
                        </div>
                    </div>

                    <div className="unit-cost">
                        <div >
                            <h4>
                                Cost
                    </h4>
                        </div>

                        <div>
                            <h4>
                                $1500
                    </h4>
                        </div>
                    </div>

                    <div className="peruser-cost">
                        <div className="cost-title">
                            <h4>
                                Users
                    </h4>
                        </div>

                        <div className="cost-itself">
                            <h4>
                                x21
                    </h4>
                        </div>
                    </div>

                    <div className="tax-cost">
                        <div className="cost-title">
                            <h4>
                                Tax
                    </h4>
                        </div>

                        <div className="cost-itself">
                            <h4>
                                45
                    </h4>
                        </div>
                    </div>

                    <div className="conv-cost">
                        <div className="cost-title">
                            <h4>
                                Convenience
                    </h4>
                        </div>

                        <div className="cost-itself">
                            <h4>
                                45
                    </h4>
                        </div>
                    </div>

                    <div
                        className="button"
                        onClick={handleClose}
                    >
                        Launch


                </div>
                </div>
            </div>
        </div >

    );
};

export default Modal;