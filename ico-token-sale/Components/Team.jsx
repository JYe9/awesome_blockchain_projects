import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
const Team = () => {
  const teamMember = [
    {
      name: "Derek Castro",
      position: "Head Of Marketing",
    },
    {
      name: "Jessica Bell",
      position: "Head Of Sale",
    },
    {
      name: "Alvaro Martin",
      position: "Blockchain App Developer",
    },
    {
      name: "Maria Willium",
      position: "Community Manager",
    },
  ];

  const investor = [
    {
      name: "Tricia Diyana",
      position: "Invester",
    },
    {
      name: "Kent Pierce",
      position: "Invester",
    },
    {
      name: "Rose Morgen",
      position: "Invester",
    },
  ];
  return (
    <section id="team" class="section_team small_pt">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12 offset-lg-2">
            <div class="title_default_light title_border text-center">
              <h4
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Leadership Team
              </h4>
              <p
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              >
                we are proud of our great team. He is one of the most motivated
                and enthusiastic people we have, and is always ready and willing
                to help out where needed.
              </p>
            </div>
          </div>
        </div>
        <div class="row small_space">
          {teamMember.map((member, i) => (
            <div class="col-lg-3 col-md-6 col-sm-6 res_md_mb_30 res_sm_mb_20">
              <div
                class="bg_light_dark radius_box team_box_s3 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.6s"
              >
                <div class="text-center">
                  <img src={`assets/images/team_img${i + 1}.png`} alt="team2" />
                  <div class="team_social_s2 list_none">
                    <ul>
                      <li>
                        <a href="#">
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FaLinkedinIn />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FaYoutube />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="team_info text-center">
                  <h4>
                    <a href={`#team${i + 1}`} class="content-popup">
                      {member.name}
                    </a>
                  </h4>
                  <p>{member.position}</p>
                </div>
                <div id={`team${i + 1}`} class="team_pop mfp-hide ">
                  <div class="row m-0">
                    <div class="col-md-4 text-center">
                      <div class="team_img_wrap">
                        <img
                          class="w-100"
                          src={`assets/images/team-lg-${i + 1}.jpg`}
                          alt="user_img-lg"
                        />
                        <div class="team_title">
                          <h4>{member.name}</h4>
                          <span>{member.position}</span>
                        </div>
                      </div>
                      <div class="social_single_team list_none mt-3">
                        <ul>
                          <li>
                            <a href="#">
                              <FaFacebookF />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FaLinkedinIn />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FaTwitter />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FaYoutube />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="pt-3">
                        <h5>About</h5>
                        <hr />
                        <p>
                          Founder of Venus Media Ltd and Owner of leading
                          website for affiliates in the entertainment industry
                          TakeBucks, he is a videographer, photographer and
                          producer with a big number of successful
                          entrepreneurships under his name over the last 18
                          years.
                        </p>
                        <p>
                          Founder of Venus Media Ltd and Owner of leading
                          website for affiliates in the entertainment industry
                          TakeBucks, he is a videographer, photographer and
                          producer with a big number of successful
                          entrepreneurships under his name over the last 18
                          years.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="divider large_divider"></div>
        <div class="row">
          <div class="col-md-12">
            <div class="title_default_light title_border text-center">
              <h4
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Invester Board
              </h4>
            </div>
          </div>
        </div>
        <div class="row small_space justify-content-center">
          <div class="col-lg-9 col-md-12">
            <div class="row">
              {investor.map((invertor, i) => (
                <div class="col-lg-4 col-md-6 col-sm-6 res_md_mb_30 res_sm_mb_20">
                  <div
                    class="bg_light_dark radius_box team_box_s3 animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    <div class="text-center">
                      <img
                        src={`assets/images/team_img${i + 5}.png`}
                        alt="team5"
                      />
                      <div class="team_social_s2 list_none">
                        <ul>
                          <li>
                            <a href="#">
                              <FaFacebookF />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FaLinkedinIn />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FaTwitter />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FaYoutube />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="team_info text-center">
                      <h4>
                        <a href={`#team${i + 5}`} class="content-popup">
                          {invertor.name}
                        </a>
                      </h4>
                      <p> {invertor.name}</p>
                    </div>
                    <div id={`team${i + 5}`} class="team_pop mfp-hide">
                      <div class="row m-0">
                        <div class="col-md-4 text-center">
                          <div class="team_img_wrap">
                            <img
                              class="w-100"
                              src={`assets/images/team-lg-${i + 5}.jpg`}
                              alt="user_img-lg"
                            />
                            <div class="team_title">
                              <h4> {invertor.name}</h4>
                              <span> {invertor.position}</span>
                            </div>
                          </div>
                          <div class="social_single_team list_none mt-3">
                            <ul>
                              <li>
                                <a href="#">
                                  <FaFacebookF />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <FaLinkedinIn />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <FaTwitter />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <FaYoutube />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-md-8">
                          <div class="pt-3">
                            <h5>About</h5>
                            <hr />
                            <p>
                              Founder of Venus Media Ltd and Owner of leading
                              website for affiliates in the entertainment
                              industry TakeBucks, he is a videographer,
                              photographer and producer with a big number of
                              successful entrepreneurships under his name over
                              the last 18 years.
                            </p>
                            <p>
                              Founder of Venus Media Ltd and Owner of leading
                              website for affiliates in the entertainment
                              industry TakeBucks, he is a videographer,
                              photographer and producer with a big number of
                              successful entrepreneurships under his name over
                              the last 18 years.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
