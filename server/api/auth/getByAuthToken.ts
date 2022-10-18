import { IUser } from '~/types/IUser';
import { getUserBySessionToken } from '~~/server/services/sessionService'

export default defineEventHandler<IUser>(async (event) => {
    const authToken = getCookie(event.req, 'auth_token')

    // setCookie(event.req, 'auth_token', null)

    const user = await getUserBySessionToken(authToken)

    return user
})

/* import { IUser } from '~/types/IUser';
import { useCookie } from 'h3'
import { getUserBySessionToken } from '~~/server/services/sessionService'

export default defineEventHandler<IUser>(async (event) => {
    const authToken = useCookie(event.req, 'auth_token')
    const user = await getUserBySessionToken(authToken)

    return user
}) */