import { Setting } from "@app/models/user";
import { ActionWithPayload } from "@app/redux/types";

import { SetSettings } from "../actions";

/**
 * Get redux action "Set user settings"
 * @param settings User settings
 * @returns Redux action to update state
 */
export const getSetSettingsAction = (settings: Array<Setting>): ActionWithPayload => ({
    type: SetSettings,
    payload: { settings },
});