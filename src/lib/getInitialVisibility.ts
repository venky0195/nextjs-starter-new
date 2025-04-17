'use server'



import { cookies } from 'next/headers'



const BANNER_COOKIE_NAME = 'promo_banner';



export const getInitialVisibility = async (publishTime: string, currentTitle?: string, promoBannerType?: string) => {

const cookieStore = await cookies()

console.log('Cookie Store:', cookieStore) // eslint-disable-line no-console

const promoBannerCookie = cookieStore?.get(BANNER_COOKIE_NAME)

console.log('Promo Banner Cookie:', promoBannerCookie) // eslint-disable-line no-console

const promoType = promoBannerType || 'default'

console.log('promoBannerType -->:', promoBannerType) // eslint-disable-line no-console

console.log('Promo Type:', promoType) // eslint-disable-line no-console



const cookieData = promoBannerCookie?.value

console.log('Cookie Data:', cookieData) // eslint-disable-line no-console



if (cookieData) {

console.log('Cookie Data Exists:', cookieData) // eslint-disable-line no-console

try {

const bannerStates = JSON.parse(cookieData as string)

console.log('Parsed Banner States:', bannerStates) // eslint-disable-line no-console



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