import { Router } from 'express';

import {
    getSubscribedChannels,
    getUserChannelSubscribers,
    toggleSubscription,
} from "../controllers/subscription.controller.js"

import { verifyJWT } from "../middlewares/auth.middleware.js"

const router = Router()

router.use(verifyJWT)


// subscribe / unsubscribe
router.route("/c/:channelId")
.post(toggleSubscription)


// get subscribers of a channel
router.route("/c/:channelId")
.get(getUserChannelSubscribers)


// get channels subscribed by user
router.route("/u/:subscriberId")
.get(getSubscribedChannels)


export default router
