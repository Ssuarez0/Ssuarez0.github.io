'use strict';

//react and projects

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
    projectImg: "./media/images/Revaliir.PNG",
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

var ProjectsSlideshow = function (_React$Component) {
    _inherits(ProjectsSlideshow, _React$Component);

    function ProjectsSlideshow(props) {
        _classCallCheck(this, ProjectsSlideshow);

        var _this = _possibleConstructorReturn(this, (ProjectsSlideshow.__proto__ || Object.getPrototypeOf(ProjectsSlideshow)).call(this, props));

        _this.state = {
            slides: [],
            currentSlide: 1,
            previousSlide: 1
        };

        _this.handleSlideSelect = _this.handleSlideSelect.bind(_this);
        _this.handleAnimatedTransition = _this.handleAnimatedTransition.bind(_this);
        return _this;
    }

    _createClass(ProjectsSlideshow, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            //Populate the projects state
            this.setState(Object.assign({}, this.state, { slides: currentProjects }));
        }
    }, {
        key: "handleSlideSelect",
        value: function handleSlideSelect(nextSlide) {
            //Adjust current slide by clicking on the previews
            if (this.state.slides.length >= nextSlide && nextSlide > 0) {
                this.setState(Object.assign({}, this.state, { currentSlide: nextSlide, previousSlide: this.state.currentSlide }));
            }
        }
    }, {
        key: "handleAnimatedTransition",
        value: function handleAnimatedTransition() {
            //Optional: First, extend from the parrallellogram to the bottom of the screen. This will cut the screenshot image
            //Mandatory: Animated expansion of the slide from the center.
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var slides = this.state.slides.map(function (slide, index) {
                return React.createElement(Slide, {
                    key: index + 1,
                    project: slide,
                    currentSlide: index + 1 === _this2.state.currentSlide ? true : false,
                    previousSlide: index + 1 === _this2.state.previousSlide ? true : false
                });
            });

            return React.createElement(
                "div",
                { className: "col-xs-12 slideshow" },
                React.createElement(
                    "div",
                    { className: "toolbar" },
                    React.createElement(
                        "button",
                        { onClick: function onClick() {
                                return _this2.handleSlideSelect(_this2.state.currentSlide + 1);
                            } },
                        "Test"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "slides" },
                    slides
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
                { className: "slide " + (this.props.currentSlide ? "current-slide" : this.props.previousSlide ? "previous-slide" : "") },
                React.createElement("img", { src: this.props.project.projectImg })
            );
        }
    }]);

    return Slide;
}(React.Component);

ReactDOM.render(React.createElement(ProjectsSlideshow, null), document.getElementById('projects'));