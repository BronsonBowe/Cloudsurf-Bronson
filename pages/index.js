import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { ImgBronson } from "../resources";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: "aquamarine", maxWidth: "" }}
    >
      <Image
        src={ImgBronson}
        style={{ width: 300, height: 300, borderRadius: 300 / 2 }}
      />
      <Button
        onClick={() => {
          router.push("/projects");
        }}
      >
        Projects
      </Button>
      <Button
        onClick={() => {
          router.push("/about");
        }}
      >
        About
      </Button>
      <Button
        onClick={() => {
          router.push("/contact");
        }}
      >
        Contact
      </Button>
      <main>
        <h1 className={styles.title}>Bronson Bowe</h1>
        <p style={{ fontSize: 35 }}>Software Engineer</p>
        <p className={styles.description}>
          Results driven professional aiming to leverage proven project
          management, process analysis and interpersonal skills to help foster a
          productive team environment.
        </p>
        <p style={{ fontSize: 30 }}>Experience</p>
        <p style={{ fontSize: 22, fontStyle: "italic" }}>Hub Cap Annie</p>
        <p style={{ fontSize: 18, textAlign: "center" }}>
          July 2020 to September 2023 <br />
          April 2024 to Present
        </p>
        <p style={{ fontSize: 16 }}>
          Account Manager <br />
          - Assisted in the creation and execution of an online sales account
          that resulted in a 15% increase in incremental revenue in the first 30
          days. <br />
          - Cultivated relationships with local accounts which added $100,000 in
          annual revenue. <br />- Oversaw the logistics for all wholesale
          accounts, which accounted for 30% of yearly revenue.
        </p>
        <p style={{ fontSize: 22, fontStyle: "italic" }}>
          Brightview Landscapes
        </p>
        <p style={{ fontSize: 18 }}>September 2023 to March 2024</p>
        <p style={{ fontSize: 16 }}>
          Assistant Project Manager <br />
          - Supported Project Managers by streamlining processes on jobs ranging
          from $50,000 to over $4.0 Million. <br />
          - Strengthened communication channels, both internally and externally,
          to optimize productivity and efficiency/satisfaction ratings from our
          clients. <br />
          - Assisted in comprehensive project planning, which included outlining
          timelines, resource requirements, and budgetary constraints.
          <br />- Audited backlogged projects alongside the accounting
          department and senior leadership to account for over $1.5 Million in
          billing discrepancies.
        </p>
        <p style={{ fontSize: 22, fontStyle: "italic" }}>Diamond Resorts</p>
        <p style={{ fontSize: 18 }}>July 2019 to July 2020</p>
        <p style={{ fontSize: 16 }}>
          Executive Assistant <br />
          - Managed all scheduling and communications for the VP of Global Sales
          and Marketing. <br />
          - Assisted in the creation and execution of a Q4 sales and marketing
          promotion that resulted in 300% year-over-year growth. <br />-
          Traveled to international locations to foster business relationships
          both internally and externally.
        </p>
        <p style={{ fontSize: 30 }}>Education</p>
        <p style={{ fontSize: 22, fontStyle: "italic" }}>
          Middle Tennessee State University
        </p>
        <p style={{ fontSize: 18 }}>Class of 2018</p>
        <p style={{ fontSize: 16 }}>
          Bachelors in Business Administration <br />
          Murfreesboro, TN <br />
          Minor: Economics and Finance <br />
          - Assisted in the creation and execution of a Q4 sales and marketing
          promotion that resulted in 300% year-over-year growth. <br />-
          Traveled to international locations to foster business relationships
          both internally and externally.
        </p>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
