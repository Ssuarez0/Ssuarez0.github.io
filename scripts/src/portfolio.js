'use strict';

//react and projects

//Projects
//Defined outside to keep them organized. Would normally store as json, but no need right now.

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var currentProjects = [{
    key: 0,
    name: "Test project",
    projectImg: "./media/images/Revaliir.PNG",
    githubLink: "https://github.com/Ssuarez0/",
    websiteLink: "https://revaliir.net/index/"
}, {
    key: 1,
    name: "Test project",
    projectImg: "./media/images/spanishFrequency.PNG",
    githubLink: "https://github.com/Ssuarez0/",
    websiteLink: ""
}, {
    key: 2,
    name: "Test project",
    projectImg: "./media/images/Revaliir.PNG",
    githubLink: "https://github.com/Ssuarez0/",
    websiteLink: ""
}, {
    key: 3,
    name: "Test project",
    projectImg: "./media/images/Revaliir.PNG",
    githubLink: "https://github.com/Ssuarez0/",
    websiteLink: ""
}, {
    key: 4,
    name: "Test project",
    projectImg: "./media/images/Revaliir.PNG",
    githubLink: "https://github.com/Ssuarez0/",
    websiteLink: ""
}, {
    key: 5,
    name: "Test project",
    projectImg: "./media/images/Revaliir.PNG",
    githubLink: "https://github.com/Ssuarez0/",
    websiteLink: ""
}, {
    key: 6,
    name: "Test project",
    projectImg: "./media/images/Revaliir.PNG",
    githubLink: "https://github.com/Ssuarez0/",
    websiteLink: ""
}, {
    key: 7,
    name: "Test project",
    projectImg: "./media/images/Revaliir.PNG",
    githubLink: "https://github.com/Ssuarez0/",
    websiteLink: ""
}, {
    key: 8,
    name: "Test project",
    projectImg: "./media/images/Revaliir.PNG",
    githubLink: "https://github.com/Ssuarez0/",
    websiteLink: ""
}, {
    key: 9,
    name: "Test project",
    projectImg: "./media/images/Revaliir.PNG",
    githubLink: "https://github.com/Ssuarez0/",
    websiteLink: ""
}, {
    key: 10,
    name: "Test project",
    projectImg: "./media/images/Revaliir.PNG",
    githubLink: "https://github.com/Ssuarez0/",
    websiteLink: ""
}, {
    key: 11,
    name: "Test project",
    projectImg: "./media/images/Revaliir.PNG",
    githubLink: "https://github.com/Ssuarez0/",
    websiteLink: ""
}];

//Classes

var ProjectsSlideshow = function (_React$Component) {
    _inherits(ProjectsSlideshow, _React$Component);

    function ProjectsSlideshow(props) {
        _classCallCheck(this, ProjectsSlideshow);

        var _this = _possibleConstructorReturn(this, (ProjectsSlideshow.__proto__ || Object.getPrototypeOf(ProjectsSlideshow)).call(this, props));

        _this.state = {
            slides: currentProjects,
            currentSlide: 1,
            previousSlide: -1
        };

        _this.handleSlideSelect = _this.handleSlideSelect.bind(_this);
        return _this;
    }

    _createClass(ProjectsSlideshow, [{
        key: "handleSlideSelect",
        value: function handleSlideSelect(nextSlide) {
            //Adjust current slide by clicking on the previews
            if (nextSlide <= this.state.slides.length && nextSlide > 0) {
                this.setState(Object.assign({}, this.state, { currentSlide: nextSlide, previousSlide: this.state.currentSlide }));
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var slides = this.state.slides.map(function (slide, index) {
                return React.createElement(Slide, {
                    key: (index + 1).toString(),
                    project: slide,
                    currentSlide: index + 1 === _this2.state.currentSlide ? true : false,
                    previousSlide: index + 1 === _this2.state.previousSlide ? true : false,
                    justInitialized: _this2.state.previousSlide === -1 ? true : false
                });
            });

            return React.createElement(
                "div",
                { className: "col-xs-12 slideshow" },
                React.createElement(SlideshowControls, {
                    projects: this.state.slides,
                    currentSlide: this.state.currentSlide,
                    handleSlideSelect: this.handleSlideSelect
                }),
                React.createElement(
                    "div",
                    { className: "slide-section" },
                    React.createElement(
                        "div",
                        { className: "slides" },
                        slides
                    )
                )
            );
        }
    }]);

    return ProjectsSlideshow;
}(React.Component);

var Slide = function (_React$Component2) {
    _inherits(Slide, _React$Component2);

    function Slide() {
        _classCallCheck(this, Slide);

        return _possibleConstructorReturn(this, (Slide.__proto__ || Object.getPrototypeOf(Slide)).apply(this, arguments));
    }

    _createClass(Slide, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "slide " + (this.props.justInitialized && this.props.currentSlide ? "initial-slide" : this.props.currentSlide ? "current-slide" : this.props.previousSlide ? "previous-slide" : "") },
                    React.createElement("img", { src: this.props.project.projectImg })
                )
            );
        }
    }]);

    return Slide;
}(React.Component);

