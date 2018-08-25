'use strict';

//react and projects
const currentProjects = [
    {
        key: 0,
        name: "Test project",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: "https://revaliir.net/index/"
    },
    {
        key: 1,
        name: "Test project",
        projectImg: "./media/images/spanishFrequency.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    },
    {
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
    },
    {
        key: 4,
        name: "Test project",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    },
    {
        key: 5,
        name: "Test project",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    },
    {
        key: 6,
        name: "Test project",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    },
    {
        key: 7,
        name: "Test project",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    },
    {
        key: 8,
        name: "Test project",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    },
    {
        key: 9,
        name: "Test project",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    },
    {
        key: 10,
        name: "Test project",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    },
    {
        key: 11,
        name: "Test project",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    }
]

class ProjectsSlideshow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: [],
            currentSlide: 1,
            previousSlide: -1
        }

        this.handleSlideSelect = this.handleSlideSelect.bind(this);
    }

    componentDidMount() {
        //Populate the projects state
        this.setState(Object.assign({}, this.state, { slides: currentProjects }));
    }

    handleSlideSelect(nextSlide) {
        //Adjust current slide by clicking on the previews
        if (this.state.slides.length >= nextSlide && nextSlide > 0) {
            this.setState(Object.assign({}, this.state, { currentSlide: nextSlide, previousSlide: this.state.currentSlide }));
        }
    }

    render() {
        const slides = this.state.slides.map((slide, index) => {
            return (
                <Slide
                    key={index + 1}
                    project={slide}
                    currentSlide={index + 1 === this.state.currentSlide ? true : false}
                    previousSlide={index + 1 === this.state.previousSlide ? true : false}
                    justInitialized={this.state.previousSlide === -1 ? true : false}
                />
            );
        });

        return (
            <div className="col-xs-12 slideshow">
                <div className="project-selection">
                    <button onClick={() => this.handleSlideSelect(this.state.currentSlide + 1)}>Test</button>
                </div>
                <div className="slides">
                    {slides}
                </div>
            </div>
        );
    }
}

class Slide extends React.Component {

    render() {
        return (
            <div>
                <div className={"slide " + (this.props.justInitialized && this.props.currentSlide ? "initial-slide" : this.props.currentSlide ? "current-slide" : this.props.previousSlide ? "previous-slide" : "")}>
                    <img src={this.props.project.projectImg} />
                </div>
            </div>
        );
    }
}

class SlideSelection extends React.Component {
    constructor(props) {
        super(props);

        this.handleSlideSelect = this.handleSlideSelect.bind(this);
    }

    handleSlideSelect(e) {
        this.props.handleSlideSelect(e.target.value);
    }

    render() {

        return (
            <div className="project-selection">
                <button onClick={this.handleSlideSelect}>Test</button>
            </div>
        );
    }
}


ReactDOM.render(<ProjectsSlideshow />, document.getElementById('projects'));


