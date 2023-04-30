import { DateTime } from "luxon";

export default class UtilsStaticService {
    public static verifyLimitTime(limitTime: DateTime, nowTime: DateTime, additionalMinutesInLimitTime: number = 0) {
        const timeLimitAddedAdditionalMinutes = limitTime.plus({ minutes: additionalMinutesInLimitTime })
        if (nowTime >= timeLimitAddedAdditionalMinutes) {
            //todo criar exception
            throw new Error('Tempo limite foi ultrapassado')
        }
    }
}