import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function FooterComp() {
    return (
        <div className="flex h-16 w-full flex-wrap items-center justify-between bg-blue-950">
            <h6 className="pl-4 text-white">©Copyright 2024</h6>
            <div className="flex flex-wrap">
                <a
                    draggable="false"
                    target="_blank"
                    href="https://github.com/BorisForis"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        icon={faGithub}
                        className="m-2 size-9 hover:scale-90"
                    />
                </a>
                <a
                    draggable="false"
                    target="_blank"
                    href="https://www.linkedin.com/in/duca-mircea-97a951192/"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        className="m-2 size-9 hover:scale-90"
                    />
                </a>
            </div>
            <div className="flex h-auto w-40 flex-row items-center justify-center text-3xl"></div>
        </div>
    );
}
