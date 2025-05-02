'use server'

import { cookies } from 'next/headers';

const BANNER_COOKIE_NAME = 'promo_banner';

export const getInitialVisibility = async (publishTime: string, currentTitle?: string, promoBannerType?: string) => {

    const cookieStore = await cookies()

    const promoBannerCookie = cookieStore?.get(BANNER_COOKIE_NAME)

    const promoType = promoBannerType || 'default'




    const cookieData = promoBannerCookie?.value




    if (cookieData) {
        try {

            const bannerStates = JSON.parse(cookieData as string)




            if (promoType && bannerStates[promoType]) {

                const { dismissed, storedPublishTime, title } = bannerStates[promoType]



                return !(dismissed && storedPublishTime === publishTime && title === currentTitle)

            }

        } catch (error) {

            console.error('Error parsing banner cookie:', error) // eslint-disable-line no-console

            return true // Show banner if cookie is invalid

        }

    }



    return true // Show banner if no cookie is found

}