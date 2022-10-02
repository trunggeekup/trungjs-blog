import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import classnames from 'classnames';
import Burger from "./Burger";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      <Burger className="lg:hidden" active={active} onClick={() => setActive(!active)} />
      <div className={classnames({ active })}>
        <ul className={classnames("lg:w-28", { "lg:flex hidden": !active, flex: active })}>
          <li>
            <Link href="/">
              <a className={router.pathname === "/" ? "active" : null}>about</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a className={classnames({ 'font-bold': router.pathname.startsWith("/posts") })}>
                blog
              </a>
            </Link>
          </li>
        </ul>
        <style jsx>
          {`
            ul {
              text-align: right;
              list-style: none;
              margin: 0;
              padding: 0;
              top: 0;
              background-color: #fff;
              flex-direction: column;
              justify-content: center;
              z-index: 1;
              transform: translateY(100%);
              transition: opacity 200ms;
            }
            .active ul {
              width: 100%;
              opacity: 1;
              transform: translateY(0);
              position: fixed;
              top: 0;
              bottom: 0;
            }
            li {
              margin-bottom: 1.75rem;
              font-size: 2rem;
              padding: 0 2rem 0 0;
            }
            li:last-child {
              margin-bottom: 0;
            }
            .active {
              color: var(--color-neutral-900);
            }

            @media (min-width: 769px) {
              ul {
                width: 7rem;
                top: auto;
                transform: translateY(0);
              }
              li {
                font-size: 1rem;
                padding: 0;
              }
            }
          `}
        </style>
      </div>
    </>
  );
}
