'use strict';

const currentProjects = [
    {
        name: "Test project",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    },
    {
        name: "Test project",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    },
    {
        name: "Test project",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    }, {
        name: "Test project",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    },
    {
        name: "Test project",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    },
    {
        name: "Test project",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    },
    {
        name: "Test project",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    },
    {
        name: "Test project",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    },
    {
        name: "Test project",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    },
    {
        name: "Test project",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    },
    {
        name: "Test project",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    },
    {
        name: "Test project",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    }
]

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
class ProjectsSlideshow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: [],
            currentSlide: 1
        }

        this.handleSlideSelect = this.handleSlideSelect.bind(this);
        this.handleAnimatedTransition = this.handleAnimatedTransition.bind(this);
    }

    componentDidMount() {
        //Populate the projects state
        this.setState(Object.assign({}, this.state, {slides: currentProjects}));
    }

    handleSlideSelect() {
        //Adjust current slide by clicking on the previews
    }

    handleAnimatedTransition() {
        //Optional: First, extend from the parrallellogram to the bottom of the screen. This will cut the screenshot image
        //Mandatory: Animated expansion of the slide from the center.
    }

    render() {
        const slides = this.state.slides.map(slide => {
            return(
                <Slide
                    project={slide}
                />
            ); 
        });

        return (
            <div>
                This is the current slideshow
                {slides}
            </div>
        );
    }
}

class Slide extends React.Component {
    render() {
        const projectDisplay = this.props.project.websiteLink.length > 0 ? 
            <div>
                <iframe>
                    This is an iframe.
                </iframe>
            </div>
            :
            <div>
                <img src={this.props.project.projectImg}/>
            </div>;


        return (
            <div>
                {projectDisplay}
            </div>
        );
    }
}

ReactDOM.render(<ProjectsSlideshow/>, document.getElementById('projects'));