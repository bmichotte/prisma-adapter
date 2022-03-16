/* eslint-disable @next/next/no-server-import-in-page */
import { Role } from '@prisma/client'
import { withAuth } from 'next-auth/middleware'

export default withAuth({
    callbacks: {
        authorized: ({ token }) => {
            return true
        },
    },
})
