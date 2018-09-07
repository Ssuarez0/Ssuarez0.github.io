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
    name: "Revaliir.net",
    description: "A medium sized, forum website serving a dedicated, writing community. </br><strong>Live technology stack:</strong> Django 1.8, python 2.7, jquery, and Bootstrap. </br><strong>In development technology stack:</strong> React.js, Node.js, Graphene, Django 2.0+, Python 3.7+",
    projectImg: "./media/images/Revaliir.PNG",
    githubLink: "",
    websiteLink: "https://revaliir.net/index/"
}, {
    key: 1,
    name: "Pomodoro Clock",
    description: "An alternating clock to help users keep track of taking regular breaks. </br><strong>Technology stack:</strong> ES6, React.js, SCSS, Bootstrap.",
    projectImg: "./media/images/PomodoroClock.PNG",
    githubLink: "",
    codepenLink: "https://codepen.io/CodeAni/pen/Zjojdr",
    websiteLink: "https://codepen.io/CodeAni/full/Zjojdr/"
}, {
    key: 2,
    name: "React Calculator",
    description: "A simple calculator built using React. </br><strong>Technology stack:</strong> ES6, React.js, SCSS, Bootstrap.",
    projectImg: "./media/images/ReactCalculator.PNG",
    githubLink: "",
    codepenLink: "https://codepen.io/CodeAni/pen/JBNjYr",
    websiteLink: "https://codepen.io/CodeAni/full/JBNjYr/"
}, {
    key: 3,
    name: "Drum Machine",
    description: "A 'drum machine' that allows the user to play 9 different notes from a piano by either clicking buttons or utilizing the keyboard. </br><strong>Technology stack:</strong> ES6, React.js, SCSS, Bootstrap",
    projectImg: "./media/images/DrumMachine.PNG",
    githubLink: "",
    codepenLink: "https://codepen.io/CodeAni/pen/RBPmLV",
    websiteLink: "https://codepen.io/CodeAni/full/RBPmLV"
}, {
    key: 4,
    name: "Markdown Previewer",
    description: "A markdown previewer that is actually the alpha of a custom markdown editor. This reads markdown syntax in a textbox and renders it as regular html. </br><strong>Technology stack:</strong> ES6, React.js, SCSS, Bootstrap, Markdown.js",
    projectImg: "./media/images/MarkdownPreviewer.PNG",
    githubLink: "",
    codepenLink: "https://codepen.io/CodeAni/pen/OwPqoJ",
    websiteLink: "https://codepen.io/CodeAni/full/OwPqoJ"
}, {
    key: 5,
    name: "Random Quote Machine",
    description: "A very simple react project that uses fetch to acquire a json object of quotes and then choses one at random that is appropriate for twitter. </br><strong>Technology stack:</strong> ES6, React.js, SCSS, Bootstrap, Fetch.js",
    projectImg: "./media/images/RandomQuote.PNG",
    githubLink: "",
    codepenLink: "https://codepen.io/CodeAni/pen/RBbNKg",
    websiteLink: "https://codepen.io/CodeAni/full/RBbNKg"
}, {
    key: 6,
    name: "Spanish Frequency Analyzer",
    description: "A desktop application built for a high school Spanish teacher to help determine the frequency at which words appear in lecture notes. </br><strong>Technology stack:</strong> C# and WPF.",
    projectImg: "./media/images/spanishFrequency.PNG",
    githubLink: "https://github.com/Ssuarez0/spanish-nl-analyzer",
    codepenLink: "",
    websiteLink: ""
}, {
    key: 7,
    name: "CS-Club-Hackathon Registration Page 2017",
    description: "A registration page for a 2017 Hackathon hosted by the CSU Stanislaus CS Club and sponsored by Novo Consulting. </br><strong>Technology stack:</strong> LAMP stack project with MySQL, PHP, and a Linux server.",
    projectImg: "./media/images/CS-Club-Hackathon.PNG",
    githubLink: "https://github.com/Ssuarez0/CS-Club-Hackathon",
    codepenLink: "",
    websiteLink: "https://hopper.csustan.edu/~ssuarez/cs-club-hackathon/index.html"
}, {
    key: 8,
    name: "Stanislaus Bird Encyclopedia",
    description: "A website built to list all the birds in Stanislaus county in alphabetical order and then supply individual pages full of details for each bird. </br><strong>Technology stack:</strong> Django 1.10 and python 3.5.",
    projectImg: "./media/images/BirdDatabase.PNG",
    githubLink: "https://github.com/Ssuarez0/CS4950---Bird-Encyclopedia",
    codepenLink: "",
    websiteLink: ""
}, {
    key: 9,
    name: "Battle Arena",
    description: "A battle arena game with a fully functioning AI operating on a modified Negamax algorithm.</br><strong>Technology stack:</strong> Fully done in python 3.5 on Windows",
    projectImg: "./media/images/BattleArenaSample.PNG",
    githubLink: "https://github.com/Ssuarez0/CS4480---Battle-Arena-AI",
    codepenLink: "",
    websiteLink: ""
}, {
    key: 10,
    name: "Sample Biography Page",
    description: "A sample website of a fictional character's life. </br><strong>Technology stack:</strong> HTML and Bootstrap.",
    projectImg: "./media/images/SampleBiography.PNG",
    githubLink: "https://github.com/Ssuarez0/AaronWhiteBiographyPage",
    codepenLink: "https://codepen.io/CodeAni/pen/qpzBJQ",
    websiteLink: "https://codepen.io/CodeAni/full/qpzBJQ"
}, {
    key: 11,
    name: "Library Database Website",
    description: "A website for querying a hypothetical library. </br><strong>Technology stack:</strong> LAMP stack project with MySQL, PHP, and a Linux server.",
    projectImg: "./media/images/LibraryDatabase.PNG",
    githubLink: "https://github.com/Ssuarez0/CS4250-Library-Database",
    codepenLink: "",
    websiteLink: ""
}, {
    key: 12,
    name: "Bee Pesticide Simulation",
    description: "A simulation meant to demonstrate the interaction between polination, bees, pesticides and the food supply. </br><strong>Technology stack:</strong> Netlogo",
    projectImg: "./media/images/BeePesticideModel.PNG",
    githubLink: "https://github.com/Ssuarez0/CS3200-Bee-Pesticide-Simulation",
    codepenLink: "",
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
                { className: "slideshow-container" },
                React.createElement(
                    "div",
                    { className: "slideshow-main" },
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
                ),
                React.createElement(SlideDescription, { currentSlide: this.state.slides[this.state.currentSlide - 1] })
            );
        }
    }]);

    return ProjectsSlideshow;
}(React.Component);

