import React, { useState, useMemo } from "react";
import "./style.scss";

export default function DonateWidget(props) {
  const [count, setCount] = useState(0);
  const [priceSum, setPriceSum] = useState(0);
  const { min, max, limit } = props;

  function handleSubmit(evt) {
    evt.preventDefault();
    setCount(count + 1);
    setPriceSum(Number(priceSum) + Number(evt.target.donate.value));
    evt.target.reset();
  }

  const percent = useMemo(
    () => (Number(priceSum) / Number(limit)) * 100,
    [priceSum, limit]
  );

  return (
    <div className="donate_widget">
      <form onSubmit={handleSubmit}>
        {priceSum < limit && (
          <div className="donate_widget-tooltip">
            <sup>$</sup>
            <b>{limit - priceSum}</b> still needed to fund this project
          </div>
        )}
        <div className="donate_widget-header">
          <div
            className="donate_widget-header-progress"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
        <div className="donate_widget-content">
          <h3 className="donate_widget-content-title">
            Only four days left to fund this project
          </h3>
          <p className="donate_widget-content-label">
            Join the <b>{count}</b> other donors who have already supported this
            project
          </p>
          <div className="donate_widget-content-action">
            <span class="donate_widget-content-action-prefix">$</span>
            <input
              type="number"
              className="donate_widget-content-action-input"
              min={min}
              max={max}
              required
              name="donate"
            ></input>
            <button className="donate_widget-content-action-btn" type="submit">
              Give Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
