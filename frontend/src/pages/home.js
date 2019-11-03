import React from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { WikiLabels } from "components/wiki";
import page_banner from "assets/images/banner_1.jpg";
import activityStream from "activitystrea.ms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        currentPage: state.generic.currentPage,
        user: state.user.user,
        unreadMessageCount: state.user.unreadMessageCount
    };
};

class Home extends React.Component {
    componentDidMount() {
        /* activityStream.object()
			.name('baz')
			.content(activityStream.langmap().set('en', 'bar').set('fr', 'foo'))
			.publishedNow()
			.prettyWrite((err, doc) => {
				if (err) throw err;
				console.log(doc);
			}); */

        activityStream
            .add()
            .summary("Martin added an article to his blog")
            .actor(
                activityStream
                    .person()
                    .set("name", "Martin Smith")
                    .set("url", "http://example.org/martin")
                    .image(
                        activityStream
                            .link()
                            .set("href", "http://example.org/martin/image.jpg")
                            .set("mediaType", "image/jpeg")
                    )
                    .id("http://www.test.example/martin")
            )
            .object(
                activityStream
                    .article()
                    .id("http://www.test.example/blog/abc123/xyz")
                    .set("name", "Why I love Activity Streams")
                    .set("url", "http://example.org/blog/2011/02/entry")
            )
            .set("url", "http://example.org/blog/2011/02/entry")
            .target(
                activityStream.orderedCollection().set("name", "Martin's Blog")
            )
            .publishedNow()
            .prettyWrite((err, doc) => {
                if (err) throw err;
                //console.log(doc);
            });
    }
    render() {
        let lookupService = [0, 1, 2];
        let user = this.props.user;
        return (
            <React.Fragment>
                <div
                    className="pageHeader  text-left"
                    style={{ backgroundImage: `url(${page_banner})` }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 serif">
                                <h2
                                    className="serif wow fadeIn"
                                    data-wow-delay="0.2s"
                                >
                                    Tailor-made content.
                                </h2>
                                <p className="wow fadeIn" data-wow-delay="0.3s">
                                    Bespoke is an open source learning space
                                    built just for you. <br />
                                    Here, you can learn from others, and share
                                    what you know.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Row>
                        <div className="col-md-8 mt-5 mb-5">
                            <h2 className="serif font-30">Latest.</h2>
                            <hr />
                            {lookupService &&
                                lookupService.map((service, idx) => {
                                    return (
                                        <React.Fragment key={idx}>
                                            {" "}
                                            <Row>
                                                <div
                                                    className="mb-1 wow fadeIn"
                                                    data-wow-delay={`0.1s`}
                                                    style={{ minWidth: "100%" }}
                                                >
                                                    <div className="row no-gutters ">
                                                        <div className="col-md-4">
                                                            <div className="clear pt-4 pr-4 pl-3">
                                                                <img
                                                                    src="assets/library.jpeg"
                                                                    className="img-fluid fullWidth mb-4"
                                                                    alt="My Topic"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="card-body text-left">
                                                                <h5 className="card-title text-info serif font-24 text-justify mb-1">
                                                                    <Link
                                                                        to={`/topic/preview/1`}
                                                                    >
                                                                        My Topic{" "}
                                                                    </Link>
                                                                </h5>
                                                                <small className="text-right">
                                                                    <strong>
                                                                        by{" "}
                                                                    </strong>{" "}
                                                                    @Serhat{" "}
                                                                </small>
                                                                <p>
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet
                                                                    consectetur
                                                                    adipisicing
                                                                    elit.
                                                                </p>
                                                                <WikiLabels
                                                                    wikis={[
                                                                        {
                                                                            conceptUri:
                                                                                "asd",
                                                                            label:
                                                                                "dsa"
                                                                        }
                                                                    ]}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Row>
                                        </React.Fragment>
                                    );
                                })}
                            <Link
                                className="btn btn-orange fullWidth"
                                to={`/explore`}
                            >
                                Explore all topics
                            </Link>
                            <div style={{ height: "100px" }}></div>
                            <h2 className="serif font-30">
                                You might be interested.
                            </h2>
                            <hr />
                            {lookupService &&
                                lookupService.map((service, idx) => {
                                    return (
                                        <React.Fragment key={idx}>
                                            {" "}
                                            <Row>
                                                <div
                                                    className="mb-1 wow fadeIn"
                                                    data-wow-delay={`0.1s`}
                                                    style={{ minWidth: "100%" }}
                                                >
                                                    <div className="row no-gutters ">
                                                        <div className="col-md-4">
                                                            <div className="clear pt-4 pr-4 pl-3">
                                                                <img
                                                                    src="assets/library.jpeg"
                                                                    className="img-fluid fullWidth mb-4"
                                                                    alt="My Topic"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="card-body text-left">
                                                                <h5 className="card-title text-info serif font-24 text-justify mb-1">
                                                                    <Link
                                                                        to={`/topic/preview/1`}
                                                                    >
                                                                        My Topic{" "}
                                                                    </Link>
                                                                </h5>
                                                                <small className="text-right">
                                                                    <strong>
                                                                        by{" "}
                                                                    </strong>{" "}
                                                                    @Serhat{" "}
                                                                </small>
                                                                <p>
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet
                                                                    consectetur
                                                                    adipisicing
                                                                    elit.
                                                                </p>
                                                                <WikiLabels
                                                                    wikis={[
                                                                        {
                                                                            conceptUri:
                                                                                "asd",
                                                                            label:
                                                                                "dsa"
                                                                        }
                                                                    ]}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Row>
                                        </React.Fragment>
                                    );
                                })}
                        </div>
                        <div className="col-md-4 mt-5 mb-5">
                            {user && (
                                <React.Fragment>
                                    <h2 className="serif font-30">
                                        Continue learning.
                                    </h2>
                                    <hr />
                                    <div className="sidebar clear">
                                        <img
                                            src="assets/library.jpeg"
                                            className="img-fluid fullWidth mb-4"
                                            alt="My Topic"
                                        />
                                        <h5 className="card-title text-info serif font-24 text-justify mb-1">
                                            <Link to={`/topic/preview/1`}>
                                                My Topic{" "}
                                            </Link>
                                        </h5>
                                        <small className="text-right">
                                            <strong>by </strong> @Serhat{" "}
                                        </small>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                        </p>
                                        <WikiLabels
                                            wikis={[
                                                {
                                                    conceptUri: "asd",
                                                    label: "dsa"
                                                }
                                            ]}
                                        />
                                    </div>
                                    <div className="mt-5">
                                        <h2 className="serif font-30">
                                            From your circle.
                                        </h2>
                                        <hr />
                                        <div className="sidebar clear">
                                            <ul>
                                                {lookupService &&
                                                    lookupService.map(
                                                        (service, idx) => {
                                                            return (
                                                                <React.Fragment
                                                                    key={idx}
                                                                >
                                                                    <li>
                                                                        <FontAwesomeIcon
                                                                            icon={
                                                                                faInfoCircle
                                                                            }
                                                                        />{" "}
                                                                        <Link to="">
                                                                            Çağrı
                                                                            Altuğ
                                                                            published
                                                                            a
                                                                            new
                                                                            topic:
                                                                            "Domain
                                                                            Driven
                                                                            Design"
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <FontAwesomeIcon
                                                                            icon={
                                                                                faInfoCircle
                                                                            }
                                                                        />{" "}
                                                                        <Link to="">
                                                                            {" "}
                                                                            Gülşah
                                                                            Coşkun
                                                                            started
                                                                            following
                                                                            Cihangir
                                                                            Özmüş.
                                                                        </Link>
                                                                    </li>
                                                                </React.Fragment>
                                                            );
                                                        }
                                                    )}
                                            </ul>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )}
                        </div>
                    </Row>
                </div>
                <div className="sectionPadding preFooter">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1 text-center">
                                <h3
                                    className="serif wow fadeIn"
                                    data-wow-delay="0.7s"
                                    style={{ fontSize: "34px" }}
                                >
                                    About Bespoke
                                </h3>
                                <br />
                                <p className="wow fadeIn" data-wow-delay="0.9s">
                                    Bespoke is an open source project built in
                                    Bogazici University in 2019.
                                    <br />
                                    Here in Bespoke, we believe in knowledge. We
                                    also know how frustrating it is to follow
                                    online videos, toggle between many different
                                    e-learning platforms, etc.
                                    <br />
                                    <br />
                                    That's why Bespoke is not just an e-learning
                                    platform, but a{" "}
                                    <strong>self-learning</strong> platform.
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps)(Home);