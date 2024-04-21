import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className={inter.className}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">IlliniFli</a>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/aboutus">About Us</a>
              </li>

            </ul>
          </nav>
          <div>


            <main>
              {children}
            </main>


          </div>
          <footer className="footer bg-light text-center text-lg-start" style={{position:"relative"}}>
            <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
              <a className="text-dark" href="/aboutus">About Us</ a> |
            </div>
          </footer>
        </div>
      </body>
    </html>

  );
}
