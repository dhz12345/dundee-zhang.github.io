import { motion, Variants } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";

import "/src/routes/components/css/works.css";

const viewProject = (repo: string): undefined => {
    window.open(`https://github.com/dundeezhang/${repo}`, "_blank");
};

const openLink = (link: string): undefined => {
    window.open(link, "_blank");
};

const CardDiv: Variants = {
    offscreen: {
        y: 10,
        opacity: 0.1,
        scale: 0.9,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.5,
        },
    },
};

interface Datas {
    title: string;
    langs: string;
    desc: string;
    pic: string;
    repository: string;
    buttontext: string;
    hideclass: string;
    externallink: string;
}

const worksData: [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
][] = [
    [
        "Portfolio Site",
        "TypeScript, React, CSS",
        "An introduction website to show my projects and experience.",
        "website.png",
        "dundeezhangv4",
        "Github Repository",
        "",
        "https://dundeezhang.com",
    ],
    [
        "Blog Page",
        "TypeScript, React, Markdown",
        "My personal blog. Contains notes and articles I've written.",
        "blog.png",
        "dundeezhangv4",
        "Github Repository",
        "",
        "https://dundeezhang.com/blog",
    ],
    [
        "More Projects",
        "More Languages",
        "Most of my projects are found on my GitHub profile or dhz.app.",
        "future.jpg",
        "",
        "Github Profile",
        "",
        "https://dhz.app",
    ],
];

function WorksCard({
    title,
    langs,
    desc,
    pic,
    repository,
    buttontext,
    hideclass,
    externallink,
}: Datas) {
    return (
        <Col>
            <motion.div
                className="card-container"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ amount: 0.5 }}
                variants={CardDiv}
            >
                <Card className="project-cards">
                    <a onClick={() => viewProject(repository)}>
                        <Card.Img
                            variant="top"
                            src={`/works/${pic}`}
                            className="project-images"
                        />
                    </a>

                    <Card.Body className="ibm-plex-mono-light">
                        <a onClick={() => viewProject(repository)}>
                            <Card.Title className="project-title">
                                {title}
                            </Card.Title>
                            <Card.Subtitle className="mb-2 tools-used">
                                {langs}
                            </Card.Subtitle>
                            <Card.Text className="about-project-desc">
                                {desc}
                            </Card.Text>
                        </a>

                        <button
                            type="button"
                            onClick={() => viewProject(repository)}
                            className="github-button"
                        >
                            <i className="fa-brands fa-github github-button-icon"></i>
                            {buttontext}
                        </button>
                        <button
                            type="button"
                            onClick={() => openLink(externallink)}
                            className={hideclass}
                            id="external-link-button"
                        >
                            <i className="fa fa-external-link"></i>
                        </button>
                    </Card.Body>
                </Card>
            </motion.div>
        </Col>
    );
}

export default function WorkCards() {
    return worksData.map(
        ([
            title,
            langs,
            desc,
            pic,
            repository,
            buttontext,
            hideclass,
            externallink,
        ]) => (
            <WorksCard
                title={title}
                langs={langs}
                desc={desc}
                pic={pic}
                repository={repository}
                buttontext={buttontext}
                hideclass={hideclass}
                externallink={externallink}
                key={null}
            />
        )
    );
}
