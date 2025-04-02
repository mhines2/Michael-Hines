import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      status: "idle", // idle, submitting, success, error
      errorMessage: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ status: "submitting", errorMessage: "" });

    try {
      const response = await fetch(process.env.REACT_APP_FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          subject: this.state.subject,
          message: this.state.message,
        }),
      });

      if (response.ok) {
        this.setState({
          status: "success",
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        const data = await response.json();
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error) {
      this.setState({
        status: "error",
        errorMessage:
          error.message || "Something went wrong. Please try again.",
      });
    }
  };

  render() {
    if (!this.props.data) return null;

    const { name, address } = this.props.data;
    const { status, errorMessage } = this.state;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{this.props.data.contactmessage}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form onSubmit={this.handleSubmit} className="contact-form">
                <fieldset>
                  <div>
                    <label htmlFor="name">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                      required
                      disabled={status === "submitting"}
                    />
                  </div>

                  <div>
                    <label htmlFor="email">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      required
                      disabled={status === "submitting"}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={this.state.subject}
                      onChange={this.handleChange}
                      disabled={status === "submitting"}
                    />
                  </div>

                  <div>
                    <label htmlFor="message">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={this.state.message}
                      onChange={this.handleChange}
                      required
                      disabled={status === "submitting"}
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="submit"
                      disabled={status === "submitting"}
                      style={{
                        backgroundColor:
                          status === "submitting" ? "#666" : "#0d0d0d",
                        color: "#fff",
                        cursor: status === "submitting" ? "wait" : "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        padding: "12px 20px",
                        width: "auto",
                        minWidth: "150px",
                      }}
                    >
                      {status === "submitting" ? (
                        <>
                          <i className="fa fa-spinner fa-spin"></i>
                          <span>Sending...</span>
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>
                </fieldset>
              </form>

              {status === "submitting" && (
                <div
                  className="status-message"
                  style={{
                    color: "#666",
                    marginTop: "20px",
                    marginLeft: "26%",
                    width: "65%",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <i className="fa fa-spinner fa-spin"></i>
                  <span>Sending your message...</span>
                </div>
              )}

              {status === "error" && (
                <div
                  className="status-message"
                  style={{
                    color: "#ff4444",
                    marginTop: "20px",
                    marginLeft: "26%",
                    width: "65%",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <i className="fa fa-exclamation-circle"></i>
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === "success" && (
                <div
                  className="status-message"
                  style={{
                    color: "#4CAF50",
                    marginTop: "20px",
                    marginLeft: "26%",
                    width: "65%",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <i className="fa fa-check-circle"></i>
                  <span>
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </div>
              )}
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Contact Details</h4>
                <p className="address">
                  {name}
                  <br />
                  {address.city}, {address.state}
                  <br />
                  <span>Email: mthines2003@gmail.com</span>
                </p>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
