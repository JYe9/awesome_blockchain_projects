import React from "react";

const Information = () => {
  return (
    <div class="information-area bg-color fix area-padding-2">
      <div class="container">
        <div class=" row">
          <div class="col-xl-12 col-lg-12 col-md-12">
            <div class="section-headline text-center">
              <div class="top-text-title">Graphbit INFORMATION</div>
              <h2>
                Graphbit token supply and{" "}
                <span class="color-text-bold">blockchain</span> information
              </h2>
            </div>
          </div>
        </div>
        <div class="row d-flex flex-wrap align-items-center">
          <div class="col-xl-6 col-lg-6 col-md-6">
            <div class="price-box-inner">
              <h5>Supply & Price Information</h5>
              <div class="table-responsive">
                <table class="table table-borderless text-white tableInfo">
                  <thead>
                    <tr>
                      <td>Initial Supply</td>
                      <td>:</td>
                      <td>1000,000,000 $CNS</td>
                    </tr>
                    <tr>
                      <td>Liquidity</td>
                      <td>:</td>
                      <td>450 BNB</td>
                    </tr>
                    <tr>
                      <td>Initial Price in BNB</td>
                      <td>:</td>
                      <td>0.0000005 BNB ,estimate ( $0.0019 / $CNS )</td>
                    </tr>
                    <tr>
                      <td>Lock</td>
                      <td>:</td>
                      <td>6 Months</td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>

          <div class="col-xl-6 col-lg-6 col-md-6">
            <div class="info-images">
              <img src="img/feature/pasa.png" alt="" />
            </div>
          </div>
        </div>
        <div class="row d-flex flex-wrap align-items-center">
          <div class="col-xl-6 col-lg-6 col-md-6">
            <div class="info-images">
              <img src="img/feature/pasa1.png" alt="" />
            </div>
          </div>

          <div class="col-xl-6 col-lg-6 col-md-6">
            <div class="price-box-inner right-info-content">
              <h5>Token Information</h5>
              <div class="table-responsive">
                <table class="table table-borderless text-white tableInfo">
                  <thead>
                    <tr>
                      <td>Token Name</td>
                      <td>:</td>
                      <td>Graphbit</td>
                    </tr>
                    <tr>
                      <td>Network</td>
                      <td>:</td>
                      <td>Binance Smart Chain ( BSC )</td>
                    </tr>
                    <tr>
                      <td>Token Ticker</td>
                      <td>:</td>
                      <td>$CNS</td>
                    </tr>
                    <tr>
                      <td>Max Supply</td>
                      <td>:</td>
                      <td>100,000,000 $CNS</td>
                    </tr>
                    <tr>
                      <td>Decimals</td>
                      <td>:</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <td>Tax Reflection</td>
                      <td>:</td>
                      <td>6% | 3% Development | 3% Marketing</td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="row d-flex flex-wrap align-items-center">
          <div class="col-xl-6 col-lg-6 col-md-6">
            <div class="price-box-inner">
              <h5>Blockchain Information</h5>
              <div class="table-responsive">
                <table class="table table-borderless text-white tableInfo">
                  <thead>
                    <tr>
                      <td>Consensus</td>
                      <td>:</td>
                      <td>HPOS</td>
                    </tr>
                    <tr>
                      <td>Performance</td>
                      <td>:</td>
                      <td>TPS +7000 “ Average Block Interval 3s</td>
                    </tr>
                    <tr>
                      <td>Compatible</td>
                      <td>:</td>
                      <td>EVM “Ethereum Virtual Machine”</td>
                    </tr>
                    <tr>
                      <td>Crosschain</td>
                      <td>:</td>
                      <td>Supported</td>
                    </tr>
                    <tr>
                      <td>Token Contract</td>
                      <td>:</td>
                      <td>Supported</td>
                    </tr>
                    <tr>
                      <td>Smart Contract</td>
                      <td>:</td>
                      <td>Supported</td>
                    </tr>
                    <tr>
                      <td>Smart Contract Type</td>
                      <td>:</td>
                      <td>ERC20 & BSC20</td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6">
            <div class="info-images">
              <img src="img/feature/pasa2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
