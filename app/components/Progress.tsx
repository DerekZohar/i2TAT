import React from "react";

export default function Progress() {
  return (
    <div className="container">
      <header>
        <h1>
          Pure <strong>CSS</strong> Progress
        </h1>
        <p>... a pretty liquid progress-bar.</p>
      </header>
      <section>
        <article>
          <input type="radio" name="switch-color" id="red" defaultChecked />
          <input type="radio" name="switch-color" id="cyan" />
          <input type="radio" name="switch-color" id="lime" />
          <div className="chart">
            <div className="bar bar-75 white">
              <div className="face top">
                <div className="growing-bar" />
              </div>
              <div className="face side-0">
                <div className="growing-bar" />
              </div>
              <div className="face floor">
                <div className="growing-bar" />
              </div>
              <div className="face side-a" />
              <div className="face side-b" />
              <div className="face side-1">
                <div className="growing-bar" />
              </div>
            </div>
          </div>
          <p>Try another color :)</p>
          <nav className="actions">
            <label htmlFor="red">Red</label>
            <label htmlFor="cyan">Cyan</label>
            <label htmlFor="lime">Lime</label>
          </nav>
        </article>
        <article>
          <input type="radio" name="switch-pos" id="pos-0" />
          <input type="radio" name="switch-pos" id="pos-1" />
          <input type="radio" name="switch-pos" id="pos-2" defaultChecked />
          <input type="radio" name="switch-pos" id="pos-3" />
          <div className="chart">
            <div className="bar bar-30 white">
              <div className="face top">
                <div className="growing-bar" />
              </div>
              <div className="face side-0">
                <div className="growing-bar" />
              </div>
              <div className="face floor">
                <div className="growing-bar" />
              </div>
              <div className="face side-a" />
              <div className="face side-b" />
              <div className="face side-1">
                <div className="growing-bar" />
              </div>
            </div>
          </div>
          <p>Try another position :)</p>
          <nav className="actions">
            <label htmlFor="pos-0">1/4</label>
            <label htmlFor="pos-1">2/4</label>
            <label htmlFor="pos-2">3/4</label>
            <label htmlFor="pos-3">Full</label>
          </nav>
        </article>
        <article>
          <input type="radio" name="exercises" id="exercise-1" defaultChecked />
          <input type="radio" name="exercises" id="exercise-2" />
          <input type="radio" name="exercises" id="exercise-3" />
          <input type="radio" name="exercises" id="exercise-4" />
          <div className="chart grid">
            <div className="exercise second">
              <div className="bar bar-45 navy lightGray-face">
                <div className="face top">
                  <div className="growing-bar" />
                </div>
                <div className="face side-0">
                  <div className="growing-bar" />
                </div>
                <div className="face floor">
                  <div className="growing-bar" />
                </div>
                <div className="face side-a" />
                <div className="face side-b" />
                <div className="face side-1">
                  <div className="growing-bar" />
                </div>
              </div>
              <div className="bar bar-80 yellow lightGray-face">
                <div className="face top">
                  <div className="growing-bar" />
                </div>
                <div className="face side-0">
                  <div className="growing-bar" />
                </div>
                <div className="face floor">
                  <div className="growing-bar" />
                </div>
                <div className="face side-a" />
                <div className="face side-b" />
                <div className="face side-1">
                  <div className="growing-bar" />
                </div>
              </div>
              <div className="bar bar-60 red lightGray-face">
                <div className="face top">
                  <div className="growing-bar" />
                </div>
                <div className="face side-0">
                  <div className="growing-bar" />
                </div>
                <div className="face floor">
                  <div className="growing-bar" />
                </div>
                <div className="face side-a" />
                <div className="face side-b" />
                <div className="face side-1">
                  <div className="growing-bar" />
                </div>
              </div>
            </div>
          </div>
          <p>
            <em>Its liquid</em>, so adding a bit of code you can make charts
            like this :P
          </p>
          <nav className="actions">
            <label htmlFor="exercise-1">E-1</label>
            <label htmlFor="exercise-2">E-2</label>
            <label htmlFor="exercise-3">E-3</label>
            <label htmlFor="exercise-4">E-4</label>
          </nav>
        </article>
      </section>
    </div>
  );
}
