import * as types from './actionTypes';
// when ready to hit real api just change this import to point
// to live api
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
    return {
        type: types.LOAD_COURSES_SUCCESS,
        courses
    };
}

/* THUNKS */
export function loadCourses() {
    /* wrapper for thunk - a function that returns a function
       to delay the run of dispatch until after courseApi promise
       is finished */
    return function(dispatch) {
        /* body of thunk */
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}