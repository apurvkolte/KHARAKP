import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: "860003330133-4lo989olsuvjun9hhf1krr6lcm3mb1mu.apps.googleusercontent.com",
            clientSecret: "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"
        })
    ]
})