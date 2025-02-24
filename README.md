
# Fetch Last Email and Print Body (IMAP)

This Node.js script connects to an IMAP server, fetches the most recent email from the inbox, and prints the email's body content. It uses the `imap-simple` and `mailparser` libraries for communication with the email server and parsing the email body.

## Prerequisites

- Node.js (v12 or higher)
- An email account that supports IMAP (e.g., Gmail, Yahoo, etc.)
- `.env` file for configuration

### Libraries Used
- `imap-simple`: For connecting to and interacting with an IMAP email server.
- `mailparser`: For parsing email bodies.
- `dotenv`: For managing environment variables securely.

## Installation

1. Clone the repository (if applicable):

   ```bash
   git clone https://github.com/MrdjanMrksic/fetch-email-body.git
   ```

2. Navigate to the project directory:

   ```bash
   cd fetch-email-body
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

## Configuration

Altho the .env file is provided, you can use your own .env file or edit the one provided.
If you choose to use your own, before running the script, create a `.env` file in the project root directory with the following contents:

```
IMAP_USER=your-email@example.com
IMAP_PASSWORD=your-email-password
IMAP_HOST=imap.example.com
IMAP_PORT=993
```

Replace the placeholder values with your actual email account details. For Gmail, use:
- `IMAP_HOST=gmail.com`
- `IMAP_PORT=993`

**For Gmail users:**
- IMAP access should be enabled by default, but it is necessary to generate and use App password for the code to run.

## Usage

Run the script using Node.js:

```bash
npm start
```

The script will connect to the IMAP server, fetch the most recent email in your inbox, and print the subject, sender, and body content to the console.

### Example Output:

```
Hi there,

Just a reminder about the meeting tomorrow at 10 AM.

Best,
John
```

## Notes

- The script assumes the email body is in plain text or HTML format. If the body is in a different format, it may not be properly parsed.
- If you're using Gmail, ensure IMAP is enabled in your Gmail settings. It should be enabled by default, but that might change in the future.
