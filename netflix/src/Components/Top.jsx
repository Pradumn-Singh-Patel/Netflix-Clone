import React, { useState } from "react";
import "./Top.css";
import Video_tv from "../assets/Video_tv.m4v";

function Top() {
  const [value, setvalue] = useState(window.innerWidth);
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;
  function displayWindowSize() {
    setvalue(window.innerWidth);
  }
  return (
    <>
      <header className="top_most">
        <div className="title">
          <img src="https://i.ibb.co/r5krrdz/logo.png" alt="logo" />
          <div className="sign_in">
            <a href="#" className="btn">
              Sign In
            </a>
          </div>
        </div>
        <div className="content">
          <h1>
            Unlimited movies,TV
            <br />
            shows and more.
          </h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <span>
            Ready to watch? Enter your email to {value < 600 ? <br /> : ""}
            create or restart
            {value < 900 && value > 600 ? <br /> : ""} your membership.
          </span>
          <div className="email">
            <input type="email" placeholder="Email address" />
            <div className="btn">
              <a href="#" className="get_started">
                Get Started <i class="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="cards">
        <div className="container">
          <div className="card_1">
            <div className="text">
              <h1>Enjoy on your TV.</h1>
              <p>
                Watch on smart TVs, PlayStation, Xbox,{" "}
                {value > 900 ? <br /> : ""} Chromecast, Apple TV, Blu-ray
                players and <br /> more.
              </p>
            </div>
            <div className="video">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                alt="card_1"
              />
              <video class="card-video-1" autoPlay playsinline muted loop>
                <source src={Video_tv} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="card_2">
            {value < 900 ? (
              <>
                <div className="text">
                  <h1>Download your shows to watch offline.</h1>
                  <p>
                    Save your favourites easily and always have something to
                    watch.
                  </p>
                </div>
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                  alt="card_2"
                />
              </>
            ) : (
              <>
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                  alt="card_2"
                />
                <div className="text">
                  <h1>
                    Download your shows <br /> to watch offline.
                  </h1>
                  <p>
                    Save your favourites easily and always have
                    <br /> something to watch.
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="card_3">
            <div className="text">
              <h1>Watch everywhere.</h1>
              <p>
                Stream unlimited movies and TV shows on{" "}
                {value > 900 ? <br /> : ""} your phone, tablet, laptop, and TV.
              </p>
            </div>
            <div className="video">
              <img
                src="	https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
                alt="card_3"
              />
              <video class="card-video-3" autoPlay playsinline muted loop>
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="card_4">
            {value < 900 ? (
              <>
                <div className="text">
                  <h1>Create profiles for children.</h1>
                  <p>
                    Send children on adventures with their favourite characters
                    in a space made just for them <br />
                    —free with your membership.
                  </p>
                </div>
                <img
                  src="https://occ-0-3752-3647.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf"
                  alt="card_4"
                />
              </>
            ) : (
              <>
                <img
                  src="https://occ-0-3752-3647.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf"
                  alt="card_4"
                />
                <div className="text">
                  <h1>
                    Create profiles for <br /> children.
                  </h1>
                  <p>
                    Send children on adventures with their <br /> favourite
                    characters in a space made just for <br /> them—free with
                    your membership.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Top;
