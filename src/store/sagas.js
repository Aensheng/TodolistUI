import { takeEvery, put } from 'redux-saga/effects'
import { InitListAction } from './actionCreator'
import axios from 'axios'

function* getInitList() {
    try {
        const res = yield axios.get('http://www.mocky.io/v2/5d1366370e00005349b4a568')
        const action = InitListAction(res.data)
        yield put(action)
    } catch(e) {
        console.log('request failed')
    }
}

//generate function
function* todoSagas() {
    yield takeEvery('get_init_list', getInitList)
}
  
export default todoSagas;