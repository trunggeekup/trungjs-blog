import classnames from 'classnames';
import config from "@/lib/config";
import Twitter from "../assets/twitter-alt.svg";
import GitHub from "../assets/github-alt.svg";
import LinkedIn from "../assets/linkedin-alt.svg";
import Facebook from "../assets/facebook-f.svg";

const data = [
  {
    title: 'Facebook',
    href: `https://facebook.com/${config.facebook_account}`,
    Icon: Facebook
  },
  {
    title: 'LinkedIn',
    href: `https://linkedin.com/in/${config.linkedin_account}`,
    Icon: LinkedIn
  },
  {
    title: 'GitHub',
    href: `https://github.com/${config.github_account}`,
    Icon: GitHub
  },
  {
    title: 'Twitter',
    href: `https://twitter.com/${config.twitter_account}`,
    Icon: Twitter
  },
];

export function SocialList({ className = '' }) {
  return (
    <div className={classnames("flex gap-8", className)}>
      {
        data.map(social => (
          <a
            key={social.title}
            title={social.title}
            href={social.href}
            target="_blank"
            rel="noopener"
          >
            <social.Icon width={24} height={24} fill="currentColor" />
          </a>
        ))
      }
    </div>
  );
}
