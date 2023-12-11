import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1 className="about-content-h1">ABOUT US</h1>
      </div>
      <div className="about-content">
        <p className="about-content-text">
          orem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          sollicitudin turpis tempus urna hendrerit tempor. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Cras accumsan quis diam vitae
          lobortis. Vivamus sollicitudin sem dolor, vel commodo purus elementum
          quis. Integer consequat metus et sodales varius. Donec venenatis quam
          et quam blandit, nec convallis orci tincidunt. Proin tempus magna
          tincidunt mauris aliquam tempus Pellentesque efficitur eros non
          ultrices sagittis. Proin a purus vel neque consectetur rutrum. Aliquam
          euismod orci in leo scelerisque dapibus. Cras mattis sem enim, at
          volutpat enim blandit nec. Sed eros elit, dignissim sed diam a, ornare
          egestas nulla. Ut condimentum justo lorem, nec efficitur urna ultrices
          vitae. Donec id condimentum dolor, sit amet ornare augue. Vestibulum
          placerat auctor ipsum. Nunc aliquam sed augue sit amet molestie. Sed
          interdum, nulla eget congue gravida, felis lacus euismod diam, eget
          fringilla purus dolor et ex. Mauris imperdiet id lectus sit amet
          eleifend. Nulla ultrices nulla at ex pellentesque, a finibus ante
          porttitor. Nulla facilisi. Curabitur non urna ut risus dapibus
          viverra. Integer massa odio, auctor quis ligula id, elementum
          vestibulum orci. Proin et enim a massa dapibus sodales sit amet in
          metus. Ut venenatis, nibh at cursus posuere, augue purus cursus
          ligula, vel auctor dolor massa eget nisl.
        </p>
        <div className="about-content-grids">
          <div className="about-content-grid grid1">
            orem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            sollicitudin turpis tempus urna hendrerit tempor. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Cras accumsan quis diam vitae
            lobortis. Vivamus sollicitudin sem dolor, vel commodo purus
            elementum quis. Integer consequat metus et sodales varius. Donec
            venenatis quam et quam blandit, nec convallis orci tincidunt. Proin
            tempus magna tincidunt mauris aliquam tempus Pellentesque efficitur
            eros non ultrices sagittis. Proin a purus vel neque consectetur

            rutrum. Aliquam euismod orci in leo scelerisque dapibus. Cras mattis
            sem enim, at volutpat enim blandit nec. Sed eros elit, dignissim sed
            diam a, ornare egestas nulla. Ut condimentum justo lorem, nec
            efficitur urna ultrices vitae. Donec id condimentum dolor, sit amet
            ornare augue. Vestibulum placerat auctor ipsum. Nunc aliquam sed
            augue sit amet molestie. Sed interdum, nulla eget congue gravida,
            felis lacus euismod diam, eget fringilla purus dolor et ex. Mauris

            imperdiet id lectus sit amet eleifend. Nulla ultrices nulla at ex
            pellentesque, a finibus ante porttitor. Nulla facilisi. Curabitur
            non urna ut risus dapibus viverra. Integer massa odio, auctor quis
            ligula id, elementum vestibulum orci. Proin et enim a massa dapibus
            sodales sit amet in metus. Ut venenatis, nibh at cursus posuere,
            augue purus cursus ligula, vel auctor dolor massa eget nisl.{" "}
          </div>
          <div className="about-content-grid grid2">
            <h2 className="grid2-h2">FOUNDERS</h2>
          </div>
        </div>
        <div className="about-contact">
          <h1 className="about-contact-h1">CONTACT US</h1>
          <div className="about-contact-div">Phone: +91 9889 80008</div>
          <div className="about-contact-div">Mail: logo@arch.com</div>
        </div>
      </div>
    </div>
  );
};

export default About;
