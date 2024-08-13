import React from "react";

const PasswordResetEmail = ({ firstName, url }) => {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Password Reset Request</title>
        <style>
          {`
            /* Add your email styles here */
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
            .container {
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              padding: 20px;
              border-radius: 4px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .btn-primary {
              display: inline-block;
              padding: 12px 20px;
              font-size: 16px;
              font-weight: bold;
              color: #ffffff;
              background-color: #007bff;
              text-decoration: none;
              border-radius: 4px;
            }
            .btn-primary:hover {
              background-color: #0056b3;
            }
          `}
        </style>
      </head>
      <body>
        <table
          className="container"
          role="presentation"
          border="0"
          cellpadding="0"
          cellspacing="0"
        >
          <tbody>
            <tr>
              <td>
                <p>Hi {firstName},</p>
                <p>
                  Forgot your password? Submit a PATCH request to your new
                  password and passwordConfirm to {url}.
                </p>
                <p>(Website for this action not yet implemented)</p>
                <table
                  className="btn btn-primary"
                  role="presentation"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                >
                  <tbody>
                    <tr>
                      <td align="left">
                        <table
                          role="presentation"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                        >
                          <tbody>
                            <tr>
                              <td>
                                <a
                                  href={url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Reset Your Password
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  If you didn't forget your password, please ignore this email!
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
};

export default PasswordResetEmail;
