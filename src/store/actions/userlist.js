import {LOAD_DATA, SHOW_PAGE} from "./types";


export function loadData(data) {
    return dispatch => dispatch({
        type: LOAD_DATA,
        payload: data
    })
}

export function showPage(page) {
    return dispatch => dispatch({
        type: SHOW_PAGE,
        payload: page
    })

}