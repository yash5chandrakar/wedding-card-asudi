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
import logo from "./assets/Asmita_&_Nishant_Logo[1]_page-0001.jpg";
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
        <div className="leftContainer text-center p-3 d-flex flex-column justify-content-end align-items-center">
          <div className="left-text">
            <img src={logo} width={'200px'} />
            <div className="mt-4">
              <div className="d-flex gap-3 text-center">
                {timerData?.isEventOver ? (
                  <>
                    <h4>Bless the Happy Couple for married life ahead</h4>
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
        </div>
        <div className="rightContainer p-3">
          <section className="d-flex flex-column justify-content-center align-items-center">
            <div className="p-3 d-flex flex-column justify-content-center align-items-center text-center">
              <img className="" src={logo} width={'150px'} />
            </div>
            <div className="card-flow">
              <div className="w-50 p-4 d-flex flex-column justify-content-center align-items-center text-center">
                <div>
                  <FontAwesomeIcon
                    icon={faBookmark}
                    color="#c58ced"
                    fontSize={50}
                  />
                </div>
                <div className="mt-3 card-body">
                  <h5>✨ Haldi ✨</h5>
                  <div>
                    Let’s add a splash of color and shower them with happiness as they take this beautiful step toward a lifetime of togetherness.
                    <div className="d-flex justify-content-center gap-2 dateContainer align-items-center">
                      <div className="startDate">&nbsp;<strong>December</strong>&nbsp;</div>
                      <div><strong>09</strong></div>
                      <div className="startDate">&nbsp;<strong>2024</strong>&nbsp;</div>
                    </div>
                    <div className="dateContainer">
                      <strong>Time :</strong> 10 am Onwards
                    </div>
                  </div>
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
                  <h5 >🎶 Sangeet Night🎶</h5>
                  <div>
                    Get ready for a night filled with music, dance, and celebration as we gather to honor the love of Asmita & Nishant! <br /><br />
                    <div className="d-flex justify-content-center gap-2 dateContainer align-items-center">
                      <div className="startDate">&nbsp;<strong>December</strong>&nbsp;</div>
                      <div><strong>09</strong></div>
                      <div className="startDate">&nbsp;<strong>2024</strong>&nbsp;</div>
                    </div>
                    <div className="dateContainer">
                      <strong>Time :</strong> 8 pm Onwards
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-flow">
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
                  <h5>✨💍Wedding 💍✨</h5>
                  <div>
                    Join us for a day of love, joy, and celebration as Asmita & Nishant exchange their vows and begin their journey together as a married couple. <br/><br/>
                    <div className="d-flex justify-content-center gap-2 dateContainer align-items-center">
                      <div className="startDate">&nbsp;<strong>December</strong>&nbsp;</div>
                      <div><strong>10</strong></div>
                      <div className="startDate">&nbsp;<strong>2024</strong>&nbsp;</div>
                    </div>
                    <div className="dateContainer">
                      <strong>Time :</strong> 12 pm Onwards
                    </div>
                  </div>
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
                  <h5>🎉 Reception 🎉</h5>
                  <div>
                    Join us as we toast to the new beginning of Asmita & Nishant's Life & come together to celebrate their love with joy, laughter, and heartfelt toasts.  <br/><br/>
                    <div className="d-flex justify-content-center gap-2 dateContainer align-items-center">
                      <div className="startDate">&nbsp;<strong>December</strong>&nbsp;</div>
                      <div><strong>10</strong></div>
                      <div className="startDate">&nbsp;<strong>2024</strong>&nbsp;</div>
                    </div>
                    <div className="dateContainer">
                      <strong>Time :</strong> 8 pm Onwards
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="p-3 d-flex flex-column justify-content-start align-items-center">
              <h3>🌟 You're Invited! 🌟</h3>
              <p>
                We are thrilled to announce that our special event will take place at the elegant Samaira Inn Hotel, located in the heart of Pragati Nagar, Risali, Bhilai, Chhattisgarh. <br /><br />
                <p className="text-center">
                  📍 Venue: Samaira Inn Hotel. <br />
                  🏙️ Address: Pragati Nagar, Risali, Bhilai, Chhattisgarh.<br /> <br />
                </p>
                <div className=" d-flex justify-content-center mt-4 ">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.6598121534303!2d81.32890277529839!3d21.16593238305302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293df022fdd9ef%3A0x94500eb4406e7b99!2sSamaira%20Inn!5e0!3m2!1sen!2sin!4v1726416293218!5m2!1sen!2sin"
                    width="300"
                    height="250"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className="mapFrame"
                  ></iframe>
                </div>
              </p>
            </div>
            <div className="p-3 d-flex flex-column justify-content-center align-items-center">
              <h3 className="text-center">✨ Chandrakar Family ✨ <br/>✨ Cordially Welcomes You ✨</h3>
              <p>
                With hearts full of joy and gratitude, we welcome you to join us as we celebrate the union of our beloved Asmita & Nishant.
                As two souls embark on a beautiful journey together, your presence adds to the love, laughter, and cherished moments that will make this day truly special.
                We are honored to have you share in our joy and look forward to celebrating this joyous occasion with you!
                <p className="text-center mt-4">
                  🌸<br /> With Warm Regards,<br />
                  The Chandrakar Family
                </p>
              </p>
              {/* <div className="carousel-card card-body d-flex justify-content-center">
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
              </div> */}
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
