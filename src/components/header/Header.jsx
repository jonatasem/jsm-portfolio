import "./Header.scss";

import imgAutor from "../../assets/img/my-profile-img.jpg";

//icons redes sociais
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

//icons link
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaImages } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";

export default function Header() {
  return (
    <header id="header" class="container-header dark-background">
      <div class="profile-img">
        <img src={imgAutor} alt="imagem do autor" />
      </div>

      <h1 class="sitename">Jonatas Moreira</h1>

      <div class="social-links">
        <a href="https://github.com/jonatasem" class="github">
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100079143820691"
          class="facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/jonatasemoreira01/"
          class="instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/5518991937096?text=Ol%C3%A1%20Jonatas"
          class="whatsapp"
        >
          <FaWhatsapp />
        </a>
        <a href="https://www.figma.com" class="figma">
          <FaFigma />
        </a>
      </div>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li>
            <a href="#home" class="active">
              <FaHome className="icon" />
              Home
            </a>
          </li>
          <li>
            <a href="#about">
              <FaUser className="icon" />
              About
            </a>
          </li>
          <li>
            <a href="#resume">
              <FaFileAlt className="icon" />
              Resume
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <FaImages className="icon" />
              Portfolio
            </a>
          </li>
          <li>
            <a href="#skills">
              <FaBarsProgress className="icon" />
              Skills
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
