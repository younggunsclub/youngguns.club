import React, { Fragment } from 'react'
import { NextComponentType } from "next";
import Head from "next/head";

// import { fluid } from '../lib/utils'

const Index: NextComponentType = () => {
  return (
    <Fragment>
      <Head>
        <title>Young Guns</title>
        <meta
          name="Description"
          content="Young Guns."
        />
      </Head>

      <div className="container">
        <h1>
          <div>Young</div>
          <div>Guns</div>
        </h1>
      </div>

      <style jsx>{`
        .container {
          left: 17vw;
          max-width: 45vw;
          position: relative;
          top: 17vh;
        }

        h1 {
          font-size: calc(56px + 160 * (100vw - 320px) / 1728);
          font-style: italic;
          font-weight: bold;
          line-height: 1;
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}</style>

      <style global jsx>{`
        body {
          background: #fff;
          color: #080808;
          font-family: system-ui, /* -apple-system, */ BlinkMacSystemFont,
            "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol";
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          transition: background 300ms ease-in-out;
        }

        @media (prefers-color-scheme: dark) {
          body {
            background: #181a1c;
            color: #fdfdfd;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Index
