import stylesheet from "~/tailwind.css"
import type { LinksFunction } from "@remix-run/node";

import logo from '~/images/wyrt-logo.png'

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { Navbar } from "~/components/Navbar";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet }
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />

        <link rel="icon" href={logo} />

        <meta name="author" content="João Gilberto & Pietro Rhyan" />
        <meta name="keywords" content="website, browsergame, game, technology, development" />
        <meta name="description" content="Would You Rather Tech is a game where you decide which setence you most agree and see other people answers." />

        <Meta />
        <Links />
      </head>
      <body className="bg-bg text-white" >
        <Navbar />
        <Outlet />

        
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
