import React from 'react'
import './BoardTwo.css';

const BoardTwo = () => {
          return (
                    <div className="board" id="two">
                              <div className="control clearfix">
                                        <div className="control-session">
                                                  <span className="control-title">session</span>
                                                  <i className="fa fa-minus-circle" id="session-minus"></i> &nbsp; <span
                                                            id="session">25 </span> &nbsp; <i className="fa fa-plus-circle"
                                                                      id="session-plus"></i>
                                        </div>
                                        <div className="control-break">
                                                  <span className="control-title">break</span>
                                                  <i className="fa fa-minus-circle" id="break-minus"></i> &nbsp; <span
                                                            id="break">5</span> &nbsp; <i className="fa fa-plus-circle"
                                                                      id="break-plus"></i>
                                        </div>
                              </div>
                              <div className="pomodoro session">

                                        <div className="status">session</div>
                                        <div className="timer">25:00</div>
                                        <button className="button" id="switch"><i className="fa fa-exchange"></i></button>
                                        <button className="button" id="reset"><i className="fa fa-refresh"></i></button>
                                        <button className="button" id="toggle"><i className="fa fa-play"></i></button>
                              </div>
                    </div>
          )
}

export default BoardTwo

