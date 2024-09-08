import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faFemale,
  faGlassCheers,
  faMale,
} from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons/faMusic";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import image1 from "./assets/portraits/img1.jpg";
import image2 from "./assets/portraits/img2.jpg";
import image3 from "./assets/portraits/img3.jpg";
import image4 from "./assets/portraits/img4.jpg";
import image5 from "./assets/portraits/img5.jpg";
import image6 from "./assets/portraits/img6.jpg";

function App() {
  const [timerData, setTimerData] = useState({
    total: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isEventOver: false,
  });
  const getTimeRemaining = (e) => {
    const total = Date.parse(new Date("2024-12-10")) - Date.parse(new Date());
    const days = Math.floor(total / 1000 / 60 / 60 / 24);
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const isEventOver = total === 0;
    setTimerData({
      total,
      days,
      hours,
      minutes,
      seconds,
      isEventOver,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getTimeRemaining();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const slideItems = [
    {
      imageSrc: image1,
      label: "Sister",
    },
    {
      imageSrc: image2,
      label: "Brother",
    },
    {
      imageSrc: image3,
      label: "Sister",
    },
    {
      imageSrc: image4,
      label: "Aunt",
    },
    {
      imageSrc: image5,
      label: "Father",
    },
  ];

  return (
    <div className="App">
      <div className="mainContainer">
        <div className="leftContainer text-center p-3 d-flex flex-column justify-content-center align-items-center">
          <h1 className="mt-5">Asudi & Nishant</h1>
          <h4 className="text-capitalize mt-3">We are getting Married!</h4>
          <p>On 8th December 2024</p>
          <div className="mt-4">
            <div className="d-flex gap-3 text-center">
              {timerData?.isEventOver ? (
                <>
                  <h4>Bless the Happy Couple for married life ahead.</h4>
                </>
              ) : (
                <>
                  <div className="timer-body flex-column justify-content-center align-items-center">
                    <span>{timerData?.days || 0}</span> <p>Days</p>
                  </div>
                  <div className="timer-body flex-column justify-content-center align-items-center">
                    <span>{timerData?.hours || 0}</span> <p>Hours</p>
                  </div>
                  <div className="timer-body flex-column justify-content-center align-items-center">
                    <span>{timerData?.minutes || 0}</span> <p>Minutes</p>
                  </div>
                  <div className="timer-body flex-column justify-content-center align-items-center">
                    <span>{timerData?.seconds || 0}</span> <p>Seconds</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="rightContainer p-3">
          <section className="d-flex flex-column justify-content-center align-items-center">
            <div className="p-3 d-flex flex-column justify-content-center align-items-center text-center">
              <h3>EVENTS</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores quae porro consequatur aliquam, incidunt eius magni
                provident, doloribus omnis minus ovident, doloribus omnis minus
                temporibus perferendis nesciunt..
              </p>
            </div>
            <div className="d-flex">
              <div className="w-50 p-4 d-flex flex-column justify-content-center align-items-center text-center">
                <div>
                  <FontAwesomeIcon
                    icon={faBookmark}
                    color="#c58ced"
                    fontSize={50}
                  />
                </div>
                <div className="mt-3 card-body">
                  <h5>Engagement</h5>
                  <p>
                    Lorem ipsum dolor sitamet, consec tetur adipisicing elit.
                    Dolores quae porro consequatur aliquam, incidunt eius magni
                    provident
                  </p>
                </div>
              </div>
              <div className="w-50 p-4 d-flex flex-column justify-content-center align-items-center text-center">
                <div>
                  <FontAwesomeIcon
                    icon={faMusic}
                    color="#c58ced"
                    fontSize={50}
                  />
                </div>
                <div className="mt-3 card-body">
                  <h5>Haldi</h5>
                  <p>
                    Lorem ipsum dolor sitamet, consec tetur adipisicing elit.
                    Dolores quae porro consequatur aliquam, incidunt eius magni
                    provident
                  </p>
                </div>
              </div>
              <div></div>
            </div>
            <div className="d-flex">
              <div className="w-50 p-4 d-flex flex-column justify-content-center align-items-center text-center">
                <div>
                  <FontAwesomeIcon
                    icon={faMale}
                    color="#c58ced"
                    fontSize={50}
                  />
                  <FontAwesomeIcon
                    icon={faFemale}
                    color="#c58ced"
                    fontSize={50}
                  />
                </div>
                <div className="mt-3 card-body">
                  <h5>Wedding</h5>
                  <p>
                    Lorem ipsum dolor sitamet, consec tetur adipisicing elit.
                    Dolores quae porro consequatur aliquam, incidunt eius magni
                    provident
                  </p>
                </div>
              </div>
              <div className="w-50 p-4 d-flex flex-column justify-content-center align-items-center text-center">
                <div>
                  <FontAwesomeIcon
                    icon={faGlassCheers}
                    color="#c58ced"
                    fontSize={50}
                  />
                </div>
                <div className="mt-3 card-body">
                  <h5>Reception</h5>
                  <p>
                    Lorem ipsum dolor sitamet, consec tetur adipisicing elit.
                    Dolores quae porro consequatur aliquam, incidunt eius magni
                    provident
                  </p>
                </div>
              </div>
              <div></div>
            </div>
            <div className="p-3 d-flex flex-column justify-content-center align-items-center text-center">
              <h3>About Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores quae porro consequatur aliquam, incidunt eius magni
                provident, doloribus omnis minus ovident, doloribus omnis minus
                temporibus perferendis nesciunt..
              </p>
            </div>
            <div className="p-3 d-flex flex-column justify-content-center align-items-center text-center">
              <h3>Venue</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores quae porro consequatur aliquam, incidunt eius magni
                provident, doloribus omnis minus ovident, doloribus omnis minus
                temporibus perferendis nesciunt..
              </p>
            </div>
            <div className="p-3 d-flex flex-column justify-content-center align-items-center text-center">
              <h3>Chandrakar Family Welcomes you..</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores quae porro consequatur aliquam, incidunt eius magni
                provident, doloribus omnis minus ovident, doloribus omnis minus
                temporibus perferendis nesciunt..
              </p>
              <div className="carousel-card card-body">
                <Carousel variant="dark">
                  {slideItems?.map((el) => {
                    return (
                      <Carousel.Item interval={3000}>
                        <img src={el?.imageSrc} />
                        <Carousel.Caption>
                          <h6>{el?.label}</h6>
                        </Carousel.Caption>
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </section>
        </div>
      </div>
      <p className="text-center copyright-text">
        Copyright 2024 All Rights Reserved. - YKC
      </p>
    </div>
  );
}

export default App;
