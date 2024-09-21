import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { SiCodechef, SiLeetcode } from "react-icons/si";

export const links = [
  {
    label: "Github",
    color: "white",
    size: 24,
    icon: AiOutlineGithub,
    link: 'https://github.com/VinaySingh96'
  },
  {
    label: "Linkedin",
    color: "white",
    size: 24,
    icon: AiOutlineLinkedin,
    link: 'https://www.linkedin.com/in/vinay-singh-3b26721b0'
  },
  {
    label: "Codechef",
    color: "white",
    size: 24,
    icon: SiCodechef,
    isHidden: true,
    link: 'https://www.codechef.com/users/vinaysingh321'
  },
  {
    label: "Twitter",
    isHidden: true,
    color: "white",
    size: 24,
    icon: AiOutlineTwitter,
    link: ''
  },
  {
    label: "Leetcode",
    color: "white",
    size: 24,
    icon: SiLeetcode,
    link: 'https://leetcode.com/u/vinayaksingh920/'
  },
];
