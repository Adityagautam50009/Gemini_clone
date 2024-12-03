import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";
import Card from "../Card/Card";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    newChat,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p onClick={() => newChat()}>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <Card
                text={`Suggest beautiful places to see on an upcoming road trip`}
                image={assets.compass_icon}
              />
              <Card
                text={`Briefly summarize this concept: urban planning`}
                image={assets.bulb_icon}
              />
              <Card
                text={`Brainstrom team bonding activities for our work retreat`}
                image={assets.message_icon}
              />
              <Card
                text={`improve the readability of the following code`}
                image={assets.code_icon}
              />
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                // <pre>
                //   <code dangerouslySetInnerHTML={{__html:resultData}}>

                //   </code>
                // </pre>

                <p
                  dangerouslySetInnerHTML={{
                    __html: resultData,
                  }}
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter the prompt here"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <div>
              <img src={assets.send_icon} alt="" onClick={() => onSent()} />
            </div>
          </div>
          <p className="bottom-info">
            Gemini can make mistakes, so double check it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
