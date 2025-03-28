import { SVGProps } from "react";

const StarIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <span>
            <svg 
                height="16" 
                viewBox="0 -960 960 960" 
                width="16" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="m384-334 96-74 96 74-36-122 90-64h-112l-38-124-38 124h-112l90 64zm-151 214 93-304-246-176h304l96-320 96 320h304l-246 176 93 304-247-188z"/>
            </svg>
        </span>
    )
};

export default StarIcon;