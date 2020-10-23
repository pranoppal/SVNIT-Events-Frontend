import React from 'react'

export const EventDetail = React.lazy( ()=> import('./events/eventDetail/EventDetail'))
export const Events = React.lazy(() => import('./events/Events'))
export const Notifications = React.lazy( () => import('./events/notifications/Notifications'))
export const Clubs = React.lazy( () => import('./clubs/Clubs'))