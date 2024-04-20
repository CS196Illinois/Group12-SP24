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
        <a className="navbar-brand" href="#">IlliniFly</a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Plan <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Bus</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Flight</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/aboutus">Contact</a>
          </li>
        </ul>
      </nav>
      <div>

   
          <main>
          {children}
          </main>
        

      </div>
      <footer className="footer bg-light text-center text-lg-start">
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          <a className="text-dark" href=" ">About Us</ a> |
          <a className="text-dark" href="#">More</ a>
        </div>
      </footer>
    </div>
    </body>
    </html>

  );
}
