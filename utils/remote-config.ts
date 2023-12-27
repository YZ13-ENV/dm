'use client'

import { getRemoteConfig } from "firebase/remote-config";
import { app } from "./app";

export const remoteConfig = getRemoteConfig(app)
remoteConfig.settings.minimumFetchIntervalMillis = 3600000;