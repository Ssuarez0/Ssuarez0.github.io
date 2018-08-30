'use strict';

//react and projects

//Projects
//Defined outside to keep them organized. Would normally store as json, but no need right now.

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

//Classes

class ProjectsSlideshow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: currentProjects,
            currentSlide: 1,
            previousSlide: -1
        }

        this.handleSlideSelect = this.handleSlideSelect.bind(this);
    }

    handleSlideSelect(nextSlide) {
        //Adjust current slide by clicking on the previews
        if (nextSlide <= this.state.slides.length && nextSlide > 0) {
            this.setState(Object.assign({}, this.state, { currentSlide: nextSlide, previousSlide: this.state.currentSlide }));
        }
    }

    render() {
        const slides = this.state.slides.map((slide, index) => {
            return (
                <Slide
                    key={(index + 1).toString()}
                    project={slide}
                    currentSlide={index + 1 === this.state.currentSlide ? true : false}
                    previousSlide={index + 1 === this.state.previousSlide ? true : false}
                    justInitialized={this.state.previousSlide === -1 ? true : false}
                />
            );
        });

        return (
            <div className="col-xs-12 slideshow">
                <SlideshowControls
                    projects={this.state.slides}
                    currentSlide={this.state.currentSlide}
                    handleSlideSelect={this.handleSlideSelect}
                />
                <div className="slide-section">
                    <div className="slides">
                        {slides}
                    </div>
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

class SlideshowControls extends React.Component {
    constructor(props) {
        super(props);

        this.handleSlideSelect = this.handleSlideSelect.bind(this);
        this.handleDecrementSlide = this.handleDecrementSlide.bind(this);
        this.handleIncrementSlide = this.handleIncrementSlide.bind(this);
        this.scrollThumbnails = this.scrollThumbnails.bind(this);
        this.currentThumbnail = React.createRef();
    }

    handleSlideSelect(nextSlideNumber) {
        this.props.handleSlideSelect(nextSlideNumber);
    }

    handleDecrementSlide() {
        let nextSlide = this.props.currentSlide - 1;
        if (nextSlide < 1) nextSlide = this.props.projects.length;
        this.handleSlideSelect(nextSlide);
    }

    handleIncrementSlide() {
        let nextSlide = this.props.currentSlide + 1;
        if (nextSlide > this.props.projects.length) nextSlide = 1;
        this.handleSlideSelect(nextSlide);
    }

    scrollThumbnails() {
        const thumbnailNode = this.currentThumbnail;
        thumbnailNode.scrollIntoView();
    }

    componentDidMount() {
        this.scrollThumbnails();
    }

    componentDidUpdate() {
        this.scrollThumbnails();
    }

    render() {
        const slides = this.props.projects.map((project, index) => {
            const slideNumber = index + 1;
            if(slideNumber === this.props.currentSlide) {
                return (
                    <li ref={node => this.currentThumbnail = node} key={slideNumber} onClick={()=>this.handleSlideSelect(slideNumber)}>
                        <img className="project-thumbnail current-project-thumbnail" src={project.projectImg} />
                    </li>
                );
            } else {
                return (
                    <li key={slideNumber} onClick={()=>this.handleSlideSelect(slideNumber)}>
                        <img className="project-thumbnail" src={project.projectImg} />
                    </li>
                );
            }
        });

        const currentSlide = this.props.projects[this.props.currentSlide - 1];

        let links = [];
        if (currentSlide.websiteLink && currentSlide.websiteLink.length > 0) links.push(<a key="website-link" className="project-link" title="Website" target="_blank" href={currentSlide.websiteLink}><i className="fas fa-globe"></i></a>);
        if (currentSlide.githubLink && currentSlide.githubLink.length > 0) links.push(<a key="github-link" className="project-link" title="Github" target="_blank" href={currentSlide.githubLink}><i className="fab fa-github"></i></a>);

        return (
            <div className="project-tools">
                <div className="project-thumbnails">
                    <ul>
                        {slides}
                    </ul>  
                </div>
                <div className="slide-buttons">
                    <button onClick={this.handleDecrementSlide}><i className="fas fa-arrow-alt-circle-left"></i></button>
                    <button onClick={this.handleIncrementSlide}><i className="fas fa-arrow-alt-circle-right"></i></button>
                </div>
                <div  className="project-information">
                    <h2>{currentSlide.name}</h2>
                    <p>{currentSlide.description}</p>
                    <div className="project-links">
                        {links}
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<ProjectsSlideshow />, document.getElementById('projects'));