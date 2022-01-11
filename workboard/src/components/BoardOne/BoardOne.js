import React from 'react'
import './BoardOne.css';

const BoardOne = () => {
          return (
                    <div className="board" id="one">

                              <div className="card">
                                        <div className="big-year" id="yearNum">
                                        </div>
                                        <span className="triangle-left">
                                        </span>
                                        <span className="triangle-right">
                                        </span>
                                        <div className="months">
                                        </div>
                                        <hr className="month-line" />
                                        <table className="calendar-table" id="calendar">
                                                  <thead>
                                                            <tr>
                                                                      <th className="days-of-week">Sun</th>
                                                                      <th className="days-of-week">Mon</th>
                                                                      <th className="days-of-week">Tue</th>
                                                                      <th className="days-of-week">Wed</th>
                                                                      <th className="days-of-week">Thu</th>
                                                                      <th className="days-of-week">Fri</th>
                                                                      <th className="days-of-week">Sat</th>
                                                            </tr>
                                                  </thead>
                                                  <tbody id="calendar-body">
                                                  </tbody>
                                        </table>
                              </div>

                              <div className="quote">
                                        <h2>Little bit of motivation</h2>
                                        <div id="message" className="message"></div>
                                        <div className="btndiv"><button id="messageBtn" className="btn">Hit me!</button></div>
                              </div>

                    </div>
          )
}

export default BoardOne