var SlideshowControls = function (_React$Component3) {
    _inherits(SlideshowControls, _React$Component3);

    function SlideshowControls(props) {
        _classCallCheck(this, SlideshowControls);

        var _this4 = _possibleConstructorReturn(this, (SlideshowControls.__proto__ || Object.getPrototypeOf(SlideshowControls)).call(this, props));

        _this4.handleSlideSelect = _this4.handleSlideSelect.bind(_this4);
        _this4.handleDecrementSlide = _this4.handleDecrementSlide.bind(_this4);
        _this4.handleIncrementSlide = _this4.handleIncrementSlide.bind(_this4);
        _this4.scrollThumbnails = _this4.scrollThumbnails.bind(_this4);
        _this4.currentThumbnail = React.createRef();
        return _this4;
    }

    _createClass(SlideshowControls, [{
        key: "handleSlideSelect",
        value: function handleSlideSelect(nextSlideNumber) {
            this.props.handleSlideSelect(nextSlideNumber);
        }
    }, {
        key: "handleDecrementSlide",
        value: function handleDecrementSlide() {
            var nextSlide = this.props.currentSlide - 1;
            if (nextSlide < 1) nextSlide = this.props.projects.length;
            this.handleSlideSelect(nextSlide);
        }
    }, {
        key: "handleIncrementSlide",
        value: function handleIncrementSlide() {
            var nextSlide = this.props.currentSlide + 1;
            if (nextSlide > this.props.projects.length) nextSlide = 1;
            this.handleSlideSelect(nextSlide);
        }
    }, {
        key: "scrollThumbnails",
        value: function scrollThumbnails() {
            var thumbnailNode = this.currentThumbnail;
            thumbnailNode.scrollIntoView();
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.scrollThumbnails();
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            this.scrollThumbnails();
        }
    }, {
        key: "render",
        value: function render() {
            var _this5 = this;

            var slides = this.props.projects.map(function (project, index) {
                var slideNumber = index + 1;
                if (slideNumber === _this5.props.currentSlide) {
                    return React.createElement(
                        "li",
                        { ref: function ref(node) {
                                return _this5.currentThumbnail = node;
                            }, key: slideNumber, onClick: function onClick() {
                                return _this5.handleSlideSelect(slideNumber);
                            } },
                        React.createElement("img", { className: "project-thumbnail current-project-thumbnail", src: project.projectImg })
                    );
                } else {
                    return React.createElement(
                        "li",
                        { key: slideNumber, onClick: function onClick() {
                                return _this5.handleSlideSelect(slideNumber);
                            } },
                        React.createElement("img", { className: "project-thumbnail", src: project.projectImg })
                    );
                }
            });

            var currentSlide = this.props.projects[this.props.currentSlide - 1];

            var links = [];
            if (currentSlide.websiteLink && currentSlide.websiteLink.length > 0) links.push(React.createElement(
                "a",
                { key: "website-link", className: "project-link", title: "Website", target: "_blank", href: currentSlide.websiteLink },
                React.createElement("i", { className: "fas fa-globe" })
            ));
            if (currentSlide.githubLink && currentSlide.githubLink.length > 0) links.push(React.createElement(
                "a",
                { key: "github-link", className: "project-link", title: "Github", target: "_blank", href: currentSlide.githubLink },
                React.createElement("i", { className: "fab fa-github" })
            ));

            return React.createElement(
                "div",
                { className: "project-tools" },
                React.createElement(
                    "div",
                    { className: "project-thumbnails" },
                    React.createElement(
                        "ul",
                        null,
                        slides
                    )
                ),
                React.createElement(
                    "div",
                    { className: "slide-buttons" },
                    React.createElement(
                        "button",
                        { onClick: this.handleDecrementSlide },
                        React.createElement("i", { className: "fas fa-arrow-alt-circle-left" })
                    ),
                    React.createElement(
                        "button",
                        { onClick: this.handleIncrementSlide },
                        React.createElement("i", { className: "fas fa-arrow-alt-circle-right" })
                    )
                ),
                React.createElement(
                    "div",
                    { className: "project-information" },
                    React.createElement(
                        "h2",
                        null,
                        currentSlide.name
                    ),
                    React.createElement(
                        "p",
                        null,
                        currentSlide.description
                    ),
                    React.createElement(
                        "div",
                        { className: "project-links" },
                        links
                    )
                )
            );
        }
    }]);

    return SlideshowControls;
}(React.Component);

ReactDOM.render(React.createElement(ProjectsSlideshow, null), document.getElementById('projects'));