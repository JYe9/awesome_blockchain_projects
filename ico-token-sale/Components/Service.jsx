import React from "react";

const Service = () => {
  const services = [
    {
      title: "Secure Storage      ",
      discription:
        "your wallet must be secured. Bitcoin makes it possible to transfer value any where in a very easy way and it allows you to be in control of your money.      ",
    },
    {
      title: "Mobile App      ",
      discription:
        "The #1 most popular cryptocurrency wallet for those looking to transform the financial system right from their pocket. Cash instantly with anyone in the world.      ",
    },
    {
      title: "Exchange Service      ",
      discription:
        "Each user has unique needs, so there is no one size fits all for exchanges. Our Bitcoin exchange reviews detail each exchange's supported countries      ",
    },
    {
      title: "Investment projects      ",
      discription:
        "Bitcoin investment opportunities exist outside of simply speculating on the Bitcoin exchange rate. sell bitcoins and profit from extreme changes      ",
    },
    {
      title: "Credit Card Use      ",
      discription:
        "We are accept any credit or debit card from VISA or MasterCard. This option may be especially useful for those seek ing for the ways   ",
    },
    {
      title: "Planning      ",
      discription:
        "A cutting edge issue in traditional estate planning is Cryptocash. Cryptocash is a digital or virtual currency that uses cryptography for security      ",
    },
  ];
  return (
    <section id="service" class="small_pb">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
            <div class="title_default_light title_border text-center">
              <h4
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Meet our solution for you
              </h4>
              <p
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          {services.map((service, i) => (
            <div key={i + 1} class="col-lg-4 col-md-6 col-sm-12">
              <div
                class="box_wrap text-center animation"
                data-animation="fadeInUp"
                data-animation-delay={`0.${i + 6}s`}
              >
                <img
                  src={`assets/images/service_icon${i + 1}.png`}
                  alt="service_icon1"
                />
                <h4>{service.title}</h4>
                <p>{service.discription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
