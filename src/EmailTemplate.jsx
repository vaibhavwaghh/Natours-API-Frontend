import React from "react";

// Email template adapted from https://github.com/leemunroe/responsive-html-email-template
// Converted from HTML using https://html2pug.now.sh/

const EmailTemplate = ({ subject, content }) => (
  <html>
    <head>
      <meta name="viewport" content="width=device-width" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>{subject}</title>
      <style>
        {/* You can include your CSS styles here or import a stylesheet */}
      </style>
    </head>
    <body>
      <table
        className="body"
        role="presentation"
        border="0"
        cellPadding="0"
        cellSpacing="0"
      >
        <tbody>
          <tr>
            <td></td>
            <td className="container">
              <div className="content">
                {/* START CENTERED WHITE CONTAINER */}
                <table className="main" role="presentation">
                  {/* START MAIN AREA */}
                  <tbody>
                    <tr>
                      <td className="wrapper">
                        <table
                          role="presentation"
                          border="0"
                          cellPadding="0"
                          cellSpacing="0"
                        >
                          <tbody>
                            <tr>
                              <td>
                                {/* CONTENT */}
                                {content}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* START FOOTER */}
                <div className="footer">
                  <table
                    role="presentation"
                    border="0"
                    cellPadding="0"
                    cellSpacing="0"
                  >
                    <tbody>
                      <tr>
                        <td className="content-block">
                          <span className="apple-link">
                            Natours Inc, 123 Nowhere Road, San Francisco CA
                            99999
                          </span>
                          <br />
                          Don't like these emails? <a href="#">Unsubscribe</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </body>
  </html>
);

export default EmailTemplate;
