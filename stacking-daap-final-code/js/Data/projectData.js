const projectContract = [
  {
    name: "Shoaib Bhai",
    id: 1,
    icon: "ethereum",
  },
  {
    name: " Hussain",
    id: 2,
    icon: "ethereum",
  },
  {
    name: " Blockchain ",
    id: 3,
    icon: "solana",
  },
  {
    name: "Rahul",
    id: 4,
    icon: "ethereum-gold",
  },
  {
    name: "Time Boom",
    id: 5,
    icon: "binance",
  },
];

const projectContainer = document.querySelector(".projectContainer");

const displyInHTMLProject = projectContract.map((contract, i) => {
  return `
    <div
    class="col-12 col-md-6 col-lg-4 item explore-item"
    data-groups='["ongoing","ended"]'
  >
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
            <h4 class="m-0">${contract.name}</h4>
          </a>
          <div class="countdown-times">
            <h6 class="my-2">Registration in:</h6>
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
            <span>100k</span>
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
            <span>0 BUSD</span>
          </div>
        </div>
      </div>
      <!-- Project Footer -->
      <div
        class="project-footer d-flex align-items-center mt-4 mt-md-5"
      >
        <a
          class="btn btn-bordered-white btn-smaller"
          href="project-details.html?id=${contract.id}"
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
        <img src="assets/img/content/${contract.icon}.png" alt="" />
      </div>
    </div>
  </div>
  
      `;
});

projectContainer.innerHTML = displyInHTMLProject;
