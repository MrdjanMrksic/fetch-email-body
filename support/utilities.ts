import { simpleParser } from 'mailparser';
import imaps from 'imap-simple';
import dotenv from 'dotenv';

dotenv.config(); // Loads variables from .env file

class Utilities {
    async fetchLastEmailBody() {
        const config = {
            imap: {
                user: String(process.env.IMAP_USER),
                password: String(process.env.IMAP_PASSWORD),
                host: String(process.env.IMAP_HOST),
                port: Number(process.env.IMAP_PORT),
                tls: true,
                tlsOptions: { rejectUnauthorized: false }, // <-- Ignore self-signed certificate errors
                authTimeout: 3000
            }
        };

        try {
            const connection = await imaps.connect(config);
            await connection.openBox('INBOX');

            const searchCriteria = ['1:*'];
            const fetchOptions = { bodies: [''], struct: true };
            const messages = await connection.search(searchCriteria, fetchOptions);

            if (messages.length > 0) {
                const lastMessage = messages[messages.length - 1];
                const all = lastMessage.parts.find(part => part.which === '');
                const parsed = await simpleParser(all?.body || '');

                console.log(parsed.text || parsed.html || "No body found");
            } else {
                console.log("No emails found.");
            }

            connection.end();
        } catch (err) {
            console.error("Error:", err);
        }
    }
}

export default new Utilities()