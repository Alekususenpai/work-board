import React from 'react'
import './BoardThree.css';

const BoardThree = () => {
          return (
                    <div className="board" id="three">
                              <div className="main">
                                        <h2>TO-DO LIST</h2>
                                        <form className="" action="index.html" method="post">
                                                  <input type="text" placeholder="Add a new task" name="task"></input>
                                                  <button type="submit">ADD</button>
                                        </form>
                                        <div className="tasksBoard">
                                                  <ul>
                                                            <li>
                                                                      <span className="delete">x</span>
                                                                      <input type="checkbox"></input>
                                                                      <label>Read one chapter</label>
                                                            </li>
                                                            <li><span className="delete">x</span><input
                                                                      type="checkbox"></input><label>Update
                                                                                project</label>
                                                            </li>
                                                            <li><span className="delete">x</span><input
                                                                      type="checkbox"></input><label>Write a
                                                                                mail</label>
                                                            </li>

                                                  </ul>
                                                  <button id="clear">Clear</button>
                                        </div>
                              </div>

                    </div>
          )
}

export default BoardThree