//Handles the generation and styles for a slide image


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

//Handles the appendment of


var SlideDescription = function (_React$Component3) {
    _inherits(SlideDescription, _React$Component3);

    function SlideDescription() {
        _classCallCheck(this, SlideDescription);

        return _possibleConstructorReturn(this, (SlideDescription.__proto__ || Object.getPrototypeOf(SlideDescription)).apply(this, arguments));
    }

    _createClass(SlideDescription, [{
        key: "render",
        value: function render() {
            //Simplify prop currentSlide
            var currentSlide = this.props.currentSlide;
            //Format description
            var description = { __html: currentSlide.description };
            //Assign the links to the current slide
            var links = [];
            if (currentSlide.websiteLink && currentSlide.websiteLink.length > 0) links.push(React.createElement(
                "a",
                { key: "website-link", className: "project-link", title: "Live Website", target: "_blank", href: currentSlide.websiteLink },
                React.createElement("i", { className: "fas fa-globe" })
            ));
            if (currentSlide.githubLink && currentSlide.githubLink.length > 0) links.push(React.createElement(
                "a",
                { key: "github-link", className: "project-link", title: "Github", target: "_blank", href: currentSlide.githubLink },
                React.createElement("i", { className: "fab fa-github" })
            ));
            if (currentSlide.codepenLink && currentSlide.codepenLink.length > 0) links.push(React.createElement(
                "a",
                { key: "codepen-link", className: "project-link", title: "CodePen", target: "_blank", href: currentSlide.codepenLink },
                React.createElement("i", { "class": "fab fa-codepen" })
            ));

            return React.createElement(
                "div",
                { className: "current-slide-details" },
                React.createElement(
                    "h4",
                    { className: "slideName" },
                    currentSlide.name
                ),
                React.createElement("p", { className: "slideDescription", dangerouslySetInnerHTML: description }),
                React.createElement(
                    "div",
                    { className: "project-links" },
                    links
                )
            );
        }
    }]);

    return SlideDescription;
}(React.Component);

