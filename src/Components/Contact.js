import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      success: false,
      error: false,
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submission started");
    this.setState({ loading: true, success: false, error: false });

    try {
      const form = e.target;
      console.log("Submitting to:", form.action);
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      console.log("Response status:", response.status);
      const responseData = await response.json();
      console.log("Response data:", responseData);

      if (response.ok) {
        console.log("Submission successful");
        this.setState({ loading: false, success: true });
        form.reset();
      } else {
        console.log("Submission failed");
        this.setState({ loading: false, error: true });
      }
    } catch (error) {
      console.error("Submission error:", error);
      this.setState({ loading: false, error: true });
    }
  };

  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;

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
              <p className="lead">{message}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form
                action={process.env.REACT_APP_FORMSPREE_ENDPOINT}
                method="POST"
                id="contactForm"
                name="contactForm"
                onSubmit={this.handleSubmit}
              >
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactName"
                      name="name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      defaultValue=""
                      size="35"
                      id="contactEmail"
                      name="_replyto"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactSubject"
                      name="subject"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols="50"
                      rows="15"
                      id="contactMessage"
                      name="message"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="submit"
                      disabled={this.state.loading}
                    >
                      {this.state.loading ? "Sending..." : "Submit"}
                    </button>
                    {this.state.loading && (
                      <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                      </span>
                    )}
                  </div>
                </fieldset>
              </form>

              {this.state.error && (
                <div id="message-warning">
                  Something went wrong. Please try again.
                </div>
              )}
              {this.state.success && (
                <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank
                  you!
                  <br />
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
                  {city}, {state} {zip}
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
