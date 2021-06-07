import React from "react";
import { Row, Col, Button, Card, Divider, Collapse, Table } from "antd";
import bank from "../assets/visa.jpg";
import blue from "../assets/blue.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppleOutlined, CaretRightOutlined } from "@ant-design/icons";
import Lines from "../components/Lines";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

const Accounts = () => {
  // for christopher collapse
  const { Panel } = Collapse;

  function callback(key) {
    console.log(key);
  }

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  // for table
  const columns = [
    {
      title: "DATE",
      dataIndex: "date",
    },
    {
      title: "CONCEPT",
      dataIndex: "concept",
    },
    {
      title: "AMOUNT",
      dataIndex: "amount",
    },
  ];
  const data = [
    {
      key: "1",
      date: "10 / 18 / 2017",
      concept: "Loan payment",
      amount: "+$210.90",
    },
    {
      key: "2",
      date: "10 / 10 / 2017",
      concept: "Theater tickets",
      amount: "+$245.90",
    },
    {
      key: "3",
      date: "10 / 09 / 2017",
      concept: "Cash Deposit",
      amount: "+$47.00",
    },
  ];

  // table end...

  // for apex chart
  //   this.state = {
  //     options: {
  //       chart: {
  //         id: "basic-bar"
  //       },
  //       xaxis: {
  //         categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
  //       }
  //     },
  //     series: [
  //       {
  //         name: "series-1",
  //         data: [30, 40, 45, 50, 49, 60, 70, 91]
  //       }
  //     ]
  //   };
  // }
  // apex chart end

  return (
    <div>
      <div style={{ backgroundColor: "#f0f3f0", paddingTop: 70 }}>
        <Row>
          <Col style={{ paddingRight: 20, paddingLeft: 20 }} span={14}>
            <div>
              {/*1 for accounts and transfer */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ fontSize: 20, paddingLeft: 50 }}>
                  <p>My Accounts</p>
                </div>
                <div>
                  <Button
                    style={{ width: 200, height: 40 }}
                    type="primary"
                    shape="round"
                  >
                    New Transfer
                  </Button>
                </div>
              </div>

              {/* 2 for current account */}
              <div
                style={{
                  paddingBottom: 20,
                }}
              >
                <Card
                  style={{
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        // borderRight: "1px solid gray",
                        paddingRight: 200,
                      }}
                    >
                      <span style={{ color: "blue", fontSize: 16 }}>
                        Current Account
                      </span>
                      <span style={{ fontSize: 16, color: "gray" }}>
                        4422 2156 0567 9000
                      </span>
                    </div>

                    {/* for divider */}
                    <Divider type="vertical" style={{ height: 50 }} />
                    <div>
                      <p
                        style={{
                          fontSize: 24,
                          color: "gray",
                          alignItems: "center",
                          // borderRight: "1px solid gray",
                          paddingRight: 30,
                        }}
                      >
                        $1,74.66
                      </p>
                    </div>

                    {/* for divider */}
                    <Divider type="vertical" style={{ height: 50 }} />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        paddingRight: 40,
                      }}
                    >
                      <span style={{ color: "blue", fontSize: 16 }}>
                        Available
                      </span>
                      <span style={{ color: "gray", fontSize: 16 }}>
                        $6396.32
                      </span>
                    </div>
                  </div>
                </Card>
              </div>

              {/* 3. for savings account */}
              {/* 
Savings Account
4422 2156 0567 9113
 */}
              <div
                style={{
                  paddingBottom: 20,
                }}
              >
                <Card
                  style={{
                    width: "100%",
                    // display: "flex",
                    // flexDirection: "row",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        // borderRight: "1px solid gray",
                        paddingRight: 200,
                      }}
                    >
                      <span style={{ color: "blue", fontSize: 16 }}>
                        Savings Account
                      </span>
                      <span style={{ fontSize: 16, color: "gray" }}>
                        4422 2156 0567 9113
                      </span>
                    </div>

                    {/* for divider */}
                    <Divider type="vertical" style={{ height: 50 }} />
                    <div>
                      <p
                        style={{
                          fontSize: 24,
                          color: "gray",
                          alignItems: "center",
                          // borderRight: "1px solid gray",
                          paddingRight: 30,
                        }}
                      >
                        $2,620.00
                      </p>
                    </div>

                    {/* for divider */}
                    <Divider type="vertical" style={{ height: 50 }} />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        paddingRight: 40,
                      }}
                    >
                      <span style={{ color: "blue", fontSize: 16 }}>
                        Available
                      </span>
                      <span style={{ color: "gray", fontSize: 16 }}>
                        $6,396.32
                      </span>
                    </div>
                  </div>
                </Card>
              </div>

              {/* 4 for christopher account  */}
              {/* 
Christopher Account
4422 2156 0567 9256

$2,033.66
$6,396.32

 */}
              <div>
                <Card
                  style={{
                    width: "100%",
                    // display: "flex",
                    // flexDirection: "row",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        // borderRight: "1px solid gray",
                        paddingRight: 200,
                      }}
                    >
                      <span style={{ color: "blue", fontSize: 16 }}>
                        Christopher Account
                      </span>
                      <span style={{ fontSize: 16, color: "gray" }}>
                        4422 2156 0567 9256
                      </span>
                    </div>
                    {/* for divider */}
                    <Divider type="vertical" style={{ height: 50 }} />
                    <div>
                      <p
                        style={{
                          fontSize: 24,
                          color: "gray",
                          alignItems: "center",
                          // borderRight: "1px solid gray",
                          paddingRight: 30,
                        }}
                      >
                        $2,033.66
                      </p>
                    </div>
                    {/* for divider */}
                    <Divider type="vertical" style={{ height: 50 }} />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        paddingRight: 40,
                      }}
                    >
                      <span style={{ color: "blue", fontSize: 16 }}>
                        Available
                      </span>
                      <span style={{ color: "gray", fontSize: 16 }}>
                        $6,396.32
                      </span>
                    </div>
                    {/* for christopher collapse */}
                  </div>
                </Card>
                <Collapse defaultActiveKey={["1"]} onChange={callback}>
                  <Panel
                    header="Credit cards associated with this account"
                    key="1"
                    style={{ fontSize: 16, color: "blue" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        // justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <a href="#">
                          <img
                            style={{
                              width: 300,
                              height: 200,
                              // paddingRight: 50,
                              paddingLeft: 10,
                            }}
                            src={bank}
                          ></img>
                        </a>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          paddingTop: 150,
                          paddingLeft: 20,
                          flexDirection: "column",
                        }}
                      >
                        <span style={{ color: "blue", fontSize: 17 }}>
                          Credit Card
                        </span>
                        <span style={{ color: "#65676b", fontSize: 17 }}>
                          4422 2156 0567 9000
                        </span>
                      </div>
                    </div>
                    {/* <p>{text}</p> */}
                    <Divider />

                    {/* for inner card */}
                    <div>
                      <Card style={{ width: "100%", color: "gray" }}>
                        <p>
                          The Essential Card is a credit card with an overdraft
                          facility (credit facility linked to your personal
                          account) and only for people over the age of 18. The
                          general conditions of the Essential Card are available
                          from any Essential branch. Credit cards are also
                          offered with credit. Find out more in your local
                          branch.
                        </p>
                      </Card>
                    </div>
                  </Panel>
                </Collapse>
              </div>

              {/* 5 for other operations */}
              <div>
                <div
                  style={{
                    paddingLeft: 20,
                    paddingTop: 40,
                    paddingBottom: 20,
                    fontSize: 20,
                  }}
                >
                  <p>Other Operations</p>
                </div>

                {/* for accordion */}
                <div
                  style={{
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingBottom: 50,
                  }}
                >
                  <Collapse accordion>
                    <Panel
                      header="My Deposits"
                      key="1"
                      style={{ fontSize: 16 }}
                    >
                      {/* <h4>Middle size table</h4> */}
                      <Table
                        columns={columns}
                        dataSource={data}
                        size="middle"
                        pagination={false}
                      />
                    </Panel>

                    {/* 2nd */}
                    <Panel style={{ fontSize: 17 }} header="Loans" key="2">
                      <p style={{ fontSize: 16 }}>You have no loans</p>
                      <div>
                        <Card style={{ width: "100%", color: "gray" }}>
                          <p>
                            A personal loan might be right for you if you want
                            to fund a big expense or if you want to consolidate
                            debt. Personal loans may come with lower interest
                            rates than credit cards, so funding a big expense or
                            project with a personal loan could save you
                            thousands of dollars on interest payments
                          </p>

                          <div style={{ paddingLeft: 400 }}>
                            <Button
                              type="primary"
                              shape="round"
                              style={{ width: 200, fontSize: 15 }}
                            >
                              Get Started
                            </Button>
                          </div>
                        </Card>
                      </div>
                    </Panel>

                    <Panel
                      style={{ fontSize: 17 }}
                      header="Credit Lines"
                      key="3"
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        {/* 1. for card and credit  */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <div>
                            <a href="#">
                              <img
                                style={{
                                  width: 200,
                                  height: 150,
                                  // paddingRight: 50,
                                  paddingLeft: 10,
                                }}
                                src={bank}
                              ></img>
                            </a>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              paddingLeft: 20,
                              paddingTop: 100,
                            }}
                          >
                            <span style={{ color: "blue", fontSize: 17 }}>
                              Credit Card
                            </span>
                            <span style={{ color: "#65676b", fontSize: 17 }}>
                              4422 2156 0567 9000
                            </span>
                          </div>
                        </div>

                        {/* for get started */}

                        <div style={{ paddingTop: 100 }}>
                          <Button
                            type="primary"
                            shape="round"
                            style={{ width: 200, fontSize: 15 }}
                          >
                            Get Started
                          </Button>
                        </div>
                      </div>

                      {/* for card */}
                      <div style={{ paddingTop: 20, paddingBottom: 20 }}>
                        <Card style={{ width: "100%", color: "gray" }}>
                          <p>
                            The Essential Card is a credit card with an
                            overdraft facility (credit facility linked to your
                            personal account) and only for people over the age
                            of 18. The general conditions.
                          </p>
                        </Card>
                      </div>
                    </Panel>

                    {/* 4th pannel */}

                    <Panel
                      style={{ fontSize: 17 }}
                      header="Trade & Finance"
                      key="4"
                    >
                      <div>
                        <p style={{ color: "gray", fontSize: 14 }}>
                          Manage your business finances with our internet
                          banking package. Stay up to date with our mobile app.
                        </p>
                      </div>

                      {/* for buttons */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingBottom: 20,
                          }}
                        >
                          {/* for apple */}
                          <div style={{ paddingRight: 10 }}>
                            <Button
                              style={{
                                width: "150px",
                                height: 50,
                                paddingRight: 70,
                                backgroundColor: "black",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                              type="primary"
                              icon={<FontAwesomeIcon icon={faApple} />}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <span>Download on the</span>
                                <span>App Store</span>
                              </div>
                            </Button>
                          </div>
                          {/* for playstore */}
                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <Button
                              type="primary"
                              icon={<FontAwesomeIcon icon={faGooglePlay} />}
                              style={{
                                width: "150px",
                                height: 50,
                                paddingRight: 70,
                                backgroundColor: "black",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              {/* <FontAwesomeIcon
                                style={{ fontSize: "20px" }}
                                icon={faApple}
                              /> */}
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <span>GET IT ON</span>
                                <span>GooglePlay</span>
                              </div>
                            </Button>
                          </div>
                        </div>

                        {/* for learn more */}
                        <div>
                          <Button type="primary" shape="round">
                            Learn More
                          </Button>
                        </div>
                      </div>
                      <Divider />
                    </Panel>
                  </Collapse>
                </div>
              </div>

              {/* 6 for buttom card */}
            </div>
          </Col>

          {/* for right column for profile */}
          <Col span={10}>
            <div style={{ paddingRight: 20, paddingLeft: 20 }}>
              <Card style={{ width: "100" }}>
                {/* div wrapping whole content */}
                <div>
                  {/* div for profile pic n text beneath */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ justifyContent: "center" }}>
                      <a href="#">
                        <img
                          style={{
                            width: 140,
                            height: 180,
                            // paddingRight: 50,
                            paddingLeft: 10,
                            borderRadius: "50%",
                          }}
                          src={blue}
                        ></img>
                      </a>
                    </div>

                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <span style={{ fontWeight: "bold", fontSize: 24 }}>
                          {" "}
                          Jane Doe
                        </span>
                        <span>San Francisco-USA</span>
                        <span>
                          <a href="#">User settings</a>
                        </span>
                      </div>
                    </div>
                  </div>

                  <Divider />

                  {/* for amount */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        paddingLeft: 40,
                        paddingRight: 40,
                        // borderRight: "1px solid gray",
                        height: 50,
                      }}
                    >
                      <span style={{ fontWeight: "bold", fontSize: 24 }}>
                        56
                      </span>
                      <span style={{ fontSize: 20, color: "gray" }}>
                        Operations
                      </span>
                    </div>
                    <Divider type="vertical" style={{ height: "50px" }} />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyItems: "center",
                        paddingLeft: 50,
                        paddingRight: 40,
                      }}
                    >
                      <span style={{ fontWeight: "bold", fontSize: 24 }}>
                        +$5,000.10
                      </span>
                      <span style={{ color: "gray", fontSize: 20 }}>
                        Amount
                      </span>
                    </div>
                  </div>

                  <Divider />
                  <Lines />

                  {/* chart goes here */}
                  <div style={{ fontSize: 16, color: "blue" }}>
                    <p>March</p>
                  </div>

                  {/* for lower content */}
                  <div>
                    {/* 1st */}
                    {/* <div>MAR</div> */}

                    {/* 2nd */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* 1 */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            paddingBottom: 20,
                          }}
                        >
                          <span style={{ color: "gray", fontSize: 16 }}>
                            MAR
                          </span>
                          <span style={{ fontSize: 24 }}>20</span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            paddingBottom: 20,
                            paddingRight: 200,
                          }}
                        >
                          <span style={{ fontSize: 16 }}>Dribble Pro</span>
                          <span style={{ color: "gray", fontSize: 14 }}>
                            Subscription
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            paddingBottom: 20,
                          }}
                        >
                          <span style={{ color: "red", fontSize: 16 }}>
                            -$19.99
                          </span>
                          <span style={{ color: "gray", fontSize: 14 }}>
                            10:48PM
                          </span>
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            paddingBottom: 20,
                          }}
                        >
                          <span style={{ color: "gray", fontSize: 16 }}>
                            MAR
                          </span>
                          <span style={{ fontSize: 24 }}>18</span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            paddingBottom: 20,
                            paddingRight: 120,
                          }}
                        >
                          <span style={{ fontSize: 16 }}>Steam Credit</span>
                          <span style={{ color: "gray", fontSize: 14 }}>
                            Bought Trails of Sky SC
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            paddingBottom: 20,
                          }}
                        >
                          <span style={{ color: "red", fontSize: 16 }}>
                            -$8.2
                          </span>
                          <span style={{ color: "gray", fontSize: 14 }}>
                            12:23PM
                          </span>
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            paddingBottom: 20,
                          }}
                        >
                          <span style={{ color: "gray", fontSize: 16 }}>
                            MAR
                          </span>
                          <span style={{ fontSize: 24 }}>12</span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            paddingBottom: 20,
                            paddingRight: 130,
                          }}
                        >
                          <span style={{ fontSize: 16 }}>Apple Iphone X</span>
                          <span style={{ color: "gray", fontSize: 14 }}>
                            Space Grey 128GB
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            paddingBottom: 20,
                          }}
                        >
                          <span style={{ color: "red", fontSize: 16 }}>
                            -$8.2
                          </span>
                          <span style={{ color: "gray", fontSize: 14 }}>
                            5:00AM
                          </span>
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            paddingBottom: 20,
                          }}
                        >
                          <span style={{ color: "gray", fontSize: 16 }}>
                            MAR
                          </span>
                          <span style={{ fontSize: 24 }}>04</span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            paddingBottom: 20,
                            paddingRight: 100,
                          }}
                        >
                          <span style={{ fontSize: 16 }}>Paypal Transfer</span>
                          <span style={{ color: "gray", fontSize: 14 }}>
                            Sent for Design Service
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            paddingBottom: 20,
                          }}
                        >
                          <span
                            style={{ color: "rgb(78, 243, 78)", fontSize: 16 }}
                          >
                            +$300.0
                          </span>
                          <span style={{ color: "gray", fontSize: 14 }}>
                            3:49PM
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* for february */}
                    <div
                      style={{ fontSize: 16, color: "blue", paddingTop: 20 }}
                    >
                      February
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          paddingBottom: 20,
                        }}
                      >
                        <span style={{ color: "gray", fontSize: 16 }}>FEB</span>
                        <span style={{ fontSize: 24 }}>20</span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          paddingBottom: 20,
                          paddingRight: 120,
                        }}
                      >
                        <span style={{ fontSize: 16 }}>Spotify Premium</span>
                        <span style={{ color: "gray", fontSize: 14 }}>
                          Subscription
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          paddingBottom: 20,
                        }}
                      >
                        <span style={{ color: "red", fontSize: 16 }}>
                          -$8.0
                        </span>
                        <span style={{ color: "gray", fontSize: 14 }}>
                          10:48PM
                        </span>
                      </div>
                    </div>

                    {/* 3rd */}
                    <div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </Card>
              ,
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Accounts;