var SlideshowControls = function (_React$Component4) {
    _inherits(SlideshowControls, _React$Component4);

    function SlideshowControls(props) {
        _classCallCheck(this, SlideshowControls);

        var _this5 = _possibleConstructorReturn(this, (SlideshowControls.__proto__ || Object.getPrototypeOf(SlideshowControls)).call(this, props));

        _this5.handleSlideSelect = _this5.handleSlideSelect.bind(_this5);
        _this5.handleDecrementSlide = _this5.handleDecrementSlide.bind(_this5);
        _this5.handleIncrementSlide = _this5.handleIncrementSlide.bind(_this5);
        _this5.scrollThumbnails = _this5.scrollThumbnails.bind(_this5);
        _this5.currentThumbnail = React.createRef();
        return _this5;
    }

    _createClass(SlideshowControls, [{
        key: "handleSlideSelect",
        value: function handleSlideSelect(nextSlideNumber) {
            this.props.handleSlideSelect(nextSlideNumber);
        }
    }, {
        key: "handleDecrementSlide",
        value: function handleDecrementSlide(e) {
            e.preventDefault();
            var nextSlide = this.props.currentSlide - 1;
            if (nextSlide < 1) nextSlide = this.props.projects.length;
            this.handleSlideSelect(nextSlide);
        }
    }, {
        key: "handleIncrementSlide",
        value: function handleIncrementSlide(e) {
            e.preventDefault();
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
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            //this.scrollThumbnails();
            //Commented out but left in in case I want to use this in the future.
            //I didn't like the way it functioned for the moment.
        }
    }, {
        key: "render",
        value: function render() {
            var _this6 = this;

            //Map the slides to thumbnails
            var slides = this.props.projects.map(function (project, index) {
                var slideNumber = index + 1;
                if (slideNumber === _this6.props.currentSlide) {
                    return React.createElement(
                        "li",
                        { ref: function ref(node) {
                                return _this6.currentThumbnail = node;
                            }, key: slideNumber, onClick: function onClick() {
                                return _this6.handleSlideSelect(slideNumber);
                            } },
                        React.createElement("img", { className: "project-thumbnail current-project-thumbnail", src: project.projectImg })
                    );
                } else {
                    return React.createElement(
                        "li",
                        { key: slideNumber, onClick: function onClick() {
                                return _this6.handleSlideSelect(slideNumber);
                            } },
                        React.createElement("img", { className: "project-thumbnail", src: project.projectImg })
                    );
                }
            });

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
                    React.createElement("a", { className: "maximize-image" }),
                    React.createElement(
                        "a",
                        { className: "slide-button", href: "#", onClick: this.handleDecrementSlide },
                        React.createElement("i", { className: "fas fa-arrow-alt-circle-left" })
                    ),
                    React.createElement(
                        "a",
                        { className: "slide-button", href: "#", onClick: this.handleIncrementSlide },
                        React.createElement("i", { className: "fas fa-arrow-alt-circle-right" })
                    )
                )
            );
        }
    }]);

    return SlideshowControls;
}(React.Component);

ReactDOM.render(React.createElement(ProjectsSlideshow, null), document.getElementById('projects'));