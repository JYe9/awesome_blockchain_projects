//HOGE MAGE

const upcoming = [
  {
    contract: "TBCoders",
    total: "300",
    value: 44,
    status: "Active",
    period: 7,
  },
  {
    contract: "MataCoin",
    total: "500",
    value: 114,
    status: "Active",
    period: 10,
  },
  {
    contract: "Blockchain",
    total: "31",
    value: 441,
    status: "Active",
    period: 32,
  },
  {
    contract: "MEME Coin",
    total: "1300",
    value: 424,
    status: "Active",
    period: 60,
  },
  {
    contract: "NEW ECIT",
    total: "5500",
    value: 234,
    status: "Active",
    period: 90,
  },
];
const IGO = [1, 2, 3, 4, 5];
const users = [
  {
    name: "Shoaib Bhai",
    role: "scientist",
  },
  {
    name: "Daulat",
    role: "Coder",
  },
  {
    name: "Shanawaz",
    role: "Doctor",
  },
  {
    name: "Md Faiz",
    role: "Doctor",
  },
  {
    name: "Tajuddin",
    role: "Business",
  },
];
const footerMenu = [
  { name: "Feature", link: "/" },
  { name: "Roadmap", link: "/" },
  { name: "How It Works", link: "/" },
  { name: "Blog", link: "/" },
  { name: "Privacy Policy", link: "/" },
];

const contractList = document.querySelector(".contract-list");
const contractIGO = document.querySelector(".IGO");
const contractUsers = document.querySelector(".contract-users");
const footerMenuContainer = document.querySelector(".footerMenuContainer");

const displyInHTML = upcoming.map((upcoming, i) => {
  return `
    <div class="swiper-slide item">
    <div class="card project-card">
      <div class="media">
        <a href="project-details.html">
          <img
            class="card-img-top avatar-max-lg"
            src="assets/img/content/thumb_${i + 1}.png"
            alt=""
          />
        </a>
        <div class="media-body ml-4">
          <a href="project-details.html">
            <h4 class="m-0">${upcoming.contract}</h4>
          </a>
          <div class="countdown-times">
            <h6 class="my-2">Registration: ${upcoming.status}</h6>
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
            <span>Total </span>
            <span>${upcoming.total}</span>
          </div>
          <!-- Single Item -->
          <div class="single-item">
            <span>Valu</span>
            <span>${upcoming.value}</span>
          </div>
          <!-- Single Item -->
          <div class="single-item">
            <span>Period</span>
            <span>${upcoming.period}</span>
          </div>
        </div>
        <div class="item-progress">
          <div class="progress mt-4 mt-md-5">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 25%"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              25%
            </div>
          </div>
          <div
            class="progress-sale d-flex justify-content-between mt-3"
          >
            <span>0/100,069 MECHA</span>
            <span>${upcoming.value} TBC</span>
          </div>
        </div>
      </div>
      <!-- Project Footer -->
      <div
        class="project-footer d-flex align-items-center mt-4 mt-md-5"
      >
        <a
          class="btn btn-bordered-white btn-smaller"
          href="project-details.html"
          >Details</a
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
    `;
});

const displyInHTMLIGO = IGO.map((IGO, i) => {
  return `
  <div class="col-12 item">
  <!-- Project Card -->
  <div class="card project-card prev-project-card">
    <!-- Project Content -->
    <div
      class="project-content d-md-flex flex-column flex-md-row align-items-center justify-content-md-between"
    >
      <div
        class="item-header d-flex align-items-center mb-4 mb-md-0"
      >
        <img
          class="card-img-top avatar-max-lg"
          src="assets/img/content/thumb_${i + 5}.png"
          alt=""
        />
        <div class="content ml-4">
          <h4 class="m-0">Ancient Kingdom</h4>
          <h6 class="mt-3 mb-0">Price (GAC) = 0.89 BUSD</h6>
        </div>
      </div>
      <div class="blockchain d-inline-block mr-1 mr-md-0">
        <img src="assets/img/content/ethereum.png" alt="" />
      </div>
      <div class="single-item">
        <span>5 hours ago</span>
      </div>
      <div class="single-item d-none d-md-inline-block">
        <span>x86</span>
      </div>
      <div class="single-item">
        <span>ATH:</span>
        <span>$1.06298</span>
      </div>
    </div>
    <a class="project-link" href="project-details.html"></a>
  </div>
</div>
`;
});

const displyInHTMLUser = users.map((user, i) => {
  return `
  <div class="swiper-slide item">
  <!-- Team Card -->
  <div class="card team-card text-center">
    <a
      class="team-photo d-inline-block"
      href="leaderboard.html"
    >
      <img
        class="mx-auto"
        src="assets/img/content/team_${i + 1}.png"
        alt=""
      />
    </a>
    <!-- Team Content -->
    <div class="team-content mt-3">
      <a href="leaderboard.html">
        <h4 class="mb-0">${user.name}</h4>
      </a>
      <span class="d-inline-block mt-2 mb-3">${user.role}</span>
      <!-- Social Share -->
      <div class="social-share">
        <ul class="d-flex justify-content-center list-unstyled">
          <li>
            <a href="#">
              <i class="icon-social-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="icon-social-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
    `;
});

const displyInHTMLFooter = footerMenu.map((menu, i) => {
  return `
            <li class="list-inline-item">
            <a href=${menu.link}>${menu.name}</a>
                </li>
    `;
});

contractList.innerHTML = displyInHTML;
contractIGO.innerHTML = displyInHTMLIGO;
contractUsers.innerHTML = displyInHTMLUser;
footerMenuContainer.innerHTML = displyInHTMLFooter;
