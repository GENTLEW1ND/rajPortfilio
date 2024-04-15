import { useEffect } from "react";
import gitImg from "./assets/gitImg.png";
import xcrptoImg from "./assets/Xcrypto.png";
import caffixelImg from "./assets/caffixel.png";
import "./featured.css";
import "./util.css"
import Aos from "aos";
import "aos/dist/aos.css";

const projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="parent-card container">
      <div className="card container"  data-aos="fade-right">
        <div className="card-box ">
        <h3 className="featured__sub">Upcoming Project</h3>
          <img src={caffixelImg} alt="image" />
          <div className="featured__wrapper">
            <div className="inner__wrapper">
              <h2 className="featured__title">Caffixel</h2>
              <a className="featured__link" href="https://" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <p className="featured__description">
              A Non-Fungible Token (NFT) marketplace is a digital platform where
              individuals can buy, sell, and trade NFTs. NFTs are unique digital
              assets that represent ownership or proof of authenticity of a
              specific item or piece of content, often using blockchain
              technology.
            </p>
          </div>
        </div>
      </div>

      <div className="card"  data-aos="fade-left">
        <div className="card-box" >
          <img src={gitImg} alt="" />

          <div className="featured__wrapper">
            <div className="inner__wrapper">
              <h2 className="featured__title">Personalized github</h2>
              <a
                className="featured__link"
                href="https://mern-git-app.onrender.com/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <p className="featured__description">
              A personalized GitHub page with login functionality to the main
              GitHub account, featuring a search function for any GitHub
              account, and allowing users to view repositories.
            </p>
          </div>
        </div>
      </div>

      <div className="card" data-aos="fade-right">
        <div className="card-box" >
          <img src={xcrptoImg} alt="" />

          <div className="featured__wrapper">
            <div className="inner__wrapper">
              <h2 className="featured__title">Crypto coin</h2>
              <a
                className="featured__link"
                href="https://cryptocoin-blue.vercel.app/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <p className="featured__description">
              Crypto Coin is a website that aggregates information from various
              exchanges and provides details about different types of
              cryptocurrencies based on blockchain technology. It includes graph
              functionalities to visualize data trends, including the present
              price of each particular coin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
