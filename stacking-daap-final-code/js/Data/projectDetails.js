const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const postId = urlParams.get("id");

const projectContainer = document.querySelector(".blog-detail");

const data = [
  {
    id: "1",
    title: "Blog Post 1",
    description: "Description for Blog Post 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus ligula vitae fermentum sollicitudin. Phasellus ut mollis massa.",
  },
  {
    id: "2",
    title: "Blog Post 2",
    description: "Description for Blog Post 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus ligula vitae fermentum sollicitudin. Phasellus ut mollis massa.",
  },
  {
    id: "3",
    title: "Blog Post 3",
    description: "Description for Blog Post 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus ligula vitae fermentum sollicitudin. Phasellus ut mollis massa.",
  },
];

console.log(postId);
const post = data.find((post) => post.id === postId);
console.log(post);

const blogDetail = document.querySelector(".blog-detail");

const displyInHTMLProjectDetail = () => {
  return `
    <div class="container">
    <div class="row justify-content-between">
      <div class="col-12 col-lg-5">
        <!-- Project Card -->
        <div class="card project-card no-hover">
          <div class="media">
            <img
              class="card-img-top avatar-max-lg"
              src="assets/img/content/thumb_2.png"
              alt=""
            />
            <div class="media-body ml-4">
              <h4 class="m-0">Metaverse</h4>
              <div class="countdown-times">
                <h6 class="my-2">Registration in: ${post.id}</h6>
                <div
                  class="countdown d-flex"
                  data-date="2022-06-30"
                ></div>
              </div>
            </div>
          </div>
          <!-- Project Body -->
          <div class="card-body">
            <div class="items">
              <!-- Single Item -->
              <div class="single-item">
                <span>Total raise</span>
                <span>90k</span>
              </div>
              <!-- Single Item -->
              <div class="single-item">
                <span>Valu</span>
                <span>2.8M</span>
              </div>
              <!-- Single Item -->
              <div class="single-item">
                <span>Min allo</span>
                <span>$0</span>
              </div>
            </div>
            <div class="item-progress">
              <div class="progress mt-4 mt-md-5">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 84%"
                  aria-valuenow="84"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  84%
                </div>
              </div>
              <div
                class="progress-sale d-flex justify-content-between mt-3"
              >
                <span>0/100,069 MECHA</span>
                <span>500 BUSD</span>
              </div>
            </div>
          </div>
          <!-- Project Footer -->
          <div
            class="project-footer d-flex align-items-center mt-4 mt-md-5"
          >
            <a
              class="btn btn-bordered-white btn-smaller"
              href="login.html"
              >Claim Token</a
            >
            <!-- Social Share -->
            <div class="social-share ml-auto">
              <ul class="d-flex list-unstyled">
                <li>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-telegram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fas fa-globe"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-discord"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- Blockchain Icon -->
          <div class="blockchain-icon">
            <img src="assets/img/content/ethereum.png" alt="" />
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-7 items mt-5 mt-lg-0">
        <div
          class="card project-card single-item-content no-hover item ml-lg-4"
        >
          <h3 class="m-0">Project Summary</h3>
          <p>
            Far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it
            with the necessary regelialia. It is a paradisematic country,
            in which roasted parts of sentences fly into your mouth.
          </p>
        </div>
        <div
          class="card project-card single-item-content no-hover item p-0 ml-lg-4"
        >
          <div class="image-over">
            <img
              class="card-img-top"
              src="assets/img/content/thumb_6.png"
              alt=""
            />
          </div>
          <div class="card-caption col-12 p-0">
            <div class="card-body p-0">
              <div class="play-btn gallery display-yes">
                <a href="https://www.youtube.com/watch?v=fzBTvDraO5U">
                  <i class="fa-solid fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="card project-card single-item-content no-hover item ml-lg-4"
        >
          <h3 class="m-0">Project Overview</h3>
          <p class="mb-0">
            Even the all-powerful Pointing has no control about the blind
            texts it is an almost unorthographic life One day however a
            small line of blind text by the name of Lorem Ipsum decided to
            leave for the far World of Grammar.
          </p>
          <h4>Lorem ipsum dolor sit</h4>
          <ul>
            <li>Far far away</li>
            <li>Behind the word mountains</li>
            <li>Far from the countries Vokalia and Consonantia</li>
            <li>There live the blind texts</li>
          </ul>
        </div>
        <div
          class="card project-card single-item-content no-hover item ml-lg-4"
        >
          <h3 class="m-0">Token Metrics</h3>
          <p>
            Even the all-powerful Pointing has no control about the blind
            texts it is an almost unorthographic life One day however a
            small line of blind text by the name of Lorem Ipsum decided to
            leave for the far World of Grammar.
          </p>
          <!-- Token Content -->
          <div class="table-responsive">
            <table class="table token-content table-borderless table-sm">
              <tbody>
                <tr>
                  <td>Fundraised:</td>
                  <td>$500,000</td>
                </tr>
                <tr>
                  <td>Platfrom Raise:</td>
                  <td>$120,000 + $5,000</td>
                </tr>
                <tr>
                  <td>Price:</td>
                  <td>$0.05</td>
                </tr>
                <tr>
                  <td>Lock-up:</td>
                  <td>
                    25% unlocked on TGE, 4 months cliff, then 5% on a
                    monthly basis
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          class="card project-card single-item-content no-hover item ml-lg-4"
        >
          <h3 class="m-0">Roadmap</h3>
          <p>
            Far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it
            with the necessary regelialia. It is a paradisematic country,
            in which roasted parts of sentences fly into your mouth.
          </p>
        </div>
      </div>
    </div>
  </div>
    
    `;
};
blogDetail.innerHTML = displyInHTMLProjectDetail(post);
