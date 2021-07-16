import React, { useState } from "react";
import "./Top.css";
import Video_tv from "../assets/Video_tv.m4v";
import Faq from "../Components/Global/Faq";

function Top() {
  const [value, setvalue] = useState(window.innerWidth);
  const [height, setheight] = useState("");
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;
  function displayWindowSize() {
    setvalue(window.innerWidth);
  }

  // function clicked() {
  //   {
  //     height == "" ? setheight("38rem") : setheight("");
  //   }
  // setstyles("block");

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
              <video class="card-video-1" autoPlay playsInline muted loop>
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
              <video class="card-video-3" autoPlay playsInline muted loop>
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
      <section className="question" style={{ height: height }}>
        <div className="header">
          <h1>Frequently Asked Questions</h1>
        </div>
        <Faq
          question="What is Netflix?"
          answer=" Netflix is a streaming service that offers a wide variety 
          award- winning TV shows, movies, anime, documentaries and  more
          – on thousands of internet-connected devices.  You can
          watch as much as you want, whenever you want,
        
          without a single ad – all for one low monthly price. There 
          always something new to discover, and new TV shows and movies
          are added every week!"
        />
        <Faq
          question="How much does Netflix cost?"
          answer="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts."
        />
        <Faq
          question="Where can I watch?"
          answer="Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
        />
        <Faq
          question="How do I cancel?"
          answer="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        />
        <Faq
          question="What can I watch on Netflix?"
          answer="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
        />
        <Faq
          question="Is Netflix good for kids?"
          answer="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
        />
      </section>
    </>
  );
}

export default Top;
