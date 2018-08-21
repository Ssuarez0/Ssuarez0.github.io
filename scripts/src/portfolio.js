var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var currentProjects = [{
    name: "Test project",
    projectImg: "./media/images/",
    githubLink: "https://github.com/Ssuarez0/",
    websiteLink: ""
}, {
    name: "Test project",
    projectImg: "./media/images/",
    githubLink: "https://github.com/Ssuarez0/",
    websiteLink: ""
}, {
    name: "Test project",
    projectImg: "./media/images/",
    githubLink: "https://github.com/Ssuarez0/",
    websiteLink: ""
}, {
    name: "Test project",
    projectImg: "./media/images/",
    githubLink: "https://github.com/Ssuarez0/",
    websiteLink: ""
}, {
    name: "Test project",
    projectImg: "./media/images/",
    githubLink: "https://github.com/Ssuarez0/",
    websiteLink: ""
}, {
    name: "Test project",
    projectImg: "./media/images/",
    githubLink: "https://github.com/Ssuarez0/",
    websiteLink: ""
}, {
    name: "Test project",
    projectImg: "./media/images/",
    githubLink: "https://github.com/Ssuarez0/",
    websiteLink: ""
}, {
    name: "Test project",
    projectImg: "./media/images/",
    githubLink: "https://github.com/Ssuarez0/",
    websiteLink: ""
}, {
    name: "Test project",
    projectImg: "./media/images/",
    githubLink: "https://github.com/Ssuarez0/",
    websiteLink: ""
}, {
    name: "Test project",
    projectImg: "./media/images/",
    githubLink: "https://github.com/Ssuarez0/",
    websiteLink: ""
}, {
    name: "Test project",
    projectImg: "./media/images/",
    githubLink: "https://github.com/Ssuarez0/",
    websiteLink: ""
}, {
    name: "Test project",
    projectImg: "./media/images/",
    githubLink: "https://github.com/Ssuarez0/",
    websiteLink: ""
}];

//jquery
$(document).ready(function () {
    $('a.scrollable').click(function (e) {
        e.preventDefault();
        var $anchorHref = $(this).attr('href');
        $elementId = $($anchorHref);
        /* Both html and body necessary to accomodate all browsers. */
        $('html, body').stop().animate({ scrollTop: $($elementId).offset().top }, 1400);
    });

    $('#portfolio-navigation a').click(function (e) {
        $('#portfolio-navigation').collapse('hide');
    });
});

//react

var ProjectsSlideshow = function (_React$Component) {
    _inherits(ProjectsSlideshow, _React$Component);

    function ProjectsSlideshow(props) {
        _classCallCheck(this, ProjectsSlideshow);

        var _this = _possibleConstructorReturn(this, (ProjectsSlideshow.__proto__ || Object.getPrototypeOf(ProjectsSlideshow)).call(this, props));

        _this.state = {
            slides: [],
            currentSlide: 1
        };

        _this.handleSlideSelect = _this.handleSlideSelect.bind(_this);
        _this.handleAnimatedTransition = _this.handleAnimatedTransition.bind(_this);
        return _this;
    }

    _createClass(ProjectsSlideshow, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            //Populate the projects state
            this.setState({ slides: currentProjects });
        }
    }, {
        key: "handleSlideSelect",
        value: function handleSlideSelect() {
            //Adjust current slide by clicking on the previews
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
            var slides = this.state.slides.map(function (slide) {
                React.createElement(Slide, {
                    project: slide
                });
            });

            return React.createElement(
                "div",
                null,
                slides
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
            var projectDisplay = this.props.project.hasOwnProperty("websiteLink") ? React.createElement(
                "div",
                null,
                React.createElement("iframe", null)
            ) : React.createElement(
                "div",
                null,
                React.createElement("img", { src: slide.projectImg })
            );
            return React.createElement(
                "div",
                null,
                projectDisplay
            );
        }
    }]);

    return Slide;
}(React.Component);

ReactDOM.render(React.createElement(ProjectsSlideshow, null), document.getElementById("projects"));