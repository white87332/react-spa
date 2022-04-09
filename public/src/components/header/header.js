import React from 'react';
import { Link } from "react-router-dom";

export default function Header()
{
    return (
        <header>
            <h1>Bookkeeper</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
              <Link to="/invoices">Invoices</Link> |{" "}
              <Link to="/expenses">Expenses</Link>
            </nav>
        </header>
    );
}
