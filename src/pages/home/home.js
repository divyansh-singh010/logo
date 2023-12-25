import React from "react";
import "./home.css";
import { useNavigate } from 'react-router-dom';

const FeedbackButton = () => {
  const navigate = useNavigate();

const handleClick = () => {
    // Redirect to the /feedback route
    navigate('/feedback');
  };

const Home = () => {
  return (
    <div className="home">
      <div className="home-image">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="logo" />
        <div className="home-image-text">
          <h1 className="home-image-text-head">LOGO</h1>
        </div>
        <div className="home-image-socialmedia">
          <svg
            width="146"
            height="146"
            viewBox="0 0 146 146"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M73 2.91992C34.2954 2.91992 2.92001 34.2953 2.92001 72.9999C2.92001 111.705 34.2954 143.08 73 143.08C111.705 143.08 143.08 111.705 143.08 72.9999C143.08 34.2953 111.705 2.91992 73 2.91992ZM89.6002 51.3481H79.0663C77.818 51.3481 76.431 52.9906 76.431 55.1733V62.7799H89.6075L87.6146 73.6277H76.431V106.193H63.9991V73.6277H52.7206V62.7799H63.9991V56.3997C63.9991 47.2455 70.3501 39.8068 79.0663 39.8068H89.6002V51.3481Z"
              fill="black"
            />
          </svg>
          <svg
            width="142"
            height="94"
            viewBox="0 0 142 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M127.46 23.468C127.522 24.484 127.545 25.5126 127.545 26.5285C127.545 57.8233 98.2424 93.897 44.6605 93.897C28.1993 93.897 12.8958 89.9773 0 83.2542C7.62768 84.0038 15.3624 83.5245 22.762 81.8436C30.1616 80.1628 37.081 77.3133 43.1248 73.4582C37.0467 73.3648 31.1564 71.7303 26.2775 68.7831C21.3987 65.8359 17.775 61.7234 15.9133 57.0206C20.2818 57.6844 24.7778 57.5452 29.0714 56.6129C22.4778 55.5264 16.5492 52.6207 12.2903 48.3882C8.03144 44.1558 5.70427 38.8569 5.70315 33.3896V33.0948C9.74858 34.9236 14.273 35.9406 18.8999 36.0612C12.725 32.7159 8.35389 27.5816 6.67876 21.7064C5.00362 15.8312 6.15074 9.65789 9.88598 4.44658C17.2004 11.762 26.3267 17.7453 36.6721 22.0077C47.0174 26.2702 58.3505 28.7164 69.935 29.1876C69.4338 27.4167 69.1827 25.6051 69.1864 23.7879C69.1864 20.68 69.9398 17.6025 71.4036 14.7312C72.8674 11.86 75.0129 9.25119 77.7175 7.05385C80.4222 4.85651 83.633 3.11369 87.1666 1.92491C90.7002 0.736134 94.4874 0.124696 98.3118 0.12552C102.298 0.120238 106.242 0.780515 109.901 2.06539C113.56 3.35027 116.854 5.23235 119.581 7.59488C126.103 6.54564 132.358 4.60308 138.08 1.85018C135.904 7.33275 131.351 11.9863 125.269 14.9451C131.043 14.3888 136.683 13.1331 142 11.2198C138.094 15.9763 133.169 20.1248 127.46 23.468Z"
              fill="black"
            />
          </svg>
          <svg
            width="110"
            height="117"
            viewBox="0 0 110 117"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.2216 76.7322C41.5028 92.7082 36.9709 108.023 23.5307 116.022C19.3877 91.8786 29.618 73.7505 34.3762 54.5028C26.2668 43.3069 35.3518 20.7874 52.4401 26.339C73.4735 33.161 34.2277 67.9437 60.5707 72.2945C88.0802 76.8251 99.3074 33.1378 82.2474 18.9311C57.6083 -1.59279 10.5148 18.4496 16.3122 47.8317C17.7192 55.0133 26.7617 57.1887 19.925 67.1026C4.15175 64.2369 -0.5569 54.0271 0.0511233 40.418C1.02679 18.1422 24.4357 2.55492 47.9224 0.391149C77.6236 -2.34112 105.501 9.34208 109.354 32.2618C113.688 58.14 95.9492 86.1705 64.1835 84.1517C55.5722 83.6006 51.9664 80.0968 45.2216 76.7322Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div className="home-text">
        orem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        sollicitudin turpis tempus urna hendrerit tempor. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Cras accumsan quis diam vitae
        lobortis. Vivamus sollicitudin sem dolor, vel commodo purus elementum
        quis. Integer consequat metus et sodales varius. Donec venenatis quam et
        quam blandit, nec convallis orci tincidunt. Proin tempus magna tincidunt
        mauris aliquam tempus Pellentesque efficitur eros non ultrices sagittis.
        Proin a purus vel neque consectetur rutrum. Aliquam euismod orci in leo
        scelerisque dapibus. Cras mattis sem enim, at volutpat enim blandit nec.
        Sed eros elit, dignissim sed diam a, ornare egestas nulla. Ut
        condimentum justo lorem, nec efficitur urna ultrices vitae. Donec id
        condimentum dolor, sit amet ornare augue. Vestibulum placerat auctor
        ipsum. Nunc aliquam sed augue sit amet molestie. Sed interdum, nulla
        eget congue gravida, felis lacus euismod diam, eget fringilla purus
        dolor et ex. Mauris imperdiet id lectus sit amet eleifend. Nulla
        ultrices nulla at ex pellentesque, a finibus ante porttitor. Nulla
        facilisi. Curabitur non urna ut risus dapibus viverra. Integer massa
        odio, auctor quis ligula id, elementum vestibulum orci. Proin et enim a
        massa dapibus sodales sit amet in metus. Ut venenatis, nibh at cursus
        posuere, augue purus cursus ligula, vel auctor dolor massa eget nisl.{" "}
      </div>
      <div className="home-grids">
        <div className="home-grid">
          <div className="home-grid-text">
            <h1 className="home-grid-text-head">PROJECT TITLE</h1>
            <p className="home-grid-text-para">
              orem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              sollicitudin turpis tempus urna hendrerit tempor. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Cras accumsan quis
              diam vitae lobortis. Vivamus sollicitudin sem dolor, vel commodo
              purus elementum quis. Integer consequat metus et sodales varius.
              Donec venenatis quam et quam blandit, nec convallis orci
              tincidunt. Proin tempus magna tincidunt mauris aliquam tempus
              Pellentesque efficitur eros non ultrices sagittis. Proin a purus
              vel neque consectetur rutrum. Aliquam euismod orci in leo
              scelerisque dapibus. Cras mattis sem enim, at volutpat enim
              blandit nec. Sed eros elit, dignissim sed diam a, ornare egestas
              nulla. Ut condimentum justo lorem, nec efficitur urna ultrices
              vitae. Donec id condimentum dolor, sit amet ornare augue.
              Vestibulum placerat auctor ipsum. Nunc aliquam sed augue sit amet
              molestie. Sed interdum, nulla eget congue gravida, felis lacus
              euismod diam, eget fringilla purus dolor et ex. Mauris imperdiet
              id lectus sit amet eleifend. Nulla ultrices nulla at ex
              pellentesque, a finibus ante porttitor. Nulla facilisi. Curabitur
              non urna ut risus dapibus viverra. Integer massa odio, auctor quis
              ligula id, elementum vestibulum orci. Proin et enim a massa
              dapibus sodales sit amet in metus. Ut venenatis, nibh at cursus
              posuere, augue purus cursus ligula, vel auctor dolor massa eget
              nisl.{" "}
            </p>
          </div>
          <div className="home-grid-image">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="logo"
            />
          </div>
        </div>
        <div className="home-grid">
          <div className="home-grid-image">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="logo"
            />
          </div>
          <div className="home-grid-text">
            <h1 className="home-grid-text-head">PROJECT TITLE</h1>
            <p className="home-grid-text-para">
              orem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              sollicitudin turpis tempus urna hendrerit tempor. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Cras accumsan quis
              diam vitae lobortis. Vivamus sollicitudin sem dolor, vel commodo
              purus elementum quis. Integer consequat metus et sodales varius.
              Donec venenatis quam et quam blandit, nec convallis orci
              tincidunt. Proin tempus magna tincidunt mauris aliquam tempus
              Pellentesque efficitur eros non ultrices sagittis. Proin a purus
              vel neque consectetur rutrum. Aliquam euismod orci in leo
              scelerisque dapibus. Cras mattis sem enim, at volutpat enim
              blandit nec. Sed eros elit, dignissim sed diam a, ornare egestas
              nulla. Ut condimentum justo lorem, nec efficitur urna ultrices
              vitae. Donec id condimentum dolor, sit amet ornare augue.
              Vestibulum placerat auctor ipsum. Nunc aliquam sed augue sit amet
              molestie. Sed interdum, nulla eget congue gravida, felis lacus
              euismod diam, eget fringilla purus dolor et ex. Mauris imperdiet
              id lectus sit amet eleifend. Nulla ultrices nulla at ex
              pellentesque, a finibus ante porttitor. Nulla facilisi. Curabitur
              non urna ut risus dapibus viverra. Integer massa odio, auctor quis
              ligula id, elementum vestibulum orci. Proin et enim a massa
              dapibus sodales sit amet in metus. Ut venenatis, nibh at cursus
              posuere, augue purus cursus ligula, vel auctor dolor massa eget
              nisl.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="home-feedback">
        <h1 className="home-feedback-head">FEEDBACK FORM</h1>
        <p className="home-feedback-para">
          Sed interdum, nulla eget congue gravida, felis lacus euismod diam,
          eget fringilla purus dolor et ex. Mauris imperdiet id lectus sit amet
          eleifend. Nulla ultrices nulla at ex pellentesque, a finibus ante
          porttitor. Nulla facilisi. Curabitur non urna ut risus dapibus viverra{" "}
        </p>
        <button className="home-feedback-button" onClick={handleClick}>
          <div className="home-feedback-form">Fill Form</div>
        </button>
      </div>
      <div className="home-social-media">
        <h1 className="home-social-media-text">CHECKOUT OUR SOCIAL MEDIA</h1>
        <div className="home-social-media-icons">
          <div className="home-social-media-icon">
            <svg
              width="146"
              height="146"
              viewBox="0 0 146 146"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M73 2.91992C34.2954 2.91992 2.92001 34.2953 2.92001 72.9999C2.92001 111.705 34.2954 143.08 73 143.08C111.705 143.08 143.08 111.705 143.08 72.9999C143.08 34.2953 111.705 2.91992 73 2.91992ZM89.6002 51.3481H79.0663C77.818 51.3481 76.431 52.9906 76.431 55.1733V62.7799H89.6075L87.6146 73.6277H76.431V106.193H63.9991V73.6277H52.7206V62.7799H63.9991V56.3997C63.9991 47.2455 70.3501 39.8068 79.0663 39.8068H89.6002V51.3481Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="home-social-media-icon">
            <svg
              width="142"
              height="94"
              viewBox="0 0 142 94"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M127.46 23.468C127.522 24.484 127.545 25.5126 127.545 26.5285C127.545 57.8233 98.2424 93.897 44.6605 93.897C28.1993 93.897 12.8958 89.9773 0 83.2542C7.62768 84.0038 15.3624 83.5245 22.762 81.8436C30.1616 80.1628 37.081 77.3133 43.1248 73.4582C37.0467 73.3648 31.1564 71.7303 26.2775 68.7831C21.3987 65.8359 17.775 61.7234 15.9133 57.0206C20.2818 57.6844 24.7778 57.5452 29.0714 56.6129C22.4778 55.5264 16.5492 52.6207 12.2903 48.3882C8.03144 44.1558 5.70427 38.8569 5.70315 33.3896V33.0948C9.74858 34.9236 14.273 35.9406 18.8999 36.0612C12.725 32.7159 8.35389 27.5816 6.67876 21.7064C5.00362 15.8312 6.15074 9.65789 9.88598 4.44658C17.2004 11.762 26.3267 17.7453 36.6721 22.0077C47.0174 26.2702 58.3505 28.7164 69.935 29.1876C69.4338 27.4167 69.1827 25.6051 69.1864 23.7879C69.1864 20.68 69.9398 17.6025 71.4036 14.7312C72.8674 11.86 75.0129 9.25119 77.7175 7.05385C80.4222 4.85651 83.633 3.11369 87.1666 1.92491C90.7002 0.736134 94.4874 0.124696 98.3118 0.12552C102.298 0.120238 106.242 0.780515 109.901 2.06539C113.56 3.35027 116.854 5.23235 119.581 7.59488C126.103 6.54564 132.358 4.60308 138.08 1.85018C135.904 7.33275 131.351 11.9863 125.269 14.9451C131.043 14.3888 136.683 13.1331 142 11.2198C138.094 15.9763 133.169 20.1248 127.46 23.468Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="home-social-media-icon">
            <svg
              width="110"
              height="117"
              viewBox="0 0 110 117"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45.2216 76.7322C41.5028 92.7082 36.9709 108.023 23.5307 116.022C19.3877 91.8786 29.618 73.7505 34.3762 54.5028C26.2668 43.3069 35.3518 20.7874 52.4401 26.339C73.4735 33.161 34.2277 67.9437 60.5707 72.2945C88.0802 76.8251 99.3074 33.1378 82.2474 18.9311C57.6083 -1.59279 10.5148 18.4496 16.3122 47.8317C17.7192 55.0133 26.7617 57.1887 19.925 67.1026C4.15175 64.2369 -0.5569 54.0271 0.0511233 40.418C1.02679 18.1422 24.4357 2.55492 47.9224 0.391149C77.6236 -2.34112 105.501 9.34208 109.354 32.2618C113.688 58.14 95.9492 86.1705 64.1835 84.1517C55.5722 83.6006 51.9664 80.0968 45.2216 76.7322Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
