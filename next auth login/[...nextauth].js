import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";

import connection from '../../../config/connection'
const crypto = require('crypto')
const util = require('util');


export default NextAuth({
    session: {
        jwt: true
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const { email, password } = credentials;
                var hash = crypto.createHash('md5').update(password).digest('hex');

                connection.getConnection((error) => {
                    if (error) throw error;
                    if (!error) {
                        console.log("Database is connected successfully...!");
                    }
                });

                const query = util.promisify(connection.query).bind(connection);

                const rows = await query(`select * from users where email='${email}' and password='${hash}';`);

                if (rows.length) {
                    const user = {
                        id: rows[0].id,
                        name: rows[0].name,
                        email: rows[0].email
                    }
                    return Promise.resolve(user)
                } else {
                    return null;
                }

            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }

            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.id = token.id;
            }

            return session;
        },
    },

})