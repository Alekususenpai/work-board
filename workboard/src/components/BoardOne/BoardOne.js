import React from 'react'
import './BoardOne.css';

const BoardOne = () => {
          return (
                    <div class="board" id="one">

                              <div class="card">
                                        <div class="big-year" id="yearNum">
                                        </div>
                                        <span class="triangle-left">
                                        </span>
                                        <span class="triangle-right">
                                        </span>
                                        <div class="months">
                                        </div>
                                        <hr class="month-line" />
                                        <table class="calendar-table" id="calendar">
                                                  <thead>
                                                            <tr>
                                                                      <th class="days-of-week">Sun</th>
                                                                      <th class="days-of-week">Mon</th>
                                                                      <th class="days-of-week">Tue</th>
                                                                      <th class="days-of-week">Wed</th>
                                                                      <th class="days-of-week">Thu</th>
                                                                      <th class="days-of-week">Fri</th>
                                                                      <th class="days-of-week">Sat</th>
                                                            </tr>
                                                  </thead>
                                                  <tbody id="calendar-body">
                                                  </tbody>
                                        </table>
                              </div>

                              <div class="quote">
                                        <h2>Little bit of motivation</h2>
                                        <div id="message" class="message"></div>
                                        <div class="btndiv"><button id="messageBtn" class="btn">Hit me!</button></div>
                              </div>

                    </div>
          )
}

export default BoardOne

