import produceData from '../mockData/produce.json';
const POPULATE = "produce/POPULATE"

export default function produceReducer(state = {}, action) {
    switch (action.type) {
        case POPULATE:
            const newObject = {}
            action.produce.forEach((produce)=>{
                newObject[produce.id]=produce;
            })
            return newObject;
        default:
            return state;

    }
}
// action creator
export function populateProduce() {

    return {
       type: POPULATE,
       produce: produceData
    }

}