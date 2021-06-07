import React from "react";
import { Row, Col } from "antd";
import { faGoogle } from "@fortawesome/free-solid-svg-icons";
import { ClockCircleOutlined } from "@ant-design/icons";

const Clock = () => {
  return (
    <div>
      <div>
        <Row>
          <Col span={24}>
            col
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingLeft: 50,
                paddingRight: 50,
                paddingBottom: 30,
                paddingTop: 80,
                color: "white",
                background: "#667db6" /* fallback for old browsers */,
                background:
                  "-webkit-linear-gradient(to left, #667db6, #0082c8, #0082c8)" /* Chrome 10-25, Safari 5.1-6 */,
                background:
                  "linear-gradient(to left, #667db6, #0082c8, #0082c8, #667db6)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
              }}
            >
              {/* 1st partition of col (clock and welcome) */}
              <div
                style={{
                  display: "flex",
                  // border: "1px solid pink",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div style={{ paddingRight: 20, fontSize: 70 }}>
                  <ClockCircleOutlined />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: 20 }}>Welcome back, Jane!</span>
                  <span>06/04/2021</span>
                </div>
              </div>

              {/* 2nd */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  paddingLeft: 400,
                }}
              >
                <span style={{ fontSize: 20 }}>Savings Account</span>
                <span>$2,620.00</span>
              </div>

              {/* 3rd */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                {/* <span style={{ fontSize: 20 }}>Savings Account</span>
                <span>$2,620.00</span> */}
                <span style={{ fontSize: 20 }}>Current Account</span>
                <span>$1,742.66</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Clock;
